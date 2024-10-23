import style from './registr.module.scss'
import RegistrDescription from './RegistrDescription/RegistrDescription'
import RegistrForm from './RegistrForm/RegistrForm'
import { Helmet } from 'react-helmet'

import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { createPostRegister } from '../../../utils/API/API'
import Notify from '../Notify/Notify'



const Registr = () => {

  const {
    mutate: Registr,
    isPending: isRegistrPending,
  } = useMutation({
    mutationFn: createPostRegister,
    onSuccess: (data) => {
      console.log('Success', data);
      setDescribtion('You have successfully registered')
      requestNotify('done')
    },
    onError: (error) => {
      console.log('Login error:', error);
      setDescribtion('Email is already registered')
      requestNotify('important')
    },
  });

  //  ----------------------------- for notify ----------------------------
  const [notify, setNotify] = useState<boolean>(false);
  const [notifyPurpose, setNotifyPurpose] = useState<string>("");
  const [describtion, setDescribtion] = useState<string>("");
  const requestNotify = (purpose: string) => {
    setNotifyPurpose(purpose);
    setNotify(true);
    const timeout = setTimeout(() => {
      setNotify(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  };
  //  ----------------------------- for notify ----------------------------
  
  return (
    <>
      <div className={style.login}>
        <Helmet>
          <title>Posive Registr</title>
          <meta name="description" content="Registr" />
          <meta name="keywords" content="Posive" />
        </Helmet>
        <RegistrForm Registr={Registr} isRegistrPending={isRegistrPending}/>
        <RegistrDescription/>
      </div>

      <Notify notify={notify} 
      describtion={describtion}
      purpose={notifyPurpose}/>
    </>
  )
}

export default Registr
