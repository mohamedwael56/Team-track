import React from 'react'
import Link from 'next/link'

function Rewards() {
  return (
 <div className="flex flex-1  lg:w-full w-80 bg-gray-100 p-5 lg:ml-0 -ml-5 rounded-2xl border flex-col ">
    <div className="flex justify-between items-center">
      <div className='flex flex-col'>
      <h1 className='text-black lg:text-xl font-bold'>rewards</h1>
<p className='text-gray-400 lg:text-base text-xs'>Purchase these rewards at the store.</p>
</div>
<div>
<Link href='/rewards' className='text-blue-600 lg:text-base text-xs  '>view all</Link>
</div>
    </div>
    <div className='mt-3 flex flex-wrap gap-3 mx-5'>
    <img src="/profile/waffarha.png" alt="" />
    <img src="/profile/amazon.png" alt="" />
    <img src="/profile/spotify.png" alt="" />
    <img src="/profile/netflix.png" alt="" />
    <img src="/profile/waffarha.png" alt="" />
    <img src="/profile/amazon.png" alt="" />
    <img src="/profile/spotify.png" alt="" />
    <img src="/profile/netflix.png" alt="" />
   
    </div>
  </div>  )
}

export default Rewards