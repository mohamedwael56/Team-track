"use client";
import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Link from 'next/link';
function Requests() {
  const requests=[{
    id:1,
    date:'12 Nov',
    title:'Sick Leave',
    time:'09:00 AM -10:00 AM',
    description:'Lorem ipsum dolor sit amet,',
    status:'pending'
  },
  {
    id:2,
    date:'12 Nov',
    title:'Sick Leave',
    time:'09:00 AM -10:00 AM',
    description:'Lorem ipsum dolor sit amet,',
    status:'pending'
  },
  {
    id:3,
    date:'14 Nov',
    title:'annual Leave',
    time:'09:00 AM -10:00 AM',
    description:'Lorem ipsum dolor sit amet,',
    status:'pending'
  },
  
  {
    id:4,
    date:'14 Nov',  
    
    title:'annual Leave', 
      time:'09:00 AM -10:00 AM',  
          description:'Lorem ipsum dolor sit amet,',  
          status:'approved' } ]
  return (

 <div className='flex lg:w-162 w-80 flex-col p-5 rounded-2xl bg-gray-100'>
          <div className="flex justify-between">
            <div>
              <h1 className="lg:text-2xl text-lg text-black">requests</h1>
              <p className="text-gray-600 text-xs ">Your approved and pending requests.</p>
            </div>
            <div>
              <Link href="/projects" className="lg:text-xl text-xs text-nowrap text-blue-900 hover:text-blue-700 transition duration-300 ">
                + create request
              </Link>
            </div>
          </div>
          <div>
            <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={1.5}
      navigation
      pagination={{ clickable: true }}
    >
      {
        requests.map((request,index)=>{
          return(
          
   <SwiperSlide key={request.id}> 
        <div className="flex lg:w-90 border p-5 rounded-xl shadow-xl flex-col justify-between gap-5 mt-5">
      <div className="flex justify-between">
        <span className="bg-violet-200 font-bold text-violet-500 lg:text-base text-[9px] lg:px-4 lg:py-3 px-2 py-1 rounded-xl">12 Nov</span>
              <div>
        <span className="text-orange-400 lg:text-base text-[9px] font-bold px-3 py-1 lg:py-2 lg:px-5 rounded-2xl  bg-orange-100">pending</span>
      </div>
      </div>
      <div className="flex flex-col">
<h1 className="text-black lg:text-base text-sm font-bold">Sick Leave</h1>
<p className="text-gray-400 lg:text-base text-xs">09:00 AM -10:00 AM</p>
<p className="text-gray-400 lg:text-base text-xs">Lorem ipsum dolor sit amet,</p>
      </div>
          </div>
          </SwiperSlide>
          
          )
      })}
   
  
     
    </Swiper>
         </div>
            </div>
)
}

export default Requests