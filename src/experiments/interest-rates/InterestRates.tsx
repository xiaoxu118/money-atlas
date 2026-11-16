import { useState } from 'react';
import { Slider } from '../../components/ui/slider';
import { Button } from '../../components/ui/button';
import { ModelNote } from '../../components/teaching/ModelNote';
import { money, simpleInterest } from '../../models/finance';
export default function InterestRates() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(3);
  const result = simpleInterest(principal, rate);
  return (
    <section className="experiment" id="interest-rates">
      <span className="eyebrow">实验 02 / 公式计算</span>
      <h2>一年贷款要付多少利息？</h2>
      <label id="principal-label">
        借款本金：<output>{money(principal)}</output>
      </label>
      <Slider
        aria-labelledby="principal-label"
        aria-valuetext={`${principal}元`}
        min={0}
        max={100000}
        step={1000}
        value={[principal]}
        onValueChange={([v]) => setPrincipal(v!)}
      />
      <label id="rate-label">
        示例贷款年利率：<output>{rate.toFixed(1)}%</output>
      </label>
      <Slider
        aria-labelledby="rate-label"
        aria-valuetext={`${rate.toFixed(1)}%，一年利息${result.interest.toFixed(2)}元`}
        min={0}
        max={10}
        step={0.1}
        value={[rate]}
        onValueChange={([v]) => setRate(v!)}
      />
      <svg
        className="loan-diagram"
        viewBox="0 0 560 120"
        role="img"
        aria-label="借款人向贷款人归还本金并支付利息"
      >
        <rect x="5" y="15" width="155" height="90" rx="14" fill="var(--soft)" />
        <text x="82" y="65" textAnchor="middle">
          借款人
        </text>
        <path
          d="M175 60 H380 M365 50 L380 60 L365 70"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <text x="280" y="38" textAnchor="middle">
          到期还本付息
        </text>
        <rect
          x="395"
          y="15"
          width="155"
          height="90"
          rx="14"
          fill="var(--soft)"
        />
        <text x="472" y="65" textAnchor="middle">
          贷款人
        </text>
      </svg>
      <div className="metrics" aria-live="polite">
        <div>
          一年利息
          <strong data-testid="interest">{money(result.interest)}</strong>
        </div>
        <div>
          到期本息合计<strong>{money(result.total)}</strong>
        </div>
      </div>
      <p>
        利息 = 本金 × 年利率 × 1 年。{money(principal)} × {rate.toFixed(1)}% ={' '}
        {money(result.interest)}。
      </p>
      <ModelNote>
        一年单利、到期还本付息，不含手续费、税费、复利和分期还款。输入即时计算，显示四舍五入至分。这是示例贷款年利率，并非央行政策利率。
      </ModelNote>
      <Button
        variant="outline"
        onClick={() => {
          setPrincipal(10000);
          setRate(3);
        }}
      >
        重置实验
      </Button>
    </section>
  );
}
