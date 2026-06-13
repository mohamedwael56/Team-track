'use client';
import Header from '@/components/header'
import React from 'react'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Chart as ChartJs,Tooltip,Legend,ArcElement } from 'chart.js'
ChartJs.register(ArcElement,Tooltip,Legend)
import { useState } from 'react';
import MyProfile from './MyProfile';
import MyTeam from './MyTeam';
import Rewards from './Rewards.jsx';
import Performance from './Performance.jsx';
import Attendance from './Attendance';
import Productivity from './Productivity';
function Page() {
  const [open,setOpen]=useState(false)
 
  return (
<div className="flex">
  <div className="flex-1 lg:ml-69">
  
    <main>
      {
        open&&(
          <>
          <div className="fixed inset-0 bg-black opacity-50 z-60"></div>
          <div className="sticky inset-0 flex justify-end mr-5 items-center z-60">
            <div className="bg-white flex flex-col rounded-2xl p-5 w-80 lg:w-100">
            <div className="flex justify-between">
 <h1 className='text-black text-2xl font-bold'>More details</h1>
 <p onClick={()=>setOpen(false)} className='cursor-pointer text-3xl text-black'>×</p>
            </div>
             
<div className="border flex mb-3 items-center gap-4 rounded-xl p-4 mt-5">
<button className='relative cursor-pointer'>
<img src="/profile/avatar.png" alt="" width={70} />
<img className='absolute bottom-1 right-1' src="/profile/edit.png" alt="" />
</button>
<div className="flex flex-col">
  <h1 className='text-black font-bold'>mohamed ahmed</h1>
  <p className='text-gray-400'>joined : 20-03-2020</p>
</div>

</div>
<div className="border flex items-start flex-col mb-3 rounded-xl p-4 mt-5">
  <img src="/profile/name-tag.png" alt="" className='my-5' />
  <div className='text-gray-400'>role</div>
  <div className='text-black'>flutter developer</div>
  <img src="/profile/phone-rounded.png" alt="" className='my-5' />
  <div className='text-gray-400'>phone number</div>
  <div className='text-black'>(+20)123456789</div>
  <img src="/profile/mail-02.png" alt="" className='my-5' />
  <div className='text-gray-400'>email address</div>
  <div className='text-black'>mohamedahmed@grandtech.io</div>
</div>
<div className="border flex items-start flex-col mb-3 rounded-xl p-4 mt-5">
<img src="/profile/elements.png" className='my-5'  alt="" />
  <div className='text-gray-400'>Birthdate</div>
  <div className='text-black'>october1,1996</div>
<img src="/profile/location-10.png" className='my-5' alt="" />
<div className='text-gray-400'>location</div>
<div className='text-black'>Cairo, Egypt</div>

</div>
<div className="bg-sky-100 items-start p-5 gap-2 rounded-xl mt-5 flex">
          <img src="/profile/left-icon.png" alt="" />
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
    <MyProfile setOpen={setOpen} />
 <MyTeam />
<Rewards />
<div className="flex lg:flex-row flex-col  justify-between items-center">
 <Performance />
  
  <div className="flex flex-col">
<Attendance />
<Productivity />

  </div>
</div>
    </main>
  </div>
</div>

  )
}

export default Page