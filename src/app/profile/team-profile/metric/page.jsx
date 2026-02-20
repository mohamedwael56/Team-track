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
    <h1 className='text-black text-xl'>Add KPI</h1>
    </div>
    <div className="flex flex-row items-center gap-5">
        <button className='text-red-500 cursor-pointer'>discard</button>
        <button className='bg-blue-900 rounded-xl cursor-pointer text-white px-5 py-2'>Submit KPI</button>
    </div>
    </div>
    <hr />
    <div className="border mb-5 flex flex-col shadow-xl rounded-xl p-5 mt-5">
<h1 className='text-gray-400 text-xl'>work quality</h1>
<p className='text-black text-sm mb-3 mt-1'>mar 23 ,2023</p>
<div className="flex flex-row gap-5 mt-2">
    <div className="bg-gray-200 w-full items-center flex p-5 justify-between rounded-2xl">
        <p className='text-black font-bold'>target</p>
        <div className="flex w-20 relative text-sm text-nowrap items-center text-black flex-col">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            pathTransitionDuration: 0.5,
            pathColor: `rgb(30, 0, 250)`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
        <p className='absolute top-7 font-bold text-lg'>48%</p>
        </div>
    </div>
    <div className="bg-gray-200 w-full items-center flex p-5 justify-between rounded-2xl">
        <p className='text-black font-bold'>target</p>
        <div className="flex w-20 relative text-sm text-nowrap items-center text-black flex-col">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            pathTransitionDuration: 0.5,
            pathColor: `rgb(250, 0, 0)`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
        <p className='absolute top-7 font-bold text-lg'>48%</p>
        </div>
    </div>
    <div className="bg-gray-200 w-full items-center flex p-5 justify-between rounded-2xl">
        <p className='text-black font-bold'>target</p>
        <div className="flex w-20 relative text-sm text-nowrap items-center text-black flex-col">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            pathTransitionDuration: 0.5,
            pathColor: `rgb(250, 100, 0)`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
        <p className='absolute top-7 font-bold text-lg'>48%</p>
        </div>
    </div>
    <button className="bg-violet-200 cursor-pointer w-full items-center flex flex-col p-5 justify-center rounded-2xl">
       <p className='text-violet-500 text-xl font-bold '>+</p>
       <p className='text-violet-600 text-xl '>Add actual field</p>

    </button>
</div>
    </div>
    <h1 className='text-black text-xl mb-1'>Feed back</h1>
    <div className="flex gap-5 justify-between items-center">
        <div className="border w-full p-5 shadow-md rounded-xl text-zinc-800">
            Lorem ipsum, dolor sit amet consectetur
             adipisicing elit. Fuga ipsa molestiae
              dicta dolorum et beatae, doloremque 
              esse consequuntur qui officia ullam 
              incidunt consectetur necessitatibus 
              voluptate hic vel quaerat id nobis.
            Lorem ipsum dolor sit amet consectetur
            , adipisicing elit. Animi nihil harum,
             accusantium vero magnam natus, 
             dignissimos porro debitis odio 
             voluptate nesciunt a temporibus, iure 
             laudantium deleniti quos accusamus 
             modi saepe!Loremlor
            Lorem ipsum dolor, sit amet consectetur
             adipisicing elit. Dolorem enim rerum 
             veniam expedita, ullam voluptatibus. 
             Aliquid facilis qui fugit corporis 
             odio! Sapiente, aperiam? Provident rem
              saepe eius illum maxime sequi.
            Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Omnis error, 
             repudiandae minima distinctio 
             asperiores quaerat laudantium nisi 
             velit harum iusto, nihil accusamus 
             perferendis ipsam corporis 
             reprehenderit, sunt totam nemo modi?
        </div>
        <div className="border p-5 w-full bg-gray-200 h-100 shadow-md  rounded-xl text-zinc-800">
            <p className='text-black mb-2 text-xl font-bold'> description</p>
            <p> Lorem ipsum, dolor sit amet consectetur
             adipisicing elit. Fuga ipsa molestiae
              dicta dolorum et beatae, doloremque 
              esse consequuntur qui officia ullam 
              in</p>
           
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