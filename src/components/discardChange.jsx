import React from 'react'

function DiscardChange({show,onClose,onConfirm}) {
    if (!show) {
        return null;
      }
  return (

        <>
        <div className='fixed inset-0 bg-black z-60 opacity-50 '></div>
        <div className='fixed flex justify-center items-center z-60 p-5 inset-0'>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-5 rounded-2xl">
       
        <img src="/icons/icon(2).png" alt="" className='my-5' />
    <h1 className='text-black my-3 font-bold'>Discard Change ?</h1>
        <p className='text-gray-500 mx-5'>Are you sure you want to Discard the changes  </p>
        <p className='text-gray-500 '>you made for this task?</p>
<div className='flex gap-2 w-full mt-5'>
<button onClick={onClose} className='w-full cursor-pointer border rounded-2xl border-indigo-500 text-indigo-500'>cancel</button>
<button onClick={onConfirm} className='w-full bg-red-500 py-3 rounded-xl cursor-pointer'>Discard</button>
</div>
            
        </div>
        </div>
        
        </>
      )
}

export default DiscardChange