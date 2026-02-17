import React from 'react'
import Link from 'next/link'
import Sidebar from '@/components/sidebar'
import Header from '@/components/header'
function page() {
  return (
    <div className='flex '>
      <div className='flex-1 ml-69 p-5 gap-5 '>
<Header />
<main>
    <div className='flex flex-col bg-gray-100 p-5 rounded-2xl'>
  <div className='flex items-center gap-3 mb-5'>
        <Link href="/tasks" className='text-md text-blue-700'>← Back</Link>
        <h1 className='text-xl text-black'>Add  Task</h1>
</div>
<hr />
<div className='flex mb-5'>
<input type="text" className='w-full border rounded-xl p-2 text-black' placeholder='Enter task name'/>
<select name="" id="" className='bg-blue-900 text-white px-3 py-1 rounded-lg'>
   
    <option value="">select from lists</option>
</select>
</div>

<div className='grid grid-cols-3 gap-3'>

<div className='flex flex-col gap-2 border rounded-2xl p-3 shadow-xl'>
    <div className='flex justify-between mb-3'>
    <span className='bg-violet-200 text-violet-500 px-3  rounded-2xl'> list name</ span>
    <div className='flex gap-2'>
<button className='cursor-pointer' ><img src="/icons/edit-02.png" alt="" /></button>
<button className='cursor-pointer' ><img src="/icons/delete-03.png" alt="" /></button>
<button className='cursor-pointer' ><img src="/icons/view.png" alt="" /></button>
    </div>
    </div>
    
    <div className='bg-gray-200 rounded-xl mb-3 p-2 text-black truncate'>
Revision 1: Fixing Navbar at Dashboard Page
    </div>
<div className='flex justify-between mb-3'>
<button className='bg-gray-200 w-full text-black px-3 py-1 rounded-lg flex justify-between items-center'>
    <p>set due date</p>
    <img src="/icons/calendar-03.png" alt="" />
    </button>

<div className='flex gap-1 text-black text-sm items-center bg-gray-200 rounded-xl pr-4 ml-2'>
<img src="/icons/arrow-down.png" alt="" />
<p>Low</p>
</div>
</div>

<div className='bg-gray-200 rounded-2xl gap-1 text-black p-2 flex items-center'>
<img src="/ellipse.png" alt="" />
<p>ahmed mohamed</p>
</div>
    
    </div>
<div className='flex flex-col gap-2 border rounded-2xl p-3 shadow-xl'>
    <div className='flex justify-between mb-3'>
    <span className='bg-violet-200 text-violet-500 px-3  rounded-2xl'> list name</ span>
    <div className='flex gap-2'>
<button className='cursor-pointer' ><img src="/icons/edit-02.png" alt="" /></button>
<button className='cursor-pointer' ><img src="/icons/delete-03.png" alt="" /></button>
<button className='cursor-pointer' ><img src="/icons/view.png" alt="" /></button>
    </div>
    </div>
    
    <div className='bg-gray-200 rounded-xl mb-3 p-2 text-black truncate'>
Revision 1: Fixing Navbar at Dashboard Page
    </div>
<div className='flex justify-between mb-3'>
<button className='bg-gray-200 w-full text-black px-3 py-1 rounded-lg flex justify-between items-center'>
    <p>set due date</p>
    <img src="/icons/calendar-03.png" alt="" />
    </button>

<div className='flex gap-1 text-black text-sm items-center bg-gray-200 rounded-xl pr-4 ml-2'>
<img src="/icons/arrow-down.png" alt="" />
<p>Low</p>
</div>
</div>

<div className='bg-gray-200 rounded-2xl gap-1 text-black p-2 flex items-center'>
<img src="/ellipse.png" alt="" />
<p>ahmed mohamed</p>
</div>
    
    </div>
<div className='flex flex-col gap-2 border rounded-2xl p-3 shadow-xl'>
    <div className='flex justify-between mb-3'>
    <span className='bg-violet-200 text-violet-500 px-3  rounded-2xl'> list name</ span>
    <div className='flex gap-2'>
<button className='cursor-pointer' ><img src="/icons/edit-02.png" alt="" /></button>
<button className='cursor-pointer' ><img src="/icons/delete-03.png" alt="" /></button>
<button className='cursor-pointer' ><img src="/icons/view.png" alt="" /></button>
    </div>
    </div>
    
    <div className='bg-gray-200 rounded-xl mb-3 p-2 text-black truncate'>
Revision 1: Fixing Navbar at Dashboard Page
    </div>
<div className='flex justify-between mb-3'>
<button className='bg-gray-200 w-full text-black px-3 py-1 rounded-lg flex justify-between items-center'>
    <p>set due date</p>
    <img src="/icons/calendar-03.png" alt="" />
    </button>

<div className='flex gap-1 text-black text-sm items-center bg-gray-200 rounded-xl pr-4 ml-2'>
<img src="/icons/arrow-down.png" alt="" />
<p>Low</p>
</div>
</div>

<div className='bg-gray-200 rounded-2xl gap-1 text-black p-2 flex items-center'>
<img src="/ellipse.png" alt="" />
<p>ahmed mohamed</p>
</div>
    
    </div>
<div className='flex flex-col gap-2 border rounded-2xl p-3 shadow-xl'>
    <div className='flex justify-between mb-3'>
    <span className='bg-violet-200 text-violet-500 px-3  rounded-2xl'> list name</ span>
    <div className='flex gap-2'>
<button className='cursor-pointer' ><img src="/icons/edit-02.png" alt="" /></button>
<button className='cursor-pointer' ><img src="/icons/delete-03.png" alt="" /></button>
<button className='cursor-pointer' ><img src="/icons/view.png" alt="" /></button>
    </div>
    </div>
    
    <div className='bg-gray-200 rounded-xl mb-3 p-2 text-black truncate'>
Revision 1: Fixing Navbar at Dashboard Page
    </div>
<div className='flex justify-between mb-3'>
<button className='bg-gray-200 w-full text-black px-3 py-1 rounded-lg flex justify-between items-center'>
    <p>set due date</p>
    <img src="/icons/calendar-03.png" alt="" />
    </button>

<div className='flex gap-1 text-black text-sm items-center bg-gray-200 rounded-xl pr-4 ml-2'>
<img src="/icons/arrow-down.png" alt="" />
<p>Low</p>
</div>
</div>

<div className='bg-gray-200 rounded-2xl gap-1 text-black p-2 flex items-center'>
<img src="/ellipse.png" alt="" />
<p>ahmed mohamed</p>
</div>
    
    </div>
<div className='flex flex-col gap-2 border rounded-2xl p-3 shadow-xl'>
    <div className='flex justify-between mb-3'>
    <span className='bg-violet-200 text-violet-500 px-3  rounded-2xl'> list name</ span>
    <div className='flex gap-2'>
<button className='cursor-pointer' ><img src="/icons/checkmark-square-03.png" alt="" /></button>
<button className='cursor-pointer' ><img src="/icons/delete-03.png" alt="" /></button>
<button className='cursor-pointer' ><img src="/icons/view.png" alt="" /></button>
    </div>
    </div>
    
    <div className='bg-gray-200 rounded-xl mb-3 p-2 text-black truncate'>
Revision 1: Fixing Navbar at Dashboard Page
    </div>
<div className='flex justify-between mb-3'>
<button className='bg-gray-200 w-full text-black px-3 py-1 rounded-lg flex justify-between items-center'>
    <p className='text-lime-600'>20/2/2024</p>
    <img src="/icons/green-calendar.png" alt="" />
    </button>

<div className='flex gap-1 text-black text-sm items-center bg-gray-200 rounded-xl pr-4 ml-2'>
<img src="/icons/arrow-down.png" alt="" />
<p>Low</p>
</div>
</div>

<div className='bg-gray-200 rounded-2xl gap-1 text-black p-2 flex items-center'>
<img src="/ellipse.png" alt="" />
<p>ahmed mohamed</p>
</div>
    
    </div>
<div className='flex flex-col gap-2 border rounded-2xl p-3 shadow-xl'>
    <div className='flex justify-between mb-3'>
    <span className='bg-violet-200 text-violet-500 px-3  rounded-2xl'> list name</ span>
    <div className='flex gap-2'>
<button className='cursor-pointer' ><img src="/icons/edit-02.png" alt="" /></button>
<button className='cursor-pointer' ><img src="/icons/delete-03.png" alt="" /></button>
<button className='cursor-pointer' ><img src="/icons/view.png" alt="" /></button>
    </div>
    </div>
    
    <div className='bg-gray-200 rounded-xl mb-3 p-2 text-black truncate'>
Revision 1: Fixing Navbar at Dashboard Page
    </div>
<div className='flex justify-between mb-3'>
<button className='bg-gray-200 w-full text-black px-3 py-1 rounded-lg flex justify-between items-center'>
    <p>set due date</p>
    <img src="/icons/calendar-03.png" alt="" />
    </button>

<div className='flex gap-1 text-black text-sm items-center bg-gray-200 rounded-xl pr-4 ml-2'>
<img src="/icons/arrow-down.png" alt="" />
<p>Low</p>
</div>
</div>

<div className='bg-gray-200 rounded-2xl gap-1 text-black p-2 flex items-center'>
<img src="/ellipse.png" alt="" />
<p>ahmed mohamed</p>
</div>
    
    </div>
<div className='flex flex-col gap-2 border rounded-2xl p-3 shadow-xl'>
    <div className='flex justify-between mb-3'>
    <span className='bg-violet-200 text-violet-500 px-3  rounded-2xl'> list name</ span>
    <div className='flex gap-2'>
<button className='cursor-pointer' ><img src="/icons/edit-02.png" alt="" /></button>
<button className='cursor-pointer' ><img src="/icons/delete-03.png" alt="" /></button>
<button className='cursor-pointer' ><img src="/icons/view.png" alt="" /></button>
    </div>
    </div>
    
    <div className='bg-gray-200 rounded-xl mb-3 p-2 text-black truncate'>
Revision 1: Fixing Navbar at Dashboard Page
    </div>
<div className='flex justify-between mb-3'>
<button className='bg-gray-200 w-full text-black px-3 py-1 rounded-lg flex justify-between items-center'>
    <p>set due date</p>
    <img src="/icons/calendar-03.png" alt="" />
    </button>

<div className='flex gap-1 text-black text-sm items-center bg-gray-200 rounded-xl pr-4 ml-2'>
<img src="/icons/arrow-down.png" alt="" />
<p>Low</p>
</div>
</div>

<div className='bg-gray-200 rounded-2xl gap-1 text-black p-2 flex items-center'>
<img src="/ellipse.png" alt="" />
<p>ahmed mohamed</p>
</div>
    
    </div>
<div className='flex flex-col gap-2 border rounded-2xl p-3 shadow-xl'>
    <div className='flex justify-between mb-3'>
    <span className='bg-violet-200 text-violet-500 px-3  rounded-2xl'> list name</ span>
    <div className='flex gap-2'>
<button className='cursor-pointer' ><img src="/icons/edit-02.png" alt="" /></button>
<button className='cursor-pointer' ><img src="/icons/delete-03.png" alt="" /></button>
<button className='cursor-pointer' ><img src="/icons/view.png" alt="" /></button>
    </div>
    </div>
    
    <div className='bg-gray-200 rounded-xl mb-3 p-2 text-black truncate'>
Revision 1: Fixing Navbar at Dashboard Page
    </div>
<div className='flex justify-between mb-3'>
<button className='bg-gray-200 w-full text-black px-3 py-1 rounded-lg flex justify-between items-center'>
    <p>set due date</p>
    <img src="/icons/calendar-03.png" alt="" />
    </button>

<div className='flex gap-1 text-black text-sm items-center bg-gray-200 rounded-xl pr-4 ml-2'>
<img src="/icons/arrow-down.png" alt="" />
<p>Low</p>
</div>
</div>

<div className='bg-gray-200 rounded-2xl gap-1 text-black p-2 flex items-center'>
<img src="/ellipse.png" alt="" />
<p>ahmed mohamed</p>
</div>
    
    </div>
<div className='flex flex-col gap-2 border rounded-2xl p-3 shadow-xl'>
    <div className='flex justify-between mb-3'>
    <span className='bg-violet-200 text-violet-500 px-3  rounded-2xl'> list name</ span>
    <div className='flex gap-2'>
<button className='cursor-pointer' ><img src="/icons/edit-02.png" alt="" /></button>
<button className='cursor-pointer' ><img src="/icons/delete-03.png" alt="" /></button>
<button className='cursor-pointer' ><img src="/icons/view.png" alt="" /></button>
    </div>
    </div>
    
    <div className='bg-gray-200 rounded-xl mb-3 p-2 text-black truncate'>
Revision 1: Fixing Navbar at Dashboard Page
    </div>
<div className='flex justify-between mb-3'>
<button className='bg-gray-200 w-full text-black px-3 py-1 rounded-lg flex justify-between items-center'>
    <p>set due date</p>
    <img src="/icons/calendar-03.png" alt="" />
    </button>

<div className='flex gap-1 text-black text-sm items-center bg-gray-200 rounded-xl pr-4 ml-2'>
<img src="/icons/arrow-down.png" alt="" />
<p>Low</p>
</div>
</div>

<div className='bg-gray-200 rounded-2xl gap-1 text-black p-2 flex items-center'>
<img src="/ellipse.png" alt="" />
<p>ahmed mohamed</p>
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