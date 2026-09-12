import React, { Fragment } from 'react'
import ShiftsRequests from './ShiftsRequests';
import { shifts } from '@/Data/ShiftsData';
function MyShifts() {


  

  const data = {
    labels: ["Working", "Break", "Late"],
    datasets: [
      {
        data: [25, 50, 25],
        backgroundColor: ["#4ade80", "#facc15", "#f87171"],
      },
    ],
  };
    
  return (
    <>
    
      
        
          
     <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
             {
                shifts.map((shift)=>{
                  return(
                    <Fragment key={shift.id}>
                      <ShiftsRequests data={data} />
                    </Fragment>
                  )
                })
              }
            
           
            </div>
 </> )
}

export default MyShifts