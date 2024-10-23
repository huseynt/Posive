import style from "./changePassword.module.scss";
import logo from "/assets/posive_logo.svg";
import previous from '/assets/arrow-left.svg'
import eye_hide from '/assets/eye-hide.svg'
import eye_show from '/assets/eye-open.svg'
import { useEffect, useState } from "react";
import Loader from "../../../../common/Loader/Loader";
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
  // const navigate = useNavigate()

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
    <div className={style.login}>
      <div className={style.login_logo}>
        <img src={logo} alt="Posive" />
      </div>
      <div className={style.login_previous}>
        <div onClick={() => setStep('verify')}><img src={previous} alt="previous" /></div>
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
            <img src={hide? eye_show: eye_hide} alt="eye" />
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
            <img src={hide? eye_show: eye_hide} alt="eye" />
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
          <a href="#">Term & Condition</a>
          <a href="#" style={{borderLeft: "1px solid #000"}}>Privacy & Policy</a>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
