import React from 'react'

function Productivity() {
  return (
<div className="bg-gray-100  flex flex-col rounded-2xl p-5 my-4">
<div className="flex justify-between items-center">
  <div className='flex flex-col'>
    <h1 className='text-black'>task productivity</h1>
    <p className='text-gray-400'>Task Productivity analized during the month.</p>
  </div>
  <div className="flex ml-20 ">
    <button className='cursor-pointer text-black bg-gray-200 py-1 px-2 rounded-2xl'>All time</button>
    <button className='cursor-pointer text-gray-400 bg-gray-200 py-1 px-2 rounded-2xl'>30 days</button>
    <button className='cursor-pointer text-gray-400 bg-gray-200 py-1 px-2 rounded-2xl'>90 days</button>
  </div>
</div>
<div className="rounded-xl flex flex-col border shadow-md p-3">
  <div className="flex justify-between mb-3">
    <h1 className='text-gray-400'>deadline compliance</h1>
    <p className='text-black'>34</p>
  </div>
<div className="relative w-full bg-red-200 rounded-full h-2">
  <div className="bg-red-600 rounded-full h-2" style={{width:'35%'}} />
  <div className="top-1 -translate-y-1/2 h-6 w-6 text-white rounded-full items-center justify-center flex absolute bg-red-600 " style={{left:"calc(35% - 5px)"}}>
  34</div>
</div>
</div>
<div className="flex items-center justify-between">
  <div className="rounded-xl my-2 flex flex-col border shadow-md p-3">
<div className="flex justify-between items-center">
  <h1 className='text-gray-400'>Task Completion Rate</h1>
  <p className='text-black ml-20'>90</p>
</div>
<div className="relative bg-green-200 h-2 my-2 rounded-full ">
  <div className="bg-green-600 h-3 rounded-full" style={{width:"80%"}}></div>
  <div className="absolute top-1 -translate-y-1/2 flex items-center justify-center text-white h-6 w-6 bg-green-600 rounded-full" style={{left:"calc(80% - 10px)"}}>
  90
  </div>
</div>
<div className="flex justify-between">
  <h1 className='text-gray-400'>0 Tasks</h1>
  <p className='text-gray-400'>100 Tasks</p>
</div>
  </div>
  <div className="rounded-xl flex-1 h-24 bg-gray-200 items-center ml-2 flex justify-between border shadow-md p-3">
    <div className="flex flex-col text-black">
      <h1>Average Tasks</h1>
      <p>Delay (in days)</p>
    </div>
    <div className="text-black items-center flex text-xl">
      82
    </div>
  </div>
</div>
</div>  )
}

export default Productivity