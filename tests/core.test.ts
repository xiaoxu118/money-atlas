import { it, expect } from 'vitest';
import {
  simpleInterest,
  purchasingPower,
  moneyLedger,
} from '../src/models/finance';
import { validateTopics, type TopicMeta } from '../src/lib/content-validation';
it('单利百分比、零利率、零本金、边界和已知结果', () => {
  expect(simpleInterest(10000, 3)).toEqual({ interest: 300, total: 10300 });
  expect(simpleInterest(10000, 0).interest).toBe(0);
  expect(simpleInterest(0, 10).total).toBe(0);
  expect(simpleInterest(1000000, 30, 30).interest).toBe(9000000);
});
it('拒绝越界与非有限输入', () => {
  for (const n of [-1, NaN, Infinity, 1000001])
    expect(() => simpleInterest(n, 3)).toThrow();
  expect(() => simpleInterest(100, 31)).toThrow();
  expect(() => purchasingPower(100, -100, 10)).toThrow();
  expect(() => purchasingPower(100, 3, 31)).toThrow();
  expect(() => moneyLedger(1.5)).toThrow();
});
it('购买力零通胀、正负通胀、零期限', () => {
  expect(purchasingPower(100, 0, 30)).toEqual({
    futurePrice: 100,
    realValue: 100,
  });
  expect(purchasingPower(100, 3, 0).realValue).toBe(100);
  expect(purchasingPower(100, 3, 10).realValue).toBeCloseTo(74.4094, 4);
  expect(purchasingPower(100, -5, 10).realValue).toBeGreaterThan(100);
});
it('放贷同时增加资产负债，内部转账不改变合计，还本同减', () => {
  expect(moneyLedger(0).bankDeposits).toBe(0);
  expect(moneyLedger(1).bankLoan).toBe(10000);
  for (let step = 0; step <= 4; step++) {
    const s = moneyLedger(step);
    expect(s.bankLoan).toBe(s.bankDeposits);
    expect(s.shopDeposit + s.employeeDeposit).toBe(s.bankDeposits);
  }
  expect(moneyLedger(2).bankDeposits).toBe(moneyLedger(3).bankDeposits);
  expect(moneyLedger(4).shopDeposit).toBe(7100);
  expect(moneyLedger(4).bankLoan).toBe(9000);
});
const topic = (id: string, patch: Partial<TopicMeta> = {}): TopicMeta => ({
  id,
  slug: id,
  module: 'macro',
  status: 'published',
  concepts: ['money'],
  ...patch,
});
it('主题校验拒绝重复 ID、重复路径和无效概念，主题之间无阅读门槛', () => {
  expect(() => validateTopics([topic('a'), topic('a')], ['money'])).toThrow(
    '重复主题 ID',
  );
  expect(() =>
    validateTopics([topic('a'), topic('b', { slug: 'a' })], ['money']),
  ).toThrow('路径');
  expect(() => validateTopics([topic('a')], [])).toThrow('概念');
  expect(() =>
    validateTopics([topic('a'), topic('b')], ['money']),
  ).not.toThrow();
});
