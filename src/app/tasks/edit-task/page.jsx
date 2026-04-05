'use client';
import Sidebar from '@/components/sidebar'
import React from 'react'
import Header from '@/components/header'
import Link from 'next/link'
import Autocomplete from '@mui/joy/Autocomplete';
import { useState } from 'react'
import PopUp from './popup';

function Page() {
    const [dueDate, setDueDate] = useState(null); 
    const [open, setOpen] = useState(false);
    const [tempDate,setTempDate]= useState(null)
    const [deleteTask,setDeleteTask]=useState(false)
    const [confirmDeleteTask,setConfirmDeleteTask]=useState(false)
   const [updateTask,setUpdateTask]=useState(false)
const [discardChange,setDiscardChange]=useState(false)
    const confirmDate=()=>{
    setDueDate(tempDate)
    setOpen(false)
}
const changeDate=(newValue)=>{
 setTempDate(newValue)
}


        const top100Films = [
  { label: 'My design rerquests', year: 1991 },
  { label: 'development team tasks', year: 1991 },
  { label: 'backend bugs team', year: 1991 },
  { label: 'list for developers', year: 19911 },
  { label: 'any list for now', year: 1991 },
  { label: 'draft tasks for dev ops', year: 1991 },
  ]
        const status = [
  { label: 'To-do', color: 'red' },
  { label: 'completed', year: 1991 },
  { label: 'in-progress', year: 1991 },

  ]
        const assignment = [
  {label: 'mohamed wael' },
  {label: 'mohamed ahmed' },
  {label: 'ahmed mohamed' },

  ]
        const priority = [
  {label: 'highest' },
  {label: 'high' },
  {label: 'medium' },
  {label: 'low' },
  {label: 'lowest' },

  ]
        const repeat = [
  {label: 'daily' },
  {label: 'weekly' },
  {label: 'monthly' },

  ]
const subTasks=[
    
    {
    
id:'1',
title:'Change the icons to font awesome icons.',
img:'/icons/delete-03.png'
    },
    {
id:'2',
title:'Adjust the size to responsive mobile.',
img:'/icons/delete-03.png'
    },
    {
id:'3',
title:'Activate the navigation buttons to direct the users.',
img:'/icons/delete-03.png'
    },
    {
id:'4',
title:'Change the icons to font awesome icons.',
 img:'/icons/delete-03.png'
    },
    
]


  return (
   

    <div className='flex'>

<div className='flex-1 ml-69'>
<Header />
<main>
<PopUp open={open}
  setOpen={setOpen}
  deleteTask={deleteTask}
  setDeleteTask={setDeleteTask}
  confirmDeleteTask={confirmDeleteTask}
  setConfirmDeleteTask={setConfirmDeleteTask}
  updateTask={updateTask}
  setUpdateTask={setUpdateTask}
  discardChange={discardChange}
  setDiscardChange={setDiscardChange}
  tempDate={tempDate}
  changeDate={changeDate}
  confirmDate={confirmDate} />
<div className='flex flex-col gap-5 m-5 bg-gray-100 rounded-2xl p-5'>

<div className='flex justify-between mb-2'>
<div className='flex gap-3 items-center'>
<Link href="/tasks" className="text-blue-900 hover:text-blue-700">Back</Link>
<p className='text-2xl text-black '>Edit task</p>
</div>
<div className='flex gap-2 '>
<button onClick={()=>setDiscardChange(true)} className="cursor-pointer text-red-500 px-4 py-2 rounded-lg">discard</button>
<button onClick={()=>setUpdateTask(true)} className= "cursor-pointer bg-blue-900 text-white px-4 py-2 rounded-lg">Save Changes</button>
</div>
</div>
<hr />
<div className='flex justify-between mt-2'>
    <div className='flex flex-col'>
<div className='border shadow-xl flex flex-col rounded-2xl p-3'>
<div className='flex justify-between items-center text-black'>
<p className='text-xl mr-3'>Revision 1: Fixing Navbar at Dashboard Page</p>
<button className="cursor-pointer ml-5 border-none text-blue-900 hover:text-blue-700 px-4 py-2 rounded-lg  text-lg">+ Add subtask</button>
</div>
{
    subTasks.map((task)=>{
        return(

<div key={task.id} className='bg-gray-200 rounded-2xl items-center p-3 mt-3 justify-between flex text-black'>
<p>{task.title}</p>
<button onClick={()=>setDeleteTask(true)} className='cursor-pointer'>
<img src={task.img} alt=""  />
</button>
</div>

   ) })
}



</div>
<div className='border shadow-xl mt-11 flex flex-col rounded-2xl p-3'>
<h1 className='text-xl mt-3 mb-1 text-black'>Task Description</h1>
<div className='border my-5 p-5 rounded-xl text-zinc-800'>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus mollitia eligendi accusamus tempora laudantium. Eveniet laborum, doloribus quos obcaecati eaque ut cumque voluptatem, culpa quo, voluptas tempora voluptatibus? Ab, porro.
</div>
</div>

</div>
<div className='ml-5 border shadow-xl flex flex-col w-200 rounded-2xl p-3'>
    <div>
        <p className='text-black mb-2'>List Name</p>
         <Autocomplete
      placeholder="Combo box"
      options={top100Films}
      sx={{ width: '100%',height:50, borderRadius: '20px' }}
    />


    </div>
    <div>
        <p className='text-black mb-2'>status</p>
         <Autocomplete
      placeholder="Combo box"
      options={status}
      sx={{ width: '100%',height:50, borderRadius: '20px' }}
    />
    </div>
    <div>
        <p className='text-black mb-2'>due date</p>
        <button onClick={()=>setOpen(true)} className=' flex border-gray-300 justify-between border rounded-xl mb-3 px-4 cursor-pointer py-2 text-black bg-gray-100 w-full'>
            <p className='flex items-start'>{dueDate?dueDate.format('MMMM DD,YYYY'):'Select Date'}</p>
            <img src="/icons/calendar.png" alt="calendar icon" />
        </button>
    </div>
    <div>
        <p className='text-black mb-2'>Assigned To</p>
        <Autocomplete
      placeholder="Combo box"
      options={assignment}
      sx={{ width: '100%',height:50, borderRadius: '20px' }}
    />
    </div>
    <div>
        <p className='text-black mb-2'>Priority</p>
       <Autocomplete
      placeholder="Combo box"
      options={priority}
      sx={{ width: '100%',height:50, borderRadius: '20px' }}
    />
    </div>
    <div>
        <p className='text-black mb-2'>Remind Me</p>
        <button onClick={()=>setOpen(true)} className=' flex border-gray-300 justify-between border rounded-xl mb-3 px-4 cursor-pointer py-2 text-black bg-gray-100 w-full'>
            <p className='flex items-start'>{dueDate?dueDate.format('MMMM DD,YYYY,hh:mm A'):'Select Date'}</p>
            <img src="/icons/calendar.png" alt="calendar icon" />
        </button>
    </div>
    <div>
        <p className='text-black mb-2'>Repeat</p>
       <Autocomplete
      placeholder="Combo box"
      options={repeat}
      sx={{ width: '100%',height:50, borderRadius: '20px' }}
    />
    </div>
</div>
</div>
<div>
    <div className='border object-cover shadow-xl p-3 rounded-xl'>
    <div className=''>Attachment</div>
    <div className='flex gap-2'>
<button className='bg-violet-200 cursor-pointer mt-2 px-5 py-2 text-violet-500 rounded-xl'>
<div className='flex gap-2 items-center'>
<p>+</p>
<p className='text-nowrap'>upload more items </p>
</div>
</button>
<div className='border rounded-xl px-3  shadow-xl'>
<div className='flex justify-between'>
<div className='flex items-center'>
    <img src="/frame.svg" alt="" />
    <div  className='flex  flex-col ml-2'>
<p className='text-black text-sm text-nowrap'>devs presentation.pdf</p>
<p className='flex justify-start text-sm'>1.5 MB</p>
    </div>
</div>
<div className='flex items-center gap-2 ml-3'>
    <button className='cursor-pointer'><img src="/icons/view.png" alt="" /></button>
    <button className='cursor-pointer'><img src="/icons/delete-03.png" alt="" /></button>
</div>
</div>
</div>
<div className='border rounded-xl px-3  shadow-xl'>
<div className='flex justify-between'>
<div className='flex items-center'>
    <img src="/frame.svg" alt="" />
    <div className='flex  flex-col ml-2'>
<p className='text-black text-nowrap text-sm'>devs presentation.pdf</p>
<p className='flex justify-start text-sm'>1.5 MB</p>
    </div>
</div>
<div className='flex items-center gap-2 ml-3'>
    <button className='cursor-pointer'><img src="/icons/view.png" alt="" /></button>
    <button className='cursor-pointer'><img src="/icons/delete-03.png" alt="" /></button>
</div>
</div>
</div>
<div className='border rounded-xl px-3  shadow-xl'>
<div className='flex justify-between'>
<div className='flex items-center'>
    <img src="/frame.svg" alt="" />
    <div className='flex  flex-col ml-2'>
<p className='text-black text-nowrap text-sm'>devs presentation.pdf</p>
<p className='flex justify-start text-sm'>1.5 MB</p>
    </div>
</div>
<div className='flex items-center gap-2 ml-3'>
    <button className='cursor-pointer'><img src="/icons/view.png" alt="" /></button>
    <button className='cursor-pointer'><img src="/icons/delete-03.png" alt="" /></button>
</div>
</div>
</div>
    </div>
    </div>
</div>
</div>

</main>
</div>
<Sidebar />
    </div>

)
}

export default Page