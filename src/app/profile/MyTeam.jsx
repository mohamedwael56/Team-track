import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Link from 'next/link'
import 'swiper/css';
import 'swiper/css/pagination';
function MyTeam() {
  return (
     <div className="bg-gray-100 w-80 lg:w-full flex flex-col rounded-2xl p-5 my-4">
        <div className="flex items-center justify-between">
<div className="flex flex-col">
  <h1 className='text-black lg:text-base text-xs'>My team</h1>
  <p className='text-gray-400 lg:text-base text-[10px]'>Here you can see all the members at your team.</p>
</div>
<div className="">
  <Link href='/profile/my-team' className='text-blue-500 lg:text-base text-[8px]'>view all</Link>
</div>
        </div>
        <div className='lg:w-250 w-full'>
         <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      breakpoints={{
        0:{
          slidesPerView: 1},
        768:{
          slidesPerView: 2,
        },
        1024:{
          slidesPerView:3,

        }
      }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide> 
        <Link href='/profile/team-profile' className="flex items-center gap-2 my-5 shadow rounded-2xl border">
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
        </SwiperSlide>
      <SwiperSlide>
         <Link href='/profile/team-profile' className="flex items-center gap-2 my-5 shadow rounded-2xl border">
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
        </SwiperSlide>
      <SwiperSlide>
         <Link href='/profile/team-profile' className="flex items-center gap-2 my-5 shadow rounded-2xl border">
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
        </SwiperSlide>
      <SwiperSlide>
         <Link href='/profile/team-profile' className="flex items-center gap-2 my-5 shadow rounded-2xl border">
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
        </SwiperSlide>
      
      ...
    </Swiper>
       </div>
      </div>  )
}

export default MyTeam