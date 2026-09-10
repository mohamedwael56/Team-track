'use client'
import Image from 'next/image'
import React from 'react'
import TicketHeader from './TicketHeader'

function Page() {
   
  return (
    <div className='flex'>
        <div className="flex-1 lg:ml-69">
            <main>
           
                <div className="p-5 flex flex-col w-80 lg:w-full bg-gray-100 rounded-2xl">
       <TicketHeader />
            <hr />

            <div className="mt-5 flex  flex-col">
            <div className="flex my-2 justify-between">
            <div className="flex-col w-full flex ">
            <p className='text-zinc-950'>subject</p>
            <label htmlFor="select-file" className='border px-2 cursor-pointer mt-2 w-full lg:w-120 text-start py-2 rounded-xl lg:text-base text-xs text-black'> select file</label>
            <input type="file" placeholder='select' id="select-file" hidden className='rounded-xl p-2 border' />
            </div>
           <div className="flex-col flex-1 mx-4 w-full flex ">
            <p className='text-zinc-950'>description</p>
            <label htmlFor="select-file" className='border px-2 cursor-pointer mt-2 w-30 lg:w-120 text-start py-2 rounded-xl lg:text-base text-xs text-black'> select file</label>
            <input type="file" placeholder='select' id="select-file" hidden className='rounded-xl p-2 border' />
            </div>
            </div>
          <div className="flex my-2 justify-between">
            <div className="flex-col w-full flex ">
            <p className='text-zinc-950'>category</p>
            <label htmlFor="select-file" className='border px-2 cursor-pointer mt-2 text-xs lg:text-base   text-start py-2 rounded-xl text-black'> select file</label>
            <input type="file" placeholder='select' id="select-file" hidden className='rounded-xl p-2 border' />
            </div>
           <div className="flex-col flex-1 mx-4 w-full flex ">
            <p className='text-zinc-950'>priority</p>
            <label htmlFor="select-file" className='border px-2 cursor-pointer mt-2 lg:w-120 w-30 lg:text-base text-xs text-start py-2 rounded-xl text-black'> select file</label>
            <input type="file" placeholder='select' id="select-file" hidden className='rounded-xl p-2 border' />
            </div>
            </div>
            </div>
             <div className='flex gap-2 mt-4'>
<button className='bg-violet-200 cursor-pointer mt-2 px-5 py-2 text-violet-500 rounded-xl'>
<div className='flex gap-2 items-center'>
<p>+</p>
<p className='text-nowrap lg:text-base text-[8px]'>upload more items </p>
</div>
</button>
<div className='border rounded-xl px-3 shadow-xl'>
<div className='flex justify-between'>
<div className='flex items-center'>
    <Image width={20} height={20} src="/frame.svg" alt=""  />
    <div  className='flex  flex-col ml-2'>
<p className='text-black lg:text-sm text-[8px] text-nowrap'>devs presentation.pdf</p>
<p className='flex justify-start text-[9px] lg:text-sm'>1.5 MB</p>
    </div>
</div>
<div className='flex items-center gap-2 ml-3'>
    <button className='cursor-pointer'><Image width={15} height={20} src="/icons/view.png" alt="" /></button>
    <button className='cursor-pointer'><Image width={15} height={20} src="/icons/delete-03.png" alt="" /></button>
</div>
</div>
</div>
<div className='border lg:block hidden rounded-xl px-3  shadow-xl'>
<div className='flex justify-between'>
<div className='flex items-center'>
    <Image width={20} height={20} src="/frame.svg" alt="" />
    <div className='flex  flex-col ml-2'>
<p className='text-black text-nowrap text-sm'>devs presentation.pdf</p>
<p className='flex justify-start text-sm'>1.5 MB</p>
    </div>
</div>
<div className='flex items-center gap-2 ml-3'>
    <button className='cursor-pointer'><Image width={15} height={20} src="/icons/view.png" alt="" /></button>
    <button className='cursor-pointer'><Image width={15} height={20} src="/icons/delete-03.png" alt="" /></button>
</div>
</div>
</div>

    </div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Page