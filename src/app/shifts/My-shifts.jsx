import React from 'react'
import { useState } from 'react';
import ShiftsRequests from './ShiftsRequests';
function MyShifts({myAvailability,setMyAvailability}) {
const shifts=[
  {
    id:1,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'normal',
  },
  {
    id:2,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'pending',
  },
  {
    id:3,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'covered',
  },{
    id:4,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'normal',

  },
  {
    id:5,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'pending',
  },
  {
    id:6,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'covered',
  },

      {
    id:7,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'normal',

      },{
    id:8,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'pending',
  },
  {
    id:9,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',

    break:'09:00 - 09:15 am',
    coverageStatus:'covered',

  },{
    id:10,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',

    coverageStatus:'normal',

  },{
    id:11,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'pending',
  },
    {
    id:12,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',  
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'covered',
  },
]

  const data = {
    labels: ["Working", "Break", "Late"],
    datasets: [
      {
        data: [25, 50, 25],
        backgroundColor: ["#4ade80", "#facc15", "#f87171"],
      },
    ],
  };
    

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
      
        
          
     <div className="grid grid-cols-4 gap-3">
             {
                shifts.map((shift)=>{
                  return(
                    <><ShiftsRequests data={data} /></>
                )  }
              )
             }
            
           
            </div>
 </> )
}

export default MyShifts