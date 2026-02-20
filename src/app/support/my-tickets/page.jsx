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
            <div className="text-black mb-5 text-2xl font-bold">
                support
            </div>
            <hr />
            <div className="flex flex-col ">
            <div className="flex w-full items-center mt-5 justify-between">
             <div className="flex-1 relative">
                <button className='cursor-pointer'>
                <img src="/icons/search.png" alt="" className='absolute left-4 top-3 ' />
            </button>
            <input type="text" placeholder="Search tasks..." className="border border-gray-300 text-zinc-950 rounded-xl px-4 py-2 w-full pl-12" />
       </div>
       <div className='flex items-center ml-5 gap-3'>
        <button className='border flex gap-2 items-center rounded-2xl py-3 px-4 cursor-pointer'>
                <img src="/icons/filter.png" alt="" />
                <p className='text-black'>filter</p>
            </button>
        <button className='border bg-blue-900 flex gap-2 items-center rounded-2xl py-3 px-5 cursor-pointer'>
                <p className='text-white'> + add ticket</p>
            </button>

       </div>
    </div>
    <div className="mt-5 flex flex-col">
        <h1 className='text-black font-bold'>my tickets</h1>
        <div className="grid grid-cols-3 gap-2">
            <div className="shadow-ms py-5 px-4 border flex justify-between rounded-xl">
        <div className=" flex items-center gap-3">
<img src="/support/frame-1.png" alt="" />
<div className="flex flex-col ">
<p className='text-black font-bold'>How to uninstall the...</p>
<p className='text-gray-400'>334533</p>
</div>
        </div>
        <div className="flex justify-end gap-2 flex-col">
        <p className='bg-blue-200 text-blue-900 font-bold rounded-lg flex justify-center '>open</p>
        <p className='text-gray-400'>mar23,2022</p>
        </div>
            </div>
            <div className="shadow-ms py-5 px-4 border flex justify-between rounded-xl">
        <div className=" flex items-center gap-3">
<img src="/support/frame-1.png" alt="" />
<div className="flex flex-col ">
<p className='text-black font-bold'>How to uninstall the...</p>
<p className='text-gray-400'>334533</p>
</div>
        </div>
        <div className="flex justify-end gap-2 flex-col">
        <p className='bg-blue-200 text-blue-900 font-bold rounded-lg flex justify-center '>open</p>
        <p className='text-gray-400'>mar23,2022</p>
        </div>
            </div>
            <div className="shadow-ms py-5 px-4 border flex justify-between rounded-xl">
        <div className=" flex items-center gap-3">
<img src="/support/frame-1.png" alt="" />
<div className="flex flex-col ">
<p className='text-black font-bold'>How to uninstall the...</p>
<p className='text-gray-400'>334533</p>
</div>
        </div>
        <div className="flex justify-end gap-2 flex-col">
        <p className='bg-blue-200 text-blue-900 font-bold rounded-lg flex justify-center '>open</p>
        <p className='text-gray-400'>mar23,2022</p>
        </div>
            </div>
            <div className="shadow-ms py-5 px-4 border flex justify-between rounded-xl">
        <div className=" flex items-center gap-3">
<img src="/support/frame-1.png" alt="" />
<div className="flex flex-col ">
<p className='text-black font-bold'>How to uninstall the...</p>
<p className='text-gray-400'>334533</p>
</div>
        </div>
        <div className="flex justify-end gap-2 flex-col">
        <p className='bg-orange-100 text-orange-500 font-bold rounded-lg flex justify-center px-2 '>in progress</p>
        <p className='text-gray-400'>mar23,2022</p>
        </div>
            </div>
            <div className="shadow-ms py-5 px-4 border flex justify-between rounded-xl">
        <div className=" flex items-center gap-3">
