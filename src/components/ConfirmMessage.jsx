import React from 'react'

function ConfirmMessage({show,onClose,text}) {
    if (!show) {
        return null;
      }
  return (
     
        <>
        <div className='fixed inset-0 bg-black z-60 opacity-50 '></div>
        <div className='fixed flex justify-center items-center z-60 p-5 inset-0'>
        <div className="flex flex-col items-center justify-center w-100 bg-gray-100 p-5 rounded-2xl">
        <img src="/icons/icon(5).png" alt="" className='my-5' />
    <h1 className='text-black my-3 font-bold'>Done!</h1>
    <p className='text-gray-500 mx-5 '> Task is deleted successfully  </p>
    <button onClick={onClose} className='w-full cursor-pointer border rounded-2xl mt-7 bg-blue-900 py-3'>Got it</button>     
        </div>
        </div>
        
        </>

  )
}

export default ConfirmMessage