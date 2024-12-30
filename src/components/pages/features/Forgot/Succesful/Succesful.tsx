import { useState } from "react";
import style from "./succesful.module.scss";
import logo from "/assets/posive_logo.svg";
import { useNavigate } from "react-router-dom";
import TermForHomePage from "../../TermForHomePage/TermForHomePage";
import PrivacyForHomePage from "../../PrivacyForHomePage/PrivacyForHomePage";
import { useTranslation } from "react-i18next";


const Succesful = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const sumbit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    navigate('/login');
  }

  // --------------- term and privacy ----------------
  const [viewOpen, setViewOpen] = useState<string>("");
  // --------------- term and privacy ----------------
    


  return (
    <>


      {viewOpen === "term" && <TermForHomePage setViewOpen={setViewOpen} />}
      {viewOpen === "privacy" && <PrivacyForHomePage setViewOpen={setViewOpen} />}

      <div className={style.login}>
        <div className={style.login_logo}
        onClick={() => navigate('/')}
        >
          <img src={logo} onClick={() => navigate("/")} style={{cursor: "pointer"}} alt="Posive" />
        </div>
        <div className={style.login_previous}>
            <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.5002 58.6668C47.1668 58.6668 59.1668 46.6668 59.1668 32.0002C59.1668 17.3335 47.1668 5.3335 32.5002 5.3335C17.8335 5.3335 5.8335 17.3335 5.8335 32.0002C5.8335 46.6668 17.8335 58.6668 32.5002 58.6668Z" stroke="#12B3A8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21.1665 31.9998L28.7132 39.5465L43.8332 24.4531" stroke="#12B3A8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <h2 className={style.login_name}>{t("Reset password succesful")}</h2>
        <p className={style.login_information}>{t("Successfully changed password. you can enter the main page")}</p>

        <form className={style.login_form} action="submit">
          <input
            className={style.login_form_submit}
            type="submit"
            value={t("Go to login")}
            onClick={sumbit}
          />
        </form>

        <div className={style.login_footer}>
          <p>{t("© 2024 Posive. All rights reserved.")}</p>
          <div className={style.login_footer_links}>
              <a onClick={
                () => setViewOpen("term")
              }>{t("Term & Conditions")}</a>
              <a className={style.login_footer_links_privacy}
              onClick={
                () => setViewOpen("privacy")
              }>{t("Privacy Policy")}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Succesful;
