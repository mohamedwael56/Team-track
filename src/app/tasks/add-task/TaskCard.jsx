import React from 'react'
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { useRouter } from 'next/navigation';
function TaskCard({list}) {
    const router = useRouter()
const [tempDate,setTempDate]= useState(null)
const [dueDate, setDueDate] = useState(null); 
const [open, setOpen] = useState(false);

const confirmDate=()=>{
    setDueDate(tempDate)
    setOpen(false)
}
const changeDate=(newValue)=>{
 setTempDate(newValue)
}

  return (
    <>
 {open&& (
        <>
        <div  className="fixed inset-0 bg-black opacity-50 z-60 " ></div>
           <div className="fixed inset-0  flex justify-center items-center z-60 " >
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateTimePicker
        orientation="landscape"
        value={tempDate}
        onChange={changeDate}
        onAccept={confirmDate}
        onClose={() => setOpen(false)}
      />
    </LocalizationProvider>
   </div>
   </> )}

 <div  className='flex flex-col gap-2 border rounded-2xl p-3 shadow-xl'>
    <div className='flex justify-between mb-3'>
    <span className='bg-violet-200 text-violet-500 px-3  rounded-2xl'> list name</ span>
    <div className='flex gap-2'>
<button className='cursor-pointer' onClick={()=>{router.push('/tasks/edit-task')}} >{dueDate? <img src='/icons/checkmark-square-03.png' /> :<img src="/icons/edit-02.png" alt="" />}</button>
<button className='cursor-pointer' ><img src="/icons/delete-03.png" alt="" /></button>
<button className='cursor-pointer' onClick={()=>{router.push('/tasks/view-task')}} ><img src="/icons/view.png" alt="" /></button>
    </div>
    </div>
    
    <div className='bg-gray-200 rounded-xl mb-3 p-2 text-black truncate'>
{list.title}
    </div>
<div className='flex justify-between mb-3'>
<button onClick={()=>setOpen(true)} className='bg-gray-200 w-full text-black px-3 py-1 rounded-lg flex justify-between items-center'>
    <p className={`cursor-pointer ${dueDate&&'text-lime-600'}`}>{dueDate ? dueDate.format('MMM D, YYYY') : 'set due date'}</p>
    <img src="/icons/calendar-03.png" alt="" />
    </button>

<div className='flex gap-1 text-black text-sm items-center bg-gray-200 rounded-xl pr-4 ml-2'>
<img src="/icons/arrow-down.png" alt="" />
<p>Low</p>
</div>
</div>

<div className='bg-gray-200 rounded-2xl gap-1 text-black p-2 flex items-center'>
<img src={list.img} alt="" />
<p>{list.name}</p>
</div>
    
    </div>
</>
)
}

export default TaskCard