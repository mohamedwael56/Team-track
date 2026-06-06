'use client'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { useState } from 'react'

function Page() {
    const invitationRequests=[
        {
            id:1,
            name:'mohamed ahmed',
            avatar:'/mohamed.png',
            time:'9 days ago',
        },
        {
            id:2,
            name:'ahmed mohamed',
            avatar:'/mohamed.png',
            time:'5 days ago',
        },
        {
            id:3,
            name:'mohamed ali',
            avatar:'/mohamed.png',
            time:'3 days ago',
        },
        {
            id:4,
            name:'mohamed ahmed',
            avatar:'/mohamed.png',
            time:'9 days ago',
        },
        {
            id:5,
            name:'ahmed mohamed',
            avatar:'/mohamed.png',
            time:'5 days ago',
        },
        {
            id:6,
            name:'mohamed ali',
            avatar:'/mohamed.png',
            time:'3 days ago',
        },
        {
            id:7,
            name:'mohamed ahmed',
            avatar:'/mohamed.png',
            time:'9 days ago',
        },
        {
            id:8,
            name:'ahmed mohamed',
            avatar:'/mohamed.png',
            time:'5 days ago',
        },
        {
            id:9,
            name:'mohamed ali',
            avatar:'/mohamed.png',
            time:'3 days ago',
        },
        {
            id:10,      
            name:'mohamed ahmed',   
            avatar:'/mohamed.png',
            time:'9 days ago',  
        },
        {   
            id:11,  
            name:'ahmed mohamed',   
            avatar:'/mohamed.png',
            time:'5 days ago',  
        },  
        {       
            id:12,  
            name:'mohamed ali',
            avatar:'/mohamed.png',
            time:'3 days ago',  

        },
{
            id:13,
            name:'mohamed ahmed',
            avatar:'/mohamed.png',
            time:'9 days ago',
        },
        {
            id:14,
            name:'ahmed mohamed',
            avatar:'/mohamed.png',
            time:'5 days ago',
        },
        {
            id:15,
            name:'mohamed ali',
            avatar:'/mohamed.png',
            time:'3 days ago',
}
    ]
        const [openMessage, setOpenMessage] = useState(false);
    
  return (
    <div className='flex'>
        <div className="flex-1 ml-69">
          
            <main>
                {
openMessage&&(
<>
<div className="bg-black fixed inset-0 opacity-50 z-50"></div>
<div className="absolute inset-0 z-50 flex items-center justify-center">
    <div className="bg-white items-center flex flex-col p-5 rounded-2xl">
   <img src="/icons/icon(2).png" alt="" />
   <h1 className='text-black my-5 text-xl'>reject invitation!</h1>
   <p className='text-gray-400'>are you sure you want to reject this invitation ?</p>
   <div className="w-full flex gap-5 mt-5">
  <button onClick={()=>setOpenMessage(false)} className='flex-1 rounded-2xl text-blue-900 border border-blue-900 py-2 px-5 cursor-pointer'> keep</button>
<button onClick={()=>setOpenMessage(false)} className='flex-1 bg-red-600 rounded-2xl text-white py-2 px-5 cursor-pointer'>Reject</button>
 </div>
    </div>
</div>
</>
)
    }
                <div className="flex flex-col bg-gray-100 p-5 rounded-2xl">
<div className="flex items-center gap-5 mb-5">
<Link href="/lists" className='text-blue-500'>back</Link>
<p className='text-black font-bold text-xl'>lists invitations</p>
</div>
<hr />
<div className="grid grid-cols-3 mt-5 gap-5">
    {
        invitationRequests.map((request)=>{
            return(
                <Fragment key={request.id}>
                  <div className="border text-xs shadow-sm flex flex-col rounded-2xl p-5">
<div className="flex justify-between items-center">
    <div className="flex gap-2 flex-row items-center">
        <img src="/profile/view-circle.png" className='w-5' alt="" />
        <img src={request.avatar} className='w-8' alt="" />
        <p className='text-black font-bold'>{request.name}</p>
    </div>
    <div className="text-gray-400">{request.time}</div>
</div>
<div className="flex gap-1 my-2">
    <p className='text-gray-400'>Sent you a collaboration invite to</p>
    <Link href='/lists/lists-invitations' className='font-bold text-blue-500'> My List</Link>
</div>
<div className="flex gap-2">
    <button onClick={()=>setOpenMessage(true)} className='flex-1 bg-red-200 rounded-2xl text-red-500 py-2 px-5 cursor-pointer'>reject</button>
    <button className='flex-1 bg-blue-900 rounded-2xl cursor-pointer py-2 px-5 text-white'>accept</button>
</div>
</div>
                </Fragment>
            )
    })}
     
 
</div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Page