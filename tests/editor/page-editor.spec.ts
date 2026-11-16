import { test, expect } from '@playwright/test';
import { readFile, writeFile } from 'node:fs/promises';

test('点击编辑、取消、保存到文件、刷新保留，并拒绝其他来源写入', async ({
  page,
  request,
}) => {
  const file = 'public/page-edits.json';
  const before = await readFile(file, 'utf8');
  try {
    await page.goto('/');
    await expect(page.getByRole('button', { name: '编辑页面' })).toBeVisible();
    await page.getByRole('button', { name: '编辑页面' }).click();
    const title = page.locator('h1 [data-editable-text]').first();
    const original = await title.textContent();
    await title.fill('取消测试文字');
    await page.getByRole('button', { name: '取消', exact: true }).click();
    await expect(page.locator('main h1')).not.toContainText('取消测试文字');
    await page.getByRole('button', { name: '编辑页面' }).click();
    await title.fill('网页直接编辑验证');
    await page.getByRole('button', { name: '保存', exact: true }).click();
    await expect(page.getByRole('status')).toHaveText('已保存到项目');
    const data = JSON.parse(await readFile(file, 'utf8'));
    expect(
      data['/'].some(
        (edit: { text: string }) => edit.text.trim() === '网页直接编辑验证',
      ),
    ).toBe(true);
    await page.reload();
    await expect(page.locator('main h1')).toContainText('网页直接编辑验证');
    const rejected = await request.post('/__page-editor/save', {
      headers: { Origin: 'https://other.example' },
      data: { path: '/', edits: [], previous: data['/'] },
    });
    expect(rejected.status()).toBe(403);
    await page.getByRole('button', { name: '编辑页面' }).click();
    await title.fill(original!);
    await page.getByRole('button', { name: '保存', exact: true }).click();
    await expect(page.getByRole('status')).toHaveText('已保存到项目');
  } finally {
    await writeFile(file, before);
  }
});
