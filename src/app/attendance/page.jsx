'use client';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Sidebar from '@/components/sidebar'
import React from 'react'
import Header from '@/components/header'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


function page() {
    
    const data = {
  labels: ['Working', 'Break', 'Late'],
  datasets: [
    {
      data: [25, 50, 25],
      backgroundColor: ['#4ade80', '#facc15', '#f87171'],
    },
  ],
};

    const percentage=66;
  return (
    <div className='flex'>
        <div className="flex-1 ml-69">
        <Header />
        <main>
            <div className='flex flex-col bg-gray-100 p-5 rounded-2xl'>
            <div className="flex justify-between items-center">
                <h1 className='text-black text-2xl'>attendance</h1>
            <div className='flex gap-3'>
            <button className='border flex gap-2 items-center shadow-sm rounded-2xl py-3 px-4 cursor-pointer'>
                <img src="/icons/filter.png" alt="" />
                <p className='text-black'>filter</p>
            </button>
            <button className='border flex gap-2 items-center shadow-sm rounded-2xl py-3 px-4 cursor-pointer'>
                <img src="/icons/calendar.png" alt="" />
                <p className='text-black'>this week : 09/30/2024 - 10/06/2024 </p>
            </button>
            
            </div>
            </div>
            <div className='grid grid-cols-4 my-4 gap-3'>
        <div className="bg-gray-200 p-3 rounded-2xl flex gap-3 items-center">
        <img src="/attendance/finger-print.png"  alt="" />
        <div className='flex flex-col'>
<h1 className='text-2xl text-black'>28:23:56</h1>
<p className='text-gray-600'>Total working hours</p>
        </div>
        </div>
        <div className="bg-gray-200 p-3 rounded-2xl flex gap-3 items-center">
        <img src="/attendance/lateness.png"  alt="" />
        <div className='flex flex-col'>
<h1 className='text-2xl text-black'>27:00</h1>
<p className='text-gray-600'>Total hours late</p>
        </div>
        </div>
        <div className="bg-gray-200 p-3 rounded-2xl flex gap-3 items-center">
        <img src="/attendance/dollar.png"  alt="" />
        <div className='flex flex-col'>
<h1 className='text-2xl text-black'>205 $</h1>
<p className='text-gray-600 text-nowrap text-sm'>Month salary deductions</p>
        </div>
        </div>
        <div className="bg-gray-200 p-3 rounded-2xl flex gap-3 items-center">
        <img src="/attendance/timer.png"  alt="" />
        <div className='flex flex-col'>
<h1 className='text-2xl text-black'>21:05</h1>
<p className='text-gray-600'>Remaining hours</p>
        </div>
        </div>
            </div>
            <hr />
            <div className="grid grid-cols-4 gap-3">
 <div className="flex flex-col rounded-2xl  mt-4 shadow-lg border items-center">
            <div className='flex mb-2 gap-5 p-2  text-black justify-between items-center'>
<div className=' relative w-20 h-20' >
    <div>
<Doughnut data={data} 
options={{ plugins: { legend: { display: false } },
 cutout: '70%' }} />
 </div>
 <div className='flex absolute top-7 right-5'>
<span>13</span>
<span>Mar</span>
 </div>
</div>
<div className='flex flex-col items-center gap-2'>
    <p className='bg-green-200 text-green-600 px-3 rounded-2xl'> completed</p>
<div className='flex items-center gap-3'>
    <img src="/icons/green-sign.png" alt="" />
    <span>clock in</span>
    <span className='text-green-600'>09:00</span>
</div>
<div className='flex items-center gap-3'>
    <img src="/icons/red-sign.png" alt="" />
    <span>clock out</span>
    <span className='text-red-600'>05:00</span>
</div>
</div>
            </div>
                                <hr className='w-full' />


          <div className="flex w-full flex-col text-black mt-2">
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/green-sign.png" alt="" />
<p>working hrs</p>
</div>
<div>
<p>07:55</p>
</div>
</div>
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/purple-sign.png" alt=""  />
<p>break hrs</p>
</div>
<div>
<p>07:55</p>
</div>
</div>
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/orange-sign.png" alt="" />
<p>late hrs</p>
</div>
<div>
<p>07:55</p>
</div>
</div>
            
          </div>
           </div>
 <div className="flex flex-col rounded-2xl  mt-4 shadow-lg border items-center">
            <div className='flex mb-2 gap-5 p-2  text-black justify-between items-center'>
<div className=' relative w-20 h-20' >
    <div>
<Doughnut data={data} 
options={{ plugins: { legend: { display: false } },
 cutout: '70%' }} />
 </div>
 <div className='flex absolute top-7 right-5'>
<span>13</span>
<span>Mar</span>
 </div>
</div>
<div className='flex flex-col items-center gap-2'>
    <p className='bg-green-200 text-green-600 px-3 rounded-2xl'> completed</p>
<div className='flex items-center gap-3'>
    <img src="/icons/green-sign.png" alt="" />
    <span>clock in</span>
    <span className='text-green-600'>09:00</span>
</div>
<div className='flex items-center gap-3'>
    <img src="/icons/red-sign.png" alt="" />
    <span>clock out</span>
    <span className='text-red-600'>05:00</span>
</div>
</div>
            </div>
                                <hr className='w-full' />


          <div className="flex w-full flex-col text-black mt-2">
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/green-sign.png" alt="" />
<p>working hrs</p>
</div>
<div>
<p>07:55</p>
</div>
</div>
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/purple-sign.png" alt=""  />
<p>break hrs</p>
</div>
<div>
<p>07:55</p>
</div>
</div>
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/orange-sign.png" alt="" />
<p>late hrs</p>
</div>
<div>
<p>07:55</p>
</div>
</div>
            
          </div>
           </div>
 <div className="flex flex-col rounded-2xl  mt-4 shadow-lg border items-center">
            <div className='flex mb-2 gap-5 p-2  text-black justify-between items-center'>
<div className=' relative w-20 h-20' >
    <div>
<Doughnut data={data} 
options={{ plugins: { legend: { display: false } },
 cutout: '70%' }} />
 </div>
 <div className='flex absolute top-7 right-5'>
<span>13</span>
<span>Mar</span>
 </div>
</div>
<div className='flex flex-col items-center gap-2'>
    <p className='bg-green-200 text-green-600 px-3 rounded-2xl'> completed</p>
<div className='flex items-center gap-3'>
    <img src="/icons/green-sign.png" alt="" />
    <span>clock in</span>
    <span className='text-green-600'>09:00</span>
</div>
<div className='flex items-center gap-3'>
    <img src="/icons/red-sign.png" alt="" />
    <span>clock out</span>
    <span className='text-red-600'>05:00</span>
</div>
</div>
            </div>
                                <hr className='w-full' />


          <div className="flex w-full flex-col text-black mt-2">
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/green-sign.png" alt="" />
<p>working hrs</p>
</div>
<div>
<p>07:55</p>
</div>
</div>
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/purple-sign.png" alt=""  />
<p>break hrs</p>
</div>
<div>
<p>07:55</p>
</div>
</div>
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/orange-sign.png" alt="" />
<p>late hrs</p>
</div>
<div>
<p>07:55</p>
</div>
</div>
            
          </div>
           </div>
 <div className="flex flex-col rounded-2xl  mt-4 shadow-lg border items-center">
            <div className='flex mb-2 gap-5 p-2  text-black justify-between items-center'>
<div className=' relative w-20 h-20' >
    <div>
<Doughnut data={data} 
options={{ plugins: { legend: { display: false } },
 cutout: '70%' }} />
 </div>
 <div className='flex absolute top-7 right-5'>
<span>13</span>
<span>Mar</span>
 </div>
</div>
<div className='flex flex-col items-center gap-2'>
    <p className='bg-green-200 text-green-600 px-3 rounded-2xl'> completed</p>
<div className='flex items-center gap-3'>
    <img src="/icons/green-sign.png" alt="" />
    <span>clock in</span>
    <span className='text-green-600'>09:00</span>
</div>
<div className='flex items-center gap-3'>
    <img src="/icons/red-sign.png" alt="" />
    <span>clock out</span>
    <span className='text-red-600'>05:00</span>
</div>
</div>
            </div>
                                <hr className='w-full' />


          <div className="flex w-full flex-col text-black mt-2">
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/green-sign.png" alt="" />
<p>working hrs</p>
</div>
<div>
<p>07:55</p>
</div>
</div>
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/purple-sign.png" alt=""  />
<p>break hrs</p>
</div>
<div>
<p>07:55</p>
</div>
</div>
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/orange-sign.png" alt="" />
<p>late hrs</p>
</div>
<div>
<p>07:55</p>
</div>
</div>
            
          </div>
           </div>
 <div className="flex flex-col rounded-2xl  mt-4 shadow-lg border items-center">
            <div className='flex mb-2 gap-5 p-2  text-black justify-between items-center'>
<div className=' relative w-20 h-20' >
    <div>
<Doughnut data={data} 
options={{ plugins: { legend: { display: false } },
 cutout: '70%' }} />
 </div>
 <div className='flex absolute top-7 right-5'>
<span>13</span>
<span>Mar</span>
 </div>
</div>
<div className='flex flex-col items-center gap-2'>
    <p className='bg-gray-200 text-gray-600 px-3 rounded-2xl'> no attendance</p>
<div className='flex items-center gap-3'>
    <img src="/icons/green-sign.png" alt="" />
    <span>clock in</span>
    <span className='text-green-600'>--</span>
</div>
<div className='flex items-center gap-3'>
    <img src="/icons/red-sign.png" alt="" />
    <span>clock out</span>
    <span className='text-red-600'>--</span>
</div>
</div>
            </div>
                                <hr className='w-full' />


          <div className="flex w-full flex-col text-black mt-2">
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/green-sign.png" alt="" />
<p>working hrs</p>
</div>
<div>
<p>--</p>
</div>
</div>
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/purple-sign.png" alt=""  />
<p>break hrs</p>
</div>
<div>
<p>--</p>
</div>
</div>
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/orange-sign.png" alt="" />
<p>late hrs</p>
</div>
<div>
<p>--</p>
</div>
</div>
            
          </div>
           </div>
 <div className="flex flex-col rounded-2xl  mt-4 shadow-lg border items-center">
            <div className='flex mb-2 gap-5 p-2  text-black justify-between items-center'>
<div className=' relative w-20 h-20' >
    <div>
<Doughnut data={data} 
options={{ plugins: { legend: { display: false } },
 cutout: '70%' }} />
 </div>
 <div className='flex absolute top-7 right-5'>
<span>13</span>
<span>Mar</span>
 </div>
</div>
<div className='flex flex-col items-center gap-2'>
    <p className='bg-green-200 text-green-600 px-3 rounded-2xl'> completed</p>
<div className='flex items-center gap-3'>
    <img src="/icons/green-sign.png" alt="" />
    <span>clock in</span>
    <span className='text-green-600'>09:00</span>
</div>
<div className='flex items-center gap-3'>
    <img src="/icons/red-sign.png" alt="" />
    <span>clock out</span>
    <span className='text-red-600'>05:00</span>
</div>
</div>
            </div>
                                <hr className='w-full' />


          <div className="flex w-full flex-col text-black mt-2">
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/green-sign.png" alt="" />
<p>working hrs</p>
</div>
<div>
<p>07:55</p>
</div>
</div>
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/purple-sign.png" alt=""  />
<p>break hrs</p>
</div>
<div>
<p>07:55</p>
</div>
</div>
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/orange-sign.png" alt="" />
<p>late hrs</p>
</div>
<div>
<p>07:55</p>
</div>
</div>
            
          </div>
           </div>
 <div className="flex flex-col rounded-2xl  mt-4 shadow-lg border items-center">
            <div className='flex mb-2 gap-5 p-2  text-black justify-between items-center'>
<div className=' relative w-20 h-20' >
    <div>
<Doughnut data={data} 
options={{ plugins: { legend: { display: false } },
 cutout: '70%' }} />
 </div>
 <div className='flex absolute top-7 right-5'>
<span>13</span>
<span>Mar</span>
 </div>
</div>
<div className='flex flex-col items-center gap-2'>
    <p className='bg-red-200 text-red-600 px-3 rounded-2xl'> Incompleted</p>
<div className='flex items-center gap-3'>
    <img src="/icons/green-sign.png" alt="" />
    <span>clock in</span>
    <span className='text-green-600'>09:00</span>
</div>
<div className='flex items-center gap-3'>
    <img src="/icons/red-sign.png" alt="" />
    <span>clock out</span>
    <span className='text-red-600'>-- --</span>
</div>
</div>
            </div>
                                <hr className='w-full' />


          <div className="flex w-full flex-col text-black mt-2">
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/green-sign.png" alt="" />
<p>working hrs</p>
</div>
<div>
<p>07:55</p>
</div>
</div>
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/purple-sign.png" alt=""  />
<p>break hrs</p>
</div>
<div>
<p>07:55</p>
</div>
</div>
<div className=" flex p-2 justify-between mb-2">
<div className='flex items-center gap-1'>
<img src="/icons/orange-sign.png" alt="" />
<p>late hrs</p>
</div>
<div>
<p>07:55</p>
</div>
</div>
            
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