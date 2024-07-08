import style from './login.module.scss'
import LoginDescription from './LoginDescription/LoginDescription'
import LoginForm from './LoginForm/LoginForm'
// import { useEffect, useState } from 'react'
// import TriangleLoader from '../../common/Loader/Triangle'

const Login = () => {

  // ------- loader for test -------
  // const [check, setCheck] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCheck(false)
  //   }, 280)
  // }, [])

  // ------------------------
  

  return (
    <div className={style.login}>
      {/* {check && <TriangleLoader />} */}
      <LoginDescription/>
      <LoginForm/>
    </div>
  )
}

export default Login
