import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  getThemeClasses: () => {
    bg: string;
    cardBg: string;
    text: string;
    textSecondary: string;
    border: string;
    accent: string;
    accentHover: string;
    surface: string;
    surfaceHover: string;
  };
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('ratio-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ratio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const getThemeClasses = () => {
    if (theme === 'light') {
      return {
        bg: 'bg-gradient-to-br from-green-50 via-white to-green-100',
        cardBg: 'bg-white/90',
        text: 'text-gray-800',
        textSecondary: 'text-gray-600',
        border: 'border-green-200',
        accent: 'bg-green-600',
        accentHover: 'hover:bg-green-700',
        surface: 'bg-green-50',
        surfaceHover: 'hover:bg-green-100'
      };
    } else {
      return {
        bg: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
        cardBg: 'bg-slate-800/95',
        text: 'text-slate-100',
        textSecondary: 'text-slate-400',
        border: 'border-slate-700',
        accent: 'bg-green-600',
        accentHover: 'hover:bg-green-700',
        surface: 'bg-slate-700/50',
        surfaceHover: 'hover:bg-slate-700'
      };
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, getThemeClasses }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};