import { useTimer } from '../../hooks/useTimer';
import Button from '../ui/Button';
import Card from '../ui/Card';

const Timer = () => {
  const { time, isActive, startTimer, pauseTimer, resetTimer } = useTimer();

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card>
      <div className="text-center">
        <h2 className="text-6xl text-white font-bold mb-8">{formatTime(time)}</h2>
        <div className="flex justify-center gap-4">
          <Button className='bg-gradient-to-br from-pink-500 to-orange-400 px-8' onClick={isActive ? pauseTimer : startTimer}>
            {isActive ? 'Pause' : 'Start'}
          </Button>
          <Button className='bg-black border border-white px-8'  variant="secondary" onClick={resetTimer}>
            Reset
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Timer;