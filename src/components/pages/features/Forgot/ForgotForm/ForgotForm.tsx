import style from "./forgotForm.module.scss";
import logo from "/assets/posive_logo.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../../../common/Loader/Loader";
import TermForHomePage from "../../TermForHomePage/TermForHomePage";
import PrivacyForHomePage from "../../PrivacyForHomePage/PrivacyForHomePage";
import { useTranslation } from "react-i18next";


interface ForgotFormProps {
  setEmail: (email: string) => void;
  ResetPassword: (email: string) => void;
  isResetPasswordPending: boolean;
}

const ForgotForm: React.FC<ForgotFormProps>  = (props) => {
  const { t } = useTranslation();
  const { setEmail, ResetPassword, isResetPasswordPending } = props;
  const [data, setData] = useState({email: ""});
  const [validate, setValidate] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // --------------- term and privacy ----------------
  const [viewOpen, setViewOpen] = useState<string>("");
  // --------------- term and privacy ----------------
    
  const change = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  }

  
  const sumbit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (data.email!== "" && regexEmail.test(data.email)) {
      console.log(data);
      setEmail(data.email)
      ResetPassword(data.email)
      // setStep('verify')
      // requestNotify('done')
      // setDescribtion('Email sent successfully')
    }
    else { 
      if (data.email === "") {
        setValidate({
          ...validate,
          email: t("Email is required"),
        });
      }
    }
  }


  const checkValidation = () => {
    if (!regexEmail.test(data.email) && data.email.length > 0) {
      setValidate({
        ...validate,
        email: t("Email is required"),
      });
    } else {
      setValidate({
        ...validate,
        email: "",
      });
    }
  }

  useEffect(() => {
    checkValidation();
  }, [data.email]);

  
  const handleLogin = () => {
    navigate('/login')
  }


  return (
    <>

      {viewOpen === "term" && <TermForHomePage setViewOpen={setViewOpen} />}
      {viewOpen === "privacy" && <PrivacyForHomePage setViewOpen={setViewOpen} />}



      <div className={style.login}>
        <div className={style.login_logo}>
          <img src={logo} onClick={() => navigate("/")} style={{cursor: "pointer"}} alt="Posive" />
        </div>
        <div className={style.login_previous}>
          <div onClick={handleLogin}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.57 6.6001L3.5 12.6701L9.57 18.7401" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.5 12.6699H3.67" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <h2 className={style.login_name}>{t("Reset password")}</h2>
        <p className={style.login_information}>{t("Input your email address account to receive a reset link")}</p>

        <form className={style.login_form} action="submit">


          <div className={style.login_form_email}>
            <input 
              type="text" 
              id="email" 
              onChange={change} 
              value={data.email}
              className={`style.login_form_email_input ${validate.email ? style.forWrongValidate: null}`}
              style={{
                borderColor: validate.email ? 'red' : ''
              }}
            />


            <p className={data.email ? style.label_focus : style.label}>{t("Email")}</p>
            {/* -- validation -- */}
            <div className={`${style.login_form_validation} ${validate.email && style.shake}`}>
              <span style={{
                opacity: validate.email ? 1 : 0
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              </span>
              <span>{validate.email}</span>
            </div>
            {/* -------------- */}
          </div>




          {/* <input
            className={style.login_form_submit}
            type="submit"
            value="Continue"
            onClick={sumbit}
          /> */}

          <div className={style.login_form_submit}>
            {isResetPasswordPending ? 
              <Loader/> 
              :
              <input
              className={style.login_form_submit_input}
              type="submit"
              value={t("Continue")}
              onClick={sumbit}
              />
            }
          </div>

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

export default ForgotForm;
