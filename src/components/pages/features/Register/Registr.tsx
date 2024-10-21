import style from './registr.module.scss'
import RegistrDescription from './RegistrDescription/RegistrDescription'
import RegistrForm from './RegistrForm/RegistrForm'
import { Helmet } from 'react-helmet'

import { useMutation } from '@tanstack/react-query'
import { createPostRegister } from '../../../utils/API/API'



const Registr = () => {

  const {
    mutate: Registr,
    isPending: isRegistrPending,
  } = useMutation({
    mutationFn: createPostRegister,
    onSuccess: (data) => {
      console.log('Success', data);
    },
    onError: (error) => {
      console.log('Login error:', error);
    },
  });
  
  return (
    <div className={style.login}>
      <Helmet>
        <title>Posive Registr</title>
        <meta name="description" content="Registr" />
        <meta name="keywords" content="Posive" />
      </Helmet>
      <RegistrForm Registr={Registr} isRegistrPending={isRegistrPending}/>
      <RegistrDescription/>
    </div>
  )
}

export default Registr
