import style from './login.module.scss'
import LoginDescription from './LoginDescription/LoginDescription'
import LoginForm from './LoginForm/LoginForm'
import { useEffect, useState } from 'react'
import TriangleLoader from '../../common/Loader/Triangle'

const Login = () => {

  // ------- for test -------
  const [check, setCheck] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setCheck(false)
    }, 1200)
  }, [])
  // ------------------------
  

  return (
    <div className={style.login}>
      {check && <TriangleLoader />}
      <LoginDescription/>
      <LoginForm/>
    </div>
  )
}

export default Login
