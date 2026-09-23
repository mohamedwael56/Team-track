import React from 'react'
import { Chart as ChartJs,Tooltip,Legend,ArcElement } from 'chart.js'
import MyProfile from './MyProfile';
import Rewards from './Rewards.jsx';
import Tasks from './Tasks';
import Performance from './Performance.jsx';
import Attendance from '../Attendance';
import TaskProductivity from './TaskProductivity';
ChartJs.register(ArcElement,Tooltip,Legend)
function page() {

 
  return (
<div className="flex">
  <div className="flex-1 lg:ml-69">
    <main>
    
    <MyProfile />
   
<div className=" rounded-2xl p-5  my-4">
<div className="flex lg:flex-row flex-col gap-10 justify-between">
 
<Rewards />
<Tasks />
  
  </div>
</div>
<div className="flex lg:flex-row flex-col justify-between items-center">
  
  <Performance />

  <div className="flex flex-col ml-10">

<Attendance />

<TaskProductivity />

  </div>
</div>
    </main>
  </div>
</div>

  )
}

export default page