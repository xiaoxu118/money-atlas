import { useState } from 'react';
import { Slider } from '../../components/ui/slider';
import { Button } from '../../components/ui/button';
import { ModelNote } from '../../components/teaching/ModelNote';
import { purchasingPower, money } from '../../models/finance';
export default function PurchasingPower() {
  const [years, setYears] = useState(10);
  const [inflation, setInflation] = useState(3);
  const result = purchasingPower(100, inflation, years);
  return (
    <section className="experiment" id="purchasing-power">
      <span className="eyebrow">实验 03 / 公式计算</span>
      <h2>固定预算的购买力</h2>
      <label id="years-label">
        经过年数：<output>{years} 年</output>
      </label>
      <Slider
        aria-labelledby="years-label"
        aria-valuetext={`${years}年`}
        min={0}
        max={30}
        step={1}
        value={[years]}
        onValueChange={([v]) => setYears(v!)}
      />
      <label id="inflation-label">
        假设年通胀率：<output>{inflation.toFixed(1)}%</output>
      </label>
      <Slider
        aria-labelledby="inflation-label"
        aria-valuetext={`${inflation.toFixed(1)}%`}
        min={-5}
        max={10}
        step={0.1}
        value={[inflation]}
        onValueChange={([v]) => setInflation(v!)}
      />
      <div className="metrics" aria-live="polite">
        <div>
          原来 100 元的商品，现在需要
          <strong>{money(result.futurePrice)}</strong>
        </div>
        <div>
          现在 100 元折合原来购买力
          <strong data-testid="power">{money(result.realValue)}</strong>
        </div>
      </div>
      <svg
        viewBox="0 0 560 95"
        role="img"
        aria-label={`原来购买力100元，现在折合${result.realValue.toFixed(2)}元`}
      >
        <text x="0" y="20">
          原来 100 元
        </text>
        <rect
          x="150"
          y="5"
          width="270"
          height="22"
          rx="5"
          fill="var(--muted)"
        />
        <text x="0" y="65">
          现在的购买力
        </text>
        <rect
          x="150"
          y="48"
          width={Math.min(390, 2.7 * result.realValue)}
          height="22"
          rx="5"
          fill="var(--accent)"
        />
      </svg>
      <p>
        未来价格 = 100 × (1 + 年通胀率)<sup>年数</sup>；实际购买力 = 100 ÷ (1 +
        年通胀率)<sup>年数</sup>。图条仅作比较，以数值为准。
      </p>
      <ModelNote>
        假设商品价格每年按同一固定比率变化，预算不变；未考虑收入、利息和消费结构变化，不是通胀预测。支持负通胀，显示四舍五入至分。
      </ModelNote>
      <Button
        variant="outline"
        onClick={() => {
          setYears(10);
          setInflation(3);
        }}
      >
        重置实验
      </Button>
    </section>
  );
}
