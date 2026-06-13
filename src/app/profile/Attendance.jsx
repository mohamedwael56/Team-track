import React from 'react'

function Attendance() {
  return (
<div className="bg-gray-100 -ml-5 lg:w-full w-80 flex flex-col rounded-2xl p-5 mt-5">
<div className="flex justify-between items-center">
  <div className='flex flex-col'>
    <h1 className='text-black lg:text-base text-xs'>attendance</h1>
    <p className='text-gray-400 lg:text-base text-[8px]'>Attendance history analized during the month.</p>
  </div>
  <div className="flex ml-20 ">
    <button className='cursor-pointer lg:text-base text-[8px] text-black bg-gray-200 py-1 px-2 rounded-2xl'>All time</button>
    <button className='cursor-pointer lg:text-base text-[8px] text-gray-400 bg-gray-200 py-1 px-2 rounded-2xl'>30 days</button>
    <button className='cursor-pointer lg:text-base text-[8px] text-gray-400 bg-gray-200 py-1 px-2 rounded-2xl'>90 days</button>
  </div>
</div>
<div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-3">
<div className="rounded-xl flex flex-col border shadow-md p-3">
<div className="flex justify-between items-center">
<h1 className='text-zinc-700'>attendance rate</h1>
<p className='text-black'>42%</p>
</div>
<div className="mt-5 relative bg-green-200 rounded-full h-3 w-full">
  <div className="bg-green-600 rounded-full w-full h-3  transition-all duration-500" style={{width:'50%'}}>
  </div>
  <div
    className="absolute top-1/2 -translate-y-1/2 bg-green-600 text-white text-xs font-bold
               w-7 h-7 rounded-full flex items-center justify-center
               transition-all duration-500 "
    style={{ left: `calc(50% - 10px)` }}
  >200</div>
</div>
<div className="flex mt-3 mb-1 text-gray-400 justify-between items-center">
  <p>0 Days</p>
  <p>300 Days</p>
</div>
</div>
<div className="rounded-xl flex flex-col border shadow-md p-3">
<div className="flex justify-between items-center">
<h1 className='text-zinc-700'>attendance rate</h1>
<p className='text-black'>42%</p>
</div>
<div className="mt-5 relative bg-green-200 rounded-full h-3 w-full">
  <div className="bg-green-600 rounded-full w-full h-3  transition-all duration-500" style={{width:'50%'}}>
  </div>
  <div
    className="absolute top-1/2 -translate-y-1/2 bg-green-600 text-white text-xs font-bold
               w-7 h-7 rounded-full flex items-center justify-center
               transition-all duration-500 "
    style={{ left: `calc(50% - 10px)` }}
  >200</div>
</div>
<div className="flex mt-3 mb-1 text-gray-400 justify-between items-center">
  <p>0 Hours</p>
  <p>40 Hours</p>
</div>
</div>
<div className="rounded-xl flex flex-col border shadow-md p-3">
<div className="flex justify-between items-center">
<h1 className='text-zinc-700'>attendance rate</h1>
<p className='text-black'>42%</p>
</div>
<div className="mt-5 relative bg-orange-200 rounded-full h-3 w-full">
  <div className="bg-orange-600 rounded-full w-full h-3  transition-all duration-500" style={{width:'50%'}}>
  </div>
  <div
    className="absolute top-1/2 -translate-y-1/2 bg-orange-600 text-white text-xs font-bold
               w-7 h-7 rounded-full flex items-center justify-center
               transition-all duration-500 "
    style={{ left: `calc(50% - 10px)` }}
  >200</div>
</div>
<div className="flex mt-3 mb-1 text-gray-400 justify-between items-center">
  <p>0 Days</p>
  <p>100 Days</p>
</div>

</div>
<div className="bg-gray-200 p-5 items-center rounded-xl flex justify-between border shadow-md ">
<h1 className='text-black font-bold'>average lateness</h1>
<p className='text-black font-bold'>82</p>
</div>
</div>
</div>  )
}

export default Attendance