// src/components/ThemeToggle.tsx
import React, { useEffect, useState } from 'react';

const Theme: React.FC = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.body.setAttribute('data-theme', currentTheme);
      setTheme(currentTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    console.log('Theme:', newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}

export default Theme;
