import React, { Fragment } from 'react'
import ShiftsRequests from './ShiftsRequests';
function MyShifts() {
const shifts=[
  {
    id:1,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'normal',
  },
  {
    id:2,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'pending',
  },
  {
    id:3,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'covered',
  },{
    id:4,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'normal',

  },
  {
    id:5,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'pending',
  },
  {
    id:6,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'covered',
  },

      {
    id:7,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'normal',

      },{
    id:8,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'pending',
  },
  {
    id:9,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',

    break:'09:00 - 09:15 am',
    coverageStatus:'covered',

  },{
    id:10,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',

    coverageStatus:'normal',

  },{
    id:11,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'pending',
  },
    {
    id:12,
    date:'15 Nov',
    clockIn:'09:00 Am',
    clockOut:'05:00 PM',  
    site:'Capital Restaurant',
    role:'waiter',
    break:'09:00 - 09:15 am',
    coverageStatus:'covered',
  },
]

  

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