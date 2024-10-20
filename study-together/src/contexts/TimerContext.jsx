import { createContext, useContext, useState } from 'react';

const TimerContext = createContext();

export function TimerProvider({ children }) {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [focusScore, setFocusScore] = useState(0);

  return (
    <TimerContext.Provider value={{ 
      time, 
      setTime, 
      isActive, 
      setIsActive,
      focusScore,
      setFocusScore
    }}>
      {children}
    </TimerContext.Provider>
  );
}

export const useTimerContext = () => useContext(TimerContext);