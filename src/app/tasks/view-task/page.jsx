'use client'
import Sidebar from '@/components/sidebar'
import React from 'react'
import Header from '@/components/header'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import DeleteMessage from '@/components/DeleteMessage'
import ConfirmMessage from '@/components/ConfirmMessage'
import EditComments from './Edit-comments'
function Page() {
    const [modalType,setModalType]=useState(null)
    const [comments,setComments]=useState()
    const router = useRouter()
     
     const peopleComments=[
        {
            id:1,
            img:'/avatar(4).png',
            name:'Ahmed Mahmoud',
            text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, voluptate.',
        },
        {
            id:2,
            img:'/avatar(4).png',
            name:'Ahmed Mahmoud',
            text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, voluptate.',
        },
        {
            id:3,
            img:'/avatar(4).png',
            name:'Ahmed Mahmoud',
            text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, voluptate.',
        },
     ]
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
    
        {
            peopleComments.map((comment)=>{
                return(
                    <>
                    <div key={comment.id} className="flex mt-7 justify-between">
    
            <EditComments comment={comment} setModalType={setModalType} modalType={modalType} />

            
               </div>

                </>
                )
            })
        }
    

  
  
   
    </div>
      </div>
        </>)}
    
   <ConfirmMessage text={{ title: 'Done!', description: 'Task is deleted successfully' }} show={modalType==='ConfirmMessage'} onClose={() => setModalType(null)} />
<DeleteMessage text={{ title: 'Delete File ?', description: 'Are you sure you want to delete this file?' }} show={modalType==='deleteFile'} onClose={() => setModalType(null)} onConfirm={() => {setModalType('ConfirmMessage') }} />
<div className='flex flex-col gap-5 m-5 bg-white rounded-2xl p-5'>

<div className='flex justify-between mb-2'>
<div className='flex gap-3 items-center'>
<Link href="/tasks" className="text-blue-900 hover:text-blue-700">Back</Link>
<p className='text-2xl text-black '>View task</p>
</div>
<div className='flex gap-2 items-center'>
<button onClick={()=>{router.push('/tasks/edit-task')}} className='cursor-pointer'><img src="/icons/edit-02.png" alt="" /></button>
<button onClick={()=>setModalType('deleteFile')} className='cursor-pointer'><img src="/icons/delete-03.png" alt="" /></button>
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