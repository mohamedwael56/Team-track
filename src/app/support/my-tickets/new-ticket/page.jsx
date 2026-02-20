import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div className='flex'>
        <div className="flex-1 ml-69">
            <Header />
            <main>
                <div className="p-5 flex flex-col bg-gray-100 rounded-2xl">
            <div className="flex mb-5 justify-between gap-2">
                <div className=" flex items-center gap-2">
<Link href='#' className='text-blue-500'> back</Link>
<p className='text-black text-xl font-bold'>New Ticket</p>
                </div>
                <div className=" flex gap-3 mx-5">
                <button className='cursor-pointer text-red-500'>discard</button>
                <button className='text-white bg-blue-900 px-4 py-2 rounded-xl cursor-pointer'>submit ticket</button>
                </div>
            </div>
            <hr />

            <div className="mt-5 flex  flex-col">
            <div className="flex my-2 justify-between">
            <div className="flex-col w-full flex ">
            <p className='text-zinc-950'>subject</p>
            <label htmlFor="select-file" className='border px-2 cursor-pointer mt-2  text-start py-2 rounded-xl text-black'> select file</label>
            <input type="file" placeholder='select' id="select-file" hidden className='rounded-xl p-2 border' />
            </div>
           <div className="flex-col flex-1 mx-4 w-full flex ">
            <p className='text-zinc-950'>description</p>
            <label htmlFor="select-file" className='border px-2 cursor-pointer mt-2 w-120 text-start py-2 rounded-xl text-black'> select file</label>
            <input type="file" placeholder='select' id="select-file" hidden className='rounded-xl p-2 border' />
            </div>
            </div>
          <div className="flex my-2 justify-between">
            <div className="flex-col w-full flex ">
            <p className='text-zinc-950'>category</p>
            <label htmlFor="select-file" className='border px-2 cursor-pointer mt-2  text-start py-2 rounded-xl text-black'> select file</label>
            <input type="file" placeholder='select' id="select-file" hidden className='rounded-xl p-2 border' />
            </div>
           <div className="flex-col flex-1 mx-4 w-full flex ">
            <p className='text-zinc-950'>priority</p>
            <label htmlFor="select-file" className='border px-2 cursor-pointer mt-2 w-120 text-start py-2 rounded-xl text-black'> select file</label>
            <input type="file" placeholder='select' id="select-file" hidden className='rounded-xl p-2 border' />
            </div>
            </div>
            </div>
             <div className='flex gap-2 mt-4'>
<button className='bg-violet-200 cursor-pointer mt-2 px-5 py-2 text-violet-500 rounded-xl'>
<div className='flex gap-2 items-center'>
<p>+</p>
<p className='text-nowrap'>upload more items </p>
</div>
</button>
<div className='border rounded-xl px-3  shadow-xl'>
<div className='flex justify-between'>
<div className='flex items-center'>
    <img src="/frame.svg" alt="" />
    <div  className='flex  flex-col ml-2'>
<p className='text-black text-sm text-nowrap'>devs presentation.pdf</p>
<p className='flex justify-start text-sm'>1.5 MB</p>
    </div>
</div>
<div className='flex items-center gap-2 ml-3'>
    <button className='cursor-pointer'><img src="/icons/view.png" alt="" /></button>
    <button className='cursor-pointer'><img src="/icons/delete-03.png" alt="" /></button>
</div>
</div>
</div>
<div className='border rounded-xl px-3  shadow-xl'>
<div className='flex justify-between'>
<div className='flex items-center'>
    <img src="/frame.svg" alt="" />
    <div className='flex  flex-col ml-2'>
<p className='text-black text-nowrap text-sm'>devs presentation.pdf</p>
<p className='flex justify-start text-sm'>1.5 MB</p>
    </div>
</div>
<div className='flex items-center gap-2 ml-3'>
    <button className='cursor-pointer'><img src="/icons/view.png" alt="" /></button>
    <button className='cursor-pointer'><img src="/icons/delete-03.png" alt="" /></button>
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