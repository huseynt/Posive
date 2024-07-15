import style from "./registrForm.module.scss";
import logo from "/assets/posive_logo.svg";
import previous from '/assets/arrow-left.svg'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

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
  }

  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/login')
  }


  return (
    <div className={style.login}>
      <div className={style.login_logo}>
        <img src={logo} alt="Posive" />
      </div>
      <div className={style.login_previous}>
        <div onClick={handleLogin}><img src={previous} alt="previous" /></div>
      </div>
      <h2 className={style.login_name}>Reset password</h2>
      <p className={style.login_information}>Input your email address account to receive a reset link</p>

      <form className={style.login_form} action="submit">


        <div className={style.login_form_password}>
          <input 
          type="text"
          id="password"
          onChange={change}
          value={data.password}
          className={style.login_form_password_input}
          />
          <p className={data.password ? style.label_focus: style.label}>Email</p>
        </div>

        <input
          className={style.login_form_submit}
          type="submit"
          value="Continue"
          onClick={sumbit}
        />
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

export default LoginForm;
