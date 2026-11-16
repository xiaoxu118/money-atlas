# 钱图内容规划

金融原理与投资两部分合并成一份总览。定位：用图表把金融知识讲清楚，先理解，再做判断。站点按主题自由查阅，本文只用于组织素材和排期，不代表阅读顺序，也不设前置要求。

## 现状

- 已发布 64 篇主题：金融原理 30 篇、投资 34 篇，共 15 个分组。
- 已建立 151 个概念定义及双向主题关联，全部主题先展示 SVG 图解再给出分析。
- 导航入口采用紧凑目录；详情页按“板块 → 分组 → 主题”组织侧栏。

## 约定

- 一篇主题围绕明确的机制或分析对象展开，使用专业且具体的标题，移除启蒙式设问与浅层常识铺垫。
- 成对概念合并：加息/降息、通胀/通缩、名义/实际、单利/复利。
- 术语进概念索引；概念索引维护准确简明的定义，正文展开机制、条件与边界。
- 主题 id = 模块前缀 + slug：`macro-<slug>`、`investing-<slug>`。
- 本次全部主题均已发布；层级字段仅为编辑组织元数据，不是站内学习顺序。
- 不推荐产品、不承诺收益、不预测价格；数字为教学示例，来源必填。

## 内容地图

| 板块     | 分组        | 篇数 | 负责回答                       |
| -------- | ----------- | ---- | ------------------------------ |
| 金融原理 | 8 组 + 案例 | 30   | 钱、价格、政策与风险的基本零件 |
| 投资     | 6 组        | 34   | 资产、工具、成本、行为与估值   |

## 一、金融原理

### 1. 货币与账户

| 主题                             | slug           | 状态   | 层级 | 概念                                               | 图表 / 示例          |
| -------------------------------- | -------------- | ------ | ---- | -------------------------------------------------- | -------------------- |
| 商业银行货币创造与资产负债表扩张 | `money`        | 已发布 | 核心 | money, net-wealth, bank-credit                     | 两本账示例           |
| 支付清算、准备金与银行间结算     | `settlement`   | 已发布 | 核心 | settlement                                         | —                    |
| 期限错配、流动性风险与银行资本   | `banking`      | 已发布 | 核心 | central-bank, deposit-insurance, maturity-mismatch | 图解：挤兑与期限错配 |
| 货币总量的部门边界与统计口径     | `money-supply` | 已发布 | 进阶 | money-supply, central-bank                         | 图解：M0/M1/M2 分层  |

### 2. 利率与时间

| 主题                             | slug             | 状态   | 层级 | 概念                                              | 图表 / 示例              |
| -------------------------------- | ---------------- | ------ | ---- | ------------------------------------------------- | ------------------------ |
| 利率定价、期限结构与实际融资成本 | `interest-rates` | 已发布 | 核心 | interest-rate, real-interest                      | 单利成本示例             |
| 复利、现值与年化口径的现金流分析 | `compound`       | 已发布 | 核心 | compound-interest, present-value, annualized-rate | 复利与单利对比示例       |
| 政策利率调整与融资成本传导       | `rate-changes`   | 已发布 | 核心 | policy-rate, interest-rate                        | 图解：政策利率到贷款成本 |
| 摊还结构、月供与有效融资成本     | `loan-payment`   | 已发布 | 进阶 | amortization, interest-rate                       | 月供计算示例             |
| 收益率曲线、利率预期与期限溢价   | `yield-curve`    | 已发布 | 进阶 | yield-curve, term-premium                         | 图解：正常与倒挂         |

### 3. 价格与通胀

| 主题                                | slug                     | 状态   | 层级 | 概念                             | 图表 / 示例                  |
| ----------------------------------- | ------------------------ | ------ | ---- | -------------------------------- | ---------------------------- |
| 通胀、通缩与实际购买力变化          | `inflation`              | 已发布 | 核心 | inflation, cpi                   | 购买力示例                   |
| CPI、核心通胀与生产者价格的口径差异 | `inflation-measurement`  | 已发布 | 核心 | cpi, core-inflation, ppi         | 图解：CPI 篮子权重           |
| 通胀预期、工资定价与实际利率        | `inflation-expectations` | 已发布 | 进阶 | inflation-expectation, inflation | 图解：预期如何进入工资与定价 |
| 名义增长与实际增长的口径分解        | `nominal-real`           | 已发布 | 核心 | nominal-vs-real, real-interest   | 图表：同一笔钱的两种口径     |

### 4. 生产、收入与增长

