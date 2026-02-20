import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import React from 'react'

function page() {
  return (
    <div className='flex'>
        <div className="flex-1 ml-69">
            <Header />
            <main>
                <div className="bg-gray-100 p-5 flex flex-col rounded-2xl h-screen">
            <div className="text-black text-2xl font-bold">
                settings
            </div>
            <div className="flex my-5 text-black flex-row gap-4">
                <button className='border border-violet-400 px-5 py-1 text-violet-500 rounded-2xl cursor-pointer'>password</button>
                <button className='cursor-pointer'>language</button>
                <button className='cursor-pointer'>about buy2</button>
                <button className='cursor-pointer'>terms of use</button>
                <button className='cursor-pointer'>privacy policy</button>
            </div>
            <hr />
            <div className="w full text-white flex flex-col mt-6 items-center justify-center">
           
            <div className="bg-gray-200 w-100 mt-5  text-black p-5 flex flex-col rounded-2xl">
<h1>change language</h1>
<div className="flex items-center gap-2 mt-2 text-lg">
<input type="radio" name="language" id="arabic"  className='w-4 h-4'  />
<label htmlFor="arabic" className='flex gap-2 items-center'>
    <img src="/setting/sa.png" alt=""  />
     Arabic</label>
</div>
<div className="flex items-center gap-2 my-4 text-lg">
<input type="radio" name="language" id="english" className='w-4 h-4' />
<label className='flex gap-2 items-center' htmlFor="english">
    <img src="/setting/gb.png" alt="" />
     English</label>
</div>
                      <button className='bg-blue-900 mt-4 w-full rounded-2xl py-2 text-white cursor-pointer'>apply changes</button>
                      <button className='bg-red-600 mt-4 w-full rounded-2xl py-2 text-white cursor-pointer'>discard</button>

            </div>
            </div>
                </div>
            </main>
        </div>
        <Sidebar />
    </div>
  )
}

export default page