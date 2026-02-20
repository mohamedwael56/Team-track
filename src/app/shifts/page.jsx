"use client";
import Sidebar from "@/components/sidebar";
import React from "react";
import Header from "@/components/header";
import { Doughnut } from "react-chartjs-2";
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
            <hr />
            <div className="grid grid-cols-4 gap-3">
              <div className="flex flex-col rounded-2xl p-3 mt-4 shadow-lg border items-center">
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
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/alarm-clock.png" alt="" />
                        <p className="text-gray-400">break</p>
                    </div>
                    <div className="text-black">09:00 - 09:15 am</div>
                 </div>
                </div>
                <div className="flex flex-row gap-2 mt-2">
                    <button className="border border-violet-400 text-violet-500 px-8 cursor-pointer py-2 flex-1 rounded-2xl">Swap</button>
                    <button className="bg-blue-900 text-white px-7 flex-1 py-2 cursor-pointer rounded-2xl">coverage</button>
                </div>
              </div>
              <div className="flex flex-col rounded-2xl p-3 mt-4 shadow-lg border items-center">
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
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/alarm-clock.png" alt="" />
                        <p className="text-gray-400">break</p>
                    </div>
                    <div className="text-black">09:00 - 09:15 am</div>
                 </div>
                </div>
                <div className="flex flex-row gap-2 mt-2">
                    <button className="border border-violet-400 text-violet-500 px-8 cursor-pointer py-2 flex-1 rounded-2xl">Swap</button>
                    <button className="bg-blue-900 text-white px-7 flex-1 py-2 cursor-pointer rounded-2xl">coverage</button>
                </div>
              </div>
              <div className="flex flex-col rounded-2xl p-3 mt-4 shadow-lg border items-center">
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
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/alarm-clock.png" alt="" />
                        <p className="text-gray-400">break</p>
                    </div>
                    <div className="text-black">09:00 - 09:15 am</div>
                 </div>
                </div>
                <div className="flex flex-row gap-2 mt-2">
                    <button className="border border-violet-400 text-violet-500 px-8 cursor-pointer py-2 flex-1 rounded-2xl">Swap</button>
                    <button className="bg-blue-900 text-white px-7 flex-1 py-2 cursor-pointer rounded-2xl">coverage</button>
                </div>
              </div>
              <div className="flex flex-col rounded-2xl p-3 mt-4 shadow-lg border items-center">
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
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/alarm-clock.png" alt="" />
                        <p className="text-gray-400">break</p>
                    </div>
                    <div className="text-black">09:00 - 09:15 am</div>
                 </div>
                </div>
                <div className="flex flex-row gap-2 mt-2">
                    <button className="border border-violet-400 text-violet-500 px-8 cursor-pointer py-2 flex-1 rounded-2xl">Swap</button>
                    <button className="bg-blue-900 text-white px-7 flex-1 py-2 cursor-pointer rounded-2xl">coverage</button>
                </div>
              </div>
              <div className="flex flex-col rounded-2xl p-3 mt-4 shadow-lg border items-center">
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
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/alarm-clock.png" alt="" />
                        <p className="text-gray-400">break</p>
                    </div>
                    <div className="text-black">09:00 - 09:15 am</div>
                 </div>
                </div>
                <div className="flex flex-row gap-2 mt-2">
                    <button className="border border-violet-400 text-violet-500 px-8 cursor-pointer py-2 flex-1 rounded-2xl">Swap</button>
                    <button className="bg-blue-900 text-white px-7 flex-1 py-2 cursor-pointer rounded-2xl">coverage</button>
                </div>
              </div>
              <div className="flex flex-col rounded-2xl p-3 mt-4 shadow-lg border items-center">
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
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/alarm-clock.png" alt="" />
                        <p className="text-gray-400">break</p>
                    </div>
                    <div className="text-black">09:00 - 09:15 am</div>
                 </div>
                </div>
                <div className="flex flex-row gap-2 mt-2">
                    <button className="border border-violet-400 text-violet-500 px-8 cursor-pointer py-2 flex-1 rounded-2xl">Swap</button>
                    <button className="bg-blue-900 text-white px-7 flex-1 py-2 cursor-pointer rounded-2xl">coverage</button>
                </div>
              </div>
              <div className="flex flex-col rounded-2xl p-3 mt-4 shadow-lg border items-center">
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
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/alarm-clock.png" alt="" />
                        <p className="text-gray-400">break</p>
                    </div>
                    <div className="text-black">09:00 - 09:15 am</div>
                 </div>
                </div>
                <div className="flex flex-row gap-2 mt-2">
                    <button className="border border-violet-400 text-violet-500 px-8 cursor-pointer py-2 flex-1 rounded-2xl">Swap</button>
                    <button className="bg-blue-900 text-white px-7 flex-1 py-2 cursor-pointer rounded-2xl">coverage</button>
                </div>
              </div>
              <div className="flex flex-col rounded-2xl p-3 mt-4 shadow-lg border items-center">
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
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/alarm-clock.png" alt="" />
                        <p className="text-gray-400">break</p>
                    </div>
                    <div className="text-black">09:00 - 09:15 am</div>
                 </div>
                </div>
                <div className="flex flex-row gap-2 mt-2">
                    <button className="border border-violet-400 text-violet-500 px-8 cursor-pointer py-2 flex-1 rounded-2xl">Swap</button>
                    <button className="bg-blue-900 text-white px-7 flex-1 py-2 cursor-pointer rounded-2xl">coverage</button>
                </div>
              </div>
              <div className="flex flex-col rounded-2xl p-3 mt-4 shadow-lg border items-center">
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
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/alarm-clock.png" alt="" />
                        <p className="text-gray-400">break</p>
                    </div>
                    <div className="text-black">09:00 - 09:15 am</div>
                 </div>
                </div>
                <div className="flex flex-row gap-2 mt-2">
                    <button className="border border-violet-400 text-violet-500 px-8 cursor-pointer py-2 flex-1 rounded-2xl">Swap</button>
                    <button className="bg-blue-900 text-white px-7 flex-1 py-2 cursor-pointer rounded-2xl">coverage</button>
                </div>
              </div>
              <div className="flex flex-col rounded-2xl p-3 mt-4 shadow-lg border items-center">
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
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/alarm-clock.png" alt="" />
                        <p className="text-gray-400">break</p>
                    </div>
                    <div className="text-black">09:00 - 09:15 am</div>
                 </div>
                </div>
                <div className="flex flex-row gap-2 mt-2">
                    <button className="border border-violet-400 text-violet-500 px-8 cursor-pointer py-2 flex-1 rounded-2xl">Swap</button>
                    <button className="bg-blue-900 text-white px-7 flex-1 py-2 cursor-pointer rounded-2xl">coverage</button>
                </div>
              </div>
              <div className="flex flex-col rounded-2xl p-3 mt-4 shadow-lg border items-center">
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
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/alarm-clock.png" alt="" />
                        <p className="text-gray-400">break</p>
                    </div>
                    <div className="text-black">09:00 - 09:15 am</div>
                 </div>
                </div>
                <div className="flex flex-row gap-2 mt-2">
                    <button className="border border-violet-400 text-violet-500 px-8 cursor-pointer py-2 flex-1 rounded-2xl">Swap</button>
                    <button className="bg-blue-900 text-white px-7 flex-1 py-2 cursor-pointer rounded-2xl">coverage</button>
                </div>
              </div>
              <div className="flex flex-col rounded-2xl p-3 mt-4 shadow-lg border items-center">
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
                    <div className="flex gap-1 items-center">
                        <img src="/shifts/alarm-clock.png" alt="" />
                        <p className="text-gray-400">break</p>
                    </div>
                    <div className="text-black">09:00 - 09:15 am</div>
                 </div>
                </div>
                <div className="flex flex-row gap-2 mt-2">
                    <button className="border border-violet-400 text-violet-500 px-8 cursor-pointer py-2 flex-1 rounded-2xl">Swap</button>
                    <button className="bg-blue-900 text-white px-7 flex-1 py-2 cursor-pointer rounded-2xl">coverage</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Sidebar />
    </div>
  );
}

export default page;
