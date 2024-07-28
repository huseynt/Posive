import style from "./loginForm.module.scss";
import logo from "/assets/posive_logo.svg";
import eye_hide from '/assets/eye-hide.svg'
import eye_show from '/assets/eye-open.svg'
import google from '/assets/google.svg'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const [hide, setHide] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const change = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  }

  const sumbit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleHome()
  }


  const navigate = useNavigate()
  const handleRegistr = () => {
    navigate('/registr')
  }
  const handleForgot = () => {
    navigate('/forgot')
  }
  const handleHome = () => {
    navigate('/home')
  }


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
          className={style.login_form_email_input}
          />
          <p className={data.email ? style.label_focus: style.label}>Email</p>
        </div>

        <div className={style.login_form_password}>
          <input 
          type={hide ? "text" : "password"} 
          id="password"
          onChange={change}
          value={data.password}
          className={style.login_form_password_input}
          />
          <p className={data.password ? style.label_focus: style.label}>Password</p>
          <span 
          className={style.login_form_password_eye}
          onClick={() => setHide(!hide)}
          >
            <img src={hide?eye_show:eye_hide} alt="eye" />
          </span>
        </div>


        <div className={style.login_form_actions}>
          <div className={style.login_form_actions_save}>
            <input type="checkbox" name="remember" id="remember"/>
            <label htmlFor="remember"> Remember me</label>
          </div>

          <div className={style.login_form_actions_forgot} onClick={handleForgot}>
            Forgot Password
          </div>
        </div>


        <input
          className={style.login_form_submit}
          type="submit"
          value="Login"
          onClick={sumbit}
        />
      </form>

      <div className={style.login_or}>
        <span>or</span>
      </div>

      <button className={style.login_google}>
      <span><img src={google} alt="google" /></span>
      Login with Google
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
