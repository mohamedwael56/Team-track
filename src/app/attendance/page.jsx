'use client';
import Sidebar from '@/components/sidebar'
import React from 'react'
import Header from '@/components/header'
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import AttendanceData from './AttendanceData';
function Page() {
  
    const [dueStartDate, setDueStartDate] = useState(null); 
    const [dueEndDate, setDueEndDate] = useState(null);
    const [startDate,setStartDate]= useState(null)
    const [endDate,setEndDate]= useState(null)
        const confirmDate=()=>{
    setDueStartDate(startDate)
    setDueEndDate(endDate)
    setOpen(false)
    setOpenCalender(false)
}

    const [openCalender, setOpenCalender] = useState(false);
 
const [open,setOpen]=useState(false)

    const percentage=66;
  return (
    <div className='flex'>
        <div className="flex-1 ml-69">
        <Header />
        <main>
              {openCalender&& (
                    <>
                    <div  className="fixed inset-0 bg-black opacity-50 z-60 " ></div>
                       <div className="fixed inset-0  flex justify-center items-center z-60 " >
                        <div className="bg-white rounded-2xl p-5">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer 
                    components={['DateRangePicker']}
                   
                  />
                  
<DatePicker onChange={(newValue)=>setStartDate(newValue)} className='bg-white mr-5' label="Start date" />
<DatePicker onChange={(newValue)=>setEndDate(newValue)} className='bg-white ml-5' label="End date" />
                </LocalizationProvider>
                <button onClick={confirmDate} className="block mt-2 w-full cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg">
                  Confirm
                </button>
                </div>
               </div>
               </> )}
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
            )}
            <div className='flex flex-col bg-white p-5 rounded-2xl'>
            <div className="flex justify-between items-center">
                <h1 className='text-black text-2xl'>attendance</h1>
            <div className='flex gap-3'>
            <button className='border flex gap-2 items-center shadow-sm rounded-2xl py-3 px-4 cursor-pointer'>
                <img src="/icons/filter.png" alt="" />
                <p className='text-black'>filter</p>
            </button>
            <button onClick={()=>setOpenCalender(true)} className='border flex gap-2 items-center shadow-sm rounded-2xl py-3 px-4 cursor-pointer'>
                <img src="/icons/calendar.png" alt="" />
                <p className='text-black'> {dueStartDate && dueEndDate ? `${dueStartDate.format('MM/DD/YYYY')} - ${dueEndDate.format('MM/DD/YYYY')}` : '09/30/2024 - 10/06/2024'} </p>
            </button>
            
            </div>
            </div>
            <div className='grid grid-cols-4 my-4 gap-3'>
        <div className="bg-gray-200 p-3 rounded-2xl flex gap-3 items-center">
        <img src="/attendance/finger-print.png"  alt="" />
        <div className='flex flex-col'>
<h1 className='text-2xl text-black'>28:23:56</h1>
<p className='text-gray-600'>Total working hours</p>
        </div>
        </div>
        <div className="bg-gray-200 p-3 rounded-2xl flex gap-3 items-center">
        <img src="/attendance/lateness.png"  alt="" />
        <div className='flex flex-col'>
<h1 className='text-2xl text-black'>27:00</h1>
<p className='text-gray-600'>Total hours late</p>
        </div>
        </div>
        <div className="bg-gray-200 p-3 rounded-2xl flex gap-3 items-center">
        <img src="/attendance/dollar.png"  alt="" />
        <div className='flex flex-col'>
<h1 className='text-2xl text-black'>205 $</h1>
<p className='text-gray-600 text-nowrap text-sm'>Month salary deductions</p>
        </div>
        </div>
        <div className="bg-gray-200 p-3 rounded-2xl flex gap-3 items-center">
        <img src="/attendance/timer.png"  alt="" />
        <div className='flex flex-col'>
<h1 className='text-2xl text-black'>21:05</h1>
<p className='text-gray-600'>Remaining hours</p>
        </div>
        </div>
            </div>
            <hr />
            <div className="grid grid-cols-4 gap-3">
 
 
 <AttendanceData setOpen={setOpen} />

            </div>
          
            </div>
        </main>
        </div>
        <Sidebar />
    </div>
  )
}

export default Page