import style from "./loginForm.module.scss";
import logo from "/assets/posive_logo.svg";
import eye_hide from '/assets/eye-hide.svg'
import eye_show from '/assets/eye-open.svg'
import google from '/assets/google.svg'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


// ---------- google auth ------------------------------
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import Loader from "../../../../common/Loader/Loader";
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
    email: "enebiyeva@std.beu.edu.az",
    password: "1234567898765432",
  });
  const [validate, setValidate] = useState({
    email: '',
    password: ''
  });




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


  // ---------- google auth ------------------------------
  interface GoogleLoginResponse {
    credential?: string;
  }
  const handleSuccess = (response: GoogleLoginResponse) => {
    if (response.credential) {
      const userObject = jwtDecode(response.credential);
      console.log("User Info:", userObject);
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
    <div className={style.login}>
      <div className={style.login_logo}>
        <img src={logo} alt="Posive" />
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
            <img src={hide?eye_show:eye_hide} alt="eye" />
          </span>

          {/* -- validation -- */}
          <div className={`${style.login_form_validation} ${validate.password && style.shake}`}>
            <span style={{
              opacity: validate.password ? 1 : 0
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            </span>
            <span>{ validate.password}</span>
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
          {/* <input
            className={style.login_form_submit_input}
            type="submit"
            value="Login"
            onClick={sumbit}
          /> */}
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
          <a href="#">Term & Condition</a>
          <a href="#" style={{borderLeft: "1px solid #000"}}>Privacy & Policy</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
