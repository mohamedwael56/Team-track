"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <Swiper
      modules={[ Pagination]}
      spaceBetween={20}
      slidesPerView={1}
    >
      <SwiperSlide><img src="/mask1.png" alt="slide 1" className="w-100 flex se justify-end" /></SwiperSlide>
      <SwiperSlide><img src="/mask2.png" alt="slide 2" className="w-100 flex se justify-end" /></SwiperSlide>
      <SwiperSlide><img src="/mask3.png" alt="slide 3" className="w-100 flex se justify-end" /></SwiperSlide>
    </Swiper>
  );
}