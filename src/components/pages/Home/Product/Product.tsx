import style from './product.module.scss'
import { Helmet } from 'react-helmet'
import { useOutletContext } from "react-router-dom";

import ChartComponent from '../../features/ChartComponent/ChartComponent';

interface IProduct {
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setNotification: React.Dispatch<React.SetStateAction<boolean>>;
  notification: boolean;
}



const Product = () => {
  const { setToggleMenu, setNotification, notification } = useOutletContext<IProduct>();











  return (
    <div className={style.overflow}>
      <Helmet>
        <title>Posive Product</title>
        <meta name="description" content="Product" />
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

        {/* ------------------------------ up ----------------------------------------- */}
        <div className={style.main_up}>
          <div className={style.main_up_overview}>
            <h3 className={style.main_up_overview_head}>Product</h3>
            <p className={style.main_up_overview_date}>Let’s Manage your product</p>
          </div>

          <div className={style.main_up_actions}>
            <div className={style.main_up_actions_export}>
              <p>Add new product +</p>
            </div>
          </div>
        </div>


        {/* -------------------------- total review -------------------------------- */}
        <div className={style.main_total}>
          <div
            className={style.main_total_option}
            style={{ animationDuration: "0.5s" }}
          >
            <div className={style.main_total_option_text}>
              <p className={style.main_total_option_text_up}>Total Products Menu</p>
              <h3 className={style.main_total_option_text_head}>250</h3>
            </div>

            <div
              className={style.main_total_option_icon}
              style={{ backgroundColor: "#FDEFD9" }}
            >
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.8767 8.32043L13.1767 12.7804C12.8667 12.9604 12.4767 12.9604 12.1567 12.7804L4.45672 8.32043C3.90672 8.00043 3.76672 7.25043 4.18672 6.78043C4.47672 6.45043 4.80672 6.18043 5.15672 5.99043L10.5767 2.99043C11.7367 2.34043 13.6167 2.34043 14.7767 2.99043L20.1967 5.99043C20.5467 6.18043 20.8767 6.46043 21.1667 6.78043C21.5667 7.25043 21.4267 8.00043 20.8767 8.32043Z" fill="#EA7E41"/>
                <path d="M12.0967 14.6399V21.4599C12.0967 22.2199 11.3267 22.7199 10.6467 22.3899C8.58673 21.3799 5.11673 19.4899 5.11673 19.4899C3.89673 18.7999 2.89673 17.0599 2.89673 15.6299V10.4699C2.89673 9.67988 3.72673 9.17988 4.40673 9.56988L11.5967 13.7399C11.8967 13.9299 12.0967 14.2699 12.0967 14.6399Z" fill="#EA7E41"/>
                <path d="M13.2368 14.6399V21.4599C13.2368 22.2199 14.0068 22.7199 14.6868 22.3899C16.7468 21.3799 20.2168 19.4899 20.2168 19.4899C21.4368 18.7999 22.4368 17.0599 22.4368 15.6299V10.4699C22.4368 9.67988 21.6068 9.17988 20.9268 9.56988L13.7368 13.7399C13.4368 13.9299 13.2368 14.2699 13.2368 14.6399Z" fill="#EA7E41"/>
              </svg>
            </div>
          </div>

          <div
            className={style.main_total_option}
            style={{ animationDuration: "0.55s" }}
          >
            <div className={style.main_total_option_text}>
              <p className={style.main_total_option_text_up}>Purchase Invoice </p>
              <h3 className={style.main_total_option_text_head}>50244</h3>
            </div>

            <div
              className={style.main_total_option_icon}
              style={{ backgroundColor: "#DBECFD" }}
            >
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3335 2.5H8.3335C4.8335 2.5 3.3335 4.5 3.3335 7.5V17.5C3.3335 20.5 4.8335 22.5 8.3335 22.5H16.3335C19.8335 22.5 21.3335 20.5 21.3335 17.5V7.5C21.3335 4.5 19.8335 2.5 16.3335 2.5ZM8.3335 12.75H12.3335C12.7435 12.75 13.0835 13.09 13.0835 13.5C13.0835 13.91 12.7435 14.25 12.3335 14.25H8.3335C7.9235 14.25 7.5835 13.91 7.5835 13.5C7.5835 13.09 7.9235 12.75 8.3335 12.75ZM16.3335 18.25H8.3335C7.9235 18.25 7.5835 17.91 7.5835 17.5C7.5835 17.09 7.9235 16.75 8.3335 16.75H16.3335C16.7435 16.75 17.0835 17.09 17.0835 17.5C17.0835 17.91 16.7435 18.25 16.3335 18.25ZM18.8335 9.75H16.8335C15.3135 9.75 14.0835 8.52 14.0835 7V5C14.0835 4.59 14.4235 4.25 14.8335 4.25C15.2435 4.25 15.5835 4.59 15.5835 5V7C15.5835 7.69 16.1435 8.25 16.8335 8.25H18.8335C19.2435 8.25 19.5835 8.59 19.5835 9C19.5835 9.41 19.2435 9.75 18.8335 9.75Z" fill="#4D81E7"/>
              </svg>
            </div>
          </div>

          <div
            className={style.main_total_option}
            style={{ animationDuration: "0.6s" }}
          >
            <div className={style.main_total_option_text}>
              <p className={style.main_total_option_text_up}>Montly Income</p>
              <h3 className={style.main_total_option_text_head}>$45461</h3>
            </div>

            <div
              className={style.main_total_option_icon}
              style={{ backgroundColor: "#CEFBE7"}}
            >
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.17 7.13953C18.74 4.96953 17.13 4.01953 14.89 4.01953H6.10999C3.46999 4.01953 1.70999 5.33953 1.70999 8.41953V13.5695C1.70999 15.7895 2.61999 17.0895 4.11999 17.6495C4.33999 17.7295 4.57999 17.7995 4.82999 17.8395C5.22999 17.9295 5.65999 17.9695 6.10999 17.9695H14.9C17.54 17.9695 19.3 16.6495 19.3 13.5695V8.41953C19.3 7.94953 19.26 7.52953 19.17 7.13953ZM5.52999 12.4995C5.52999 12.9095 5.18999 13.2495 4.77999 13.2495C4.36999 13.2495 4.02999 12.9095 4.02999 12.4995V9.49953C4.02999 9.08953 4.36999 8.74953 4.77999 8.74953C5.18999 8.74953 5.52999 9.08953 5.52999 9.49953V12.4995ZM10.5 13.6395C9.03999 13.6395 7.85999 12.4595 7.85999 10.9995C7.85999 9.53953 9.03999 8.35953 10.5 8.35953C11.96 8.35953 13.14 9.53953 13.14 10.9995C13.14 12.4595 11.96 13.6395 10.5 13.6395ZM16.96 12.4995C16.96 12.9095 16.62 13.2495 16.21 13.2495C15.8 13.2495 15.46 12.9095 15.46 12.4995V9.49953C15.46 9.08953 15.8 8.74953 16.21 8.74953C16.62 8.74953 16.96 9.08953 16.96 9.49953V12.4995Z" fill="#12B3A8"/>
                <path d="M22.3 11.4203V16.5703C22.3 19.6503 20.54 20.9803 17.89 20.9803H9.11001C8.36001 20.9803 7.69001 20.8703 7.11001 20.6503C6.64001 20.4803 6.23001 20.2303 5.90001 19.9103C5.72001 19.7403 5.86001 19.4703 6.11001 19.4703H14.89C18.59 19.4703 20.79 17.2703 20.79 13.5803V8.42028C20.79 8.18028 21.06 8.03028 21.23 8.21028C21.91 8.93028 22.3 9.98028 22.3 11.4203Z" fill="#12B3A8"/>
              </svg>
            </div>
          </div>
        </div>





        <div className={style.main_chart}>
          <ChartComponent/>
        </div>






      </div>
    </div>
  )
}

export default Product
