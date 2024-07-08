import style from './App.module.scss'
import Login from './components/pages/features/Login/Login'
import Registr from './components/pages/features/Register/Registr'
import Forgot from './components/pages/features/Forgot/Forgot'
import { BrowserRouter as Router } from 'react-router-dom'
import {
  Routes,
  Route
} from 'react-router-dom'

// import { useEffect, useState } from 'react'
// import TriangleLoader from './components/common/Loader/Triangle'

function App() {

    // ------- loader for test -------
  // const [check, setCheck] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCheck(false)
  //   }, 800)
  // }, [])
  // ---------------------------------


  return (
    <div className={style.app}>
    {/* {check && <TriangleLoader />} */}

    <Router>
      <Routes>
          <Route path='/registr' element={ <Registr/> }/>
          <Route path='*' element={ <Login/> }/>
          <Route path='/forgot' element={ <Forgot/> }/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
