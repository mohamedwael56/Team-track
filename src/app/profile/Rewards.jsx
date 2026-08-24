import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Rewards() {
  return (
<div className="bg-gray-100 rounded-2xl p-5 w-80 lg:w-full my-4">
  <div className="flex flex-col ">
    <div className="flex justify-between items-center">
      <div className='flex flex-col'>
      <h1 className='text-black lg:text-xl font-bold'>rewards</h1>
<p className='text-gray-400 lg:text-base text-[10px]'>Purchase these rewards at the store.</p>
</div>
<div>
<Link href='/rewards' className='text-blue-600 lg:text-base text-[8px]  '>view all</Link>
</div>
    </div>
    <div className='mt-3 flex flex-row lg:gap-3 gap-2'>
    <Image width={60} height={60} src="/profile/waffarha.png" alt="" className='lg:w-fit w-7 h-7 lg:h-fit ' />
    <Image width={60} height={60} src="/profile/amazon.png" alt="" className='lg:w-fit w-7 h-7 lg:h-fit ' />
    <Image width={60} height={60} src="/profile/spotify.png" alt="" className='lg:w-fit w-7 h-7 lg:h-fit ' />
    <Image width={60} height={60} src="/profile/netflix.png" alt="" className='lg:w-fit w-7 h-7 lg:h-fit ' />
    <Image width={60} height={60} src="/profile/waffarha.png" alt="" className='lg:w-fit w-7 h-7 lg:h-fit ' />
    <Image width={60} height={60} src="/profile/amazon.png" alt="" className='lg:w-fit w-7 h-7 lg:h-fit ' />
    <Image width={60} height={60} src="/profile/spotify.png" alt="" className='lg:w-fit w-7 h-7 lg:h-fit ' />
    <Image width={60} height={60} src="/profile/netflix.png" alt="" className='lg:w-fit w-7 h-7 lg:h-fit ' />
    <Image width={60} height={60} src="/profile/waffarha.png" alt="" className='lg:w-fit w-7 h-7 lg:h-fit hidden lg:block' />
    <Image width={60} height={60} src="/profile/amazon.png" alt="" className='lg:w-fit w-7 h-7 lg:h-fit hidden lg:block  ' />
    <Image width={60} height={60} src="/profile/spotify.png" alt="" className='lg:w-fit w-7 h-7 lg:h-fit hidden lg:block ' />
    <Image width={60} height={60} src="/profile/netflix.png" alt="" className='lg:w-fit w-7 h-7 lg:h-fit hidden lg:block' />
    </div>
  </div>
</div>
  )
}

export default Rewards