import style from './preferences.module.scss'
import { useEffect, useState } from 'react'
import lightMode from '/public/assets/lightmode.png'
import darkMode from '/public/assets/darkmode.png'
import customMode from '/public/assets/system_mode.png'
import arrowdown from '/public/assets/arrow-down.png'
import { useTranslation } from 'react-i18next'
import { getCookie, setCookie } from '../../../../../utils/reUse/cookie'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createGetUser, createSavePreferences } from '../../../../../utils/API/API'
import { IgetUser } from '../../../../../utils/API/types'
import PageLoader from '../../../../common/PageLoader/PageLoader'
import Loader from '../../../../common/Loader/Loader'

interface IPreferences {
  setMobileSelect: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string;
  setTheme: (theme: string) => void;
  requestNotify: (purpose: string, description: string) => void;
}

interface IPereferencesData{
  theme: string | null;
  language: string | null;
  currency: string | null;
  timeZone: string | null;
  size: string | null;
  icons: string | null;
}

const Preferences: React.FC<IPreferences> = (props) => {
  const { setMobileSelect, setTheme, requestNotify } = props
  const localTheme = localStorage.getItem('theme');
  const { t, i18n } = useTranslation();
  const language = getCookie("i18next") || "en";

  // ------------------- get user ------------------------
  const {
    data: userData,
    isPending: userIsPending,
  } = useQuery<IgetUser | undefined>({
    queryKey: ["getUser"],
    queryFn: createGetUser,
  });
  useEffect(() => {
    if (!userIsPending && userData) {
      setPereferencesData({
        theme: userData?.setting?.theme ? userData?.setting?.theme : "light",
        language: userData?.setting?.language ? userData?.setting?.language : language==="az" ? "Azərbaycan" : "English (US)",
        currency: userData?.setting?.currency ? userData?.setting?.currency : "United States dollar (USD)",
        timeZone: userData?.setting?.timeZone ? userData?.setting?.timeZone : "(UTC - 08:00) Pacific Times ( Los Angles )",
        size: userData?.setting?.size ? userData?.setting?.size : "Medium (220px)",
        icons: userData?.setting?.icons ? userData?.setting?.icons : "Small (24px)"
      })
      localStorage.setItem('theme', userData?.setting?.theme ? userData?.setting?.theme : "light");
      setTheme(userData?.setting?.theme ? userData?.setting?.theme : "light");
    }
  }, [userData, language, setTheme, userIsPending ]);
    //  ----------------- get user ---------------------------

  const [pereferencesData, setPereferencesData] = useState<IPereferencesData>({
    theme: localTheme,
    language:  "English (US)",
    currency: "United States dollar (USD)",
    timeZone: "(UTC - 08:00) Pacific Times ( Los Angles )",
    size: "Medium (220px)",
    icons: "Small (24px)"
  })

  // ----------------- languages ---------------------

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCookie("i18next", lng, 7);
  };
  // ----------------- languages ---------------------




  // ------------------- save user ------------------------
  const queryClient = useQueryClient()
  const {
    mutate: SavePreferences,
    isPending: isSavePending,
  } = useMutation({
    mutationFn: createSavePreferences,
    onSuccess: (data) => {
      if (data === 200) {
        requestNotify("done", t("Saved successfully!"))
        queryClient.invalidateQueries({queryKey: ["getUser"]})
        queryClient.invalidateQueries({queryKey: ["getNotifications"]});
        toggleTheme(pereferencesData.theme??'light')
        changeLanguage(
          pereferencesData.language === "Azərbaycan" ? "az" : "en"
        )
      }
    },
    onError: (error) => {
      console.log('Login error:', error);
      requestNotify("error", t("An error occurred while saving!"))
    },
  });
  // ------------------- save user ------------------------



  const resetData = () => {
    setPereferencesData({
      theme: localTheme,
      language: language==="az" ? "Azərbaycan" : "English (US)",
      currency: "United States dollar (USD)",
      timeZone: "(UTC - 04:00) Baku Times",
      size: "Medium (220px)",
      icons: "Small (24px)"
    })
  }

  const sendData = () => {
    SavePreferences({
      theme: pereferencesData.theme,
      language: pereferencesData.language,
      currency: pereferencesData.currency,
      timeZone: pereferencesData.timeZone,
      size: pereferencesData.size,
      icons: pereferencesData.icons
    })
  }

  const toggleTheme = (mode: string) => {
    document.body.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    setTheme(mode);
  };



  return (
    <>
    {userIsPending && <PageLoader /> }

    <div className={style.parent}
    onClick={() => setMobileSelect(false)}>

    {/* ----------------- save buttons ------------------------------ */}
    <div className={style.parent_buttons}>
      <button className={style.parent_buttons_cancel}
      onClick={resetData}
      >{t("cancel")}</button>
      <button className={style.parent_buttons_save}
      onClick={sendData}
      >
      { isSavePending ?
          <Loader/>
          :
          t("save")
      }
      </button>
    </div>
      
    <div className={style.parent_up}>
      <h2 className={style.parent_up_head}>{t("preferences")}</h2>
      <h5 className={style.parent_up_info}>{t("customization according to your preferences")}</h5>
    </div>

    <div className={style.parent_line}></div>


    <div className={style.parent_main}>
      <h4 className={style.parent_main_head}>{t("select themes")}</h4>

      
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
            <p className={style.parent_main_mode_option_info_head}>{t("Light Mode")} {localTheme === "light" && t("(Active)")}</p>
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
            <p className={style.parent_main_mode_option_info_head}>{t("Dark Mode")} {localTheme === "dark" && t("(Active)")}</p>
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
            <img style={{width: "100%", maxWidth: "270px"}} src={customMode} alt="system mode" />
          </div>
          <div className={style.parent_main_mode_option_info}>
            <p className={style.parent_main_mode_option_info_head}>{t("System Mode")} {localTheme === "system" && t("(Active)")}</p>
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
          <h3 className={style.parent_main_form_parametr_head}>{t("Language")}</h3>

          <div className={style.parent_main_form_parametr_select}>
            <div className={style.parent_main_form_parametr_select_head}>
              <p className={style.parent_main_form_parametr_select_head_p}>{
              pereferencesData.language === "Azərbaycan" ? t("Azerbaijani") : t("English (US)")
                }</p>
              <img className={style.parent_main_form_parametr_select_head_img} src={arrowdown} alt="arrowdown" />
            </div>
            <div className={style.parent_main_form_parametr_select_down}>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.language==="Azərbaycan" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                language: "Azərbaycan"
              })}
              >{t("Azerbaijani")}</p>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.language==="English (US)" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                language: "English (US)"
              })}
              >{t("English (US)")}</p>
            </div>
          </div>
        </div>

        {/* <div className={style.parent_main_form_parametr}>
          <h3 className={style.parent_main_form_parametr_head}>{t("Currency")}</h3>

          <div className={style.parent_main_form_parametr_select}>
            <div className={style.parent_main_form_parametr_select_head}>
              <p className={style.parent_main_form_parametr_select_head_p}>{
              pereferencesData.currency === "United States dollar (USD)" ? t("United States dollar (USD)") : t("Azerbaijan Manat (AZN)")
              }</p>
              <img className={style.parent_main_form_parametr_select_head_img} src={arrowdown} alt="arrowdown" />
            </div>
            <div className={style.parent_main_form_parametr_select_down}>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.currency==="United States dollar (USD)" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                currency: "United States dollar (USD)"
              })}
              >{t("United States dollar (USD)")}</p>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.currency==="Azerbaijan Manat (AZN)" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                currency: "Azerbaijan Manat (AZN)"
              })}
              >{t("Azerbaijan Manat (AZN)")}</p>
            </div>
          </div>
        </div> */}

        <div className={style.parent_main_form_parametr}>
          <h3 className={style.parent_main_form_parametr_head}>{t("Time Zone")}</h3>

          <div className={style.parent_main_form_parametr_select}>
            <div className={style.parent_main_form_parametr_select_head}>
              <p className={style.parent_main_form_parametr_select_head_p}>{
              pereferencesData.timeZone === "(UTC - 08:00) Pacific Times ( Los Angles )" ? t("(UTC - 08:00) Pacific Times ( Los Angles )") : t("(UTC - 04:00) Baku Times")
              }</p>
              <img className={style.parent_main_form_parametr_select_head_img} src={arrowdown} alt="arrowdown" />
            </div>
            <div className={style.parent_main_form_parametr_select_down}>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.timeZone==="(UTC - 08:00) Pacific Times ( Los Angles )" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                timeZone: "(UTC - 08:00) Pacific Times ( Los Angles )"
              })}
              >{t("(UTC - 08:00) Pacific Times ( Los Angles )")}</p>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.timeZone==="(UTC - 04:00) Baku Times" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                timeZone: "(UTC - 04:00) Baku Times"
              })}
              >{t("(UTC - 04:00) Baku Times")}</p>
            </div>
          </div>
        </div>

        <div className={style.parent_main_form_parametr}>
          <h3 className={style.parent_main_form_parametr_head}>{t("Sidebar Size")}</h3>

          <div className={style.parent_main_form_parametr_select}>
            <div className={style.parent_main_form_parametr_select_head}>
              <p className={style.parent_main_form_parametr_select_head_p}>{
              pereferencesData.size === "Medium (220px)" ? t("Medium (220px)") : t("Big (240px)")
              }</p>
              <img className={style.parent_main_form_parametr_select_head_img} src={arrowdown} alt="arrowdown" />
            </div>
            <div className={style.parent_main_form_parametr_select_down}>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.size==="Medium (220px)" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                size: "Medium (220px)"
              })}
              >{t("Medium (220px)")}</p>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.size==="Big (240px)" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                size: "Big (240px)"
              })}
              >{t("Big (240px)")}</p>
            </div>
          </div>
        </div>

        {/* <div className={style.parent_main_form_parametr}>
          <h3 className={style.parent_main_form_parametr_head}>{t("Icons Size")}</h3>

          <div className={style.parent_main_form_parametr_select}>
            <div className={style.parent_main_form_parametr_select_head}>
              <p className={style.parent_main_form_parametr_select_head_p}>{pereferencesData.icons}</p>
              <img className={style.parent_main_form_parametr_select_head_img} src={arrowdown} alt="arrowdown" />
            </div>
            <div className={style.parent_main_form_parametr_select_down}>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.icons==="Small (24px)" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                icons: "Small (24px)"
              })}
              >{"Small (24px)"}</p>
              <p className={`${style.parent_main_form_parametr_select_down_option} ${pereferencesData.icons==="Medium (27px)" && style.down_selectOption}`}
              onClick={() => setPereferencesData({
                ...pereferencesData,
                icons: "Medium (27px)"
              })}
              >{"Medium (27px)"}</p>
            </div>
          </div>
        </div> */}


      </div>

    </div>


    {/* <Theme setTheme={setTheme} theme={theme}/> */}

  </div>
  </>
  )
}

export default Preferences;
