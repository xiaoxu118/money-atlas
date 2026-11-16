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

- `/knowledge/`：全部知识导航。
- `/knowledge/macro/`：金融原理目录。
- `/knowledge/investing/`：投资目录。
- `/knowledge/[module]/[slug]/`：独立图解与分析。
- `/concepts/`：可筛选的概念索引。

旧 HTML 与原七篇 `/learn/macro/` 地址保留片段兼容跳转；`/labs/` 跳转至知识导航。历史地址不进入站点地图。原项目快照保留在 `public/archive/prototype/`，不作为正式内容入口。

当前站点无课程、完成记录、实验、播放或重置控件，不读取写入旧进度，不显示更新时间。全部图解与正文在构建时输出，无 JavaScript 也能阅读；概念筛选与目录折叠分别使用轻量脚本和原生 HTML。

[架构说明](docs/architecture.md)与[实施记录](docs/migration.md)记录实现和验证。数字均为条件明确的简化情景，不推荐具体产品或预测价格；来源中的地区制度不自动适用于其他地区。