<img src="/support/frame-1.png" alt="" />
<div className="flex flex-col ">
<p className='text-black font-bold'>How to uninstall the...</p>
<p className='text-gray-400'>334533</p>
</div>
        </div>
        <div className="flex justify-end gap-2 flex-col">
        <p className='bg-orange-100 text-orange-500 font-bold rounded-lg flex justify-center px-2 '>in progress</p>
        <p className='text-gray-400'>mar23,2022</p>
        </div>
            </div>
            <div className="shadow-ms py-5 px-4 border flex justify-between rounded-xl">
        <div className=" flex items-center gap-3">
<img src="/support/frame-1.png" alt="" />
<div className="flex flex-col ">
<p className='text-black font-bold'>How to uninstall the...</p>
<p className='text-gray-400'>334533</p>
</div>
        </div>
        <div className="flex justify-end gap-2 flex-col">
        <p className='bg-orange-100 text-orange-500 font-bold rounded-lg flex justify-center px-2'>in progress</p>
        <p className='text-gray-400'>mar23,2022</p>
        </div>
            </div>
            <div className="shadow-ms py-5 px-4 border flex justify-between rounded-xl">
        <div className=" flex items-center gap-3">
<img src="/support/frame-1.png" alt="" />
<div className="flex flex-col ">
<p className='text-black font-bold'>How to uninstall the...</p>
<p className='text-gray-400'>334533</p>
</div>
        </div>
        <div className="flex justify-end gap-2 flex-col">
        <p className='bg-green-200 text-green-500 font-bold rounded-lg flex justify-center '>solved</p>
        <p className='text-gray-400'>mar23,2022</p>
        </div>
            </div>
            <div className="shadow-ms py-5 px-4 border flex justify-between rounded-xl">
        <div className=" flex items-center gap-3">
<img src="/support/frame-1.png" alt="" />
<div className="flex flex-col ">
<p className='text-black font-bold'>How to uninstall the...</p>
<p className='text-gray-400'>334533</p>
</div>
        </div>
        <div className="flex justify-end gap-2 flex-col">
        <p className='bg-green-200 px-2 text-green-500 font-bold rounded-lg flex justify-center '>solved</p>
        <p className='text-gray-400'>mar23,2022</p>
        </div>
            </div>
            <div className="shadow-ms py-5 px-4 border flex justify-between rounded-xl">
        <div className=" flex items-center gap-3">
<img src="/support/frame-1.png" alt="" />
<div className="flex flex-col ">
<p className='text-black font-bold'>How to uninstall the...</p>
<p className='text-gray-400'>334533</p>
</div>
        </div>
        <div className="flex justify-end gap-2 flex-col">
        <p className='bg-green-200 text-green-500 font-bold rounded-lg flex justify-center px-2 '>solved</p>
        <p className='text-gray-400'>mar23,2022</p>
        </div>
            </div>
            <div className="shadow-ms py-5 px-4 border flex justify-between rounded-xl">
        <div className=" flex items-center gap-3">
<img src="/support/frame-1.png" alt="" />
<div className="flex flex-col ">
<p className='text-black font-bold'>How to uninstall the...</p>
<p className='text-gray-400'>334533</p>
</div>
        </div>
        <div className="flex justify-end gap-2 flex-col">
        <p className='bg-blue-200 text-blue-900 font-bold rounded-lg flex justify-center '>open</p>
        <p className='text-gray-400'>mar23,2022</p>
        </div>
            </div>
            <div className="shadow-ms py-5 px-4 border flex justify-between rounded-xl">
        <div className=" flex items-center gap-3">
<img src="/support/frame-1.png" alt="" />
<div className="flex flex-col ">
<p className='text-black font-bold'>How to uninstall the...</p>
<p className='text-gray-400'>334533</p>
</div>
        </div>
        <div className="flex justify-end gap-2 flex-col">
        <p className='bg-blue-200 text-blue-900 font-bold rounded-lg flex justify-center '>open</p>
        <p className='text-gray-400'>mar23,2022</p>
        </div>
            </div>
            <div className="shadow-ms py-5 px-4 border flex justify-between rounded-xl">
        <div className=" flex items-center gap-3">
