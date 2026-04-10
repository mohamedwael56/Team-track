'use client';
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Sidebar() {
    const pathname = usePathname();
  return (
    
 <aside className='gap-5 m-3 w-64 inset-0 fixed bg-gray-100 h-screen rounded-2xl z-40 shadow-lg '>
            <div className='flex flex-col gap-5 mt-5 '>
               <div className=' select-none flex  justify-start ml-8'>
                <img src="/icons/buy2logo.png" alt="Logo" width={100}  />
                </div>
                <div className='flex justify-start ml-8 mt-5 capitalize'>
                <ul className= 'flex flex-col  gap-8 text-gray-500'>
                  <li>
                    <Link href="/home" className={pathname === '/home' ? 'flex items-center gap-2 text-blue-900 bg-gray-400 py-2 px-8 rounded-2xl ' : 'flex items-center gap-2 text-gray-500'}>
                      <img src="/icons/apps.png" alt="Dashboard Icon" />
                    Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/tasks" className={pathname === '/tasks' ? 'flex items-center gap-2 text-blue-900 bg-gray-400 py-2 px-8 rounded-2xl ' : 'flex items-center gap-2 text-gray-500'}>
                    <img src="/icons/vector.png" alt="Projects Icon" />
                    My tasks</Link>
                  </li>
                  <li>
                    <Link href="/lists" className='flex items-center gap-2 text-gray-500'>
                    <img src="/icons/lists.png" alt="Team Icon" />
                    lists</Link>
                  </li>
                  <li>
                    <Link href="/attendance" className='flex items-center gap-2 text-gray-500'>
                    <img src="/icons/calendar.png" alt="Team Icon" />
                    attendance</Link>
                  </li>
                  <li>
                    <Link href="/requests" className='flex items-center gap-2 text-gray-500'>
                    <img src="/icons/post.png" alt="Team Icon" />
                    requests</Link>
                  </li>
                  <li>
                    <Link href="/shifts" className='flex items-center gap-2 text-gray-500'>
                    <img src="/icons/clock-circle.png" alt="Team Icon" />
                    shifts</Link>
                  </li>
                  <li>
                    <Link href="/rewards" className='flex items-center gap-2 text-gray-500'>
                    <img src="/icons/store.png" alt="Team Icon" />
                    store</Link>
                  </li>
                  <li>
                    <Link href="/settings" className='flex items-center gap-2 text-gray-500'>
                    <img src="/icons/setting.png" alt="Team Icon" />
                    settings</Link>
                  </li>
                  <li>
                    <Link href="/support" className='flex items-center gap-2 text-gray-500'>
                    <img src="/icons/help.png" alt="Team Icon" />
                    support</Link>
                  </li>
                  <li>
                    <Link href="/team" className='flex items-center mt-20 gap-2 text-red-700'>
                    <img src="/icons/help.png" alt="Team Icon" />
                    log out</Link>
                  </li>
                </ul>
                </div>
        </div>
        </aside>  )
}

export default Sidebar