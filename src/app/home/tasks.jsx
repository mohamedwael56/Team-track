import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Link from 'next/link';
function Tasks() {
      const percentage = 50;

  return (

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
)
}

export default Tasks