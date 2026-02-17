import Sidebar from '@/components/sidebar'
import React from 'react'
import Header from '@/components/header'
import Link from 'next/link'
function page() {
  return (

    <div className='flex'>

<div className='flex-1 ml-69'>
<Header />
<main>
<div className='flex flex-col gap-5 m-5 bg-gray-100 rounded-2xl p-5'>

<div className='flex justify-between mb-2'>
<div className='flex gap-3 items-center'>
<Link href="/tasks" className="text-blue-900 hover:text-blue-700">Back</Link>
<p className='text-2xl text-black '>Edit task</p>
</div>
<div className='flex gap-2 '>
<button className="cursor-pointer text-red-500 px-4 py-2 rounded-lg">discard</button>
<button className= "cursor-pointer bg-blue-900 text-white px-4 py-2 rounded-lg">Save Changes</button>
</div>
</div>
<hr />
<div className='flex justify-between mt-2'>
    <div className='flex flex-col'>
<div className='border shadow-xl flex flex-col rounded-2xl p-3'>
<div className='flex justify-between items-center text-black'>
<p className='text-xl mr-3'>Revision 1: Fixing Navbar at Dashboard Page</p>
<button className="cursor-pointer ml-5 border-none text-blue-900 hover:text-blue-700 px-4 py-2 rounded-lg  text-lg">+ Add subtask</button>
</div>
<div className='bg-gray-200 rounded-2xl items-center p-3 mt-3 justify-between flex text-black'>
<p>Change the icons to font awesome icons.</p>
<img src="/icons/delete-03.png" alt=""  />
</div>
<div className='bg-gray-200 rounded-2xl items-center p-3 mt-3 justify-between flex text-black'>
<p>Adjust the size to responsive mobile.</p>
<img src="/icons/delete-03.png" alt=""  />
</div>
<div className='bg-gray-200 rounded-2xl items-center p-3 mt-3 justify-between flex text-black'>
<p>Activate the navigation buttons to direct the users.</p>
<img src="/icons/delete-03.png" alt=""  />
</div>
<div className='bg-gray-200 rounded-2xl items-center p-3 mt-3 justify-between flex text-black'>
<p>Activate the navigation buttons to direct the users.</p>
<img src="/icons/delete-03.png" alt=""  />
</div>

</div>
<div className='border shadow-xl mt-11 flex flex-col rounded-2xl p-3'>
<h1 className='text-xl mt-3 mb-1 text-black'>Task Description</h1>
<div className='border my-5 p-5 rounded-xl text-zinc-800'>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus mollitia eligendi accusamus tempora laudantium. Eveniet laborum, doloribus quos obcaecati eaque ut cumque voluptatem, culpa quo, voluptas tempora voluptatibus? Ab, porro.
</div>
</div>

</div>
<div className='ml-5 border shadow-xl flex flex-col rounded-2xl p-3'>
    <div>
        <p className='text-black mb-2'>List Name</p>
        <select name="" id="" className='border border-gray-300 rounded-xl mb-3 px-20 py-2 text-black bg-gray-100'>
            <option value=""></option>
            <option value="">Backend bugs team</option>
        </select>
    </div>
    <div>
        <p className='text-black mb-2'>status</p>
        <select name="" id="" className='border border-gray-300 rounded-xl mb-3 px-20 py-2 text-black bg-gray-100'>
            <option value=""></option>
            <option value="">Backend bugs team</option>
        </select>
    </div>
    <div>
        <p className='text-black mb-2'>due date</p>
        <button name="" id="" className=' flex border-gray-300 justify-between border rounded-xl mb-3 px-4 cursor-pointer py-2 text-black bg-gray-100 w-full'>
            <p className='flex items-start'>Select Date</p>
            <img src="/icons/calendar.png" alt="calendar icon" />
        </button>
    </div>
    <div>
        <p className='text-black mb-2'>Assigned To</p>
        <select name="" id="" className='border border-gray-300 rounded-xl mb-3 w-full px-20 py-2 text-black bg-gray-100'>
            <option value=""></option>
            <option value="">mohamed ahmed</option>
        </select>
    </div>
    <div>
        <p className='text-black mb-2'>Priority</p>
        <select name="" id="" className='border border-gray-300 rounded-xl mb-3 w-full py-2 text-black bg-gray-100'>
            <option value=""></option>
            <option value="">High</option>
            <option value="">Medium</option>
            <option value="">Low</option>
        </select>
    </div>
    <div>
        <p className='text-black mb-2'>Remind Me</p>
        <button name="" id="" className=' flex border-gray-300 justify-between border rounded-xl mb-3 px-4 cursor-pointer py-2 text-black bg-gray-100 w-full'>
            <p className='flex items-start'>Select Date</p>
            <img src="/icons/calendar.png" alt="calendar icon" />
        </button>
    </div>
    <div>
        <p className='text-black mb-2'>Repeat</p>
        <select name="" id="" className='border border-gray-300 rounded-xl mb-3 px-20 py-2 text-black bg-gray-100'>
            <option value=""></option>
            <option value="">Backend bugs team</option>
        </select>
    </div>
</div>
</div>
<div>
    <div className='border object-cover shadow-xl p-3 rounded-xl'>
    <div className=''>Attachment</div>
    <div className='flex gap-2'>
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
</div>
</div>

</main>
</div>
<Sidebar />
    </div>

)
}

export default page