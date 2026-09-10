import React from 'react'
import Link from 'next/link'
import 'swiper/css';
import MembersData from './membersData';
import Image from 'next/image';
function page() {

  const percentage = 66;

  const data={
    labels:['matric 1','matric 2','matric 3','matric 4','matric 5',],
    datasets:[{
      data:[42,42,42,78,65],
      backgroundColor:['#3F27F5','#F2F527','#F58E27','#F22A1B','#F25B1B']
    }]
  }
  return (
<div className="flex">
  <div className="flex-1 lg:ml-69">
    <main>
      <div className="bg-gray-100 flex flex-col rounded-2xl p-5 my-4">
    <div className="flex items-center mb-5 justify-between">
    <div className="flex gap-5 items-center flex-row">
    <Link href='/profile/team-profile' className='text-blue-500 lg:text-base text-xs'>
    back
    </Link>
    <h1 className='text-black lg:text-xl font-bold text-xs'>My team</h1>
    </div>
    <div className="flex flex-row items-center gap-5">
        <button className='text-red-500 cursor-pointer'>discard</button>
        <button className='bg-blue-900 rounded-xl cursor-pointer text-white px-5 py-2'>Submit KPI</button>
    </div>
    </div>
    <hr />
    <div className="flex-1 mb-5 relative">
                <button className='cursor-pointer'>
                <Image width={20} height={20} src="/icons/search.png" alt="" className='absolute left-4 top-3 ' />
            </button>
            <input type="text" placeholder="Search tasks..." className="border border-gray-300 text-zinc-950 rounded-xl px-4 py-2 w-full pl-12" />
       </div>
      
      </div>
   <MembersData />


    </main>
  </div>
</div>

  )
}

export default page