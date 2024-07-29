import style from "./theme.module.scss";

interface ThemeProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Theme: React.FC<ThemeProps> = (props) => {
  const { theme, setTheme } = props;

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
