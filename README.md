# 钱图 Money Atlas

用图表解释金融机制与投资分析。站点按主题自由查阅，内容围绕资产负债表、现金流、定价、传导与风险展开。

当前涵盖 64 篇主题：金融原理 30 篇、投资 34 篇，分为 15 组；151 个概念提供双向关联。知识导航使用紧凑目录，主题页先展示 SVG 图解，再给出分析、情景和边界。左侧目录按板块、分组、主题三级组织。

## 本地开发

使用 Node.js 22.17.0（`.nvmrc` 与 CI 同步）。Astro 的间接依赖 unifont 固定为兼容版本 0.7.4。

```sh
npm ci
npm run dev
```

通过终端给出的本地地址访问。

```sh
npm run check
npm test
npm run build
npx playwright install chromium
npm run test:e2e
# 使用本机已安装的 Chrome：
PLAYWRIGHT_CHANNEL=chrome npm run test:e2e
npm run preview
```

部署目录为 `dist/`。设置真实 `SITE_URL` 后构建可生成 canonical 和站点地图；未设置时省略域名相关输出。

## 在网页上编辑文字

运行 `npm run dev` 后，打开页面，点击右下角“编辑页面”，再点击正文中的虚线文字框直接修改。点击“保存”写入项目，点击“取消”放弃本次修改。编辑期间正文链接不会跳转；关闭页面时，未保存修改会触发提醒。

保存结果位于 `public/page-edits.json`，按页面独立记录，刷新和重新启动后仍可读取，并随构建发布。编辑入口及保存接口仅在本地开发模式提供。发布后的页面通过 JavaScript 读取这些文字修订；禁用 JavaScript 时显示原始正文。此功能修改显示文字，不回写 MDX、不修改链接地址、图表结构或金融计算；同一概念在其他页面的文字也不会自动同步。

若之后调整了原始正文或页面结构，对应修订仅在原始文字和位置都匹配时应用，避免覆盖错误内容。可以在项目中查看、提交该 JSON 文件，或删除某一页的记录以恢复原始内容。

## 内容结构

- [内容大纲](docs/outline.md)：主题范围、分组与编辑深度要求。
- `src/data/content-map.ts`：两个板块、15 个分组、64 个主题和跨板块关联。
- `src/content/topics/macro/`：金融原理正文。
- `src/content/topics/investing/`：投资正文。
- `src/data/concepts.ts`：151 个概念定义及关联主题。
- `src/components/diagrams/`：响应式静态 SVG、曲线与账目对照表。
- `src/models/`：金融模型及图表的固定情景数据，不依赖浏览器。
- `src/components/navigation/`：紧凑导航与三级目录。
- `src/lib/topics.ts`：内容、大纲、分组、概念和关联引用校验。

每篇 MDX 保留唯一 ID、module、slug、title、navTitle、group、summary、concepts、displayOrder、status、sources。标题直接指出分析对象，避免启蒙式问题；navTitle 是左侧目录使用的短标签。图解放在正文说明之前，定量图标明单位和假设。草稿不生成主题路由，显示顺序不代表阅读要求。

## 页面入口

- 首页分类入口直接进入带分层目录的正文页。
- `/knowledge/`、`/knowledge/macro/`：兼容旧链接，直接跳转正文；旧分类锚点跳转对应分类首篇。
- `/knowledge/investing/`：兼容旧链接，直接进入投资正文。
- `/knowledge/[module]/[slug]/`：独立图解与分析。
- 概念解释并入每篇正文的概念速查，支持原页搜索；旧概念地址自动定位到正文解释。

旧 HTML 与原七篇 `/learn/macro/` 地址保留片段兼容跳转；`/labs/` 跳转至知识导航。历史地址不进入站点地图。原项目快照保留在 `public/archive/prototype/`，不作为正式内容入口。

当前站点无课程、完成记录、实验、播放或重置控件，不读取写入旧进度，不显示更新时间。全部图解与正文在构建时输出，无 JavaScript 也能阅读；概念筛选与目录折叠分别使用轻量脚本和原生 HTML。

[架构说明](docs/architecture.md)与[实施记录](docs/migration.md)记录实现和验证。数字均为条件明确的简化情景，不推荐具体产品或预测价格；来源中的地区制度不自动适用于其他地区。
