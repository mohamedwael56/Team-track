"use client";
import Sidebar from "@/components/sidebar";
import React from "react";
import { useState } from "react";
import Header from "@/components/header";
import SwapShifts from "./swap-shifts";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import MyShifts from "./My-shifts";
import ShiftsMarket from "./shifts-market";
ChartJS.register(ArcElement, Tooltip, Legend);

function Page() {
  const [activeTab, setActiveTab] = useState("myShifts");
   const [myAvailability, setMyAvailability] = useState(false);
 

  return (
    <div className="flex">
      <div className="flex-1 lg:ml-69">
        <main>
         
          <div className="flex flex-col w-80 lg:w-full bg-gray-100 p-5 rounded-2xl">
            <div className="flex mb-5 justify-between items-center">
              <h1 className="text-black lg:text-2xl">shifts</h1>
              <div className="flex gap-3">
                <button className="bg-green-200 text-green-600  rounded-2xl px-2 lg:px-5 cursor-pointer">
                  available
                </button>
                <button onClick={()=>setMyAvailability(true)} className=" bg-blue-900 py-2 text-white rounded-2xl lg:px-4 px-2 text-xs lg:text-base cursor-pointer">
                  My Availability
                </button>
              </div>
            </div>
            <hr />
            <div className="flex justify-center flex-row my-4 ">
              <button onClick={()=>setActiveTab('myShifts')} className={`${activeTab === 'myShifts' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-600'} lg:py-3 py-1 text-xs lg:text-base  rounded-2xl lg:px-15 px-2 cursor-pointer`}>
                My shifts
              </button>
              <button onClick={()=>setActiveTab('market')} className={`${activeTab === 'market' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-600'} lg:py-3 py-1 text-xs lg:text-base  rounded-2xl lg:px-15 px-2 cursor-pointer`}>
                Market
              </button>
              <button onClick={()=>setActiveTab('swapShifts')} className={`${activeTab === 'swapShifts' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-600'} lg:py-3 py-1 text-xs lg:text-base  rounded-2xl lg:px-15 px-2 cursor-pointer`}>
                Swaps Request
              </button>
            </div>
            <hr />
           {
            activeTab==="myShifts"&&<MyShifts myAvailability={myAvailability} setMyAvailability={setMyAvailability} />
           }
           {activeTab==="swapShifts"&&<SwapShifts />}

            {activeTab==="market"&&<ShiftsMarket />}

          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
