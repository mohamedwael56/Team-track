'use client';
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { getSupabaseClient } from '../../../lib/supabase';
import { useRouter } from 'next/navigation';
import './page.css'
function Page() {
const router=useRouter()
const [showPassword,setShowPassword]= useState(false);
const [password,setPassword]=useState('')
const [email,setEmail]=useState('')
const [message,setMessage]=useState()
const showingPasswordButton =()=>{
  setShowPassword(!showPassword)
}
const logInButton= async (e)=>{
e.preventDefault()
  const supabase = getSupabaseClient();
  if (!supabase) return setMessage('Authentication service unavailable');
  const {data,error}=await supabase.auth.signInWithPassword({
    email,
    password
  })
  if (error){setMessage('Email or Password is incorrect')}
  else{router.push('/home')}

}

  return (

    <>
    {message&&(<>
      <div className="fixed flex items-center justify-center inset-0 bg-black z-50 opacity-50"></div>
        <div className='fixed flex items-center justify-center inset-0 z-60'>
      <div className={`border flex flex-col rounded-xl p-5 items-center justify-center text-center bg-gray-100 animate-fadeIn border-red-100 text-red-600`}>
        <span>❌</span>
        <p> {message}</p>
        <button onClick={()=>{setMessage()}} className='border rounded-xl px-5 my-1 cursor-pointer py-1'>Try Again</button>
        <button onClick={()=>{router.push('/sign-up')}} className='border rounded-xl px-5 my-1 cursor-pointer py-1 '>register an account</button>
      </div>
    </div> 
    </> )}
  <div className='flex login-parent capitalize ml-50 overflow-hidden mt-20 flex-col gap-10 items-center justify-center mb-30'>
    
    <div className='mb-10'>
  <img src="/icons/buy2logo.png" alt="Buy2 Logo" />
  </div>
  <div className='flex items-center flex-col'>
    <h1 className="text-3xl font-bold text-black">
      welcome!
    </h1>
    <p className=' text-gray-500'>
      please login to continue
    </p>
  </div>
  <form onSubmit={logInButton}>
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
    <div className='flex justify-between'>
    <label htmlFor="remember-me" className='flex select-none items-center gap-2 text-gray-500'>
      <input id='remember-me' type="checkbox" className='accent-blue-900' />
      remember me
    </label>
    <Link href="/reset-password" className='text-blue-500 hover:underline'>Forgot password?</Link>
    </div>
    <button className='bg-blue-900 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-white py-2 px-4 rounded-md hover:bg-blue-800'>
      Login
    </button>
  </div>
  
  </form>
</div>

    
    
    </>
  )
}

export default Page