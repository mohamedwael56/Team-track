'use client'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import React from 'react'
import Rewards from './Rewards'
import { useState } from 'react'
import Deductions from './Deductions'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

Link
function Page() {
    
        const [dueStartDate, setDueStartDate] = useState(null); 
        const [dueEndDate, setDueEndDate] = useState(null);
        const [startDate,setStartDate]= useState(null)
        const [endDate,setEndDate]= useState(null)
            const confirmDate=()=>{
        setDueStartDate(startDate)
        setDueEndDate(endDate)
        setOpenCalender(false)
    }
    
        const [openCalender, setOpenCalender] = useState(false);
    
    const [deductions,setDeductions]=useState(false)
  return (
    <div className='flex'>
        <div className="flex-1 ml-69">
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
                <div className="bg-gray-100 rounded-2xl p-5 flex flex-col">
<div className="flex justify-between mb-3">
    <div className="flex items-center gap-3">
        <Link href="#" className="text-blue-600 hover:text-blue-500">
       Back
        </Link>
        <h1 className='text-xl text-black'>points history</h1>
    </div>
    <div className="flex items-center mb-3">
        <button onClick={()=>setDeductions(false)} className={`${!deductions ? 'bg-blue-900 py-2 text-white' : 'bg-gray-200 py-3'} border text-black border-gray-300 flex gap-2 items-center shadow-sm rounded-2xl  px-15 cursor-pointer`}>
            rewards
        </button>
        <button onClick={()=>setDeductions(true)} className={`${deductions ? 'bg-blue-900 py-2 text-white' : 'bg-gray-200 py-3'} border text-black border-gray-300 flex gap-2 items-center shadow-sm rounded-2xl  px-10 cursor-pointer`}>
            deductions
        </button>
         <button onClick={()=>setOpenCalender(true)} className='border ml-5 flex gap-2 items-center shadow-sm rounded-2xl py-3 px-4 cursor-pointer'>
                <img src="/icons/calendar.png" alt="" />
                <p className='text-black'>this week {dueStartDate && dueEndDate ? `${dueStartDate.format('MM/DD/YYYY')} - ${dueEndDate.format('MM/DD/YYYY')}` : 'Select dates'}</p>
            </button>
    </div>
</div>
<hr />
<div className="">
  {
    deductions?(
        <Deductions />
    ):(
        <Rewards />
    )
  }
  

</div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Page