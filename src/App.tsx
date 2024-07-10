import style from './App.module.scss'
import Login from './components/pages/features/Login/Login'
import Registr from './components/pages/features/Register/Registr'
import Forgot from './components/pages/features/Forgot/Forgot'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import { useEffect, useState } from 'react'
import TriangleLoader from './components/common/Loader/Triangle'

function App() {

  // ---------- loader ----------
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const handleStateChange = () => {
      setLoaded(document.readyState === "complete");
    };
    document.addEventListener('readystatechange', handleStateChange);
    return () => {
      document.removeEventListener('readystatechange', handleStateChange);
    };
  }, []);
  // ---------- loader ----------

  return (
    <div className={style.app}>
      {!loaded ? <TriangleLoader /> :
        <Router>
          <Routes>
            <Route path='/registr' element={<Registr />} />
            <Route path='*' element={<Login />} />
            <Route path='/forgot' element={<Forgot />} />
          </Routes>
        </Router>}
    </div>
  );
}

export default App;
