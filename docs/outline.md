# 钱图内容规划

更新：2026-11-16

基础知识与投资两部分合并成一份总览。定位：用图表把金融知识讲清楚，先理解，再做判断。站点按主题自由查阅，本文只用于组织素材和排期，不代表阅读顺序，也不设前置要求。

## 现状

- 已发布 7 篇主题、9 个概念、3 个实验。
- 规划中 23 篇基础主题、34 篇投资主题、142 个待建概念、12 个待建实验。
- 合并前的详细版本保留在提交 `39d475a`、`a8e7130` 里，需要概念定义时再翻。

## 约定

- 一篇主题回答一个问题，标题用问题或判断句，不用单个名词。
- 成对概念合并：加息/降息、通胀/通缩、名义/实际、单利/复利。
- 术语进概念索引；概念列带 `*` 的为待建。
- 主题 id = 模块前缀 + slug：`macro-<slug>`、`investing-<slug>`。
- 状态：已发布 / 待写 / 可选；层级：核心 / 进阶 / 可选，只用于排期。
- 不推荐产品、不承诺收益、不预测价格；数字为教学示例，来源必填。

## 内容地图

| 板块     | 分组        | 篇数 | 负责回答                       |
| -------- | ----------- | ---- | ------------------------------ |
| 基础知识 | 8 组 + 案例 | 30   | 钱、价格、政策与风险的基本零件 |
| 投资     | 6 组        | 34   | 资产、工具、成本、行为与估值   |

## 一、基础知识

### 1. 货币与账户

| 主题           | slug           | 状态   | 层级 | 概念                                                     | 实验 / 图解          |
| -------------- | -------------- | ------ | ---- | -------------------------------------------------------- | -------------------- |
| 货币与净财富   | `money`        | 已发布 | 核心 | money, net-wealth, bank-credit                           | 两本账实验           |
| 转账与银行结算 | `settlement`   | 已发布 | 核心 | settlement                                               | —                    |
| 银行体系与风险 | `banking`      | 待写   | 核心 | central-bank\*, deposit-insurance\*, maturity-mismatch\* | 图解：挤兑与期限错配 |
| 货币供应量     | `money-supply` | 待写   | 进阶 | money-supply\*, central-bank\*                           | 图解：M0/M1/M2 分层  |

### 2. 利率与时间

| 主题                 | slug             | 状态   | 层级 | 概念                                                    | 实验 / 图解              |
| -------------------- | ---------------- | ------ | ---- | ------------------------------------------------------- | ------------------------ |
| 利率：使用资金的价格 | `interest-rates` | 已发布 | 核心 | interest-rate, real-interest                            | 单利成本实验             |
| 复利与时间价值       | `compound`       | 待写   | 核心 | compound-interest\*, present-value\*, annualized-rate\* | 复利与单利对比实验       |
| 加息与降息           | `rate-changes`   | 待写   | 核心 | policy-rate\*, interest-rate                            | 图解：政策利率到贷款成本 |
| 贷款成本与月供       | `loan-payment`   | 待写   | 进阶 | amortization\*, interest-rate                           | 月供计算实验             |
| 收益率曲线           | `yield-curve`    | 可选   | 进阶 | yield-curve\*, term-premium\*                           | 图解：正常与倒挂         |

### 3. 价格与通胀

| 主题               | slug                     | 状态   | 层级 | 概念                               | 实验 / 图解                  |
| ------------------ | ------------------------ | ------ | ---- | ---------------------------------- | ---------------------------- |
| 通胀、通缩与购买力 | `inflation`              | 已发布 | 核心 | inflation, cpi                     | 购买力实验                   |
| 通胀的度量         | `inflation-measurement`  | 待写   | 核心 | cpi, core-inflation\*, ppi\*       | 图解：CPI 篮子权重           |
| 通胀预期           | `inflation-expectations` | 待写   | 进阶 | inflation-expectation\*, inflation | 图解：预期如何进入工资与定价 |
| 名义与实际         | `nominal-real`           | 可选   | 核心 | nominal-vs-real\*, real-interest   | 图表：同一笔钱的两种口径     |

### 4. 生产、收入与增长

