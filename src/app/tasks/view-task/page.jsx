'use client'
import Sidebar from '@/components/sidebar'
import React from 'react'
import Header from '@/components/header'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
function Page() {
    const [comments,setComments]=useState()
    const router = useRouter()
    const [open,setOpen]=useState(false)
    const [open1,setOpen1]=useState(false)
    const [open2,setOpen2]=useState(false)
    const [deleteFile,setDeleteFile]=useState(false)
    const [confirmDeleteFile,setConfirmDeleteFile]=useState(false)
        const [deleteTask,setDeleteTask]=useState(false)
        const [confirmDeleteTask,setConfirmDeleteTask]=useState(false)
        const [editText,setEditText]=useState('')
        const[clickedEdit,setClickedEdit]=useState(false)
       const [text,setText]=useState('Lorem ipsum dolor, sit amet consectetur adipisicing elit.')
     const changeText=()=>{
        setText(editText)
        setClickedEdit(false)
      
     }
       return (

    <div className='flex'>

<div className='flex-1 ml-69'>
<Header />
<main>
    {
        
        comments&&(<>
            <div className='fixed z-60 inset-0 bg-black opacity-50'></div>
      <div className=" z-60 inset-0 flex justify-end sticky">
<div className="bg-gray-100 flex flex-col h-screen w-200 p-5 mr-5 rounded-xl">
    <div className="flex justify-between items-center">
<h1 className='text-black text-xl select-none'>comments</h1>
<button onClick={()=>setComments(false)} className='text-zinc-900 cursor-pointer text-3xl'>×</button>
    </div>
    <div className="flex mt-7 justify-between">
<div className="flex gap-2 items-center">
<img src="/avatar(4).png" alt="" />
<div className="flex flex-col">
    <h1 className='text-black font-bold'>Ahmed Mahmoud</h1>
    <p className='text-zinc-800'>{text}</p>
{
    clickedEdit&&(
       <>
      <textarea className=' text-black bg-gray-200 py-2 px-5' onChange={(e)=>setEditText(e.target.value)} />
    <div className="flex mt-5 gap-2">
    <button onClick={()=>setClickedEdit(false)} className='w-full cursor-pointer bg-red-600 text-white rounded-xl py-2'>discard</button>
    <button onClick={changeText} className='w-full cursor-pointer text-white rounded-xl py-2 bg-blue-900'>save</button>
    </div>
    </>
    )
}
</div>
</div>
<div className="flex flex-col items-end">
    <div className="flex gap-5 items-center text-gray-400">
<p>3m ago</p>
<button onClick={()=>setOpen(!open)} className='cursor-pointer text-xl' >⋮</button>
    </div>
     {open && (
        <div className="bg-white border flex flex-col gap-2 px-3 absolute mt-6 right-10 w-25 text-black border-gray-300 py-2 z-50 shadow-xl rounded-xl">
       <button onClick={()=>setClickedEdit(true)} className='cursor-pointer flex items-center gap-2 '>
        <img className='w-4' src="/icons/edit-02.png" alt="" />
        Edit</button>
       <button onClick={()=>setDeleteTask(true)} className='cursor-pointer flex items-center gap-2'>
        <img className='w-4' src="/icons/delete-03.png" alt="" />
        Delete</button>
        {confirmDeleteTask&&(
        <>
        <div className='fixed inset-0 bg-black z-60 opacity-50 '></div>
        <div className='fixed flex justify-center items-center z-60 p-5 inset-0'>
        <div className="flex flex-col items-center justify-center w-100 bg-gray-100 p-5 rounded-2xl">
        <img src="/icons/icon(5).png" alt="" className='my-5' />
    <h1 className='text-black my-3 font-bold'>Done!</h1>
    <p className='text-gray-500 mx-5 '> Task is deleted successfully  </p>
    <button onClick={()=>setConfirmDeleteTask(false)} className='w-full text-white cursor-pointer border rounded-2xl mt-7 bg-blue-900 py-3'>Got it</button>     
        </div>
        </div>
        
        </>
    )}
         {deleteTask&&(
        <>
        <div className='fixed inset-0 bg-black z-60 opacity-50 '></div>
        <div className='fixed flex justify-center items-center z-60 p-5 inset-0'>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-5 rounded-2xl">
       
        <img src="/icons/delete-03.png" alt="" className='bg-red-100 p-5 rounded-full my-5 ' />
    <h1 className='text-black my-3 font-bold'>Delete task ?</h1>
        <p className='text-gray-500 '>Are you sure you want to delete this task ? </p>
        <p className='text-gray-500 '>this action is irreversible</p>
<div className='flex gap-2 w-full mt-5'>
<button onClick={()=>setDeleteTask(false)} className='w-full cursor-pointer border rounded-2xl border-indigo-500 text-indigo-500'>cancel</button>
<button onClick={()=>{setConfirmDeleteTask(true) 
setDeleteTask(false)}} className='w-full bg-red-500 py-3 rounded-xl text-white cursor-pointer'>delete</button>
</div>
            
        </div>
        </div>
        
        </>
    )}
         
        </div>
      )}

    <div className="flex gap-5 mr-5 text-black items-center">
       <div className="flex gap-2 items-center">
        <img src="/tasks/like.png" alt="" />
        <p>7.9M</p>
       </div>
       <div className="flex gap-2 items-center">
        <img src="/tasks/vector.png" alt="" />
        <p>reply</p>
       </div>
    </div>
</div>
    </div>
    <div className="flex mt-7 justify-between">
<div className="flex gap-2 items-center">
<img src="/avatar(4).png" alt="" />
<div className="flex flex-col">
    <h1 className='text-black font-bold'>Ahmed Mahmoud</h1>
    <p className='text-zinc-800'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

</div>

</div>
<div className="flex flex-col items-end">
    <div className="flex gap-5 items-center text-gray-400">
<p>3m ago</p>
<button onClick={()=>setOpen1(!open1)} className='cursor-pointer text-xl' >⋮</button>
    </div>
     {open1 && (
        <div className="bg-white border flex flex-col gap-2 px-3 absolute mt-6 right-10 w-25 text-black border-gray-300 py-2 z-50 shadow-xl rounded-xl">
       <button className='cursor-pointer flex items-center gap-2 '>
        <img className='w-4' src="/icons/edit-02.png" alt="" />
        Edit</button>
       <button onClick={()=>setDeleteTask(true)} className='cursor-pointer flex items-center gap-2'>
        <img className='w-4' src="/icons/delete-03.png" alt="" />
        Delete</button>
        {confirmDeleteTask&&(
        <>
        <div className='fixed inset-0 bg-black z-60 opacity-50 '></div>
        <div className='fixed flex justify-center items-center z-60 p-5 inset-0'>
        <div className="flex flex-col items-center justify-center w-100 bg-gray-100 p-5 rounded-2xl">
        <img src="/icons/icon(5).png" alt="" className='my-5' />
    <h1 className='text-black my-3 font-bold'>Done!</h1>
    <p className='text-gray-500 mx-5 '> Task is deleted successfully  </p>
    <button onClick={()=>setConfirmDeleteTask(false)} className='w-full text-white cursor-pointer border rounded-2xl mt-7 bg-blue-900 py-3'>Got it</button>     
        </div>
        </div>
        
        </>
    )}
   
         {deleteTask&&(
        <>
        <div className='fixed inset-0 bg-black z-60 opacity-50 '></div>
        <div className='fixed flex justify-center items-center z-60 p-5 inset-0'>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-5 rounded-2xl">
       
        <img src="/icons/delete-03.png" alt="" className='bg-red-100 p-5 rounded-full my-5 ' />
    <h1 className='text-black my-3 font-bold'>Delete task ?</h1>
        <p className='text-gray-500 '>Are you sure you want to delete this task ? </p>
        <p className='text-gray-500 '>this action is irreversible</p>
<div className='flex gap-2 w-full mt-5'>
<button onClick={()=>setDeleteTask(false)} className='w-full cursor-pointer border rounded-2xl border-indigo-500 text-indigo-500'>cancel</button>
<button onClick={()=>{setConfirmDeleteTask(true) 
setDeleteTask(false)}} className='w-full bg-red-500 py-3 rounded-xl text-white cursor-pointer'>delete</button>
</div>
            
        </div>
        </div>
        
        </>
    )}
        </div>
      )}
          
    <div className="flex gap-5 mr-5 text-black items-center">
       <div className="flex gap-2 items-center">
        <img src="/tasks/like.png" alt="" />
        <p>7.9M</p>
       </div>
       <div className="flex gap-2 items-center">
        <img src="/tasks/vector.png" alt="" />
        <p>reply</p>
       </div>
    </div>
</div>
    </div>
    <div className="flex mt-7 justify-between">
<div className="flex gap-2 items-center">
<img src="/avatar(4).png" alt="" />
<div className="flex flex-col">
    <h1 className='text-black font-bold'>Ahmed Mahmoud</h1>
    <p className='text-zinc-800'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
</div>
</div>
<div className="flex flex-col items-end">
    <div className="flex gap-5 items-center text-gray-400">
<p>3m ago</p>
<button onClick={()=>setOpen2(!open2)} className='cursor-pointer text-xl' >⋮</button>
    </div>
     {open2 && (
        <div className="bg-white border flex flex-col gap-2 px-3 absolute mt-6 right-10 w-25 text-black border-gray-300 py-2 z-50 shadow-xl rounded-xl">
       <button className='cursor-pointer flex items-center gap-2 '>
        <img className='w-4' src="/icons/edit-02.png" alt="" />
        Edit</button>
       <button onClick={()=>setDeleteTask(true)} className='cursor-pointer flex items-center gap-2'>
        <img className='w-4' src="/icons/delete-03.png" alt="" />
        Delete</button>
        {confirmDeleteTask&&(
        <>
        <div className='fixed inset-0 bg-black z-60 opacity-50 '></div>
        <div className='fixed flex justify-center items-center z-60 p-5 inset-0'>
        <div className="flex flex-col items-center justify-center w-100 bg-gray-100 p-5 rounded-2xl">
        <img src="/icons/icon(5).png" alt="" className='my-5' />
    <h1 className='text-black my-3 font-bold'>Done!</h1>
    <p className='text-gray-500 mx-5 '> Task is deleted successfully  </p>
    <button onClick={()=>setConfirmDeleteTask(false)} className='w-full text-white cursor-pointer border rounded-2xl mt-7 bg-blue-900 py-3'>Got it</button>     
        </div>
        </div>
        
        </>
    )}
         {deleteTask&&(
        <>
        <div className='fixed inset-0 bg-black z-60 opacity-50 '></div>
        <div className='fixed flex justify-center items-center z-60 p-5 inset-0'>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-5 rounded-2xl">
       
        <img src="/icons/delete-03.png" alt="" className='bg-red-100 p-5 rounded-full my-5 ' />
    <h1 className='text-black my-3 font-bold'>Delete task ?</h1>
        <p className='text-gray-500 '>Are you sure you want to delete this task ? </p>
        <p className='text-gray-500 '>this action is irreversible</p>
<div className='flex gap-2 w-full mt-5'>
<button onClick={()=>setDeleteTask(false)} className='w-full cursor-pointer border rounded-2xl border-indigo-500 text-indigo-500'>cancel</button>
<button onClick={()=>{setConfirmDeleteTask(true) 
setDeleteTask(false)}} className='w-full bg-red-500 py-3 rounded-xl text-white cursor-pointer'>delete</button>
</div>
            
        </div>
        </div>
        
        </>
    )}
        </div>
      )}

    <div className="flex gap-5 mr-5 text-black items-center">
       <div className="flex gap-2 items-center">
        <img src="/tasks/like.png" alt="" />
        <p>7.9M</p>
       </div>
       <div className="flex gap-2 items-center">
        <img src="/tasks/vector.png" alt="" />
        <p>reply</p>
       </div>
    </div>
</div>
    </div>
  
   
    </div>
      </div>
        </>)
    }
     {confirmDeleteFile&&(
        <>
        <div className='fixed inset-0 bg-black z-60 opacity-50 '></div>
        <div className='fixed flex justify-center items-center z-60 p-5 inset-0'>
        <div className="flex flex-col items-center justify-center w-100 bg-gray-100 p-5 rounded-2xl">
        <img src="/icons/icon(5).png" alt="" className='my-5' />
    <h1 className='text-black my-3 font-bold'>Done!</h1>
    <p className='text-gray-500 mx-5 '> Task is deleted successfully  </p>
    <button onClick={()=>setConfirmDeleteFile(false)} className='w-full text-white cursor-pointer border rounded-2xl mt-7 bg-blue-900 py-3'>Got it</button>     
        </div>
        </div>
        
        </>
    )}
{deleteFile&&(
        <>
        <div className='fixed inset-0 bg-black z-60 opacity-50 '></div>
        <div className='fixed flex justify-center items-center z-60 p-5 inset-0'>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-5 rounded-2xl">
       
        <img src="/icons/delete-03.png" alt="" className='bg-red-100 p-5 rounded-full my-5 ' />
    <h1 className='text-black my-3 font-bold'>Delete task ?</h1>
        <p className='text-gray-500 '>Are you sure you want to delete this task ? </p>
        <p className='text-gray-500 '>this action is irreversible</p>
<div className='flex gap-2 w-full mt-5'>
<button onClick={()=>setDeleteFile(false)} className='w-full cursor-pointer border rounded-2xl border-indigo-500 text-indigo-500'>cancel</button>
<button onClick={()=>{setConfirmDeleteFile(true) 
setDeleteFile(false)}} className='w-full bg-red-500 py-3 rounded-xl text-white cursor-pointer'>delete</button>
</div>
            
        </div>
        </div>
        
        </>
    )}
<div className='flex flex-col gap-5 m-5 bg-white rounded-2xl p-5'>

<div className='flex justify-between mb-2'>
<div className='flex gap-3 items-center'>
<Link href="/tasks" className="text-blue-900 hover:text-blue-700">Back</Link>
<p className='text-2xl text-black '>View task</p>
</div>
<div className='flex gap-2 items-center'>
<button onClick={()=>{router.push('/tasks/edit-task')}} className='cursor-pointer'><img src="/icons/edit-02.png" alt="" /></button>
<button onClick={()=>setDeleteFile(true)} className='cursor-pointer'><img src="/icons/delete-03.png" alt="" /></button>
<button onClick={()=>setComments(true)} className='cursor-pointer'><img src="/icons/comments.svg" alt="" /></button>
</div>
</div>
<hr />
<div className='flex justify-between mt-2'>
    <div className='flex flex-col'>
<div className='border shadow-xl flex flex-col rounded-2xl p-3'>
<div className='flex justify-between items-center text-black'>
<p className='text-xl mr-3'>Revision 1: Fixing Navbar at Dashboard Page</p>
50%
</div>

<div className="w-full mt-2 bg-gray-50 rounded-full h-3">
 <div
    className="bg-green-600 h-3 rounded-full transition-all duration-500"
    style={{ width: "50%" }}
  ></div>
</div>

<div className='bg-gray-50 rounded-2xl items-center p-3 mt-3 justify-between flex text-black'>
<p>Change the icons to font awesome icons.</p>
<select disabled className='bg-red-200 text-red-600 pl-2 py-1 rounded-lg' name="" id="">
    <option value="">To-do</option>
</select>
</div>
<div className='bg-gray-50 rounded-2xl items-center p-3 mt-3 justify-between flex text-black'>
<p>Adjust the size to responsive mobile.</p>
<select disabled className='bg-green-100 text-green-600 pl-2 py-1 rounded-lg' name="" id="">
    <option  value="">Completed</option>
</select>
</div>
<div className='bg-gray-50 rounded-2xl items-center p-3 mt-3 justify-between flex text-black'>
<p>Activate the navigation buttons to direct the users.</p>
<select disabled className='bg-red-200 text-red-600 pl-2 py-1 rounded-lg' name="" id="">
    <option value="">To-do</option>
</select>
</div>
<div className='bg-gray-50 rounded-2xl items-center p-3 mt-3 justify-between flex text-black'>
<p>Activate the navigation buttons to direct the users.</p>
<select disabled className='bg-green-100 text-green-600 pl-2 py-1 rounded-lg' name="" id="">
    <option value="">Completed</option>
</select>
</div>

</div>
<div className='border shadow-xl mt-11 flex flex-col rounded-2xl p-3'>
<h1 className='text-xl mt-3 mb-1 text-black'>Task Description</h1>
<div className='border my-5 p-5 rounded-xl text-zinc-800'>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus mollitia eligendi accusamus tempora laudantium. Eveniet laborum, doloribus quos obcaecati eaque ut cumque voluptatem, culpa quo, voluptas tempora voluptatibus? Ab, porro.
</div>
</div>

</div>
<div className='ml-5 border shadow-xl flex flex-col rounded-2xl p-3'>
    <div>
        <p className=' mb-2 text-gray-500'>List Name</p>
        <div className='border select-none text-blue-800 border-gray-300 rounded-lg mb-3 px-3 py-2  bg-gray-50'>
     Backend bugs team
        </div>
    </div>
    <div>
        <p className='text-gray-500 mb-2'>status</p>
        <div  className='border flex select-none border-gray-300 rounded-xl mb-3 px-3 py-2  text-orange-500 bg-gray-50'>
           <p className='bg-orange-100 rounded-xl py-1 px-3 '>in progress</p>
          
        </div>
    </div>
    <div>
        <p className='text-black mb-2'>due date</p>
        <button className=' flex text-lime-500 border-gray-300 justify-between border rounded-xl mb-3 px-4 cursor-pointer py-2  bg-gray-50 w-full'>
            <p className='flex items-start'>20/02/2024</p>
            <img src="/icons/calendar.png" alt="calendar icon" />
        </button>
    </div>
    <div>
        <p className='text-black mb-2'>Assigned To</p>
        <div className='border flex gap-2 border-gray-300 rounded-xl mb-3 w-full px-3 py-2 text-black bg-gray-50'>
           <img src="/Ellipse-12.png" alt="" />
           <p>mohamed ahmed</p>
           </div>
    </div>
    <div>
        <p className='text-black mb-2'>Priority</p>
        <div name="" id="" className='border border-gray-300 rounded-xl mb-3 w-full py-2 px-2 text-black bg-gray-50'>
            
            Low
        </div>
    </div>
    <div>
        <p className='text-black mb-2'>Remind Me</p>
        <button name="" id="" className=' flex border-gray-300 justify-between border rounded-xl mb-3 px-4 cursor-pointer py-2 text-black bg-gray-50 w-full'>
Every two hours
        </button>
    </div>
    <div>
        <p className='text-black mb-2'>Repeat</p>
        <div className='border whitespace-nowrap select-none border-gray-300 rounded-xl mb-3 px-3 w-100 flex py-2 text-black bg-gray-50'>
      Week Days (Sun,Mon,Tue)
        </div>
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