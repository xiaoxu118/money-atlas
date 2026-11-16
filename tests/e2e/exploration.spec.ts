import { test, expect } from '@playwright/test';
test('静态正文与默认实验在关闭 JavaScript 时可读', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('/knowledge/macro/interest-rates/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('利率');
  await expect(page.getByTestId('interest')).toHaveText('¥300.00');
  await expect(
    page.getByRole('heading', { name: '模型边界', exact: true }),
  ).toBeVisible();
  await context.close();
});
test('键盘连续输入即时更新，实验可独立重置', async ({ page }) => {
  await page.goto('/knowledge/macro/interest-rates/');
  await page.locator('#interest-rates').scrollIntoViewIfNeeded();
  const slider = page.getByRole('slider', { name: /示例贷款年利率/ });
  await expect(slider).toBeVisible();
  await slider.focus();
  await slider.press('End');
  await expect(page.getByTestId('interest')).toHaveText('¥1,000.00');
  await slider.press('Home');
  await expect(page.getByTestId('interest')).toHaveText('¥0.00');
  await page.getByRole('button', { name: '重置实验', exact: true }).click();
  await expect(page.getByTestId('interest')).toHaveText('¥300.00');
});
test('记账仅手动切换步骤并支持重置', async ({ page }) => {
  await page.goto('/knowledge/macro/money/#money-creation');
  const experiment = page.locator('#money-creation');
  await expect(
    experiment.getByRole('button', { name: /播放|暂停|重播/ }),
  ).toHaveCount(0);
  await expect(
    experiment.getByRole('button', { name: '上一步', exact: true }),
  ).toBeDisabled();
  await experiment.getByRole('button', { name: '下一步', exact: true }).click();
  await expect(experiment).toContainText('第 2 / 5 步');
  await expect(experiment.locator('table')).toContainText('¥10,000.00');
  await page.clock.install();
  await page.clock.fastForward(10000);
  await expect(experiment).toContainText('第 2 / 5 步');
  await experiment.getByRole('button', { name: '上一步', exact: true }).click();
  await expect(experiment).toContainText('第 1 / 5 步');
  await experiment.getByRole('button', { name: '下一步', exact: true }).click();
  await experiment
    .getByRole('button', { name: '重置实验', exact: true })
    .click();
  await expect(experiment).toContainText('第 1 / 5 步');
});
test('旧存储不影响浏览，移动端与减少动态效果可用', async ({ page }) => {
  await page.addInitScript(() =>
    localStorage.setItem('touzi-lab:progress:v1', 'broken'),
  );
  await page.setViewportSize({ width: 375, height: 812 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const path of [
    '/',
    '/knowledge/macro/money/',
    '/knowledge/macro/interest-rates/',
    '/knowledge/macro/inflation/',
    '/concepts/',
    '/labs/',
  ]) {
    await page.goto(path);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
  expect(
    await page.evaluate(() => localStorage.getItem('touzi-lab:progress:v1')),
  ).toBe('broken');
  await page.goto('/knowledge/macro/money/#money-creation');
  await page
    .locator('#money-creation')
    .getByRole('button', { name: '下一步', exact: true })
    .click();
  await expect(page.locator('#money-creation')).toContainText('第 2 / 5 步');
});
test('旧入口与七个深层锚点映射', async ({ page }) => {
  const targets = [
    'money/',
    'money/#money-creation',
    'settlement/',
    'production/',
    'interest-rates/#interest-rates',
    'inflation/',
    'case/',
  ];
  for (let i = 0; i < targets.length; i++) {
    await page.goto(`/financial-basics.html#step${i + 1}`);
    await expect(page).toHaveURL(
      'http://127.0.0.1:4321/knowledge/macro/' + targets[i],
    );
  }
  for (const path of ['rates.html', 'interest-rate.html']) {
    await page.goto('/' + path);
    await expect(page).toHaveURL(/\/knowledge\/macro\/interest-rates\/$/);
  }
});

test('知识入口支持自由查阅，没有课程或进度设计', async ({ page }) => {
  for (const path of [
    '/',
    '/knowledge/',
    '/knowledge/macro/',
    '/knowledge/macro/interest-rates/',
    '/concepts/',
    '/labs/',
  ]) {
    await page.goto(path);
    await expect(page.locator('body')).not.toContainText(
      /学习路线|课程|前置知识|标记完成|检验理解|学习目标|下一课|第一课|待学习|分钟/,
    );
    await expect(page.locator('.progress-panel, .quiz')).toHaveCount(0);
    await expect(page.locator('a[href^="/learn/"]')).toHaveCount(0);
  }
  await page.goto('/concepts/');
  await page.getByRole('searchbox').fill('净财富');
  await expect(page.locator('[data-concept]:visible')).toHaveCount(1);
  await page.getByRole('link', { name: /净财富/ }).click();
  await page.getByRole('link', { name: '货币与净财富 →' }).click();
  await expect(page).toHaveURL(/knowledge\/macro\/money\/$/);
});
test('之前的 learn 地址保留兼容并保留实验锚点', async ({ page }) => {
  await page.goto('/learn/');
  await expect(page).toHaveURL(/\/knowledge\/$/);
  await page.goto('/learn/macro/');
  await expect(page).toHaveURL(/\/knowledge\/macro\/$/);
  await page.goto('/learn/macro/money/#money-creation');
  await expect(page).toHaveURL(/\/knowledge\/macro\/money\/#money-creation$/);
});
