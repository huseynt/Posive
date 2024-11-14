import style from "./registrForm.module.scss";
import logo from "/assets/posive_logo.svg";
import eye_hide from '/assets/eye-hide.svg';
import eye_show from '/assets/eye-open.svg';
import previous from '/assets/arrow-left.svg';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../../../../common/Loader/Loader";

interface RegistrFormProps {
  Registr: (data: { fullName: string; phoneNumber: string; email: string; password: string }) => void;
  isRegistrPending: boolean;
}

const RegisterForm: React.FC<RegistrFormProps>  = (props) => {
  const { Registr, isRegistrPending } = props;
  const [hide, setHide] = useState(false);
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



  const checkValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;

    if (id === 'email') {
      if (!emailRegex.test(data.email) && data.email !== '') {
        setValidate({ ...validate, email: 'Please enter a valid email address' });
      } else {
        setValidate({ ...validate, email: '' });
      }
    }

    if (id === 'phoneNumber') {
      if (!phoneRegex.test(data.phoneNumber) && data.phoneNumber !== '') {
        setValidate({ ...validate, phoneNumber: 'Please enter a valid phone number' });
      } else {
        setValidate({ ...validate, phoneNumber: '' });
      }
    }

    if (id === 'password') {
      if (data.password.length < 8 && data.password !== '') {
        setValidate({ ...validate, password: 'Password must contain at least 8 characters' });
      } else {
        setValidate({ ...validate, password: '' });
      }
    }

    if (id === 'repeatPassword') {
      if (data.password !== repeatPassword && repeatPassword !== '') {
        setValidate({ ...validate, repeatPassword: 'Passwords do not match' });
      } else {
        setValidate({ ...validate, repeatPassword: '' });
      }
    }

    if (id === 'fullName') {
      if (data.fullName.split(" ").length !== 2 || data.fullName.split(" ")[0].length < 3 || data.fullName.split(" ")[1].length < 3) {
        if (data.fullName.length > 0) {
          setValidate({ ...validate, fullName: 'Please enter your full name' });
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
      console.log("Form submitted successfully", data);
      Registr({
        ...data,
        phoneNumber: data.phoneNumber[0] !== '+' ? `+${data.phoneNumber}` : data.phoneNumber
      });
      // Registr(data);
    } 
    else {
      setValidate((prevData) => {
        return {
          ...prevData,
          fullName: !data.fullName ? 'Please enter your full name' : '',
          phoneNumber: !data.phoneNumber ? 'Please enter your phone number' : '',
          email: !data.email ? 'Please enter your email address' : '',
          password: !data.password ? 'Please enter a password' : '',
          repeatPassword: !repeatPassword ? 'Please repeat your password' : '',
        };
      });
    }
  };

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className={style.login}>
      <div className={style.login_logo}>
        <img src={logo} onClick={() => navigate("/")} style={{cursor: "pointer"}} alt="Posive" />
      </div>
      <div className={style.login_previous}>
        <div onClick={handleLogin}><img src={previous} alt="previous" /></div>
      </div>
      <h2 className={style.login_name}>Register</h2>
      <p className={style.login_information}>Let’s create a new account</p>

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
          <p className={data.fullName ? style.label_focus : style.label}>Full Name</p>
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
          <p className={data.email ? style.label_focus : style.label}>Email</p>
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
          <p className={data.phoneNumber ? style.label_focus : style.label}>Phone Number</p>
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
          <p className={data.password ? style.label_focus : style.label}>Password</p>
          <span 
            className={style.login_form_password_eye}
            onClick={() => setHide(!hide)}
          >
            <img src={hide ? eye_show : eye_hide} alt="eye" />
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
          <p className={repeatPassword ? style.label_focus : style.label}>Repeat Password</p>
          <span 
            className={style.login_form_password_eye}
            onClick={() => setHide(!hide)}
          >
            <img src={hide ? eye_show : eye_hide} alt="eye" />
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
            value="Register"
            onClick={sumbit}
            />
          }
        </div>
      </form>

      <div className={style.login_registr}>
        <span>Already have an account? </span>
        <div onClick={handleLogin}>Login Here</div>
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

export default RegisterForm;
