import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div className='flex'>
    <div className='flex-1 lg:ml-69'>
        
        <div className='m-5 p-5 rounded-2xl w-80 lg:w-full bg-gray-100'>
            <main>
                <div className='flex items-center font-bold justify-between mb-5'>
                <h1 className='lg:text-2xl text-sm text-black '>project library</h1>
                 <div className="flex items-center gap-3 mt-3">
               <div className="text-blue-700 cursor-pointer ">
                  + Invite
                </div>
                <div className="flex items-center mt-1  -space-x-2">
              <img src="/Oval.png" alt="" />
              <img src="/Oval2.png" alt="" />
              <img src="/Oval3.png" alt="" />
                </div>
                
              </div>
           </div>
           <hr />
           <div className='flex justify-between gap-3 mt-5 mb-5'>
            <div className="w-full relative">
                <button className='cursor-pointer'>
                <img src="/icons/search.png" alt="" className='absolute left-4 top-3 ' />
            </button>
            <input type="text" placeholder="Search tasks..." className="border border-gray-300 text-zinc-950 rounded-xl px-4 py-2 w-full pl-12" />
       </div>
          <div className=' relative'>
            <img src="/icons/filter.png" alt="" className='absolute left-6 top-3 '  />
              <select name="" id="" className=' gap-2 border-gray-300 border rounded-xl px-5 pl-7 py-3 text-zinc-950 ml-4'>
                <option value="Filter" className=' rounded-2xl'>Filter</option>
            </select>
          </div>
          <div className='relative'>
            <img src="/icons/arrow-sort.png" alt="" className='absolute left-5 top-3 '  />
            <select name="" id="" className='border-gray-300 border rounded-xl px-6 pl-8 py-3 text-zinc-950 ml-2'>
                <option value="Filter" className=' rounded-2xl'>Sort</option>
            </select>
            </div>
            <button className='cursor-pointer bg-gray-200 text-black px-4 py-2 rounded-xl'>
                <img src="/icons/grid.png" alt="" width={40} />
            </button>
            <button className='cursor-pointer bg-gray-200 text-black px-4 py-2 rounded-xl'>
                <img src="/icons/table.png" alt="" width={40} />
            </button>
           </div>

           <div className='grid grid-cols-4 gap-1 w-screen '>
            <div className='border flex flex-col rounded-2xl shadow-xl p-3'>
            <div className='flex justify-between gap-3'>
                <div className='flex items-center gap-3'>
            <div className='bg-red-600 rounded-3xl h-1 w-1 p-1'></div>
            <h1 className='text-black font-bold'> To-do</h1>
            </div>
            <div className='object-cover '>
            <img src="/icons/arrow-sort.png" alt="" />
            </div>
            </div>
            <hr className='text-red-500 my-3' />
            <div className='border rounded-2xl p-3 flex flex-col'>
            <h1 className='text-black font-bold'>Revision 1: Fixing Navbar at Dashboard Page</h1>
            <div className='flex items-center gap-2 mt-2'>
            <p className='text-gray-600 '>Deadline:</p>
          <span className='text-green-500 text-sm'>20/2/2021</span>
            </div>
            <div className='flex justify-between mt-2'>
        <p className='text-black flex items-center gap-1'>
           <img src='/icons/arrow-down.png' />
            Low
            </p>
        <p className=' text-black py-1 px-3 rounded-2xl'>assignee: nayef fahmy</p>
            </div>
            </div>
            <div className='border rounded-2xl p-3 mt-2 flex flex-col'>
            <h1 className='text-black font-bold'>Revision 1: Fixing Navbar at Dashboard Page</h1>
            <div className='flex items-center gap-2 mt-2'>
            <p className='text-gray-600 '>Deadline:</p>
          <span className='text-green-500 text-sm'>20/2/2021</span>
            </div>
            <div className='flex justify-between mt-2'>
        <p className='text-black flex items-center gap-1'>
           <img src='/icons/arrow-down.png' />
            Low
            </p>
        <p className=' text-black py-1 px-3 rounded-2xl'>assignee: nayef fahmy</p>
            </div>
            </div>
            <div className='border rounded-2xl mt-2 bg-red-100 border-red-600 border-dashed'>
            <div className='border rotate-6 bg-gray-100 rounded-2xl p-3 my-2 flex flex-col'>
            <h1 className='text-black font-bold'>Revision 1: Fixing Navbar at Dashboard Page</h1>
            <div className='flex items-center gap-2 mt-2'>
            <p className='text-gray-600 '>Deadline:</p>
          <span className='text-green-500 text-sm'>20/2/2021</span>
            </div>
            <div className='flex justify-between mt-2'>
        <p className='text-black flex items-center gap-1'>
           <img src='/icons/arrow-down.png' />
            Low
            </p>
        <p className=' text-black py-1 px-3 rounded-2xl'>assignee: nayef fahmy</p>
            </div>
            </div>
            </div>
            </div>
            <div className='border flex flex-col rounded-2xl shadow-xl p-3'>
            <div className='flex justify-between gap-3'>
                <div className='flex items-center gap-3'>
            <div className='bg-orange-600 rounded-3xl h-1 w-1 p-1'></div>
            <h1 className='text-black font-bold'> In-Progress</h1>
            </div>
            <div className='object-cover '>
            <img src="/icons/arrow-sort.png" alt="" />
            </div>
            </div>
            <hr className='text-orange-600 my-3' />
            <div className='border rounded-2xl p-3 flex flex-col'>
            <h1 className='text-black font-bold'>Revision 1: Fixing Navbar at Dashboard Page</h1>
            <div className='flex items-center gap-2 mt-2'>
            <p className='text-gray-600 '>Deadline:</p>
          <span className='text-green-500 text-sm'>20/2/2021</span>
            </div>
            <div className='flex justify-between mt-2'>
        <p className='text-black flex items-center gap-1'>
           <img src='/icons/arrow-down.png' />
            Low
            </p>
        <p className=' text-black py-1 px-3 rounded-2xl'>assignee: nayef fahmy</p>
            </div>
            </div>
            <div className='border rounded-2xl p-3 mt-2 flex flex-col'>
            <h1 className='text-black font-bold'>Revision 1: Fixing Navbar at Dashboard Page</h1>
            <div className='flex items-center gap-2 mt-2'>
            <p className='text-gray-600 '>Deadline:</p>
          <span className='text-green-500 text-sm'>20/2/2021</span>
            </div>
            <div className='flex justify-between mt-2'>
        <p className='text-black flex items-center gap-1'>
           <img src='/icons/arrow-down.png' />
            Low
            </p>
        <p className=' text-black py-1 px-3 rounded-2xl'>assignee: nayef fahmy</p>
            </div>
            </div>
            <div className='border rounded-2xl p-3 my-2 flex flex-col'>
            <h1 className='text-black font-bold'>Revision 1: Fixing Navbar at Dashboard Page</h1>
            <div className='flex items-center gap-2 mt-2'>
            <p className='text-gray-600 '>Deadline:</p>
          <span className='text-green-500 text-sm'>20/2/2021</span>
            </div>
            <div className='flex justify-between mt-2'>
        <p className='text-black flex items-center gap-1'>
           <img src='/icons/arrow-down.png' />
            Low
            </p>
        <p className=' text-black py-1 px-3 rounded-2xl'>assignee: nayef fahmy</p>
            </div>
            </div>
            <div className='border rounded-2xl p-3 my-2 flex flex-col'>
            <h1 className='text-black font-bold'>Revision 1: Fixing Navbar at Dashboard Page</h1>
            <div className='flex items-center gap-2 mt-2'>
            <p className='text-gray-600 '>Deadline:</p>
          <span className='text-green-500 text-sm'>20/2/2021</span>
            </div>
            <div className='flex justify-between mt-2'>
        <p className='text-black flex items-center gap-1'>
           <img src='/icons/arrow-down.png' />
            Low
            </p>
        <p className=' text-black py-1 px-3 rounded-2xl'>assignee: nayef fahmy</p>
            </div>
            </div>
            </div>
            <div className='border flex flex-col rounded-2xl shadow-xl p-3'>
            <div className='flex justify-between gap-3'>
                <div className='flex items-center gap-3'>
            <div className='bg-green-600 rounded-3xl h-1 w-1 p-1'></div>
            <h1 className='text-black font-bold'> Completed</h1>
            </div>
            <div className='object-cover '>
            <img src="/icons/arrow-sort.png" alt="" />
            </div>
            </div>
            <hr className='text-green-600 my-3' />
            <div className='border rounded-2xl p-3 flex flex-col'>
            <h1 className='text-black font-bold'>Revision 1: Fixing Navbar at Dashboard Page</h1>
            <div className='flex items-center gap-2 mt-2'>
            <p className='text-gray-600 '>Deadline:</p>
          <span className='text-green-500 text-sm'>20/2/2021</span>
            </div>
            <div className='flex justify-between mt-2'>
        <p className='text-black flex items-center gap-1'>
           <img src='/icons/arrow-down.png' />
            Low
            </p>
        <p className=' text-black py-1 px-3 rounded-2xl'>assignee: nayef fahmy</p>
            </div>
            </div>
            <div className='border rounded-2xl p-3 mt-2 flex flex-col'>
            <h1 className='text-black font-bold'>Revision 1: Fixing Navbar at Dashboard Page</h1>
            <div className='flex items-center gap-2 mt-2'>
            <p className='text-gray-600 '>Deadline:</p>
          <span className='text-green-500 text-sm'>20/2/2021</span>
            </div>
            <div className='flex justify-between mt-2'>
        <p className='text-black flex items-center gap-1'>
           <img src='/icons/arrow-down.png' />
            Low
            </p>
        <p className=' text-black py-1 px-3 rounded-2xl'>assignee: nayef fahmy</p>
            </div>
            </div>
            
            </div>
            <div className='border flex flex-col rounded-2xl shadow-xl p-3'>
            <div className='flex justify-between gap-3'>
                <div className='flex items-center gap-3'>
            <div className='bg-blue-600 rounded-3xl h-1 w-1 p-1'></div>
            <h1 className='text-black font-bold'> in Review</h1>
            </div>
            <div className='object-cover '>
            <img src="/icons/arrow-sort.png" alt="" />
            </div>
            </div>
            <hr className='text-blue-600 my-3' />
            <div className='border rounded-2xl p-3 flex flex-col'>
            <h1 className='text-black font-bold'>Revision 1: Fixing Navbar at Dashboard Page</h1>
            <div className='flex items-center gap-2 mt-2'>
            <p className='text-gray-600 '>Deadline:</p>
          <span className='text-green-500 text-sm'>20/2/2021</span>
            </div>
            <div className='flex justify-between mt-2'>
        <p className='text-black flex items-center gap-1'>
           <img src='/icons/arrow-down.png' />
            Low
            </p>
        <p className=' text-black py-1 px-3 rounded-2xl'>assignee: nayef fahmy</p>
            </div>
            </div>
            <div className='border rounded-2xl p-3 mt-2 flex flex-col'>
            <h1 className='text-black font-bold'>Revision 1: Fixing Navbar at Dashboard Page</h1>
            <div className='flex items-center gap-2 mt-2'>
            <p className='text-gray-600 '>Deadline:</p>
          <span className='text-green-500 text-sm'>20/2/2021</span>
            </div>
            <div className='flex justify-between mt-2'>
        <p className='text-black flex items-center gap-1'>
           <img src='/icons/arrow-down.png' />
            Low
            </p>
        <p className=' text-black py-1 px-3 rounded-2xl'>assignee: nayef fahmy</p>
            </div>
            </div>
            
            </div>
           </div>
            </main>
     
    
        </div>
    </div>    

    </div>
  )
}

export default page