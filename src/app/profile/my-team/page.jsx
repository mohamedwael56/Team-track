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
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
         <Link href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <img src="/profile/avatar.png" alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold'>saif mohamed</h1>
          <p className='text-green-500 mr-5 font-bold'>88</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
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

export default page