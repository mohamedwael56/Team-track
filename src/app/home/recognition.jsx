import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Link from 'next/link';
function Recognition() {
  const recognitions=[{
    id:1,
    title:'mr.punctuality',
    points:20,
    date:'Tue 27 Aug 2024'
  },
{
  id:2,
  title:'mr.punctuality',
  points:20,
  date:'Tue 27 Aug 2024'
},
{
  id:3,
  title:'mr.punctuality',
  points:20,
  date:'Tue 27 Aug 2024'
},
{

  id:4,
  title:'mr.punctuality',
  points:20,
  date:'Tue 27 Aug 2024'  
} 
]
  return (
<div className=" flex lg:w-full w-80 flex-col mb-3 bg-gray-100 p-5 rounded-2xl">
<div className="flex justify-between">
<div>
  <h1 className="text-black font-bold text-xs lg:text-xl">
    recognitions
  </h1>
  <p className="text-gray-400 lg:text-base text-[8px]">
    celebrating the hard work of our top employees!
  </p>
</div>
<div>
  <Link href="/recognitions" className="text-blue-900 lg:text-xl text-xs text-nowrap hover:text-blue-700 transition duration-300">
    view all
  </Link>
</div>
</div>
<div className="lg:w-120 w-60">
<Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1.5}
      navigation
    >
      {
        recognitions.map((recognition,index)=>{
          return(
             <SwiperSlide key={recognition.id}>
        <div className="flex items-center bg-orange-100 py-2 px-3 rounded-xl gap-3 mt-3">
<div>
  <img src="/icons/rectangle.png" className=' lg:w-full w-9 ' alt="" />
</div>
<div className="flex flex-col items-center">
<h1 className=" font-bold lg:text-xl text-[8px] text-amber-500 items-start"> mr.punctuality</h1>
<img src="/icons/award.png" alt="" className='lg:w-full w-15' />
<div className="flex text-zinc-800 flex-row mt-2 items-center gap-2">
<img src="/icons/vector2.png" className='lg:w-fit w-2' alt="" />
<span className='lg:text-base text-[5px]'>+20</span>
<span className="ml-2 lg:text-base text-nowrap text-[5px]">Tue 27 Aug 2024</span>
</div>
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

export default Recognition