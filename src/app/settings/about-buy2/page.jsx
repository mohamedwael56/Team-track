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
            <div className=" text-black flex flex-col mt-6  ">
           
       <div className="bg-gray-200 p-5 rounded-2xl flex flex-col">
<div className="flex gap-2 items-center">
    <img src="/setting/twitter.png" alt="" className='w-10' />
    <p className='text-xl'>who are we ?</p>
</div>
<p className='mt-2'>Lorem ipsum dolor sit amet consectetur
    , adipisicing elit.Incidunt accusantium 
    non odit, ex beatae  molestiae repellat
    eos impedit amet neque. Obcaecati officia,
    possimus ex totam eveniettempore magnam 
    quidem repellat. Lorem ipsum, dolor sit
     amet consectetur adipisicing elit. Eos,
      voluptates possimus. Repellat velit ut 
      veniam omnis magni consequatur, at 
      dolorem nulla voluptatibus doloribus,
       enim non voluptatum quo necessitatibus
        assumenda nam!</p>
       </div>
       <div className="bg-gray-200 mt-4 p-5 rounded-2xl flex flex-col">
<div className="flex gap-2 items-center">
    <img src="/setting/twitter(1).png" alt="" className='w-10' />
    <p className='text-xl'>our vision</p>
</div>
<p className='mt-2'>Lorem ipsum dolor sit amet consectetur
    , adipisicing elit.Incidunt accusantium 
    non odit, ex beatae  molestiae repellat
    eos impedit amet neque. Obcaecati officia,
    possimus ex totam eveniettempore magnam 
    quidem repellat. Lorem ipsum, dolor sit
     amet consectetur adipisicing elit. Eos,
      voluptates possimus. Repellat velit ut 
      veniam omnis magni consequatur, at 
      dolorem nulla voluptatibus doloribus,
       enim non voluptatum quo necessitatibus
        assumenda nam!</p>
       </div>
       <div className="bg-gray-200 mt-4 mb-10 p-5 rounded-2xl flex flex-col">
<div className="flex gap-2 items-center">
    <img src="/setting/twitter(2).png" alt="" className='w-10' />
    <p className='text-xl'>our mission</p>
</div>
<p className='mt-2'>Lorem ipsum dolor sit amet consectetur
    , adipisicing elit.Incidunt accusantium 
    non odit, ex beatae  molestiae repellat
    eos impedit amet neque. Obcaecati officia,
    possimus ex totam eveniettempore magnam 
    quidem repellat. Lorem ipsum, dolor sit
     amet consectetur adipisicing elit. Eos,
      voluptates possimus. Repellat velit ut 
      veniam omnis magni consequatur, at 
      dolorem nulla voluptatibus doloribus,
       enim non voluptatum quo necessitatibus
        assumenda nam!</p>
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