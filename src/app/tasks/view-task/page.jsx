'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import DeleteMessage from '@/components/DeleteMessage'
import ConfirmMessage from '@/components/ConfirmMessage'
import EditComments from './Edit-comments'
import DashboardPage from './Dashboard-page'
import TaskDescription from './TaskDescription'
import ListDetails from './ListDetails'
import Attachments from './Attachments'
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

<div className='flex-1 lg:ml-69'>
<main>
    {
        
        comments&&(<>
            <div className='fixed z-60 inset-0 bg-black opacity-50'></div>
      <div className=" z-60 inset-0 flex justify-end sticky">
<div className="bg-gray-100 flex flex-col h-screen lg:w-200 p-5 mr-5 rounded-xl">
    <div className="flex justify-between items-center">
<h1 className='text-black lg:text-xl text-base select-none'>comments</h1>
<button onClick={()=>setComments(false)} className='text-zinc-900 cursor-pointer text-3xl'>×</button>
    </div>
    
        {
            peopleComments.map((comment)=>{
                return(
                
                    <div key={comment.id} className="flex mt-7 justify-between">
    
            <EditComments comment={comment} setModalType={setModalType} modalType={modalType} />

            
               </div>

                
                )
            })
        }
    

  
  
   
    </div>
      </div>
        </>)}
    
   <ConfirmMessage text={{ title: 'Done!', description: 'Task is deleted successfully' }} show={modalType==='ConfirmMessage'} onClose={() => setModalType(null)} />
<DeleteMessage text={{ title: 'Delete File ?', description: 'Are you sure you want to delete this file?' }} show={modalType==='deleteFile'} onClose={() => setModalType(null)} onConfirm={() => {setModalType('ConfirmMessage') }} />
<div className='flex flex-col gap-5 m-5 lg:w-full w-80 bg-white rounded-2xl p-5'>

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
<div className='flex lg:flex-row flex-col justify-between mt-2'>
    <div className='flex flex-col'>

<DashboardPage />
<TaskDescription />

</div>


<ListDetails />

</div>
<div>
   <Attachments />
</div>
</div>

</main>
</div>
    </div>

)
}

export default Page