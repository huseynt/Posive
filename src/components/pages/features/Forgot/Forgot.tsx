import style from './forgot.module.scss'
import RegistrDescription from './ForgotDescription/RegistrDescription'
import RegistrForm from './ForgotForm/RegistrForm'

const Forgot = () => {

  
  return (
    <div className={style.login}>
      <RegistrForm/>
      <RegistrDescription/>
    </div>
  )
}

export default Forgot
