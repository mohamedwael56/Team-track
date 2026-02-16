import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
function Meetings() {
  return (
 <div className="flex flex-col gap-2 h-80 w-130 mr-5 bg-gray-100 p-5 rounded-2xl ">
                  <div className="flex justify-between mb-6">
                    <div>
                      <h1 className="text-xl text-black">upcoming meetings</h1>
                      <p className="text-gray-600">
                        You can see the upcoming meetings here.
                      </p>
                    </div>
                    <div>
                      <Link
                        href="/projects"
                        className="text-xl text-blue-900 hover:text-blue-700 transition duration-300 "
                      >
                        + create meeting
                      </Link>
                    </div>
                  </div>
                  <div>
                   <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1.5}
      navigation
    >
      <SwiperSlide>
        <div className="w-80 bg-gray-200 rounded-2xl py-3 px-6">
                <div className="flex items-center gap-3 my-5">
                  <div className="flex flex-col items-center bg-violet-200 text-violet-500 py-2 px-5 rounded-xl">
                <span className="text-lg font-bold">12</span>
                <span>Nov</span>
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-black">
                      design review 
                    </h1>
                    <p className="text-gray-600">
                      10:00 AM - 11:00 AM
                    </p>
                  </div>
             
                </div>
   <div className="flex justify-between">
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center mt-1 -space-x-2">
              <img src="Oval.png" alt="" />
              <img src="Oval2.png" alt="" />
              <img src="Oval3.png" alt="" />
                </div>
                <div className="text-blue-700 ">
                  +20 attending
                </div>
              </div>
              <div className="text-violet-500 rounded-2xl py-1 px-3 bg-violet-200">
                3 days left 
              </div>
                </div>
               </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="w-80 bg-gray-200 rounded-2xl px-6 py-3">
                <div className="flex items-center gap-3 my-5">
                  <div className="flex flex-col items-center bg-violet-200 text-violet-500 py-2 px-5 rounded-xl">
                <span className="text-lg font-bold">12</span>
                <span>Nov</span>
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-black">
                      design review 
                    </h1>
                    <p className="text-gray-600">
                      10:00 AM - 11:00 AM
                    </p>
                  </div>
             
                </div>
   <div className="flex justify-between">
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center mt-1 -space-x-2">
              <img src="Oval.png" alt="" />
              <img src="Oval2.png" alt="" />
              <img src="Oval3.png" alt="" />
                </div>
                <div className="text-blue-700 ">
                  +20 attending
                </div>
              </div>
              <div className="text-violet-500 rounded-2xl py-1 px-3 bg-violet-200">
                3 days left 
              </div>
                </div>
                </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-80 bg-gray-200 rounded-2xl px-6 py-3">
                <div className="flex items-center gap-3 my-5">
                  <div className="flex flex-col items-center bg-violet-200 text-violet-500 py-2 px-5 rounded-xl">
                <span className="text-lg font-bold">12</span>
                <span>Nov</span>
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-black">
                      design review 
                    </h1>
                    <p className="text-gray-600">
                      10:00 AM - 11:00 AM
                    </p>
                  </div>
             
                </div>
   <div className="flex justify-between">
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center mt-1 -space-x-2">
              <img src="Oval.png" alt="" />
              <img src="Oval2.png" alt="" />
              <img src="Oval3.png" alt="" />
                </div>
                <div className="text-blue-700 ">
                  +20 attending
                </div>
              </div>
              <div className="text-violet-500 rounded-2xl py-1 px-3 bg-violet-200">
                3 days left 
              </div>
                </div>
                </div>
      </SwiperSlide>

      
    </Swiper>
    </div>
                  
                </div>

)
}

export default Meetings