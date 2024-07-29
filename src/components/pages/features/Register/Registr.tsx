import style from './registr.module.scss'
import RegistrDescription from './RegistrDescription/RegistrDescription'
import RegistrForm from './RegistrForm/RegistrForm'
import { Helmet } from 'react-helmet'

const Registr = () => {
  
  return (
    <div className={style.login}>
      <Helmet>
        <title>Posive Registr</title>
        <meta name="description" content="Registr" />
        <meta name="keywords" content="Posive" />
      </Helmet>
      <RegistrForm/>
      <RegistrDescription/>
    </div>
  )
}

export default Registr
