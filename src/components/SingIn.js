import React, { useRef, useState } from 'react'
import { checkValidData } from './utilites/validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const SingIn = () => {
  const [isSignIn, setIsSingIn] = useState(true)
  const [errorMessage,setErrorMessage] = useState(null)

  const email = useRef()
  const password = useRef()
  
  const handleClickBtn = ()=>{
    const message = checkValidData(email.current.value,password.current.value)
    setErrorMessage(message)

    if (message) return

    if (!isSignIn){
      //signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => { 
    const user = userCredential.user;
    console.log(user)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" +errorMessage) 
  });

    }else{
      //signinLogic
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-"+ errorMessage)
  });

    }
  }
  const clickBtn = ()=>{
    setIsSingIn(!isSignIn)
  }
  return (
    <div className='p-4 m-4'>
      <center>
      <form className=''onSubmit={e=>e.preventDefault()}>
        {!isSignIn && <input className='bg-gray-200 p-2 m-2' type='text' placeholder='UserName' />} <br/>
        <input className='bg-gray-200 p-2 m-2' type='email' ref={email} name='email'  placeholder='Email' /><br/>
        <input className='bg-gray-200 p-2 m-2' type='password' ref={password} name='password'  placeholder='Password' /><br/>
        <p className='text-red-500'>{errorMessage}</p>
        <button className='bg-gray-400 p-2 m-2' onClick={handleClickBtn}>{!isSignIn ? "SingIn" : "SingUp" }</button><br/>
        <p className='cursor-pointer' onClick={clickBtn}>{ !isSignIn ? "New to Store? SingUp" : "Already Register? Please SingIn Now"}</p>
      </form>
        </center>
      
    </div>
  )
}

export default SingIn
