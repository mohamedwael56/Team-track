"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import { useState,useEffect } from 'react';
import {ClientProfileData} from '@/lib/ClientProfileData'
const MyProfile = () => {
  const [profile,setProfile]=useState({})

  useEffect(()=>{
    const fetchData=async()=>{
      const data=await ClientProfileData()
      setProfile(data)
    }
    fetchData()
    console.log(profile)
  },[])

  const [open,setOpen]=useState(false)

      const router=useRouter()
    
  return (
    <>
      {
        open&&(
          <>
          <div className="fixed inset-0 bg-black opacity-50 z-60"></div>
          <div className="absolute top-10 right-0 flex justify-end mr-5 items-center z-60">
            <div className="bg-white flex flex-col rounded-2xl p-5 w-80 lg:w-100">
            <div className="flex justify-between">
 <h1 className='text-black text-2xl font-bold'>More details</h1>
 <p onClick={()=>setOpen(false)} className='cursor-pointer text-3xl text-black'>×</p>
            </div>
             
<div className="border flex mb-3 items-center gap-4 rounded-xl p-4 mt-5">
<button className='relative cursor-pointer'>
      <Image width={70} height={70} src="/profile/avatar.png" alt="" />
<Image width={20} height={20} className='absolute bottom-1 right-1' src="/profile/edit.png" alt="" />
</button>
<div className="flex flex-col">
  <h1 className='text-black font-bold'>{profile.name}</h1>
  <p className='text-gray-400'>joined : 20-03-2020</p>
</div>

</div>
<div className="border flex items-start flex-col mb-3 rounded-xl p-4 mt-5">
  <Image width={20} height={50} src="/profile/name-tag.png" alt="" className='my-5' />
  <div className='text-gray-400'>role</div>
  <div className='text-black'>{profile.title}</div>
  <Image width={20} height={50} src="/profile/phone-rounded.png" alt="" className='my-5' />
  <div className='text-gray-400'>phone number</div>
  <div className='text-black'>(+20)123456789</div>
  <Image width={20} height={50} src="/profile/mail-02.png" alt="" className='my-5' />
  <div className='text-gray-400'>email address</div>
  <div className='text-black'>{profile.email}</div>
</div>
<div className="border flex items-start flex-col mb-3 rounded-xl p-4 mt-5">
  <Image width={20} height={20} src="/profile/elements.png" className='my-5'  alt="" />
  <div className='text-gray-400'>Birthdate</div>
  <div className='text-black'>october1,1996</div>
  <Image width={20} height={20} src="/profile/location-10.png" className='my-5' alt="" />
  <div className='text-gray-400'>location</div>
  <div className='text-black'>Cairo, Egypt</div>

</div>
<div className="bg-sky-100 items-start p-5 gap-2 rounded-xl mt-5 flex">
          <Image width={20} height={20} src="/profile/left-icon.png" alt="" />
<div className="flex flex-col">
<div className="text-black">important notice</div>
<div className="text-gray-500 text-xs">If any of the presented details is incorrect, please contact HR to adjust.</div>

</div>
</div>
            </div>
          </div>
          </>
        )
      }
  <div className="bg-gray-100 lg:w-full w-80 rounded-2xl p-5 my-4">
        <div className='flex justify-between items-start lg:items-center'>
        <div className='flex items-center lg:gap-4 gap-6'>
      <Image width={85} height={85}  src="/profile/avatar.png" alt=""  />
      <div className='flex flex-col'>
    <div className='flex gap-2 items-center'>
      <h1 className='text-black lg:text-2xl text-xs font-bold'>{profile.name}</h1>
      <button onClick={()=>setOpen(true)} className='cursor-pointer text-[8px] lg:text-base text-blue-600'> full info</button>
    </div>
    <div className="flex flex-row capitalize mt-4 lg:gap-20 gap-2 items-center">
      <div className="flex flex-col ">
        <p className='text-gray-500 lg:text-base text-xs'>role</p>
        <p className='text-black lg:text-base text-[8px]'>{profile.title}</p>
      </div>
      <div className="flex flex-col ">
        <p className='text-gray-500 lg:text-base text-xs'>phone number</p>
        <p className='text-black lg:text-base text-[8px]  '>(+20)123456789</p>
      </div>
      <div className="flex flex-col ">
        <p className='text-gray-500 lg:text-base text-xs'>email address</p>
        <p className='text-black lg:text-base text-[8px]'>{profile.email}</p>
      </div>
    </div>
      </div>
        </div>


        <button onClick={()=>router.push('/profile/points-history')} className='cursor-pointer bg-gray-200 gap-2 rounded-2xl lg:p-3 p-1 flex items-center'>
      <Image width={40} height={40} src="/profile/frame.png" alt="" className='lg:w-fit w-3' />
      <div className='flex flex-col'>
<p className='text-black text-[8px] lg:text-base'> Total points</p>
<p className='text-violet-600 lg:text-base text-[8px] text-start'>2580</p>
      </div>
        </button>
        </div>
      </div>  
      </>
      )
}

export default MyProfile