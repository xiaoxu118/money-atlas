# 钱图投资内容大纲

更新：2026-11-16

投资模块规划清单。定位：讲清「是什么、收益从哪来、风险在哪、成本多少」，不做标的推荐、收益承诺和择时判断。站点仍是自由查阅，本大纲不代表阅读顺序。

前置条件：`module: investing` 的页面与导航还没建（`/knowledge/investing/`），发布前先补路由、导航和站点地图过滤。本清单先行，写作时再落地。

## 使用约定

- 一篇主题回答一个问题，标题用问题或判断句，不用单个名词。
- 涉及具体产品、平台、税率、监管口径时写「以现行规定为准」，并给出来源。
- 不出现「应该买/卖」「必涨」「稳赚」这类表述；情景只描述条件与可能方向。
- 资产类别的基础概念和宏观部分交叉链接基础模块，不重复正文。
- 状态：`待写` 已定标题与概念；`可选` 视精力再排。层级只用于排写作，不在站点展示。

## 模块总览

| 分组           | 主题数 | 负责回答                           |
| -------------- | ------ | ---------------------------------- |
| 一、投资基础   | 7      | 投资在赚什么钱，决策要考虑哪几件事 |
| 二、资产类别   | 13     | 每一类资产怎么运作、风险在哪       |
| 三、工具与结构 | 5      | 杠杆、融资、基金穿透和项目投资     |
| 四、风险与合规 | 4      | 骗局、披露、税务和资金安全         |
| 五、行为与决策 | 2      | 人为什么会做错决定                 |
| 六、宏观与估值 | 3      | 利率、通胀、汇率和估值怎样影响资产 |

## 一、投资基础

| 主题                         | id · slug                                                   | 状态 | 层级 | 概念                                                  | 实验 / 图解                        |
| ---------------------------- | ----------------------------------------------------------- | ---- | ---- | ----------------------------------------------------- | ---------------------------------- |
| 投资与投机：收益从哪里来     | `investing-invest-vs-speculation` · `invest-vs-speculation` | 待写 | 核心 | return-source\*, speculation\*, risk-premium          | 图解：利息、租金、利润、价差       |
| 投资决策的五件事             | `investing-process` · `process`                             | 待写 | 核心 | asset-allocation\*, risk-tolerance\*, horizon\*       | 图解：目标、期限、风险、配置、复盘 |
| 风险与收益：波动、回撤与夏普 | `investing-risk-measures` · `risk-measures`                 | 待写 | 核心 | volatility, max-drawdown\*, sharpe-ratio\*            | 图解：同一收益的不同路径           |
| 资产配置与再平衡             | `investing-allocation` · `allocation`                       | 待写 | 核心 | asset-allocation\*, correlation\*, rebalancing\*      | 股债比例与波动实验                 |
| 成本与费用：长期收益的隐形税 | `investing-costs` · `costs`                                 | 待写 | 核心 | fee\*, expense-ratio\*, slippage\*, tax               | 费率对终值的影响实验               |
| 市场与交易机制               | `investing-market-mechanics` · `market-mechanics`           | 待写 | 核心 | order-type\*, spread\*, t-plus-one\*, limit-up-down\* | 图解：一笔委托怎样成交             |
| 定投与分批投入               | `investing-dca` · `dca`                                     | 可选 | 进阶 | dca\*, volatility                                     | 定投与一次性的路径对比             |

## 二、资产类别

