import React from 'react'
import { useRouter } from 'next/navigation';

const MyProfile = ({setOpen}) => {

      const router=useRouter()
    
  return (
  <div className="bg-gray-100 lg:w-full w-80 rounded-2xl p-5 my-4">
        <div className='flex justify-between items-start lg:items-center'>
        <div className='flex items-center lg:gap-4 gap-6'>
      <img src="/profile/avatar.png" alt="" className='lg:w-fit w-7' />
      <div className='flex flex-col'>
    <div className='flex gap-2 items-center'>
      <h1 className='text-black lg:text-2xl text-xs font-bold'>mohamed wael</h1>
      <button onClick={()=>setOpen(true)} className='cursor-pointer text-[8px] lg:text-base text-blue-600'> full info</button>
    </div>
    <div className="flex flex-row capitalize mt-4 lg:gap-20 gap-2 items-center">
      <div className="flex flex-col ">
        <p className='text-gray-500 lg:text-base text-xs'>role</p>
        <p className='text-black lg:text-base text-[8px]'>flutter developer</p>
      </div>
      <div className="flex flex-col ">
        <p className='text-gray-500 lg:text-base text-xs'>phone number</p>
        <p className='text-black lg:text-base text-[8px]  '>(+20)123456789</p>
      </div>
      <div className="flex flex-col ">
        <p className='text-gray-500 lg:text-base text-xs'>email address</p>
        <p className='text-black lg:text-base text-[8px]'>mohamedahmed@grandtech.io</p>
      </div>
    </div>
      </div>
        </div>


        <button onClick={()=>router.push('/profile/points-history')} className='cursor-pointer bg-gray-200 gap-2 rounded-2xl lg:p-3 p-1 flex items-center'>
      <img src="/profile/frame.png" alt="" className='lg:w-fit w-3' />
      <div className='flex flex-col'>
<p className='text-black text-[8px] lg:text-base'> Total points</p>
<p className='text-violet-600 lg:text-base text-[8px] text-start'>2580</p>
      </div>
        </button>
        </div>
      </div>  )
}

export default MyProfile