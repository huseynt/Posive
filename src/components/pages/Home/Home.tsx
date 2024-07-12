import style from './home.module.scss'
import Sidebar from '../features/Sidebar/Sidebar'
import Main from './Main/Main'
import Aside from './Aside/Aside'
import { useState } from 'react'

const Home = () => {
  const [bag, setBag] = useState<boolean>(true)


  return (
    <div className={style.home}>
      <Sidebar />
      <Main bag={bag} setBag={setBag}/>
      <Aside bag={bag}/>
    </div>
  )
}

export default Home