| 主题                       | id · slug                                               | 状态 | 层级 | 概念                                                             | 实验 / 图解                     |
| -------------------------- | ------------------------------------------------------- | ---- | ---- | ---------------------------------------------------------------- | ------------------------------- |
| 现金与货币基金             | `investing-cash` · `cash`                               | 待写 | 核心 | money-fund\*, liquidity, inflation                               | 图解：流动性阶梯                |
| 债券：借钱给谁             | `investing-bonds` · `bonds`                             | 待写 | 核心 | bond, coupon\*, yield-to-maturity\*, duration\*, credit-rating\* | 利率与债券价格实验              |
| 可转债：债与股的混合       | `investing-convertible-bonds` · `convertible-bonds`     | 待写 | 进阶 | convertible-bond\*, conversion-premium\*                         | 图解：债底与转股价值            |
| 股票：买的是所有权         | `investing-equities` · `equities`                       | 待写 | 核心 | equity, dividend\*, earnings\*, pe-ratio\*                       | 图解：股东回报来源              |
| 基金：一篮子资产           | `investing-funds` · `funds`                             | 待写 | 核心 | fund, active-passive\*, index-fund\*, etf\*, tracking-error\*    | 主动与被动的费用差              |
| 基金穿透与底层资产         | `investing-look-through` · `look-through`               | 待写 | 核心 | look-through\*, fund-of-funds\*, layered-nesting\*               | 图解：三层嵌套的底层            |
| 黄金与白银：投资渠道与成本 | `investing-precious-metals` · `precious-metals`         | 待写 | 核心 | gold, silver, custody\*, spread\*                                | 图解：实物、ETF、期货的成本对比 |
| 房地产与 REITs             | `investing-real-estate` · `real-estate`                 | 待写 | 进阶 | rental-yield\*, leverage\*, liquidity, reit\*                    | 图解：租金收益率与杠杆          |
| 期货：保证金与杠杆         | `investing-futures` · `futures`                         | 待写 | 核心 | futures\*, margin\*, mark-to-market\*, liquidation\*, delivery\* | 保证金与强平实验                |
| 期权：买的是权利           | `investing-options` · `options`                         | 待写 | 进阶 | option\*, premium\*, strike\*, implied-volatility\*              | 图解：四种基本头寸              |
| 加密货币：技术、托管与监管 | `investing-crypto` · `crypto`                           | 待写 | 核心 | blockchain\*, wallet\*, stablecoin\*, regulation-risk\*          | 图解：链上资产与托管            |
| 外汇与大宗商品             | `investing-fx-commodities` · `fx-commodities`           | 可选 | 进阶 | exchange-rate, commodity\*, storage-cost\*                       | 图解：汇率与商品周期            |
| 结构化产品                 | `investing-structured-products` · `structured-products` | 可选 | 进阶 | structured-product\*, payoff\*, counterparty-risk\*              | 图解：收益结构                  |

## 三、工具与结构

| 主题                         | id · slug                                           | 状态 | 层级 | 概念                                                           | 实验 / 图解              |
| ---------------------------- | --------------------------------------------------- | ---- | ---- | -------------------------------------------------------------- | ------------------------ |
| 融资与杠杆：谁在放大风险     | `investing-leverage` · `leverage`                   | 待写 | 核心 | leverage\*, margin-financing\*, interest-cost\*, liquidation\* | 杠杆倍数与回撤实验       |
| 企业融资：股权、债权与 IPO   | `investing-corporate-finance` · `corporate-finance` | 待写 | 进阶 | equity-financing\*, debt-financing\*, ipo\*, dilution\*        | 图解：三种融资方式对比   |
| 投资项目：现金流、尽调与退出 | `investing-projects` · `projects`                   | 待写 | 核心 | npv\*, irr\*, due-diligence\*, exit\*, illiquidity\*           | 图解：项目现金流与回收期 |
| 私募股权与风险投资           | `investing-private-equity` · `private-equity`       | 待写 | 进阶 | private-equity\*, venture-capital\*, lock-up\*, j-curve\*      | 图解：基金生命周期       |
| 对冲基金与量化               | `investing-hedge-funds` · `hedge-funds`             | 可选 | 进阶 | hedge-fund\*, quant\*, fee-structure\*, lock-up\*              | 图解：策略谱系           |

## 四、风险与合规

| 主题                         | id · slug                             | 状态 | 层级 | 概念                                                       | 实验 / 图解            |
| ---------------------------- | ------------------------------------- | ---- | ---- | ---------------------------------------------------------- | ---------------------- |
| 常见骗局：庞氏、荐股与杀猪盘 | `investing-fraud` · `fraud`           | 待写 | 核心 | ponzi-scheme\*, illegal-fundraising\*, guaranteed-return\* | 图解：骗局的三段结构   |
| 信息披露与投资者适当性       | `investing-disclosure` · `disclosure` | 待写 | 进阶 | prospectus\*, suitability\*, disclosure\*                  | 图解：招募说明书的要点 |
| 税务与跨境投资               | `investing-tax` · `tax`               | 可选 | 进阶 | capital-gains-tax\*, withholding-tax\*, reporting\*        | 图解：税在收益里的位置 |
| 托管、账户与资金安全         | `investing-custody` · `custody`       | 可选 | 进阶 | custody\*, segregated-account\*, counterparty-risk\*       | 图解：资金流向与隔离   |

