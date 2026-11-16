// Fixed teaching scenarios only; labels and assumptions travel with each chart.
const years = [0, 5, 10, 15, 20];
export const charts: Record<
  string,
  {
    title: string;
    labels: string[];
    series: { name: string; values: number[] }[];
    xValues?: number[];
    unit?: string;
    caption: string;
  }
> = {
  compound: {
    title: '同一笔本金，单利与复利的两条路径',
    labels: years.map((y) => `${y}年`),
    series: [
      { name: '年复利 5%', values: years.map((y) => 10000 * 1.05 ** y) },
      { name: '单利 5%', values: years.map((y) => 10000 * (1 + 0.05 * y)) },
    ],
    caption:
      '本金 10,000 元，每年计息一次、利息留存；不含费用。固定收益率仅为计算假设。',
  },
  costs: {
    title: '费用每年发生，影响会逐期累积',
    labels: years.map((y) => `${y}年`),
    series: [
      { name: '未扣费', values: years.map((y) => 10000 * 1.05 ** y) },
      {
        name: '每年增长后扣 1%',
        values: years.map((y) => 10000 * (1.05 * 0.99) ** y),
      },
    ],
    caption:
      '本金 10,000 元；每年先增长 5%，再按期末资产扣 1%。实际产品扣费方式可能不同。',
  },
  'yield-curve': {
    xValues: [1, 5, 10],
    title: '同一个时点，两种期限结构',
    labels: ['1年', '5年', '10年'],
    series: [
      { name: '向上示例', values: [2, 3, 4] },
      { name: '倒挂示例', values: [4, 3, 2.5] },
    ],
    unit: '%',
    caption:
      '横轴是债券到期期限，不是未来日期。均为虚构示例，不是当前行情或预测。',
  },
  bonds: {
    xValues: [0, 5, 10],
    title: '约定现金流不变，折现率越高现值越低',
    labels: ['0%', '5%', '10%'],
    series: [
      { name: '一年后收取 105 元的现值', values: [105, 100, 105 / 1.1] },
    ],
    caption:
      '横轴为要求收益率；价格单位为元。假定一年后足额支付 105 元，未计违约与费用。',
  },
  'risk-measures': {
    title: '期末同为 110，经历却不同',
    labels: ['起点', '观察1', '观察2', '终点'],
    series: [
      { name: '路径 A', values: [100, 120, 90, 110] },
      { name: '路径 B', values: [100, 103, 106, 110] },
    ],
    caption:
      '两条假设资产价值路径。A 从 120 回落至 90，回撤 25%；B 在这些观察点没有回撤。',
  },
  leverage: {
    title: '同一资产变动，权益的幅度更大',
    labels: ['−20%', '−10%', '0%', '10%', '20%'],
    series: [
      { name: '资产收益', values: [-20, -10, 0, 10, 20] },
      { name: '初始资产/权益为 2 倍', values: [-40, -20, 0, 20, 40] },
    ],
    unit: '%',
    caption:
      '横轴为资产涨跌，纵轴为收益。债务本金不变，忽略利息、追保与强平，不是杠杆建议。',
  },
  futures: {
    title: '合约涨跌，先作用于全额名义敞口',
    labels: ['−3%', '0%', '3%'],
    series: [{ name: '多头账户权益（元）', values: [7000, 10000, 13000] }],
    caption:
      '名义合约 100,000 元，初始保证金 10,000 元。未计费用、维持要求与强平，仅演示线性盈亏。',
  },
  options: {
    xValues: [90, 95, 100, 105, 110],
    title: '看涨期权：方向看对，也未必盈利',
    labels: ['90', '95', '100', '105', '110'],
    series: [{ name: '买方到期净盈亏', values: [-5, -5, -5, 0, 5] }],
    caption:
      '横轴为到期标的价格，纵轴为每单位净盈亏；执行价 100、权利金 5，无费用，不计合约乘数。',
  },

  inflation: {
    title: '固定价格假设下的购买力变化',
    labels: years.map((y) => `${y}年`),
    series: [
      {
        name: '原来100元商品的现价',
        values: years.map((y) => 100 * 1.03 ** y),
      },
      {
        name: '100元折合原来购买力',
        values: years.map((y) => 100 / 1.03 ** y),
      },
    ],
    caption:
      '年通胀固定为3%，预算不变，单位为元。假设价格路径，不是未来通胀预测。',
  },
  'interest-rates': {
    xValues: [0, 3, 6, 10],
    title: '固定本金的利率成本敏感性',
    labels: ['0%', '3%', '6%', '10%'],
    series: [{ name: '一年利息（元）', values: [0, 300, 600, 1000] }],
    caption:
      '本金10,000元，一年单利，到期还本付息。不含费用与分期；图中利率不是央行政策利率。',
  },
};
