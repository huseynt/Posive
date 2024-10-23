import style from "./succesful.module.scss";
import logo from "/assets/posive_logo.svg";
import { useNavigate } from "react-router-dom";


const Succesful = () => {

  const navigate = useNavigate();
  const sumbit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    navigate('/login');
  }


  return (
    <div className={style.login}>
      <div className={style.login_logo}>
        <img src={logo} alt="Posive" />
      </div>
      <div className={style.login_previous}>
          <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.5002 58.6668C47.1668 58.6668 59.1668 46.6668 59.1668 32.0002C59.1668 17.3335 47.1668 5.3335 32.5002 5.3335C17.8335 5.3335 5.8335 17.3335 5.8335 32.0002C5.8335 46.6668 17.8335 58.6668 32.5002 58.6668Z" stroke="#12B3A8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.1665 31.9998L28.7132 39.5465L43.8332 24.4531" stroke="#12B3A8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
      </div>
      <h2 className={style.login_name}>Reset password succesful</h2>
      <p className={style.login_information}>Successfully changed password. you can enter the main page</p>

      <form className={style.login_form} action="submit">
        <input
          className={style.login_form_submit}
          type="submit"
          value="Go to login"
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

export default Succesful;