## 五、行为与决策

| 主题                         | id · slug                         | 状态 | 层级 | 概念                                                                            | 实验 / 图解        |
| ---------------------------- | --------------------------------- | ---- | ---- | ------------------------------------------------------------------------------- | ------------------ |
| 行为偏差：为什么总是追涨杀跌 | `investing-behavior` · `behavior` | 待写 | 核心 | loss-aversion\*, anchoring\*, herding\*, disposition-effect\*, overconfidence\* | 图解：偏差与决策链 |
| 投资记录与复盘               | `investing-journal` · `journal`   | 可选 | 可选 | process\*, benchmark\*                                                          | 记录模板           |

## 六、宏观与估值

| 主题                           | id · slug                                 | 状态 | 层级 | 概念                                                             | 实验 / 图解              |
| ------------------------------ | ----------------------------------------- | ---- | ---- | ---------------------------------------------------------------- | ------------------------ |
| 利率、通胀、汇率如何影响资产   | `investing-macro-assets` · `macro-assets` | 待写 | 核心 | interest-rate, inflation, exchange-rate, discount-rate\*         | 图解：传导到四类资产     |
| 估值基础：PE、PB、股息率与 DCF | `investing-valuation` · `valuation`       | 待写 | 进阶 | pe-ratio\*, pb-ratio\*, dividend-yield\*, dcf\*, discount-rate\* | 图解：估值倍数的含义     |
| 经济周期与资产表现             | `investing-cycles` · `cycles`             | 可选 | 可选 | business-cycle, risk-premium                                     | 说明是历史规律，不是预测 |

## 复用基础模块的概念

以下概念在基础大纲里定义，投资篇直接引用，不重复建卡：

`bond`、`equity`、`fund`、`gold`、`silver`、`liquidity`、`risk-premium`、`volatility`、`diversification`、`opportunity-cost`、`asset-class`、`store-of-value`、`real-interest`、`interest-rate`、`inflation`、`exchange-rate`、`business-cycle`、`settlement`、`index-number`。

## 待建概念

