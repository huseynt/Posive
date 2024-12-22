import style from './forgot.module.scss'
import ForgotDescription from './ForgotDescription/ForgotDescription'
import ForgotForm from './ForgotForm/ForgotForm'
import { Helmet } from 'react-helmet'
import { useState } from 'react'
import VerifyEmail from './VerifyEmail/VerifyEmail'
import ChangePassword from './ChangePassword/ChangePassword'
import Succesful from './Succesful/Succesful'
import { useMutation } from '@tanstack/react-query'
import { createResetPassword, createVerifyEmail, createPostChangePassword } from '../../../../utils/API/API'

import Notify from '../Notify/Notify'

const Forgot = () => {
  
  const [step, setStep] = useState<string>('email')
  const [email, setEmail] = useState<string>('')




  // Send email
  const {
    mutate: ResetPassword,
    isPending: isResetPasswordPending,
  } = useMutation({
    mutationFn: createResetPassword,
    onSuccess: (data) => {
      console.log('Success', data);
      if (data === 'Success') {
        setStep('verify')
        setDescribtion('Code sent successfully')
        requestNotify('done')
      } 
      else if (data === 'Error') {
        setDescribtion('Email is not registered')
        requestNotify('important')
      }
    },
    onError: (error) => {
      console.log('Login error:', error);
    },
  });

  // Send verifyCode
  const {
    mutate: Verify,
    isPending: isVerifyEmailPending,
  } = useMutation({
    mutationFn: createVerifyEmail,
    onSuccess: (data) => {
      console.log('Success', data);
      if (data === 'Success') {
        setStep('change')
        setDescribtion('Email verified successfully')
        requestNotify('done')
      }
      else if (data === 'Error') {
        setDescribtion('Code is incorrect')
        requestNotify('undone')
      }
    },
    onError: (error) => {
      console.log('Login error:', error);
    },
  });

  // Change Password
  const {
    mutate: Change,
    isPending: isChangePasswordPending,
  } = useMutation({
    mutationFn: createPostChangePassword,
    onSuccess: (data) => {
      console.log('Success', data);
      if (data === 'Success') {
        setStep('succesful')
        setDescribtion('Password changed successfully')
        requestNotify('done')
      }
      else if (data === 'Error') {
        setDescribtion('Error changing password')
        requestNotify('undone')
      }
    },
    onError: (error) => {
      console.log('Login error:', error);
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
          <title>Posive Forgot</title>
          <meta name="description" content="Forgot" />
          <meta name="keywords" content="Posive" />
        </Helmet>


        {step === 'email' && <ForgotForm 
        setEmail={setEmail} 
        isResetPasswordPending={isResetPasswordPending}
        ResetPassword={ResetPassword}/>}

        {step === 'verify' && <VerifyEmail 
        email={email} 
        Verify={Verify}
        isVerifyEmailPending={isVerifyEmailPending}
        setStep={setStep} 
        />}

        {step === 'change' && <ChangePassword 
        email={email} 
        Change={Change}
        isChangePasswordPending={isChangePasswordPending}
        setStep={setStep} 
        />}

        {step === 'succesful' && <Succesful/>}


        <ForgotDescription/>

        
      </div>
      <Notify notify={notify} 
      describtion={describtion}
      purpose={notifyPurpose}/>
    </>
  )
}

export default Forgot