| 主题             | slug             | 状态   | 层级 | 概念                                 | 实验 / 图解                  |
| ---------------- | ---------------- | ------ | ---- | ------------------------------------ | ---------------------------- |
| 生产、收入与消费 | `production`     | 已发布 | 核心 | real-economy                         | —                            |
| GDP 与增长       | `gdp`            | 待写   | 核心 | gdp\*, real-gdp\*, nominal-vs-real\* | 图解：生产法、收入法、支出法 |
| 就业与失业       | `employment`     | 待写   | 进阶 | unemployment\*, real-economy         | 图表：失业率与劳动参与率     |
| 经济周期         | `business-cycle` | 待写   | 核心 | business-cycle\*, unemployment\*     | 图解：扩张、峰值、衰退、复苏 |
| 生产率与分工     | `productivity`   | 可选   | 进阶 | real-economy, gdp\*                  | 图解：人均产出与分工         |

### 5. 政策：货币与财政

| 主题                       | slug           | 状态   | 层级 | 概念                                                                | 实验 / 图解          |
| -------------------------- | -------------- | ------ | ---- | ------------------------------------------------------------------- | -------------------- |
| 政策传导：有条件，也有时滞 | `policy`       | 已发布 | 核心 | interest-rate                                                       | 图解：传导条件与时滞 |
| 央行与货币工具箱           | `central-bank` | 待写   | 核心 | central-bank\*, policy-rate\*, reserve-ratio\*, open-market\*, qe\* | 图解：央行资产负债表 |
| 财政政策与国债             | `fiscal`       | 待写   | 核心 | fiscal-policy\*, deficit\*, government-debt\*                       | 图解：政府收支与债务 |
| 税收基础                   | `tax`          | 可选   | 可选 | direct-tax\*, progressive-tax\*                                     | 图解：直接税与间接税 |

### 6. 对外：汇率与国际收支

| 主题               | slug               | 状态 | 层级 | 概念                                 | 实验 / 图解              |
| ------------------ | ------------------ | ---- | ---- | ------------------------------------ | ------------------------ |
| 汇率与升贬值       | `exchange-rate`    | 待写 | 核心 | exchange-rate\*, inflation           | 汇率换算与进口价格图解   |
| 国际收支与资本流动 | `balance-payments` | 待写 | 进阶 | current-account\*, capital-account\* | 图解：经常账户与资本账户 |

### 7. 风险、收益与资产类别

| 主题           | slug            | 状态 | 层级 | 概念                                                                | 实验 / 图解                                      |
| -------------- | --------------- | ---- | ---- | ------------------------------------------------------------------- | ------------------------------------------------ |
| 风险与收益入门 | `risk-return`   | 待写 | 核心 | risk-premium\*, volatility\*, diversification\*, opportunity-cost\* | 图解：风险收益坐标                               |
| 资产类别图谱   | `asset-classes` | 待写 | 核心 | asset-class\*, liquidity\*, nominal-vs-real\*                       | 图解：现金、存款、债券、股票、基金、房产、贵金属 |
| 黄金与白银     | `gold-silver`   | 待写 | 核心 | gold\*, silver\*, store-of-value\*, real-interest                   | 图解：需求结构与实际利率                         |

### 8. 读懂数据与图表

| 主题             | slug             | 状态 | 层级 | 概念                                                      | 实验 / 图解                |
| ---------------- | ---------------- | ---- | ---- | --------------------------------------------------------- | -------------------------- |
| 读懂一张经济图表 | `reading-charts` | 待写 | 核心 | index-number\*, yoy\*, nominal-vs-real\*, chart-misread\* | 图解：同一组数据的两种画法 |
| 数据口径与修订   | `data-revision`  | 可选 | 可选 | base-period\*, chart-misread\*                            | 图解：口径变化前后的对比   |

### 9. 综合案例

| 主题                     | slug   | 状态   | 层级 | 概念                      | 实验 / 图解                  |
| ------------------------ | ------ | ------ | ---- | ------------------------- | ---------------------------- |
| 面包店案例：把机制串起来 | `case` | 已发布 | 核心 | bank-credit, real-economy | 一笔贷款、两次支付、一次还本 |

## 二、投资

### 10. 投资基础

