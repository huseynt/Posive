import React from "react";
import style from "./privacyforhomepage.module.scss";
import { useTranslation } from "react-i18next";


interface ITerm {
    setViewOpen: React.Dispatch<React.SetStateAction<string>>;
  }


const PrivacyForHomePage: React.FC<ITerm> = (props) => {
    const { setViewOpen } = props;
    const {t} = useTranslation();



  return (
    <div className={`${style.parent} ${style.printable_modal}`}>
    <div className={style.parent_bg} onClick={() => setViewOpen("")}></div>

    <div className={style.parent_block}>

        <div className={style.parent_block_exit}
        onClick={() => setViewOpen("")}
        >
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.750488 1.25L11.2498 11.7493" stroke="#1A1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M0.750218 11.7493L11.2495 1.25" stroke="#1A1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>


        <h2 className={style.parent_block_head}>{t("Privacy Policy")}</h2>


        <div className={style.parent_block_line}></div>


        <div className={style.parent_block_main}>
          <div className={style.parent_block_main_block}>
            <h2 className={style.parent_block_main_block_head}>{t("Information Collection, Use, and Sharing")}</h2>
            <p className={style.parent_block_main_block_text}>{t("We are the sole owners of the information collected on this dashboard. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.")}</p>
            <p className={style.parent_block_main_block_text}>{t("We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g., to ship an order.")}</p>
          </div>

          <div className={style.parent_block_main_block}>
            <h2 className={style.parent_block_main_block_head}>{t("Security")}</h2>
            <p className={style.parent_block_main_block_text}>{t("We take precautions to protect your information. When you submit sensitive information via the dashboard, your information is protected both online and offline")}</p>
          </div>

          <div className={style.parent_block_main_block}>
            <h2 className={style.parent_block_main_block_head}>Updates</h2>
            <p className={style.parent_block_main_block_text}>{t("Our Privacy Policy may change from time to time, and all updates will be posted on this page.")}</p>
            <p className={style.parent_block_main_block_text}>{t("If you feel that we are not abiding by this privacy policy, you should contact us immediately via email.")}</p>
            <p className={style.parent_block_main_block_text}>{t("This is a basic example and should be customized to suit the specific needs and legal requirements of your business and jurisdiction. It's recommended to consult with a legal professional to ensure compliance.")}</p>
          </div>
        </div>

    </div>
  </div>
  )
}

export default PrivacyForHomePage
