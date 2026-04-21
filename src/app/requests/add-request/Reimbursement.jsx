import React from 'react'

function Reimbursement() {
  return (
<div className="flex flex-col gap-4">
  <div className="p-5 border rounded-2xl flex flex-col shadow-xs">
    <div className="flex flex-col gap-2">
      <p className='text-black'>Reimbursement Type</p>
<button className='px-5 py-2 flex justify-between border cursor-pointer text-gray-400 rounded-xl '>select</button>
    </div>
    <div className="flex justify-between items-center my-3 gap-5">
      <div className="flex flex-col w-full gap-2">
        <p className='text-black'>Amount</p>
        <input type="text" placeholder='enter amount' className='p-3 rounded-xl border border-gray-400 text-black w-full'/>
      </div>
    </div>
    <div className="flex flex-col gap-2 mt-5">
      <p className='text-black'>Detailed explanation</p>
      <textarea placeholder='write reason here...' className='p-5 rounded-xl border border-gray-400 h-50 text-black'/>
    </div>
    <div className="flex flex-col gap-2 mt-5">
      <p className='text-black'>proof of my payment</p>
      <input type="file" id='file' hidden />
      <label htmlFor="file" className='border p-5 cursor-pointer text-center text-black border-gray-400 rounded-xl'>click to upload</label>
    </div>
  </div>
</div>

  )
}

export default Reimbursement