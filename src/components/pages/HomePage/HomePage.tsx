import style from "./homePage.module.scss";
import iphone from "/public/iPhone13pro.png";
import mac from "/public/MacbookAir.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className={style.home}>

      <div className={style.home_bg}>
        <div className={style.home_bg_circle}></div>
      </div>


      <div className={style.home_main}>

        <header className={style.home_main_header}>
          <p className={style.home_main_header_text}>Let`s do your best today 🎉</p>
          <div className={style.home_main_header_button} 
          onClick={() => navigate('/login')}
          >Sign In</div>
        </header>

        <div className={style.home_main_container}>

          <div className={style.home_main_container_left}>

            <div className={style.home_main_container_left_logo}>
              <svg className={style.home_main_container_left_logo_icon} width="53" height="54" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_104600)">
                <rect y="0.665009" width="52.67" height="52.67" rx="12" fill="#EF8421"/>
                <path d="M15.1464 16.2622C15.6961 15.7713 16.4074 15.5 17.1444 15.5H34.5C36.1569 15.5 37.5 16.8431 37.5 18.5V36.4014C37.5 37.4006 37.0025 38.3343 36.1731 38.8915L7.63618 58.0648C6.40719 58.8905 4.75957 58.6961 3.75648 57.607L-9.93588 42.741C-11.0707 41.509 -10.9767 39.5864 -9.7273 38.4708L15.1464 16.2622Z" fill="black" fillOpacity="0.2"/>
                <rect x="14" y="15" width="24" height="24" rx="4" fill="url(#paint0_linear_1_104600)"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_1_104600" x1="26" y1="15" x2="26" y2="39" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="#CFCFCF"/>
                </linearGradient>
                <clipPath id="clip0_1_104600">
                <rect y="0.665009" width="52.67" height="52.67" rx="12" fill="white"/>
                </clipPath>
                </defs>
              </svg>
              <p className={style.home_main_container_left_logo_title}>Posive</p>
            </div>

            <h2 className={style.home_main_container_left_text}>POS Admin</h2>
            <h2 className={style.home_main_container_left_text}>Dashboard</h2>
            <div className={style.home_main_container_left_actions}>
              <button onClick={() => navigate("/registr")}>Sign Up</button>
            </div>
          </div>

          <div className={style.home_main_container_describtion}>

            <img className={style.home_main_container_describtion_iphone} src={iphone} alt="iphone13pro" />
            <img className={style.home_main_container_describtion_mac} src={mac} alt="macbook" />
          </div>
        </div>


      </div>

    </div>
  );
};

export default HomePage;
