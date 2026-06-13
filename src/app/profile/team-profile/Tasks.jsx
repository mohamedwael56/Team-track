import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Link from 'next/link'

function Tasks() {
        const percentage = 66;

  return (
<div className="flex-1 flex border rounded-2xl w-80 lg:w-full lg:ml-0 -ml-5 bg-gray-100 p-5 flex-col">
    <div className="flex justify-between">
        <div className="flex flex-col">
        <h1 className='text-black'>tasks</h1>
        <p className='text-gray-400 text-xs lg:text-base'>Attendance history analized during the month.</p>

        </div>
        <div className="text-nowrap">
        <Link href='' className='text-blue-500 text-xs lg:text-base'>view all</Link>
        </div>
    </div>
    <div className="grid gap-10 my-5 grid-cols-2  lg:grid-cols-4">
<div className="flex relative text-sm items-center text-black flex-col">
<CircularProgressbar
  value={percentage}
  styles={buildStyles({
    rotation: 0.25,
    strokeLinecap: 'butt',
    pathTransitionDuration: 0.5,
    pathColor: `rgb(30, 0, 250)`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>
<p className="mt-3">my day 20</p>
<p className='absolute lg:top-7 top-11 font-bold text-lg'>84%</p>
</div>
<div className="flex relative text-sm text-nowrap items-center text-black flex-col">
<CircularProgressbar
  value={percentage}
  styles={buildStyles({
    rotation: 0.25,
    strokeLinecap: 'butt',
    pathTransitionDuration: 0.5,
    pathColor: `rgb(0, 250, 50)`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>
<p className="mt-3">
  completed 20  
</p>
<p className='absolute lg:top-7 top-11 font-bold text-lg'> 48%</p>

</div>
<div className="flex relative text-sm text-nowrap items-center text-black flex-col">
<CircularProgressbar
  value={percentage}
  styles={buildStyles({
    rotation: 0.25,
    strokeLinecap: 'butt',
    pathTransitionDuration: 0.5,
    pathColor: `rgb(255, 0, 0)`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>
<p className="mt-3">
  completed 20  
</p>
<p className='absolute lg:top-7 top-11 font-bold text-lg'>48%</p>
</div>
<div className="flex relative text-sm text-nowrap items-center text-black flex-col">
<CircularProgressbar
  value={percentage}
  styles={buildStyles({
    rotation: 0.25,
    strokeLinecap: 'butt',
    pathTransitionDuration: 0.5,
    pathColor: `rgb(255, 60, 0)`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>
<p className="mt-3">
  completed 20  
</p>
<p className='absolute lg:top-7 top-11 font-bold text-lg'>48%</p>
</div>
    </div>
  </div>  )
}

export default Tasks