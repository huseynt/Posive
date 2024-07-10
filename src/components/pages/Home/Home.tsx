import style from './home.module.scss'
import Sidebar from '../features/Sidebar/Sidebar'

const Home = () => {
  return (
    <div className={style.home}>
      <Sidebar />
    </div>
  )
}

export default Home
