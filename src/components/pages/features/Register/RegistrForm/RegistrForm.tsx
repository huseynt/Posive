import style from "./registrForm.module.scss";
import logo from "/assets/posive_logo.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../../../../common/Loader/Loader";
import TermForHomePage from "../../TermForHomePage/TermForHomePage";
import PrivacyForHomePage from "../../PrivacyForHomePage/PrivacyForHomePage";
import { useTranslation } from "react-i18next";

interface RegistrFormProps {
  Registr: (data: { fullName: string; phoneNumber: string; email: string; password: string }) => void;
  isRegistrPending: boolean;
}

const RegisterForm: React.FC<RegistrFormProps>  = (props) => {
  const { Registr, isRegistrPending } = props;
  const [hide, setHide] = useState(false);
  const { t } = useTranslation();
  const [data, setData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [repeatPassword, setRepeatPassword] = useState('');
  const [validate, setValidate] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    repeatPassword: ''
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(\+?\d{1,4})[\s.-]?\d{10,}$/;

  // --------------- term and privacy ----------------
  const [viewOpen, setViewOpen] = useState<string>("");
  // --------------- term and privacy ----------------


  const checkValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;

    if (id === 'email') {
      if (!emailRegex.test(data.email) && data.email !== '') {
        setValidate({ ...validate, email: t('Please enter a valid email address') });
      } else {
        setValidate({ ...validate, email: '' });
      }
    }

    if (id === 'phoneNumber') {
      if (!phoneRegex.test(data.phoneNumber) && data.phoneNumber !== '') {
        setValidate({ ...validate, phoneNumber: t('Please enter a valid phone number') });
      } else {
        setValidate({ ...validate, phoneNumber: '' });
      }
    }

    if (id === 'password') {
      if (data.password.length < 8 && data.password !== '') {
        setValidate({ ...validate, password: t('Password must contain at least 8 characters') });
      } else {
        setValidate({ ...validate, password: '' });
      }
    }

    if (id === 'repeatPassword') {
      if (data.password !== repeatPassword && repeatPassword !== '') {
        setValidate({ ...validate, repeatPassword: t('Passwords do not match') });
      } else {
        setValidate({ ...validate, repeatPassword: '' });
      }
    }

    if (id === 'fullName') {
      if (data.fullName.split(" ").length !== 2 || data.fullName.split(" ")[0].length < 3 || data.fullName.split(" ")[1].length < 3) {
        if (data.fullName.length > 0) {
          setValidate({ ...validate, fullName: t('Please enter your full name') });
        } else {
          setValidate({ ...validate, fullName: '' });
        }
      } else {
        setValidate({ ...validate, fullName: '' });
      }
    }
  };

  useEffect(() => {
    const nameEvent = { target: { id: "fullName", value: data.fullName } } as React.ChangeEvent<HTMLInputElement>;
    checkValidation(nameEvent);
    console.log('fullName', data.fullName);
  }, [data.fullName]);

  useEffect(() => {
    const emailEvent = { target: { id: "email", value: data.email } } as React.ChangeEvent<HTMLInputElement>;
    checkValidation(emailEvent);
  }, [data.email]);

  useEffect(() => {
    const phoneEvent = { target: { id: "phoneNumber", value: data.phoneNumber } } as React.ChangeEvent<HTMLInputElement>;
    checkValidation(phoneEvent);
  }, [data.phoneNumber]);

  useEffect(() => {
    const passwordEvent = { target: { id: "password", value: data.password } } as React.ChangeEvent<HTMLInputElement>;
    checkValidation(passwordEvent);
  }, [data.password]);

  useEffect(() => {
    const repeatPasswordEvent = { target: { id: "repeatPassword", value: repeatPassword } } as React.ChangeEvent<HTMLInputElement>;
    if (repeatPassword) {
      checkValidation(repeatPasswordEvent);
    }
  }, [repeatPassword, data.password]);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const sumbit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    // Final check before submission
    if (!validate.fullName && 
      !validate.phoneNumber && 
      !validate.email && 
      !validate.password && 
      !validate.repeatPassword &&
      data.fullName &&
      data.phoneNumber &&
      data.email &&
      data.password &&
      repeatPassword) {
      Registr({
        ...data,
        phoneNumber: data.phoneNumber[0] !== '+' ? `+${data.phoneNumber}` : data.phoneNumber
      });
    } 
    else {
      setValidate((prevData) => {
        return {
          ...prevData,
          fullName: !data.fullName || validate.fullName ? t('Please enter your full name') : '',
          phoneNumber: !data.phoneNumber || validate.phoneNumber ? t('Please enter your phone number') : '',
          email: !data.email || validate.email ? t('Please enter your email address') : '',
          password: !data.password || validate.password ? t('Please enter a password') : '',
          repeatPassword: !repeatPassword || validate.repeatPassword ? t('Please repeat your password') : '',
        };
      });
    }
  };

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };

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
        <h2 className={style.login_name}>{t("Register")}</h2>
        <p className={style.login_information}>{t("Let’s create a new account")}</p>

        <form className={style.login_form} action="submit">


          <div className={style.login_form_email}>
            <input 
              type="text" 
              id="fullName" 
              onChange={change} 
              value={data.fullName}
              className={`style.login_form_email_input ${validate.fullName ? style.forWrongValidate: null}`}
              style={{
                borderColor: validate.fullName ? 'red' : ''
              }}
            />
            <p className={data.fullName ? style.label_focus : style.label}>{t("Full Name")}</p>
            {/* -- validation -- */}
            <div className={`${style.login_form_validation} ${validate.fullName && style.shake}`}>
              <span style={{
                opacity: validate.fullName ? 1 : 0
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              </span>
              <span>{validate.fullName}</span>
            </div>
            {/* -------------- */}
          </div>


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

          <div className={style.login_form_email}>
            <input 
              type="text" 
              id="phoneNumber" 
              onChange={change} 
              value={data.phoneNumber}
              className={`style.login_form_email_input ${validate.phoneNumber ? style.forWrongValidate: null}`}
              style={{
                borderColor: validate.phoneNumber ? 'red' : ''
              }}
            />
            <p className={data.phoneNumber ? style.label_focus : style.label}>{t("Phone Number")}</p>
            {/* -- validation -- */}
            <div className={`${style.login_form_validation} ${validate.phoneNumber && style.shake}`}>
              <span style={{
                opacity: validate.phoneNumber ? 1 : 0
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              </span>
              <span>{validate.phoneNumber}</span>
            </div>
            {/* -------------- */}
          </div>

          <div className={style.login_form_password}>
            <input 
              type={hide ? "text" : "password"} 
              id="password"
              autoComplete="off"
              onChange={change}
              value={data.password}
              className={`style.login_form_password_input ${validate.password ? style.forWrongValidate: null}`}
              style={{
                borderColor: validate.password ? 'red' : ''
              }}
            />
            <p className={data.password ? style.label_focus : style.label}>{t("Password")}</p>
            <span 
              className={style.login_form_password_eye}
              onClick={() => setHide(!hide)}
            >
              { hide ?
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.39997C18.8201 5.79997 15.5301 3.71997 12.0001 3.71997C8.47009 3.71997 5.18009 5.79997 2.89009 9.39997C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              :
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5299 9.46992L9.46992 14.5299C8.81992 13.8799 8.41992 12.9899 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C12.9899 8.41992 13.8799 8.81992 14.5299 9.46992Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.8201 5.76998C16.0701 4.44998 14.0701 3.72998 12.0001 3.72998C8.47009 3.72998 5.18009 5.80998 2.89009 9.40998C1.99009 10.82 1.99009 13.19 2.89009 14.6C3.68009 15.84 4.60009 16.91 5.60009 17.77" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.41992 19.5299C9.55992 20.0099 10.7699 20.2699 11.9999 20.2699C15.5299 20.2699 18.8199 18.1899 21.1099 14.5899C22.0099 13.1799 22.0099 10.8099 21.1099 9.39993C20.7799 8.87993 20.4199 8.38993 20.0499 7.92993" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.47 14.53L2 22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L14.53 9.47" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              }
            </span>
            {/* -- validation -- */}
            <div className={`${style.login_form_validation} ${validate.password && style.shake}`}>
              <span style={{
                opacity: validate.password ? 1 : 0
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              </span>
              <span>{validate.password}</span>
            </div>
            {/* -------------- */}
          </div>

          <div className={style.login_form_password}>
            <input 
              type={hide ? "text" : "password"} 
              id="repeatPassword"
              autoComplete="off"
              onChange={(e) => setRepeatPassword(e.target.value)}
              value={repeatPassword}
              className={`style.login_form_password_input ${validate.repeatPassword ? style.forWrongValidate: null}`}
              style={{
                borderColor: validate.repeatPassword ? 'red' : ''
              }}
            />
            <p className={repeatPassword ? style.label_focus : style.label}>{t("Repeat Password")}</p>
            <span 
              className={style.login_form_password_eye}
              onClick={() => setHide(!hide)}
            >
              { hide ?
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.39997C18.8201 5.79997 15.5301 3.71997 12.0001 3.71997C8.47009 3.71997 5.18009 5.79997 2.89009 9.39997C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              :
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5299 9.46992L9.46992 14.5299C8.81992 13.8799 8.41992 12.9899 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C12.9899 8.41992 13.8799 8.81992 14.5299 9.46992Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.8201 5.76998C16.0701 4.44998 14.0701 3.72998 12.0001 3.72998C8.47009 3.72998 5.18009 5.80998 2.89009 9.40998C1.99009 10.82 1.99009 13.19 2.89009 14.6C3.68009 15.84 4.60009 16.91 5.60009 17.77" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.41992 19.5299C9.55992 20.0099 10.7699 20.2699 11.9999 20.2699C15.5299 20.2699 18.8199 18.1899 21.1099 14.5899C22.0099 13.1799 22.0099 10.8099 21.1099 9.39993C20.7799 8.87993 20.4199 8.38993 20.0499 7.92993" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.47 14.53L2 22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L14.53 9.47" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              }
            </span>
            {/* -- validation -- */}
            <div className={`${style.login_form_validation} ${validate.repeatPassword && style.shake}`}>
              <span style={{
                opacity: validate.repeatPassword ? 1 : 0
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              </span>
              <span>{validate.repeatPassword}</span>
            </div>
            {/* -------------- */}
          </div>

          {/* <input
            className={style.login_form_submit}
            type="submit"
            value="Register"
            onClick={sumbit}
          /> */}

          <div className={style.login_form_submit}>
            {isRegistrPending ? 
              <Loader/> 
              :
              <input
              className={style.login_form_submit_input}
              type="submit"
              value={t("Register")}
              onClick={sumbit}
              />
            }
          </div>
        </form>

        <div className={style.login_registr}>
          <span>{t("Already have an account?")} </span>
          <div onClick={handleLogin}>{t("Login Here")}</div>
        </div>

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

export default RegisterForm;
