import Sidebar from '@/components/sidebar'
import React from 'react'
import AttendanceHeader from './AttendanceHeader';
import AttendanceStates from './AttendanceStates';
import AttendanceInterActive from './AttendanceInterActive';
function Page() {
  
   
  

  return (
    <div className='flex'>
        <div className="flex-1 lg:ml-69">
        <main>

    
            <div className='flex flex-col lg:w-full w-80 bg-white p-5 rounded-2xl'>
                       <AttendanceHeader />

      <AttendanceStates />
            <hr />
          
          <AttendanceInterActive />
            </div>
        </main>
        </div>
        <Sidebar />
    </div>
  )
}

export default Page