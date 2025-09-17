import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // 默认 'light'，在 useEffect 中再更新
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // 仅在客户端运行
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(
      savedTheme === 'light' || savedTheme === 'dark'
        ? savedTheme
        : systemPrefersDark ? 'dark' : 'light'
    );
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      onClick={toggleTheme}
      className='toggle-button'
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </div>
  );
};

export default ThemeToggle;