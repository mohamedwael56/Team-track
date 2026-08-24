import Sidebar from '@/components/sidebar'
import React from 'react'
import Header from '@/components/header'
import Link from 'next/link'
import Image from 'next/image'
function page() {
  return (
    <div className='flex'>
        
<div className='flex-1 lg:ml-69'>
<main>
    <div className='flex mt-5 flex-col w bg-gray-100 rounded-2xl p-5 justify-between mb-9'>
    <div className='flex mb-3 gap-3 items-center'>
<Link href="/home" className="text-blue-900 text-sm hover:text-blue-700 transition duration-300">Back</Link>
    <p className='text-black'>the start of the al-ahly</p>
    </div>
    <hr />
    <div className='flex mt-3 w-full h-100 relative gap-3 items-center'>
        <Image fill src="/icons/al-ahly.png" alt="" />
    </div>
    <div className='flex text-black flex-col mb-9 gap-3 mt-4 items-center'>
<p>
    Get inspired by this revived W.H. Audens Hymn to the United Nations.Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So may the story Of our human city Presently move 
</p>
<p>
    Get inspired by this revived W.H. Audens Hymn to the United Nations.Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So may the story Of our human city Presently move 
</p>
<p>
    Get inspired by this revived W.H. Audens Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So may the story Of our human city Presently move 
</p>
<p>
    Get inspired by this revived W.H. Audens Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So may the story Of our human city Presently move 
</p>
<p>
    Get inspired by this revived W.H. Audens Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So may the story Of our human city Presently move 
</p>
<p>
    Get inspired by this revived W.H. Audens Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So may the story Of our human city Presently move 
</p>
    </div>
    <hr />
    <div className='flex mt-5 gap-4 items-center'>
<div className='flex items-center gap-4 text-black'>
<button className='cursor-pointer'>
<Image width={20} height={20} src="/icons/like.png" alt="" />
</button>
<p>7.9 M</p>
</div>
<div className='flex items-center gap-4 text-black'>
<button className='cursor-pointer'>
<Image width={20} height={20} src="/icons/commentS.svg" alt="" />
</button>
<p>155.6K</p>
</div>
    </div>
   
    </div>
    </main>
    </div>
    </div>
  )
}

export default page