| 主题                           | slug             | 状态   | 层级 | 概念                           | 图表 / 示例                  |
| ------------------------------ | ---------------- | ------ | ---- | ------------------------------ | ---------------------------- |
| 国民收入循环与金融交易的边界   | `production`     | 已发布 | 核心 | real-economy                   | —                            |
| GDP 核算、增加值与实际增长     | `gdp`            | 已发布 | 核心 | gdp, real-gdp, nominal-vs-real | 图解：生产法、收入法、支出法 |
| 失业率、劳动参与率与就业结构   | `employment`     | 已发布 | 进阶 | unemployment, real-economy     | 图表：失业率与劳动参与率     |
| 经济周期的识别、传导与拐点约束 | `business-cycle` | 已发布 | 核心 | business-cycle, unemployment   | 图解：扩张、峰值、衰退、复苏 |
| 劳动生产率、资本深化与增长来源 | `productivity`   | 已发布 | 进阶 | real-economy, gdp              | 图解：人均产出与分工         |

### 5. 政策：货币与财政

| 主题                           | slug           | 状态   | 层级 | 概念                                                      | 图表 / 示例          |
| ------------------------------ | -------------- | ------ | ---- | --------------------------------------------------------- | -------------------- |
| 货币政策传导的条件、时滞与反馈 | `policy`       | 已发布 | 核心 | interest-rate                                             | 图解：传导条件与时滞 |
| 中央银行工具与资产负债表操作   | `central-bank` | 已发布 | 核心 | central-bank, policy-rate, reserve-ratio, open-market, qe | 图解：央行资产负债表 |
| 财政收支、债务存量与政策空间   | `fiscal`       | 已发布 | 核心 | fiscal-policy, deficit, government-debt                   | 图解：政府收支与债务 |
| 税基、边际税率与税负归宿       | `tax`          | 已发布 | 可选 | direct-tax, progressive-tax                               | 图解：直接税与间接税 |

### 6. 对外：汇率与国际收支

| 主题                         | slug               | 状态   | 层级 | 概念                             | 图表 / 示例              |
| ---------------------------- | ------------------ | ------ | ---- | -------------------------------- | ------------------------ |
| 汇率报价、购买力与价格传导   | `exchange-rate`    | 已发布 | 核心 | exchange-rate, inflation         | 汇率换算与进口价格图解   |
| 国际收支、跨境融资与外部失衡 | `balance-payments` | 已发布 | 进阶 | current-account, capital-account | 图解：经常账户与资本账户 |

### 7. 风险、收益与资产类别

| 主题                           | slug            | 状态   | 层级 | 概念                                                        | 图表 / 示例                                      |
| ------------------------------ | --------------- | ------ | ---- | ----------------------------------------------------------- | ------------------------------------------------ |
| 风险溢价、损失分布与分散边界   | `risk-return`   | 已发布 | 核心 | risk-premium, volatility, diversification, opportunity-cost | 图解：风险收益坐标                               |
| 资产权利、现金流与风险暴露分类 | `asset-classes` | 已发布 | 核心 | asset-class, liquidity, nominal-vs-real                     | 图解：现金、存款、债券、股票、基金、房产、贵金属 |
| 贵金属供需结构与实际利率敏感性 | `gold-silver`   | 已发布 | 核心 | gold, silver, store-of-value, real-interest                 | 图解：需求结构与实际利率                         |

### 8. 读懂数据与图表

| 主题                             | slug             | 状态   | 层级 | 概念                                              | 图表 / 示例                |
| -------------------------------- | ---------------- | ------ | ---- | ------------------------------------------------- | -------------------------- |
| 经济图表中的尺度、基期与比较偏差 | `reading-charts` | 已发布 | 核心 | index-number, yoy, nominal-vs-real, chart-misread | 图解：同一组数据的两种画法 |
| 经济数据修订与实时信息集         | `data-revision`  | 已发布 | 可选 | base-period, chart-misread                        | 图解：口径变化前后的对比   |

### 9. 综合案例

| 主题                               | slug   | 状态   | 层级 | 概念                      | 图表 / 示例                  |
| ---------------------------------- | ------ | ------ | ---- | ------------------------- | ---------------------------- |
| 企业融资、支付与偿债的存量流量核对 | `case` | 已发布 | 核心 | bank-credit, real-economy | 一笔贷款、两次支付、一次还本 |

## 二、投资

### 10. 投资基础

