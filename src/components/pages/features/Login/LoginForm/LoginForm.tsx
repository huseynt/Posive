import style from "./loginForm.module.scss";
import logo from "/assets/posive_logo.svg";
import google from '/assets/google.svg'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


// ---------- google auth ------------------------------
import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from 'jwt-decode';
import Loader from "../../../../common/Loader/Loader";
import TermForHomePage from "../../TermForHomePage/TermForHomePage";
import PrivacyForHomePage from "../../PrivacyForHomePage/PrivacyForHomePage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGoogleAuth } from "../../../../utils/API/API";
import { setCookie } from "../../../../utils/reUse/cookie";
// import { useMutation } from "@tanstack/react-query";
// import { createGoogleAuth } from "../../../../utils/API/API";
// ---------- google auth ------------------------------


interface LoginFormProps {
  Authenticate: (data: { email: string; password: string }) => void;
  rememberMe: boolean;
  setRememberMe: (value: boolean) => void;
  isLoginPending: boolean;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {


  const { Authenticate, setRememberMe, rememberMe, isLoginPending } = props;
  const [hide, setHide] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [validate, setValidate] = useState({
    email: '',
    password: ''
  });


  // --------------- term and privacy ----------------
  const [viewOpen, setViewOpen] = useState<string>("");
  // --------------- term and privacy ----------------
  




  // ----------- form ------------------------------
  const change = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
    checkValidation(e)
  }

  const sumbit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (data.email && data.password && !validate.email && !validate.password) {
      console.log('Data:', data);
      Authenticate(data)

      // ----- FOR TEST ------
      if (data.email === 'test@mail.ru' && data.password ==='test') {
        navigate('/home')
      }
      // ----- FOR TEST ------
    }
    if (!data.email && !data.password) {
      setValidate({
        email: 'Please enter your email address',
        password: 'Please enter a password'
      })
    } else {
      if (!data.email) {
        setValidate({
          ...validate,
          email: 'Please enter a email address'
        })
      } 
      if (!data.password) {
        setValidate({
          ...validate,
          password: 'Please enter a password'
        })
      }
    }

