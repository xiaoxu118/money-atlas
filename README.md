# 钱图 · Money Atlas

钱图取“钱的图解”之意，也读作“前途”；英文名 Money Atlas，取“钱的图集”，一句话说明是 See how money works。以知识查阅与交互探索为核心的金融知识网站，使用 Astro 静态生成、React 交互岛屿、TypeScript 和 MDX。

## 本地开发

基线为 Node.js 22.17.0（见 `.nvmrc`），CI 使用相同版本。Astro 间接依赖 `unifont` 固定为兼容的 0.7.4。

```sh
npm ci
npm run dev
```

通过终端显示的本地地址访问。

```sh
npm run check       # Astro / TypeScript
npm test           # 金融模型与内容校验
npm run build      # 静态构建 + 内部链接和锚点检查
npx playwright install chromium
npm run test:e2e   # 独立浏览、实验操作、兼容链接、移动端
# 使用已安装的 Chrome：PLAYWRIGHT_CHANNEL=chrome npm run test:e2e
npm run preview    # 查看 dist/ 产物
```

部署目录为 `dist/`。设置真实 `SITE_URL` 后构建以生成 canonical 和站点地图；未设置时省略域名相关输出。路由统一使用尾斜杠。

## 内容与代码

- `src/content/topics/macro/`：七篇独立的宏观知识说明，含资料来源。
- `src/content.config.ts`：主题元数据 schema；`src/lib/topics.ts` 校验内容和索引引用，仅输出 published 内容。
- `src/experiments/`：记账、利率与购买力三个独立实验，按需加载。
- `src/models/`：不依赖 React、DOM 或存储的纯计算。
- `src/components/`：主题导航、模型说明、实验步骤控制与基础控件。
- `src/data/`：概念定义、关联主题、实验索引与链接工具。
- `public/archive/prototype/`：原始项目快照，保留作历史参考。

新增主题时编写 MDX，设定唯一 ID、slug、摘要、概念引用和来源。`displayOrder` 仅影响列表展示位置；主题可独立打开，没有先后阅读要求。草稿设为 `status: draft`；模型公式实现放在 `src/models/`。

## 页面入口

- `/knowledge/`：知识图解。
- `/knowledge/macro/`：宏观主题。
- `/knowledge/macro/[slug]/`：独立主题与相关实验。
- `/concepts/`：可筛选的概念索引。
- `/labs/`：实验入口。

旧 HTML 入口、七个章节锚点及此前的 `/learn/` 地址保留兼容跳转，不出现在主导航或知识索引中。无 JavaScript 时提供可点击的目标链接。

当前站点不读取或写入旧进度数据；浏览器中已有的历史键原样保留。动态效果遵循系统的减少动态效果设置。

内容规划见[内容大纲](docs/outline.md)；[架构说明](docs/architecture.md)与[实施记录](docs/migration.md)记录当前结构与验证情况。所有数字均为简化示例，机制情景明确条件与时滞，不提供虚构的精确预测。
