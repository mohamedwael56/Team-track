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
           <div>
            <div className="flex items-center gap-20">
                <div className="flex capitalize flex-col items-center">
                <p className='bg-violet-600 rounded-full px-2'>1</p>
                <p className='mt-4 text-black'>confirm old password</p>
                </div>
             <div className="flex capitalize flex-col items-center">
                <p className='bg-gray-300 rounded-full px-2'>1</p>
                <p className='mt-4 text-gray-300'>create new password</p>
                </div>
            </div>
            <div className="bg-gray-200 w-full mt-5 text-black p-5 flex flex-col rounded-2xl">
<h1>old password</h1>
<input type="text" name="" id="" placeholder='Enter old password' className='rounded-lg mt-2 bg-gray-100 border py-2 pl-5 border-gray-300' />
                      <button className='bg-blue-900 mt-4 rounded-2xl py-2 text-white cursor-pointer'>Next</button>

            </div>
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