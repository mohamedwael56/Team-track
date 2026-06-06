'use client';
import Header from '@/components/header'
import React from 'react'
import Sidebar from '@/components/sidebar'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
  <div className="flex-1 ml-69">
    <main>
    
    <MyProfile />
   
<div className=" rounded-2xl p-5  my-4">
<div className="flex gap-10 justify-between">
 
<Rewards />
<Tasks />
  
  </div>
</div>
<div className="flex  justify-between items-center">
  
  <Performance />

  <div className="flex flex-col">
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