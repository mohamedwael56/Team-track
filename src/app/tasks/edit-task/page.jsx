'use client';
import Sidebar from '@/components/sidebar'
import React from 'react'
import Header from '@/components/header'
import Link from 'next/link'
import { useState } from 'react'
import PopUp from './popup';
import Attachments from './Attachments';
import Description from './Description';
import ListDetails from './List-Details';
import SubTaskList from './SubTaskList';

function Page() {
    const [dueDate, setDueDate] = useState(null); 
    const [open, setOpen] = useState(false);
    const [tempDate,setTempDate]= useState(null)
   const [modalType,setModalType]=useState(null)
    const confirmDate=()=>{
    setDueDate(tempDate)
    setOpen(false)
}
const changeDate=(newValue)=>{
 setTempDate(newValue)
}


  
   
      



  return (
   

    <div className='flex'>

<div className='flex-1 ml-69'>
<Header />
<main>
   
<PopUp open={open}
  setOpen={setOpen}
  modalType={modalType}
  setModalType={setModalType}
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
<button onClick={()=>setModalType('discardChange')} className="cursor-pointer text-red-500 px-4 py-2 rounded-lg">discard</button>
<button onClick={()=>setModalType('success')} className= "cursor-pointer bg-blue-900 text-white px-4 py-2 rounded-lg">Save Changes</button>
</div>
</div>
<hr />
<div className='flex justify-between mt-2'>
    <div className='flex flex-col'>
<SubTaskList setModalType={setModalType} />
<Description />

</div>

<ListDetails dueDate={dueDate} setOpen={setOpen}  />
</div>
<div>
    <Attachments />
</div>
</div>

</main>
</div>
<Sidebar />
    </div>

)
}

export default Page