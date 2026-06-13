import React from 'react'
import Link from 'next/link'

function MyProfile() {
  return (
  <div className="bg-gray-100 lg:w-full w-80 rounded-2xl p-5 my-4">
        <div className='flex justify-between items-start lg:items-center'>
        <div className='flex items-center gap-4'>
      <img src="/profile/avatar.png" alt="" className='lg:w-fit w-7' />
      <div className='flex flex-col'>
    <div className='flex gap-2 items-center'>
      <h1 className='text-black lg:text-2xl font-bold'>saif mohamed</h1>
      <Link href='' className='text-blue-600 lg:text-base text-xs'> full info</Link>
    </div>
    <div className="flex flex-row capitalize mt-4 lg:gap-20 gap-5 items-center">
      <div className="flex flex-col ">
        <p className='text-gray-500 lg:text-base text-[8px]'>role</p>
        <p className='text-black lg:text-base text-[8px]'>flutter developer</p>
      </div>
      <div className="flex flex-col ">
        <p className='text-gray-500 lg:text-base text-[8px]'>phone number</p>
        <p className='text-black lg:text-base text-[8px]'>(+20)123456789</p>
      </div>
      <div className="flex flex-col ">
        <p className='text-gray-500 lg:text-base text-[8px]'>email address</p>
        <p className='text-black lg:text-base text-[8px]'>flutter developer</p>
      </div>
    </div>
      </div>
        </div>


        <div className='bg-gray-200 gap-2 rounded-2xl lg:p-3 p-1 flex items-center'>
      <img src="/profile/frame.png" alt="" className='lg:w-fit w-5' />
      <div className='flex flex-col'>
<p className='text-black lg:text-base text-[8px]'> Total price</p>
<p className='text-violet-600 lg:text-base text-[8px]'>2580</p>
      </div>
        </div>
        </div>
      </div>  )
}

export default MyProfile