import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
function Meetings() {
  const meetings=[{
    id:1,
    date:'12 Nov',
    title:'design review',
    time:'10:00 AM - 11:00 AM',
    attendees:20,
    daysLeft:3

  },
  {
    id:2,
    date:'12 Nov',
    title:'design review',
    time:'10:00 AM - 11:00 AM',
    attendees:10,
    daysLeft:5
  },
  
  {
    id:3,
    date:'12 Nov',
    title:'design review',
    time:'10:00 AM - 11:00 AM', 
    attendees:15, 
    daysLeft:1  
            }   ]
  return (
 <div className="flex flex-col gap-2 h-80 lg:w-130 w-80 mr-5 bg-gray-100 p-5 rounded-2xl ">
                  <div className="flex justify-between mb-6">
                    <div>
                      <h1 className="lg:text-xl text-sm text-black">upcoming meetings</h1>
                      <p className="text-gray-600 mt-1 lg:text-sm text-xs">
                        You can see the upcoming meetings here.
                      </p>
                    </div>
                    <div>
                      <Link
                        href="/projects"
                        className="lg:text-xl text-nowrap text-sm text-blue-900 hover:text-blue-700 transition duration-300 "
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
      {meetings.map((meeting, index) =>{ 
      return(
   <SwiperSlide key={meeting.id}>
        <div className="lg:w-80 w-48 bg-gray-200 rounded-2xl py-3 px-3 lg:px-6">
                <div className="flex items-center gap-3 my-5">
                  <div className="flex flex-col items-center bg-violet-200 text-violet-500 lg:py-2 lg:px-5 px-2 py-1 rounded-xl">
                <span className="lg:text-lg  text-xs font-bold">12</span>
                <span className='lg:text-md text-xs'>Nov</span>
                  </div>
                  <div>
                    <h1 className="lg:text-lg text-xs font-bold text-black">
                      design review 
                    </h1>
                    <p className="text-gray-600 lg:text-md text-[8px]">
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
                <div className="text-blue-700  lg:text-md text-xs ">
                  +20 attending
                </div>
              </div>
              <div className="text-violet-500 text-nowrap rounded-2xl text-center lg:py-1 lg:text-md text-[9px]  lg:px-3 px-3  bg-violet-200">
                3 days left 
              </div>
                </div>
               </div>
        </SwiperSlide>
      )
   } )}

     
    

      
    </Swiper>
    </div>
                  
                </div>

)
}

export default Meetings