| 主题                         | slug                    | 状态 | 层级 | 概念                                                  | 实验 / 图解                        |
| ---------------------------- | ----------------------- | ---- | ---- | ----------------------------------------------------- | ---------------------------------- |
| 投资与投机：收益从哪里来     | `invest-vs-speculation` | 待写 | 核心 | return-source\*, speculation\*, risk-premium          | 图解：利息、租金、利润、价差       |
| 投资决策的五件事             | `investment-process`    | 待写 | 核心 | asset-allocation\*, risk-tolerance\*, horizon\*       | 图解：目标、期限、风险、配置、复盘 |
| 风险与收益：波动、回撤与夏普 | `risk-measures`         | 待写 | 核心 | volatility, max-drawdown\*, sharpe-ratio\*            | 图解：同一收益的不同路径           |
| 资产配置与再平衡             | `allocation`            | 待写 | 核心 | asset-allocation\*, correlation\*, rebalancing\*      | 股债比例与波动实验                 |
| 成本与费用：长期收益的隐形税 | `costs`                 | 待写 | 核心 | fee\*, expense-ratio\*, slippage\*, tax               | 费率对终值的影响实验               |
| 市场与交易机制               | `market-mechanics`      | 待写 | 核心 | order-type\*, spread\*, t-plus-one\*, limit-up-down\* | 图解：一笔委托怎样成交             |
| 定投与分批投入               | `dca`                   | 可选 | 进阶 | dca\*, volatility                                     | 定投与一次性的路径对比             |

### 11. 资产类别

| 主题                       | slug                  | 状态 | 层级 | 概念                                                             | 实验 / 图解                     |
| -------------------------- | --------------------- | ---- | ---- | ---------------------------------------------------------------- | ------------------------------- |
| 现金与货币基金             | `cash`                | 待写 | 核心 | money-fund\*, liquidity, inflation                               | 图解：流动性阶梯                |
| 债券：借钱给谁             | `bonds`               | 待写 | 核心 | bond, coupon\*, yield-to-maturity\*, duration\*, credit-rating\* | 利率与债券价格实验              |
| 可转债：债与股的混合       | `convertible-bonds`   | 待写 | 进阶 | convertible-bond\*, conversion-premium\*                         | 图解：债底与转股价值            |
| 股票：买的是所有权         | `equities`            | 待写 | 核心 | equity, dividend\*, earnings\*, pe-ratio\*                       | 图解：股东回报来源              |
| 基金：一篮子资产           | `funds`               | 待写 | 核心 | fund, active-passive\*, index-fund\*, etf\*, tracking-error\*    | 主动与被动的费用差              |
| 基金穿透与底层资产         | `look-through`        | 待写 | 核心 | look-through\*, fund-of-funds\*, layered-nesting\*               | 图解：三层嵌套的底层            |
| 黄金与白银：投资渠道与成本 | `precious-metals`     | 待写 | 核心 | gold, silver, custody\*, spread\*                                | 图解：实物、ETF、期货的成本对比 |
| 房地产与 REITs             | `real-estate`         | 待写 | 进阶 | rental-yield\*, leverage\*, liquidity, reit\*                    | 图解：租金收益率与杠杆          |
| 期货：保证金与杠杆         | `futures`             | 待写 | 核心 | futures\*, margin\*, mark-to-market\*, liquidation\*, delivery\* | 保证金与强平实验                |
| 期权：买的是权利           | `options`             | 待写 | 进阶 | option\*, premium\*, strike\*, implied-volatility\*              | 图解：四种基本头寸              |
| 加密货币：技术、托管与监管 | `crypto`              | 待写 | 核心 | blockchain\*, wallet\*, stablecoin\*, regulation-risk\*          | 图解：链上资产与托管            |
| 外汇与大宗商品             | `fx-commodities`      | 可选 | 进阶 | exchange-rate, commodity\*, storage-cost\*                       | 图解：汇率与商品周期            |
| 结构化产品                 | `structured-products` | 可选 | 进阶 | structured-product\*, payoff\*, counterparty-risk\*              | 图解：收益结构                  |

### 12. 工具与结构

| 主题                         | slug                | 状态 | 层级 | 概念                                                           | 实验 / 图解              |
| ---------------------------- | ------------------- | ---- | ---- | -------------------------------------------------------------- | ------------------------ |
| 融资与杠杆：谁在放大风险     | `leverage`          | 待写 | 核心 | leverage\*, margin-financing\*, interest-cost\*, liquidation\* | 杠杆倍数与回撤实验       |
| 企业融资：股权、债权与 IPO   | `corporate-finance` | 待写 | 进阶 | equity-financing\*, debt-financing\*, ipo\*, dilution\*        | 图解：三种融资方式对比   |
| 投资项目：现金流、尽调与退出 | `projects`          | 待写 | 核心 | npv\*, irr\*, due-diligence\*, exit\*, illiquidity\*           | 图解：项目现金流与回收期 |
| 私募股权与风险投资           | `private-equity`    | 待写 | 进阶 | private-equity\*, venture-capital\*, lock-up\*, j-curve\*      | 图解：基金生命周期       |
| 对冲基金与量化               | `hedge-funds`       | 可选 | 进阶 | hedge-fund\*, quant\*, fee-structure\*, lock-up\*              | 图解：策略谱系           |

