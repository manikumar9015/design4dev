import { useThemeContext } from '../contexts/ThemeContext';

export const useTheme = () => {
  const { darkMode, toggleDarkMode } = useThemeContext();
  
  return { darkMode, toggleDarkMode };
};