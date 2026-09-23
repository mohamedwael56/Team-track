import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import EditAvailability from './EditAvailability';
import MyAvailability from './MyAvailability';
function Availability({myAvailability,setMyAvailability}) {

  const [editAvailability, setEditAvailability] = useState(false);
 const [submittedAvailability, setSubmittedAvailability] = useState(false);

     

  return (
<>
 
     <EditAvailability editAvailability={editAvailability} setEditAvailability={setEditAvailability} setMyAvailability={setMyAvailability} setSubmittedAvailability={setSubmittedAvailability} />
       
        <MyAvailability myAvailability={myAvailability} setMyAvailability={setMyAvailability} setEditAvailability={setEditAvailability} />
          {
            submittedAvailability&&(
              <>
               <div className="fixed inset-0 bg-black z-50 opacity-50"></div>
            <div className="fixed flex inset-0 items-center justify-center z-50">
              <div className="bg-white flex flex-col items-center rounded-2xl p-5 ">
             <Image width={100} height={120} src="/icons/icon.png" alt="" />
             <h1 className="text-black my-2 text-2xl w-[300px] text-center"> successful request!</h1>
              <p className="my-2 w-[400px] text-gray-400 text-center"> availability request submitted successfully.</p>
                <div className="w-full gap-3 mt-2 flex">
                  <button onClick={()=>{setSubmittedAvailability(false)
                  }} className="bg-blue-900 cursor-pointer text-white flex-1 py-2 rounded-2xl ">Got it</button>
                </div>
                </div>
              </div>
              </>
            )
          }
</>
)
}

export default Availability