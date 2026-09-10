"use client"
import React from 'react'
import { useState } from 'react'
import { data } from '@/Data/rewardsData'
import Image from 'next/image'
function RewardsInfo() {
   const [open,setOpen]=useState(false)
    const [description,setDescription]=useState(true)
    const [howToRedeem,setHowToRedeem]=useState(false)
    const [termsOfUse,setTermsOfUse]=useState(false)
  const descriptionClicked=()=>{
    setDescription(true)
    setHowToRedeem(false)
    setTermsOfUse(false)
  }
  const howToRedeemClicked=()=>{
    setDescription(false)
    setHowToRedeem(true)
    setTermsOfUse(false)
  }
  const termsOfUseClicked=()=>{
    setDescription(false)
    setHowToRedeem(false)
    setTermsOfUse(true)
  }
  return (
    <>
    {
open&&(
<>
<div className="fixed inset-0 bg-black opacity-50 z-60 " ></div>
<div className="absolute top-80 inset-0  flex justify-end mr-5  items-center z-60 " >
    <div className="bg-white flex flex-col rounded-2xl p-5">
        <div className="flex justify-between mb-2 items-center">
<h1 className='text-black  font-bold'>Rewards overview</h1>
<button onClick={()=>setOpen(false)} className='cursor-pointer text-black text-3xl'>×</button>
        </div>
        <div className="w-100 h-50 relative object-cover">
<Image fill src="/icons/talabat.png" className=" border rounded-xl mb-2" alt='' />
</div>
<p className='rounded-xl border border-dashed px-3 bg-gray-200 text-center py-1 text-blue-700 border-gray-500'>$10 gift card</p>
<div className="mt-4 flex gap-3 flex-col border rounded-xl p-5">
<div className="flex w-full">
<button onClick={descriptionClicked} className={`w-full${description ? ' bg-blue-900 text-white' : ' bg-gray-100 text-black'} rounded-xl px-3 py-3 cursor-pointer text-nowrap`}>description</button>
<button onClick={howToRedeemClicked} className={`w-full${howToRedeem ? ' bg-blue-900 text-white' : ' bg-gray-100 text-black'} rounded-xl px-3 py-3 cursor-pointer text-nowrap`}>How to redeem</button>
<button onClick={termsOfUseClicked} className={`w-full${termsOfUse ? ' bg-blue-900 text-white' : ' bg-gray-100 text-black'} rounded-xl px-3 py-3 cursor-pointer text-nowrap`}> Terms of use</button>
</div>
{description&&(
<p className='w-[400px] mt-3 text-zinc-800'>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus similique quo ratione temporibus aliquid harum laudantium, repellendus eum voluptatum unde dolores exercitationem eaque accusantium sed nihil officiis veniam rerum tempora.
</p>
)}
{howToRedeem&&(
     <> 
<p className='w-[400px] mt-3 text-zinc-800'>
     1- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus similique quo ratione temporibus aliquid harum laudantium, repellendus eum voluptatum unde dolores exercitationem eaque accusantium sed nihil officiis veniam rerum tempora.
</p>
<p className='w-[400px] mt-3 text-zinc-800'>    2- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus similique quo ratione temporibus aliquid harum laudantium, repellendus eum voluptatum unde dolores exercitationem eaque accusantium sed nihil officiis veniam rerum tempora.
</p>
<p className='w-[400px] mt-3 text-zinc-800'>3- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus similique quo ratione temporibus aliquid harum laudantium, repellendus eum voluptatum unde dolores exercitationem eaque accusantium sed nihil officiis veniam rerum tempora.
</p>
</>

)}
{termsOfUse&&(
<p className='w-[400px] mt-3 text-zinc-800'>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus similique quo ratione temporibus aliquid harum laudantium, repellendus eum voluptatum unde dolores exercitationem eaque accusantium sed nihil officiis veniam rerum tempora.
</p>
)}
</div>
    </div>
    
</div>
</>

)
}
     <div className="mt-4 grid grid-cols-1 lg:grid-cols-5 gap-3">
       {
        data.map((item)=>
        {
            return(
                
                 <div key={item.id} className="border mr-10 bg-white shadow-xl px-3 w-50 gap-5 rounded-2xl flex flex-col items-center py-3">
   <div className="flex justify-between">
    <div className="flex-1 justify-center items-center flex flex-col w-full gap-3 ">
    <img src="/icons/Frame.png" alt="" width={70} /> 
   <img src={item.img} className="rounded-xl" alt="" />
    <p className=' text-black  font-bold'>{item.prize}</p>
    <p className="text-gray-400  underline text-sm"> {item.points} </p>
    
    </div>
        <button onClick={()=>setOpen(true)} className='flex m-1 cursor-pointer items-start mt-1'> <img src="/icons/link123.png" alt="" width={15}  /></button>

        </div>
        </div>
                
            )            
        })
       }
       
    
       
            </div>
</>
)
}

export default RewardsInfo