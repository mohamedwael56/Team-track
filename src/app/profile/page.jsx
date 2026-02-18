'use client';
import Header from '@/components/header'
import React from 'react'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJs,Tooltip,Legend,ArcElement } from 'chart.js'
ChartJs.register(ArcElement,Tooltip,Legend)
function page() {
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
      <div className="bg-gray-100 rounded-2xl p-5 my-4">
        <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
      <img src="/profile/avatar.png" alt="" />
      <div className='flex flex-col'>
    <div className='flex gap-2 items-center'>
      <h1 className='text-black text-2xl font-bold'>mohamed wael</h1>
      <Link href='' className='text-blue-600'> full info</Link>
    </div>
    <div className="flex flex-row capitalize mt-4 gap-20 items-center">
      <div className="flex flex-col ">
        <p className='text-gray-500'>role</p>
        <p className='text-black'>flutter developer</p>
      </div>
      <div className="flex flex-col ">
        <p className='text-gray-500'>phone number</p>
        <p className='text-black'>(+20)123456789</p>
      </div>
      <div className="flex flex-col ">
        <p className='text-gray-500'>email address</p>
        <p className='text-black'>flutter developer</p>
      </div>
    </div>
      </div>
        </div>


        <div className='bg-gray-200 gap-2 rounded-2xl p-3 flex items-center'>
      <img src="/profile/frame.png" alt="" />
      <div className='flex flex-col'>
<p className='text-black'> Total price</p>
<p className='text-violet-600'>2580</p>
      </div>
        </div>
        </div>
      </div>
<div className="bg-gray-100 rounded-2xl p-5  my-4">
  <div className="flex flex-col ">
    <div className="flex justify-between items-center">
      <div className='flex flex-col'>
      <h1 className='text-black text-xl font-bold'>rewards</h1>
<p className='text-gray-400'>Purchase these rewards at the store.</p>
</div>
<div>
<Link href='/rewards' className='text-blue-600'>view all</Link>
</div>
    </div>
    <div className='mt-3 flex flex-row gap-3'>
    <img src="/profile/waffarha.png" alt="" />
    <img src="/profile/amazon.png" alt="" />
    <img src="/profile/spotify.png" alt="" />
    <img src="/profile/netflix.png" alt="" />
    <img src="/profile/waffarha.png" alt="" />
    <img src="/profile/amazon.png" alt="" />
    <img src="/profile/spotify.png" alt="" />
    <img src="/profile/netflix.png" alt="" />
    <img src="/profile/waffarha.png" alt="" />
    <img src="/profile/amazon.png" alt="" />
    <img src="/profile/spotify.png" alt="" />
    <img src="/profile/netflix.png" alt="" />
    </div>
  </div>
</div>
<div className="flex  justify-between items-center">
  <div className='bg-gray-100  flex flex-col rounded-2xl p-5 my-4'>
<div className='flex flex-col'>
<h1 className='text-black'>performance</h1>
<p className='text-gray-400'>Your monthly analized performance.</p>
</div>
<div className='w-80 h-80 my-4'>
<Doughnut
data={data}
options={{cutout:'0%',plugins:{legend:{position:'bottom'}}}}
/>
</div>
<div className='flex flex-col w-full text-black'>
 <div className="flex justify-between mb-2 ">
<h1>performance</h1>
<p className='text-green-500 font-bold'>88</p>
 </div>
  
  <div className=' relative my-2 bg-green-200 rounded-2xl h-3'>
    <div className=" absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-green-600 rounded-full transition-all duration-500" style={{left:'66%'}}>
    </div>
    </div>
    <div className="grid grid-cols-6 w-full my-2 gap-10">
      <div>0</div>
      <div>20</div>
      <div>40</div>
      <div>60</div>
      <div>80</div>
      <div>100</div>
  </div>
  <div className="bg-green-200 capitalize p-5 flex items-center justify-center rounded-xl text-green-600">
    good performance
  </div>
</div>
  </div>
  
  <div className="flex flex-col">
<div className="bg-gray-100  flex flex-col rounded-2xl p-5 mt-5">
<div className="flex justify-between items-center">
  <div className='flex flex-col'>
    <h1 className='text-black'>attendance</h1>
    <p className='text-gray-400'>Attendance history analized during the month.</p>
  </div>
  <div className="flex ml-20 ">
    <button className='cursor-pointer text-black bg-gray-200 py-1 px-2 rounded-2xl'>All time</button>
    <button className='cursor-pointer text-gray-400 bg-gray-200 py-1 px-2 rounded-2xl'>30 days</button>
    <button className='cursor-pointer text-gray-400 bg-gray-200 py-1 px-2 rounded-2xl'>90 days</button>
  </div>
</div>
<div className="mt-2 grid grid-cols-2 gap-3">
<div className="rounded-xl flex flex-col border shadow-md p-3">
<div className="flex justify-between items-center">
<h1 className='text-zinc-700'>attendance rate</h1>
<p className='text-black'>42%</p>
</div>
<div className="mt-5 relative bg-green-200 rounded-full h-3 w-full">
  <div className="bg-green-600 rounded-full w-full h-3  transition-all duration-500" style={{width:'50%'}}>
  </div>
  <div
    className="absolute top-1/2 -translate-y-1/2 bg-green-600 text-white text-xs font-bold
               w-7 h-7 rounded-full flex items-center justify-center
               transition-all duration-500 "
    style={{ left: `calc(50% - 10px)` }}
  >200</div>
</div>
<div className="flex mt-3 mb-1 text-gray-400 justify-between items-center">
  <p>0 Days</p>
  <p>300 Days</p>
</div>
</div>
<div className="rounded-xl flex flex-col border shadow-md p-3">
<div className="flex justify-between items-center">
<h1 className='text-zinc-700'>attendance rate</h1>
<p className='text-black'>42%</p>
</div>
<div className="mt-5 relative bg-green-200 rounded-full h-3 w-full">
  <div className="bg-green-600 rounded-full w-full h-3  transition-all duration-500" style={{width:'50%'}}>
  </div>
  <div
    className="absolute top-1/2 -translate-y-1/2 bg-green-600 text-white text-xs font-bold
               w-7 h-7 rounded-full flex items-center justify-center
               transition-all duration-500 "
    style={{ left: `calc(50% - 10px)` }}
  >200</div>
</div>
<div className="flex mt-3 mb-1 text-gray-400 justify-between items-center">
  <p>0 Hours</p>
  <p>40 Hours</p>
</div>
</div>
<div className="rounded-xl flex flex-col border shadow-md p-3">
<div className="flex justify-between items-center">
<h1 className='text-zinc-700'>attendance rate</h1>
<p className='text-black'>42%</p>
</div>
<div className="mt-5 relative bg-orange-200 rounded-full h-3 w-full">
  <div className="bg-orange-600 rounded-full w-full h-3  transition-all duration-500" style={{width:'50%'}}>
  </div>
  <div
    className="absolute top-1/2 -translate-y-1/2 bg-orange-600 text-white text-xs font-bold
               w-7 h-7 rounded-full flex items-center justify-center
               transition-all duration-500 "
    style={{ left: `calc(50% - 10px)` }}
  >200</div>
</div>
<div className="flex mt-3 mb-1 text-gray-400 justify-between items-center">
  <p>0 Days</p>
  <p>100 Days</p>
</div>

</div>
<div className="bg-gray-200 p-5 items-center rounded-xl flex justify-between border shadow-md ">
<h1 className='text-black font-bold'>average lateness</h1>
<p className='text-black font-bold'>82</p>
</div>
</div>
</div>

<div className="bg-gray-100  flex flex-col rounded-2xl p-5 my-4">
<div className="flex justify-between items-center">
  <div className='flex flex-col'>
    <h1 className='text-black'>task productivity</h1>
    <p className='text-gray-400'>Task Productivity analized during the month.</p>
  </div>
  <div className="flex ml-20 ">
    <button className='cursor-pointer text-black bg-gray-200 py-1 px-2 rounded-2xl'>All time</button>
    <button className='cursor-pointer text-gray-400 bg-gray-200 py-1 px-2 rounded-2xl'>30 days</button>
    <button className='cursor-pointer text-gray-400 bg-gray-200 py-1 px-2 rounded-2xl'>90 days</button>
  </div>
</div>
<div className="rounded-xl flex flex-col border shadow-md p-3">
  <div className="flex justify-between mb-3">
    <h1 className='text-gray-400'>deadline compliance</h1>
    <p className='text-black'>34</p>
  </div>
<div className="relative w-full bg-red-200 rounded-full h-2">
  <div className="bg-red-600 rounded-full h-2" style={{width:'35%'}} />
  <div className="top-1 -translate-y-1/2 h-6 w-6 text-white rounded-full items-center justify-center flex absolute bg-red-600 " style={{left:"calc(35% - 5px)"}}>
  34</div>
</div>
</div>
<div className="flex items-center justify-between">
  <div className="rounded-xl my-2 flex flex-col border shadow-md p-3">
<div className="flex justify-between items-center">
  <h1 className='text-gray-400'>Task Completion Rate</h1>
  <p className='text-black ml-20'>90</p>
</div>
<div className="relative bg-green-200 h-2 my-2 rounded-full ">
  <div className="bg-green-600 h-3 rounded-full" style={{width:"80%"}}></div>
  <div className="absolute top-1 -translate-y-1/2 flex items-center justify-center text-white h-6 w-6 bg-green-600 rounded-full" style={{left:"calc(80% - 10px)"}}>
  90
  </div>
</div>
<div className="flex justify-between">
  <h1 className='text-gray-400'>0 Tasks</h1>
  <p className='text-gray-400'>100 Tasks</p>
</div>
  </div>
  <div className="rounded-xl flex-1 h-24 bg-gray-200 items-center ml-2 flex justify-between border shadow-md p-3">
    <div className="flex flex-col text-black">
      <h1>Average Tasks</h1>
      <p>Delay (in days)</p>
    </div>
    <div className="text-black items-center flex text-xl">
      82
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