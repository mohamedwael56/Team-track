import React from 'react'

function Leave() {
  return (
<div className="">
<div className="text-black mb-4">Requests Details</div>

  <div className="p-5 border rounded-2xl flex flex-col shadow-xs"></div>
     <div className="text-black">leave duration</div>
     <div className="flex gap-20 items-center mt-2">
        <div className="flex items-center gap-3">
        <input defaultChecked='checked' type="radio" name="leave" id="leave" className="accent-blue-900 "/>
<label htmlFor="leave" className='text-blue-900'>Full day</label>
       </div>
 <div className="flex items-center gap-3">
        <input  type="radio" name="leave" id="leave1"     className="accent-blue-900 " />
<label htmlFor="leave1" className='text-black'>partial day</label>
       </div>        
     </div>
     <div className="flex flex-col mt-5">
<p className='text-black'>Leave Type</p>
<select name="" id="" className='rounded-lg w-full border border-gray-800 p-2 pl-4 mt-2'>
    <option value="select">select</option>
</select>
     </div>
     <div className="flex justify-between gap-5 items-center mt-5">
        <div className="relative w-full flex flex-col gap-2">
    <p className='text-black'>leave date</p>
    <button  className='px-5 py-2 flex justify-between border cursor-pointer rounded-xl '>
        <p>select date</p>
        <img src="/icons/calendar.png" alt="" />
        </button>

        </div>
        <div className="flex w-full mt-2 flex-col">
        <p className='text-black'>leave date</p>
    <button  className='px-5 py-2 flex justify-between border cursor-pointer rounded-xl '>
        <p>select date</p>
        <img src="/icons/calendar.png" alt="" />
        </button>

</div>
     </div>
     <div className="flex flex-col mt-5 ">
<p className='text-black'>reason</p>
<textarea type="text" placeholder='write reason here...' className='p-5 rounded-xl border border-gray-400 h-50  text-black'/>

     </div>
     <div className="flex flex-col mt-5">
<p className='text-black'>Attach File</p>
<input type="file" id='file' hidden />
<label htmlFor="file" className='border p-5 cursor-pointer text-center text-black border-gray-400 rounded-xl'>click to upload</label>
     </div>
      </div>  )
}

export default Leave