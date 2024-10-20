import Card from '../ui/Card';
import Progress from '../ui/Progress';
import { useTimerContext } from '../../contexts/TimerContext';

const FocusMeter = () => {
  const { focusScore } = useTimerContext();

  return (
    <Card>
      <div className="space-y-4">
        <h3 className="font-medium">Focus Score</h3>
        <Progress value={focusScore} max={100} />
        <div className="flex justify-between text-sm text-gray-500">
          <span>Low Focus</span>
          <span>High Focus</span>
        </div>
      </div>
    </Card>
  );
};

export default FocusMeter;