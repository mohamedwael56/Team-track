import React from 'react'
import Image from 'next/image';
import { Fragment } from 'react';
import { myAvailabilityData } from '@/Data/myAvailability';
function MyAvailability({myAvailability,setMyAvailability,setEditAvailability}) {
  return (
<>
  {
            myAvailability&&(
              <>
              <div className="bg-black opacity-50 z-50 inset-0 fixed"></div>
              <div className="flex justify-end items-center z-50 absolute top-130 lg:top-80 inset-0">
                <div className="bg-white w-80 lg:w-120 p-5 mr-5 rounded-2xl flex flex-col ">
              <div className="flex mb-7 justify-between">
                <h1 className="text-black text-xl">My Availability</h1>
                <button onClick={()=>setMyAvailability(false)} className="text-gray-400 text-2xl cursor-pointer">&times;</button>
              </div>
              <div className="border border-gray-400 rounded-xl flex flex-col">
    {myAvailabilityData.map((shift) => {
      return(
        <Fragment key={shift.id}>
          <div className="flex items-center gap-3 p-3">
                  <div className="py-4 px-9 bg-indigo-100 text-indigo-500 rounded-xl justify-center ">
Saturday.13 june
                  </div>
                  <div className="flex flex-col gap-1">
                <div className="flex gap-7 items-center">
                  <div className="flex flex-col gap-1">
                  <div className="flex gap-1 items-center">
                    <Image width={4} height={5} src="/icons/green-sign.png" alt="" />
                    <p className="text-black">from</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Image width={4} height={5} src="/icons/red-sign.png" alt="" />
                    <p className="text-black">to</p>
                  </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lime-500">9:00 am</p>
                    <p className="text-red-500">5:00 pm</p>
                  </div>
                  <button onClick={()=>{setMyAvailability(false)
                    setEditAvailability(true)}} className="cursor-pointer">
                  <Image width={20} height={20} className='ml-9' src="/icons/edit-02.png" alt=""  />
                </button>
                </div>
                  </div>
                  </div>
                  </Fragment>
      )
    })}
              
              
                  
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
</>
)
}

export default MyAvailability