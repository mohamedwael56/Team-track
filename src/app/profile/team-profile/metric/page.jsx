'use client';
import Header from '@/components/header'
import React from 'react'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import { useState } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRouter } from 'next/navigation';
import { Chart as ChartJs,Tooltip,Legend,ArcElement } from 'chart.js'
import WorkQuality from './WorkQualtity';
import FeedBack from './FeedBack';
ChartJs.register(ArcElement,Tooltip,Legend)
function Page() {
  const router = useRouter();
    const [status, setStatus] = useState('successful');
    const [submitted, setSubmitted] = useState(false);
const [open, setOpen] = useState(false);
const [actualField, setActualField] = useState(false);
 const [inputValue, setInputValue] = useState('');
 const [percentageValue, setPercentageValue] = useState(0);
 const savedPercentage=()=>{
  setActualField(open)
  setPercentageValue(inputValue)
  setOpen(false)
 }
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
      {
      open&&(
        <>
        <div className='fixed bg-black opacity-50 inset-0 z-50'></div>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-2 flex-col lg:w-120 w-80 rounded-2xl">
            <div className="flex justify-between mb-5 items-center">
          <h1 className='text-black'>add actual field</h1>
          <button onClick={()=>setOpen(false)} className='text-2xl cursor-pointer text-black'>×</button>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className='text-black'>actual field</label>
              <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text" id="" className='rounded-lg px-2 text-black border py-2 border-gray-400' />
            </div>
            <div className="flex my-5 gap-2">
              <button onClick={()=>setOpen(false)} className=' border-blue-800 border text-blue-800 w-full rounded-xl cursor-pointer px-5 py-2 ml-2'>Cancel</button>
              <button onClick={savedPercentage} className='bg-blue-900 w-full rounded-xl cursor-pointer text-white px-5 py-2'>Save</button>
            </div>
            </div>
        </div>
        </>
      )
    }
    {submitted&&(
                    <>
                    <div className="bg-black opacity-50 fixed inset-0 z-50"></div>
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-5 items-center lg:w-full w-80flex flex-col rounded-2xl ">
                    <img src={status === 'successful' ? "/icons/icon.png" : "/icons/icon(2).png"} width={70} />
                    <div className="flex flex-col items-center justify-center">
                    <div className="mt-5  text-black"> {status === 'successful' ? ' successful submission' : ' submission failed'}</div>
                    <div className="my-5 text-center text-gray-400 w-[300px] text-sm "> {`${status === 'successful' ? 'Your support ticket has been submitted successfully. Our support team will contact you shortly.' : 'Your support ticket submission failed. Please try again later.'}`}</div>
                    </div>
                    {status === 'successful' ? (
                        <button onClick={()=>setSubmitted(false)} className='bg-blue-900 text-white px-4 py-2 rounded-xl cursor-pointer w-full'>Got it</button>
                    ) : (
                         <button onClick={()=>setSubmitted(false)} className='bg-red-500 text-white px-4 py-2 rounded-xl cursor-pointer w-full'>Got it</button>
                    )}

                    </div>
                    </div>
                    </>
                )}
      <div className="bg-gray-100 lg:w-full w-80 flex flex-col rounded-2xl p-5 my-4">
    <div className="flex items-center mb-5 justify-between">
    <div className="flex gap-5 items-center flex-row">
    <Link href='/profile/team-profile' className='text-blue-500 lg:text-base text-xs'>
    back
    </Link>
    <h1 className='text-black lg:text-xl text-base'>Add KPI</h1>
    </div>
    <div className="flex flex-row items-center gap-5">
        <button onClick={()=>router.back()} className='text-red-500 cursor-pointer text-xs lg:text-base'>discard</button>
        <button onClick={()=>setSubmitted(true)} className='bg-blue-900 rounded-xl cursor-pointer text-white lg:px-5 px-2 text-xs lg:text-base py-2'>Submit KPI</button>
    </div>
    </div>
    <hr />
    
<WorkQuality  setOpen={setOpen} percentageValue={percentageValue}  actualField={actualField} inputValue={inputValue} />

    <h1 className='text-black text-xl mb-1'>Feed back</h1>
    
<FeedBack />

      </div>
   


    </main>
  </div>
</div>

  )
}

export default Page