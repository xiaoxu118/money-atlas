export const experiments = [
  {
    id: 'money-creation',
    title: '贷款与存款的两本账',
    topic: 'macro-money',
    anchor: 'money-creation',
    summary: '分步观察放贷、转账和还本，核对资产负债的变化。',
  },
  {
    id: 'interest-rates',
    title: '一年贷款要付多少利息？',
    topic: 'macro-interest-rates',
    anchor: 'interest-rates',
    summary: '改变本金与示例贷款年利率，观察单利成本。',
  },
  {
    id: 'purchasing-power',
    title: '固定预算的购买力',
    topic: 'macro-inflation',
    anchor: 'purchasing-power',
    summary: '在固定通胀假设下，比较商品价格与货币购买力。',
  },
] as const;
