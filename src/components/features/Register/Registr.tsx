import style from './registr.module.scss'
import RegistrDescription from './RegistrDescription/RegistrDescription'
import RegistrForm from './RegistrForm/RegistrForm'
import { useEffect, useState } from 'react'
import TriangleLoader from '../../common/Loader/Triangle'

const Registr = () => {

  // ------- for test -------
  const [check, setCheck] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setCheck(false)
    }, 280)
  }, [])
  // ------------------------
  
  return (
    <div className={style.login}>
      {/* {check && <TriangleLoader />} */}
      <RegistrForm/>
      <RegistrDescription/>
    </div>
  )
}

export default Registr
