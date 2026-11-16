import { it, expect } from 'vitest';
import { charts } from '../src/models/catalog-charts';
it('复利和费用图使用一致的期末计息、扣费时点', () => {
  expect(charts.compound!.series[0]!.values[2]).toBeCloseTo(16288.9463, 4);
  expect(charts.compound!.series[1]!.values[2]).toBe(15000);
  const gross = charts.costs!.series[0]!.values[2]!;
  const net = charts.costs!.series[1]!.values[2]!;
  expect(net / gross).toBeCloseTo(0.99 ** 10, 10);
});
it('债券价格、保证金权益和期权到期盈亏对应明确情景', () => {
  expect(charts.bonds!.series[0]!.values[1]).toBe(100);
  expect(charts.bonds!.series[0]!.values[2]).toBeCloseTo(95.454545, 5);
  expect(charts.futures!.series[0]!.values).toEqual([7000, 10000, 13000]);
  expect(charts.options!.series[0]!.values[3]).toBe(0);
  expect(Math.min(...charts.options!.series[0]!.values)).toBe(-5);
});
it('每张图的横轴位置、标签与数据一致，非等距数值不按等距绘制', () => {
  for (const chart of Object.values(charts)) {
    for (const series of chart.series) {
      expect(series.values).toHaveLength(chart.labels.length);
      expect(series.values.every(Number.isFinite)).toBe(true);
    }
    if (chart.xValues) {
      expect(chart.xValues).toHaveLength(chart.labels.length);
      expect(
        chart.xValues.every((value, i, all) => i === 0 || value > all[i - 1]!),
      ).toBe(true);
    }
  }
  expect(charts['yield-curve']!.xValues).toEqual([1, 5, 10]);
  expect(charts['interest-rates']!.xValues).toEqual([0, 3, 6, 10]);
});