| 主题                           | slug                    | 状态   | 层级 | 概念                                          | 图表 / 示例                        |
| ------------------------------ | ----------------------- | ------ | ---- | --------------------------------------------- | ---------------------------------- |
| 投资回报的现金流来源与价格成分 | `invest-vs-speculation` | 已发布 | 核心 | return-source, speculation, risk-premium      | 图解：利息、租金、利润、价差       |
| 投资决策中的目标、期限与约束   | `investment-process`    | 已发布 | 核心 | asset-allocation, risk-tolerance, horizon     | 图解：目标、期限、风险、配置、复盘 |
| 波动率、最大回撤与风险调整收益 | `risk-measures`         | 已发布 | 核心 | volatility, max-drawdown, sharpe-ratio        | 图解：同一收益的不同路径           |
| 资产配置、相关性与再平衡机制   | `allocation`            | 已发布 | 核心 | asset-allocation, correlation, rebalancing    | 股债比例与波动示例                 |
| 费用结构与长期净回报的复合效应 | `costs`                 | 已发布 | 核心 | fee, expense-ratio, slippage, tax             | 费率对终值的影响示例               |
| 委托撮合、价格形成与交易交收   | `market-mechanics`      | 已发布 | 核心 | order-type, spread, t-plus-one, limit-up-down | 图解：一笔委托怎样成交             |
| 定额分批与一次性投入的路径依赖 | `dca`                   | 已发布 | 进阶 | dca, volatility                               | 定投与一次性的路径对比             |

### 11. 资产类别

| 主题                               | slug                  | 状态   | 层级 | 概念                                                     | 图表 / 示例                     |
| ---------------------------------- | --------------------- | ------ | ---- | -------------------------------------------------------- | ------------------------------- |
| 现金管理工具的信用与流动性结构     | `cash`                | 已发布 | 核心 | money-fund, liquidity, inflation                         | 图解：流动性阶梯                |
| 债券现金流、到期收益率与价格敏感性 | `bonds`               | 已发布 | 核心 | bond, coupon, yield-to-maturity, duration, credit-rating | 利率与债券价格示例              |
| 可转债的债性、转股价值与嵌入条款   | `convertible-bonds`   | 已发布 | 进阶 | convertible-bond, conversion-premium                     | 图解：债底与转股价值            |
| 股东剩余权益、盈利质量与估值变化   | `equities`            | 已发布 | 核心 | equity, dividend, earnings, pe-ratio                     | 图解：股东回报来源              |
| 基金策略、底层暴露与跟踪偏离       | `funds`               | 已发布 | 核心 | fund, active-passive, index-fund, etf, tracking-error    | 主动与被动的费用差              |
| 多层基金穿透与重复风险归集         | `look-through`        | 已发布 | 核心 | look-through, fund-of-funds, layered-nesting             | 图解：三层嵌套的底层            |
| 贵金属持有结构、渠道摩擦与展期成本 | `precious-metals`     | 已发布 | 核心 | gold, silver, custody, spread                            | 图解：实物、ETF、期货的成本对比 |
| 房地产现金流、杠杆与 REITs 估值    | `real-estate`         | 已发布 | 进阶 | rental-yield, leverage, liquidity, reit                  | 图解：租金收益率与杠杆          |
| 期货名义敞口、盯市与保证金约束     | `futures`             | 已发布 | 核心 | futures, margin, mark-to-market, liquidation, delivery   | 保证金与强平示例                |
| 期权支付结构、权利义务与非线性风险 | `options`             | 已发布 | 进阶 | option, premium, strike, implied-volatility              | 图解：四种基本头寸              |
| 加密资产的权利、托管与兑换风险     | `crypto`              | 已发布 | 核心 | blockchain, wallet, stablecoin, regulation-risk          | 图解：链上资产与托管            |
| 外币与商品投资的复合回报来源       | `fx-commodities`      | 已发布 | 进阶 | exchange-rate, commodity, storage-cost                   | 图解：汇率与商品周期            |
| 结构化产品的支付条款与发行人风险   | `structured-products` | 已发布 | 进阶 | structured-product, payoff, counterparty-risk            | 图解：收益结构                  |

### 12. 工具与结构

| 主题                                 | slug                | 状态   | 层级 | 概念                                                   | 图表 / 示例              |
| ------------------------------------ | ------------------- | ------ | ---- | ------------------------------------------------------ | ------------------------ |
| 融资杠杆、权益损益与被动平仓         | `leverage`          | 已发布 | 核心 | leverage, margin-financing, interest-cost, liquidation | 杠杆倍数与回撤示例       |
| 企业股债融资、发行定价与股权稀释     | `corporate-finance` | 已发布 | 进阶 | equity-financing, debt-financing, ipo, dilution        | 图解：三种融资方式对比   |
| 项目现金流、净现值与退出假设         | `projects`          | 已发布 | 核心 | npv, irr, due-diligence, exit, illiquidity             | 图解：项目现金流与回收期 |
| 私募股权的出资、估值与退出周期       | `private-equity`    | 已发布 | 进阶 | private-equity, venture-capital, lock-up, j-curve      | 图解：基金生命周期       |
| 对冲与量化策略的敞口、融资与模型风险 | `hedge-funds`       | 已发布 | 进阶 | hedge-fund, quant, fee-structure, lock-up              | 图解：策略谱系           |

