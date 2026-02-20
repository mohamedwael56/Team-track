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
   <div className="flex flex-row gap-5 items-center">
    <Link href='' className='text-blue-500'>back</Link>
    <div className="text-black text-xl font-bold">
Add Requests
    </div>
   </div>
    
    <div className="flex mr-5">
        <button className='px-9 cursor-pointer py-2 text-white bg-blue-900 rounded-2xl'>My Requests</button>
        <Link href='/requests/team-requests'>
        <button className='px-9 cursor-pointer py-2 text-gray-500 bg-gray-200 rounded-2xl'>
            Team Requests
        </button>
        </Link>
    </div>
   </div>
   <hr />
   <div className="mb-3 font-bold items-center text-black mt-5 gap-5">
Request Type
   </div>
<div className=" mb-5 gap-5 w-full text-black grid grid-cols-5">
    <button className='cursor-pointer bg-blue-900 px-7 py-5 rounded-xl text-white'>
        <img src="/requests/stopwatch-minus.png" alt="" />
        <p className='text-start mt-1'>Leave</p>
        </button>
    <button className='cursor-pointer bg-gray-200 px-7 py-5 rounded-xl text-blue-950'>
        <img src="/requests/stopwatch-add.png" alt="" />
        <p className='text-start mt-1'>Over Time</p>
         </button>
    <button className='cursor-pointer bg-gray-200 px-7 py-5 rounded-xl text-blue-950'>
<img src="/requests/home03.png" alt="" />
<p className='text-start mt-1'>Remote Work</p>
        </button>
    <button className='cursor-pointer bg-gray-200 px-7 py-5 rounded-xl text-blue-950'>
<img src="/requests/money-minus.png" alt="" />
        <p className='text-start mt-1'>Loan</p> 
        </button>
    <button className='cursor-pointer bg-gray-200 px-7 py-5 rounded-xl text-blue-950'> 
        <img src="/requests/profit.png" alt="" />
        <p className='text-start mt-1'>Reimbursement</p>
        </button>
</div>
<div className="text-black mb-4">Requests Details</div>

  <div className="p-5 border rounded-2xl flex flex-col shadow-xs"></div>
     <div className="text-black">leave duration</div>
     <div className="flex gap-20 items-center mt-2">
        <div className="flex items-center gap-3">
        <input type="radio" name="leave" id="leave" className="accent-blue-900 "/>
<label htmlFor="leave" className='text-blue-900'>Full day</label>
       </div>
 <div className="flex items-center gap-3">
        <input type="radio" name="leave" id="leave1"     className="accent-blue-900 " />
<label htmlFor="leave1" className='text-black'>partial day</label>
       </div>        
     </div>
     <div className="flex flex-col mt-5">
<p className='text-black'>Leave Type</p>
<select name="" id="" className='rounded-lg w-full border border-gray-800 p-2 pl-4 mt-2'>
    <option value="select">select</option>
</select>
     </div>
     <div className="flex justify-between gap-5 items-center mt-5">
        <div className="relative w-full flex flex-col gap-2">
    <p className='text-black'>leave date</p>
    <button  className='px-5 py-2 flex justify-between border cursor-pointer rounded-xl '>
        <p>select date</p>
        <img src="/icons/calendar.png" alt="" />
        </button>

        </div>
        <div className="flex w-full mt-2 flex-col">
        <p className='text-black'>leave date</p>
    <button  className='px-5 py-2 flex justify-between border cursor-pointer rounded-xl '>
        <p>select date</p>
        <img src="/icons/calendar.png" alt="" />
        </button>

</div>
     </div>
     <div className="flex flex-col mt-5 ">
<p className='text-black'>reason</p>
<textarea type="text" placeholder='write reason here...' className='p-5 rounded-xl border border-gray-400 h-50  text-black'/>

     </div>
     <div className="flex flex-col mt-5">
<p className='text-black'>Attach File</p>
<input type="file" id='file' hidden />
<label htmlFor="file" className='border p-5 cursor-pointer text-center text-black border-gray-400 rounded-xl'>click to upload</label>
     </div>
      </div>
   


    </main>
  </div>
  <Sidebar />
</div>

  )
}

export default page