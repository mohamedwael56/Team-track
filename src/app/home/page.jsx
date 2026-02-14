'use client';
import React from "react";
import Link from "next/link";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';


function Page() {
  const percentage = 50;

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 ml-69">
        <div>
      <Header />
      </div>
      <div>
        <main>
          <div className="flex justify-between mb-9">
            <div className="ml-2">
<h1 className="text-2xl text-black mb-1">
  Hello Mohamed 👋🏻
</h1>
<p className="text-gray-600"> Good morning</p>
            </div>
            <div className="bg-gray-100 mr-8 flex items-center gap-5 py-2 px-5 rounded-xl">
              <div>
<img src="/icons/clock-icon.png" alt=""  />
</div>
<div>
<p className="text-gray-600 text-sm select-none">Current date & time</p>
<p className="text-black text-sm select-none">26 September 2023, 12:10 PM </p>
</div>
            </div>
          </div>
         <div   className="flex flex-col gap-5 m-5">
          <div className="flex justify-between items-center">
            <div className="bg-gray-100 mr-5 rounded-2xl">
            <div className="flex justify-between ">
        <div className="p-5  flex-col">
          <h1 className="text-2xl text-black">attendance</h1>
          <p className="text-gray-600">Get to work, but don’t forget to have a break.</p>
          <div className="flex items-center gap-5 mt-5">
            <img src="/icons/fingerprint.png" alt="attendance icon" />
            <p className="flex break-words text-gray-600">You’ve not marked yourself as present today.</p>
          </div>
          <div className="flex items-center gap-5 mt-5">
            <div className="flex items-center gap-2">
            <img src="/icons/green-sign.png" alt="" />
            <p className="text-gray-600">clock in --</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/icons/red-sign.png" alt="" />
              <p className="text-gray-600">clock out --</p>
            </div>
          </div>
          </div>
          <div className="flex relative w-40 justify-center bg-gray-100 rounded-2xl p-5">
            <CircularProgressbar
  value={percentage}
  styles={buildStyles({
    strokeLinecap: 'round',
    textSize: '12px',
    pathTransitionDuration: 0.5,
    pathColor: `rgba(34, 139, 34, 1)`,
    trailColor: '#d6d6d6',
  })}
/>;
  <div className="absolute inset-0 flex flex-col items-center justify-center">
    <span className="text-lg text-black font-bold">00.00</span>
    <span className="text-xs text-black">worked today</span>
  </div>


          </div>
             
          </div>
                 <button className="bg-blue-900 text-white py-2 px-5 rounded-xl mt-5 w-full">
            clock in
          </button>

          </div>
          <div className="bg-gray-100 p-5 rounded-2xl">
            <div className="flex justify-between">
            <div>
              <h1 className="text-2xl text-black"> tasks</h1>
              <p className="text-gray-600">follow up with your tasks progress.</p>
            </div>
            <div>
              <Link href="/projects" className="text-xl text-blue-900 hover:text-blue-700 transition duration-300 ">
                view all
                </Link>
            </div>
            </div>
            <div className="grid grid-cols-4 gap-25 mt-10">
<div className=" relative w-23"><CircularProgressbar
  value='84'
  styles={buildStyles({
    rotation: 1,
    strokeLinecap: 'round',
    pathTransitionDuration: 0.5,
    pathColor: `rgba(9, 26, 129, 0.9)`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>;
<div className="absolute inset-0 bottom-5 flex flex-col items-center justify-center">
  <span className="text-lg text-black font-bold">
    84% 
  </span>
</div>
</div>
<div className=" relative w-23"><CircularProgressbar
  value='48'
  styles={buildStyles({
    rotation: 1,
    strokeLinecap: 'round',
    pathTransitionDuration: 0.5,
    pathColor: `rgba(34, 139, 34, 1)`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>;
<div className="absolute inset-0 bottom-5 flex flex-col items-center justify-center">
  <span className="text-lg text-black font-bold">
    48% 
  </span>
</div>
</div>
<div className=" relative w-23"><CircularProgressbar
  value='48'
  styles={buildStyles({
    rotation: 1,
    strokeLinecap: 'round',
    pathTransitionDuration: 0.5,
    pathColor: `rgba(203, 0, 0, 0.9)`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>;
<div className="absolute inset-0 bottom-5 flex flex-col items-center justify-center">
  <span className="text-lg text-black font-bold">
    48% 
  </span>
</div>
</div>
<div className=" relative w-23"><CircularProgressbar
  value='56'
  styles={buildStyles({
    rotation: 1,
    strokeLinecap: 'round',
    pathTransitionDuration: 0.5,
    pathColor: `rgba(255, 116, 0, 0.9)`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>;
<div className="absolute inset-0 bottom-5 flex flex-col items-center justify-center">
  <span className="text-lg text-black font-bold">
    56% 
  </span>
</div>
</div>
            </div>
            <div className="grid grid-cols-4 gap-20 ">
<div className="flex items-center gap-3 select-none">
   <span className="text-gray-600">my day</span>
   <span className="text-sm text-black">20</span>
  </div>
  <div className="flex items-center gap-3 select-none"> 
   <span className="text-gray-600">completed</span>
   <span className="text-sm text-black">20</span>
</div>
<div className="flex items-center gap-3 select-none">
   <span className="text-gray-600">To Do</span>
   <span className="text-sm text-black">20</span>
</div>
<div className="flex items-center gap-3 select-none text-nowrap">
   <span className="text-gray-600">in progress</span>
   <span className=" text-black">20</span>
</div>
            </div>
          </div>
          </div>
          
         </div>
        </main>
      </div>
      </div>
    </div>
  );
}

export default Page;
