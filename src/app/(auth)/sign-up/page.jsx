'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { supabase } from '../../../../lib/supabase';
import { useRouter } from 'next/navigation';
function Page() {
const router=useRouter()
const [showPassword,setShowPassword]= useState(false);
const [password,setPassword]=useState('')
const [email,setEmail]=useState('')
const [confirmPassword,setConfirmPassword]=useState('')
const[showMessage,setShowMessage]=useState()
const [confirmMessage,setConfirmMessage]=useState()
const showingPasswordButton =()=>{
  setShowPassword(!showPassword)
}
const signUpButton= async (e)=>{
  e.preventDefault()
  if(!password||!confirmPassword||!email){return setShowMessage('please fill out the blank inputs')}
  if(password!==confirmPassword){return setShowMessage('password does not match confirm password')}
  const {data,error}=await supabase.auth.signUp({
  email:email.trim(),
  password
})
if(error){console.error(error,'something went wrong!')}else{
  setConfirmMessage('Congratulation!')
}
}



  return (

    <>
  <div className='flex capitalize ml-60 overflow-hidden mt-20 flex-col gap-10 items-center justify-center mb-30'>
    {showMessage&&(
      <div className='flex fixed z-50 bg-black flex-col animate-overlayFadeIn inset-0 items-center justify-center'>
        <div className="bg-gray-100 flex flex-col gap-2 rounded-xl animate-fadeIn text-red-600 p-5 text-center ">
        <span>❌</span>
      <p>{showMessage}</p>
      <button className='px-5 py-1 cursor-pointer bg-red-600 rounded-xl text-white ' onClick={()=>{setShowMessage()}}>Try Again</button>
        </div>
      </div>
    )}
    {
confirmMessage?(
  <div className="mb-10 text-black flex flex-col items-center gap-2">
 <img src="/icons/Buy2logo.png" alt="Buy2 Logo" />
 <img src="/icons/icon.png" alt="" className='mt-5' />
<p className='text-3xl capitalize mt-8'>{confirmMessage}</p>
<p className='text-gray-400 capitalize mb-3'>account has been registered successfully</p>
<button onClick={()=>{router.push('/home')}} className='cursor-pointer capitalize bg-blue-900 text-white rounded-xl px-15 py-2 mt-2'>go to home page</button>
  </div>
):(
  <>
 <div className='mb-10'>
  <img src="/icons/Buy2logo.png" alt="Buy2 Logo" />
  </div>
  <div className='flex items-center flex-col'>
    <h1 className="text-3xl font-bold text-black">
      welcome!
    </h1>
    <p className=' text-gray-500'>
      please sign up to continue
    </p>
  </div>
  <form onSubmit={signUpButton}>
  <div className='flex flex-col gap-5 mt-10 relative'>
    <div className='flex flex-col'>
    <label htmlFor="email" className='font-bold text-black'>Email address</label>
    <input id="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} type="text" placeholder='Email' className='border border-gray-200 text-black rounded-xl p-2 w-80' />
   <button type='button' className='absolute top-9 right-3 cursor-pointer'>
    <img src="/icons/mail.png" alt="Mail Icon" />
   </button>
    </div>
    <div className='flex flex-col relative'>
    <label htmlFor="password" className='font-bold text-black'>Password</label>
    <input id="password" type={showPassword ? 'text' : 'password'} placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} value={password} className='border border-gray-200 text-black rounded-xl p-2 w-80' />
    <button type='button' onClick={showingPasswordButton} className=' cursor-pointer absolute right-4 top-9'>
      <img src="/icons/eye.png" alt="Eye Icon" />
    </button>
    </div>
    <div className='flex flex-col relative'>
    <label htmlFor="confirm-password" className='font-bold text-black'>confirm Password</label>
    <input id="confirm-password" type={showPassword ? 'text' : 'password'} placeholder='confirm password' onChange={(e)=>{setConfirmPassword(e.target.value)}} value={confirmPassword} className='border border-gray-200 text-black rounded-xl p-2 w-80' />
    <button type='button' onClick={showingPasswordButton} className=' cursor-pointer absolute right-4 top-9'>
      <img src="/icons/eye.png" alt="Eye Icon" />
    </button>
    </div>
    <div className='flex justify-between'>
    <label htmlFor="remember-me" className='flex select-none items-center gap-2 text-gray-500'>
      <input id='remember-me' type="checkbox" className='accent-blue-900' />
      remember me
    </label>
    <Link href="/reset-password" className='text-blue-500 hover:underline'>Forgot password?</Link>
    </div>
    <button  className='bg-blue-900 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-white py-2 px-4 rounded-md hover:bg-blue-800'>
      Sign Up
    </button>
  </div>
  
  </form>
  </>
)
    }
   
</div>

    
    
    </>
  )
}

export default Page