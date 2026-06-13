"use client";
import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwapShifts() {
  const icons =[{
    id:1,
      site:'Capital Restaurant',
      role:'waiter',
      break:'09:00 - 09:15 am',
      assignee:'mohamed ahmed'
  },{
    id:2,
      site:'Capital Restaurant',
      role:'waiter',
      break:'09:00 - 09:15 am',
      assignee:'mohamed ali'
  },{
    id:3,
      site:'Capital Restaurant',
      role:'waiter',
      break:'09:00 - 09:15 am',
      assignee:'mohamed hassan'
  },{
    id:4,
      site:'Capital Restaurant',
      role:'waiter',
      break:'09:00 - 09:15 am',
      assignee:'mohamed mohamed'
  },{
    id:5,
      site:'Capital Restaurant',
      role:'waiter',
      break:'09:00 - 09:15 am',
      assignee:'mohamed khaled'
  },{
    id:6,
      site:'Capital Restaurant',
      role:'waiter',
      break:'09:00 - 09:15 am',
      assignee:'mohamed samir'
  },]


  
 const data = {
    labels: ["Working", "Break", "Late"],
    datasets: [
      {
        data: [25, 50, 25],
        backgroundColor: ["#4ade80", "#facc15", "#f87171"],
      },
    ],
  };
  return (
      <div className="flex flex-col lg:w-full w-70 bg-gray-100 p-5 rounded-2xl">
        
           
 <div className="flex gap-5 my-5 justify-between items-center">
    <div className="  w-full  relative">
                <button className='cursor-pointer'>
                <img src="/icons/search.png" alt="" className='absolute left-4 top-3 ' />
            </button>
            <input type="text" placeholder="Search..." className="border border-gray-300 text-zinc-950 rounded-xl px-4 py-2 w-full pl-12" />
       </div>
       <div className='relative'>
            <img src="/icons/filter.png" alt="" className='absolute left-5 top-3 '  />
            <select name="" id="" className='border-gray-300 border rounded-xl lg:px-6 px-4 pl-8 py-3 text-zinc-950 ml-2'>
                <option value="Filter" className=' rounded-2xl'>filter</option>
            </select>
            </div>
       </div>
       <div className="lg:w-250 w-full">
 <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
 slidesPerView={1}
  breakpoints={{
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView:3,
    },
  }}      navigation
      pagination={{ clickable: true }}
    >
      {
        icons.map((icon)=>{
          return(
            <>
             <SwiperSlide key={icon.id}>
        <div className="bg-gray-200 text-base w-60 lg:w-75 rounded-2xl p-5 mx-2">
        
            <div className="flex flex-col mb-15 bg-gray-100 rounded-2xl p-3 mt-4 shadow-lg border items-center">
                <div className="flex mb-2 gap-5 p-2  text-black justify-between items-center">
                  <div className=" relative lg:w-15 lg:h-15 w-12 h-12">
                    <div>
                      <Doughnut
                        data={data}
                        options={{
                          plugins: { legend: { display: false } },
                          cutout: "70%",
                        }}
                      />
                    </div>
                    <div className="flex absolute lg:top-6 top-4  text-[8px] lg:text-xs right-4 lg:right-4">
                      <span>16</span>
                      <span>Mar</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-sm">
                  
                    <div className="flex items-center gap-3">
                      <img src="/icons/green-sign.png" alt="" />
                      <span className='lg:text-base text-nowrap text-[9px]'>clock in</span>
                      <span className="lg:text-base text-[8px] text-nowrap text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/icons/red-sign.png" alt="" />
                      <span className="lg:text-base text-[8px] text-nowrap">clock out</span>
                      <span className="lg:text-base text-[8px] text-nowrap text-red-600">05:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex ml-3 mb-2 gap-2 w-full flex-col text-sm  ">
                 <div className="flex  items-start gap-15">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="lg:text-base text-xs text-gray-400">site</p>
                    </div>
                    <div className="text-black lg:text-base text-[9px]">{icon.site}</div>
                 </div>
                 <div className="flex items-start gap-15 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="lg:text-base text-xs text-gray-400">role</p>
                    </div>
                    <div className="text-black text-start lg:text-base text-[9px] ">{icon.role}</div>
                 </div>
                 <div className="flex items-start gap-7">
                   <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="lg:text-base text-xs text-gray-400">Assignee</p>
                    </div>
                    <div className="text-black text-start lg:text-base text-[9px] ">{icon.assignee}</div>
                 </div>
                </div>
                
              </div>
            <div className="flex flex-col mb-15 bg-gray-100 rounded-2xl p-3 mt-4 shadow-lg border items-center">
                <div className="flex mb-2 gap-5 p-2  text-black justify-between items-center">
                  <div className=" relative lg:w-15 lg:h-15 w-12 h-12">
                    <div>
                      <Doughnut
                        data={data}
                        options={{
                          plugins: { legend: { display: false } },
                          cutout: "70%",
                        }}
                      />
                    </div>
                    <div className="flex absolute lg:top-6 top-4  text-[8px] lg:text-xs right-4 lg:right-4">
                      <span>16</span>
                      <span>Mar</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-sm">
                  
                    <div className="flex items-center gap-3">
                      <img src="/icons/green-sign.png" alt="" />
                      <span className='lg:text-base text-nowrap text-[9px]'>clock in</span>
                      <span className="lg:text-base text-[8px] text-nowrap text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/icons/red-sign.png" alt="" />
                      <span className=" lg:text-base text-[8px] text-nowrap">clock out</span>
                      <span className="lg:text-base text-[8px] text-nowrap text-red-600">05:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex ml-3 mb-2 gap-2 w-full flex-col text-sm  ">
                 <div className="flex  items-start gap-15">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="lg:text-base text-xs text-gray-400">site</p>
                    </div>
                    <div className="text-black lg:text-base text-[9px]">{icon.site}</div>
                 </div>
                 <div className="flex items-start gap-15 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="lg:text-base text-xs text-gray-400">role</p>
                    </div>
                    <div className="text-black text-start lg:text-base text-[9px] ">{icon.role}</div>
                 </div>
                 <div className="flex items-start gap-7">
                   <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="lg:text-base text-xs text-gray-400">Assignee</p>
                    </div>
                    <div className="text-black text-start lg:text-base text-[9px] ">{icon.assignee}</div>
                 </div>
                </div>
                
              </div>
        
              <div className="flex flex-col items-center mt-5 gap-2">
                <button className="border flex justify-center items-center flex-row gap-2 border-violet-400 text-violet-500 rounded-2xl w-full py-2 cursor-pointer ">
                    <img src="/shifts/reload.png" alt="" />
                    <p>swap</p>
                    </button>
                <button className="bg-red-500 text-white w-full rounded-2xl py-2 cursor-pointer">reject</button>
              </div>
        
         </div>
         </SwiperSlide>
      
            </>
          )
        })
      }
     
    
      ...
    </Swiper>
         </div>
          </div>
  )
}

export default SwapShifts