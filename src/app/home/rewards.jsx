import React, { Fragment } from 'react'
import Link from 'next/link'
function Rewards() {
  const rewards=[{
    id:1,
    title:'NOON',
    description:'50% off',
    pointsRequired:200,
    image:'/icons/Noon.jpg'
  },
  {
    id:2,
    title:'NOON',
    description:'50% off',
    pointsRequired:200,
    image:'/icons/Noon.jpg'
  },
  {
    id:3,
    title:'NOON',
    description:'50% off',
    pointsRequired:200,
    image:'/icons/Noon.jpg' 
  },  
]
  return (
    <div className=" bg-gray-100 lg:w-130 w-80 flex flex-col p-5 rounded-2xl ">
<div className="flex justify-between">
<div>
  <h1 className="text-black font-bold text-vase lg:text-2xl">rewards</h1>
  <p className="text-gray-500 lg:text-base text-xs mb-5">
    Celebrating the hard work of our top employees! 
  </p>
</div>
<div>
  <Link href="/rewards" className="text-blue-900 lg:text-xl text-xs text-nowrap hover:text-blue-700 transition duration-300">
    view all
  </Link>
</div>
</div>
{
  rewards.map((reward)=>{
    return(
      <Fragment key={reward.id}>
<div className="flex my-1 items-center bg-gray-200 p-3 rounded-2xl">

  <img src="/icons/Noon.jpg" alt="" className="lg:w-40 w-20 rounded-2xl" />


  <div className="border border-dashed border-gray-300 h-20 ml-1 mr-3"></div>

 
  <div className="flex-1 flex justify-between ">
    <div>
      <h1 className="text-black font-bold text-sm lg:text-xl">NOON</h1>
      <p className="lg:text-xl text-xs text-blue-800">50% off</p>
      <p className="lg:text-base text-[10px] text-nowrap text-black">redeem now for 200 points </p>
    </div>
    <div className="flex items-start justify-start">
      <button className="text-white cursor-pointer bg-blue-900 hover:bg-blue-700 transition duration-300 lg:py-2 lg:px-5 lg:text-base text-[9px] px-2 py-1 rounded-2xl">
        redeem
      </button>
    </div>
  </div>
</div>
 </Fragment>   
 )
  })}




</div>
  )
}

export default Rewards