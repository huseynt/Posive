import style from "./pos.module.scss";
import { meals } from "../../../test/db/cards";
import Meal from "../../features/Meal/Meal";
import { useEffect } from "react";
import { useState } from "react";
import { IMeal } from "../../../utils/interface/Meal";
import SearchInput from "../../features/SearchInput/SearchInput";

import { Helmet } from "react-helmet";

// import {API} from "../../../utils/API/API";
// import Axios from "axios";
// import {config} from "../../../utils/API/config";

import { useOutletContext } from "react-router-dom";

interface MainProps {
  setBag: React.Dispatch<React.SetStateAction<boolean>>;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setNotification: React.Dispatch<React.SetStateAction<boolean>>;
  notification: boolean;
  bag: boolean;
}


const Main= () => {
  const { bag, setBag, setToggleMenu, setNotification, notification } = useOutletContext<MainProps>();
  const [category, setCategory] = useState<string>("");
  const [mealsFiltered, setMealsFiltered] = useState<IMeal[]>([]);
  const [mobileSearch, setMobileSearch] = useState<boolean>(false);





// ---------------------- api test ------------------------
  // const [meals, setMeals] = useState<IMeal[]>([]);
  // async function getMeals() {
  //   try {
  //     Axios.get(
  //       API,
  //       config
  //     ).then (
  //       (response) => {
  //         setMeals(response.data.content);
  //         setMealsFiltered(response.data.content);
  //         console.log(response.data.content);
  //       }
  //     )
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  // useEffect(() => {
  //   if (meals.length === 0) {
  //     getMeals();
  //   }
  // }, [meals.length]);
// ---------------------------------------------------



  useEffect(() => {
    if (category === "") {
      setMealsFiltered(meals);
    } else {
      setMealsFiltered(meals.filter((meal) => meal.category === category));
    }
  }, [category,meals]);







  
  return (
    <div className={style.overflow}>

      <Helmet>
        <title>Posive POS</title>
        <meta name="description" content="POS Dashboard" />
        <meta name="keywords" content="Posive" />
      </Helmet>


      <div className={style.main}>
        {/* ------------------------------up-------------------------------- */}
        <div className={style.main_up}>


          {/* ----------------------------------------- */}
          <div className={style.main_up_search}>
            <SearchInput meals={meals} 
            setMealsFiltered={setMealsFiltered}
            />
          </div>


          {/* ----------------------------------------- */}

          <button className={style.main_up_bag} onClick={() => setBag(!bag)}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.60758 1.5L3.89258 4.2225"
                stroke="#1A1C1E"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.3926 1.5L14.1076 4.2225"
                stroke="#1A1C1E"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.5 5.8877C1.5 4.5002 2.2425 4.3877 3.165 4.3877H14.835C15.7575 4.3877 16.5 4.5002 16.5 5.8877C16.5 7.5002 15.7575 7.3877 14.835 7.3877H3.165C2.2425 7.3877 1.5 7.5002 1.5 5.8877Z"
                stroke="#1A1C1E"
                strokeWidth="1.5"
              />
              <path
                d="M7.32007 10.5V13.1625"
                stroke="#1A1C1E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M10.77 10.5V13.1625"
                stroke="#1A1C1E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M2.625 7.5L3.6825 13.98C3.9225 15.435 4.5 16.5 6.645 16.5H11.1675C13.5 16.5 13.845 15.48 14.115 14.07L15.375 7.5"
                stroke="#1A1C1E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button
            className={style.main_up_notification}
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
          </button>
        </div>

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
                onClick={() => setMobileSearch(!mobileSearch)}
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
                {/* <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6665 4.3335H10.6665"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.00016 4.3335H1.3335"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66683 6.66667C7.95549 6.66667 9.00016 5.622 9.00016 4.33333C9.00016 3.04467 7.95549 2 6.66683 2C5.37816 2 4.3335 3.04467 4.3335 4.33333C4.3335 5.622 5.37816 6.66667 6.66683 6.66667Z"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.6667 11.6665H12"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.3335 11.6665H1.3335"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.33333 14.0002C10.622 14.0002 11.6667 12.9555 11.6667 11.6668C11.6667 10.3782 10.622 9.3335 9.33333 9.3335C8.04467 9.3335 7 10.3782 7 11.6668C7 12.9555 8.04467 14.0002 9.33333 14.0002Z"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg> */}
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
            style={{ display: mobileSearch ? "flex" : "none" }}
          >
            <SearchInput meals={meals} 
            setMealsFiltered={setMealsFiltered}
            />
          </div>
        </div>

        {/* -------------------------------filter---------------------------------------------- */}
        <div className={style.main_filter}>
          
          <div
            className={style.main_filter_option}
            onClick={() =>
              category !== "Main Course"
                ? setCategory("Main Course")
                : setCategory("")
            }
            style={{
              backgroundColor: category === "Main Course" ? "#EA7E41" : "",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                style={{ fill: category === "Main Course" ? "white" : "" }}
                d="M11.7299 1.50989L13.4899 5.02989C13.7299 5.51989 14.3699 5.98989 14.9099 6.07989L18.0999 6.60989C20.1399 6.94989 20.6199 8.42989 19.1499 9.88989L16.6699 12.3699C16.2499 12.7899 16.0199 13.5999 16.1499 14.1799L16.8599 17.2499C17.4199 19.6799 16.1299 20.6199 13.9799 19.3499L10.9899 17.5799C10.4499 17.2599 9.55991 17.2599 9.00991 17.5799L6.01991 19.3499C3.87991 20.6199 2.57991 19.6699 3.13991 17.2499L3.84991 14.1799C3.97991 13.5999 3.74991 12.7899 3.32991 12.3699L0.849909 9.88989C-0.610091 8.42989 -0.140091 6.94989 1.89991 6.60989L5.08991 6.07989C5.61991 5.98989 6.25991 5.51989 6.49991 5.02989L8.25991 1.50989C9.21991 -0.400107 10.7799 -0.400107 11.7299 1.50989Z"
                fill="#292D32"
              />
            </svg>
            <div>
              <h4
                style={{
                  color: category === "Main Course" ? "white" : "",
                }}
              >
                Main Course
              </h4>
              <p
                style={{
                  color: category === "Main Course" ? "white" : "",
                }}
              >
                {meals.filter((meal) => meal.category === "Main Course").length}
              </p>
            </div>
          </div>

          <div
            className={style.main_filter_option}
            onClick={() =>
              category !== "Rice Bowl"
                ? setCategory("Rice Bowl")
                : setCategory("")
            }
            style={{
              backgroundColor: category === "Rice Bowl" ? "#EA7E41" : "",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                style={{ fill: category === "Rice Bowl" ? "white" : "" }}
                d="M17.5 8.1251H16.8461C16.6891 6.41797 15.8999 4.8311 14.6334 3.67574C13.3668 2.52038 11.7143 1.87988 10 1.87988C8.28566 1.87988 6.63318 2.52038 5.36665 3.67574C4.10012 4.8311 3.31095 6.41797 3.15391 8.1251H2.5C2.33424 8.1251 2.17527 8.19095 2.05806 8.30816C1.94085 8.42537 1.875 8.58434 1.875 8.7501C1.87775 10.2364 2.28679 11.6938 3.0579 12.9644C3.82901 14.2351 4.93283 15.2708 6.25 15.9595V16.2501C6.25 16.5816 6.3817 16.8996 6.61612 17.134C6.85054 17.3684 7.16848 17.5001 7.5 17.5001H12.5C12.8315 17.5001 13.1495 17.3684 13.3839 17.134C13.6183 16.8996 13.75 16.5816 13.75 16.2501V15.9595C15.0672 15.2708 16.171 14.2351 16.9421 12.9644C17.7132 11.6938 18.1223 10.2364 18.125 8.7501C18.125 8.58434 18.0592 8.42537 17.9419 8.30816C17.8247 8.19095 17.6658 8.1251 17.5 8.1251ZM13.5531 4.39307C13.6964 4.51026 13.8336 4.63396 13.9648 4.76416C12.3011 5.34944 10.9262 6.55229 10.125 8.12354H7.82031C8.21094 7.02856 8.93011 6.08089 9.87956 5.40998C10.829 4.73907 11.9624 4.37766 13.125 4.3751C13.268 4.3751 13.4109 4.38213 13.5531 4.39307ZM11.5719 8.1251C12.3296 6.98829 13.476 6.16691 14.7961 5.81494C15.2277 6.51702 15.4985 7.30595 15.5891 8.1251H11.5719ZM10 3.1251C10.5015 3.12543 11.0008 3.19296 11.4844 3.32588C10.3066 3.61805 9.22663 4.21552 8.35334 5.05809C7.48005 5.90065 6.8443 6.95853 6.51016 8.1251H4.41094C4.56597 6.75077 5.22135 5.48156 6.25212 4.55943C7.28288 3.6373 8.61696 3.12675 10 3.1251Z"
                fill="black"
              />
            </svg>
            <div>
              <h4
                style={{ color: category === "Rice Bowl" ? "white" : "" }}
              >
                Rice Bowl
              </h4>
              <p
                style={{ color: category === "Rice Bowl" ? "white" : "" }}
              >
                {meals.filter((meal) => meal.category === "Rice Bowl").length}
              </p>
            </div>
          </div>
          <div
            className={style.main_filter_option}
            onClick={() =>
              category !== "Fast Food"
                ? setCategory("Fast Food")
                : setCategory("")
            }
            style={{
              backgroundColor: category === "Fast Food" ? "#EA7E41" : "",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_40_53719)">
                <path
                  style={{ fill: category === "Fast Food" ? "white" : "" }}
                  d="M15.0499 19.1668H16.4333C17.1333 19.1668 17.7083 18.6252 17.7916 17.9418L19.1666 4.2085H14.9999V0.833496H13.3583V4.2085H9.21659L9.46659 6.1585C10.8916 6.55016 12.2249 7.2585 13.0249 8.04183C14.2249 9.22516 15.0499 10.4502 15.0499 12.4502V19.1668ZM0.833252 18.3335V17.5002H13.3583V18.3335C13.3583 18.7835 12.9833 19.1668 12.4999 19.1668H1.66659C1.20825 19.1668 0.833252 18.7835 0.833252 18.3335ZM13.3583 12.5002C13.3583 5.8335 0.833252 5.8335 0.833252 12.5002H13.3583ZM0.833252 14.1668H13.3333V15.8335H0.833252V14.1668Z"
                  fill="#1A1C1E"
                />
              </g>
              <defs>
                <clipPath id="clip0_40_53719">
                  <rect width="20" height="20" fill="" />
                </clipPath>
              </defs>
            </svg>
            <div>
              <h4
                style={{ color: category === "Fast Food" ? "white" : "" }}
              >
                Fast food
              </h4>
              <p
                style={{ color: category === "Fast Food" ? "white" : "" }}
              >
                {meals.filter((meal) => meal.category === "Fast Food").length}
              </p>
            </div>
          </div>
          <div
            className={style.main_filter_option}
            onClick={() =>
              category !== "Healthy Food"
                ? setCategory("Healthy Food")
                : setCategory("")
            }
            style={{
              backgroundColor:
                category === "Healthy Food" ? "#EA7E41" : "",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                style={{
                  fill: category === "Healthy Food" ? "white" : "",
                }}
                d="M6.923 4.83286C7.23076 4.26394 7.69016 3.79143 8.2502 3.46778C8.81024 3.14414 9.44901 2.98202 10.0956 2.99942C10.7422 3.01683 11.3713 3.21307 11.9131 3.56637C12.455 3.91967 12.8883 4.41621 13.165 5.00086C12.4366 5.01739 11.7288 5.24569 11.1281 5.65786C10.5273 6.07003 10.0596 6.64824 9.782 7.32186C9.52621 6.89539 9.21964 6.50151 8.869 6.14886C8.30556 5.59575 7.64615 5.14981 6.923 4.83286ZM16.992 8.99986C17.049 8.1464 16.8126 7.29909 16.3221 6.59834C15.8316 5.89759 15.1164 5.38547 14.295 5.14686C14.0255 4.29297 13.5074 3.53884 12.8071 2.98088C12.1068 2.42292 11.256 2.08648 10.3634 2.01455C9.4709 1.94262 8.57719 2.13848 7.79655 2.5771C7.01591 3.01571 6.38379 3.67715 5.981 4.47686C5.58318 4.3532 5.17807 4.25435 4.768 4.18086C4.07439 4.05603 3.37074 3.99544 2.666 3.99986C2.60464 4.00098 2.5433 4.00298 2.482 4.00586H2.478C2.35575 4.01322 2.24043 4.0651 2.15383 4.1517C2.06724 4.23829 2.01536 4.35361 2.008 4.47586V4.47686C1.99973 4.70111 1.99939 4.92559 2.007 5.14986C2.02 5.55886 2.063 6.12686 2.179 6.76886C2.302 7.45086 2.51 8.23286 2.864 8.99886H2.5C2.36739 8.99886 2.24021 9.05154 2.14645 9.14531C2.05268 9.23908 2 9.36625 2 9.49886V9.99886C2 10.6889 2.088 11.3589 2.252 11.9989H17.748C17.916 11.3455 18.0007 10.6735 18 9.99886V9.49886C18 9.36625 17.9473 9.23908 17.8536 9.14531C17.7598 9.05154 17.6326 8.99886 17.5 8.99886L16.992 8.99986ZM3.984 8.99986C3.55 8.21786 3.302 7.36086 3.164 6.59186C3.06956 6.06676 3.0154 5.53521 3.002 5.00186L3.116 5.00586C3.488 5.01886 4.006 5.05886 4.59 5.16486C5.77 5.37786 7.156 5.84986 8.162 6.85586C8.778 7.47186 9.195 8.23186 9.475 8.99986H7.708L5.854 7.14586C5.80751 7.09944 5.75234 7.06263 5.69162 7.03753C5.63091 7.01243 5.56584 6.99954 5.50015 6.99958C5.43445 6.99963 5.3694 7.01262 5.30873 7.0378C5.24805 7.06298 5.19292 7.09987 5.1465 7.14636C5.10008 7.19285 5.06327 7.24803 5.03817 7.30874C5.01307 7.36945 5.00018 7.43452 5.00022 7.50021C5.00027 7.56591 5.01325 7.63096 5.03844 7.69164C5.06362 7.75232 5.10051 7.80744 5.147 7.85386L6.294 8.99986H3.984ZM10.532 8.99986C10.5232 8.97281 10.5142 8.9458 10.505 8.91886C10.4832 8.5416 10.5395 8.1639 10.6702 7.80933C10.8009 7.45476 11.0033 7.13094 11.2647 6.85806C11.5261 6.58519 11.841 6.36913 12.1896 6.22335C12.5382 6.07758 12.9132 6.00522 13.291 6.0108C13.6689 6.01638 14.0415 6.09978 14.3857 6.25578C14.7299 6.41179 15.0383 6.63706 15.2915 6.91753C15.5448 7.198 15.7375 7.52766 15.8577 7.88593C15.9778 8.24421 16.0229 8.6234 15.99 8.99986H10.532ZM10 17.9999C8.40622 17.9998 6.84875 17.5239 5.52715 16.6331C4.20556 15.7423 3.18004 14.4772 2.582 12.9999H17.419C16.8209 14.4773 15.7952 15.7426 14.4734 16.6334C13.1516 17.5242 11.594 18 10 17.9999Z"
                fill="black"
              />
            </svg>
            <div>
              <h4
                style={{
                  color: category === "Healthy Food" ? "white" : "",
                }}
              >
                Healthy food
              </h4>
              <p
                style={{
                  color: category === "Healthy Food" ? "white" : "",
                }}
              >
                {
                  meals.filter((meal) => meal.category === "Healthy Food")
                    .length
                }
              </p>
            </div>
          </div>
        </div>

        {/* -------------------------- cards ---------------------------------- */}
        <div className={style.main_meals}>
          {mealsFiltered.map((meal) => (
            <Meal
              key={meal.id}
              id={meal.id}
              name={meal.name}
              price={meal.price}
              description={meal.description}
              imageUrl={meal.imageUrl}
              category={meal.category}
            />
          ))}
        </div>

        {/* ------------------------ for mobile continue ------------------ */}
        <div className={style.main_continue} onClick={() => setBag(!bag)}>
          <button className={style.main_continue_btn}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
