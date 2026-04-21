import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { useState } from 'react';
function MyShifts({myAvailability,setMyAvailability}) {
     const data = {
    labels: ["Working", "Break", "Late"],
    datasets: [
      {
        data: [25, 50, 25],
        backgroundColor: ["#4ade80", "#facc15", "#f87171"],
      },
    ],
  };
    setInterval(() => {
  if(coverageStatus==='pending'){
    setCoverageStatus('covered')
    return;
  }
}, 5000);
      const [coverage, setCoverage] =useState(false);
  const [submittedCoverage, setSubmittedCoverage] = useState(false);
  const [coverageStatus, setCoverageStatus] = useState('normal');
  const [editAvailability, setEditAvailability] = useState(false);
 const [submittedAvailability, setSubmittedAvailability] = useState(false);

     
  return (
    <>
    
     {
            editAvailability&&(
              <>
              <div className="bg-black opacity-50 z-50 inset-0 fixed"></div>

              <div className="flex justify-end items-center z-50 absolute top-80 inset-0">
                <div className="bg-white w-120 p-5 mr-5 rounded-2xl flex flex-col ">
<div className="flex justify-between items-center ">
  <div className="flex items-center">
    <button onClick={()=>{setMyAvailability(true)
      setEditAvailability(false)}} className=" text-blue-600 py-2 px-4 rounded-2xl cursor-pointer">
      Back
    </button>
    <h1 className="text-black text-xl">Edit Availability</h1>
  </div>
  <button onClick={()=>setEditAvailability(false)} className="text-gray-400 text-2xl cursor-pointer">&times;</button>
  </div>
  <div className="border border-gray-400 rounded-2xl p-5 my-5 flex flex-col">
    <div className="flex flex-col gap-3">
      <label className="text-black">date</label>
      <button className="border flex justify-between text-start border-gray-400 text-gray-800 py-2 px-4 rounded-xl cursor-pointer" >
        <p>Select date</p>
        <img src="/icons/calendar.png" alt="" />
      </button>
      </div>
    <div className="flex mt-5 flex-col gap-3">
      <label className="text-black">From</label>
      <button className="border flex justify-between text-start border-gray-400 text-gray-800 py-2 px-4 rounded-xl cursor-pointer" >
<p>00:00</p>
        <img src="/icons/clock-circle.png" alt="" />
      </button>
      </div>
    <div className="flex mt-5 flex-col gap-3">
      <label className="text-black">To</label>
      <button className="border flex justify-between text-start border-gray-400 text-gray-800 py-2 px-4 rounded-xl cursor-pointer" >
        <p>00:00</p>
        <img src="/icons/clock-circle.png" alt="" />
      </button>
      </div>
  </div>

  <div className="flex mt-80 gap-5">
    <button onClick={()=>setEditAvailability(false)} className="border border-blue-900 text-blue-900 py-2 px-4 rounded-xl w-full  cursor-pointer">
      cancel
    </button>
    <button onClick={()=>{setEditAvailability(false)
      setSubmittedAvailability(true)}
    } className="bg-blue-900 text-white py-2 px-4 rounded-xl w-full cursor-pointer">Submit</button>

  </div>
</div>
</div>
           
              </>
            )
          }
          {
            myAvailability&&(
              <>
              <div className="bg-black opacity-50 z-50 inset-0 fixed"></div>
              <div className="flex justify-end items-center z-50 absolute top-80 inset-0">
                <div className="bg-white w-120 p-5 mr-5 rounded-2xl flex flex-col ">
              <div className="flex mb-7 justify-between">
                <h1 className="text-black text-xl">My Availability</h1>
                <button onClick={()=>setMyAvailability(false)} className="text-gray-400 text-2xl cursor-pointer">&times;</button>
              </div>
              <div className="border border-gray-400 rounded-xl flex flex-col">
                <div className="flex items-center gap-3 p-3">
                  <div className="py-4 px-9 bg-indigo-100 text-indigo-500 rounded-xl justify-center ">
Saturday.13 june
                  </div>
                  <div className="flex flex-col gap-1">
                <div className="flex gap-7 items-center">
                  <div className="flex flex-col gap-1">
                  <div className="flex gap-1 items-center">
                    <img src="icons/green-sign.png" alt="" />
                    <p className="text-black">from</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src="icons/red-sign.png" alt="" />
                    <p className="text-black">to</p>
                  </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lime-500">9:00 am</p>
                    <p className="text-red-500">5:00 pm</p>
                  </div>
                  <button onClick={()=>{setMyAvailability(false)
                    setEditAvailability(true)}} className="cursor-pointer">
                  <img className="ml-9" src="/icons/edit-02.png" alt=""  />
                </button>
                </div>
                  </div>
                  </div>
                <div className="flex items-center gap-3 p-3">
                  <div className="py-4 px-9 bg-indigo-100 text-indigo-500 rounded-xl justify-center ">
Saturday.13 june
                  </div>
                  <div className="flex flex-col gap-1">
                <div className="flex gap-7 items-center">
                  <div className="flex flex-col gap-1">
                  <div className="flex gap-1 items-center">
                    <img src="icons/green-sign.png" alt="" />
                    <p className="text-black">from</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src="icons/red-sign.png" alt="" />
                    <p className="text-black">to</p>
                  </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lime-500">9:00 am</p>
                    <p className="text-red-500">5:00 pm</p>
                  </div>
                  <button className="cursor-pointer">
                  <img className="ml-9" src="/icons/edit-02.png" alt=""  />
                </button>
                </div>
                  </div>
                  </div>
                <div className="flex items-center gap-3 p-3">
                  <div className="py-4 px-9 bg-indigo-100 text-indigo-500 rounded-xl justify-center ">
Saturday.13 june
                  </div>
                  <div className="flex flex-col gap-1">
                <div className="flex gap-7 items-center">
                  <div className="flex flex-col gap-1">
                  <div className="flex gap-1 items-center">
                    <img src="icons/green-sign.png" alt="" />
                    <p className="text-black">from</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src="icons/red-sign.png" alt="" />
                    <p className="text-black">to</p>
                  </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lime-500">9:00 am</p>
                    <p className="text-red-500">5:00 pm</p>
                  </div>
                  <button className="cursor-pointer">
                  <img className="ml-9" src="/icons/edit-02.png" alt=""  />
                </button>
                </div>
                  </div>
                  </div>
                <div className="flex items-center gap-3 p-3">
                  <div className="py-4 px-9 bg-indigo-100 text-indigo-500 rounded-xl justify-center ">
Saturday.13 june
                  </div>
                  <div className="flex flex-col gap-1">
                <div className="flex gap-7 items-center">
                  <div className="flex flex-col gap-1">
                  <div className="flex gap-1 items-center">
                    <img src="icons/green-sign.png" alt="" />
                    <p className="text-black">from</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src="icons/red-sign.png" alt="" />
                    <p className="text-black">to</p>
                  </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lime-500">9:00 am</p>
                    <p className="text-red-500">5:00 pm</p>
                  </div>
                  <button className="cursor-pointer">
                  <img className="ml-9" src="/icons/edit-02.png" alt=""  />
                </button>
                </div>
                  </div>
                  </div>
                <div className="flex items-center gap-3 p-3">
                  <div className="py-4 px-9 bg-indigo-100 text-indigo-500 rounded-xl justify-center ">
Saturday.13 june
                  </div>
                  <div className="flex flex-col gap-1">
                <div className="flex gap-7 items-center">
                  <div className="flex flex-col gap-1">
                  <div className="flex gap-1 items-center">
                    <img src="icons/green-sign.png" alt="" />
                    <p className="text-black">from</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src="icons/red-sign.png" alt="" />
                    <p className="text-black">to</p>
                  </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lime-500">9:00 am</p>
                    <p className="text-red-500">5:00 pm</p>
                  </div>
                  <button className="cursor-pointer">
                  <img className="ml-9" src="/icons/edit-02.png" alt=""  />
                </button>
                </div>
                  </div>
                  </div>
                <div className="flex items-center gap-3 p-3">
                  <div className="py-4 px-9 bg-indigo-100 text-indigo-500 rounded-xl justify-center ">
Saturday.13 june
                  </div>
                  <div className="flex flex-col gap-1">
                <div className="flex gap-7 items-center">
                  <div className="flex flex-col gap-1">
                  <div className="flex gap-1 items-center">
                    <img src="icons/green-sign.png" alt="" />
                    <p className="text-black">from</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src="icons/red-sign.png" alt="" />
                    <p className="text-black">to</p>
                  </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lime-500">9:00 am</p>
                    <p className="text-red-500">5:00 pm</p>
                  </div>
                  <button className="cursor-pointer">
                  <img className="ml-9" src="/icons/edit-02.png" alt=""  />
                </button>
                </div>
                  </div>
                  </div>
                <div className="flex items-center gap-3 p-3">
                  <div className="py-4 px-9 bg-indigo-100 text-indigo-500 rounded-xl justify-center ">
Saturday.13 june
                  </div>
                  <div className="flex flex-col gap-1">
                <div className="flex gap-7 items-center">
                  <div className="flex flex-col gap-1">
                  <div className="flex gap-1 items-center">
                    <img src="icons/green-sign.png" alt="" />
                    <p className="text-black">from</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src="icons/red-sign.png" alt="" />
                    <p className="text-black">to</p>
                  </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lime-500">9:00 am</p>
                    <p className="text-red-500">5:00 pm</p>
                  </div>
                  <button className="cursor-pointer">
                  <img className="ml-9" src="/icons/edit-02.png" alt=""  />
                </button>
                </div>
                  </div>
                  </div>
                  
              </div>

              <div className="mt-40 w-full flex gap-5 ">
                    <button onClick={()=>setMyAvailability(false)} className="border border-blue-700 text-blue-700 flex-1 py-2 rounded-2xl  cursor-pointer">
                      cancel
                    </button>
                    <button onClick={()=>setMyAvailability(false)} className="bg-blue-900 flex-1 py-2 rounded-2xl text-white cursor-pointer">
                      Update Availability
                    </button>
                  </div>
                </div>
              </div>
              </>
            )
          }
          {
            submittedAvailability&&(
              <>
               <div className="fixed inset-0 bg-black z-50 opacity-50"></div>
            <div className="fixed flex inset-0 items-center justify-center z-50">
              <div className="bg-white flex flex-col items-center rounded-2xl p-5 ">
             <img src="icons/icon.png" alt="" width={120} />
             <h1 className="text-black my-2 text-2xl w-[300px] text-center"> successful request!</h1>
              <p className="my-2 w-[400px] text-gray-400 text-center"> availability request submitted successfully.</p>
                <div className="w-full gap-3 mt-2 flex">
                  <button onClick={()=>{setSubmittedAvailability(false)
                  }} className="bg-blue-900 cursor-pointer text-white flex-1 py-2 rounded-2xl ">Got it</button>
                </div>
                </div>
              </div>
              </>
            )
          }
          {
            coverage&&(
              <>
              <div className="fixed inset-0 bg-black z-50 opacity-50"></div>
            <div className="fixed flex inset-0 items-center justify-center z-50">
              <div className="bg-white h-95 flex flex-col items-center rounded-2xl p-5 ">
             <img src="icons/icon(4).png" alt="" />
             <h1 className="text-black my-auto text-xl w-[300px] text-center">Are you sure you want to request coverage for this shift?</h1>
              <p className="my-auto w-[400px] text-gray-400 text-center">the selected shift will be published the shift market for other eligible employees to claim.</p>
                <div className="w-full gap-3 mt-auto flex">
                  <button onClick={()=>setCoverage(false)} className="border cursor-pointer border-gray-400 text-gray-400 flex-1 py-2 rounded-2xl ">cancel</button>
                  <button onClick={()=>{setCoverage(false) 
                    setSubmittedCoverage(true)}
                  } className="bg-blue-900 cursor-pointer text-white flex-1 py-2 rounded-2xl ">confirm</button>
                </div>
                </div>
              </div>
              </>
            )
          }
          {
            submittedCoverage&&(
              <>
               <div className="fixed inset-0 bg-black z-50 opacity-50"></div>
            <div className="fixed flex inset-0 items-center justify-center z-50">
              <div className="bg-white flex flex-col items-center rounded-2xl p-5 ">
             <img src="icons/icon.png" alt="" width={120} />
             <h1 className="text-black my-2 text-2xl w-[300px] text-center"> successful request!</h1>
              <p className="my-2 w-[400px] text-gray-400 text-center"> coverage request submitted successfully.</p>
                <div className="w-full gap-3 mt-2 flex">
                  <button onClick={()=>{setSubmittedCoverage(false)
                    setCoverageStatus('pending')
                  }} className="bg-blue-900 cursor-pointer text-white flex-1 py-2 rounded-2xl ">Got it</button>
                </div>
                </div>
              </div>
          </>
            )
          }
          
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
           {
            coverageStatus==='normal'&&(
            <>
 <div className="flex flex-row gap-2 mt-2">
                    <button className="border border-violet-400 text-violet-500 px-8 cursor-pointer py-2 flex-1 rounded-2xl">Swap</button>
                    <button onClick={()=>setCoverage(true)} className="bg-blue-900 text-white px-7 flex-1 py-2 cursor-pointer rounded-2xl">coverage</button>
                </div>            </>
           )}
          { coverageStatus==='pending'&&(
            <>
              <div className="bg-orange-100 py-2 select-none text-center rounded-xl text-orange-500 w-full mt-2">
pending coverage
                </div>          </>
            )
            }   
            {
              coverageStatus==='covered'&&(
              <>
              <div className="bg-green-50 py-2 select-none text-center rounded-xl text-green-600 w-full mt-2">
covered by mohamed ali
                </div>               </>
              )
            }
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
 </> )
}

export default MyShifts