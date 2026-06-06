import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Link from 'next/link';
function Tasks() {
      const percentage = 50;

  return (

  <div className="bg-gray-100 w-80 lg:w-158 text-xs p-5 rounded-2xl">
            <div className="flex justify-between">
            <div>
              <h1 className="text-2xl text-black"> tasks</h1>
              <p className="text-gray-600">follow up with your tasks progress.</p>
            </div>
            <div>
              <Link href="/projects" className="lg:text-xl text-blue-900 hover:text-blue-700 transition duration-300 ">
                view all
                </Link>
            </div>
            </div>
            <div className="grid grid-cols-4 lg:gap-20 gap-10 mt-10">
<div className=" relative lg:w-23 w-10"><CircularProgressbar
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
<div className="absolute inset-0 bottom-4 flex flex-col items-center justify-center">
  <span className="lg:text-lg text-[11px] text-black font-bold">
    84% 
  </span>
</div>
</div>
<div className=" relative lg:w-23  w-10"><CircularProgressbar
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
<div className="absolute inset-0 bottom-4 flex flex-col items-center justify-center">
  <span className="lg:text-lg text-[11px] text-black font-bold">
    48% 
  </span>
</div>
</div>
<div className=" relative lg:w-23  w-10"><CircularProgressbar
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
<div className="absolute inset-0 bottom-4 flex flex-col items-center justify-center">
  <span className="lg:text-lg text-[11px] text-black font-bold">
    48% 
  </span>
</div>
</div>
<div className=" relative lg:w-23  w-10"><CircularProgressbar
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
<div className="absolute inset-0 bottom-4 flex flex-col items-center justify-center">
  <span className="lg:text-lg text-[11px] text-black font-bold">
    56% 
  </span>
</div>
</div>
            </div>
            <div className="grid grid-cols-4 lg:text-sm text-xs lg:gap-20 gap-7 ">
<div className="flex items-center lg:gap-3 gap-1 select-none">
   <span className="text-gray-600  lg:text-sm text-[10px] text-nowrap">my day</span>
   <span className="lg:text-sm text-[10px] text-black">20</span>
  </div>
  <div className="flex items-center lg:gap-3 gap-1 select-none"> 
   <span className="text-gray-600  lg:text-sm text-[10px] ">completed</span>
   <span className="lg:text-sm text-[10px] text-black">20</span>
</div>
<div className="flex items-center lg:gap-3 gap-1 select-none">
   <span className="text-gray-600  lg:text-sm text-[10px] text-nowrap">To Do</span>
   <span className="lg:text-sm text-[10px] text-black">20</span>
</div>
<div className="flex items-center lg:gap-3 gap-1 select-none text-nowrap">
   <span className="text-gray-600 lg:text-sm text-[10px]">in progress</span>
   <span className="lg:text-sm text-[10px] text-black">20</span>
</div>
            </div>
          </div>
)
}

export default Tasks