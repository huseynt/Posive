import style from './registr.module.scss'
import RegistrDescription from './RegistrDescription/RegistrDescription'
import RegistrForm from './RegistrForm/RegistrForm'

const Registr = () => {
  
  return (
    <div className={style.login}>
      <RegistrForm/>
      <RegistrDescription/>
    </div>
  )
}

export default Registr