### 13. 风险与合规

| 主题                           | slug               | 状态   | 层级 | 概念                                                 | 图表 / 示例            |
| ------------------------------ | ------------------ | ------ | ---- | ---------------------------------------------------- | ---------------------- |
| 投资欺诈的现金流与信息结构识别 | `fraud`            | 已发布 | 核心 | ponzi-scheme, illegal-fundraising, guaranteed-return | 图解：骗局的三段结构   |
| 信息披露、利益冲突与适当性约束 | `disclosure`       | 已发布 | 进阶 | prospectus, suitability, disclosure                  | 图解：招募说明书的要点 |
| 跨境投资的税务身份、预扣与抵免 | `tax-cross-border` | 已发布 | 进阶 | capital-gains-tax, withholding-tax, reporting        | 图解：税在收益里的位置 |
| 证券持有、账户隔离与托管责任   | `custody`          | 已发布 | 进阶 | custody, segregated-account, counterparty-risk       | 图解：资金流向与隔离   |

### 14. 行为与决策

| 主题                           | slug       | 状态   | 层级 | 概念                                                                  | 图表 / 示例        |
| ------------------------------ | ---------- | ------ | ---- | --------------------------------------------------------------------- | ------------------ |
| 行为偏差、参照点与交易决策失真 | `behavior` | 已发布 | 核心 | loss-aversion, anchoring, herding, disposition-effect, overconfidence | 图解：偏差与决策链 |
| 投资决策记录、基准与事后归因   | `journal`  | 已发布 | 可选 | process, benchmark                                                    | 记录模板           |

### 15. 宏观与估值

| 主题                             | slug           | 状态   | 层级 | 概念                                                   | 图表 / 示例              |
| -------------------------------- | -------------- | ------ | ---- | ------------------------------------------------------ | ------------------------ |
| 宏观冲击经现金流与折现率传向资产 | `macro-assets` | 已发布 | 核心 | interest-rate, inflation, exchange-rate, discount-rate | 图解：传导到四类资产     |
| 估值倍数、现金流折现与假设敏感性 | `valuation`    | 已发布 | 进阶 | pe-ratio, pb-ratio, dividend-yield, dcf, discount-rate | 图解：估值倍数的含义     |
| 周期识别、市场预期与资产表现归因 | `cycles`       | 已发布 | 可选 | business-cycle, risk-premium                           | 说明是历史规律，不是预测 |

## 三、跨模块衔接

- 黄金与白银：基础篇讲是什么、价格受什么影响；投资篇讲渠道与成本。两边互链，不重复正文。
- 风险与收益：基础篇建立波动、相关性、风险溢价的概念；投资篇做度量（回撤、夏普）和资产配置。
- 利率与宏观：基础篇解释政策传导；投资篇解释它如何进入债券价格、估值和汇率。

## 四、内容深度与呈现规范

- 标题与摘要直接给出分析对象，避免“钱是什么”“借到钱是否变富”式启蒙设问。
- 每个主题先展示核心 SVG 图解，随后解释图中变量、会计关系或传导条件。
- 机制解释之外，提供口径差异、约束、情景核对与进一步分析；不以术语堆砌代替推理。
- 静态曲线标明单位、现金流时点和假设，机制图不暗示必然因果。
- 不恢复课程、进度、测验、播放、重置或实验控件，不展示更新时间。

## 五、工程结构

- `/knowledge/macro/` 与 `/knowledge/investing/` 分别提供金融原理与投资目录。
- `topicHref` 根据 module 和 slug 生成地址，动态主题路由覆盖两个模块。
- 大纲、分组、主题、概念和跨模块关联在构建时校验；旧入口保留兼容。
- 知识导航只列主题入口；详情页提供三级可折叠侧栏，并在图片下展开正文。

## 六、边界

- 不推荐产品、不承诺收益、不预测价格；情景类内容标明条件与时滞。
- 每篇至少一个可核对来源，数字为教学示例。
- 涉及购买渠道、仓位、税费和交易成本的内容，放在投资部分。

相关文档：[架构说明](architecture.md)、[实施记录](migration.md)。
