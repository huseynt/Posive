import style from "./changePassword.module.scss";
import logo from "/assets/posive_logo.svg";
import { useEffect, useState } from "react";
import Loader from "../../../../common/Loader/Loader";
import TermForHomePage from "../../TermForHomePage/TermForHomePage";
import PrivacyForHomePage from "../../PrivacyForHomePage/PrivacyForHomePage";
// import { useNavigate } from "react-router-dom";

interface ChangePasswordProps {
  email: string;
  setStep: (step: string) => void;
  Change: (data:{email: string, newPassword: string}) => void;
  isChangePasswordPending: boolean;
  // requestNotify: (purpose: string) => void;
  // setDescribtion: (describtion: string) => void;
}

const ChangePassword: React.FC<ChangePasswordProps> = (props) => {

  const [hide, setHide] = useState(false);
  const { email, Change, setStep, isChangePasswordPending } = props;
  const [data, setData] = useState({
    email: email,
    newPassword: ""
  });
  const [repeatPassword, setRepeatPassword] = useState('');
  const [validate, setValidate] = useState({
    password: "",
    repeatPassword: "",
  });
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
    if (data.newPassword!== "" && repeatPassword==data.newPassword && data.newPassword.length > 7) {
      console.log(data, email);
      // setStep('succesful');
      Change(data)
      // requestNotify("done")
      // setDescribtion("Password changed successfully")
      // navigate('/login')
    }
    else { 
      setValidate({
        ...validate,
        password: !data.newPassword ? "Please enter the verification code": "",
        repeatPassword: !repeatPassword ? "Please enter the verification code": "",
      });
    }
  }


  const checkValidation = () => {

    // if (data.password.length < 8 && data.password.length > 0) {
    //   setValidate({
    //     ...validate,
    //     password: "Password must be at least 8 characters",
    //   });
    // } else {
    //   setValidate({
    //     ...validate,
    //     password: "",
    //   });
    // }

    // if (repeatPassword !== data.password && repeatPassword.length > 0) {
    //   setValidate({
    //     ...validate,
    //     repeatPassword: "Passwords do not match",
    //   });
    // } else {
    //   setValidate({
    //     ...validate,
    //     repeatPassword: "",
    //   });
    // }
    // write all validation one setValidate
    setValidate({
      ...validate,
      password: data.newPassword.length < 8 && data.newPassword.length > 0 ? "Password must be at least 8 characters": "",
      repeatPassword: repeatPassword !== data.newPassword && repeatPassword.length > 0 ? "Passwords do not match": "",
    });
  }

  useEffect(() => {
    checkValidation();
  }, [data.newPassword]);

  useEffect(() => {
    checkValidation();
  }, [repeatPassword, data.newPassword]);



  // const navigate = useNavigate()
  // const handleLogin = () => {
  //   navigate('/login')
  // }


  return (
    <>


      {viewOpen === "term" && <TermForHomePage setViewOpen={setViewOpen} />}
      {viewOpen === "privacy" && <PrivacyForHomePage setViewOpen={setViewOpen} />}

      <div className={style.login}>
        <div className={style.login_logo}>
          <img src={logo} alt="Posive" />
        </div>
        <div className={style.login_previous}>
          <div onClick={() => setStep('verify')}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.57 6.6001L3.5 12.6701L9.57 18.7401" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.5 12.6699H3.67" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <h2 className={style.login_name}>Create new password</h2>
        <p className={style.login_information}>Let's create a new and more secure password</p>

        <form className={style.login_form} action="submit">


          {/* <div className={style.login_form_password}>
            <input 
            type="text"
            id="password"
            onChange={change}
            value={data.password}
            className={style.login_form_password_input}
            />
            <p className={data.password ? style.label_focus: style.label}>New Password</p>
          </div>

          <div className={style.login_form_password}>
            <input 
            type="text"
            id="password"
            onChange={change}
            value={data.password}
            className={style.login_form_password_input}
            />
            <p className={data.password ? style.label_focus: style.label}>Repeat Password</p>
          </div> */}

          


          <div className={style.login_form_password}>
            <input 
            type={hide ? "text" : "password"} 
            id="newPassword"
            onChange={change}
            value={data.newPassword}
            autoComplete="current-password"
            className={`${style.login_form_password_input} ${validate.password ? style.forWrongValidate: null}`}
            style={{
              borderColor: validate.password ? 'red' : ''
            }}
            />
            <p className={data.newPassword ? style.label_focus: style.label}>Password</p>
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
            onChange={(e) => setRepeatPassword(e.target.value)}
            value={repeatPassword}
            autoComplete="off"
            className={`${style.login_form_password_input} ${validate.repeatPassword ? style.forWrongValidate: null}`}
            style={{
              borderColor: validate.repeatPassword ? 'red' : ''
            }}
            />
            <p className={repeatPassword ? style.label_focus: style.label}>Password</p>
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


          <div className={style.login_form_submit}>
            {isChangePasswordPending ? 
              <Loader/> 
              :
              <input
              className={style.login_form_submit_input}
              type="submit"
              value="Continue"
              onClick={sumbit}
              />
            }
          </div>

          
        </form>

        <div className={style.login_footer}>
          <p>© 2024 Posive. All rights reserved.</p>
          <div className={style.login_footer_links}>
              <a onClick={
                () => setViewOpen("term")
              }>Term & Condition</a>
              <a onClick={
                () => setViewOpen("privacy")
              } style={{borderLeft: "1px solid #000"}}>Privacy & Policy</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
