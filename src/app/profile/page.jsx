import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MyProfile from './MyProfile';
import MyTeam from './MyTeam';
import Rewards from './Rewards.jsx';
import Performance from './Performance.jsx';
import Attendance from './Attendance';
import Productivity from './Productivity';
function Page() {
 
  return (
<div className="flex">
  <div className="flex-1 lg:ml-69">
  
    <main>
    
    <MyProfile />
 <MyTeam />
<Rewards />
<div className="flex lg:flex-row flex-col  justify-between items-center">
 <Performance />
  
  <div className="flex flex-col ml-10">
<Attendance />
<Productivity />

  </div>
</div>
    </main>
  </div>
</div>

  )
}

export default Page