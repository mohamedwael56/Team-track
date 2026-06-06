import React from 'react'
import { useState } from 'react';
import DatePopUp from '@/components/DatePopUp';
import { useRouter } from 'next/navigation';
import DeleteMessage from '@/components/DeleteMessage';
import { Title } from 'chart.js';
function TaskCard({list}) {
    const router = useRouter()
const [dueDate, setDueDate] = useState(null); 
const [open, setOpen] = useState(false);
const [deleteMessage,setDeleteMessage]=useState(false)

  return (
    <>
<DatePopUp setDueDate={setDueDate}  show={open} Closing={()=>setOpen(false)} />
<DeleteMessage show={deleteMessage} text={{title:'Delete Task ?',description:'Are you sure you want to delete this task?'}} onConfirm={()=>setDeleteMessage(false)} onClose={()=>setDeleteMessage(false)} />
 <div  className='flex flex-col gap-2 border rounded-2xl p-3 shadow-xl'>
    <div className='flex justify-between mb-3'>
    <span className='bg-violet-200 text-violet-500 px-3  rounded-2xl'> list name</ span>
    <div className='flex gap-2'>
<button className='cursor-pointer' onClick={()=>{router.push('/tasks/edit-task')}} >{dueDate? <img src='/icons/checkmark-square-03.png' /> :<img src="/icons/edit-02.png" alt="" />}</button>
<button className='cursor-pointer' onClick={()=>setDeleteMessage(true)} ><img src="/icons/delete-03.png" alt="" /></button>
<button className='cursor-pointer' onClick={()=>{router.push('/tasks/view-task')}} ><img src="/icons/view.png" alt="" /></button>
    </div>
    </div>
    
    <div className='bg-gray-200 rounded-xl mb-3 p-2 text-black truncate'>
{list.label}
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