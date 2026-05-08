import React from 'react'

function DeleteMessage({show,onClose,onConfirm ,text}) {
    if (!show) {
        return null;
      }
      function handleConfirm() {
        onClose();
        onConfirm();
      }
  return (
   
        <>
        <div className='fixed inset-0 bg-black z-60 opacity-50 '></div>
        <div className='fixed flex justify-center items-center z-60 p-5 inset-0'>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-5 rounded-2xl">
       
        <img src="/icons/delete-03.png" alt="" className='bg-red-100 p-5 rounded-full my-5 ' />
    <h1 className='text-black my-3 font-bold'>{text.title}</h1>
        <p className='text-gray-500 '>{text.description} </p>
        <p className='text-gray-500 '>this action is irreversible</p>
<div className='flex gap-2 w-full mt-5'>
<button onClick={onClose} className='w-full cursor-pointer border rounded-2xl border-indigo-500 text-indigo-500'>cancel</button>
<button onClick={handleConfirm} className='w-full bg-red-500 py-3 rounded-xl cursor-pointer'>delete</button>
</div>
            
        </div>
        </div>
        
        </>
   
  )
}

export default DeleteMessage