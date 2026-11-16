import { Button } from '../ui/button';

export function StepController({
  step,
  count,
  onStep,
}: {
  step: number;
  count: number;
  onStep: (step: number) => void;
}) {
  return (
    <div className="controls" aria-label="手动切换记账步骤">
      <Button
        variant="outline"
        disabled={step === 0}
        onClick={() => onStep(step - 1)}
      >
        上一步
      </Button>
      <Button
        variant="outline"
        disabled={step === count - 1}
        onClick={() => onStep(step + 1)}
      >
        下一步
      </Button>
      <Button variant="outline" onClick={() => onStep(0)}>
        重置实验
      </Button>
    </div>
  );
}
