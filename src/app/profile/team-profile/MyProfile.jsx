import React from 'react'
import Link from 'next/link'

function MyProfile() {
  return (
  <div className="bg-gray-100 rounded-2xl p-5 my-4">
        <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
      <img src="/profile/avatar.png" alt="" />
      <div className='flex flex-col'>
    <div className='flex gap-2 items-center'>
      <h1 className='text-black text-2xl font-bold'>saif mohamed</h1>
      <Link href='' className='text-blue-600'> full info</Link>
    </div>
    <div className="flex flex-row capitalize mt-4 gap-20 items-center">
      <div className="flex flex-col ">
        <p className='text-gray-500'>role</p>
        <p className='text-black'>flutter developer</p>
      </div>
      <div className="flex flex-col ">
        <p className='text-gray-500'>phone number</p>
        <p className='text-black'>(+20)123456789</p>
      </div>
      <div className="flex flex-col ">
        <p className='text-gray-500'>email address</p>
        <p className='text-black'>flutter developer</p>
      </div>
    </div>
      </div>
        </div>


        <div className='bg-gray-200 gap-2 rounded-2xl p-3 flex items-center'>
      <img src="/profile/frame.png" alt="" />
      <div className='flex flex-col'>
<p className='text-black'> Total price</p>
<p className='text-violet-600'>2580</p>
      </div>
        </div>
        </div>
      </div>  )
}

export default MyProfile