### 13. 风险与合规

| 主题                         | slug               | 状态 | 层级 | 概念                                                       | 实验 / 图解            |
| ---------------------------- | ------------------ | ---- | ---- | ---------------------------------------------------------- | ---------------------- |
| 常见骗局：庞氏、荐股与杀猪盘 | `fraud`            | 待写 | 核心 | ponzi-scheme\*, illegal-fundraising\*, guaranteed-return\* | 图解：骗局的三段结构   |
| 信息披露与投资者适当性       | `disclosure`       | 待写 | 进阶 | prospectus\*, suitability\*, disclosure\*                  | 图解：招募说明书的要点 |
| 税务与跨境投资               | `tax-cross-border` | 可选 | 进阶 | capital-gains-tax\*, withholding-tax\*, reporting\*        | 图解：税在收益里的位置 |
| 托管、账户与资金安全         | `custody`          | 可选 | 进阶 | custody\*, segregated-account\*, counterparty-risk\*       | 图解：资金流向与隔离   |

### 14. 行为与决策

| 主题                         | slug       | 状态 | 层级 | 概念                                                                            | 实验 / 图解        |
| ---------------------------- | ---------- | ---- | ---- | ------------------------------------------------------------------------------- | ------------------ |
| 行为偏差：为什么总是追涨杀跌 | `behavior` | 待写 | 核心 | loss-aversion\*, anchoring\*, herding\*, disposition-effect\*, overconfidence\* | 图解：偏差与决策链 |
| 投资记录与复盘               | `journal`  | 可选 | 可选 | process\*, benchmark\*                                                          | 记录模板           |

### 15. 宏观与估值

| 主题                           | slug           | 状态 | 层级 | 概念                                                             | 实验 / 图解              |
| ------------------------------ | -------------- | ---- | ---- | ---------------------------------------------------------------- | ------------------------ |
| 利率、通胀、汇率如何影响资产   | `macro-assets` | 待写 | 核心 | interest-rate, inflation, exchange-rate, discount-rate\*         | 图解：传导到四类资产     |
| 估值基础：PE、PB、股息率与 DCF | `valuation`    | 待写 | 进阶 | pe-ratio\*, pb-ratio\*, dividend-yield\*, dcf\*, discount-rate\* | 图解：估值倍数的含义     |
| 经济周期与资产表现             | `cycles`       | 可选 | 可选 | business-cycle, risk-premium                                     | 说明是历史规律，不是预测 |

## 三、跨模块衔接

- 黄金与白银：基础篇讲是什么、价格受什么影响；投资篇讲渠道与成本。两边互链，不重复正文。
- 风险与收益：基础篇建立波动、相关性、风险溢价的概念；投资篇做度量（回撤、夏普）和资产配置。
- 利率与宏观：基础篇解释政策传导；投资篇解释它如何进入债券价格、估值和汇率。

## 四、写作顺序

顺序只用于排期。

- 基础第一批：复利与时间价值、央行与货币工具箱、黄金与白银、GDP 与增长。
- 基础第二批：加息与降息、通胀的度量、汇率与升贬值、风险与收益入门。
- 基础第三批：银行体系与风险、经济周期、财政与国债、资产类别图谱、读懂一张经济图表。
- 投资第一批：投资决策的五件事、债券、股票、基金、成本与费用。
- 投资第二批：资产配置与再平衡、风险与收益、基金穿透、黄金与白银、期货。
- 投资第三批：融资与杠杆、投资项目、加密货币、估值基础、行为偏差、常见骗局。

## 五、上线前工程项

- 新建 `/knowledge/investing/` 目录页与主题页，导航加入口。
- `topicHref` 目前写死 `/knowledge/macro/`，需要按 module 生成路径。
- `TopicList`、概念索引、实验注册、链接检查、站点地图过滤同步支持投资模块。
- 基础与投资的主题之间做交叉链接，避免重复正文。

## 六、边界

- 不推荐产品、不承诺收益、不预测价格；情景类内容标明条件与时滞。
- 每篇至少一个可核对来源，数字为教学示例。
- 涉及购买渠道、仓位、税费和交易成本的内容，放在投资部分。

相关文档：[架构说明](architecture.md)、[实施记录](migration.md)。
