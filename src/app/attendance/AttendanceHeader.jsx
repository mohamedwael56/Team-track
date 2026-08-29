'use client';
import React from 'react'
import Image from 'next/image'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { useState } from 'react';
function AttendanceHeader() {
      const [openCalender, setOpenCalender] = useState(false);
     const [dueStartDate, setDueStartDate] = useState(null); 
        const [dueEndDate, setDueEndDate] = useState(null);
        const [startDate,setStartDate]= useState(null)
        const [endDate,setEndDate]= useState(null)
        const [open,setOpen]=useState(false)
            const confirmDate=()=>{
        setDueStartDate(startDate)
        setDueEndDate(endDate)
        setOpen(false)
        setOpenCalender(false)
    }
  return (
    <>
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
            </>
)
}

export default AttendanceHeader