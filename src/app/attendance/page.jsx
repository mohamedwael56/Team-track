'use client';
import Sidebar from '@/components/sidebar'
import React from 'react'
import Header from '@/components/header'
import { useState } from 'react';
import Image from 'next/image';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import AttendanceData from './AttendanceData';
import AttendanceOverview from './attendanceOverview';
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
        <div className="flex-1 lg:ml-69">
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
    <AttendanceOverview open={open} setOpen={setOpen} />
    
            <div className='flex flex-col lg:w-full w-80 bg-white p-5 rounded-2xl'>
            <div className="flex justify-between items-center">
                <h1 className='text-black text-sm lg:text-2xl'>attendance</h1>
            <div className='flex gap-3'>
            <button className='border flex gap-2 items-center shadow-sm rounded-2xl lg:py-3 lg:px-4 px-1 cursor-pointer'>
               <div className=" relative w-3 h-3 lg:w-4 lg:h-4">
                <Image fill src="/icons/filter.png" sizes='5px' alt="" />
               </div>
                <p className='text-black lg:text-base text-xs'>filter</p>
            </button>
            <button onClick={()=>setOpenCalender(true)} className='border flex gap-2 items-center shadow-sm rounded-2xl lg:py-3 lg:px-4 px-1 cursor-pointer'>
                              <div className=" relative w-3 h-3 lg:w-5 lg:h-5">
                <Image fill src="/icons/calendar.png" alt="" />
               </div>
                <p className='lg:text-base text-[9px] text-black'> {dueStartDate && dueEndDate ? `${dueStartDate.format('MM/DD/YYYY')} - ${dueEndDate.format('MM/DD/YYYY')}` : '09/30/2024 - 10/06/2024'} </p>
            </button>
            
            </div>
            </div>
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
            </div>
            <hr />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
 
 
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