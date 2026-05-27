import React from 'react'
import Link from 'next/link'

function Rewards() {
  return (
<div className="bg-gray-100 rounded-2xl p-5  my-4">
  <div className="flex flex-col ">
    <div className="flex justify-between items-center">
      <div className='flex flex-col'>
      <h1 className='text-black text-xl font-bold'>rewards</h1>
<p className='text-gray-400'>Purchase these rewards at the store.</p>
</div>
<div>
<Link href='/rewards' className='text-blue-600'>view all</Link>
</div>
    </div>
    <div className='mt-3 flex flex-row gap-3'>
    <img src="/profile/waffarha.png" alt="" />
    <img src="/profile/amazon.png" alt="" />
    <img src="/profile/spotify.png" alt="" />
    <img src="/profile/netflix.png" alt="" />
    <img src="/profile/waffarha.png" alt="" />
    <img src="/profile/amazon.png" alt="" />
    <img src="/profile/spotify.png" alt="" />
    <img src="/profile/netflix.png" alt="" />
    <img src="/profile/waffarha.png" alt="" />
    <img src="/profile/amazon.png" alt="" />
    <img src="/profile/spotify.png" alt="" />
    <img src="/profile/netflix.png" alt="" />
    </div>
  </div>
</div>
  )
}

export default Rewards