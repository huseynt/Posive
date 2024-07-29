import style from './forgot.module.scss'
import RegistrDescription from './ForgotDescription/RegistrDescription'
import RegistrForm from './ForgotForm/RegistrForm'
import { Helmet } from 'react-helmet'

const Forgot = () => {

  
  return (
    <div className={style.login}>
      <Helmet>
        <title>Posive Forgot</title>
        <meta name="description" content="Forgot" />
        <meta name="keywords" content="Posive" />
      </Helmet>
      <RegistrForm/>
      <RegistrDescription/>
    </div>
  )
}

export default Forgot