    console.log('Data:', data);
  }

  // ----------- navigation ------------------------------
  const navigate = useNavigate()
  const handleRegistr = () => {
    navigate('/registr')
  }
  const handleForgot = () => {
    navigate('/forgot')
  }
  // const handleHome = () => {
  //   navigate('/home')
  // }




  // ----------- check api ------------------------------
  const queryClient = useQueryClient()
  const {
    mutate: googleLogin,
    // isPending: isLoginPending,
  } = useMutation({
    mutationFn: createGoogleAuth,
    onSuccess: (data) => {
      console.log('Success', data);
      console.log('Success');
      navigate('/home')
      sessionStorage.setItem('access_token', data.access_token);
      sessionStorage.setItem('refresh_token', data.refresh_token);
      console.log(data.statusCode);
      queryClient.invalidateQueries({queryKey: ["getUserSaveUser"]})
      const tokenExpiry = 7;
      const resfreshTokenExpiry = 365;
      setCookie('access_token', data.access_token, tokenExpiry);
      setCookie('refresh_token', data.refresh_token, resfreshTokenExpiry);
    },
    onError: (error) => {
      console.log('Login error:', error);
    },
  });
  // ---------- google auth ------------------------------
  interface GoogleLoginResponse {
    credential?: string;
  }
  const handleSuccess = (response: GoogleLoginResponse) => {
    
    if (response.credential) {
      const idToken = response.credential;
      // const userObject = jwtDecode(response.credential);
      googleLogin(idToken)
      console.log("User Info:", idToken);
    } else {
      console.log('No credential received');
    }
  };
  const handleError = () => {
    console.log('Login Failed');
  };
  // ---------- google auth ------------------------------


  // ----------- validation ------------------------------
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;

  const checkValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ( e.target.id === 'email' && data.email.length > 0 ) {
      if (!emailRegex.test(data.email)) {
        setValidate({
          ...validate,
          email: 'Please enter a valid email address'
        })
      } else {
        setValidate({
          ...validate,
          email: ''
        })
      }
      console.log('email', data.email);
    }

    if ( e.target.id === 'password' && data.password.length > 0 ) {
      // if (!passwordRegex.test(data.password)) {
      //   setValidate({
      //     ...validate,
      //     password: "Password must contain including letters and numbers"
      //   })
      // } else if (data.password.length < 7) {
      //   setValidate({
      //     ...validate,
      //     password: 'Password must contain at least 8 characters'
      //   })
      // }
      //  else {
      //   setValidate({
      //     ...validate,
      //     password: ''
      //   })
      // }
      setValidate({
        ...validate,
        password: ''
      })
      console.log('password', data.password);
    }
  }
  useEffect(() => {
    const emailEvent = {
      target: {
        id: "email",
        value: data.email,
      },
    } as React.ChangeEvent<HTMLInputElement>;
    checkValidation(emailEvent);
  }, [data.email]);
  
  useEffect(() => {
    const passwordEvent = {
      target: {
        id: "password",
        value: data.password,
      },
    } as React.ChangeEvent<HTMLInputElement>;
    checkValidation(passwordEvent);
  }, [data.password]);
  // ----------- validation ----------------


  return (
    <>


      {viewOpen === "term" && <TermForHomePage setViewOpen={setViewOpen} />}
      {viewOpen === "privacy" && <PrivacyForHomePage setViewOpen={setViewOpen} />}


      <div className={style.login}>
        <div className={style.login_logo}>
          <img onClick={() => navigate("/")} style={{cursor: "pointer"}} src={logo} alt="Posive" />
        </div>
        <h2 className={style.login_name}>Login</h2>

        <form className={style.login_form} action="submit">

          <div className={style.login_form_email}>
            <input 
            type="text" 
            id="email" 
            onChange={change} 
            value={data.email}
            autoComplete="current-password"
            className={`${style.login_form_email_input} ${validate.email ? style.forWrongValidate: null}`}
            style={{
              borderColor: validate.email ? 'red' : ''
            }}
            />
            <p className={data.email ? style.label_focus: style.label}>Email</p>

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
          
          <div className={style.login_form_password}>
            <input 
            type={hide ? "text" : "password"} 
            id="password"
            onChange={change}
            value={data.password}
            autoComplete="current-password"
            className={`${style.login_form_password_input} ${validate.password ? style.forWrongValidate: null}`}
            style={{
              borderColor: validate.password ? 'red' : ''
            }}
            />
            <p className={data.password ? style.label_focus: style.label}>Password</p>
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

          <div className={style.login_form_actions}>
            <div className={style.login_form_actions_save}>
              <input type="checkbox" name="remember" id="remember" checked={rememberMe} onChange={() => 
                setRememberMe(!rememberMe)
              }/>
              <label htmlFor="remember"> Remember me</label>
            </div>

            <div className={style.login_form_actions_forgot} onClick={handleForgot}>
              Forgot Password
            </div>
          </div>


          
          <div className={style.login_form_submit}>
            {isLoginPending ? 
              <Loader/> 
              :
              <input
              className={style.login_form_submit_input}
              type="submit"
              value="Login"
              onClick={sumbit}
              />
            }
          </div>

          
        </form>

        <div className={style.login_or}>
          <span>or</span>
        </div>


        <button className={style.login_google}>
          {/* -- for style -- */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "-2px",
            transform: "translateX(-50%)",
            opacity: "0"
          }}>
            <GoogleLogin 
            onSuccess={handleSuccess} 
            onError={handleError}
            />
          </div>
          {/* -------------- */}
          <span><img src={google} alt="google" /></span>
          <span>Login with Google</span>
        </button>

        <div className={style.login_registr}>
          <span>Don’t have an account? </span>
          <a onClick={handleRegistr}>Register Here</a>
        </div>

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

export default LoginForm;

// function createGoogleAuth(variables: void): Promise<unknown> {
//   throw new Error("Function not implemented.");
// }

