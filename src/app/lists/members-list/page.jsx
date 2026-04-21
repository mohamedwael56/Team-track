'use client';
import Header from '@/components/header'
import React from 'react'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJs,Tooltip,Legend,ArcElement } from 'chart.js'
ChartJs.register(ArcElement,Tooltip,Legend)
function Page() {
    const percentage = 66;

  const data={
    labels:['matric 1','matric 2','matric 3','matric 4','matric 5',],
    datasets:[{
      data:[42,42,42,78,65],
      backgroundColor:['#3F27F5','#F2F527','#F58E27','#F22A1B','#F25B1B']
    }]
  }
const [confirmDeleteMessage,setConfirmDeleteMessage]=useState(false)
 const [deleteMessage,setDeleteMessage]=useState(false)
 return (
<div className="flex">
  <div className="flex-1 ml-69">
    <Header />
    <main>
      {
        confirmDeleteMessage&&(
          <>
          <div className="bg-black opacity-50 fixed inset-0 z-50"></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white w-120 items-center flex flex-col rounded-2xl p-5">
<img src="/icons/delete.png" className='mb-5' alt="" width={100}/>
        <p className='text-black text-xl mb-5'>remove member?</p>
        <p className='text-gray-400 text-center w-[400px]'>are you sure you want to remove this member?, this action is irreversible!</p>
        <div className="w-full flex gap-2 my-5">
          <button className='border cursor-pointer border-blue-900 text-blue-900 w-full px-5 py-2 rounded-xl ml-2' onClick={()=>setConfirmDeleteMessage(false)}>cancel</button>
          <button onClick={()=>{setConfirmDeleteMessage(false)
            setDeleteMessage(true)
          }} className='bg-red-500 cursor-pointer text-white px-5 py-2 w-full rounded-xl'>Remove</button>

        </div>
            </div>

          </div>
          </>
        )
      }
      {
        deleteMessage&&(
          <>
                    <div className="bg-black opacity-50 fixed inset-0 z-50"></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white w-100 items-center flex flex-col rounded-2xl p-5">
<img src="/icons/icon.png" className='mb-5' alt="" width={100}/>
        <p className='text-black text-xl mb-5'> member removed!</p>
        <p className='text-gray-400 text-center w-[350px]'>this member has been successfully removed from your list.</p>
        <div className="w-full flex gap-2 my-5">
          <button className='bg-blue-900 cursor-pointer text-white px-5 py-2 w-full rounded-xl' onClick={()=>setDeleteMessage(false)}>Got it</button>
        </div>
            </div>

          </div>

          </>
        )
      }
      
      <div className="bg-gray-100 flex flex-col rounded-2xl p-5 my-4">
    <div className="flex items-center mb-5 justify-between">
    <div className="flex gap-5 items-center flex-row">
    <Link href='/profile/team-profile' className='text-blue-500'>
    back
    </Link>
    <h1 className='text-black text-xl font-bold'>My team</h1>
    </div>
    <div className="flex flex-row items-center gap-5">
        <button className='text-red-500 cursor-pointer'>discard</button>
        <button className='bg-blue-900 rounded-xl cursor-pointer text-white px-5 py-2'>Submit KPI</button>
    </div>
    </div>
    <hr />
    <div className="flex-1 mb-5 relative">
                <button className='cursor-pointer'>
                <img src="/icons/search.png" alt="" className='absolute left-4 top-3 ' />
            </button>
            <input type="text" placeholder="Search tasks..." className="border border-gray-300 text-zinc-950 rounded-xl px-4 py-2 w-full pl-12" />
       </div>
       <div className="grid grid-cols-3 gap-5">
         <div className="group flex overflow-hidden  hover:bg-zinc-600 relative items-center gap-2 p-1 shadow rounded-2xl border">
         <Link  href="/profile/team-profile" className=' flex hover:brightness-75'>
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black text-nowrap font-sm font-bold'>mohamed ahmed</h1>
          <p className='text-green-500 font-bold bg-green-200 rounded-xl px-3'>member</p>
            </div>
            <div className=" text-black rounded-full">
flutter developer
            </div>
          </div>

          </Link>
          <button onClick={()=>setConfirmDeleteMessage(true)} className='absolute object-cover bg-red-500 text-white right-0 px-6 cursor-pointer opacity-0 translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out  py-8 rounded-xl'>Delete</button>
        </div>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2 p-1 shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black text-nowrap font-sm font-bold'>mohamed ahmed</h1>
          <p className='text-orange-500 font-bold bg-orange-200 rounded-xl px-3'>sent</p>
            </div>
            <div className=" text-black rounded-full">
flutter developer
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2 p-1 shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black text-nowrap font-sm font-bold'>mohamed ahmed</h1>
          <p className='text-green-500 font-bold bg-green-200 rounded-xl px-3'>member</p>
            </div>
            <div className=" text-black rounded-full">
flutter developer
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2 p-1 shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black text-nowrap font-sm font-bold'>mohamed ahmed</h1>
          <p className='text-green-500 font-bold bg-green-200 rounded-xl px-3'>member</p>
            </div>
            <div className=" text-black rounded-full">
flutter developer
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2 p-1 shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black text-nowrap font-sm font-bold'>mohamed ahmed</h1>
          <p className='text-green-500 font-bold bg-green-200 rounded-xl px-3'>member</p>
            </div>
            <div className=" text-black rounded-full">
flutter developer
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2 p-1 shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black text-nowrap font-sm font-bold'>mohamed ahmed</h1>
          <p className='text-green-500 font-bold bg-green-200 rounded-xl px-3'>member</p>
            </div>
            <div className=" text-black rounded-full">
flutter developer
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2 p-1 shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black text-nowrap font-sm font-bold'>mohamed ahmed</h1>
          <p className='text-green-500 font-bold bg-green-200 rounded-xl px-3'>member</p>
            </div>
            <div className=" text-black rounded-full">
flutter developer
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2 p-1 shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black text-nowrap font-sm font-bold'>mohamed ahmed</h1>
          <p className='text-orange-500 font-bold bg-orange-200 rounded-xl px-3'>sent</p>
            </div>
            <div className=" text-black rounded-full">
flutter developer
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2 p-1 shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black text-nowrap font-sm font-bold'>mohamed ahmed</h1>
          <p className='text-orange-500 font-bold bg-orange-200 rounded-xl px-3'>sent</p>
            </div>
            <div className=" text-black rounded-full">
flutter developer
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2 p-1 shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black text-nowrap font-sm font-bold'>mohamed ahmed</h1>
          <p className='text-green-500 font-bold bg-green-200 rounded-xl px-3'>member</p>
            </div>
            <div className=" text-black rounded-full">
flutter developer
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2 p-1 shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black text-nowrap font-sm font-bold'>mohamed ahmed</h1>
          <p className='text-green-500 font-bold bg-green-200 rounded-xl px-3'>member</p>
            </div>
            <div className=" text-black rounded-full">
flutter developer
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2 p-1 shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black text-nowrap font-sm font-bold'>mohamed ahmed</h1>
          <p className='text-green-500 font-bold bg-green-200 rounded-xl px-3'>member</p>
            </div>
            <div className=" text-black rounded-full">
flutter developer
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2 p-1 shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black text-nowrap font-sm font-bold'>mohamed ahmed</h1>
          <p className='text-green-500 font-bold bg-green-200 rounded-xl px-3'>member</p>
            </div>
            <div className=" text-black rounded-full">
flutter developer
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2 p-1 shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black text-nowrap font-sm font-bold'>mohamed ahmed</h1>
          <p className='text-green-500 font-bold bg-green-200 rounded-xl px-3'>member</p>
            </div>
            <div className=" text-black rounded-full">
flutter developer
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2 p-1 shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black text-nowrap font-sm font-bold'>mohamed ahmed</h1>
          <p className='text-green-500 font-bold bg-green-200 rounded-xl px-3'>member</p>
            </div>
            <div className=" text-black rounded-full">
flutter developer
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2 p-1 shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black text-nowrap font-sm font-bold'>mohamed ahmed</h1>
          <p className='text-green-500 font-bold bg-green-200 rounded-xl px-3'>member</p>
            </div>
            <div className=" text-black rounded-full">
flutter developer
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2 p-1 shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black text-nowrap font-sm font-bold'>mohamed ahmed</h1>
          <p className='text-green-500 font-bold bg-green-200 rounded-xl px-3'>member</p>
            </div>
            <div className=" text-black rounded-full">
flutter developer
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2 p-1 shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black text-nowrap font-sm font-bold'>mohamed ahmed</h1>
          <p className='text-green-500 font-bold bg-green-200 rounded-xl px-3'>member</p>
            </div>
            <div className=" text-black rounded-full">
flutter developer
            </div>
          </div>
        </Link>
       
       
       </div>
      </div>
   


    </main>
  </div>
  <Sidebar />
</div>

  )
}

export default Page