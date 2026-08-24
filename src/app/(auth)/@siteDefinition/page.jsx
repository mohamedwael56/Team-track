'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function Slider() {
  return (
    <Swiper
      modules={[ Pagination]}
      spaceBetween={20}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className="relative flex justify-end w-100 h-180">
          <Image fill src="/mask1.png" alt="slide 1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-100 h-180  ">
          <Image fill src="/mask2.png" alt="slide 2"  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-100 h-180">
          <Image fill src="/mask3.png" alt="slide 3" className="w-100 flex se justify-end" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}