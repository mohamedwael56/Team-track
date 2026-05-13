import React from 'react'

function sort({show,setModalType,setOpen}) {
    if(!show){
        return false
    }
  return (
     <>
        <div  className='bg-black inset-0 fixed z-60 opacity-50 '></div>
           <div className="sticky h-screen inset-0 flex items-center justify-end z-60 ">
<div className="bg-gray-100 px-5 py-3 h-full w-100 rounded-2xl gap-5 flex flex-col ">
<div className="flex gap-2 bg-gray-200 p-2 w-full rounded-xl">
    <button onClick={()=>{setModalType('filter')}} className='w-full cursor-pointer text-gray-500'>filter</button>
    <button  className='w-full text-white bg-blue-900 rounded-xl py-2 cursor-pointer'>sort</button>

</div>
  
    <form className="">
        <h1 className='text-black mb-3'>Sort options</h1>
      
       <div className='border text-black border-gray-300 p-5 w-full flex flex-col gap-5 rounded-2xl'>
       <div className="flex justify-between">
        <label  htmlFor="highest">
           Task name
        </label>
         <input id='highest'  name='priority' className='accent-blue-900 scale-120' type="radio" />
      </div>
       <div className="flex justify-between">
        <label  htmlFor="high">
           Creation date
        </label>
         <input id='high' name='priority' className='accent-blue-900 scale-120' type="radio" />
      </div>
       <div className="flex justify-between">
        <label  htmlFor="medium">
           Due date
        </label>
         <input id='medium' name='priority' className='accent-blue-900 scale-120' type="radio" />
      </div>
        </div>
    </form>
   
    <div className="mt-auto flex gap-2 w-full">
<button className='w-full text-lg bg-gray-200 rounded-2xl py-3 text-blue-800 cursor-pointer'>Clear</button>
<button onClick={()=>{setModalType('sort-date')}} className='w-full bg-blue-900 text-white rounded-2xl cursor-pointer'>Apply</button>
    </div>
</div>
        </div>
       </>  )
}

export default sort