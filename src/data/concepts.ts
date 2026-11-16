export interface Concept {
  id: string;
  title: string;
  summary: string;
  topics: string[];
}
export const concepts: Concept[] = [
  {
    id: 'money',
    title: '货币',
    summary: '被广泛接受的支付手段，兼有交换媒介、计价单位和价值储藏职能。',
    topics: ['macro-money'],
  },
  {
    id: 'net-wealth',
    title: '净财富',
    summary:
      '资产减去负债；借款同时增加存款和债务，不直接增加借款瞬间的净财富。',
    topics: ['macro-money'],
  },
  {
    id: 'bank-credit',
    title: '银行信贷',
    summary:
      '银行对客户提供的融资；新增贷款通常同时形成贷款资产与客户存款负债。',
    topics: ['macro-money', 'macro-case'],
  },
  {
    id: 'settlement',
    title: '支付结算',
    summary: '交易后的资金或资产交付安排；跨行支付还涉及银行之间的结算。',
    topics: ['macro-settlement'],
  },
  {
    id: 'real-economy',
    title: '实际经济',
    summary: '商品、服务、劳动与生产活动，需与对应的支付和金融记账分别观察。',
    topics: [
      'macro-production',
      'macro-employment',
      'macro-productivity',
      'macro-case',
    ],
  },
  {
    id: 'interest-rate',
    title: '利率',
    summary: '使用资金的价格，须明确币种、期限、信用、合同和计息方式。',
    topics: [
      'macro-interest-rates',
      'macro-rate-changes',
      'macro-loan-payment',
      'macro-policy',
      'investing-macro-assets',
    ],
  },
  {
    id: 'real-interest',
    title: '实际利率',
    summary:
      '考虑价格变化后的购买力收益；精确关系为 (1 + 名义利率) ÷ (1 + 通胀率) − 1。',
    topics: ['macro-interest-rates', 'macro-nominal-real', 'macro-gold-silver'],
  },
  {
    id: 'inflation',
    title: '通胀与通缩',
    summary: '总体价格水平持续上涨或下降；涨价速度下降不等于价格下降。',
    topics: [
      'macro-inflation',
      'macro-inflation-expectations',
      'macro-exchange-rate',
      'investing-cash',
      'investing-macro-assets',
    ],
  },
  {
    id: 'cpi',
    title: '消费价格指数',
    summary:
      '按特定居民消费篮子及权重汇总的价格指数，不等于每个家庭的个人涨幅。',
    topics: ['macro-inflation', 'macro-inflation-measurement'],
  },
  {
    id: 'central-bank',
    title: '中央银行',
    summary: '承担货币政策、发行或结算等公共职能的机构；具体职责因制度而异。',
    topics: ['macro-banking', 'macro-money-supply', 'macro-central-bank'],
  },
  {
    id: 'deposit-insurance',
    title: '存款保险',
    summary: '按适用条件保护合格存款的制度，保障对象、机构与限额需要分别核对。',
    topics: ['macro-banking'],
  },
  {
    id: 'maturity-mismatch',
    title: '期限错配',
    summary:
      '资产和负债的收付款期限不同，例如较长期贷款由可随时提取的存款支持。',
    topics: ['macro-banking'],
  },
  {
    id: 'money-supply',
    title: '货币供应量',
    summary:
      '按持有人、发行部门和工具范围统计的货币总量，同名口径跨地区可能不同。',
    topics: ['macro-money-supply'],
  },
  {
    id: 'compound-interest',
    title: '复利',
    summary: '已产生且留存的利息或收益也进入以后各期的计息基础。',
    topics: ['macro-compound'],
  },
  {
    id: 'present-value',
    title: '现值',
    summary: '将指定未来现金流按匹配的折现率折算为今天的金额。',
    topics: ['macro-compound'],
  },
  {
    id: 'annualized-rate',
    title: '年化收益率',
    summary: '把特定期间回报换算成年度尺度；累计收益的几何年化与算术平均不同。',
    topics: ['macro-compound'],
  },
  {
    id: 'policy-rate',
    title: '政策利率',
    summary: '央行用来影响相关资金价格的政策工具利率，不等于所有个人贷款利率。',
    topics: ['macro-rate-changes', 'macro-central-bank'],
  },
  {
    id: 'amortization',
    title: '分期摊还',
    summary: '按照合同在多期偿还本金，利息通常与每期尚未偿还的本金有关。',
    topics: ['macro-loan-payment'],
  },
  {
    id: 'yield-curve',
    title: '收益率曲线',
    summary: '同一时点、可比信用和币种下，不同到期期限收益率形成的关系。',
    topics: ['macro-yield-curve'],
  },
  {
    id: 'term-premium',
    title: '期限溢价',
    summary: '投资者承担较长期利率等风险而要求的额外补偿，可能随市场条件变化。',
    topics: ['macro-yield-curve'],
  },
  {
    id: 'core-inflation',
    title: '核心通胀',
    summary:
      '通过剔除或弱化部分价格波动来观察趋势的指标，具体方法依统计机构定义。',
    topics: ['macro-inflation-measurement'],
  },
  {
    id: 'ppi',
    title: '生产者价格指数',
    summary: '从生产者销售价格视角观察的价格变化指标，范围与权重需按地区核对。',
    topics: ['macro-inflation-measurement'],
  },
  {
    id: 'inflation-expectation',
    title: '通胀预期',
    summary:
      '对未来价格变化的判断，可进入工资、定价和借贷决策，但不是已发生事实。',
    topics: ['macro-inflation-expectations'],
  },
  {
    id: 'nominal-vs-real',
    title: '名义与实际',
    summary:
      '名义值按当期金额计量，实际值按指定价格指数调整，需匹配基期与对象。',
    topics: [
      'macro-nominal-real',
      'macro-gdp',
      'macro-asset-classes',
      'macro-reading-charts',
    ],
  },
  {
    id: 'gdp',
    title: '国内生产总值',
    summary: '一定地域和时期内生产形成的增加值，可从生产、收入和支出视角核算。',
    topics: ['macro-gdp', 'macro-productivity'],
  },
  {
    id: 'real-gdp',
    title: '实际 GDP',
    summary: '剔除指定价格变化后的产出指标，用于区别数量变化与名义金额变化。',
    topics: ['macro-gdp'],
  },
  {
    id: 'unemployment',
    title: '失业与失业率',
    summary:
      '按统计定义无工作、可工作且求职者属于失业人口；失业率分母为劳动力。',
    topics: ['macro-employment', 'macro-business-cycle'],
  },
  {
    id: 'business-cycle',
    title: '经济周期',
    summary: '总体经济活动扩张与收缩的波动，阶段和长度不按固定时钟运行。',
    topics: ['macro-business-cycle', 'investing-cycles'],
  },
  {
    id: 'reserve-ratio',
    title: '准备金要求',
    summary:
      '按适用负债等基准要求持有准备金的制度，不等于可机械套用的信贷放大倍数。',
    topics: ['macro-central-bank'],
  },
  {
    id: 'open-market',
    title: '公开市场操作',
    summary: '央行通过合格资产交易或融资安排影响准备金和金融条件的操作。',
    topics: ['macro-central-bank'],
  },
  {
    id: 'qe',
    title: '量化宽松',
    summary: '央行资产购买等政策安排，通常扩大资产负债表并影响期限与金融条件。',
    topics: ['macro-central-bank'],
  },
  {
    id: 'fiscal-policy',
    title: '财政政策',
    summary: '政府通过支出、税收和转移等安排影响需求、分配与供给能力。',
    topics: ['macro-fiscal'],
  },
  {
    id: 'deficit',
    title: '财政赤字',
    summary: '一定时期按相应口径计算的支出超过收入的差额，是流量而非债务存量。',
    topics: ['macro-fiscal'],
  },
  {
    id: 'government-debt',
    title: '政府债务',
    summary: '某时点政府承担的债务存量，需核对部门范围、期限、币种和偿付安排。',
    topics: ['macro-fiscal'],
  },
  {
    id: 'direct-tax',
    title: '直接税',
    summary: '通常对所得或财产等直接征收的税类，最终经济负担仍可能发生转移。',
    topics: ['macro-tax'],
  },
  {
    id: 'progressive-tax',
    title: '累进税',
    summary: '税基增加时适用边际税率按规则提高，最高边际税率不等于平均税率。',
    topics: ['macro-tax'],
  },
  {
    id: 'exchange-rate',
    title: '汇率',
    summary: '一种货币以另一种货币表示的价格，判断升贬值前必须明确报价方向。',
    topics: [
      'macro-exchange-rate',
      'investing-fx-commodities',
      'investing-macro-assets',
    ],
  },
  {
    id: 'current-account',
    title: '经常账户',
    summary: '记录居民与非居民之间的货物、服务、收入和相应转移等交易的账户。',
    topics: ['macro-balance-payments'],
  },
  {
    id: 'capital-account',
    title: '资本账户',
    summary:
      '狭义上记录资本转移等交易；多数跨境投资买卖属于金融账户，不能混称。',
    topics: ['macro-balance-payments'],
  },
  {
    id: 'risk-premium',
    title: '风险溢价',
    summary: '投资者为承担某种风险而要求的额外预期补偿，不是保证可获得的收益。',
    topics: [
      'macro-risk-return',
      'investing-invest-vs-speculation',
      'investing-cycles',
    ],
  },
  {
    id: 'volatility',
    title: '波动率',
    summary: '描述收益或价格变化离散程度的统计量，计算须统一频率和口径。',
    topics: ['macro-risk-return', 'investing-risk-measures', 'investing-dca'],
  },
  {
    id: 'diversification',
    title: '分散化',
    summary: '通过分配不同风险来源降低部分集中风险，不能消除全部损失可能。',
    topics: ['macro-risk-return'],
  },
  {
    id: 'opportunity-cost',
    title: '机会成本',
    summary: '选择某方案而放弃的可比替代机会价值，不等于实际发生的账单费用。',
    topics: ['macro-risk-return'],
  },
  {
    id: 'asset-class',
    title: '资产类别',
    summary: '按权利、现金流和风险特征形成的分类；基金外壳并非独立风险类别。',
    topics: ['macro-asset-classes'],
  },
  {
    id: 'liquidity',
    title: '流动性',
    summary: '在需要时以合理成本交易或转换为可用资金的能力。',
    topics: ['macro-asset-classes', 'investing-cash', 'investing-real-estate'],
  },
  {
    id: 'gold',
    title: '黄金',
    summary: '兼具首饰、投资、储备和技术用途的金属，实物本身不支付合同利息。',
    topics: ['macro-gold-silver', 'investing-precious-metals'],
  },
  {
    id: 'silver',
    title: '白银',
    summary: '具有工业、首饰和投资等用途的金属，需求结构与黄金不同。',
    topics: ['macro-gold-silver', 'investing-precious-metals'],
  },
  {
    id: 'store-of-value',
    title: '价值储藏',
    summary:
      '将购买力从现在转移到未来的职能，不代表名义价格或实际购买力永不下降。',
    topics: ['macro-gold-silver'],
  },
  {
    id: 'index-number',
    title: '指数',
    summary: '以特定基期和方法标准化的比较尺度；指数点数不直接等于货币金额。',
    topics: ['macro-reading-charts'],
  },
  {
    id: 'yoy',
    title: '同比',
    summary: '与上年相同期间的变化比较，区别于与前一个相邻期间的环比。',
    topics: ['macro-reading-charts'],
  },
  {
    id: 'chart-misread',
    title: '图表误读',
    summary: '因坐标、单位、基期、口径或窗口混淆而对数据产生错误解释。',
    topics: ['macro-reading-charts', 'macro-data-revision'],
  },
  {
    id: 'base-period',
    title: '基期',
    summary: '指数或比较中选定的参考时期，改变基期不等于实际活动发生同幅变化。',
    topics: ['macro-data-revision'],
  },
  {
    id: 'return-source',
    title: '收益来源',
    summary: '利息、分红、租金、经营增长或转售价格变化等形成回报的渠道。',
    topics: ['investing-invest-vs-speculation'],
  },
  {
    id: 'speculation',
    title: '投机',
    summary: '较侧重未来价格变化或交易机会的判断活动，不能只按持有天数划分。',
    topics: ['investing-invest-vs-speculation'],
  },
  {
    id: 'asset-allocation',
    title: '资产配置',
    summary:
      '按目标与约束分配不同风险来源的资产暴露，不等于固定比例适用于所有人。',
    topics: ['investing-investment-process', 'investing-allocation'],
  },
  {
    id: 'risk-tolerance',
    title: '风险承受',
    summary:
      '承担损失的意愿与实际能力，需与现金需求、负债和收入稳定性一起判断。',
    topics: ['investing-investment-process'],
  },
  {
    id: 'horizon',
    title: '资金期限',
    summary: '预计持有或可能需要动用资金的时间范围，影响流动性与风险约束。',
    topics: ['investing-investment-process'],
  },
  {
    id: 'max-drawdown',
    title: '最大回撤',
    summary: '观察期内从一个历史峰值到其后谷底的最大相对跌幅。',
    topics: ['investing-risk-measures'],
  },
  {
    id: 'sharpe-ratio',
    title: '夏普比率',
    summary: '以超额收益相对波动衡量的一种指标，比较须匹配频率和无风险基准。',
    topics: ['investing-risk-measures'],
  },
  {
    id: 'correlation',
    title: '相关性',
    summary:
      '两组变量共同变化方向与程度的统计关系，不证明因果且可能随时期改变。',
    topics: ['investing-allocation'],
  },
  {
    id: 'rebalancing',
    title: '再平衡',
    summary: '按事先规则调整漂移后的权重，使其回到指定风险或配置目标。',
    topics: ['investing-allocation'],
  },
  {
    id: 'fee',
    title: '费用',
    summary: '持有、交易或服务产生的收费，须分清一次性与持续计提。',
    topics: ['investing-costs'],
  },
  {
    id: 'expense-ratio',
    title: '费用率',
    summary: '按定义将持续运营费用与资产基准比较的比例，覆盖项目依产品说明。',
    topics: ['investing-costs'],
  },
  {
    id: 'slippage',
    title: '滑点',
    summary: '实际成交价与预期或参照价格的差异，不等于全部交易费用。',
    topics: ['investing-costs'],
  },
  {
    id: 'tax',
    title: '税务成本',
    summary: '按地区、身份、收入性质与交易安排产生的税负，不适用统一全球税率。',
    topics: ['investing-costs'],
  },
  {
    id: 'order-type',
    title: '委托类型',
    summary: '交易委托对价格、触发条件和有效期限等作出的规则约定。',
    topics: ['investing-market-mechanics'],
  },
  {
    id: 'spread',
    title: '买卖价差',
    summary: '同一时点买价与卖价的差距，是交易摩擦的一部分。',
    topics: ['investing-market-mechanics', 'investing-precious-metals'],
  },
  {
    id: 't-plus-one',
    title: 'T+1',
    summary:
      '通常指交易日后一个营业日的某项处理安排；交收与可否当日交易应分别核对。',
    topics: ['investing-market-mechanics'],
  },
  {
    id: 'limit-up-down',
    title: '涨跌幅限制',
    summary: '市场对指定证券和时段的价格变动限制，不等于一定能在限价成交。',
    topics: ['investing-market-mechanics'],
  },
  {
    id: 'dca',
    title: '定额分批投入',
    summary: '按固定间隔投入相同金额，改变资金暴露时点但不能消除标的下跌风险。',
    topics: ['investing-dca'],
  },
  {
    id: 'money-fund',
    title: '货币基金',
    summary: '主要投资短期货币市场工具的基金，其份额并非银行存款。',
    topics: ['investing-cash'],
  },
  {
    id: 'bond',
    title: '债券',
    summary:
      '发行人按约定支付利息和偿还本金等义务的债务证券，存在履约及价格风险。',
    topics: ['investing-bonds'],
  },
  {
    id: 'coupon',
    title: '票息',
    summary: '按债券面值与合同利率等规则计算的利息，与市场到期收益率不同。',
    topics: ['investing-bonds'],
  },
  {
    id: 'yield-to-maturity',
    title: '到期收益率',
    summary:
      '使约定未来现金流现值等于债券价格的折现率，依履约与再投资假设解释。',
    topics: ['investing-bonds'],
  },
  {
    id: 'duration',
    title: '久期',
    summary:
      '描述债券现金流时间分布或利率敏感度的指标，须区分麦考利与修正等口径。',
    topics: ['investing-bonds'],
  },
  {
    id: 'credit-rating',
    title: '信用评级',
    summary: '评级机构按方法对信用风险作出的意见，不是偿还或价格保证。',
    topics: ['investing-bonds'],
  },
  {
    id: 'convertible-bond',
    title: '可转换债券',
    summary: '按条款可转换为股份的债券，同时受债务和转换权价值影响。',
    topics: ['investing-convertible-bonds'],
  },
  {
    id: 'conversion-premium',
    title: '转股溢价',
    summary: '可转债价格相对转股价值的溢价比例，不等于未来收益率。',
    topics: ['investing-convertible-bonds'],
  },
  {
    id: 'equity',
    title: '股权与股票',
    summary: '企业剩余权益的持有形式，权利、分配与清算顺序依股类和制度而定。',
    topics: ['investing-equities'],
  },
  {
    id: 'dividend',
    title: '股息与分红',
    summary: '企业按安排向股东分配的现金或其他权益，并非无成本的额外财富。',
    topics: ['investing-equities'],
  },
  {
    id: 'earnings',
    title: '盈利',
    summary: '按会计口径确认的利润，不等于同期实际现金流入。',
    topics: ['investing-equities'],
  },
  {
    id: 'pe-ratio',
    title: '市盈率',
    summary: '股价与每股盈利之比，必须区分历史、预测及持续盈利口径。',
    topics: ['investing-equities', 'investing-valuation'],
  },
  {
    id: 'fund',
    title: '基金',
    summary: '汇集资金按指定目标持有资产的组织工具，风险来自底层、策略和结构。',
    topics: ['investing-funds'],
  },
  {
    id: 'active-passive',
    title: '主动与被动',
    summary: '主动按策略选择资产，被动通常追踪某项指数；两者都可能发生损失。',
    topics: ['investing-funds'],
  },
  {
    id: 'index-fund',
    title: '指数基金',
    summary: '以追踪特定指数表现为目标的基金，仍有费用、跟踪和指数集中风险。',
    topics: ['investing-funds'],
  },
  {
    id: 'etf',
    title: '交易所交易基金',
    summary:
      '在交易所交易的基金形式，交易价格与净值可能存在差异，并非都采用被动策略。',
    topics: ['investing-funds'],
  },
  {
    id: 'tracking-error',
    title: '跟踪误差',
    summary: '基金相对指定基准的收益偏离的统计程度，与单次跟踪差额不同。',
    topics: ['investing-funds'],
  },
  {
    id: 'look-through',
    title: '穿透分析',
    summary: '沿持有链识别最终资产、负债和风险来源，并合并重复暴露。',
    topics: ['investing-look-through'],
  },
  {
    id: 'fund-of-funds',
    title: '基金中的基金',
    summary: '主要投资其他基金的结构，可能同时承担上层与底层费用。',
    topics: ['investing-look-through'],
  },
  {
    id: 'layered-nesting',
    title: '多层嵌套',
    summary: '通过多层工具间接持有底层资产，需核对各层权利、杠杆、费用和期限。',
    topics: ['investing-look-through'],
  },
  {
    id: 'custody',
    title: '托管与保管',
    summary:
      '按制度和合同持有、记录或核对资产的安排，不保证资产价格或投资回报。',
    topics: ['investing-precious-metals', 'investing-custody'],
  },
  {
    id: 'rental-yield',
    title: '租金收益率',
    summary: '按指定租金口径与资产价格计算的比例，毛租金与净租金应分别解释。',
    topics: ['investing-real-estate'],
  },
  {
    id: 'leverage',
    title: '杠杆',
    summary: '以借款或衍生品扩大相对自有资金的风险敞口，同时放大收益与损失。',
    topics: ['investing-real-estate', 'investing-leverage'],
  },
  {
    id: 'reit',
    title: '房地产投资信托',
    summary:
      '通过证券等结构持有或经营收益型房地产等资产，规则与风险依制度和结构而异。',
    topics: ['investing-real-estate'],
  },
  {
    id: 'futures',
    title: '期货',
    summary:
      '按标准化等合同条款约定未来交易或结算标的的合约，涉及保证金和到期安排。',
    topics: ['investing-futures'],
  },
  {
    id: 'margin',
    title: '保证金',
    summary: '支持合约或融资履约的资金要求，并非获得全额资产的价格折扣。',
    topics: ['investing-futures'],
  },
  {
    id: 'mark-to-market',
    title: '盯市',
    summary: '按市场或规定估值计算头寸盈亏，可能定期结算并影响保证金要求。',
    topics: ['investing-futures'],
  },
  {
    id: 'liquidation',
    title: '平仓与强制平仓',
    summary: '终止头寸或按约定被动处置头寸的过程，成交价和剩余损失未必可控。',
    topics: ['investing-futures', 'investing-leverage'],
  },
  {
    id: 'delivery',
    title: '交割',
    summary: '到期按合约交付标的或现金结算的安排，区别于提前对冲平仓。',
    topics: ['investing-futures'],
  },
  {
    id: 'option',
    title: '期权',
    summary: '买方支付权利金获得按条件买卖标的的权利，卖方承担相应义务。',
    topics: ['investing-options'],
  },
  {
    id: 'premium',
    title: '权利金',
    summary: '取得期权权利所付的价格，需与合约乘数及费用一起核对。',
    topics: ['investing-options'],
  },
  {
    id: 'strike',
    title: '执行价格',
    summary: '期权行权时按合同买卖标的的约定价格，不等于期权自身成交价。',
    topics: ['investing-options'],
  },
  {
    id: 'implied-volatility',
    title: '隐含波动率',
    summary:
      '按指定定价模型从期权市场价格反推出的波动参数，不是保证实现的波动。',
    topics: ['investing-options'],
  },
  {
    id: 'blockchain',
    title: '区块链',
    summary:
      '按协议维护和验证记录的分布式技术结构，不保证记录对应资产的经济价值。',
    topics: ['investing-crypto'],
  },
  {
    id: 'wallet',
    title: '钱包与私钥',
    summary:
      '管理签名和访问链上资产所需凭证的工具或安排，私钥控制与托管责任须分清。',
    topics: ['investing-crypto'],
  },
  {
    id: 'stablecoin',
    title: '稳定币',
    summary: '试图与指定参照价值保持稳定的加密资产，仍有储备、赎回与脱锚风险。',
    topics: ['investing-crypto'],
  },
  {
    id: 'regulation-risk',
    title: '监管风险',
    summary: '因适用制度、执法和服务资格变化而影响交易、持有或退出的风险。',
    topics: ['investing-crypto'],
  },
  {
    id: 'commodity',
    title: '大宗商品',
    summary:
      '能源、金属或农产品等实物商品类别，价格受供需、库存和持有结构影响。',
    topics: ['investing-fx-commodities'],
  },
  {
    id: 'storage-cost',
    title: '储存成本',
    summary: '持有实物或相关敞口涉及的仓储、保险等成本，可影响期货价格结构。',
    topics: ['investing-fx-commodities'],
  },
  {
    id: 'structured-product',
    title: '结构化产品',
    summary: '通过债务、衍生条款等组合形成特定支付结构的工具，需逐条核对合同。',
    topics: ['investing-structured-products'],
  },
  {
    id: 'payoff',
    title: '支付结构',
    summary: '给定标的与合同条件时的支付关系，净收益还要扣除买入成本等项目。',
    topics: ['investing-structured-products'],
  },
  {
    id: 'counterparty-risk',
    title: '交易对手风险',
    summary: '合同另一方不能按约履行支付或交付义务的风险。',
    topics: ['investing-structured-products', 'investing-custody'],
  },
  {
    id: 'margin-financing',
    title: '保证金融资',
    summary: '以账户资产等担保借入资金投资，可能发生追保和被动处置。',
    topics: ['investing-leverage'],
  },
  {
    id: 'interest-cost',
    title: '融资利息',
    summary: '使用借入资金按约应付的利息，减少权益净回报并可能随条件变化。',
    topics: ['investing-leverage'],
  },
  {
    id: 'equity-financing',
    title: '股权融资',
    summary: '以发行或转让股权取得资金的安排，新股与老股转让的资金归属不同。',
    topics: ['investing-corporate-finance'],
  },
  {
    id: 'debt-financing',
    title: '债权融资',
    summary: '通过借款或发行债务工具取得资金，同时形成偿付义务。',
    topics: ['investing-corporate-finance'],
  },
  {
    id: 'ipo',
    title: '首次公开发行',
    summary: '企业首次向公众发行股票的过程，需区分新股融资和既有股份出售。',
    topics: ['investing-corporate-finance'],
  },
  {
    id: 'dilution',
    title: '股权稀释',
    summary:
      '因总股数或权利结构变化导致原持有人占比等变化，不等于财富必然同比减少。',
    topics: ['investing-corporate-finance'],
  },
  {
    id: 'npv',
    title: '净现值',
    summary: '各期现金流按指定折现率折回今天后的合计，含初始投入。',
    topics: ['investing-projects'],
  },
  {
    id: 'irr',
    title: '内部收益率',
    summary: '使现金流净现值为零的折现率，复杂现金流可能没有或有多个解。',
    topics: ['investing-projects'],
  },
  {
    id: 'due-diligence',
    title: '尽职调查',
    summary: '核实业务、财务、合同、权利与风险等重要事实，不能只依赖宣传数字。',
    topics: ['investing-projects'],
  },
  {
    id: 'exit',
    title: '退出',
    summary: '通过出售、回购、到期、分配等方式回收资金，时间和价格可能不确定。',
    topics: ['investing-projects'],
  },
  {
    id: 'illiquidity',
    title: '非流动性',
    summary: '资产难以在需要时以合理价格迅速变现的特征，不等于账面价值稳定。',
    topics: ['investing-projects'],
  },
  {
    id: 'private-equity',
    title: '私募股权',
    summary:
      '通常通过非公开结构投资企业股权，持有、披露和退出条件依合同与制度而异。',
    topics: ['investing-private-equity'],
  },
  {
    id: 'venture-capital',
    title: '风险投资',
    summary: '面向创业或成长企业的股权投资，技术、经营与退出不确定性较高。',
    topics: ['investing-private-equity'],
  },
  {
    id: 'lock-up',
    title: '锁定期',
    summary:
      '按合同或规则限制出售、转让或赎回的期间，不保证期满就一定能顺利退出。',
    topics: ['investing-private-equity', 'investing-hedge-funds'],
  },
  {
    id: 'j-curve',
    title: 'J 曲线',
    summary:
      '某些长期投资早期负现金流、后期可能回收的形态，不保证所有项目后期转正。',
    topics: ['investing-private-equity'],
  },
  {
    id: 'hedge-fund',
    title: '对冲基金',
    summary: '采用多种灵活策略的私募集合工具，对冲之名不代表低风险或保本。',
    topics: ['investing-hedge-funds'],
  },
  {
    id: 'quant',
    title: '量化投资',
    summary: '使用模型和数据形成或执行投资决策的方法，仍有模型与实施风险。',
    topics: ['investing-hedge-funds'],
  },
  {
    id: 'fee-structure',
    title: '费用结构',
    summary:
      '管理费、业绩费及其他收费的基准、时点和条件组合，不能只看一个百分比。',
    topics: ['investing-hedge-funds'],
  },
  {
    id: 'ponzi-scheme',
    title: '庞氏骗局',
    summary:
      '用新增参与者的资金向旧参与者支付所谓收益，而非依靠可持续投资收入的骗局。',
    topics: ['investing-fraud'],
  },
  {
    id: 'illegal-fundraising',
    title: '非法集资',
    summary:
      '违反适用法律的资金募集行为，具体要件须按当地法律判断，不能仅凭名称定性。',
    topics: ['investing-fraud'],
  },
  {
    id: 'guaranteed-return',
    title: '保本保收益承诺',
    summary:
      '对本金或回报作保证的表述，须核对主体、合同、条件和履约能力，不等于风险消失。',
    topics: ['investing-fraud'],
  },
  {
    id: 'prospectus',
    title: '招募说明书',
    summary: '披露发行或基金的目标、策略、费用、风险和投资者权利等信息的文件。',
    topics: ['investing-disclosure'],
  },
  {
    id: 'suitability',
    title: '适当性',
    summary:
      '产品或服务与投资者风险、知识、财务和目标等条件的匹配要求，具体义务依制度而异。',
    topics: ['investing-disclosure'],
  },
  {
    id: 'disclosure',
    title: '信息披露',
    summary: '按适用制度和合同提供重要事实的安排，披露不等于对投资价值作担保。',
    topics: ['investing-disclosure'],
  },
  {
    id: 'capital-gains-tax',
    title: '资本利得税',
    summary:
      '部分制度对资产转让等利得征收的税，适用对象和税率依地区与身份而定。',
    topics: ['investing-tax-cross-border'],
  },
  {
    id: 'withholding-tax',
    title: '预扣税',
    summary: '付款人在支付时按适用规定代扣的税款，不必然等于收款人的最终税额。',
    topics: ['investing-tax-cross-border'],
  },
  {
    id: 'reporting',
    title: '税务申报',
    summary:
      '按适用身份、收入和账户要求提供税务信息的义务，不能由开户地单独判断。',
    topics: ['investing-tax-cross-border'],
  },
  {
    id: 'segregated-account',
    title: '账户隔离',
    summary:
      '客户与机构等资产按规则分开记录或保管的安排，破产效果仍依适用法律与合同。',
    topics: ['investing-custody'],
  },
  {
    id: 'loss-aversion',
    title: '损失厌恶',
    summary: '对同等损失的感受可能强于收益，从而影响风险选择与承认亏损的行为。',
    topics: ['investing-behavior'],
  },
  {
    id: 'anchoring',
    title: '锚定',
    summary: '过度依赖买入价或最初数字等参照点，忽略后来出现的相关事实。',
    topics: ['investing-behavior'],
  },
  {
    id: 'herding',
    title: '从众',
    summary: '因他人行为或市场热度而跟随决策，不等于取得独立的价值证据。',
    topics: ['investing-behavior'],
  },
  {
    id: 'disposition-effect',
    title: '处置效应',
    summary: '倾向于较快兑现盈利、较久保留亏损头寸的行为模式。',
    topics: ['investing-behavior'],
  },
  {
    id: 'overconfidence',
    title: '过度自信',
    summary: '高估自身信息、预测或执行能力，可能导致过度交易或风险集中。',
    topics: ['investing-behavior'],
  },
  {
    id: 'process',
    title: '决策过程',
    summary: '作出判断时的信息、假设、约束和执行步骤，需与最终结果分别评价。',
    topics: ['investing-journal'],
  },
  {
    id: 'benchmark',
    title: '比较基准',
    summary: '评价表现的参照，必须匹配币种、风险、期间与现金流口径。',
    topics: ['investing-journal'],
  },
  {
    id: 'discount-rate',
    title: '折现率',
    summary:
      '把未来现金流折回今天所用的收益要求，需匹配现金流的风险、币种和权利层级。',
    topics: ['investing-macro-assets', 'investing-valuation'],
  },
  {
    id: 'pb-ratio',
    title: '市净率',
    summary: '股价与每股账面净资产的比值，受资产质量、行业和会计口径影响。',
    topics: ['investing-valuation'],
  },
  {
    id: 'dividend-yield',
    title: '股息率',
    summary: '指定期间每股股息相对股价的比例，历史股息不保证未来继续支付。',
    topics: ['investing-valuation'],
  },
  {
    id: 'dcf',
    title: '现金流折现',
    summary:
      '以未来现金流现值估计价值的方法，需明确现金流类型、折现率及终值假设。',
    topics: ['investing-valuation'],
  },
];
export const conceptIds = concepts.map((concept) => concept.id);
