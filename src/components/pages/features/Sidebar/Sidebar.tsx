import style from "./sidebar.module.scss";
import { useEffect, useState } from "react";
import logo from "/assets/posive_logo.svg";
import user1 from "/assets/user1.png";
import { useNavigate } from "react-router-dom";

interface ISidebarProps {
  toggleMenu: boolean;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setNavigation: React.Dispatch<React.SetStateAction<string>>;
  navigation: string;
}

const Sidebar: React.FC<ISidebarProps> = (props) => {
  const { toggleMenu, setToggleMenu, setNavigation, navigation } = props;
  const [toggleUser, setToggleUser] = useState(true);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleToggleUser = () => {
    if (toggleMenu) {
      setToggleUser(!toggleUser);
    }
  };

  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/login')
  }
  const handleNavigation = (nav: string) => {
    setNavigation(`${nav}`)
    navigate(nav)
  }

  useEffect(() => {
    setToggleUser(true);
  }, [toggleMenu]);

  
  useEffect(() => {
    screen.width<=991 && setToggleMenu(false);
  }, [navigation]);


  return (
    <div
      className={style.sidebar}
      style={{
        width: screen.width>=991 && !toggleMenu ? "80px" : "220px",
        transition: "0.2s",
        transform: toggleMenu ? "translateX(0)" : ""
      }}
    >
      {/* ------------------------------- up ------------------------------------------- */}
      <div
        className={style.sidebar_up}
        style={{
          justifyContent: !toggleMenu ? "center" : "space-between",
        }}
      >
        <div className={style.sidebar_up_logo}
        >
          <img
            src={logo}
            alt="Posive"
            style={{
              width: screen.width>=991 && !toggleMenu ? "0px" : "28px",
              transition: "all 0.1s ease",
            }}
          />
          <h2
            className={style.sidebar_up_logo_head}
            style={{
              fontSize: screen.width>=991 && !toggleMenu ? "0rem" : "1.25rem",
              transition: "all 0.1s ease",
            }}
          >
            Posive
          </h2>
        </div>
        <div
          className={
            toggleMenu ? style.sidebar_up_menu_open : style.sidebar_up_menu
          }
          onClick={handleToggleMenu}
        >
          <div className={style.bar_one}></div>
          <div className={style.bar_two}></div>
          <div className={style.bar_three}></div>
        </div>
      </div>
      {/* ------------------------------- nav ------------------------------------------- */}

      <div className={style.sidebar_nav}>

        <div
          style={{
            padding: screen.width>=991 && !toggleMenu ? "12px 0px" : "12px 20px",
            justifyContent: !toggleMenu ? "center" : "unset",
            backgroundColor: navigation === undefined ? "#FDEFD9" : "",
          }}
          onClick={() => handleNavigation("")}
          title="POS"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={navigation === undefined ? style.selectedNav : ""}
          >
            <path
              d="M3.75 7.5H5.25C6.75 7.5 7.5 6.75 7.5 5.25V3.75C7.5 2.25 6.75 1.5 5.25 1.5H3.75C2.25 1.5 1.5 2.25 1.5 3.75V5.25C1.5 6.75 2.25 7.5 3.75 7.5Z"
              // stroke={navigation === undefined ? "#EA7E41" : ""}
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.75 7.5H14.25C15.75 7.5 16.5 6.75 16.5 5.25V3.75C16.5 2.25 15.75 1.5 14.25 1.5H12.75C11.25 1.5 10.5 2.25 10.5 3.75V5.25C10.5 6.75 11.25 7.5 12.75 7.5Z"
              // stroke={navigation === undefined ? "#EA7E41" : ""}
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.75 16.5H14.25C15.75 16.5 16.5 15.75 16.5 14.25V12.75C16.5 11.25 15.75 10.5 14.25 10.5H12.75C11.25 10.5 10.5 11.25 10.5 12.75V14.25C10.5 15.75 11.25 16.5 12.75 16.5Z"
              // stroke={navigation === undefined ? "#EA7E41" : ""}
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.75 16.5H5.25C6.75 16.5 7.5 15.75 7.5 14.25V12.75C7.5 11.25 6.75 10.5 5.25 10.5H3.75C2.25 10.5 1.5 11.25 1.5 12.75V14.25C1.5 15.75 2.25 16.5 3.75 16.5Z"
              // stroke={navigation === undefined ? "#EA7E41" : ""}
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontSize: screen.width>=991 && !toggleMenu ? "0rem" : "1rem",
              opacity: !toggleMenu ? "0" : "1",
              color: navigation === undefined ? "#EA7E41" : "",
            }}
          >
            POS
          </span>
        </div>


        <div
          style={{
            padding: screen.width>=991 && !toggleMenu ? "12px 0px" : "12px 20px",
            justifyContent: !toggleMenu ? "center" : "unset",
            backgroundColor: navigation === "overview" ? "#FDEFD9" : "unset"
          }}
          onClick={() => handleNavigation("overview")}
          title="Overview"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={navigation === "overview" ? style.selectedNav : ""}
          >
            <path
              d="M5.15991 13.6126V12.0601"
              // stroke={navigation === "overview" ? "#ea7e41 !important" : ""}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M9 13.6123V10.5073"
              // stroke={navigation === "overview" ? "#EA7E41" : "#000000ae"}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12.8401 13.6123V8.94727"
              // stroke={navigation === "overview" ? "#EA7E41" : "#000000ae"}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12.8399 4.3877L12.4949 4.7927C10.5824 7.0277 8.01741 8.6102 5.15991 9.3227"
              // stroke={navigation === "overview" ? "#EA7E41" : "#000000ae"}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M10.6426 4.3877H12.8401V6.5777"
              // stroke={navigation === "overview" ? "#EA7E41" : "#000000ae"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
              stroke={navigation === "overview" ? "#EA7E41" : "#000000ae"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontSize: screen.width>=991 && !toggleMenu ? "0rem" : "1rem",
              color: navigation === "overview" ? "#EA7E41" : "",
            }}
          >
            Overview
          </span>
        </div>

        <div
          style={{
            padding: screen.width>=991 && !toggleMenu ? "12px 0px" : "12px 20px",
            justifyContent: !toggleMenu ? "center" : "unset",
            backgroundColor: navigation === "product" ? "#FDEFD9" : "unset"
          }}
          onClick={() => handleNavigation("product")}
          title="Product"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={navigation === "product" ? style.selectedNav : ""}
          >
            <path
              d="M2.37744 5.58008L8.99993 9.41257L15.5774 5.60255"
              // stroke={navigation === "product" ? "#EA7E41" : "#000000ae"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 16.2078V9.40527"
              // stroke={navigation === "product" ? "#EA7E41" : "#000000ae"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.44746 1.86L3.44247 4.08752C2.53497 4.59002 1.79248 5.85001 1.79248 6.88501V11.1225C1.79248 12.1575 2.53497 13.4175 3.44247 13.92L7.44746 16.1475C8.30246 16.62 9.70496 16.62 10.56 16.1475L14.565 13.92C15.4725 13.4175 16.215 12.1575 16.215 11.1225V6.88501C16.215 5.85001 15.4725 4.59002 14.565 4.08752L10.56 1.86C9.69746 1.38 8.30246 1.38 7.44746 1.86Z"
              // stroke={navigation === "product" ? "#EA7E41" : "#000000ae"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.7501 9.93021V7.18523L5.63257 3.0752"
              // stroke={navigation === "product" ? "#EA7E41" : "#000000ae"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontSize: screen.width>=991 && !toggleMenu ? "0rem" : "1rem",
              color: navigation === "product" ? "#EA7E41" : "",
            }}
          >
            Product
          </span>
        </div>

        <div
          style={{
            padding: screen.width>=991 && !toggleMenu ? "12px 0px" : "12px 20px",
            justifyContent: !toggleMenu ? "center" : "unset",
            backgroundColor: (/^settings.*/).test(navigation) ? "#FDEFD9" : "unset"
          }}
          onClick={() => handleNavigation("settings")}
          title="Settings"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={(/^settings.*/).test(navigation) ? style.selectedNav : ""}
          >
            <path
              d="M2.25 6.83252V11.16C2.25 12.75 2.25 12.75 3.75 13.7625L7.875 16.1475C8.4975 16.5075 9.51 16.5075 10.125 16.1475L14.25 13.7625C15.75 12.75 15.75 12.75 15.75 11.1675V6.83252C15.75 5.25002 15.75 5.25002 14.25 4.23752L10.125 1.85252C9.51 1.49252 8.4975 1.49252 7.875 1.85252L3.75 4.23752C2.25 5.25002 2.25 5.25002 2.25 6.83252Z"
              // stroke={navigation === "settings" ? "#EA7E41" : "#000000ae"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
              // stroke={navigation === "settings" ? "#EA7E41" : "#000000ae"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontSize: screen.width>=991 && !toggleMenu ? "0rem" : "1rem",
              color: (/^settings.*/).test(navigation) ? "#EA7E41" : "",
            }}
          >
            Settings
          </span>
        </div>

        <div
          style={{
            padding: screen.width>=991 && !toggleMenu ? "12px 0px" : "12px 20px",
            justifyContent: !toggleMenu ? "center" : "unset",
            backgroundColor: (/^help.*/).test(navigation) ? "#FDEFD9" : "unset"
          }}
          onClick={() => handleNavigation("help")}
          title="Help Center"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={(/^help.*/).test(navigation) ? style.selectedNav : ""}
          >
            <path
              d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
              // stroke={(/^help.*/).test(navigation) ? "#EA7E41" : "#000000ae"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 6V9.75"
              // stroke={(/^help.*/).test(navigation) ? "#EA7E41" : "#000000ae"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.99585 12H9.00259"
              // stroke={(/^help.*/).test(navigation) ? "#EA7E41" : "#000000ae"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontSize: screen.width>=991 && !toggleMenu ? "0rem" : "1rem",
              color: (/^help.*/).test(navigation) ? "#EA7E41" : "",
            }}
          >
            Help Center
          </span>
        </div>
      </div>

      {/* ------------------------------- user -------------------------------------- */}

      <div
        className={style.sidebar_user}
        id="sidebar_user"
        style={{
          gridTemplateColumns: !toggleMenu ? "1fr" : "1fr 3fr 1fr",
          border: !toggleMenu ? "none" : "1px solid #6C7278",
          transition: "all 0.3s ease",
          marginBottom: !toggleUser ? "20%" : "1%",
        }}
        onClick={handleToggleUser}
      >
        <div className={style.sidebar_user_photo}>
          <img src={user1} alt="" />
        </div>

        <div
          className={style.sidebar_user_about}
          style={{
            display: !toggleMenu ? "none" : "block",
          }}
        >
          <h4>Jane</h4>
          <p>Staff</p>
        </div>

        <div
          className={style.sidebar_user_icon}
          style={{
            display: !toggleMenu ? "none" : "block",
          }}
        >
          <svg
            style={{ transform: !toggleUser ? "rotate(180deg)" : "unset" }}
            width="10"
            height="5"
            viewBox="0 0 10 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.45343 0.271484H4.81926H1.54676C0.986764 0.271484 0.706764 0.948151 1.10343 1.34482L4.1251 4.36648C4.60926 4.85065 5.39676 4.85065 5.88093 4.36648L7.0301 3.21732L8.9026 1.34482C9.29343 0.948151 9.01343 0.271484 8.45343 0.271484Z"
              fill="#6C7278"
            />
          </svg>
        </div>

        <div
          className={
            toggleUser
              ? style.sidebar_user_popup
              : style.sidebar_user_popup_open
          }
          style={{ display: !toggleMenu ? "none" : "block" }}
        >
          <div onClick={handleLogout}>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
