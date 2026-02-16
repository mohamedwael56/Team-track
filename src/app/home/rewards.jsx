import React from 'react'
import Link from 'next/link'
function Rewards() {
  return (
    <div className=" bg-gray-100 w-130 flex flex-col p-5 rounded-2xl ">
<div className="flex justify-between">
<div>
  <h1 className="text-black font-bold text-2xl">rewards</h1>
  <p className="text-gray-500 mb-5">
    Celebrating the hard work of our top employees! 
  </p>
</div>
<div>
  <Link href="/rewards" className="text-blue-900 text-xl hover:text-blue-700 transition duration-300">
    view all
  </Link>
</div>
</div>
<div className="flex items-center bg-gray-200 p-3 rounded-2xl">

  <img src="/icons/Noon.jpg" alt="" className="w-40 rounded-2xl" />


  <div className="border-2 border-dashed border-gray-300 h-20 ml-1 mr-3"></div>

 
  <div className="flex-1 flex justify-between ">
    <div>
      <h1 className="text-black font-bold text-xl">NOON</h1>
      <p className="text-xl text-blue-800">50% off</p>
      <p className="text-md text-nowrap text-black">redeem now for 200 points </p>
    </div>
    <div className="flex items-start justify-start">
      <button className="text-white cursor-pointer bg-blue-900 hover:bg-blue-700 transition duration-300 py-2 px-5 rounded-2xl">
        redeem
      </button>
    </div>
  </div>
</div>
<div className="flex items-center mt-4 bg-gray-200 p-3 rounded-2xl">

  <img src="/icons/Noon.jpg" alt="" className="w-40 rounded-2xl" />


  <div className="border-2 border-dashed border-gray-300 h-20 ml-1 mr-3"></div>

 
  <div className="flex-1 flex justify-between ">
    <div>
      <h1 className="text-black font-bold text-xl">NOON</h1>
      <p className="text-xl text-blue-800">50% off</p>
      <p className="text-md text-black">200 points to redeem</p>
    </div>
    <div className="flex items-start justify-start">
      <button className="text-gray-400 bg-gray-300  py-2 px-5 rounded-2xl">
        redeem
      </button>
    </div>
  </div>
</div>
<div className="flex items-center mt-4 bg-gray-200 p-3 rounded-2xl">

  <img src="/icons/Noon.jpg" alt="" className="w-40 rounded-2xl" />


  <div className="border-2 border-dashed border-gray-300 h-20 ml-1 mr-3"></div>

 
  <div className="flex-1 flex justify-between ">
    <div>
      <h1 className="text-black font-bold text-xl">NOON</h1>
      <p className="text-xl text-blue-800">50% off</p>
      <p className="text-md text-black">200 points to redeem</p>
    </div>
    <div className="flex items-start justify-start">
      <button className="text-gray-400 bg-gray-300  py-2 px-5 rounded-2xl">
        redeem
      </button>
    </div>
  </div>
</div>



</div>
  )
}

export default Rewards