import style from './preferences.module.scss'
import Theme from '../../../../common/Theme/Theme'

interface IGeneral {
  setMobileSelect: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string;
  setTheme: (theme: string) => void;
}

const Preferences: React.FC<IGeneral> = (props) => {
  const { setMobileSelect, theme, setTheme } = props



  return (
    <div className={style.parent}
    onClick={() => setMobileSelect(false)}>
      
    <div className={style.parent_up}>
      <h2 className={style.parent_up_head}>General</h2>
      <h5 className={style.parent_up_info}>Update your business persona</h5>
    </div>

    <div className={style.parent_line}></div>


    <div className={style.parent_main}>
      loading...
    </div>


    <Theme setTheme={setTheme} theme={theme}/>

  </div>
  )
}

export default Preferences;
