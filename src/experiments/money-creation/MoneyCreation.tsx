import { useState } from 'react';
import { StepController } from '../../components/teaching/StepController';
import { ModelNote } from '../../components/teaching/ModelNote';
import { moneyLedger, money } from '../../models/finance';
const steps = [
  '发放前：只观察本例新增业务，所有新增项目为零。',
  '银行发放 10,000 元贷款，同时增加贷款资产与存款负债；面包店增加存款资产与贷款债务。',
  '面包店支付工资 2,000 元，员工存款增加；同一银行内部转账，存款合计不变。',
  '员工购买 100 元面包。商品从面包店交付员工，支付从员工流向面包店。',
  '面包店用存款偿还 1,000 元本金，对应贷款与存款同时减少；员工仍持有 1,900 元。',
];
export default function MoneyCreation() {
  const [step, setStep] = useState(0);
  const ledger = moneyLedger(step);
  return (
    <section className="experiment" id="money-creation">
      <span className="eyebrow">实验 01 / 分步记账</span>
      <h2>贷款与存款的两本账</h2>
      <p>
        第 {step + 1} / {steps.length} 步
      </p>
      <div className="flow-diagram">
        <span>银行</span>
        <span>→ 贷款 / 存款 →</span>
        <span>面包店</span>
        <span>⇄ 工资 / 货款 ⇄</span>
        <span>员工</span>
      </div>
      <p aria-live="polite">{steps[step]}</p>
      <table>
        <caption>本例新增业务，单位：元</caption>
        <thead>
          <tr>
            <th scope="col">账户项目</th>
            <th scope="col">余额</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['银行贷款资产', ledger.bankLoan],
            ['银行存款负债合计', ledger.bankDeposits],
            ['面包店存款资产', ledger.shopDeposit],
            ['面包店贷款债务', ledger.shopDebt],
            ['员工存款资产', ledger.employeeDeposit],
          ].map(([label, value]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              <td>{money(Number(value))}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <StepController step={step} count={steps.length} onStep={setStep} />
      <ModelNote>
        假定同一家银行，不模拟利息和手续费，面包以成本交付，不另计生产利润。放贷瞬间净财富不增加。银行还受资本、流动性、监管和信用风险等约束。切换步骤即可对照表格中的账户余额。
      </ModelNote>
    </section>
  );
}
