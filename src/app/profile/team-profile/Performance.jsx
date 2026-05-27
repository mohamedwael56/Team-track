import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import Link from 'next/link'

function Performance() {
     const data={
    labels:['matric 1','matric 2','matric 3','matric 4','matric 5',],
    datasets:[{
      data:[42,42,42,78,65],
      backgroundColor:['#3F27F5','#F2F527','#F58E27','#F22A1B','#F25B1B']
    }]
  }
  return (
<div className='bg-gray-100  flex flex-col rounded-2xl p-5 my-4'>
<div className='flex flex-col'>
<h1 className='text-black'>performance</h1>
<p className='text-gray-400'>Your monthly analized performance.</p>
</div>
<div className='w-80 h-80 my-4'>
<Doughnut
data={data}
options={{cutout:'0%',plugins:{legend:{position:'bottom'}}}}
/>
</div>
<Link href="/profile/team-profile/metric" className="flex items-center justify-center  my-5">
    <button className='bg-blue-900 rounded-2xl w-full text-white cursor-pointer px-4 py-2'>
        + Add metric
    </button>
</Link>
<div className='flex flex-col w-full text-black'>
 <div className="flex justify-between mb-2 ">
<h1>performance</h1>
<p className='text-green-500 font-bold'>88</p>
 </div>
  
  <div className=' relative my-2 bg-green-200 rounded-2xl h-3'>
    <div className=" absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-green-600 rounded-full transition-all duration-500" style={{left:'66%'}}>
    </div>
    </div>
    <div className="grid grid-cols-6 w-full my-2 gap-10">
      <div>0</div>
      <div>20</div>
      <div>40</div>
      <div>60</div>
      <div>80</div>
      <div>100</div>
  </div>
  <div className="bg-green-200 capitalize p-5 flex items-center justify-center rounded-xl text-green-600">
    good performance
  </div>
</div>
  </div>  )
}

export default Performance