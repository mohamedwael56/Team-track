import React from 'react'

function OverTime() {
  return (
<div className="flex flex-col gap-5">
<div className="flex flex-col gap-3">
    <h1 className="text-black">Date</h1>
<button className='border border-gray-400 rounded-xl text-start text-gray-500 cursor-pointer p-3'>Select Date</button>
</div>
<div className="flex justify-between gap-3">
    <div className="flex flex-col w-full gap-3">
        <h1 className="text-black">Start Time</h1>
        <button className='border border-gray-400 rounded-xl text-start text-gray-500 cursor-pointer p-3'>Select Time</button>
    </div>
    <div className="flex flex-col w-full gap-3">

        <h1 className="text-black">End Time</h1>
        <button className='border border-gray-400 rounded-xl text-start text-gray-500 cursor-pointer p-3'>Select Time</button>
    </div>
</div>
<div className="">
    <h1 className="text-black mb-3">Reason</h1>
    <textarea placeholder='write reason here...' className='p-5 rounded-xl border border-gray-400 h-50  text-black w-full'/>
</div>
</div> 

)
}

export default OverTime