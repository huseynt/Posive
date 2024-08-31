import { useEffect, useState } from "react";
import style from "./homePage.module.scss";
import iphone from "/public/iPhone13pro.png";
import mac from "/public/MacbookAir.png";
import { useNavigate } from "react-router-dom";
import img_person from "/public/assets/login_wall_person.png";
import img_wall from "/public/assets/login_wall.png";

interface ICovers {
  [key: number]: string;
}

const HomePage = () => {
  const navigate = useNavigate()
  const [I, setI] = useState<number>(0)
  const covers: ICovers ={
    0: img_person,
    1: img_wall
  }

  const changeI = () => {
    if(I === 0) setI(1)
    else setI(0)
  }

  useEffect(() => {
    let i = I
    const interval = setInterval(() => {
      setI(i)
      i++
      if(i > 1) i = 0
    }, 7000)
    return () => {
      clearInterval(interval)
    }
  }, [])



  

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

      {/* ------------------- mobile -------------------- */}
      <div className={style.home_mobile}>

        <div className={style.home_mobile_up}>
          <div className={style.home_mobile_up_photo}
          style={{
            background: `url(${covers[I]}) no-repeat center center / cover`
          }}
          onClick={changeI}
          >
            <div className={style.home_mobile_up_photo_circle}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_18_1769)">
                <rect width="28" height="28" rx="6.37934" fill="#EF8421"/>
                <path d="M8.05193 8.29166C8.3442 8.03071 8.7223 7.88647 9.11412 7.88647H18.3406C19.2214 7.88647 19.9354 8.60051 19.9354 9.48131V18.9979C19.9354 19.5291 19.6709 20.0254 19.23 20.3217L4.05944 30.5144C3.40609 30.9534 2.53019 30.85 1.99694 30.2711L-5.28209 22.3681C-5.88535 21.7132 -5.83542 20.6911 -5.1712 20.098L8.05193 8.29166Z" fill="black" fillOpacity="0.2"/>
                <rect x="7.44263" y="7.62061" width="12.7587" height="12.7587" rx="2.12645" fill="url(#paint0_linear_18_1769)"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_18_1769" x1="13.822" y1="7.62061" x2="13.822" y2="20.3793" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="#CFCFCF"/>
                </linearGradient>
                <clipPath id="clip0_18_1769">
                <rect width="28" height="28" rx="6.37934" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className={style.home_mobile_up_desc}>
            <div className={style.home_mobile_up_desc_head}>
              <span>Posive</span>
              <span className={style.home_mobile_up_desc_head_b}>POS</span>
            </div>

            <div className={style.home_mobile_up_desc_more}>Admin Dashboard</div>

            <div className={style.home_mobile_up_desc_info}>Experience the future of retail with our user-friendly POS platform. Increase your sales, streamline operations, and delight your customers with a modern and efficient checkout process</div>
          </div>
        </div>

        <div className={style.home_mobile_actions}>
          <button className={style.home_mobile_actions_btn}
          onClick={() => navigate('/login')}
          >Login</button>
          <button className={style.home_mobile_actions_btnW}
          onClick={() => navigate('/registr')}
          >Create an Account</button>
        </div>

      </div>

    </div>
  );
};

export default HomePage;
