import React from "react";
import style from "./termForhomepage.module.scss";
import { useTranslation } from "react-i18next";


interface ITerm {
    setViewOpen: React.Dispatch<React.SetStateAction<string>>;
  }


const TermForHomePage: React.FC<ITerm> = (props) => {
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


        <h2 className={style.parent_block_head}>{t("Term & Conditions")}</h2>


        <div className={style.parent_block_line}></div>


        <div className={style.parent_block_main}>
        <div className={style.parent_block_main_block}>
            <p className={style.parent_block_main_block_text}>{t("Welcome to our POS Dashboard! These terms and conditions outline the rules and regulations for the use of our POS Dashboard.")}</p>
            <p className={style.parent_block_main_block_text}>{t("By accessing this dashboard, we assume you accept these terms and conditions in full. Do not continue to use our POS Dashboard if you do not accept all of the terms and conditions stated on this page.")}</p>
            <p className={style.parent_block_main_block_text}>{t("The following terminology applies to these Terms and Conditions: 'Client', 'You' and 'Your' refer to you, the person accessing this dashboard and accepting the Company's terms and conditions. 'The Company', 'Ourselves', 'We', 'Our' and 'Us', refer to our company. 'Party', 'Parties', or 'Us', refers to both the Client and ourselves, or either the Client or ourselves.")}</p>
        </div>

        <div className={style.parent_block_main_block}>
            <h2 className={style.parent_block_main_block_head}>{t("Cookies")}</h2>
            <p className={style.parent_block_main_block_text}>{t("We employ the use of cookies. By using our POS Dashboard you consent to the use of cookies in accordance with our privacy policy.")}</p>
        </div>

        <div className={style.parent_block_main_block}>
            <h2 className={style.parent_block_main_block_head}>{t("License")}</h2>
            <p className={style.parent_block_main_block_text}>{t("Unless otherwise stated, we own the intellectual property rights for all material on our POS Dashboard. All intellectual property rights are reserved.")}</p>
        </div>

        <div className={style.parent_block_main_block}>
            <h2 className={style.parent_block_main_block_head}>{t("Restrictions")}</h2>
            <p className={style.parent_block_main_block_text}>{t("You are specifically restricted from all of the following :")}</p>
            <ul className={style.parent_block_main_block_list}>
            <li>{t("Republishing material from our POS Dashboard")}</li>
            <li>{t("Selling, sublicensing and/or otherwise commercializing any material from our POS Dashboard")}</li>
            <li>{t("Using our POS Dashboard in any way that is or may be damaging to this dashboard")}</li>
            <li>{t("Using our POS Dashboard in any way that impacts user access to this dashboard")}</li>
            <li>{t("Using our POS Dashboard contrary to applicable laws and regulations, or in any way may cause harm to the dashboard, or to any person or business entity")}</li>
            </ul>
        </div>
        </div>

    </div>
  </div>
  )
}

export default TermForHomePage
