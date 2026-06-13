import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import React from 'react'
import { useState } from 'react'
function Page() {

  const [open ,setOpen]=useState(false)
  const [checked,setChecked]=useState('arabic')
  return (
    <>
   
            <hr />
            {
              open&&(
                <>
                <div className='fixed bg-black opacity-50 inset-0 z-50'></div>
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-2xl">
                        <p className='text-black'>Language changed successfully!</p>
                        <button className='bg-blue-900 w-full mt-4 rounded-2xl py-2 text-white cursor-pointer' onClick={()=>{setOpen(false)}}>OK</button>
                    </div>
                </div>
                </>
              )
            }
            <div className="w full text-white flex flex-col items-center justify-center">
           
            <div className="bg-gray-200 w-70 lg:w-100 mt-5  text-black p-5 flex flex-col rounded-2xl">
<h1>change language</h1>
<div className="flex items-center gap-2 mt-2 text-lg">
<input type="radio" name="language" id="arabic" checked={checked==='arabic'} onChange={()=>setChecked('arabic')} className='w-4 h-4'  />
<label htmlFor="arabic" className='flex gap-2 items-center'>
    <img src="/icons/SA.png" alt=""  />
     Arabic</label>
</div>
<div className="flex items-center gap-2 my-4 text-lg">
<input type="radio" checked={checked==='english'}  onChange={()=>setChecked('english')} name="language" id="english" className='w-4 h-4' />
<label className='flex gap-2 items-center' htmlFor="english">
    <img src="/icons/GB.png" alt="" />
     English</label>
</div>
                      <button onClick={()=>setOpen(true)} className='bg-blue-900 mt-4 w-full rounded-2xl py-2 text-white cursor-pointer'>apply changes</button>
                      <button className='bg-red-600 mt-4 w-full rounded-2xl py-2 text-white cursor-pointer'>discard</button>

            </div>
            </div>
          </>     
  )
}

export default Page