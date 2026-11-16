function bounded(value: number, min: number, max: number, label: string) {
  if (!Number.isFinite(value) || value < min || value > max)
    throw new RangeError(`${label}超出教学范围`);
  return value;
}
export function simpleInterest(
  principal: number,
  annualPercent: number,
  years = 1,
) {
  bounded(principal, 0, 1_000_000, '本金');
  bounded(annualPercent, 0, 30, '年利率');
  bounded(years, 0, 30, '期限');
  const interest = ((principal * annualPercent) / 100) * years;
  return { interest, total: principal + interest };
}
export function purchasingPower(
  budget: number,
  inflationPercent: number,
  years: number,
) {
  bounded(budget, 0, 1_000_000, '预算');
  bounded(inflationPercent, -10, 30, '通胀率');
  bounded(years, 0, 30, '年数');
  const factor = (1 + inflationPercent / 100) ** years;
  return { futurePrice: budget * factor, realValue: budget / factor };
}
export function moneyLedger(step: number) {
  if (!Number.isInteger(step) || step < 0 || step > 4)
    throw new RangeError('无效步骤');
  const loan = step === 0 ? 0 : step === 4 ? 9000 : 10000;
  const employee = step < 2 ? 0 : step === 2 ? 2000 : 1900;
  return {
    bankLoan: loan,
    bankDeposits: loan,
    shopDeposit: loan - employee,
    employeeDeposit: employee,
    shopDebt: loan,
  };
}
export const money = (n: number) =>
  `¥${n.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
