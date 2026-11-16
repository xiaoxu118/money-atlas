import { test, expect } from '@playwright/test';

test('知识与金额对照无需 JavaScript，所有阶段直接可见', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('/knowledge/macro/money/');
  await expect(page.locator('#money-creation')).toContainText(
    '偿还本金 1,000 元',
  );
  await expect(page.locator('#money-creation')).toContainText('7,100');
  await page.goto('/knowledge/macro/interest-rates/');
  await expect(page.locator('#interest-rates')).toContainText('¥300.00');
  await expect(page.locator('#interest-rates')).toContainText('¥600.00');
  await page.goto('/knowledge/macro/inflation/');
  await expect(page.locator('#purchasing-power')).toContainText('¥74.41');
  await context.close();
});

test('页面无更新时间、实验入口或操作控件，表头正文对齐', async ({ page }) => {
  for (const width of [1440, 375]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of [
      '/',
      '/knowledge/',
      '/knowledge/macro/money/',
      '/knowledge/macro/settlement/',
      '/knowledge/macro/production/',
      '/knowledge/macro/interest-rates/',
      '/knowledge/macro/inflation/',
      '/knowledge/macro/policy/',
      '/knowledge/macro/case/',
      '/concepts/',
    ]) {
      await page.goto(path);
      await expect(page.locator('body')).not.toContainText(
        /更新于|更新时间|整理于|交互实验|重置实验|下一步|播放|重播|课程|学习路线/,
      );
      await expect(page.locator('button')).toHaveCount(0);
      await expect(page.getByRole('slider')).toHaveCount(0);
      await expect(page.locator('a[href="/labs/"]')).toHaveCount(0);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
      expect(
        await page
          .locator('table th, table td')
          .evaluateAll((cells) =>
            cells.every(
              (c) =>
                getComputedStyle(c).textAlign === 'left' &&
                getComputedStyle(c).verticalAlign === 'top',
            ),
          ),
      ).toBe(true);
    }
  }
});

test('概念筛选与相关主题可直接访问', async ({ page }) => {
  await page.goto('/concepts/');
  await page.getByRole('searchbox').fill('净财富');
  await expect(page.locator('[data-concept]:visible')).toHaveCount(1);
  await page.getByRole('link', { name: /净财富/ }).click();
  await page
    .getByRole('link', { name: '商业银行货币创造与资产负债表扩张 →' })
    .click();
  await expect(page).toHaveURL(/knowledge\/macro\/money\/$/);
});

test('旧入口与锚点指向静态知识图解', async ({ page }) => {
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
  await page.goto('/learn/macro/money/#money-creation');
  await expect(page).toHaveURL(/knowledge\/macro\/money\/#money-creation$/);
  await page.goto('/labs/');
  await expect(page).toHaveURL(/\/knowledge\/$/);
});

test('知识导航紧凑列出64个主题，点击后显示独立图解正文', async ({ page }) => {
  await page.goto('/knowledge/');
  await expect(page.locator('.directory-group li a')).toHaveCount(64);
  await expect(page.locator('figure')).toHaveCount(0);
  await page
    .getByRole('link', {
      name: '商业银行货币创造与资产负债表扩张',
      exact: true,
    })
    .click();
  await expect(page).toHaveURL(/knowledge\/macro\/money\/$/);
  await expect(page.locator('.directory-group')).toHaveCount(0);
  await expect(
    page.locator('.prose > figure').first().getByRole('img'),
  ).toBeVisible();
});
test('全部主题先有可读图片，再有说明，两个模块可直接访问', async ({ page }) => {
  const { topicPlan } = await import('../../src/data/content-map');
  for (const width of [1440, 375]) {
    await page.setViewportSize({ width, height: 900 });
    for (const topic of topicPlan) {
      const response = await page.goto(
        `/knowledge/${topic.module}/${topic.slug}/`,
      );
      expect(response?.status()).toBe(200);
      const figure = page.locator('.prose > figure').first();
      await expect(figure).toBeVisible();
      const pictures = figure.getByRole('img');
      expect(await pictures.count()).toBeGreaterThan(0);
      expect(
        await figure.evaluate((el) => {
          const heading = el.parentElement?.querySelector(':scope > h2');
          return (
            !!heading &&
            !!(
              el.compareDocumentPosition(heading) &
              Node.DOCUMENT_POSITION_FOLLOWING
            )
          );
        }),
      ).toBe(true);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      await expect(page.locator('button')).toHaveCount(0);
    }
  }
  await page.goto('/knowledge/macro/interest-rates/');
  await page
    .getByRole('link', { name: '债券现金流、到期收益率与价格敏感性 →' })
    .click();
  await expect(page).toHaveURL(/knowledge\/investing\/bonds\/$/);
});

test('三级侧栏突出当前位置，分组可以展开并跳到投资主题', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/knowledge/macro/money/');
  const nav = page.locator('.reading-sidebar .content-tree');
  await expect(nav.locator('.tree-module[open] > summary')).toContainText(
    '金融原理',
  );
  await expect(nav.locator('.tree-group[open] > summary')).toHaveText(
    '货币与账户',
  );
  await expect(nav.locator('a[aria-current=page]')).toHaveText('货币创造');
  const investing = nav
    .locator('.tree-module')
    .filter({ has: page.locator(':scope > summary', { hasText: '投资' }) });
  await investing.locator(':scope > summary').click();
  const assets = investing
    .locator('.tree-group')
    .filter({ has: page.locator(':scope > summary', { hasText: '资产类别' }) });
  await assets.locator(':scope > summary').click();
  await assets
    .getByRole('link', { name: '期权', exact: true })
    .click();
  await expect(page).toHaveURL(/knowledge\/investing\/options\/$/);
  await page.setViewportSize({ width: 375, height: 812 });
  await expect(page.locator('.mobile-content-tree')).toBeVisible();
  await expect(page.locator('.mobile-content-tree')).not.toHaveAttribute(
    'open',
    '',
  );
  await page.locator('.mobile-content-tree > summary').click();
  await expect(
    page.locator('.mobile-content-tree a[aria-current=page]'),
  ).toBeVisible();
});
