import React from 'react'
import Image from 'next/image';
function EditAvailability({editAvailability,setEditAvailability,setMyAvailability,setSubmittedAvailability}) {
  return (
    <>
{
            editAvailability&&(
              <>
              <div className="bg-black opacity-50 z-50 inset-0 fixed"></div>

              <div className="flex justify-end items-center z-50 absolute top-80 inset-0">
                <div className="bg-white w-80 lg:w-120 p-5 mr-5 rounded-2xl flex flex-col ">
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
        <div className="relative w-5 h-5">
        <Image fill src="/icons/calendar.png" alt="" />
    </div>
      </button>
      </div>
    <div className="flex mt-5 flex-col gap-3">
      <label className="text-black">From</label>
      <button className="border flex justify-between text-start border-gray-400 text-gray-800 py-2 px-4 rounded-xl cursor-pointer" >
<p>00:00</p>
<div className="relative w-5 h-5">
        <Image fill src="/icons/clock-circle.png" alt="" />
      </div>
      </button>
      </div>
    <div className="flex mt-5 flex-col gap-3">
      <label className="text-black">To</label>
      <button className="border flex justify-between text-start border-gray-400 text-gray-800 py-2 px-4 rounded-xl cursor-pointer" >
        <p>00:00</p>
        <div className="relative w-5 h-5">
          <Image fill src="/icons/clock-circle.png" alt="" />
        </div>
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
</>
)
}

export default EditAvailability