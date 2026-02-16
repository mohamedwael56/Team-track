import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Link from 'next/link';
function Requests() {
  return (

 <div className='flex w-162 flex-col p-5 rounded-2xl bg-gray-100'>
          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl text-black">requests</h1>
              <p className="text-gray-600">Your approved and pending requests.</p>
            </div>
            <div>
              <Link href="/projects" className="text-xl text-blue-900 hover:text-blue-700 transition duration-300 ">
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
      <SwiperSlide> 
        <div className="flex w-90 border-1 p-5 rounded-xl shadow-xl flex-col justify-between gap-5 mt-5">
      <div className="flex justify-between">
        <span className="bg-violet-200 font-bold text-violet-500 px-4 py-3 rounded-xl">12 Nov</span>
              <div>
        <span className="text-orange-400  font-bold py-2 px-5 rounded-2xl  bg-orange-100">pending</span>
      </div>
      </div>
      <div className="flex flex-col">
<h1 className="text-black font-bold">Sick Leave</h1>
<p className="text-gray-400">09:00 AM -10:00 AM</p>
<p className="text-gray-400">Lorem ipsum dolor sit amet,</p>
      </div>
          </div>
          </SwiperSlide>
      <SwiperSlide> 
        <div className="flex flex-col w-90 border-1 p-5 rounded-xl shadow-xl justify-between gap-5 mt-5">
      <div className="flex justify-between">
        <span className="bg-violet-200 font-bold text-violet-500 px-4 py-3 rounded-xl">12 Nov</span>
              <div>
        <span className="text-orange-400  font-bold py-2 px-5 rounded-2xl  bg-orange-100">pending</span>
      </div>
      </div>
      <div className="flex flex-col">
<h1 className="text-black font-bold">Sick Leave</h1>
<p className="text-gray-400">09:00 AM -10:00 AM</p>
<p className="text-gray-400">Lorem ipsum dolor sit amet,</p>
      </div>
          </div>
          </SwiperSlide>
      <SwiperSlide> 
        <div className="flex flex-col w-90 border-1 p-5 rounded-xl shadow-xl justify-between gap-5 mt-5">
      <div className="flex justify-between">
        <span className="bg-violet-200 font-bold text-violet-500 px-4 py-3 rounded-xl">12 Nov</span>
              <div>
        <span className="text-orange-400  font-bold py-2 px-5 rounded-2xl  bg-orange-100">pending</span>
      </div>
      </div>
      <div className="flex flex-col">
<h1 className="text-black font-bold">Sick Leave</h1>
<p className="text-gray-400">09:00 AM -10:00 AM</p>
<p className="text-gray-400">Lorem ipsum dolor sit amet,</p>
      </div>
          </div>
          </SwiperSlide>
     
      ...
    </Swiper>
         </div>
            </div>
)
}

export default Requests