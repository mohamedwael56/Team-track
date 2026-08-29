import React from 'react'
import Image from 'next/image'
function AttendanceStates() {
  return (
      <div className='grid grid-cols-1 lg:grid-cols-4 my-4 gap-3'>
        <div className="bg-gray-200 p-3 rounded-2xl flex gap-3 items-center">
       <div className="relative w-13 h-13">
        <Image fill src="/attendance/finger-print.png"  alt="" />
       </div>
        <div className='flex flex-col'>
<h1 className='lg:text-2xl text-sm text-black'>28:23:56</h1>
<p className='text-gray-600 lg:text-base text-xs '>Total working hours</p>
        </div>
        </div>
        <div className="bg-gray-200 p-3 rounded-2xl flex gap-3 items-center">
       <div className="relative w-13 h-13">
        <Image fill src="/attendance/lateness.png"  alt="" />
       </div>
        <div className='flex flex-col'>
<h1 className='lg:text-2xl text-sm text-black'>27:00</h1>
<p className='lg:text-base text-xs text-gray-600'>Total hours late</p>
        </div>
        </div>
        <div className="bg-gray-200 p-3 rounded-2xl flex gap-3 items-center">
        
         <Image  src="/attendance/dollar.png"  width={50} height={50}   alt="" />
        <div className='flex flex-col'>
<h1 className='lg:text-2xl text-sm  text-black'>205 $</h1>
<p className='text-gray-600 lg:text-base text-xs text-nowrap '>Month salary deductions</p>
        </div>
        </div>
        <div className="bg-gray-200 p-3 rounded-2xl flex gap-3 items-center">
       <div className="relative w-13 h-13">
        <Image fill src="/attendance/timer.png"  alt="" />
       </div>
        <div className='flex flex-col'>
<h1 className='lg:text-2xl text-sm text-black'>21:05</h1>
<p className='text-gray-600 lg:text-base text-xs'>Remaining hours</p>
        </div>
        </div>
            </div>  )
}

export default AttendanceStates