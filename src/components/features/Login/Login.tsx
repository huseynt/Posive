import style from './login.module.scss'
import { Loader } from '../../common/Loader/Loader'
import LoginDescription from './LoginDescription/LoginDescription'
import LoginForm from './LoginForm/LoginForm'
import { useEffect, useState } from 'react'

const Login = () => {


  // ------- for test -------
  const [check, setCheck] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setCheck(false)
    }, 1000)
  }, [])
  // ------------------------

  return (
    <div className={style.login}>
      {check && <Loader />}
      <LoginDescription/>
      <LoginForm/>
    </div>
  )
}

export default Login
