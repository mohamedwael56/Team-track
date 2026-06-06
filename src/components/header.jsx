'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
function Header({setIsSidebarOpen,isSidebarOpen}) {
  const [open, setOpen]=useState(false);
  
  return (
   
      <header>
           <button onClick={()=>setIsSidebarOpen(!isSidebarOpen)} className="cursor-pointer lg:hidden">
  ☰
</button>
          <div className="hidden justify-between  lg:flex items-center">
            
            <div className="relative pr-5">
              <button className="absolute top-3 left-2 cursor-pointer">
                <img src="/icons/search.png" alt="" width={15} />
             </button>

              <input type="text" placeholder="Search" className="bg-gray-100 pl-8 pr-5 py-2 rounded-xl text-black"/>
            </div>
            <div className='flex items-center gap-3'>
              <button onClick={()=>setOpen(!open)} className="bg-gray-100 cursor-pointer rounded-2xl p-3">
                <img src="/icons/notification.png" alt="" />
{
    open &&(
      <>
      <div className='absolute right-23 mt-4 z-50 bg-white rounded-xl shadow-xl p-4 '>
<div className="flex flex-col ">
<div className="flex items-start gap-3 mb-2">
    <img src="/icons/alert-outline.png" alt="" />
    <div className="flex items-start flex-col">
      <h1 className=" text-black text-sm">UI Task less than 8 days</h1>
      <p className="text-gray-400 text-sm w-[350px] text-start">Phillip, your assignment is less than 8 days away from reaching</p>
    </div>
    </div>
  
  </div> 
  <hr className='mb-2' />       
<div className="flex flex-col ">
<div className="flex items-start gap-3 mb-2">
    <img src="/icons/alert-outline.png" alt="" />
    <div className="flex items-start flex-col">
      <h1 className=" text-black text-sm">UI Task less than 8 days</h1>
      <p className="text-gray-400 text-sm w-[350px] text-start">Phillip, your assignment is less than 8 days away from reaching</p>
    </div>
    </div>
  
  </div> 
  <hr className='mb-2' />       
<div className="flex flex-col ">
<div className="flex items-start gap-3 mb-2">
    <img src="/icons/alert-outline.png" alt="" />
    <div className="flex items-start flex-col">
      <h1 className=" text-black text-sm">UI Task less than 8 days</h1>
      <p className="text-gray-400 text-sm w-[350px] text-start">Phillip, your assignment is less than 8 days away from reaching</p>
    </div>
    </div>
  
  </div> 
  <hr className='mb-2' />       
<div className="flex flex-col ">
<div className="flex items-start gap-3 mb-2">
    <img src="/icons/alert-outline.png" alt="" />
    <div className="flex items-start flex-col">
      <h1 className=" text-black text-sm">UI Task less than 8 days</h1>
      <p className="text-gray-400 text-sm w-[350px] text-start">Phillip, your assignment is less than 8 days away from reaching</p>
    </div>
    </div>
  
  </div> 
  <hr className='mb-2' />       
<div className="flex flex-col ">
<div className="flex items-start gap-3 mb-2">
    <img src="/icons/alert-outline.png" alt="" />
    <div className="flex items-start flex-col">
      <h1 className=" text-black text-sm">UI Task less than 8 days</h1>
      <p className="text-gray-400 text-sm w-[350px] text-start">Phillip, your assignment is less than 8 days away from reaching</p>
    </div>
    </div>
  
  </div> 
  <hr className='mb-2' /> 
<Link href="/notifications" className="text-blue-600 ">
              View more notifications
              </Link>      
      </div>

      </>
    )
   }
              </button>
            <nav className="flex w-full  items-center justify-end gap-5 p-5">
              <Link
                href="/profile"
                className="text-gray-500 hover:text-gray-700 transition duration-300 flex gap-4 items-center"
              >
                <img
                  src="/icons/avatar.png"
                  alt=""
                  className="bg-gray-300 py-2 px-3 w-10 rounded-xl"
                />
                <div className="flex items-start flex-col">
                  <h1 className="text-xl text-black">mohamed wael</h1>
                  <p className="text-gray-400 text-sm">flutter developer</p>
                </div>
              </Link>
            </nav>
            </div>
          </div>
        </header>
  )
}

export default Header