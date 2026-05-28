import React, { Fragment } from 'react'

function AttendanceOverview({open,setOpen}) {
  return (
    <>
        {open&&(
<>
<div className="fixed z-60 bg-black opacity-50 inset-0"></div>
<div className="fixed flex z-70 justify-end items-center inset-0 ">
<div className="bg-white w-100 flex flex-col rounded-2xl p-5">
<div className="flex items-center text-xl text-black justify-between">
    <h1>overview</h1>
    <button onClick={()=>setOpen(false)} className='cursor-pointer text-3xl'>×</button>
</div>
<div className="border rounded-xl p-2">
    <div className="justify-between items-start flex">
        <div className="flex gap-2">
            <div className="bg-indigo-100 font-bold rounded-xl py-5 px-6 text-xl text-indigo-700">12</div>
            <div className=" text-black text-xl w-[50px]">
                september 2024
            </div>
        </div>
        <div className="bg-gray-200  text-black rounded-xl px-2">not attendance</div>
    </div>
<hr className='my-3' />
<div className="flex flex-col text-black gap-3">
<div className="flex w-full items-center gap-1">
<img src="/icons/green-sign.png" alt="" />
<div> Clock in</div>
<div className="flex-1 text-center text-green-700">--</div>
</div>
<div className="flex w-full items-center gap-1">
<img src="/icons/red-sign.png" alt="" />
<div> Clock out</div>
<div className="flex-1 text-center mr-2 text-red-700">--</div>
</div>
</div>
<hr className='my-2' />
<div className="flex flex-col gap-3">
    <div className="flex items-center gap-1">
       <div className="text-gray-500">leave type</div>
       <div className="flex-1 flex justify-center">
    <div className="text-blue-900 bg-blue-100 rounded-xl px-3  justify-center">sick leave</div>
        
        </div>
    </div>
    <div className="flex items-center gap-1">
       <div className="text-gray-500">status</div>
       <div className="flex-1 flex ml-5 justify-center">
    <div className="text-lime-600 bg-lime-50 rounded-xl px-3  justify-center">approved</div>
        
        </div>
    </div>
    <div className="flex items-center gap-1">
       <div className="text-gray-500">reason</div>
       <div className="flex-1 ml-5 text-black text-center">
 im having a bad cold
        
        </div>
    </div>
    <hr className='my-2'/>
    <div className="flex text-black flex-col gap-2">

<div className="flex items-center gap-3 ml-5">
    <img src="/attendance/finger-print.png" alt="" />
    <div className="flex gap-1 flex-col">
        <h1>00:00</h1>
        <p>total working hours</p>
    </div>
</div>
<div className="flex gap-3 ml-5">
    <img src="/attendance/break.png" width={55} />
    <div className="flex gap-1 flex-col">
        <h1>00:00</h1>
        <p>total break hours</p>
    </div>
</div>
<div className="flex items-center gap-3 ml-5">
    <img src="/attendance/lateness.png" alt="" />
    <div className="flex gap-1 flex-col">
        <h1>00:00</h1>
        <p>total lateness hours</p>
    </div>
</div>

    </div>
</div>
</div>

</div>
</div>
</>
          )}  </>  )
}

export default AttendanceOverview