<img src="/support/frame-1.png" alt="" />
<div className="flex flex-col ">
<p className='text-black font-bold'>How to uninstall the...</p>
<p className='text-gray-400'>334533</p>
</div>
        </div>
        <div className="flex justify-end gap-2 flex-col">
        <p className='bg-blue-200 text-blue-900 font-bold rounded-lg flex justify-center '>open</p>
        <p className='text-gray-400'>mar23,2022</p>
        </div>
            </div>
            <div className="shadow-ms py-5 px-4 border flex justify-between rounded-xl">
        <div className=" flex items-center gap-3">
<img src="/support/frame-1.png" alt="" />
<div className="flex flex-col ">
<p className='text-black font-bold'>How to uninstall the...</p>
<p className='text-gray-400'>334533</p>
</div>
        </div>
        <div className="flex justify-end gap-2 flex-col">
        <p className='bg-orange-100 text-orange-500 font-bold rounded-lg flex justify-center px-2 '>in progress</p>
        <p className='text-gray-400'>mar23,2022</p>
        </div>
            </div>
            <div className="shadow-ms py-5 px-4 border flex justify-between rounded-xl">
        <div className=" flex items-center gap-3">
<img src="/support/frame-1.png" alt="" />
<div className="flex flex-col ">
<p className='text-black font-bold'>How to uninstall the...</p>
<p className='text-gray-400'>334533</p>
</div>
        </div>
        <div className="flex justify-end gap-2 flex-col">
        <p className='bg-orange-100 text-orange-500 font-bold rounded-lg flex justify-center px-2 '>in progress</p>
        <p className='text-gray-400'>mar23,2022</p>
        </div>
            </div>
            <div className="shadow-ms py-5 px-4 border flex justify-between rounded-xl">
        <div className=" flex items-center gap-3">
<img src="/support/frame-1.png" alt="" />
<div className="flex flex-col ">
<p className='text-black font-bold'>How to uninstall the...</p>
<p className='text-gray-400'>334533</p>
</div>
        </div>
        <div className="flex justify-end gap-2 flex-col">
        <p className='bg-orange-100 text-orange-500 font-bold rounded-lg flex justify-center px-2'>in progress</p>
        <p className='text-gray-400'>mar23,2022</p>
        </div>
            </div>
            <div className="shadow-ms py-5 px-4 border flex justify-between rounded-xl">
        <div className=" flex items-center gap-3">
<img src="/support/frame-1.png" alt="" />
<div className="flex flex-col ">
<p className='text-black font-bold'>How to uninstall the...</p>
<p className='text-gray-400'>334533</p>
</div>
        </div>
        <div className="flex justify-end gap-2 flex-col">
        <p className='bg-green-200 text-green-500 font-bold rounded-lg flex justify-center '>solved</p>
        <p className='text-gray-400'>mar23,2022</p>
        </div>
            </div>
            <div className="shadow-ms py-5 px-4 border flex justify-between rounded-xl">
        <div className=" flex items-center gap-3">
<img src="/support/frame-1.png" alt="" />
<div className="flex flex-col ">
<p className='text-black font-bold'>How to uninstall the...</p>
<p className='text-gray-400'>334533</p>
</div>
        </div>
        <div className="flex justify-end gap-2 flex-col">
        <p className='bg-green-200 px-2 text-green-500 font-bold rounded-lg flex justify-center '>solved</p>
        <p className='text-gray-400'>mar23,2022</p>
        </div>
            </div>
            <div className="shadow-ms py-5 px-4 border flex justify-between rounded-xl">
        <div className=" flex items-center gap-3">
<img src="/support/frame-1.png" alt="" />
<div className="flex flex-col ">
<p className='text-black font-bold'>How to uninstall the...</p>
<p className='text-gray-400'>334533</p>
</div>
        </div>
        <div className="flex justify-end gap-2 flex-col">
        <p className='bg-green-200 text-green-500 font-bold rounded-lg flex justify-center px-2 '>solved</p>
        <p className='text-gray-400'>mar23,2022</p>
        </div>
            </div>
         

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