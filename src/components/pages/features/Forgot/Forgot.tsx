import style from './forgot.module.scss'
import ForgotDescription from './ForgotDescription/ForgotDescription'
import ForgotForm from './ForgotForm/ForgotForm'
import { Helmet } from 'react-helmet'
import { useState } from 'react'
import VerifyEmail from './VerifyEmail/VerifyEmail'
import ChangePassword from './ChangePassword/ChangePassword'
import Succesful from './Succesful/Succesful'


import { useMutation } from '@tanstack/react-query'
import { createPostResetPassword, createPostVerifyEmail, createPostChangePassword } from '../../../utils/API/API'


import { useNavigate } from 'react-router-dom'


const Forgot = () => {
  
  const [step, setStep] = useState<string>('email')
  const [email, setEmail] = useState<string>('')
  const navigate = useNavigate()


  const {
    mutate: ResetPassword,
    // isPending: isResetPasswordPending,
  } = useMutation({
    mutationFn: createPostResetPassword,
    onSuccess: (data) => {
      console.log('Success', data);
      setStep('verify')
    },
    onError: (error) => {
      console.log('Login error:', error);
    },
  });

  const {
    mutate: Verify,
    // isPending: isVerifyEmailPending,
  } = useMutation({
    mutationFn: createPostVerifyEmail,
    onSuccess: (data) => {
      console.log('Success', data);
      setStep('change')
    },
    onError: (error) => {
      console.log('Login error:', error);
    },
  });


  const {
    mutate: Change,
    // isPending: isVerifyEmailPending,
  } = useMutation({
    mutationFn: createPostChangePassword,
    onSuccess: (data) => {
      console.log('Success', data);
      navigate('/login')
    },
    onError: (error) => {
      console.log('Login error:', error);
    },
  });




  
  return (
    <div className={style.login}>
      <Helmet>
        <title>Posive Forgot</title>
        <meta name="description" content="Forgot" />
        <meta name="keywords" content="Posive" />
      </Helmet>


      {step === 'email' && <ForgotForm 
      setEmail={setEmail} 
      setStep={setStep}
      ResetPassword={ResetPassword}/>}

      {step === 'verify' && <VerifyEmail 
      email={email} 
      Verify={Verify}
      setStep={setStep} />}

      {step === 'change' && <ChangePassword 
      email={email} 
      Change={Change}
      setStep={setStep} />}

      {step === 'succesful' && <Succesful/>}


      <ForgotDescription/>
    </div>
  )
}

export default Forgot
