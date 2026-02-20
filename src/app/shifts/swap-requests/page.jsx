"use client";
import Sidebar from "@/components/sidebar";
import React from "react";
import Header from "@/components/header";
import { Doughnut } from "react-chartjs-2";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

function page() {
  const data = {
    labels: ["Working", "Break", "Late"],
    datasets: [
      {
        data: [25, 50, 25],
        backgroundColor: ["#4ade80", "#facc15", "#f87171"],
      },
    ],
  };

  const percentage = 66;
  return (
    <div className="flex">
      <div className="flex-1 ml-69">
        <Header />
        <main>
          <div className="flex flex-col bg-gray-100 p-5 rounded-2xl">
            <div className="flex mb-5 justify-between items-center">
              <h1 className="text-black text-2xl">shifts</h1>
              <div className="flex gap-3">
                <button className="bg-green-200 text-green-600  rounded-2xl px-5 cursor-pointer">
                  available
                </button>
                <button className=" bg-blue-900 py-2 text-white rounded-2xl px-4 cursor-pointer">
                  My Availability
                </button>
              </div>
            </div>
            <hr />
            <div className="flex justify-center flex-row my-4 ">
              <button className="bg-blue-900 py-1 text-white rounded-2xl px-15 cursor-pointer">
                My shifts
              </button>
              <button className="border rounded-2xl py-1 px-15 bg-gray-200 cursor-pointer border-gray-200 text-zinc-500 shadow-xs">
                Market
              </button>
              <button className="border rounded-2xl py-1 px-15 bg-gray-200 cursor-pointer border-gray-200 text-zinc-500 shadow-xs">
                Swaps Request
              </button>
            </div>
 <div className="flex gap-5 my-5 justify-between items-center">
    <div className="  w-full  relative">
                <button className='cursor-pointer'>
                <img src="/icons/search.png" alt="" className='absolute left-4 top-3 ' />
            </button>
            <input type="text" placeholder="Search..." className="border border-gray-300 text-zinc-950 rounded-xl px-4 py-2 w-full pl-12" />
       </div>
       <div className='relative'>
            <img src="/icons/filter.png" alt="" className='absolute left-5 top-3 '  />
            <select name="" id="" className='border-gray-300 border rounded-xl px-6 pl-8 py-3 text-zinc-950 ml-2'>
                <option value="Filter" className=' rounded-2xl'>filter</option>
            </select>
            </div>
       </div>
       <div className="w-250">
 <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="bg-gray-200 w-75 rounded-2xl p-5 mx-2">
        
            <div className="flex flex-col mb-15 bg-gray-100 rounded-2xl p-3 mt-4 shadow-lg border items-center">
                <div className="flex mb-2 gap-5 p-2  text-black justify-between items-center">
                  <div className=" relative w-15 h-15">
                    <div>
                      <Doughnut
                        data={data}
                        options={{
                          plugins: { legend: { display: false } },
                          cutout: "70%",
                        }}
                      />
                    </div>
                    <div className="flex absolute top-6 text-xs right-4">
                      <span>16</span>
                      <span>Mar</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-sm">
                  
                    <div className="flex items-center gap-3">
                      <img src="/icons/green-sign.png" alt="" />
                      <span>clock in</span>
                      <span className="text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/icons/red-sign.png" alt="" />
                      <span className="text-nowrap">clock out</span>
                      <span className="text-red-600 text-nowrap">05:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex ml-3 mb-2 gap-2 w-full flex-col text-sm  ">
                 <div className="flex  items-start gap-15">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">site</p>
                    </div>
                    <div className="text-black">Capital Restaurant</div>
                 </div>
                 <div className="flex items-start gap-15 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">role</p>
                    </div>
                    <div className="text-black text-start ">waiter</div>
                 </div>
                 <div className="flex items-start gap-12">
                   
                 </div>
                </div>
                
              </div>
            <div className="flex flex-col  bg-gray-100 rounded-2xl p-3 mt-4 shadow-lg border items-center">
                <div className="flex mb-2 gap-5 p-2  text-black justify-between items-center">
                  <div className=" relative w-15 h-15">
                    <div>
                      <Doughnut
                        data={data}
                        options={{
                          plugins: { legend: { display: false } },
                          cutout: "70%",
                        }}
                      />
                    </div>
                    <div className="flex absolute top-6 text-xs right-4">
                      <span>16</span>
                      <span>Mar</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-sm">
                  
                    <div className="flex items-center gap-3">
                      <img src="/icons/green-sign.png" alt="" />
                      <span>clock in</span>
                      <span className="text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/icons/red-sign.png" alt="" />
                      <span className="text-nowrap">clock out</span>
                      <span className="text-red-600 text-nowrap">05:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex ml-3 mb-2 gap-2 w-full flex-col text-sm  ">
                 <div className="flex  items-start gap-15">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">site</p>
                    </div>
                    <div className="text-black">Capital Restaurant</div>
                 </div>
                 <div className="flex items-start gap-15 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">role</p>
                    </div>
                    <div className="text-black text-start ">waiter</div>
                 </div>
                 <div className="flex items-start gap-7 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/user-circle.png" alt="" />
                        <p className="text-gray-400">assignee</p>
                    </div>
                    <div className="text-black text-start ">mohamed ahmed</div>
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
      <SwiperSlide>
        <div className="bg-gray-200 w-75 rounded-2xl p-5 mx-2">
        
            <div className="flex flex-col mb-15 bg-gray-100 rounded-2xl p-3 mt-4 shadow-lg border items-center">
                <div className="flex mb-2 gap-5 p-2  text-black justify-between items-center">
                  <div className=" relative w-15 h-15">
                    <div>
                      <Doughnut
                        data={data}
                        options={{
                          plugins: { legend: { display: false } },
                          cutout: "70%",
                        }}
                      />
                    </div>
                    <div className="flex absolute top-6 text-xs right-4">
                      <span>16</span>
                      <span>Mar</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-sm">
                  
                    <div className="flex items-center gap-3">
                      <img src="/icons/green-sign.png" alt="" />
                      <span>clock in</span>
                      <span className="text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/icons/red-sign.png" alt="" />
                      <span className="text-nowrap">clock out</span>
                      <span className="text-red-600 text-nowrap">05:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex ml-3 mb-2 gap-2 w-full flex-col text-sm  ">
                 <div className="flex  items-start gap-15">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">site</p>
                    </div>
                    <div className="text-black">Capital Restaurant</div>
                 </div>
                 <div className="flex items-start gap-15 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">role</p>
                    </div>
                    <div className="text-black text-start ">waiter</div>
                 </div>
                 <div className="flex items-start gap-12">
                   
                 </div>
                </div>
                
              </div>
            <div className="flex flex-col  bg-gray-100 rounded-2xl p-3 mt-4 shadow-lg border items-center">
                <div className="flex mb-2 gap-5 p-2  text-black justify-between items-center">
                  <div className=" relative w-15 h-15">
                    <div>
                      <Doughnut
                        data={data}
                        options={{
                          plugins: { legend: { display: false } },
                          cutout: "70%",
                        }}
                      />
                    </div>
                    <div className="flex absolute top-6 text-xs right-4">
                      <span>16</span>
                      <span>Mar</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-sm">
                  
                    <div className="flex items-center gap-3">
                      <img src="/icons/green-sign.png" alt="" />
                      <span>clock in</span>
                      <span className="text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/icons/red-sign.png" alt="" />
                      <span className="text-nowrap">clock out</span>
                      <span className="text-red-600 text-nowrap">05:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex ml-3 mb-2 gap-2 w-full flex-col text-sm  ">
                 <div className="flex  items-start gap-15">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">site</p>
                    </div>
                    <div className="text-black">Capital Restaurant</div>
                 </div>
                 <div className="flex items-start gap-15 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">role</p>
                    </div>
                    <div className="text-black text-start ">waiter</div>
                 </div>
                 <div className="flex items-start gap-7 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/user-circle.png" alt="" />
                        <p className="text-gray-400">assignee</p>
                    </div>
                    <div className="text-black text-start ">mohamed ahmed</div>
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
      <SwiperSlide>
          <div className="bg-gray-200 w-75 rounded-2xl p-5 mx-2">
        
            <div className="flex flex-col mb-15 bg-gray-100 rounded-2xl p-3 mt-4 shadow-lg border items-center">
                <div className="flex mb-2 gap-5 p-2  text-black justify-between items-center">
                  <div className=" relative w-15 h-15">
                    <div>
                      <Doughnut
                        data={data}
                        options={{
                          plugins: { legend: { display: false } },
                          cutout: "70%",
                        }}
                      />
                    </div>
                    <div className="flex absolute top-6 text-xs right-4">
                      <span>16</span>
                      <span>Mar</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-sm">
                  
                    <div className="flex items-center gap-3">
                      <img src="/icons/green-sign.png" alt="" />
                      <span>clock in</span>
                      <span className="text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/icons/red-sign.png" alt="" />
                      <span className="text-nowrap">clock out</span>
                      <span className="text-red-600 text-nowrap">05:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex ml-3 mb-2 gap-2 w-full flex-col text-sm  ">
                 <div className="flex  items-start gap-15">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">site</p>
                    </div>
                    <div className="text-black">Capital Restaurant</div>
                 </div>
                 <div className="flex items-start gap-15 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">role</p>
                    </div>
                    <div className="text-black text-start ">waiter</div>
                 </div>
                 <div className="flex items-start gap-12">
                   
                 </div>
                </div>
                
              </div>
            <div className="flex flex-col  bg-gray-100 rounded-2xl p-3 mt-4 shadow-lg border items-center">
                <div className="flex mb-2 gap-5 p-2  text-black justify-between items-center">
                  <div className=" relative w-15 h-15">
                    <div>
                      <Doughnut
                        data={data}
                        options={{
                          plugins: { legend: { display: false } },
                          cutout: "70%",
                        }}
                      />
                    </div>
                    <div className="flex absolute top-6 text-xs right-4">
                      <span>16</span>
                      <span>Mar</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-sm">
                  
                    <div className="flex items-center gap-3">
                      <img src="/icons/green-sign.png" alt="" />
                      <span>clock in</span>
                      <span className="text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/icons/red-sign.png" alt="" />
                      <span className="text-nowrap">clock out</span>
                      <span className="text-red-600 text-nowrap">05:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex ml-3 mb-2 gap-2 w-full flex-col text-sm  ">
                 <div className="flex  items-start gap-15">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">site</p>
                    </div>
                    <div className="text-black">Capital Restaurant</div>
                 </div>
                 <div className="flex items-start gap-15 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">role</p>
                    </div>
                    <div className="text-black text-start ">waiter</div>
                 </div>
                 <div className="flex items-start gap-7 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/user-circle.png" alt="" />
                        <p className="text-gray-400">assignee</p>
                    </div>
                    <div className="text-black text-start ">mohamed ahmed</div>
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
      <SwiperSlide>
          <div className="bg-gray-200 w-75 rounded-2xl p-5 mx-2">
        
            <div className="flex flex-col mb-15 bg-gray-100 rounded-2xl p-3 mt-4 shadow-lg border items-center">
                <div className="flex mb-2 gap-5 p-2  text-black justify-between items-center">
                  <div className=" relative w-15 h-15">
                    <div>
                      <Doughnut
                        data={data}
                        options={{
                          plugins: { legend: { display: false } },
                          cutout: "70%",
                        }}
                      />
                    </div>
                    <div className="flex absolute top-6 text-xs right-4">
                      <span>16</span>
                      <span>Mar</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-sm">
                  
                    <div className="flex items-center gap-3">
                      <img src="/icons/green-sign.png" alt="" />
                      <span>clock in</span>
                      <span className="text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/icons/red-sign.png" alt="" />
                      <span className="text-nowrap">clock out</span>
                      <span className="text-red-600 text-nowrap">05:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex ml-3 mb-2 gap-2 w-full flex-col text-sm  ">
                 <div className="flex  items-start gap-15">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">site</p>
                    </div>
                    <div className="text-black">Capital Restaurant</div>
                 </div>
                 <div className="flex items-start gap-15 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">role</p>
                    </div>
                    <div className="text-black text-start ">waiter</div>
                 </div>
                 <div className="flex items-start gap-12">
                   
                 </div>
                </div>
                
              </div>
            <div className="flex flex-col  bg-gray-100 rounded-2xl p-3 mt-4 shadow-lg border items-center">
                <div className="flex mb-2 gap-5 p-2  text-black justify-between items-center">
                  <div className=" relative w-15 h-15">
                    <div>
                      <Doughnut
                        data={data}
                        options={{
                          plugins: { legend: { display: false } },
                          cutout: "70%",
                        }}
                      />
                    </div>
                    <div className="flex absolute top-6 text-xs right-4">
                      <span>16</span>
                      <span>Mar</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-sm">
                  
                    <div className="flex items-center gap-3">
                      <img src="/icons/green-sign.png" alt="" />
                      <span>clock in</span>
                      <span className="text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/icons/red-sign.png" alt="" />
                      <span className="text-nowrap">clock out</span>
                      <span className="text-red-600 text-nowrap">05:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex ml-3 mb-2 gap-2 w-full flex-col text-sm  ">
                 <div className="flex  items-start gap-15">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">site</p>
                    </div>
                    <div className="text-black">Capital Restaurant</div>
                 </div>
                 <div className="flex items-start gap-15 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">role</p>
                    </div>
                    <div className="text-black text-start ">waiter</div>
                 </div>
                 <div className="flex items-start gap-7 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/user-circle.png" alt="" />
                        <p className="text-gray-400">assignee</p>
                    </div>
                    <div className="text-black text-start ">mohamed ahmed</div>
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
      <SwiperSlide>
          <div className="bg-gray-200 w-75 rounded-2xl p-5 mx-2">
        
            <div className="flex flex-col mb-15 bg-gray-100 rounded-2xl p-3 mt-4 shadow-lg border items-center">
                <div className="flex mb-2 gap-5 p-2  text-black justify-between items-center">
                  <div className=" relative w-15 h-15">
                    <div>
                      <Doughnut
                        data={data}
                        options={{
                          plugins: { legend: { display: false } },
                          cutout: "70%",
                        }}
                      />
                    </div>
                    <div className="flex absolute top-6 text-xs right-4">
                      <span>16</span>
                      <span>Mar</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-sm">
                  
                    <div className="flex items-center gap-3">
                      <img src="/icons/green-sign.png" alt="" />
                      <span>clock in</span>
                      <span className="text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/icons/red-sign.png" alt="" />
                      <span className="text-nowrap">clock out</span>
                      <span className="text-red-600 text-nowrap">05:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex ml-3 mb-2 gap-2 w-full flex-col text-sm  ">
                 <div className="flex  items-start gap-15">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">site</p>
                    </div>
                    <div className="text-black">Capital Restaurant</div>
                 </div>
                 <div className="flex items-start gap-15 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">role</p>
                    </div>
                    <div className="text-black text-start ">waiter</div>
                 </div>
                 <div className="flex items-start gap-12">
                   
                 </div>
                </div>
                
              </div>
            <div className="flex flex-col  bg-gray-100 rounded-2xl p-3 mt-4 shadow-lg border items-center">
                <div className="flex mb-2 gap-5 p-2  text-black justify-between items-center">
                  <div className=" relative w-15 h-15">
                    <div>
                      <Doughnut
                        data={data}
                        options={{
                          plugins: { legend: { display: false } },
                          cutout: "70%",
                        }}
                      />
                    </div>
                    <div className="flex absolute top-6 text-xs right-4">
                      <span>16</span>
                      <span>Mar</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-sm">
                  
                    <div className="flex items-center gap-3">
                      <img src="/icons/green-sign.png" alt="" />
                      <span>clock in</span>
                      <span className="text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/icons/red-sign.png" alt="" />
                      <span className="text-nowrap">clock out</span>
                      <span className="text-red-600 text-nowrap">05:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex ml-3 mb-2 gap-2 w-full flex-col text-sm  ">
                 <div className="flex  items-start gap-15">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">site</p>
                    </div>
                    <div className="text-black">Capital Restaurant</div>
                 </div>
                 <div className="flex items-start gap-15 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">role</p>
                    </div>
                    <div className="text-black text-start ">waiter</div>
                 </div>
                 <div className="flex items-start gap-7 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/user-circle.png" alt="" />
                        <p className="text-gray-400">assignee</p>
                    </div>
                    <div className="text-black text-start ">mohamed ahmed</div>
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
      <SwiperSlide>
          <div className="bg-gray-200 w-75 rounded-2xl p-5 mx-2">
        
            <div className="flex flex-col mb-15 bg-gray-100 rounded-2xl p-3 mt-4 shadow-lg border items-center">
                <div className="flex mb-2 gap-5 p-2  text-black justify-between items-center">
                  <div className=" relative w-15 h-15">
                    <div>
                      <Doughnut
                        data={data}
                        options={{
                          plugins: { legend: { display: false } },
                          cutout: "70%",
                        }}
                      />
                    </div>
                    <div className="flex absolute top-6 text-xs right-4">
                      <span>16</span>
                      <span>Mar</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-sm">
                  
                    <div className="flex items-center gap-3">
                      <img src="/icons/green-sign.png" alt="" />
                      <span>clock in</span>
                      <span className="text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/icons/red-sign.png" alt="" />
                      <span className="text-nowrap">clock out</span>
                      <span className="text-red-600 text-nowrap">05:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex ml-3 mb-2 gap-2 w-full flex-col text-sm  ">
                 <div className="flex  items-start gap-15">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">site</p>
                    </div>
                    <div className="text-black">Capital Restaurant</div>
                 </div>
                 <div className="flex items-start gap-15 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">role</p>
                    </div>
                    <div className="text-black text-start ">waiter</div>
                 </div>
                 <div className="flex items-start gap-12">
                   
                 </div>
                </div>
                
              </div>
            <div className="flex flex-col  bg-gray-100 rounded-2xl p-3 mt-4 shadow-lg border items-center">
                <div className="flex mb-2 gap-5 p-2  text-black justify-between items-center">
                  <div className=" relative w-15 h-15">
                    <div>
                      <Doughnut
                        data={data}
                        options={{
                          plugins: { legend: { display: false } },
                          cutout: "70%",
                        }}
                      />
                    </div>
                    <div className="flex absolute top-6 text-xs right-4">
                      <span>16</span>
                      <span>Mar</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-sm">
                  
                    <div className="flex items-center gap-3">
                      <img src="/icons/green-sign.png" alt="" />
                      <span>clock in</span>
                      <span className="text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/icons/red-sign.png" alt="" />
                      <span className="text-nowrap">clock out</span>
                      <span className="text-red-600 text-nowrap">05:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex ml-3 mb-2 gap-2 w-full flex-col text-sm  ">
                 <div className="flex  items-start gap-15">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">site</p>
                    </div>
                    <div className="text-black">Capital Restaurant</div>
                 </div>
                 <div className="flex items-start gap-15 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">role</p>
                    </div>
                    <div className="text-black text-start ">waiter</div>
                 </div>
                 <div className="flex items-start gap-7 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/user-circle.png" alt="" />
                        <p className="text-gray-400">assignee</p>
                    </div>
                    <div className="text-black text-start ">mohamed ahmed</div>
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
      <SwiperSlide>
          <div className="bg-gray-200 w-75 rounded-2xl p-5 mx-2">
        
            <div className="flex flex-col mb-15 bg-gray-100 rounded-2xl p-3 mt-4 shadow-lg border items-center">
                <div className="flex mb-2 gap-5 p-2  text-black justify-between items-center">
                  <div className=" relative w-15 h-15">
                    <div>
                      <Doughnut
                        data={data}
                        options={{
                          plugins: { legend: { display: false } },
                          cutout: "70%",
                        }}
                      />
                    </div>
                    <div className="flex absolute top-6 text-xs right-4">
                      <span>16</span>
                      <span>Mar</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-sm">
                  
                    <div className="flex items-center gap-3">
                      <img src="/icons/green-sign.png" alt="" />
                      <span>clock in</span>
                      <span className="text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/icons/red-sign.png" alt="" />
                      <span className="text-nowrap">clock out</span>
                      <span className="text-red-600 text-nowrap">05:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex ml-3 mb-2 gap-2 w-full flex-col text-sm  ">
                 <div className="flex  items-start gap-15">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">site</p>
                    </div>
                    <div className="text-black">Capital Restaurant</div>
                 </div>
                 <div className="flex items-start gap-15 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">role</p>
                    </div>
                    <div className="text-black text-start ">waiter</div>
                 </div>
                 <div className="flex items-start gap-12">
                   
                 </div>
                </div>
                
              </div>
            <div className="flex flex-col  bg-gray-100 rounded-2xl p-3 mt-4 shadow-lg border items-center">
                <div className="flex mb-2 gap-5 p-2  text-black justify-between items-center">
                  <div className=" relative w-15 h-15">
                    <div>
                      <Doughnut
                        data={data}
                        options={{
                          plugins: { legend: { display: false } },
                          cutout: "70%",
                        }}
                      />
                    </div>
                    <div className="flex absolute top-6 text-xs right-4">
                      <span>16</span>
                      <span>Mar</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-sm">
                  
                    <div className="flex items-center gap-3">
                      <img src="/icons/green-sign.png" alt="" />
                      <span>clock in</span>
                      <span className="text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/icons/red-sign.png" alt="" />
                      <span className="text-nowrap">clock out</span>
                      <span className="text-red-600 text-nowrap">05:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex ml-3 mb-2 gap-2 w-full flex-col text-sm  ">
                 <div className="flex  items-start gap-15">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">site</p>
                    </div>
                    <div className="text-black">Capital Restaurant</div>
                 </div>
                 <div className="flex items-start gap-15 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">role</p>
                    </div>
                    <div className="text-black text-start ">waiter</div>
                 </div>
                 <div className="flex items-start gap-7 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/user-circle.png" alt="" />
                        <p className="text-gray-400">assignee</p>
                    </div>
                    <div className="text-black text-start ">mohamed ahmed</div>
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
      <SwiperSlide>
          <div className="bg-gray-200 w-75 rounded-2xl p-5 mx-2">
        
            <div className="flex flex-col mb-15 bg-gray-100 rounded-2xl p-3 mt-4 shadow-lg border items-center">
                <div className="flex mb-2 gap-5 p-2  text-black justify-between items-center">
                  <div className=" relative w-15 h-15">
                    <div>
                      <Doughnut
                        data={data}
                        options={{
                          plugins: { legend: { display: false } },
                          cutout: "70%",
                        }}
                      />
                    </div>
                    <div className="flex absolute top-6 text-xs right-4">
                      <span>16</span>
                      <span>Mar</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-sm">
                  
                    <div className="flex items-center gap-3">
                      <img src="/icons/green-sign.png" alt="" />
                      <span>clock in</span>
                      <span className="text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/icons/red-sign.png" alt="" />
                      <span className="text-nowrap">clock out</span>
                      <span className="text-red-600 text-nowrap">05:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex ml-3 mb-2 gap-2 w-full flex-col text-sm  ">
                 <div className="flex  items-start gap-15">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">site</p>
                    </div>
                    <div className="text-black">Capital Restaurant</div>
                 </div>
                 <div className="flex items-start gap-15 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">role</p>
                    </div>
                    <div className="text-black text-start ">waiter</div>
                 </div>
                 <div className="flex items-start gap-12">
                   
                 </div>
                </div>
                
              </div>
            <div className="flex flex-col  bg-gray-100 rounded-2xl p-3 mt-4 shadow-lg border items-center">
                <div className="flex mb-2 gap-5 p-2  text-black justify-between items-center">
                  <div className=" relative w-15 h-15">
                    <div>
                      <Doughnut
                        data={data}
                        options={{
                          plugins: { legend: { display: false } },
                          cutout: "70%",
                        }}
                      />
                    </div>
                    <div className="flex absolute top-6 text-xs right-4">
                      <span>16</span>
                      <span>Mar</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-sm">
                  
                    <div className="flex items-center gap-3">
                      <img src="/icons/green-sign.png" alt="" />
                      <span>clock in</span>
                      <span className="text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/icons/red-sign.png" alt="" />
                      <span className="text-nowrap">clock out</span>
                      <span className="text-red-600 text-nowrap">05:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex ml-3 mb-2 gap-2 w-full flex-col text-sm  ">
                 <div className="flex  items-start gap-15">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">site</p>
                    </div>
                    <div className="text-black">Capital Restaurant</div>
                 </div>
                 <div className="flex items-start gap-15 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/briefcase.png" alt="" />
                        <p className="text-gray-400">role</p>
                    </div>
                    <div className="text-black text-start ">waiter</div>
                 </div>
                 <div className="flex items-start gap-7 ">
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/user-circle.png" alt="" />
                        <p className="text-gray-400">assignee</p>
                    </div>
                    <div className="text-black text-start ">mohamed ahmed</div>
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
      ...
    </Swiper>
         </div>
          </div>
        </main>
      </div>
      <Sidebar />
    </div>
  );
}

export default page;
