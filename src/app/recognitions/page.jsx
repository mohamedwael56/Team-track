import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import React, { Fragment } from 'react'
import Link from 'next/link'

function page() {
  const Recognitions=[{
    id:1,
    name:'mr.punctuality',
    points:'+20',
    date:'Tue 25 Aug 2024',
    img:'/icons/award.png'
  },
  {
    id:2,
    name:'mr.punctuality',
    points:'+30',
    date:'Tue 23 Aug 2024',
    img:'/icons/award.png'
  },
    {
    id:3,
    name:'mr.punctuality',
    points:'+40',
    date:'Tue 21 Aug 2024',
    img:'/icons/award.png'
  },
    {
    id:4,
    name:'mr.punctuality',
    points:'+10',
    date:'Tue 20 Aug 2024',
    img:'/icons/award.png'
  },
    {
    id:5,
    name:'mr.punctuality',
    points:'+15',
    date:'Tue 27 Aug 2024',
    img:'/icons/award.png'  
    },{
    id:6,
    name:'mr.punctuality',
    points:'+55',
    date:'Tue 29 Aug 2024',
    img:'/icons/award.png'
    },{
    id:7,
    name:'mr.punctuality',
    points:'+70',
    date:'Tue 27 Aug 2024',
    img:'/icons/award.png'
    },{
    id:8,
    name:'mr.punctuality',
    points:'+90',
    date:'Tue 21 Aug 2024',
    img:'/icons/award.png'
      
      },{
    id:9,
    name:'mr.punctuality',
    points:'32',
    date:'Tue 20 Aug 2024',
    img:'/icons/award.png'
    }

  ]
  return (
    <div className='flex'>
<div className='flex-1 ml-69'>
<Header />
<main>
<div className='flex flex-col gap-5 m-5 bg-gray-100 p-5 rounded-2xl'>
<div className='flex gap-3 items-center'>
<Link href="/home" className="text-blue-900 text-sm hover:text-blue-700 transition duration-300">Back</Link>
<p className='text-black text-xl font-bold'>Recognitions</p>
</div>

<hr />

<div className='grid grid-cols-3 gap-3'>
    {
      Recognitions.map((recognition)=>{
        return(
          <Fragment key={recognition.id}>
          <div className="flex justify-center bg-orange-100 py-2 px-3 rounded-xl gap-3 mt-3">

<div className="flex flex-col w-full items-center">
<h1 className=" font-bold text-xl text-amber-500 items-start"> mr.punctuality</h1>
  <img src="/icons/rectangle.png" alt="" />

<img src={recognition.img} alt="" />
<div className="flex text-zinc-800 flex-row mt-2 items-center gap-2">
</div>
<div className='flex w-full text-black justify-between'>
  <div className='flex items-center gap-2'>
  <img src="/icons/vector2.png" alt="" />
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
<Sidebar   />
    </div>
  )
}

export default page