'use client'
import React, { Fragment } from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import RequestDetails from './RequestDetails';
function MyRequests() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [activeOption, setActiveOption] = useState('all');
     const router = useRouter();
   
    const requests=[{
        id:1,
        date:'15 Nov',
        type:'sick leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'pending',
        color:'bg-orange-100',
        textColor:'text-orange-500',
        type:'sick leave'
    },
    {
        id:2,
        date:'13 Nov',
        type:'annual leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'approved',
        color:'bg-green-100',
        textColor:'text-green-500',
        type:'annual leave'

    },
    {
        id:3,
        date:'14 Nov',
        type:'sick leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'rejected',
        color:'bg-red-100',
        textColor:'text-red-500',
        type:'sick leave'

    },{
        id:4,
        date:'12 Nov',
        type:'sick leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'pending',
        color:'bg-orange-100',
        textColor:'text-orange-500',
        type:'sick leave'
    },
    {
        id:5,
        date:'13 Nov',
        type:'annual leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'approved',
        color:'bg-green-100',
        textColor:'text-green-500',
        type:'annual leave'

    },
    {
        id:6,
        date:'14 Nov',
        type:'sick leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'rejected',
        color:'bg-red-100',
        textColor:'text-red-500',
        type:'sick leave'

    },{
        id:7,
        date:'12 Nov',
        type:'sick leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'pending',
        type:'sick leave',
        color:'bg-orange-100',
        textColor:'text-orange-500',
    },
    {
        id:8,
        date:'13 Nov',
        type:'annual leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'approved',
type:'annual leave',
        color:'bg-green-100',
        textColor:'text-green-500',
    },
    {
        id:9,
        date:'14 Nov',
        type:'sick leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'rejected',
        color:'bg-red-100', 
        textColor:'text-red-500',
        type:'sick leave',

    },{
        id:10,
        date:'12 Nov',
        type:'sick leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'pending',
        color:'bg-orange-100',
        textColor:'text-orange-500',
        type:'sick leave',
    },
    {
        id:11,
        date:'13 Nov',
        type:'annual leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'approved',
        color:'bg-green-100',
        textColor:'text-green-500',
        type:'annual leave',

    },
    {
        id:12,
        date:'14 Nov',
        type:'sick leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'rejected',
        color:'bg-red-100',
        textColor:'text-red-500',
        type:'sick leave',


    },{
        id:13,
        date:'12 Nov',
        type:'sick leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'pending',
        color:'bg-orange-100',
        textColor:'text-orange-500',
        type:'sick leave',
    },
    {
        id:14,
        date:'13 Nov',
        type:'annual leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'approved',
        color:'bg-green-100',
        textColor:'text-green-500',
        type:'annual leave',

    }, {
        id:15,
        date:'14 Nov',
        type:'sick leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'rejected',
        color:'bg-red-100',
        textColor:'text-red-500',
        type:'sick leave',

    },{
        id:16,
        date:'12 Nov',
        type:'sick leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'pending',
        color:'bg-orange-100',
        textColor:'text-orange-500',
        type:'sick leave',
    }]

    const filteredRequests=requests.filter((request)=>{
      const searchFilter=
       request.type.toLowerCase().includes(searchTerm.toLowerCase())||
      request.status.toLowerCase().includes(searchTerm.toLowerCase())||
      request.duration.toLowerCase().includes(searchTerm.toLowerCase())||
      request.description.toLowerCase().includes(searchTerm.toLowerCase());
     
      const buttonFilter=
        activeOption === 'all' ||
      request.type.toLowerCase().includes(activeOption.toLowerCase());
      return searchFilter&&buttonFilter
    })
