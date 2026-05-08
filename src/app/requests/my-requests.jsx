'use Client'
import React from 'react'
import { useState } from 'react'
function MyRequests() {
   
    const requests=[{
        id:1,
        date:'15 Nov',
        type:'sick leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'pending',
        color:'bg-orange-100',
        textColor:'text-orange-500',
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

    },{
        id:4,
        date:'12 Nov',
        type:'sick leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'pending',
        color:'bg-orange-100',
        textColor:'text-orange-500',
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

    },{
        id:7,
        date:'12 Nov',
        type:'sick leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'pending',
        
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

    },{
        id:10,
        date:'12 Nov',
        type:'sick leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'pending',
        color:'bg-orange-100',
        textColor:'text-orange-500',
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

    },{
        id:13,
        date:'12 Nov',
        type:'sick leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'pending',
        color:'bg-orange-100',
        textColor:'text-orange-500',
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

    }, {
        id:15,
        date:'14 Nov',
        type:'sick leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'rejected',
        color:'bg-red-100',
        textColor:'text-red-500',

    },{
        id:16,
        date:'12 Nov',
        type:'sick leave',
        duration:'09:00 Am -10:00 Am',
        description:'Lorem ipsum dolor sit amet ',
        status:'pending',
        color:'bg-orange-100',
        textColor:'text-orange-500',
    }]

      const [requestDetails, setRequestDetails] = useState(false);
    
  return (
    <>
         {requestDetails && (
        <>
          <div className="bg-black opacity-50 fixed inset-0 z-50"></div>
          <div className="absolute top-80 z-50 inset-0 flex items-center justify-end mr-5">
            <div className="bg-white capitalize flex flex-col p-5 w-120 rounded-2xl">
              <div className="flex items-center justify-between">
                <h1 className="text-black capitalize">request details</h1>
                <p
                  onClick={() => setRequestDetails(false)}
                  className="text-2xl cursor-pointer text-black"
                >
                  ×
                </p>
              </div>
              <div className="border gap-5 border-gray-300 mt-10 rounded-2xl p-5 flex flex-col">
                <div className="flex justify-between items-center">
                  <p className="text-black">Request date</p>
                  <p className="text-black">02-02-2024</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">Request type</p>
                  <p className="text-black">leave request</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">leave duration</p>
                  <p className="text-black">full day</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">leave type</p>
                  <p className="text-indigo-700 bg-indigo-200 px-2 rounded-2xl">
                    partial leave
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">date</p>
                  <p className="text-black">02-02-2024</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">start time</p>
                  <p className="text-black">03:25 PM</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">end time</p>
                  <p className="text-black">03:25 PM</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">total hours</p>
                  <p className="text-black">02-02-2024</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">status</p>
                  <p className="bg-orange-100 text-orange-700 px-3 py-1 rounded-2xl">
                    pending
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">file</p>
                  <div className="flex border px-2 rounded-xl border-grey-400 justify-between">
                    <div className="flex items-center">
                      <img src="/frame.svg" alt="" />
                      <div className="flex  flex-col ml-2">
                        <p className="text-black text-nowrap text-sm">
                          devs presentation.pdf
                        </p>
                        <p className="flex justify-start text-sm">1.5 MB</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-3">
                      <button className="cursor-pointer">
                        <img src="/icons/view.png" alt="" />
                      </button>
                      <button className="cursor-pointer">
                        <img src="/icons/delete-03.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex flex-col gap-3">
                  <p className="text-gray-400">reason</p>
                  <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas, voluptate.
                  </p>
                </div>
              </div>
              <div className="w-full capitalize flex mt-40">
                <button
                  onClick={() => setRequestDetails(false)}
                  className=" text-red-600 bg-red-100 w-full rounded-xl cursor-pointer px-5 py-2 ml-2"
                >
                  Reject
                </button>
                <button
                  onClick={() => setRequestDetails(false)}
                  className=" text-white bg-blue-900 w-full rounded-xl cursor-pointer px-5 py-2 ml-2"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </>
      )}
<div className="grid grid-cols-4 gap-5">
    {
        requests.map((request)=>{
            return(
                <>
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
                </>
            )
 } )
    
    }



   </div> 
       </>
 )
}

export default MyRequests