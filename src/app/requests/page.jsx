'use client';
import Header from '@/components/header'
import React from 'react'
import Sidebar from '@/components/sidebar'
import { useState } from 'react';
import MyRequests from './my-requests';
import TeamRequests from './team-requests';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRouter } from 'next/navigation';
import { Chart as ChartJs,Tooltip,Legend,ArcElement } from 'chart.js'
ChartJs.register(ArcElement,Tooltip,Legend)
function Page() {
  const router = useRouter();
    const [activeTab, setActiveTab] = useState('my-requests');

  const data={
    labels:['matric 1','matric 2','matric 3','matric 4','matric 5',],
    datasets:[{
      data:[42,42,42,78,65],
      backgroundColor:['#3F27F5','#F2F527','#F58E27','#F22A1B','#F25B1B']
    }]
  }
  return (
<div className="flex">
  <div className="flex-1 ml-69">
    <main>
      <div className="bg-gray-100 flex flex-col rounded-2xl p-5 my-4">
   <div className="flex mb-5 justify-between items-center">
    <div className="text-black text-xl font-bold">
Requests
    </div>
    <div className="flex mr-5">
        <button onClick={()=>setActiveTab('my-requests')} className={`${activeTab === 'my-requests' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-500'} px-9 cursor-pointer py-2 rounded-2xl`}>My Requests</button>
      
        <button onClick={()=>setActiveTab('team-requests')} className={`${activeTab === 'team-requests' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-500'} px-9 cursor-pointer py-2 rounded-2xl`}>
            Team Requests
        </button>
        
    </div>
   </div>
   <hr />
   
   
{
activeTab === 'my-requests' && <MyRequests />}
{
activeTab === 'team-requests' && <TeamRequests />
}
      </div>
   


    </main>
  </div>
</div>

  )
}

export default Page