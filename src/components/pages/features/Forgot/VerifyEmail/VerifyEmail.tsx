import style from "./verifyEmail.module.scss";
import logo from "/assets/posive_logo.svg";
import previous from '/assets/arrow-left.svg'
import { useState, useEffect } from "react";
import Loader from "../../../../common/Loader/Loader";


interface VerifyEmailProps {
  email: string;
  setStep: (step: string) => void;
  Verify: (data: IVerifyEmail) => void;
  isVerifyEmailPending: boolean;
  // requestNotify: (purpose: string) => void;
  // setDescribtion: (describtion: string) => void;
}

interface IVerifyEmail {
  email: string;
  confirmPassword: string;
}

interface IPassword {
  confirmPassword: string;
}

const VerifyEmail: React.FC<VerifyEmailProps> = (props) => {

  const { email, setStep, Verify, isVerifyEmailPending } = props;
  const [data, setData] = useState<IVerifyEmail>({
    email: email,
    confirmPassword: ""});
  const [validate, setValidate] = useState<IPassword>({
    confirmPassword: "",
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
    if (data.confirmPassword!== "" && data.confirmPassword.length > 2) {
      console.log(data, email);
      // setStep('change')
      Verify(data);
      // requestNotify('done')
      // setDescribtion('Email verified successfully')
    }
    else { 
      if (data.confirmPassword === "") {
        setValidate({
          ...validate,
          confirmPassword: "Please enter the verification code",
        });
      }
    }
  }


  const checkValidation = () => {
    if (data.confirmPassword.length < 3 && data.confirmPassword.length > 0) {
      setValidate({
        ...validate,
        confirmPassword: "Code is required",
      });
    } else {
      setValidate({
        ...validate,
        confirmPassword: "",
      });
    }
  }

  useEffect(() => {
    checkValidation();
  }, [data.confirmPassword]);

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
        <div onClick={() => setStep('email')}><img src={previous} alt="previous" /></div>
      </div>
      <h2 className={style.login_name}>Verify Email</h2>
      <p className={style.login_information}>Account verification code may only be used once to verify email.</p>

      <form className={style.login_form} action="submit">


        {/* <div className={style.login_form_password}>
          <input 
          type="text"
          id="password"
          onChange={change}
          value={data.password}
          className={style.login_form_password_input}
          />
          <p className={data.password ? style.label_focus: style.label}>Verification Code</p>
        </div> */}


        <div className={style.login_form_email}>
          <input 
            type="text" 
            id="confirmPassword" 
            onChange={change} 
            value={data.confirmPassword}
            autoComplete="off"
            className={`style.login_form_email_input ${validate.confirmPassword ? style.forWrongValidate: null}`}
            style={{
              borderColor: validate.confirmPassword ? 'red' : ''
            }}
          />
          <p className={data.confirmPassword ? style.label_focus : style.label}>Verification code</p>
          {/* -- validation -- */}
          <div className={`${style.login_form_validation} ${validate.confirmPassword && style.shake}`}>
            <span style={{
              opacity: validate.confirmPassword ? 1 : 0
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            </span>
            <span>{validate.confirmPassword}</span>
          </div>
          {/* -------------- */}
        </div>


        <div className={style.login_form_submit}>
          {isVerifyEmailPending ? 
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

export default VerifyEmail;
