import style from './login.module.scss'
import LoginDescription from './LoginDescription/LoginDescription'
import LoginForm from './LoginForm/LoginForm'
import { Helmet } from 'react-helmet'

const Login = () => {

  return (
    <div className={style.login}>
      <Helmet>
        <title>Posive Login</title>
        <meta name="description" content="Login" />
        <meta name="keywords" content="Posive" />
      </Helmet>
      <LoginDescription/>
      <LoginForm/>
    </div>
  )
}

export default Login
