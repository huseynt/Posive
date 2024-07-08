import style from './login.module.scss'
import LoginDescription from './LoginDescription/LoginDescription'
import LoginForm from './LoginForm/LoginForm'


const Login = () => {


  

  return (
    <div className={style.login}>
      <LoginDescription/>
      <LoginForm/>
    </div>
  )
}

export default Login
