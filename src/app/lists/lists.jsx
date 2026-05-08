import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function Lists({list,setCreateList}) {
    const router=useRouter();
            const [confirmDeleteTask,setConfirmDeleteTask]=useState(false)
    const [deleteTask,setDeleteTask]=useState(false)
const [listOption, setListOption] = useState(false);

  return (
         <div key={list.id} className={`flex border rounded-2xl flex-col `}>
            <div className={`flex relative ${list.color} text-white px-5 py-2 rounded-xl`}>
                <h1 onClick={()=>router.push('/lists/members-list')} className='flex-1 cursor-pointer text-center capitalize'>{list.name}</h1>
                <button onClick={() => setListOption(!listOption)} className='flex  justify-end cursor-pointer text-end'>⋮</button>
               {deleteTask&&(
        <>
        <div className='fixed inset-0 bg-black z-60 opacity-50 '></div>
        <div className='fixed flex justify-center items-center z-60 p-5 inset-0'>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-5 rounded-2xl">
       
        <img src="/icons/delete-03.png" alt="" className='bg-red-100 p-5 rounded-full my-5 ' />
    <h1 className='text-black my-3 font-bold'>Delete List ?</h1>
        <p className='text-gray-500 '>Are you sure you want to delete this List ? </p>
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
              
                {
                    listOption&&(
                        <>
                       
        <div className="bg-white absolute border flex flex-col gap-2 px-3 mt-7 right-3 w-25 text-black border-gray-300 py-2 z-50 shadow-xl rounded-xl">
       <button onClick={()=>{setListOption(false)
        setCreateList('edit')}} className='cursor-pointer flex items-center gap-2 '>
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
    <p className='text-gray-500 mx-5 '> List is deleted successfully  </p>
    <button onClick={()=>setConfirmDeleteTask(false)} className='w-full text-white cursor-pointer border rounded-2xl mt-7 bg-blue-900 py-3'>Got it</button>     
        </div>
        </div>
        
        </>
    
                     
                    )
                }
                </div>
                </>
                )
                }
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
  )
}

export default Lists