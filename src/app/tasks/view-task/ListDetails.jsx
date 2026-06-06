import React from 'react'

function ListDetails() {
  return (
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
        <div className='border whitespace-nowrap select-none border-gray-300 rounded-xl mb-3 px-3 lg:w-100 flex py-2 text-black bg-gray-50'>
      Week Days (Sun,Mon,Tue)
        </div>
    </div>
</div>  )
}

export default ListDetails