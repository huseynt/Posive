import style from './settings.module.scss'
import { Helmet } from 'react-helmet'

import General from './General/General';
import UserPermissions from './UserPermissions/UserPermissions';
import Preferences from './Preferences/Preferences';
import Account from './Account/Account';
import Billings from './Billings/Billings';
import Notifications from './Notifications/Notifications';

import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";




interface ThemeProps {
  theme: string;
  setTheme: (theme: string) => void;
}

interface IProduct {
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setNotification: React.Dispatch<React.SetStateAction<boolean>>;
  notification: boolean;
}

const Settings: React.FC<ThemeProps> = (props) => {
  const { setTheme, theme} = props;
  const { setToggleMenu, setNotification, notification } = useOutletContext<IProduct>();


  const [mobileSelect, setMobileSelect] = useState<boolean>(false);
  const [sub, setSub] = useState<string>("");
  const navigate = useNavigate();



  useEffect(() => {
    const path = window.location.pathname.split("/")[3];
    setSub(path);
    window.addEventListener("popstate", () => {
      const path = window.location.pathname.split("/")[3];
      setSub(path);
    });
    console.log(sub);
  }, [sub]);

  useEffect(() => {
    setMobileSelect(false);
  }, [sub]);



  const handleSub = (path: string) => {
    setSub(path);
    navigate(path);
  };









  return (
    <div className={style.overflow}>
      <Helmet>
        <title>Posive Settings</title>
        <meta name="description" content="Settings" />
        <meta name="keywords" content="Posive" />
      </Helmet>


      <div className={style.main}>
        {/* ----------------------------- mobile up ---------------------------------- */}
        <div className={style.main_mobileUp}>
          <div className={style.main_mobileUp_actions}>
            <div
              className={style.main_mobileUp_actions_menu}
              onClick={() => setToggleMenu(true)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4.6665H14"
                  stroke="#1A1C1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M2 8H14"
                  stroke="#1A1C1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M2 11.3335H14"
                  stroke="#1A1C1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className={style.main_mobileUp_actions_right}>
              <div
                className={style.main_mobileUp_actions_right_search}
                // onClick={() => setMobileSearch(!mobileSearch)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.66659 14.0002C11.1644 14.0002 13.9999 11.1646 13.9999 7.66683C13.9999 4.16903 11.1644 1.3335 7.66659 1.3335C4.16878 1.3335 1.33325 4.16903 1.33325 7.66683C1.33325 11.1646 4.16878 14.0002 7.66659 14.0002Z"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.6666 14.6668L13.3333 13.3335"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div
                className={style.main_mobileUp_actions_right_setting}
                onClick={() => setNotification(!notification)}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.01494 2.18262C6.53244 2.18262 4.51494 4.20012 4.51494 6.68262V8.85012C4.51494 9.30762 4.31994 10.0051 4.08744 10.3951L3.22494 11.8276C2.69244 12.7126 3.05994 13.6951 4.03494 14.0251C7.26744 15.1051 10.7549 15.1051 13.9874 14.0251C14.8949 13.7251 15.2924 12.6526 14.7974 11.8276L13.9349 10.3951C13.7099 10.0051 13.5149 9.30762 13.5149 8.85012V6.68262C13.5149 4.20762 11.4899 2.18262 9.01494 2.18262Z"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10.4024 2.40008C10.1699 2.33258 9.92994 2.28008 9.68244 2.25008C8.96244 2.16008 8.27244 2.21258 7.62744 2.40008C7.84494 1.84508 8.38494 1.45508 9.01494 1.45508C9.64494 1.45508 10.1849 1.84508 10.4024 2.40008Z"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.2649 14.2949C11.2649 15.5324 10.2524 16.5449 9.01489 16.5449C8.39989 16.5449 7.82989 16.2899 7.42489 15.8849C7.01989 15.4799 6.76489 14.9099 6.76489 14.2949"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div
            className={style.main_mobileUp_down}
            // style={{ display: mobileSearch ? "flex" : "none" }}
          >
            {/* <SearchInput meals={meals} setMealsFiltered={setMealsFiltered} /> */}
          </div>
        </div>

        {/* --------------------------- up ------------------------------- */}
        <div className={style.main_up}>
          <h2 className={style.main_up_head}>Settings</h2>
          <p className={style.main_up_desc}>Let’s Manage your settings</p>
        </div>

        <div className={style.main_container}>

          <div className={style.main_container_navigation}
          style={{borderColor: mobileSelect ? "#d4733b" : ""}}
          >
            
            <h3 className={style.main_container_navigation_head}>
              Sub settings
            </h3>

            {/* ---------------------- mobile sub select ----------------------------- */}
            <div className={style.main_container_navigation_mobileSelect}
            onClick={() => setMobileSelect(!mobileSelect)}
            >
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{display: sub==="general" || sub===undefined ? "block" : "none"}}>
                <path d="M2.2575 8.91504V12.2825C2.2575 15.65 3.6075 17 6.975 17H11.0175C14.385 17 15.735 15.65 15.735 12.2825V8.91504" 
                stroke={"#000000ae"}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 9.5C10.3725 9.5 11.385 8.3825 11.25 7.01L10.755 2H7.2525L6.75 7.01C6.615 8.3825 7.6275 9.5 9 9.5Z" 
                stroke={"#000000ae"}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.7325 9.5C15.2475 9.5 16.3575 8.27 16.2075 6.7625L15.9975 4.7C15.7275 2.75 14.9775 2 13.0125 2H10.725L11.25 7.2575C11.3775 8.495 12.495 9.5 13.7325 9.5Z" 
                stroke={"#000000ae"}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.23 9.5C5.4675 9.5 6.585 8.495 6.705 7.2575L6.87 5.6L7.23 2H4.9425C2.9775 2 2.2275 2.75 1.9575 4.7L1.755 6.7625C1.605 8.27 2.715 9.5 4.23 9.5Z" 
                stroke={"#000000ae"}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 13.25C7.7475 13.25 7.125 13.8725 7.125 15.125V17H10.875V15.125C10.875 13.8725 10.2525 13.25 9 13.25Z" 
                stroke={"#000000ae"}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{display: sub==="preferences" ? "block" : "none"}}>
                <path d="M4.83 2H13.1625C15.8325 2 16.5 2.6675 16.5 5.33V10.0775C16.5 12.7475 15.8325 13.4075 13.17 13.4075H4.83C2.1675 13.415 1.5 12.7475 1.5 10.085V5.33C1.5 2.6675 2.1675 2 4.83 2Z" 
                stroke={"#000000ae"}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 13.415V17" 
                stroke={"#000000ae"}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.5 10.25H16.5" 
                stroke={"#000000ae"}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.625 17H12.375" 
                stroke={"#000000ae"}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{display: sub==="userpermissions" ? "block" : "none"}}>
                <path d="M13.5 5.87C13.455 5.8625 13.4025 5.8625 13.3575 5.87C12.3225 5.8325 11.4975 4.985 11.4975 3.935C11.4975 2.8625 12.36 2 13.4325 2C14.505 2 15.3675 2.87 15.3675 3.935C15.36 4.985 14.535 5.8325 13.5 5.87Z" 
                stroke={"#000000ae"}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.7275 11.3301C13.755 11.5026 14.8875 11.3226 15.6825 10.7901C16.74 10.0851 16.74 8.93012 15.6825 8.22512C14.88 7.69262 13.7325 7.51262 12.705 7.69262" 
                stroke={"#000000ae"}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.4775 5.87C4.5225 5.8625 4.575 5.8625 4.62 5.87C5.655 5.8325 6.48 4.985 6.48 3.935C6.48 2.8625 5.6175 2 4.545 2C3.4725 2 2.61 2.87 2.61 3.935C2.6175 4.985 3.4425 5.8325 4.4775 5.87Z" 
                stroke={"#000000ae"}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.25 11.3301C4.2225 11.5026 3.09 11.3226 2.295 10.7901C1.2375 10.0851 1.2375 8.93012 2.295 8.22512C3.0975 7.69262 4.245 7.51262 5.2725 7.69262" 
                stroke={"#000000ae"}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11.4725C8.955 11.465 8.9025 11.465 8.8575 11.4725C7.8225 11.435 6.9975 10.5875 6.9975 9.53754C6.9975 8.46504 7.86 7.60254 8.9325 7.60254C10.005 7.60254 10.8675 8.47254 10.8675 9.53754C10.86 10.5875 10.035 11.4425 9 11.4725Z" 
                stroke={"#000000ae"}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.8175 13.8355C5.76 14.5405 5.76 15.6955 6.8175 16.4005C8.0175 17.203 9.9825 17.203 11.1825 16.4005C12.24 15.6955 12.24 14.5405 11.1825 13.8355C9.99 13.0405 8.0175 13.0405 6.8175 13.8355Z" 
                stroke={"#000000ae"}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{display: sub==="account" ? "block" : "none"}}>
                <path d="M13.605 16.7151C12.945 16.9101 12.165 17.0001 11.25 17.0001H6.75C5.835 17.0001 5.055 16.9101 4.395 16.7151C4.56 14.7651 6.5625 13.2275 9 13.2275C11.4375 13.2275 13.44 14.7651 13.605 16.7151Z" 
                stroke={"#000000ae"}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.25 2H6.75C3 2 1.5 3.5 1.5 7.25V11.75C1.5 14.585 2.355 16.1375 4.395 16.715C4.56 14.765 6.5625 13.2275 9 13.2275C11.4375 13.2275 13.44 14.765 13.605 16.715C15.645 16.1375 16.5 14.585 16.5 11.75V7.25C16.5 3.5 15 2 11.25 2ZM9 11.1275C7.515 11.1275 6.315 9.92001 6.315 8.43501C6.315 6.95001 7.515 5.75 9 5.75C10.485 5.75 11.685 6.95001 11.685 8.43501C11.685 9.92001 10.485 11.1275 9 11.1275Z" 
                stroke={"#000000ae"}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.685 8.43501C11.685 9.92001 10.485 11.1275 9 11.1275C7.515 11.1275 6.315 9.92001 6.315 8.43501C6.315 6.95001 7.515 5.75 9 5.75C10.485 5.75 11.685 6.95001 11.685 8.43501Z" 
                stroke={"#000000ae"}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{display: sub==="notifications" ? "block" : "none"}}>
                <path d="M9.015 2.68262C6.5325 2.68262 4.515 4.70012 4.515 7.18262V9.35012C4.515 9.80762 4.32 10.5051 4.0875 10.8951L3.225 12.3276C2.6925 13.2126 3.06 14.1951 4.035 14.5251C7.2675 15.6051 10.755 15.6051 13.9875 14.5251C14.895 14.2251 15.2925 13.1526 14.7975 12.3276L13.935 10.8951C13.71 10.5051 13.515 9.80762 13.515 9.35012V7.18262C13.515 4.70762 11.49 2.68262 9.015 2.68262Z" 
                stroke={"#000000ae"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                <path d="M10.4025 2.90008C10.17 2.83258 9.93 2.78008 9.6825 2.75008C8.9625 2.66008 8.2725 2.71258 7.6275 2.90008C7.845 2.34508 8.385 1.95508 9.015 1.95508C9.645 1.95508 10.185 2.34508 10.4025 2.90008Z" 
                stroke={"#000000ae"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.265 14.7949C11.265 16.0324 10.2525 17.0449 9.015 17.0449C8.4 17.0449 7.83 16.7899 7.425 16.3849C7.02 15.9799 6.765 15.4099 6.765 14.7949" 
                stroke={"#000000ae"} strokeWidth="1.5" strokeMiterlimit="10"/>
              </svg>

              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{display: sub==="billings" ? "block" : "none"}}>
                <path d="M6.50391 11.2474C6.50391 12.2149 7.24641 12.9949 8.16891 12.9949H10.0514C10.8539 12.9949 11.5064 12.3124 11.5064 11.4724C11.5064 10.5574 11.1089 10.2349 10.5164 10.0249L7.49391 8.97488C6.90141 8.76488 6.50391 8.44238 6.50391 7.52738C6.50391 6.68738 7.15641 6.00488 7.95891 6.00488H9.84141C10.7639 6.00488 11.5064 6.78488 11.5064 7.75238" 
                stroke={"#000000ae"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 5V14" 
                stroke={"#000000ae"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.25 17H6.75C3 17 1.5 15.5 1.5 11.75V7.25C1.5 3.5 3 2 6.75 2H11.25C15 2 16.5 3.5 16.5 7.25V11.75C16.5 15.5 15 17 11.25 17Z" 
                stroke={"#000000ae"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              {
                sub === "privacy" ? "Privacy Policy" : 
                sub === "preferences" ? "Preferences" : 
                sub === "userpermissions" ? "User Permissions" : 
                sub === "account" ? "Account" : 
                sub === "notifications" ? "Notifications" :  
                sub === "billings" ? "Billings" : "General"
              }
              <p style={{marginLeft: "auto"}}>
                <svg width="14" 
                height="7" 
                viewBox="0 0 14 7" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.28 0.966797L7.9333 5.31346C7.41997 5.8268 6.57997 5.8268 6.06664 5.31346L1.71997 0.966797" stroke="#1A1C1E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </p>
            </div>

            {/*------------------------------ sub settings ----------------------------------- */}

            {/* ----------------------  general  ------------------------------ */}
            <div
              className={style.main_container_navigation_option}
              onClick={() => handleSub("general")}
              style={{
                backgroundColor:
                  sub === "general" || sub === undefined ? "#fdefd9" : "",
                display: mobileSelect ? "flex" : "",
              }}
              title="General"
            >
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"
              className={sub === "general" || sub === undefined ? style.selectedSub : ""}
              >
                <path d="M2.2575 8.91504V12.2825C2.2575 15.65 3.6075 17 6.975 17H11.0175C14.385 17 15.735 15.65 15.735 12.2825V8.91504" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 9.5C10.3725 9.5 11.385 8.3825 11.25 7.01L10.755 2H7.2525L6.75 7.01C6.615 8.3825 7.6275 9.5 9 9.5Z" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.7325 9.5C15.2475 9.5 16.3575 8.27 16.2075 6.7625L15.9975 4.7C15.7275 2.75 14.9775 2 13.0125 2H10.725L11.25 7.2575C11.3775 8.495 12.495 9.5 13.7325 9.5Z" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.23 9.5C5.4675 9.5 6.585 8.495 6.705 7.2575L6.87 5.6L7.23 2H4.9425C2.9775 2 2.2275 2.75 1.9575 4.7L1.755 6.7625C1.605 8.27 2.715 9.5 4.23 9.5Z" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 13.25C7.7475 13.25 7.125 13.8725 7.125 15.125V17H10.875V15.125C10.875 13.8725 10.2525 13.25 9 13.25Z" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p
                style={{
                  color: sub === "general" || sub === undefined ? "#EA7E41" : "",
                }}
              >General</p>
            </div>

            {/* ----------------------  preferences  ------------------------------ */}
            <div
              className={style.main_container_navigation_option}
              onClick={() => handleSub("preferences")}
              style={{
                backgroundColor:
                  sub === "preferences"? "#fdefd9" : "",
                display: mobileSelect ? "flex" : "",
              }}
              title="Preferences"
            >
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"
              className={sub === "preferences" ? style.selectedSub : ""}
              >
                <path d="M4.83 2H13.1625C15.8325 2 16.5 2.6675 16.5 5.33V10.0775C16.5 12.7475 15.8325 13.4075 13.17 13.4075H4.83C2.1675 13.415 1.5 12.7475 1.5 10.085V5.33C1.5 2.6675 2.1675 2 4.83 2Z" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 13.415V17" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.5 10.25H16.5" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.625 17H12.375" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p 
              style={{
                color: sub === "preferences" ? "#EA7E41" : "",
              }}
              >Preferences</p>
            </div>

            {/* ----------------------  userpermissions  ------------------------------ */}
            <div
              className={style.main_container_navigation_option}
              onClick={() => handleSub("userpermissions")}
              style={{
                backgroundColor:
                  sub === "userpermissions"? "#fdefd9" : "",
                display: mobileSelect ? "flex" : "",
              }}
              title="User Permissions"
            >
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"
              className={sub === "userpermissions" ? style.selectedSub : ""}
              >
                <path d="M13.5 5.87C13.455 5.8625 13.4025 5.8625 13.3575 5.87C12.3225 5.8325 11.4975 4.985 11.4975 3.935C11.4975 2.8625 12.36 2 13.4325 2C14.505 2 15.3675 2.87 15.3675 3.935C15.36 4.985 14.535 5.8325 13.5 5.87Z" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.7275 11.3301C13.755 11.5026 14.8875 11.3226 15.6825 10.7901C16.74 10.0851 16.74 8.93012 15.6825 8.22512C14.88 7.69262 13.7325 7.51262 12.705 7.69262" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.4775 5.87C4.5225 5.8625 4.575 5.8625 4.62 5.87C5.655 5.8325 6.48 4.985 6.48 3.935C6.48 2.8625 5.6175 2 4.545 2C3.4725 2 2.61 2.87 2.61 3.935C2.6175 4.985 3.4425 5.8325 4.4775 5.87Z" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.25 11.3301C4.2225 11.5026 3.09 11.3226 2.295 10.7901C1.2375 10.0851 1.2375 8.93012 2.295 8.22512C3.0975 7.69262 4.245 7.51262 5.2725 7.69262" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11.4725C8.955 11.465 8.9025 11.465 8.8575 11.4725C7.8225 11.435 6.9975 10.5875 6.9975 9.53754C6.9975 8.46504 7.86 7.60254 8.9325 7.60254C10.005 7.60254 10.8675 8.47254 10.8675 9.53754C10.86 10.5875 10.035 11.4425 9 11.4725Z" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.8175 13.8355C5.76 14.5405 5.76 15.6955 6.8175 16.4005C8.0175 17.203 9.9825 17.203 11.1825 16.4005C12.24 15.6955 12.24 14.5405 11.1825 13.8355C9.99 13.0405 8.0175 13.0405 6.8175 13.8355Z" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p 
              style={{
                color: sub === "userpermissions" ? "#EA7E41" : "",
              }}
              >User Permissions</p>
            </div>

            {/* ----------------------  account  ------------------------------ */}
            <div
              className={style.main_container_navigation_option}
              onClick={() => handleSub("account")}
              style={{
                backgroundColor:
                  sub === "account"? "#fdefd9" : "",
                display: mobileSelect ? "flex" : "",
              }}
              title="Account"
            >
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"
              className={sub === "account" ? style.selectedSub : ""}
              >
                <path d="M13.605 16.7151C12.945 16.9101 12.165 17.0001 11.25 17.0001H6.75C5.835 17.0001 5.055 16.9101 4.395 16.7151C4.56 14.7651 6.5625 13.2275 9 13.2275C11.4375 13.2275 13.44 14.7651 13.605 16.7151Z" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.25 2H6.75C3 2 1.5 3.5 1.5 7.25V11.75C1.5 14.585 2.355 16.1375 4.395 16.715C4.56 14.765 6.5625 13.2275 9 13.2275C11.4375 13.2275 13.44 14.765 13.605 16.715C15.645 16.1375 16.5 14.585 16.5 11.75V7.25C16.5 3.5 15 2 11.25 2ZM9 11.1275C7.515 11.1275 6.315 9.92001 6.315 8.43501C6.315 6.95001 7.515 5.75 9 5.75C10.485 5.75 11.685 6.95001 11.685 8.43501C11.685 9.92001 10.485 11.1275 9 11.1275Z" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.685 8.43501C11.685 9.92001 10.485 11.1275 9 11.1275C7.515 11.1275 6.315 9.92001 6.315 8.43501C6.315 6.95001 7.515 5.75 9 5.75C10.485 5.75 11.685 6.95001 11.685 8.43501Z" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p 
              style={{
                color: sub === "account" ? "#EA7E41" : "",
              }}
              >Account</p>
            </div>

            {/* ----------------------  notifications  ------------------------------ */}
            <div
              className={style.main_container_navigation_option}
              onClick={() => handleSub("notifications")}
              style={{
                backgroundColor:
                  sub === "notifications"? "#fdefd9" : "",
                display: mobileSelect ? "flex" : "",
              }}
              title="Notifications"
            >
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"
              className={sub === "notifications" ? style.selectedSub : ""}
              >
                <path d="M9.015 2.68262C6.5325 2.68262 4.515 4.70012 4.515 7.18262V9.35012C4.515 9.80762 4.32 10.5051 4.0875 10.8951L3.225 12.3276C2.6925 13.2126 3.06 14.1951 4.035 14.5251C7.2675 15.6051 10.755 15.6051 13.9875 14.5251C14.895 14.2251 15.2925 13.1526 14.7975 12.3276L13.935 10.8951C13.71 10.5051 13.515 9.80762 13.515 9.35012V7.18262C13.515 4.70762 11.49 2.68262 9.015 2.68262Z" 
                strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                <path d="M10.4025 2.90008C10.17 2.83258 9.93 2.78008 9.6825 2.75008C8.9625 2.66008 8.2725 2.71258 7.6275 2.90008C7.845 2.34508 8.385 1.95508 9.015 1.95508C9.645 1.95508 10.185 2.34508 10.4025 2.90008Z" 
                strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.265 14.7949C11.265 16.0324 10.2525 17.0449 9.015 17.0449C8.4 17.0449 7.83 16.7899 7.425 16.3849C7.02 15.9799 6.765 15.4099 6.765 14.7949" 
                strokeWidth="1.5" strokeMiterlimit="10"/>
              </svg>
              <p 
              style={{
                color: sub === "notifications" ? "#EA7E41" : "",
              }}
              >Notifications</p>
            </div>

            {/* ----------------------  billings  ------------------------------ */}
            <div
              className={style.main_container_navigation_option}
              onClick={() => handleSub("billings")}
              style={{
                backgroundColor:
                  sub === "billings"? "#fdefd9" : "",
                display: mobileSelect ? "flex" : "",
              }}
              title="Billings"
            >
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"
              className={sub === "billings" ? style.selectedSub : ""}
              >
                <path d="M6.50391 11.2474C6.50391 12.2149 7.24641 12.9949 8.16891 12.9949H10.0514C10.8539 12.9949 11.5064 12.3124 11.5064 11.4724C11.5064 10.5574 11.1089 10.2349 10.5164 10.0249L7.49391 8.97488C6.90141 8.76488 6.50391 8.44238 6.50391 7.52738C6.50391 6.68738 7.15641 6.00488 7.95891 6.00488H9.84141C10.7639 6.00488 11.5064 6.78488 11.5064 7.75238" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 5V14" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.25 17H6.75C3 17 1.5 15.5 1.5 11.75V7.25C1.5 3.5 3 2 6.75 2H11.25C15 2 16.5 3.5 16.5 7.25V11.75C16.5 15.5 15 17 11.25 17Z" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p 
              style={{
                color: sub === "billings" ? "#EA7E41" : "",
              }}
              >Billings</p>
            </div>

          </div>


          {/* ---------------------- right parent components ------------------------ */}
          <div style={{ width: "100%", height: "100%",}}>
            <Routes>
              <Route index element={<General setMobileSelect={setMobileSelect}/>} />
              <Route path="general" element={<General setMobileSelect={setMobileSelect} />} />
              <Route path="preferences" element={<Preferences setMobileSelect={setMobileSelect} setTheme={setTheme} theme={theme} />} />
              <Route path="userpermissions" element={<UserPermissions setMobileSelect={setMobileSelect} />} />
              <Route path="account" element={<Account setMobileSelect={setMobileSelect} />} />
              <Route path="notifications" element={<Notifications setMobileSelect={setMobileSelect} />} />
              <Route path="billings" element={<Billings setMobileSelect={setMobileSelect} />} />
            </Routes>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Settings
