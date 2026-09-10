"use client"
import React from 'react'
import { useState } from 'react';

function RequestsTabs({MyRequests,TeamRequests}) {
        const [activeTab, setActiveTab] = useState('my-requests');

  return (
   
     <div className="bg-gray-100 lg:w-full w-80 flex flex-col rounded-2xl p-5 my-4">
   <div className="flex mb-5 justify-between items-center">
    <div className="text-black text-xs lg:text-xl font-bold">
Requests
    </div>
    <div className="flex mr-5">
        <button onClick={()=>setActiveTab('my-requests')} className={`${activeTab === 'my-requests' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-500'} lg:px-9 px-3 cursor-pointer py-2 rounded-2xl lg:text-base text-[10px]`}>My Requests</button>
      
        <button onClick={()=>setActiveTab('team-requests')} className={`${activeTab === 'team-requests' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-500'} lg:px-9 px-3 cursor-pointer py-2 rounded-2xl lg:text-base text-[10px]`}>
            Team Requests
        </button>
        
    </div>
   </div>
   <hr />
   
   
{
activeTab === 'my-requests' && MyRequests}
{
activeTab === 'team-requests' && TeamRequests
}
      </div>
  )
}

export default RequestsTabs