| id                    | 中文           | 一句话定义                                         |
| --------------------- | -------------- | -------------------------------------------------- |
| `return-source`       | 收益来源       | 利息、租金、利润和价差四类回报。                   |
| `speculation`         | 投机           | 主要依靠价格变化、而非现金流获得回报的行为。       |
| `asset-allocation`    | 资产配置       | 决定资金在各类资产之间的比例。                     |
| `risk-tolerance`      | 风险承受能力   | 能承受多大波动和亏损而不影响目标。                 |
| `horizon`             | 投资期限       | 资金可以不动用的时间长度。                         |
| `max-drawdown`        | 最大回撤       | 从高点跌到低点的最大幅度。                         |
| `sharpe-ratio`        | 夏普比率       | 单位波动对应的超额收益。                           |
| `correlation`         | 相关性         | 两类资产价格同向或反向变动的程度。                 |
| `rebalancing`         | 再平衡         | 定期把资产比例调回目标。                           |
| `fee`                 | 费用           | 申购、赎回、管理、托管等显性成本。                 |
| `expense-ratio`       | 费率           | 基金按规模每年收取的费用比例。                     |
| `slippage`            | 滑点           | 实际成交价与预期价的差距。                         |
| `order-type`          | 订单类型       | 市价单、限价单等委托方式。                         |
| `spread`              | 买卖价差       | 买价与卖价之间的差额。                             |
| `t-plus-one`          | T+1            | A 股股票当日买入、下一交易日才能卖出的安排。       |
| `limit-up-down`       | 涨跌停         | 单日价格波动的上下限。                             |
| `money-fund`          | 货币基金       | 投资短期货币工具的基金，流动性较高。               |
| `coupon`              | 票息           | 债券按面值定期支付的利息。                         |
| `yield-to-maturity`   | 到期收益率     | 持有到期的年化回报，随价格变化。                   |
| `duration`            | 久期           | 债券价格对利率变化的敏感度。                       |
| `credit-rating`       | 信用评级       | 对发行人偿债能力的第三方评估。                     |
| `convertible-bond`    | 可转债         | 可按约定转为股票的债券。                           |
| `conversion-premium`  | 转股溢价       | 可转债价格高于转股价值的比例。                     |
| `dividend`            | 股息           | 公司从利润中分配给股东的现金。                     |
| `earnings`            | 盈利           | 公司扣除成本后的利润。                             |
| `active-passive`      | 主动与被动     | 主动选股与跟踪指数两种管理方式。                   |
| `index-fund`          | 指数基金       | 按指数成分复制持仓的基金。                         |
| `etf`                 | ETF            | 在交易所上市、可实时买卖的基金。                   |
| `tracking-error`      | 跟踪误差       | 基金收益与指数收益的偏离程度。                     |
| `look-through`        | 穿透           | 看穿产品结构，识别最终底层资产。                   |
| `fund-of-funds`       | FOF            | 主要投资其他基金的基金。                           |
| `layered-nesting`     | 多层嵌套       | 产品层层嵌套、底层资产难以识别。                   |
| `custody`             | 托管           | 由独立机构保管资产。                               |
| `rental-yield`        | 租金收益率     | 年租金与房产价格的比值。                           |
| `reit`                | REITs          | 持有并能分配租金收益的上市不动产信托。             |
| `futures`             | 期货           | 约定未来交割的标准化合约。                         |
| `margin`              | 保证金         | 持有合约需要缴纳的担保资金。                       |
| `mark-to-market`      | 逐日盯市       | 每日按市价结算盈亏。                               |
| `liquidation`         | 强制平仓       | 保证金不足时被强制卖出。                           |
| `delivery`            | 交割           | 合约到期时交付标的或现金结算。                     |
| `option`              | 期权           | 在约定时间按约定价格买卖的权利。                   |
| `premium`             | 权利金         | 买方为获得期权支付的价格。                         |
| `strike`              | 行权价         | 期权约定的买卖价格。                               |
| `implied-volatility`  | 隐含波动率     | 从期权价格反推的市场波动预期。                     |
| `blockchain`          | 区块链         | 分布式记账的技术结构。                             |
| `wallet`              | 钱包           | 保存私钥、控制链上资产的工具。                     |
| `stablecoin`          | 稳定币         | 声称与法币等值锚定的加密资产。                     |
| `regulation-risk`     | 监管风险       | 规则变化导致资产无法交易或贬值的风险。             |
| `leverage`            | 杠杆           | 用借入资金放大仓位与波动。                         |
| `margin-financing`    | 融资融券       | 借券商资金买入或借券卖出的交易。                   |
| `interest-cost`       | 利息成本       | 借入资金需要支付的利息。                           |
| `equity-financing`    | 股权融资       | 出让股份换取资金。                                 |
| `debt-financing`      | 债权融资       | 借款并承诺还本付息。                               |
| `ipo`                 | 首次公开发行   | 公司第一次向公众发行股票。                         |
| `dilution`            | 稀释           | 新增股份导致原股东持股比例下降。                   |
| `npv`                 | 净现值         | 未来现金流折现后减去初始投入。                     |
| `irr`                 | 内部收益率     | 使净现值为零的折现率。                             |
| `due-diligence`       | 尽职调查       | 投资前对项目、财务和法律的核查。                   |
| `exit`                | 退出           | 通过上市、转让或回购收回投资。                     |
| `illiquidity`         | 流动性不足     | 资产难以在短期内变现或需大幅折价。                 |
| `private-equity`      | 私募股权       | 投资非上市公司股权的基金。                         |
| `venture-capital`     | 风险投资       | 投资早期高成长企业的资金。                         |
| `lock-up`             | 锁定期         | 一段时间内不能赎回或卖出的安排。                   |
| `j-curve`             | J 曲线         | 私募基金前期收益为负、后期回升的形态。             |
| `hedge-fund`          | 对冲基金       | 策略灵活、面向特定投资者的基金。                   |
| `quant`               | 量化           | 用数据和规则系统化地做交易决策。                   |
| `fee-structure`       | 费用结构       | 管理费与业绩报酬的组合方式。                       |
| `structured-product`  | 结构化产品     | 用衍生品组合出的收益结构。                         |
| `payoff`              | 收益结构       | 到期收益随标的价格变化的规则。                     |
| `counterparty-risk`   | 对手方风险     | 交易对手无法履约的风险。                           |
| `ponzi-scheme`        | 庞氏骗局       | 用后来者的钱支付先前投资者的回报。                 |
| `illegal-fundraising` | 非法集资       | 未经批准向社会公众吸收资金。                       |
| `guaranteed-return`   | 保本保收益承诺 | 承诺固定回报，通常是危险信号。                     |
| `prospectus`          | 招募说明书     | 产品发行时披露投资范围与风险的法定文件。           |
| `suitability`         | 投资者适当性   | 产品风险与投资者承受能力匹配的要求。               |
| `disclosure`          | 信息披露       | 发行人按规定公开关键信息。                         |
| `capital-gains-tax`   | 资本利得税     | 对买卖差价征收的税。                               |
| `tax`                 | 税负           | 交易、持有和收益环节产生的税。                     |
| `withholding-tax`     | 预提税         | 支付股息或利息时先扣缴的税。                       |
| `reporting`           | 申报           | 按规定向税务机关报告收入与账户信息。               |
| `segregated-account`  | 独立账户       | 客户资产与机构自有资产分开存放。                   |
| `loss-aversion`       | 损失厌恶       | 同等金额的亏损比收益更让人难受。                   |
| `anchoring`           | 锚定           | 过度依赖最初获得的价格或数字。                     |
| `herding`             | 羊群效应       | 因为别人都在做而跟着做。                           |
| `disposition-effect`  | 处置效应       | 急于卖出盈利、死拿亏损的倾向。                     |
| `overconfidence`      | 过度自信       | 高估自己的判断准确率。                             |
| `process`             | 投资流程       | 把目标、期限、风险、配置和复盘固定成可重复的步骤。 |
| `benchmark`           | 基准           | 用来对照投资结果的参照指标。                       |
| `discount-rate`       | 折现率         | 把未来现金流折算成现值的利率。                     |
| `dcf`                 | 现金流折现     | 用未来现金流折现来估算价值。                       |
| `pe-ratio`            | 市盈率         | 股价与每股盈利的比值。                             |
| `pb-ratio`            | 市净率         | 股价与每股净资产的比值。                           |
| `dividend-yield`      | 股息率         | 每股股息与股价的比值。                             |
| `commodity`           | 大宗商品       | 可标准化交易的基础原材料。                         |
| `storage-cost`        | 持有成本       | 储存、保险和资金占用带来的成本。                   |
| `dca`                 | 定投           | 按固定周期投入固定金额。                           |

