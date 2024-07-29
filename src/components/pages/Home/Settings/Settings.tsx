import style from './settings.module.scss'
import Theme from '../../../common/Theme/Theme'
import { Helmet } from 'react-helmet'

interface ThemeProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Settings: React.FC<ThemeProps> = (props) => {
  const { setTheme, theme} = props;


  return (
    <div className={style.overflow}>
      <Helmet>
        <title>Posive Settings</title>
        <meta name="description" content="Settings" />
        <meta name="keywords" content="Posive" />
      </Helmet>


      <Theme setTheme={setTheme} theme={theme}/>
      <div className={style.main}>
        Settings
        <h2>loading</h2>
      </div>
    </div>
  )
}

export default Settings
