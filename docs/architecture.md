# 钱图：金融机制与投资分析架构

## 内容与呈现

以本地 [outline](outline.md) 为内容范围，完整覆盖金融原理 30 篇、投资 34 篇，共 15 组；151 个概念连接两大板块。

知识导航提供紧凑的分组链接，详情页承载完整图解与分析。正文采用“核心图解 → 机制与口径 → 情景核对 → 进一步分析 → 边界”的组织方式。标题直接描述分析对象，不使用启蒙式设问或低密度常识铺垫。

桌面侧栏按“板块 → 分组 → 主题”三级组织，默认展开当前板块与分组，高亮当前主题。分组可以独立折叠，目录在视区内滚动。手机将目录收进独立的原生折叠面板，避免目录先占满正文。

## 技术与依赖方向

Astro 静态生成，MDX Content Collections 管理正文，TypeScript 管理类型和金融计算，Tailwind 与 CSS 变量维护样式。无 React、水合和实验状态。仅概念筛选使用少量脚本，目录使用 HTML details/summary。

依赖方向为页面与内容组合图表组件，图表组件调用纯模型或固定情景数据。模型不读取 DOM、存储或浏览器对象。

```text
src/pages/knowledge/[module]/[slug].astro # 两个板块共享的静态主题路由
src/content/topics/{macro,investing}/    # 64 篇独立 MDX
src/data/content-map.ts                 # 板块、分组、大纲和跨板块衔接
src/data/concepts.ts                    # 151 个术语定义及引用
src/data/topic-links.ts                 # 根据 module/slug 生成地址
src/components/navigation/              # 导航入口、板块目录与三级侧栏
src/components/diagrams/                # 静态 SVG、曲线、账目表
src/models/                            # 公式与固定绘图情景
src/lib/                               # 内容和引用校验
```

Node 基线为 22.17.0，`.nvmrc` 与 CI 同步，锁文件固定依赖。当前无需后端、账户、数据库或实时行情。

## 内容校验

主题 schema 包含稳定 ID、slug、module、group、title、navTitle、summary、displayOrder、concepts、status 和 sources。navTitle 用于左侧分层目录的短标签，完整 title 仍用于页面标题与其他列表。没有更新时间、学习时长、前置门槛或进度字段。

构建检查主题 ID、路径、分组与大纲一致，概念与关联引用有效，来源为 HTTPS，草稿不发布。测试逐项核对 64 篇覆盖、151 个概念双向关系，以及每篇图解位于解释之前。构建后检查所有内部链接和锚点。

## 图表要求

- 静态 SVG 带语义名称和说明，手机使用适配版式；曲线有可读标签、图例和单位。
- 连续数值横轴按真实数值间距绘制，不把不等距期限或执行价格画成等距。
- 实物流与支付流、不同数据线用文字与线型共同区分。
- 图示说明资本、信用、结算与估值等约束，机制箭头不表示无条件因果。
- 表格统一左对齐与顶部对齐，保证手机无横向溢出。
- 公式、计息和扣费时点、币种与期限明确；情景回报不是预测。
- 法律、税费和交易制度说明范围，不将单一地区规则写成普遍适用。

## 路由与部署

主要路径为 `/knowledge/`、`/knowledge/macro/`、`/knowledge/investing/`、`/knowledge/[module]/[slug]/`、`/concepts/` 与 `/concepts/[id]/`。

旧 HTML 与七篇原 `/learn/macro/` 地址保留兼容，`/labs/` 指向知识导航；兼容地址排除在站点地图外。历史源码保留在 `public/archive/prototype/`。

输出目录为 `dist/`，真实生产域名通过 `SITE_URL` 配置后生成 canonical 与 sitemap。CI 执行锁文件安装、类型、模型和内容测试、构建、内部链接及浏览器验证。当前未部署。
