'use client';
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import { supabase } from '../../../../../lib/supabase';

function Page() {
  const router = useRouter()
  const [message, setMessage] = useState()
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submitNewPassword = async () => {
     setNewPassword('')
setConfirmPassword('')
    if (!newPassword || !confirmPassword) return setMessage({text:'Please fill out both fields'})
    if (newPassword !== confirmPassword) return setMessage({text:'Passwords do not match'})
    if (newPassword.length < 6) return setMessage({text:'Password must be at least 6 characters'})
 
   const {data,error}= await supabase.auth.updateUser({
        password:newPassword
    })
    if(error){setMessage({type:"error",text:error})}
    setMessage({
    type:'done',
    text:'Password updated successfully'
    })

  }

  return (
    <>
      {message && (
      <div className="fixed bg-black z-50 inset-0 opacity-100 flex items-center justify-center animate-overlayFadeIn ">
      <div className="border text-black animate-fadeIn flex-col gap-2 rounded-2xl p-5 bg-white flex items-center justify-center">
      <p className='font-bold text-xl mb-5'>{message.text}</p>
      {message.type==='done'?(    
          <button className='cursor-pointer bg-blue-900 rounded-xl w-full py-2 text-white' onClick={()=>{router.push('/home')}}>go to home page</button>):(<>
      <button className='cursor-pointer bg-blue-900 rounded-xl w-full py-2 text-white' onClick={()=>{setMessage()}}>Try Again</button>
      <button className='cursor-pointer bg-blue-900 rounded-xl w-full py-2 text-white' >go to the login page</button>
    </> ) }
      </div>
      </div>
    )}
      <div className='flex capitalize flex-1 flex-col gap-10 items-center justify-center mb-30'>
        <img src="/icons/Buy2logo.png" alt="Buy2 Logo" className='mb-10' />
        <p className='text-black text-xl font-bold'>set new password</p>
        <p className='text-gray-400'>please enter your new password and confirm it</p>

        <div className='flex flex-col relative gap-4'>
          <label htmlFor="new-password" className='font-bold text-black'>New password</label>
          <input id="new-password" value={newPassword} onChange={(e)=>{setNewPassword(e.target.value)}} type="password" placeholder='New password' className='border border-gray-200 text-black rounded-xl p-2 w-80' />

          <label htmlFor="confirm-password" className='font-bold text-black'>Confirm password</label>
          <input id="confirm-password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} type="password" placeholder='Confirm password' className='border border-gray-200 text-black rounded-xl p-2 w-80' />

          <div className='flex justify-center gap-4 mt-2'>
            <button onClick={submitNewPassword} className='text-white cursor-pointer bg-blue-900 rounded-2xl px-8 py-2'>Update Password</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
