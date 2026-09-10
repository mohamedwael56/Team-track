import { Recognitions } from '@/Data/recognitionsData'
import React, { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function page() {
 
  return (
    <div className='flex'>
<div className='flex-1 lg:ml-69'>
<main>
<div className='flex flex-col gap-5 m-5 bg-gray-100 p-5 rounded-2xl'>
<div className='flex gap-3 items-center'>
<Link href="/home" className="text-blue-900 text-sm hover:text-blue-700 transition duration-300">Back</Link>
<p className='text-black text-xl font-bold'>Recognitions</p>
</div>

<hr />

<div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
    {
      Recognitions.map((recognition)=>{
        return(
          <Fragment key={recognition.id}>
          <div className="flex justify-center bg-orange-100 py-2 px-3 rounded-xl gap-3 mt-3">

<div className="flex flex-col w-full items-center">
<h1 className=" font-bold text-xl text-amber-500 items-start"> mr.punctuality</h1>
  <Image width={60} height={80} src="/icons/rectangle.png" alt="" />

<Image width={150} height={100} src={recognition.img} alt="" />
<div className="flex text-zinc-800 flex-row mt-2 items-center gap-2">
</div>
<div className='flex w-full text-black justify-between'>
  <div className='flex items-center gap-2'>
  <Image width={18} height={20} src="/icons/Vector2.png" alt="" />
<span>{recognition.points}</span>
</div>
<span className="ml-2">{recognition.date}</span>
</div>
</div>
</div>
          </ Fragment>
        )
})
    }
       
    
</div>

  </div>
</main>
</div>
    </div>
  )
}

export default page