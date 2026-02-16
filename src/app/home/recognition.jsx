import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Link from 'next/link';
function Recognition() {
  return (
<div className=" flex flex-col mb-3 bg-gray-100 p-5 rounded-2xl">
<div className="flex justify-between">
<div>
  <h1 className="text-black font-bold text-xl">
    recognitions
  </h1>
  <p className="text-gray-400">
    celebrating the hard work of our top employees!
  </p>
</div>
<div>
  <Link href="/recognitions" className="text-blue-900 text-xl hover:text-blue-700 transition duration-300">
    view all
  </Link>
</div>
</div>
<div className="w-120">
<Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1.5}
      navigation
    >
      <SwiperSlide>
        <div className="flex items-center bg-orange-100 py-2 px-3 rounded-xl gap-3 mt-3">
<div>
  <img src="/icons/rectangle.png" alt="" />
</div>
<div className="flex flex-col items-center">
<h1 className=" font-bold text-xl text-amber-500 items-start"> mr.punctuality</h1>
<img src="/icons/award.png" alt="" />
<div className="flex text-zinc-800 flex-row mt-2 items-center gap-2">
<img src="/icons/vector2.png" alt="" />
<span>+20</span>
<span className="ml-2">Tue 27 Aug 2024</span>
</div>
</div>
</div>
</SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center bg-orange-100 py-2 px-3 rounded-xl gap-3 mt-3">
<div>
  <img src="/icons/rectangle.png" alt="" />
</div>
<div className="flex flex-col items-center">
<h1 className=" font-bold text-xl text-amber-500 items-start"> mr.punctuality</h1>
<img src="/icons/award.png" alt="" />
<div className="flex text-zinc-800 flex-row mt-2 items-center gap-2">
<img src="/icons/vector2.png" alt="" />
<span>+20</span>
<span className="ml-2">Tue 27 Aug 2024</span>
</div>
</div>
</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center bg-orange-100 py-2 px-3 rounded-xl gap-3 mt-3">
<div>
  <img src="/icons/rectangle.png" alt="" />
</div>
<div className="flex flex-col items-center">
<h1 className=" font-bold text-xl text-amber-500 items-start"> mr.punctuality</h1>
<img src="/icons/award.png" alt="" />
<div className="flex text-zinc-800 flex-row mt-2 items-center gap-2">
<img src="/icons/vector2.png" alt="" />
<span>+20</span>
<span className="ml-2">Tue 27 Aug 2024</span>
</div>
</div>
</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center bg-orange-100 py-2 px-3 rounded-xl gap-3 mt-3">
<div>
  <img src="/icons/rectangle.png" alt="" />
</div>
<div className="flex flex-col items-center">
<h1 className=" font-bold text-xl text-amber-500 items-start"> mr.punctuality</h1>
<img src="/icons/award.png" alt="" />
<div className="flex text-zinc-800 flex-row mt-2 items-center gap-2">
<img src="/icons/vector2.png" alt="" />
<span>+20</span>
<span className="ml-2">Tue 27 Aug 2024</span>
</div>
</div>
</div>
      </SwiperSlide>
    
    </Swiper>
</div>
</div>

)
}

export default Recognition