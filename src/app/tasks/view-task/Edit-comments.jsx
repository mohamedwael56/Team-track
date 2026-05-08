import React from 'react'
import DeleteMessage from '@/components/DeleteMessage'
import ConfirmMessage from '@/components/ConfirmMessage'
import { useState } from 'react'
function EditComments({comment,modalType,setModalType}) {



    const changeText=()=>{
        setText(editText)
        setClickedEdit(false)
      
     }
        const [editText,setEditText]=useState('')
        const [text,setText]=useState('Lorem ipsum dolor, sit amet consectetur adipisicing elit.')
        const [open,setOpen]=useState(false)
        const[clickedEdit,setClickedEdit]=useState(false)
        
    
  return (
    <>
   <div className="flex gap-2 items-center">
<img src={comment.img} alt="" />
<div className="flex flex-col">
    <h1 className='text-black font-bold'>{comment.name}</h1>
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
        <div className="bg-white border flex flex-col gap-2 px-3 absolute mt-6 right-10 w-25  border-gray-300 py-2 z-50 shadow-xl rounded-xl">
       <button onClick={()=>setClickedEdit(true)} className='cursor-pointer text-black flex items-center gap-2 '>
        <img className='w-4' src="/icons/edit-02.png" alt="" />
        Edit</button>
       <button onClick={()=>setModalType('deleteComment')} className='cursor-pointer text-black flex items-center gap-2'>
        <img className='w-4' src="/icons/delete-03.png" alt="" />
        Delete</button>
       <ConfirmMessage show={modalType==='confirmDeleteComment'} onClose={() => setModalType(null)} />
         <DeleteMessage text={{ title: 'Delete Comment ?', description: 'Are you sure you want to delete this comment ?' }} show={modalType==='deleteComment'} onClose={() => setModalType(null)} onConfirm={() => {setModalType('confirmDeleteComment')}}  />
         
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
 </> )
}

export default EditComments