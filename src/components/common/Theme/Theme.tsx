import React, { useEffect, useState } from 'react';
import style from "./theme.module.scss";

const Theme: React.FC = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.body.setAttribute('data-theme', currentTheme);
      setTheme(currentTheme);
    } 
    else {
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setTheme('light');
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
    <button className={style.btn} onClick={toggleTheme}>
      {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
}

export default Theme;
