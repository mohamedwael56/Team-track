"use client";
import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Doughnut } from 'react-chartjs-2'

function WorkQuality({actualField,inputValue,percentageValue,setOpen}) {
        const percentage = 66;
    
  return (
<div className="border mb-5 flex flex-col shadow-xl rounded-xl p-5 mt-5">
<h1 className='text-gray-600 font-bold text-xl '>work quality</h1>
<p className='text-black text-sm mb-3 mt-1'>mar 23 ,2023</p>
<div className="flex lg:flex-row flex-col gap-5 mt-2">
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
    {
      actualField?(
     <div className="bg-gray-200 w-full items-center flex p-5 justify-between rounded-2xl">
        <p className='text-black font-bold'>target</p>
        <div className="flex w-20 relative text-sm text-nowrap items-center text-black flex-col">
        <CircularProgressbar
          value={inputValue}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            pathTransitionDuration: 0.5,
            pathColor: `rgb(30, 180, 0)`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
        <p className='absolute top-7 font-bold text-lg'>{percentageValue}%</p>
        </div>
    </div>
     
      ):(
    <button onClick={()=>setOpen(true)} className="bg-violet-200 cursor-pointer w-full items-center flex flex-col p-5 justify-center rounded-2xl">
       <p className='text-violet-500 text-xl font-bold '>+</p>
       <p className='text-violet-600 text-xl '>Add actual field</p>

    </button>

      )

    }
</div>
    </div>  )
}

export default WorkQuality