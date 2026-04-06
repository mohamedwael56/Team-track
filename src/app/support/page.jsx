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
            <div className="text-black flex justify-between mb-5 text-2xl font-bold">
                <h1>Support</h1>
                <div className='flex gap-5'>
                    <button className=' cursor-pointer text-indigo-500 border border-indigo-500 px-2 text-sm rounded-2xl'>frequently questions</button>
                    <button className=' cursor-pointer text-black py-2 px-4 rounded-2xl text-sm'>report issue</button>
                </div>
            </div>
            <hr />
             <div className="w-full relative mt-5">
                <button className='cursor-pointer'>
                <img src="/icons/search.png" alt="" className='absolute left-4 top-3 ' />
            </button>
            <input type="text" placeholder="Search tasks..." className="border border-gray-300 text-zinc-950 rounded-xl px-4 py-2 w-full pl-12" />
       </div>
       <div className=" my-5 text-white flex flex-row gap-3">
<div className="bg-blue-900 w-50 py-5 px-4 flex flex-col gap-4 rounded-2xl">
<img src="/support/group.png" alt="" className='w-5' />
<p className='text-xl'>Questions about getting started</p>
</div>
<div className="bg-violet-400 w-50 py-5 px-4 flex flex-col gap-4 rounded-2xl">
<img src="/support/settings.png" alt="" className='w-5'  />
<p>Questions about privacy</p>
</div>
       </div>
       <div className="capitalize text-black text-2xl mb-4">
        top questions
       </div>
   <div class=" border border-gray-400 rounded-lg  mt-4">

  <details class="border rounded-lg overflow-hidden">
    
    <summary class="flex text-black justify-between items-center p-4 bg-gray-100 cursor-pointer font-bold">
      question here
      <span class="text-xl">+</span>
    </summary>
    
    <div class="p-4 bg-white text-gray-700 ">
Lorem, ipsum dolor sit amet consectetur adipisicing
 elit. Ipsum, esse quaerat? Nobis fuga odio illo 
 perferendis aliquam, tempora cum. Repellat ipsa,
  minima debitis in eaque saepe amet quas esse
   magnam.
    </div>
  </details>

</div>
   <div class=" border border-gray-400 rounded-lg  mt-4">

  <details class="border rounded-lg overflow-hidden">
    
    <summary class="flex text-black justify-between items-center p-4 bg-gray-100 cursor-pointer font-bold">
      question here
      <span class="text-xl">+</span>
    </summary>
    
    <div class="p-4 bg-white text-gray-700 ">
Lorem, ipsum dolor sit amet consectetur adipisicing
 elit. Ipsum, esse quaerat? Nobis fuga odio illo 
 perferendis aliquam, tempora cum. Repellat ipsa,
  minima debitis in eaque saepe amet quas esse
   magnam.
    </div>
  </details>

</div>
   <div class=" border border-gray-400 rounded-lg  mt-4">

  <details class="border rounded-lg overflow-hidden">
    
    <summary class="flex text-black justify-between items-center p-4 bg-gray-100 cursor-pointer font-bold">
      question here
      <span class="text-xl">+</span>
    </summary>
    
    <div class="p-4 bg-white text-gray-700 ">
Lorem, ipsum dolor sit amet consectetur adipisicing
 elit. Ipsum, esse quaerat? Nobis fuga odio illo 
 perferendis aliquam, tempora cum. Repellat ipsa,
  minima debitis in eaque saepe amet quas esse
   magnam.
    </div>
  </details>

</div>
   <div class=" border border-gray-400 rounded-lg  mt-4">

  <details class="border rounded-lg overflow-hidden">
    
    <summary class="flex text-black justify-between items-center p-4 bg-gray-100 cursor-pointer font-bold">
      question here
      <span class="text-xl">+</span>
    </summary>
    
    <div class="p-4 bg-white text-gray-700 ">
Lorem, ipsum dolor sit amet consectetur adipisicing
 elit. Ipsum, esse quaerat? Nobis fuga odio illo 
 perferendis aliquam, tempora cum. Repellat ipsa,
  minima debitis in eaque saepe amet quas esse
   magnam.
    </div>
  </details>

</div>
                </div>
            </main>
        </div>
        <Sidebar />
    </div>
  )
}

export default page