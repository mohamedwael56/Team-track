'use client';
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import { redirect } from 'next/dist/server/api-utils';
import { supabase } from '../../../../lib/supabase';
function Page() {
  const router = useRouter()
const [message,setMessage]=useState()
const [email,setEmail]=useState('')
const sentEmail=async (e)=>{
e.preventDefault()
if (!email){ return setMessage('please fill out the blank input')}

await supabase.auth.resetPasswordForEmail(email,{
  redirectTo:"http://localhost:3000/reset-password/set-new-password"
})&& setMessage('Check your Email to change your password!')

  
}
  return (
      <div className='flex capitalize flex-1 flex-col gap-10 items-center justify-center mt-20 mb-30'>

    {message && (
      <div className="fixed  z-50 inset-0 opacity-100 flex items-center justify-center ">
      <div className="border text-black animate-fadeIn flex-col gap-2 rounded-2xl p-5 bg-white flex items-center justify-center">
      <p className='font-bold text-xl mb-5'>{message}</p>
      <button className='cursor-pointer bg-blue-900 rounded-xl w-full py-2 text-white' onClick={()=>{setMessage()}}>Try Again</button>
      <button className='cursor-pointer bg-blue-900 rounded-xl w-full py-2 text-white'onClick={()=>{router.push('/')}} >go to the login page</button>
      </div>
      </div>
    )}
    <form onSubmit={sentEmail}>
 <img src="/icons/Buy2logo.png" alt="Buy2 Logo" className='mb-10' />
 <p className='text-black text-xl font-bold'>forget password</p>
   <p className='text-gray-400'>please enter the email associated to your account</p>
    <div className='flex flex-col relative gap-2'>
    <label htmlFor="email" className='font-bold text-black'>Email address</label>
    <input id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Email' className='border w-full border-gray-200 text-black rounded-xl p-2 ' />
   <button type='button' className='absolute top-11 right-3 cursor-pointer'>
    <img src="/icons/mail.png" alt="Mail Icon" />
   </button>
    <button className='text-white mt-7 cursor-pointer bg-blue-900 rounded-2xl px-8 py-2 '>send an email</button>
    </div>
    </form>
    </div>
  )
}

export default Page