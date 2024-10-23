import style from './login.module.scss'
import LoginDescription from './LoginDescription/LoginDescription'
import LoginForm from './LoginForm/LoginForm'
import { Helmet } from 'react-helmet'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { useMutation } from '@tanstack/react-query'
import { createPostAuthenticate } from '../../../utils/API/API'
import { setCookie } from '../../../utils/reUse/cookie'
import { useToken } from '../../../utils/Hooks/useToken'
import Notify from '../Notify/Notify'
// import { addAccessToken, addRefreshToken } from '../../../redux/authenticate/token';
// import { useDispatch } from 'react-redux';


const Login = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  // const dispatch = useDispatch();
  const navigate = useNavigate()

  // ----------------------------- for token ----------------------------
  const token = useToken();
  useEffect(() => {
    if (token) {
      setTimeout(() => {
        navigate("/home");
      }, 100);
    }
  }, [token, navigate]);
  // ----------------------------- for token ----------------------------

  const {
    mutate: Authenticate,
    isPending: isLoginPending,
  } = useMutation({
    mutationFn: createPostAuthenticate,
    onSuccess: (data) => {
      console.log('Success');
      navigate('/home')
      // dispatch(addAccessToken(data.access_token));
      // dispatch(addRefreshToken(data.refresh_token));
      sessionStorage.setItem('access_token', data.access_token);
      sessionStorage.setItem('refresh_token', data.refresh_token);
      console.log(data.statusCode);
      
      // if (data.statusCode === 200) {
      //   setDescribtion('Login successfully')
      //   requestNotify('done')
      // } 
      // else if (data === 'Error') {
      //   setDescribtion('Email is not registered')
      //   requestNotify('important')
      // }
  
      if (rememberMe) {
        const tokenExpiry = 7;
        const resfreshTokenExpiry = 365;
        setCookie('access_token', data.access_token, tokenExpiry);
        setCookie('refresh_token', data.refresh_token, resfreshTokenExpiry);
      }
    },
    onError: (error) => {
      console.log('Login error:', error);
      setDescribtion('Email or password is incorrect')
      requestNotify('important')
    },
  });


    //  ----------------------------- for notify ----------------------------
    const [notify, setNotify] = useState<boolean>(false);
    const [notifyPurpose, setNotifyPurpose] = useState<string>("");
    const [describtion, setDescribtion] = useState<string>("");
    const requestNotify = (purpose: string) => {
      setNotifyPurpose(purpose);
      setNotify(true);
      const timeout = setTimeout(() => {
        setNotify(false);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    };
    //  ----------------------------- for notify ----------------------------

    

  return (
    <>
      <div className={style.login}>
        <Helmet>
          <title>Posive Login</title>
          <meta name="description" content="Login" />
          <meta name="keywords" content="Posive" />
        </Helmet>
        <LoginDescription/>
        <LoginForm 
        Authenticate={Authenticate} 
        rememberMe={rememberMe} 
        setRememberMe={setRememberMe}
        isLoginPending={isLoginPending}
        />
      </div>

      <Notify notify={notify} 
      describtion={describtion}
      purpose={notifyPurpose}/>
    </>
  )
}

export default Login
