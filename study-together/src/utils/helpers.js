export const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export const calculateFocusScore = (totalFocusTime, distractions) => {
  const baseScore = (totalFocusTime / (25 * 60)) * 100; // Based on 25-minute sessions
  const distractionPenalty = distractions * 5; // 5 points per distraction
  return Math.max(0, Math.min(100, baseScore - distractionPenalty));
};

export const getPlantStage = (focusScore) => {
  if (focusScore < 30) return 'seedling';
  if (focusScore < 60) return 'growing';
  if (focusScore < 90) return 'thriving';
  return 'blooming';
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 9);
};