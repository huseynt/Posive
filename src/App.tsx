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
import Settings from './components/pages/Home/Settings/Settings'
import Overview from './components/pages/Home/Overview/Overview'
import Pos from './components/pages/Home/Pos/Pos'
import HomePage from './components/pages/HomePage/HomePage'
// ---------- import components ----------

import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

// import { useGetMealIds } from './components/services/Queries/queries'
// import { useGetMealIdsSlice } from './components/services/Queries/queries'





function App() {
  // ---------- theme ------------------------------
  const [theme, setTheme] = useState<string>("");
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
  }, [theme, setTheme]);
  // ---------- theme ------------------------------

  

  // ---------- loader ----------
  const [loaded, setLoaded] = useState(false);
  // ---------- error ready state -------------------------------
  // useEffect(() => {
  //   const handleStateChange = () => { setLoaded(true)};
  //   document.addEventListener('readystatechange', handleStateChange);
  //   return () => {
  //     document.removeEventListener('readystatechange', handleStateChange);
  //   };
  // }, []);
  // ---------- error ready state -------------------------------
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  // ---------- loader ----------


  // ----------- body title ----------------
  useEffect(() => {
    const pathName = window.location.pathname.split('/').pop();
    document.title = `Posive ${pathName ? pathName : 'Home'}`;
  }, []); 
  // ----------- body title ----------------


  // ----------- system mode ----------------    
  useEffect(() => {
    if(theme === 'system') {
      const matchMediaDark = window.matchMedia('(prefers-color-scheme: dark)');
      const updateTheme = () => document.body.setAttribute('data-theme', matchMediaDark.matches ? 'dark' : 'light');
      updateTheme();
      matchMediaDark.addEventListener('change', updateTheme);
      return () => matchMediaDark.removeEventListener('change', updateTheme);
    }
  }, [theme]);
  // ----------- system mode ----------------





  return (
    <div className={style.app}>
      {!loaded && <TriangleLoader /> }
      <div style={{opacity: loaded ? '1' : '0'}}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/registr' element={<Registr />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot' element={<Forgot />} />
          <Route path='/homepage' element={<HomePage />} />
          
          <Route path='/home' element={<Home />}>
            <Route index element={<Pos/>} />
            <Route path='' element={<Pos/>} />
            <Route path='overview' element={<Overview/>} />
            <Route path='product' element={<Product />} />
            <Route path='settings/*' element={<Settings setTheme={setTheme} theme={theme}/>} />
            <Route path='help/*' element={<HelpCenter />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
