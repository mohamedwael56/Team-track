import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { useState } from 'react';
function ShiftsRequests({data}) {
   const [submittedCoverage, setSubmittedCoverage] = useState(false);
         const [coverage, setCoverage] =useState(false);
    const [coverageStatus, setCoverageStatus] = useState('normal');

    setInterval(() => {
    if(coverageStatus==='pending'){
      setCoverageStatus('covered')
      return;
    }
  }, 5000);
    return (

    <>
        {
            coverage&&(
              <>
              <div className="fixed inset-0 bg-black z-50 opacity-50"></div>
            <div className="fixed flex inset-0 items-center justify-center z-50">
              <div className="bg-white lg:w-full w-80 h-95 flex flex-col items-center rounded-2xl p-5 ">
             <img src="icons/icon(4).png" alt="" />
             <h1 className="text-black my-auto text-xl w-[300px] text-center">Are you sure you want to request coverage for this shift?</h1>
              <p className="my-auto lg:w-[400px] w-[300px] text-gray-400 text-center">the selected shift will be published the shift market for other eligible employees to claim.</p>
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
                    </>
)
}

export default ShiftsRequests