console.log(filteredRequests)
      const [requestDetails, setRequestDetails] = useState(false);
    
  return (
    <>
    <div className=" flex justify-between mb-5 items-center mt-5 gap-5">
 <div className="  w-full  relative">
                <button className='cursor-pointer'>
                <img src="/icons/search.png" alt="" className='absolute left-2 lg:left-4 lg:top-3 top-3 w-2 lg:w-fit ' />
            </button>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search tasks..." className="border border-gray-300 text-zinc-950 rounded-xl px-4 py-2 w-full lg:text-base text-[7px] pl-5 lg:pl-12" />
       </div>
       <div className=" w-60 lg:w-150">
      <button className='border flex gap-2 items-center shadow-sm rounded-xl py-2 px-6 cursor-pointer'>
                <img src="/icons/calendar.png" alt="" className='lg:w-fit w-3' />
                <p className='lg:text-base text-[8px] text-nowrap text-black'>this week : 09/30/2024 - 10/06/2024 </p>
            </button>
            </div>
   </div>
   <div className="flex mb-5 gap-2 justify-between lg:flex-row flex-wrap items-center">
<div className=" flex gap-2 lg:gap-9 text-black capitalize items-center lg:flex-row flex-wrap">
    <button onClick={()=>setActiveOption('all')} className={`cursor-pointer lg:text-base text-[8px] rounded-3xl ${activeOption === 'all' ? 'px-7 bg-violet-50 border text-violet-500 py-1 ' : '  px-4'}`}>All</button>
    <button onClick={()=>setActiveOption('leave')} className={`rounded-3xl lg:text-base text-[8px] cursor-pointer ${activeOption === 'leave' ? 'px-7 bg-violet-50 border text-violet-500 py-1' : '   px-4'}`}>Leave</button>
    <button onClick={()=>setActiveOption('overtime')} className={`rounded-3xl lg:text-base text-[8px] cursor-pointer ${activeOption === 'overtime' ? 'px-7 bg-violet-50 border text-violet-500 py-1' : '   px-4'}`}>Over Time </button>
    <button onClick={()=>setActiveOption('remote')} className={`rounded-3xl lg:text-base text-[8px] cursor-pointer ${activeOption === 'remote' ? 'px-7 bg-violet-50 border text-violet-500 py-1' : '   px-4'}`}>Remote Work</button>
    <button onClick={()=>setActiveOption('loan')} className={`rounded-3xl lg:text-base text-[8px] cursor-pointer ${activeOption === 'loan' ? 'px-7 bg-violet-50 border text-violet-500 py-1' : '   px-4'}`}>Loan Of Use</button>
    <button onClick={()=>setActiveOption('reimbursement')} className={`rounded-3xl lg:text-base text-[8px] cursor-pointer ${activeOption === 'reimbursement' ? 'px-7 bg-violet-50 border text-violet-500 py-1' : '   px-4'}`}> Reimbursement</button>
</div>
<div onClick={()=>{router.push('/requests/add-request')}} className='bg-blue-900 cursor-pointer flex items-center px-6 py-2 text-white rounded-xl'>
    <p className='mr-4 text-[8px] lg:text-lg'>+</p>
    <p className='text-[8px] lg:text-lg text-nowrap'>Add Request</p>
      
</div>

   </div>
      
      <RequestDetails requestDetails={requestDetails} setRequestDetails={setRequestDetails} />

<div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
    {
        filteredRequests.map((request)=>{
            return(
                <Fragment key={request.id}>
<div onClick={()=>setRequestDetails(true)} className="border cursor-pointer rounded-2xl p-5 flex flex-col">
    <div className="flex justify-between items-center">
<div className="bg-violet-50 text-violet-500">
    {request.date}
</div>
<div className={`rounded-xl items-start ${request.color} ${request.textColor} px-5`}>
    {request.status}
</div>
    </div>
    <div className="flex flex-col">
<div className="text-black text-lg font-bold">
    {request.type}
</div>
<div className="text-gray-400">{request.duration}</div>
<div className="text-gray-400">{request.description}</div>

    </div>
    
</div>
                </Fragment>
            )
 } )
    
    }



   </div> 
       </>
 )
}

export default MyRequests