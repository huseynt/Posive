import style from './App.module.scss'
import './components/common/reUseable/_variable.scss'
import './components/common/Theme/theme.module.scss'
// ---------- import components ----------
import Login from './components/pages/features/Login/Login'
import Registr from './components/pages/features/Register/Registr'
import Forgot from './components/pages/features/Forgot/Forgot'
import Home from './components/pages/Home/Home'
import NotFound from './components/pages/features/NotFound/NotFound'
import TriangleLoader from './components/common/Loader/Triangle'
import HelpCenter from './components/pages/Home/HelpCenter/HelpCenter'
import Product from './components/pages/Home/Product/Product'
import Check from './components/pages/features/Check/Check.ts'
import Settings from './components/pages/Home/Settings/Settings'
import Overview from './components/pages/Home/Overview/Overview'
import Pos from './components/pages/Home/Pos/Pos'
import HomePage from './components/pages/HomePage/HomePage'
// ---------- import components ----------
import { Routes, Route, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
// ---------- google auth ------------------------------
import { GoogleOAuthProvider } from '@react-oauth/google';
import { getCookie, setCookie } from './utils/reUse/cookie'
import { changeLanguage } from 'i18next'





function App() {
  // ---------- theme ------------------------------
  const [theme, setTheme] = useState<string>("");
  const currentTheme = localStorage.getItem('theme');
  useEffect(() => {
    if (currentTheme) {
      document.body.setAttribute('data-theme', currentTheme);
      setTheme(currentTheme);
    } 
    else {
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
    Check();
  }, [theme, setTheme, currentTheme]);

  useEffect(() => {
    if(theme === 'system') {
      const matchMediaDark = window.matchMedia('(prefers-color-scheme: dark)');
      const updateTheme = () => document.body.setAttribute('data-theme', matchMediaDark.matches ? 'dark' : 'light');
      updateTheme();
      matchMediaDark.addEventListener('change', updateTheme);
      return () => matchMediaDark.removeEventListener('change', updateTheme);
    }
  }, [theme, currentTheme]);
  // ---------- theme ------------------------------

  

  // ---------- loader ----------
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);
  // ---------- loader ----------

  // ---------- language -------------------
  useEffect(() => {
    const lang = getCookie('i18next');
    if(lang) {
      changeLanguage(lang);
    }
    else {
      changeLanguage('en');
    }}, [])
  // ---------- language -------------------

  // ----------- body title ----------------
  useEffect(() => {
    const pathName = window.location.pathname.split('/').pop();
    document.title = `Posive ${pathName ? pathName : 'Home'}`;
  }, []); 
  // ----------- body title ----------------


  // ----------- language wrapper ------------
  const LanguageWrapper: React.FC = () => {
    const { lang } = useParams<{ lang: string }>();
    changeLanguage(lang);
    // must back save language / not to use at the moment
    setCookie('i18next', lang ? lang : 'en', 365);
    return lang == 'az' || lang == 'en' ? <HomePage /> : <NotFound />;
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GCLIENT_ID as string}>
      <div className={style.app}>
        {!loaded && <TriangleLoader /> }
        
        <div style={{opacity: loaded ? '1' : '0'}}>
          <Routes>
            <Route index element={<HomePage/>} />
            <Route path='/registr' element={<Registr />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgot' element={<Forgot />} />
            <Route path="/:lang" element={<LanguageWrapper />} />
            
            <Route path='/home' element={<Home setTheme={setTheme}/>}>
              <Route index element={<Pos/>} />
              <Route path='' element={<Pos/>} />
              <Route path='overview' element={<Overview/>} />
              <Route path='product' element={<Product />} />
              <Route path='settings/*' element={<Settings setTheme={setTheme} theme={theme}/>} />
              <Route path='help/*' element={<HelpCenter />} />
              <Route path='*' element={<NotFound />} />
            </Route>

            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
