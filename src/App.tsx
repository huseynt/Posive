import style from './App.module.scss'
import Login from './components/features/Login/Login'
import Registr from './components/features/Register/Registr'

import {
  Routes,
  Route
} from 'react-router-dom'

function App() {

  // const navigate = useNavigate()
  
  // const handleAbout = () => {
  //   navigate('/about')
  // }


  return (
    <div className={style.app}>
    {/* <Login/> */}
    {/* <Registr/> */}



    <Routes>
        <Route path='/registr' element={ <Registr/> }/>
        <Route path='/' element={ <Login/> }/>
    </Routes>
    </div>
  )
}

export default App
