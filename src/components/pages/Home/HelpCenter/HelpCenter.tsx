import style from "./helpCenter.module.scss";
import { Helmet } from "react-helmet";
import Contact from "./Contact/Contact";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import Information from "./Information/Information";
import Term from "./Term/Term";

import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";


interface MainProps {
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setNotification: React.Dispatch<React.SetStateAction<boolean>>;
  notification: boolean;
}

const HelpCenter = () => {
  const { setToggleMenu, setNotification, notification }= useOutletContext<MainProps>();



  const navigate = useNavigate();
  const [sub, setSub] = useState<string>("");
  const [mobileSelect, setMobileSelect] = useState<boolean>(false);

  useEffect(() => {
    const path = window.location.pathname.split("/")[3];
    setSub(path);
    window.addEventListener("popstate", () => {
      const path = window.location.pathname.split("/")[3];
      setSub(path);
    });
    console.log(sub);
  }, [sub]);

  const handleSub = (path: string) => {
    setSub(path);
    navigate(path);
  };

  useEffect(() => {
    setMobileSelect(false);
  }, [sub]);




  return (
    <div className={style.overflow}>
      <Helmet>
        <title>Posive Help Center</title>
        <meta name="description" content="Help Center" />
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
          <h2 className={style.main_up_head}>Help & Center</h2>
          <p className={style.main_up_desc}>We will help you 24 hours here</p>
        </div>

        <div className={style.main_container}>

          <div className={style.main_container_navigation}
          style={{borderColor: mobileSelect ? "#d4733b" : ""}}
          >
            
            <h3 className={style.main_container_navigation_head}>
              Sub settings
            </h3>

            <div className={style.main_container_navigation_mobileSelect}
            onClick={() => setMobileSelect(!mobileSelect)}
            >

              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{display: sub==="contact" || sub===undefined ? "block" : "none"}}
              >
                <path
                  d="M12.75 14.3223H9.75L6.41249 16.5423C5.91749 16.8723 5.25 16.5198 5.25 15.9198V14.3223C3 14.3223 1.5 12.8223 1.5 10.5723V6.07227C1.5 3.82227 3 2.32227 5.25 2.32227H12.75C15 2.32227 16.5 3.82227 16.5 6.07227V10.5723C16.5 12.8223 15 14.3223 12.75 14.3223Z"
                  stroke={"#000000ae"}
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.00011 9.01953V8.86206C9.00011 8.35206 9.31513 8.08205 9.63013 7.86455C9.93763 7.65455 10.2451 7.38456 10.2451 6.88956C10.2451 6.19956 9.69011 5.64453 9.00011 5.64453C8.31011 5.64453 7.75513 6.19956 7.75513 6.88956"
                  stroke={"#000000ae"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.99662 10.8125H9.00337"
                  stroke={"#000000ae"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{display: sub==="privacy" ? "block" : "none"}}
              >
                <path
                  d="M7.8675 2.17242L4.125 3.58242C3.2625 3.90492 2.5575 4.92492 2.5575 5.83992V11.4124C2.5575 12.2974 3.1425 13.4599 3.855 13.9924L7.08 16.3999C8.1375 17.1949 9.8775 17.1949 10.935 16.3999L14.16 13.9924C14.8725 13.4599 15.4575 12.2974 15.4575 11.4124V5.83992C15.4575 4.91742 14.7525 3.89742 13.89 3.57492L10.1475 2.17242C9.51 1.93992 8.49 1.93992 7.8675 2.17242Z"
                  stroke={"#000000ae"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.7875 9.40227L7.995 10.6098L11.22 7.38477"
                  stroke={"#000000ae"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{display: sub==="term" ? "block" : "none"}}
              >
                <path
                  d="M6.75 17H11.25C15 17 16.5 15.5 16.5 11.75V7.25C16.5 3.5 15 2 11.25 2H6.75C3 2 1.5 3.5 1.5 7.25V11.75C1.5 15.5 3 17 6.75 17Z"
                  stroke={"#000000ae"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.8125 7.25H6.1875"
                  stroke={"#000000ae"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.8125 11.75H6.1875"
                  stroke={"#000000ae"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{display: sub==="information" ? "block" : "none"}}
              >
                <path
                  d="M8.0625 2.33773C8.5875 1.89523 9.435 1.89523 9.945 2.33773L11.13 3.35023C11.355 3.53773 11.7825 3.69523 12.0825 3.69523H13.3575C14.1525 3.69523 14.805 4.34773 14.805 5.14273V6.41773C14.805 6.71773 14.9625 7.13773 15.15 7.36273L16.1625 8.54773C16.605 9.07273 16.605 9.92023 16.1625 10.4302L15.15 11.6152C14.9625 11.8402 14.805 12.2602 14.805 12.5602V13.8352C14.805 14.6302 14.1525 15.2827 13.3575 15.2827H12.0825C11.7825 15.2827 11.3625 15.4402 11.1375 15.6277L9.9525 16.6402C9.4275 17.0827 8.58 17.0827 8.07 16.6402L6.885 15.6277C6.66 15.4402 6.2325 15.2827 5.94 15.2827H4.6275C3.8325 15.2827 3.18 14.6302 3.18 13.8352V12.5527C3.18 12.2602 3.03 11.8327 2.8425 11.6152L1.83 10.4227C1.395 9.90523 1.395 9.06523 1.83 8.54773L2.8425 7.35523C3.03 7.13023 3.18 6.71023 3.18 6.41773V5.15023C3.18 4.35523 3.8325 3.70273 4.6275 3.70273H5.925C6.225 3.70273 6.645 3.54523 6.87 3.35773L8.0625 2.33773Z"
                  stroke={"#000000ae"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 6.59766V10.2202"
                  stroke={"#000000ae"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.99588 12.5H9.00262"
                  stroke={"#000000ae"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>


              {
                sub === "contact" ? "Contact & FAQ" : 
                sub === "privacy" ? "Privacy Policy" : 
                sub === "term" ? "Term & Condition" : 
                sub === "information" ? "App Information" : "Contact & FAQ"
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


            <div
              className={style.main_container_navigation_option}
              onClick={() => handleSub("contact")}
              style={{
                backgroundColor:
                  sub === "contact" || sub === undefined ? "#fdefd9" : "",
                display: mobileSelect ? "flex" : "",
              }}
              title="Contact & FAQ"
            >
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.75 14.3223H9.75L6.41249 16.5423C5.91749 16.8723 5.25 16.5198 5.25 15.9198V14.3223C3 14.3223 1.5 12.8223 1.5 10.5723V6.07227C1.5 3.82227 3 2.32227 5.25 2.32227H12.75C15 2.32227 16.5 3.82227 16.5 6.07227V10.5723C16.5 12.8223 15 14.3223 12.75 14.3223Z"
                  stroke={
                    sub === "contact" || sub === undefined ? "#EA7E41" : "#000000ae"
                  }
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.00011 9.01953V8.86206C9.00011 8.35206 9.31513 8.08205 9.63013 7.86455C9.93763 7.65455 10.2451 7.38456 10.2451 6.88956C10.2451 6.19956 9.69011 5.64453 9.00011 5.64453C8.31011 5.64453 7.75513 6.19956 7.75513 6.88956"
                  stroke={
                    sub === "contact" || sub === undefined ? "#EA7E41" : "#000000ae"
                  }
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.99662 10.8125H9.00337"
                  stroke={
                    sub === "contact" || sub === undefined ? "#EA7E41" : "#000000ae"
                  }
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p
                style={{
                  color: sub === "contact" || sub === undefined ? "#EA7E41" : "",
                }}
              >
                Contact & FAQ
              </p>
            </div>

            <div
              className={style.main_container_navigation_option}
              onClick={() => handleSub("privacy")}
              style={{
                backgroundColor:
                  sub === "privacy"? "#fdefd9" : "",
                display: mobileSelect ? "flex" : "",
              }}
              title="Privacy Policy"
            >
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.8675 2.17242L4.125 3.58242C3.2625 3.90492 2.5575 4.92492 2.5575 5.83992V11.4124C2.5575 12.2974 3.1425 13.4599 3.855 13.9924L7.08 16.3999C8.1375 17.1949 9.8775 17.1949 10.935 16.3999L14.16 13.9924C14.8725 13.4599 15.4575 12.2974 15.4575 11.4124V5.83992C15.4575 4.91742 14.7525 3.89742 13.89 3.57492L10.1475 2.17242C9.51 1.93992 8.49 1.93992 7.8675 2.17242Z"
                  stroke={
                    sub === "privacy" ? "#EA7E41" : "#000000ae"
                  }
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.7875 9.40227L7.995 10.6098L11.22 7.38477"
                  stroke={
                    sub === "privacy" ? "#EA7E41" : "#000000ae"
                  }
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p 
              style={{
                color: sub === "privacy" ? "#EA7E41" : "",
              }}
              >Privacy Policy</p>
            </div>

            <div
              className={style.main_container_navigation_option}
              onClick={() => handleSub("term")}
              style={{
                backgroundColor:
                  sub === "term" ? "#fdefd9" : "",
                display: mobileSelect ? "flex" : "",
              }}
              title="Term & Condition"
            >
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75 17H11.25C15 17 16.5 15.5 16.5 11.75V7.25C16.5 3.5 15 2 11.25 2H6.75C3 2 1.5 3.5 1.5 7.25V11.75C1.5 15.5 3 17 6.75 17Z"
                  stroke={
                    sub === "term" ? "#EA7E41" : "#000000ae"
                  }
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.8125 7.25H6.1875"
                  stroke={
                    sub === "term" ? "#EA7E41" : "#000000ae"
                  }
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.8125 11.75H6.1875"
                  stroke={
                    sub === "term" ? "#EA7E41" : "#000000ae"
                  }
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p
              style={{
                color: sub === "term" ? "#EA7E41" : "",
              }}
              >Term & Condition</p>
            </div>

            <div
              className={style.main_container_navigation_option}
              onClick={() => handleSub("information")}
              style={{
                backgroundColor:
                  sub === "information" ? "#fdefd9" : "",
                display: mobileSelect ? "flex" : "",
              }}
              title="App Information"
            >
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.0625 2.33773C8.5875 1.89523 9.435 1.89523 9.945 2.33773L11.13 3.35023C11.355 3.53773 11.7825 3.69523 12.0825 3.69523H13.3575C14.1525 3.69523 14.805 4.34773 14.805 5.14273V6.41773C14.805 6.71773 14.9625 7.13773 15.15 7.36273L16.1625 8.54773C16.605 9.07273 16.605 9.92023 16.1625 10.4302L15.15 11.6152C14.9625 11.8402 14.805 12.2602 14.805 12.5602V13.8352C14.805 14.6302 14.1525 15.2827 13.3575 15.2827H12.0825C11.7825 15.2827 11.3625 15.4402 11.1375 15.6277L9.9525 16.6402C9.4275 17.0827 8.58 17.0827 8.07 16.6402L6.885 15.6277C6.66 15.4402 6.2325 15.2827 5.94 15.2827H4.6275C3.8325 15.2827 3.18 14.6302 3.18 13.8352V12.5527C3.18 12.2602 3.03 11.8327 2.8425 11.6152L1.83 10.4227C1.395 9.90523 1.395 9.06523 1.83 8.54773L2.8425 7.35523C3.03 7.13023 3.18 6.71023 3.18 6.41773V5.15023C3.18 4.35523 3.8325 3.70273 4.6275 3.70273H5.925C6.225 3.70273 6.645 3.54523 6.87 3.35773L8.0625 2.33773Z"
                  stroke={
                    sub === "information" ? "#EA7E41" : "#000000ae"
                  }
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 6.59766V10.2202"
                  stroke={
                    sub === "information" ? "#EA7E41" : "#000000ae"
                  }
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.99588 12.5H9.00262"
                  stroke={
                    sub === "information" ? "#EA7E41" : "#000000ae"
                  }
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p
              style={{
                color: sub === "information" ? "#EA7E41" : "",
              }}
              >App Information</p>
            </div>
          </div>

          {/* ------------------------ mobile navigation ----------------------------- */}
          {/* <div className={style.main_container_mobile}>
            <p className={style.main_container_mobile_selected}>Contact & FAQ</p>
            
          </div> */}





          <div style={{ width: "100%", height: "100%",}}>
            <Routes>
              <Route index element={<Contact setMobileSelect={setMobileSelect}/>} />
              <Route path="contact" element={<Contact setMobileSelect={setMobileSelect} />} />
              <Route path="privacy" element={<PrivacyPolicy setMobileSelect={setMobileSelect} />} />
              <Route path="term" element={<Term setMobileSelect={setMobileSelect} />} />
              <Route path="information" element={<Information setMobileSelect={setMobileSelect} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
