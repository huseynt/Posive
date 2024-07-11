import style from './home.module.scss'
import Sidebar from '../features/Sidebar/Sidebar'
import Main from './Main/Main'
import Aside from './Aside/Aside'

const Home = () => {
  return (
    <div className={style.home}>
      <Sidebar />
      <Main/>
      <Aside/>
    </div>
  )
}

export default Home
