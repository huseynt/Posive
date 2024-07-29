import style from './settings.module.scss'
import Theme from '../../../common/Theme/Theme'

const Settings = () => {
  return (
    <div className={style.overflow}>
      <Theme/>

      <div className={style.main}>
        Settings
        <h2>loading</h2>
      </div>
    </div>
  )
}

export default Settings
