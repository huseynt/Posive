import style from './preferences.module.scss'
// import Theme from '../../../../common/Theme/Theme'
import { useState } from 'react'

import lightMode from '/public/assets/lightmode.png'
import darkMode from '/public/assets/darkmode.png'
import customMode from '/public/assets/system_mode.png'
import arrowdown from '/public/assets/arrow-down.png'


interface IGeneral {
  setMobileSelect: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string;
  setTheme: (theme: string) => void;
}

interface IPereferencesData{
  theme: string | null;
  language: string;
  currency: string;
  timeZone: string;
  sidebarSize: string;
  iconsSize: string;
}

const Preferences: React.FC<IGeneral> = (props) => {
  const { setMobileSelect, setTheme } = props
  const localTheme = localStorage.getItem('theme');

  const [pereferencesData, setPereferencesData] = useState<IPereferencesData>({
    theme: localTheme,
    language: "English (US)",
    currency: "United States dollar (USD)",
    timeZone: "(UTC - 08:00) Pacific Times ( Los Angles )",
    sidebarSize: "Medium (220px)",
    iconsSize: "Small (24px)"
  })

  const resetData = () => {
    setPereferencesData({
      theme: localTheme,
      language: "English (US)",
      currency: "United States dollar (USD)",
      timeZone: "(UTC - 04:00) Baku Times",
      sidebarSize: "Medium (220px)",
      iconsSize: "Small (24px)"
    })
  }

  const sendData = () => {
    console.log(pereferencesData)
    toggleTheme(pereferencesData.theme??'light')
  }

  const toggleTheme = (mode: string) => {
    document.body.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    setTheme(mode);
    console.log('Theme:', mode);
  };



  return (
    <div className={style.parent}
    onClick={() => setMobileSelect(false)}>

    {/* ----------------- save buttons ------------------------------ */}
    <div className={style.parent_buttons}>
      <button className={style.parent_buttons_cancel}
      onClick={resetData}
      >Cancel</button>
      <button className={style.parent_buttons_save}
      onClick={sendData}
      >Save</button>
    </div>
      
    <div className={style.parent_up}>
      <h2 className={style.parent_up_head}>Preferences</h2>
      <h5 className={style.parent_up_info}>Customization according to your preferences</h5>
    </div>

    <div className={style.parent_line}></div>


    <div className={style.parent_main}>
      <h4 className={style.parent_main_head}>Select Themes</h4>

      
      {/* --------------- mode ---------------- */}
      <div className={style.parent_main_mode}>
        {/* -------------------- light mode ------------------- */}
        <div className={`${style.parent_main_mode_option} ${pereferencesData.theme==="light" && style.selectOption}`}
        onClick={() => setPereferencesData({
          ...pereferencesData,
          theme: "light"
        })}
        >
          <div className={style.parent_main_mode_option_photo}>
            <img src={lightMode} alt="light mode" />
          </div>

          <div className={style.parent_main_mode_option_info}>
            <p className={style.parent_main_mode_option_info_head}>Light Mode {localTheme === "light" && "(Active)"}</p>
            {
              localTheme === "light" ?
              <svg className={style.parent_main_mode_option_info_selected} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#EA7E41"/>
              </svg>
              :
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6667 21C17.6373 21 21.6667 16.9706 21.6667 12C21.6667 7.02944 17.6373 3 12.6667 3C7.69619 3 3.66675 7.02944 3.66675 12C3.66675 16.9706 7.69619 21 12.6667 21Z" stroke="#ACB5BB" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          </div>
        </div>

        {/* -------------------- dark mode ------------------- */}
        <div className={`${style.parent_main_mode_option} ${pereferencesData.theme==="dark" && style.selectOption}`}
        onClick={() => setPereferencesData({
          ...pereferencesData,
          theme: "dark"
        })}
        >
          <div className={style.parent_main_mode_option_photo}>
            <img src={darkMode} alt="dark mode" />
          </div>

          <div className={style.parent_main_mode_option_info}>
            <p className={style.parent_main_mode_option_info_head}>Dark Mode {localTheme === "dark" && "(Active)"}</p>
            {
              localTheme === "dark" ?
              <svg className={style.parent_main_mode_option_info_selected} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#EA7E41"/>
              </svg>
              :
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6667 21C17.6373 21 21.6667 16.9706 21.6667 12C21.6667 7.02944 17.6373 3 12.6667 3C7.69619 3 3.66675 7.02944 3.66675 12C3.66675 16.9706 7.69619 21 12.6667 21Z" stroke="#ACB5BB" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          </div>
        </div>

        {/* -------------------- system mode ------------------- */}
        <div className={`${style.parent_main_mode_option} ${pereferencesData.theme==="system" && style.selectOption}`}
        onClick={() => setPereferencesData({
          ...pereferencesData,
          theme: "system"
        })}
        >
          <div className={style.parent_main_mode_option_photo}>
            <img style={{width: "100%"}} src={customMode} alt="system mode" />
          </div>
          <div className={style.parent_main_mode_option_info}>
            <p className={style.parent_main_mode_option_info_head}>System Mode {localTheme === "system" && "(Active)"}</p>
            {
              localTheme === "system" ?
              <svg className={style.parent_main_mode_option_info_selected} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#EA7E41"/>
              </svg>
              :
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6667 21C17.6373 21 21.6667 16.9706 21.6667 12C21.6667 7.02944 17.6373 3 12.6667 3C7.69619 3 3.66675 7.02944 3.66675 12C3.66675 16.9706 7.69619 21 12.6667 21Z" stroke="#ACB5BB" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          </div>
        </div>
      </div>

      {/* ------------- line ----------------- */}
      <div className={style.parent_line}></div>


      {/* --------------- form ---------------- */}
      <div className={style.parent_main_form}>

        <div className={style.parent_main_form_parametr}>
          <h3 className={style.parent_main_form_parametr_head}>Language</h3>

          <div className={style.parent_main_form_parametr_select}>
            <div className={style.parent_main_form_parametr_select_head}>
              <p className={style.parent_main_form_parametr_select_head_p}>{pereferencesData.language}</p>
              <img className={style.parent_main_form_parametr_select_head_img} src={arrowdown} alt="arrowdown" />
            </div>
            <div className={style.parent_main_form_parametr_select_down}>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.language==="Azərbaycan" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                language: "Azərbaycan"
              })}
              >{"Azərbaycan"}</p>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.language==="Русский" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                language: "Русский"
              })}
              >{"Русский"}</p>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.language==="English (US)" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                language: "English (US)"
              })}
              >{"English (US)"}</p>
            </div>
          </div>
        </div>

        <div className={style.parent_main_form_parametr}>
          <h3 className={style.parent_main_form_parametr_head}>Currency</h3>

          <div className={style.parent_main_form_parametr_select}>
            <div className={style.parent_main_form_parametr_select_head}>
              <p className={style.parent_main_form_parametr_select_head_p}>{pereferencesData.currency}</p>
              <img className={style.parent_main_form_parametr_select_head_img} src={arrowdown} alt="arrowdown" />
            </div>
            <div className={style.parent_main_form_parametr_select_down}>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.currency==="United States dollar (USD)" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                currency: "United States dollar (USD)"
              })}
              >{"United States dollar (USD)"}</p>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.currency==="Azerbaijan Manat (AZN)" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                currency: "Azerbaijan Manat (AZN)"
              })}
              >{"Azerbaijan Manat (AZN)"}</p>
            </div>
          </div>
        </div>

        <div className={style.parent_main_form_parametr}>
          <h3 className={style.parent_main_form_parametr_head}>Time Zone</h3>

          <div className={style.parent_main_form_parametr_select}>
            <div className={style.parent_main_form_parametr_select_head}>
              <p className={style.parent_main_form_parametr_select_head_p}>{pereferencesData.timeZone}</p>
              <img className={style.parent_main_form_parametr_select_head_img} src={arrowdown} alt="arrowdown" />
            </div>
            <div className={style.parent_main_form_parametr_select_down}>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.timeZone==="(UTC - 08:00) Pacific Times ( Los Angles )" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                timeZone: "(UTC - 08:00) Pacific Times ( Los Angles )"
              })}
              >{"(UTC - 08:00) Pacific Times ( Los Angles )"}</p>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.timeZone==="(UTC - 04:00) Baku Times" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                timeZone: "(UTC - 04:00) Baku Times"
              })}
              >{"(UTC - 04:00) Baku Times"}</p>
            </div>
          </div>
        </div>

        <div className={style.parent_main_form_parametr}>
          <h3 className={style.parent_main_form_parametr_head}>Sidebar Size</h3>

          <div className={style.parent_main_form_parametr_select}>
            <div className={style.parent_main_form_parametr_select_head}>
              <p className={style.parent_main_form_parametr_select_head_p}>{pereferencesData.sidebarSize}</p>
              <img className={style.parent_main_form_parametr_select_head_img} src={arrowdown} alt="arrowdown" />
            </div>
            <div className={style.parent_main_form_parametr_select_down}>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.sidebarSize==="Medium (220px)" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                sidebarSize: "Medium (220px)"
              })}
              >{"Medium (220px)"}</p>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.sidebarSize==="Big (240px)" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                sidebarSize: "Big (240px)"
              })}
              >{"Big (240px)"}</p>
            </div>
          </div>
        </div>

        <div className={style.parent_main_form_parametr}>
          <h3 className={style.parent_main_form_parametr_head}>Icons Size</h3>

          <div className={style.parent_main_form_parametr_select}>
            <div className={style.parent_main_form_parametr_select_head}>
              <p className={style.parent_main_form_parametr_select_head_p}>{pereferencesData.iconsSize}</p>
              <img className={style.parent_main_form_parametr_select_head_img} src={arrowdown} alt="arrowdown" />
            </div>
            <div className={style.parent_main_form_parametr_select_down}>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.iconsSize==="Small (24px)" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                iconsSize: "Small (24px)"
              })}
              >{"Small (24px)"}</p>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.iconsSize==="Medium (27px)" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                iconsSize: "Medium (27px)"
              })}
              >{"Medium (27px)"}</p>
            </div>
          </div>
        </div>


      </div>

    </div>


    {/* <Theme setTheme={setTheme} theme={theme}/> */}

  </div>
  )
}

export default Preferences;
