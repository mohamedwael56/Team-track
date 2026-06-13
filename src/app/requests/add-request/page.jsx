'use client';
import Header from '@/components/header'
import React from 'react'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import Leave from './Leave.jsx';
import OverTime from './overTime.jsx';
import RemoteWork from './RemoteWork.jsx/';
import Loan from './Loan.jsx';
import Reimbursement from './Reimbursement.jsx';
import { useRouter } from 'next/navigation';
import { Chart as ChartJs,Tooltip,Legend,ArcElement } from 'chart.js'
ChartJs.register(ArcElement,Tooltip,Legend)
function Page() {
  const [sendRequest, setSendRequest] = useState(false);
    const percentage = 66;
    const [activeTab, setActiveTab] = useState('Leave');
const router = useRouter();
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
        sendRequest&&(
          <>
<div className="bg-black z-50 opacity-50 fixed inset-0"></div>
<div className="z-50 fixed inset-0 flex items-center justify-center">
<div className="bg-white w-100 items-center gap-5 rounded-2xl p-5 flex flex-col">
  <img src="/icons/icon.png" alt="" width={120} />
  <h1 className='text-xl text-black font-bold'>request submitted!</h1>
  <p className='text-gray-400'>Your request has been submitted successfully.</p>
  <button onClick={()=>setSendRequest(false)} className='cursor-pointer  w-full bg-blue-900 text-white rounded-2xl py-3'>Got it</button>
</div>
</div>
</>
        )
      }
      <div className="bg-gray-100 w-80 lg:w-full flex flex-col rounded-2xl p-5 my-4">
   <div className="flex mb-5 justify-between items-center">
   <div className="flex flex-row gap-5 items-center">
    <Link href='' className='text-blue-500 text-[8px] lg:text-base'>back</Link>
    <div className="text-black lg:text-xl text-[9px] font-bold">
Add Requests
    </div>
   </div>
    
    <div className="flex gap-5 mr-5">
<button onClick={()=>router.push('/requests')} className='text-red-500 cursor-pointer text-[9px] lg:text-lg'>Discard</button>
        <button onClick={()=>setSendRequest(true)} className='lg:px-9 px-3 cursor-pointer py-2 text-white text-[9px] lg:text-base bg-blue-900 rounded-2xl'>Send request</button>
      
    </div>
   </div>
   <hr />
   <div className="mb-3 font-bold items-center text-black mt-5 gap-5">
Request Type
   </div>
<div className=" mb-5 gap-2 lg:gap-5 w-full text-black grid lg:grid-cols-5">
    <button onClick={()=>setActiveTab('Leave')} className={`${activeTab === 'Leave' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-black'} cursor-pointer px-7 py-5 rounded-xl `}>
        <img src="/requests/stopwatch-minus.png" alt="" />
        <p className='text-start mt-1'>Leave</p>
        </button>
    <button onClick={()=>setActiveTab('Over Time')} className={`${activeTab === 'Over Time' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-black'} cursor-pointer px-7 py-5 rounded-xl `}>
        <img src="/requests/stopwatch-add.png" alt="" />
        <p className='text-start mt-1'>Over Time</p>
         </button>
    <button onClick={()=>setActiveTab('Remote Work')} className={`${activeTab === 'Remote Work' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-black'} cursor-pointer px-7 py-5 rounded-xl `}>
<img src="/requests/home03.png" alt="" />
<p className='text-start mt-1'>Remote Work</p>
        </button>
    <button onClick={()=>setActiveTab('Loan')} className={`${activeTab === 'Loan' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-black'} cursor-pointer px-7 py-5 rounded-xl `}>
<img src="/requests/money-minus.png" alt="" />
        <p className='text-start mt-1'>Loan</p> 
        </button>
    <button onClick={()=>setActiveTab('Reimbursement')} className={`${activeTab === 'Reimbursement' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-black'} cursor-pointer px-7 py-5 rounded-xl `}> 
        <img src="/requests/profit.png" alt="" />
        <p className='text-start mt-1'>Reimbursement</p>
        </button>
</div>
{activeTab === 'Leave' && <Leave />}
{activeTab === 'Over Time' && <OverTime />}
{activeTab === 'Remote Work' && <RemoteWork />}
{activeTab === 'Loan' && <Loan />}
{activeTab === 'Reimbursement' && <Reimbursement />}
   </div>


    </main>
  </div>
</div>

  )
}

export default Page