import { useEffect } from 'react';
import { useTimerContext } from '../contexts/TimerContext';

export const useTimer = () => {
  const { time, setTime, isActive, setIsActive } = useTimerContext();

  useEffect(() => {
    let interval;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, time, setTime]);

  const startTimer = () => setIsActive(true);
  const pauseTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setTime(25 * 60);
  };

  return { time, isActive, startTimer, pauseTimer, resetTimer };
};