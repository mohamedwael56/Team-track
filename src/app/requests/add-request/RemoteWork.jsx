import React from 'react'

function RemoteWork() {
  return (

<div className="flex flex-col gap-4">
  <div className="p-5 border rounded-2xl flex flex-col shadow-xs">
    <div className="flex flex-col gap-2">
      <p className='text-black'> Date</p>
      <button className='px-5 py-2 flex justify-between border cursor-pointer rounded-xl '>
        <p>select date</p>
        <img src="/icons/calendar.png" alt="" />
      </button>
    </div>
    <div className="flex flex-col gap-2 mt-5">
      <p className='text-black'>Reason</p>
      <textarea placeholder='write reason here...' className='p-5 rounded-xl border border-gray-400 h-50 text-black'/>
    </div>
  </div>
</div>
  )
}

export default RemoteWork