## 待建实验与图解

| 实验 / 图解      | 挂载主题               | 输入与输出                        | 备注                     |
| ---------------- | ---------------------- | --------------------------------- | ------------------------ |
| 利率与债券价格   | `investing-bonds`      | 利率变化 → 债券价格变化           | 用久期近似，说明非线性   |
| 费率对终值的影响 | `investing-costs`      | 费率、年限、收益率假设 → 终值差额 | 只做假设演示             |
| 股债配置与波动   | `investing-allocation` | 股债比例 → 波动与最大回撤示意     | 用假设序列，不用真实业绩 |
| 保证金与强平     | `investing-futures`    | 保证金率、价格变动 → 强平点       | 说明杠杆的双向放大       |
| 杠杆倍数与回撤   | `investing-leverage`   | 杠杆、标的跌幅 → 净值与平仓       | 与期货实验共用模型       |
| 定投与一次性     | `investing-dca`        | 投入方式、价格序列 → 成本与终值   | 可选，避免「稳赚」暗示   |

## 写作顺序建议

顺序只用于排期，不映射站内顺序。

1. 第一批：投资决策的五件事、债券、股票、基金、成本与费用。
2. 第二批：资产配置与再平衡、风险与收益、基金穿透、黄金与白银、期货。
3. 第三批：融资与杠杆、投资项目、加密货币、估值基础、行为偏差、常见骗局。

## 上线前要补的工程项

- 新建 `/knowledge/investing/` 目录页与 `/knowledge/investing/[slug]/` 主题页，导航加入口。
- `topicHref` 目前硬编码 `/knowledge/macro/`，需要按 module 生成路径。
- `TopicList`、概念索引、实验注册、链接检查、站点地图过滤同步支持投资模块。
- 基础模块与投资模块的主题之间做交叉链接，避免重复正文。

相关文档：[基础内容大纲](outline.md)、[架构说明](architecture.md)。
