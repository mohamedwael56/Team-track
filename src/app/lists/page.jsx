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
            <div className="bg-gray-100 flex flex-col p-5 rounded-2xl">
       <div className="flex justify-between mb-5 items-center">
        <h1 className='text-black font-bold text-xl'>lists</h1>
<button className='bg-blue-900 text-white px-6 py-2 rounded-2xl'>+ Add List</button>
       </div>
       <hr />
       <div className="flex gap-5 my-5 justify-between items-center">
    <div className="  w-full  relative">
                <button className='cursor-pointer'>
                <img src="/icons/search.png" alt="" className='absolute left-4 top-3 ' />
            </button>
            <input type="text" placeholder="Search..." className="border border-gray-300 text-zinc-950 rounded-xl px-4 py-2 w-full pl-12" />
       </div>
       <div className='relative'>
            <img src="/icons/arrow-sort.png" alt="" className='absolute left-5 top-3 '  />
            <select name="" id="" className='border-gray-300 border rounded-xl px-6 pl-8 py-3 text-zinc-950 ml-2'>
                <option value="Filter" className=' rounded-2xl'>Sort</option>
            </select>
            </div>
       </div>
       <div className="flex flex-col my-5 shadow-md p-5 rounded-2xl border gap-5">
<div className="flex items-center justify-between">
    <div className="text-black">
        list invitations
    </div>
    <div className="text-blue-500 flex flex-row gap-4">
        <button className='cursor-pointer'>Hide invitations</button>
        <button className='cursor-pointer'>View All</button>
    </div>
</div>
<div className="grid grid-cols-3 gap-5 p-5">
    <div className="border text-xs shadow-sm flex flex-col rounded-2xl p-5">
<div className="flex justify-between items-center">
    <div className="flex gap-2 flex-row items-center">
        <img src="/profile/view-circle.png" className='w-5' alt="" />
        <img src="/mohamed.png" className='w-8' alt="" />
        <p className='text-black font-bold'>mohamed ahmed</p>
    </div>
    <div className="text-gray-400">7 days ago</div>
</div>
<div className="flex gap-1 my-2">
    <p className='text-gray-400'>Sent you a collaboration invite to</p>
    <Link href='/lists/lists-invitations' className='font-bold text-blue-500'> My List</Link>
</div>
<div className="flex gap-2">
    <button className='flex-1 bg-red-200 rounded-2xl text-red-500 py-2 px-5 cursor-pointer'>reject</button>
    <button className='flex-1 bg-blue-900 rounded-2xl cursor-pointer py-2 px-5 text-white'>accept</button>
</div>
</div>
    <div className="border text-xs shadow-sm flex flex-col rounded-2xl p-5">
<div className="flex justify-between items-center">
    <div className="flex gap-2 flex-row items-center">
        <img src="/profile/view-circle.png" className='w-5' alt="" />
        <img src="/mohamed.png" className='w-8' alt="" />
        <p className='text-black font-bold'>mohamed ahmed</p>
    </div>
    <div className="text-gray-400">7 days ago</div>
</div>
<div className="flex gap-1 my-2">
    <p className='text-gray-400'>Sent you a collaboration invite to</p>
    <Link href='/lists/lists-invitations' className='font-bold text-blue-500'> My List</Link>
</div>
<div className="flex gap-2">
    <button className='flex-1 bg-red-200 rounded-2xl text-red-500 py-2 px-5 cursor-pointer'>reject</button>
    <button className='flex-1 bg-blue-900 rounded-2xl cursor-pointer py-2 px-5 text-white'>accept</button>
</div>
</div>
    <div className="border text-xs shadow-sm flex flex-col rounded-2xl p-5">
<div className="flex justify-between items-center">
    <div className="flex gap-2 flex-row items-center">
        <img src="/profile/view-circle.png" className='w-5' alt="" />
        <img src="/mohamed.png" className='w-8' alt="" />
        <p className='text-black font-bold'>mohamed ahmed</p>
    </div>
    <div className="text-gray-400">7 days ago</div>
</div>
<div className="flex gap-1 my-2">
    <p className='text-gray-400'>Sent you a collaboration invite to</p>
    <Link href='/lists/lists-invitations' className='font-bold text-blue-500'> My List</Link>
</div>
<div className="flex gap-2">
    <button className='flex-1 bg-red-200 rounded-2xl text-red-500 py-2 px-5 cursor-pointer'>reject</button>
    <button className='flex-1 bg-blue-900 rounded-2xl cursor-pointer py-2 px-5 text-white'>accept</button>
</div>
</div>
</div>
       </div>
       <div className="grid grid-cols-4 gap-3">
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-blue-900 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>My List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-blue-500 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-green-900 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-yellow-500 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-blue-900 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-purple-500 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-pink-600 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-gray-600 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-blue-900 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-blue-500 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-emerald-900 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-orange-600 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
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