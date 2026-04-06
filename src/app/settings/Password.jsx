import React, { act, useEffect } from 'react'
import { useState } from 'react'
import { supabase } from '../../../lib/supabase'
const Password = () => {
    const [open ,setOpen]=useState(false)
    const [password,setPassword]=useState('')
const [activeId,setActiveId]=useState('1')
const [newPassword,setNewPassword]=useState('')
const [confirmPassword,setConfirmPassword]=useState('')
 const fetchPassword=async()=>{

    const {data,error}=await supabase.auth.signInWithPassword({
        email:'123456@gmail.com',
        password
    })
if(error){
    console.error(error)
    setOpen(true)
    setPassword('')
    return ;
}else{
    console.log(data)
    setActiveId('2')
   
}

}


const updatePassword=async()=>{
    if(newPassword!==confirmPassword){
        setOpen(true)
        setNewPassword('')
        setConfirmPassword('')
        return ;
    }   else{
        const {data,error}=await supabase.auth.updateUser({
            password:newPassword
        })
        if(error){
            console.error(error)
            setOpen(true)
            setNewPassword('')
            setConfirmPassword('')
            return ;
        }else{
            console.log(data)
            setActiveId('1')
            setPassword('')
            setNewPassword('')
            setConfirmPassword('')
        }
    }
}
   


   
        const nextClicked=()=>{
            if(password.length<6){
                setOpen(true)
                setPassword('')
                return ;
            }else{
                fetchPassword()
            }
            
        }
  return (
 <div>
    {open &&(
        <>
        <div className='bg-black fixed inset-0 opacity-50 z-60'></div>
        <div className="fixed inset-0 z-60 flex items-center justify-center">
            <div className="bg-white flex flex-col text-black p-6 rounded-2xl">
                password is incorrect try again please
                <button className='bg-blue-900 mt-4 rounded-2xl py-2 text-white cursor-pointer' onClick={()=>{setOpen(false)}}>try again</button>
            </div>
        </div>
        </>
        )}
           {
            activeId==='1' &&(
                <>
                <div className="flex items-center gap-20">
                <div className="flex capitalize flex-col items-center">
                <p className='bg-violet-600 rounded-full px-2'>1</p>
                <p className='mt-4 text-black'>confirm old password</p>
                </div>
             <div className="flex capitalize flex-col items-center">
                <p className='bg-gray-300 rounded-full px-2'>2</p>
                <p className='mt-4 text-gray-300'>create new password</p>
                </div>
            </div>
            <div className="bg-gray-200 w-full mt-5 text-black p-5 flex flex-col rounded-2xl">
<h1>old password</h1>
<input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="" id="" placeholder='Enter old password' className='rounded-lg mt-2 bg-gray-100 border py-2 pl-5 border-gray-300' />
<button onClick={nextClicked} className='bg-blue-900 mt-4 rounded-2xl py-2 text-white cursor-pointer'>Next</button>

            </div>
                </>
            )
           }

           {
            activeId==='2' &&(
                <>
                <div className="flex items-center gap-20">
                <div className="flex capitalize flex-col items-center">
                <p className='bg-gray-300 rounded-full px-2'>1</p>
                <p className='mt-4 text-gray-300'>confirm old password</p>
                </div>
                <div className="flex capitalize flex-col items-center">
                <p className='bg-violet-600 rounded-full px-2'>2</p>
                <p className='mt-4 text-black'>create new password</p>
                </div>
            </div>
            <div className="bg-gray-200 w-full mt-5 text-black p-5 flex flex-col rounded-2xl">
<h1>new password</h1>
<input value={newPassword} onChange={(e)=>{setNewPassword(e.target.value)}} type="password" name="" id="" placeholder='Enter new password' className='rounded-lg mt-2 bg-gray-100 border py-2 pl-5 border-gray-300' />
<input value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} type="password" name="" id="" placeholder='Confirm new password' className='rounded-lg mt-2 bg-gray-100 border py-2 pl-5 border-gray-300' />
<button onClick={updatePassword} className='bg-blue-900 mt-4 rounded-2xl py-2 text-white cursor-pointer'>Update Password</button>
            </div>
                </>
            )
           } 
               
                       </div>  
)
}


export default Password