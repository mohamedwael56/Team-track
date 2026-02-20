'use client';
import Header from '@/components/header'
import React from 'react'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJs,Tooltip,Legend,ArcElement } from 'chart.js'
ChartJs.register(ArcElement,Tooltip,Legend)
function page() {
    const percentage = 66;

  const data={
    labels:['matric 1','matric 2','matric 3','matric 4','matric 5',],
    datasets:[{
      data:[42,42,42,78,65],
      backgroundColor:['#3F27F5','#F2F527','#F58E27','#F22A1B','#F25B1B']
    }]
  }
  return (
<div className="flex">
  <div className="flex-1 ml-69">
    <Header />
    <main>
      <div className="bg-gray-100 flex flex-col rounded-2xl p-5 my-4">
   <div className="flex mb-5 justify-between items-center">
    <div className="text-black text-xl font-bold">
Requests
    </div>
    <div className="flex mr-5">
        <button className='px-9 cursor-pointer py-2 text-gray-500 bg-gray-200 rounded-2xl'>My Requests</button>
        <button className='px-9 cursor-pointer py-2 text-white bg-blue-900  rounded-2xl'>
            Team Requests
        </button>
    </div>
   </div>
   <hr />
   <div className=" flex justify-between mb-5 items-center mt-5 gap-5">
 <div className="  w-full  relative">
                <button className='cursor-pointer'>
                <img src="/icons/search.png" alt="" className='absolute left-4 top-3 ' />
            </button>
            <input type="text" placeholder="Search tasks..." className="border border-gray-300 text-zinc-950 rounded-xl px-4 py-2 w-full pl-12" />
       </div>
       <div className="  w-150">
      <button className='border flex gap-2 items-center shadow-sm rounded-xl py-2 px-6 cursor-pointer'>
                <img src="/icons/calendar.png" alt="" />
                <p className='text-black'>this week : 09/30/2024 - 10/06/2024 </p>
            </button>
            </div>
   </div>
   <div className="flex mb-5 justify-between items-center">
<div className=" flex gap-9 text-black capitalize items-center flex-row">
    <button className='px-7 py-2 rounded-3xl bg-violet-50 border text-violet-500'>All</button>
    <button className='cursor-pointer'>Leave</button>
    <button className='cursor-pointer'>Over Time </button>
    <button className='cursor-pointer'>Remote Work</button>
    <button className='cursor-pointer'>Loan Of Use</button>
    <button className='cursor-pointer'> Reimbursement</button>
</div>
<div className="bg-blue-900 cursor-pointer flex items-center px-6 py-2 text-white rounded-xl">
    <p className='mr-4 text-lg'>+</p>
    <p>Add Request</p>
</div>
   </div>
  <div className="grid grid-cols-3 gap-5">
    <div className="flex flex-col border rounded-xl p-5">
        <div className="flex items-center flex-row gap-2">
            <img src="/mohamed.png" alt="" />
            <div className="flex flex-col text-black">
                <h1 className='text-xl'> mohamed ahmed</h1>
                <p className='text-gray-400 text-sm text-nowrap'>09/30/2024 - 10/06/2024</p>
            </div>
        </div>
        <div className="flex gap-4 mt-4">
            <button className='bg-red-100 cursor-pointer text-red-500 py-2 px-5 rounded-xl flex-1'>reject</button>
            <button className='text-white cursor-pointer bg-blue-900 px-5 py-2 rounded-xl flex-1'>accept</button>
        </div>
    </div>
    <div className="flex flex-col border rounded-xl p-5">
        <div className="flex items-center flex-row gap-2">
            <img src="/mohamed.png" alt="" />
            <div className="flex flex-col text-black">
                <h1 className='text-xl'> mohamed ahmed</h1>
                <p className='text-gray-400 text-sm text-nowrap'>09/30/2024 - 10/06/2024</p>
            </div>
        </div>
        <div className="flex gap-4 mt-4">
            <button className='bg-red-100 cursor-pointer text-red-500 py-2 px-5 rounded-xl flex-1'>reject</button>
            <button className='text-white cursor-pointer bg-blue-900 px-5 py-2 rounded-xl flex-1'>accept</button>
        </div>
    </div>
    <div className="flex flex-col border rounded-xl p-5">
        <div className="flex items-center flex-row gap-2">
            <img src="/mohamed.png" alt="" />
            <div className="flex flex-col text-black">
                <h1 className='text-xl'> mohamed ahmed</h1>
                <p className='text-gray-400 text-sm text-nowrap'>09/30/2024 - 10/06/2024</p>
            </div>
        </div>
        <div className="flex gap-4 mt-4">
            <button className='bg-red-100 cursor-pointer text-red-500 py-2 px-5 rounded-xl flex-1'>reject</button>
            <button className='text-white cursor-pointer bg-blue-900 px-5 py-2 rounded-xl flex-1'>accept</button>
        </div>
    </div>
    <div className="flex flex-col border rounded-xl p-5">
        <div className="flex items-center flex-row gap-2">
            <img src="/mohamed.png" alt="" />
            <div className="flex flex-col text-black">
                <h1 className='text-xl'> mohamed ahmed</h1>
                <p className='text-gray-400 text-sm text-nowrap'>09/30/2024 - 10/06/2024</p>
            </div>
        </div>
        <div className="flex gap-4 mt-4">
            <button className='bg-red-100 cursor-pointer text-red-500 py-2 px-5 rounded-xl flex-1'>reject</button>
            <button className='text-white cursor-pointer bg-blue-900 px-5 py-2 rounded-xl flex-1'>accept</button>
        </div>
    </div>
    <div className="flex flex-col border rounded-xl p-5">
        <div className="flex items-center flex-row gap-2">
            <img src="/mohamed.png" alt="" />
            <div className="flex flex-col text-black">
                <h1 className='text-xl'> mohamed ahmed</h1>
                <p className='text-gray-400 text-sm text-nowrap'>09/30/2024 - 10/06/2024</p>
            </div>
        </div>
        <div className="flex gap-4 mt-4">
            <button className='bg-red-100 cursor-pointer text-red-500 py-2 px-5 rounded-xl flex-1'>reject</button>
            <button className='text-white cursor-pointer bg-blue-900 px-5 py-2 rounded-xl flex-1'>accept</button>
        </div>
    </div>
    <div className="flex flex-col border rounded-xl p-5">
        <div className="flex items-center flex-row gap-2">
            <img src="/mohamed.png" alt="" />
            <div className="flex flex-col text-black">
                <h1 className='text-xl'> mohamed ahmed</h1>
                <p className='text-gray-400 text-sm text-nowrap'>09/30/2024 - 10/06/2024</p>
            </div>
        </div>
        <div className="flex gap-4 mt-4">
            <button className='bg-red-100 cursor-pointer text-red-500 py-2 px-5 rounded-xl flex-1'>reject</button>
            <button className='text-white cursor-pointer bg-blue-900 px-5 py-2 rounded-xl flex-1'>accept</button>
        </div>
    </div>
    <div className="flex flex-col border rounded-xl p-5">
        <div className="flex items-center flex-row gap-2">
            <img src="/mohamed.png" alt="" />
            <div className="flex flex-col text-black">
                <h1 className='text-xl'> mohamed ahmed</h1>
                <p className='text-gray-400 text-sm text-nowrap'>09/30/2024 - 10/06/2024</p>
            </div>
        </div>
        <div className="flex gap-4 mt-4">
            <button className='bg-red-100 cursor-pointer text-red-500 py-2 px-5 rounded-xl flex-1'>reject</button>
            <button className='text-white cursor-pointer bg-blue-900 px-5 py-2 rounded-xl flex-1'>accept</button>
        </div>
    </div>
    <div className="flex flex-col border rounded-xl p-5">
        <div className="flex items-center flex-row gap-2">
            <img src="/mohamed.png" alt="" />
            <div className="flex flex-col text-black">
                <h1 className='text-xl'> mohamed ahmed</h1>
                <p className='text-gray-400 text-sm text-nowrap'>09/30/2024 - 10/06/2024</p>
            </div>
        </div>
        <div className="flex gap-4 mt-4">
            <button className='bg-red-100 cursor-pointer text-red-500 py-2 px-5 rounded-xl flex-1'>reject</button>
            <button className='text-white cursor-pointer bg-blue-900 px-5 py-2 rounded-xl flex-1'>accept</button>
        </div>
    </div>
    <div className="flex flex-col border rounded-xl p-5">
        <div className="flex items-center flex-row gap-2">
            <img src="/mohamed.png" alt="" />
            <div className="flex flex-col text-black">
                <h1 className='text-xl'> mohamed ahmed</h1>
                <p className='text-gray-400 text-sm text-nowrap'>09/30/2024 - 10/06/2024</p>
            </div>
        </div>
        <div className="flex gap-4 mt-4">
            <button className='bg-red-100 cursor-pointer text-red-500 py-2 px-5 rounded-xl flex-1'>reject</button>
            <button className='text-white cursor-pointer bg-blue-900 px-5 py-2 rounded-xl flex-1'>accept</button>
        </div>
    </div>
    <div className="flex flex-col border rounded-xl p-5">
        <div className="flex items-center flex-row gap-2">
            <img src="/mohamed.png" alt="" />
            <div className="flex flex-col text-black">
                <h1 className='text-xl'> mohamed ahmed</h1>
                <p className='text-gray-400 text-sm text-nowrap'>09/30/2024 - 10/06/2024</p>
            </div>
        </div>
        <div className="flex gap-4 mt-4">
            <button className='bg-red-100 cursor-pointer text-red-500 py-2 px-5 rounded-xl flex-1'>reject</button>
            <button className='text-white cursor-pointer bg-blue-900 px-5 py-2 rounded-xl flex-1'>accept</button>
        </div>
    </div>
    <div className="flex flex-col border rounded-xl p-5">
        <div className="flex items-center flex-row gap-2">
            <img src="/mohamed.png" alt="" />
            <div className="flex flex-col text-black">
                <h1 className='text-xl'> mohamed ahmed</h1>
                <p className='text-gray-400 text-sm text-nowrap'>09/30/2024 - 10/06/2024</p>
            </div>
        </div>
        <div className="flex gap-4 mt-4">
            <button className='bg-red-100 cursor-pointer text-red-500 py-2 px-5 rounded-xl flex-1'>reject</button>
            <button className='text-white cursor-pointer bg-blue-900 px-5 py-2 rounded-xl flex-1'>accept</button>
        </div>
    </div>
    <div className="flex flex-col border rounded-xl p-5">
        <div className="flex items-center flex-row gap-2">
            <img src="/mohamed.png" alt="" />
            <div className="flex flex-col text-black">
                <h1 className='text-xl'> mohamed ahmed</h1>
                <p className='text-gray-400 text-sm text-nowrap'>09/30/2024 - 10/06/2024</p>
            </div>
        </div>
        <div className="flex gap-4 mt-4">
            <button className='bg-red-100 cursor-pointer text-red-500 py-2 px-5 rounded-xl flex-1'>reject</button>
            <button className='text-white cursor-pointer bg-blue-900 px-5 py-2 rounded-xl flex-1'>accept</button>
        </div>
    </div>
  </div>
      </div>
   


    </main>
  </div>
  <Sidebar />
</div>

  )
}

export default page