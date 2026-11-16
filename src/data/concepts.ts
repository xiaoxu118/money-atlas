export const concepts = [
  {
    id: 'money',
    title: '货币',
    summary: '广泛接受的支付手段，具有交换媒介、计价单位和价值储藏职能。',
    topics: ['macro-money'],
  },
  {
    id: 'net-wealth',
    title: '净财富',
    summary: '资产减去负债。新增借款同时增加存款和债务，并不直接增加净财富。',
    topics: ['macro-money'],
  },
  {
    id: 'bank-credit',
    title: '贷款与存款',
    summary: '商业银行放贷通常同时记入贷款资产和存款负债；还本使对应项目减少。',
    topics: ['macro-money'],
  },
  {
    id: 'settlement',
    title: '支付结算',
    summary: '转账改变存款的持有人；跨行支付还涉及银行间结算。',
    topics: ['macro-settlement'],
  },
  {
    id: 'real-economy',
    title: '实际经济',
    summary: '劳动、生产和商品交付，与相应支付流需要分别观察。',
    topics: ['macro-production'],
  },
  {
    id: 'interest-rate',
    title: '利率',
    summary:
      '使用资金的价格。政策利率、市场利率和个人贷款利率之间存在传导与差异。',
    topics: ['macro-interest-rates', 'macro-policy'],
  },
  {
    id: 'real-interest',
    title: '实际利率',
    summary: '考虑通胀后的购买力收益，精确关系为 (1+i)/(1+π)−1。',
    topics: ['macro-interest-rates'],
  },
  {
    id: 'inflation',
    title: '通胀与通缩',
    summary: '总体价格水平持续上涨或下降；通胀放缓不等于价格下降。',
    topics: ['macro-inflation'],
  },
  {
    id: 'cpi',
    title: '消费价格指数',
    summary: '按权重汇总居民消费篮子中的价格变化，个人感受可因消费结构而不同。',
    topics: ['macro-inflation'],
  },
] as const;
export const conceptIds = concepts.map((c) => c.id);
