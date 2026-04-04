'use client';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useState } from 'react';
function Attendance() {
      const percentage = 50;
      const [working,setWorking]=useState(false);
      const [breakTime,setBreakTime]=useState(false);
 const clockingOut =()=>{
  if(breakTime){
    return setBreakTime(false);
  }else{
    return setWorking(false);
  }
 }
 
      return (
  
    <div>   
                {
      working?(
        <>
            <div className="bg-gray-100 mr-5 rounded-2xl">
       
            <div className="flex justify-between ">
          
        <div className="p-5  flex-col">
          <h1 className="text-2xl text-black">attendance</h1>
          <p className="text-gray-600">Get to work, but don’t forget to have a break.</p>
          <div className="flex items-center gap-5 mt-5">
            <img src={breakTime ? "/attendance/alarm.png" : "/attendance/working-time.png"} alt="attendance icon" />
            <p className="flex text-gray-600">{breakTime ? 'you are on a break, don\'t forget to clock back in !' : 'welcome to work, hope you have a good day !'}</p>
          </div>
          <div className="flex items-center gap-5 mt-5">
            <div className="flex items-center gap-2">
            <img src="/icons/green-sign.png" alt="" />
            <p className="text-gray-600">clock in </p>
            <span className='text-lime-600'>9:00 Am</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/icons/red-sign.png" alt="" />
              <p className="text-gray-600">clock out --</p>
            </div>
          </div>
          </div>
          <div className="flex relative w-40 justify-center bg-gray-100 rounded-2xl p-5">
            <CircularProgressbar
  value='60'
  styles={buildStyles({
    strokeLinecap: 'round',
    textSize: '12px',
    pathTransitionDuration: 0.5,
    pathColor: `rgba(34, 139, 34, 1)`,
    trailColor: '#d6d6d6',
  })}
/>;
  <div className="absolute inset-0 flex flex-col items-center justify-center">
    <span className="text-lg text-zinc-900 font-bold">06.40</span>
    <span className="text-xs text-gray-500">worked today</span>
  </div>


          </div>
             
          </div>
          <div className="flex w-full my-3">
<button onClick={()=>setBreakTime(true)} className='w-full bg-gray-200 rounded-2xl py-4 font-bold cursor-pointer text-indigo-500 m-5'>{breakTime ? '56:00' : 'Take a Break'}</button>
<button onClick={clockingOut} className='w-full border border-red-500 font-bold rounded-2xl py-4 cursor-pointer text-red-500 my-5 mr-5'>{breakTime ? 'End break' : 'clock out'}</button>

          </div>
          </div>
        </>
      )
:(

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
  value='0'
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
                 <button onClick={()=>setWorking(true)} className="bg-blue-900 text-white cursor-pointer py-4 px-5 rounded-xl mt-5 w-full">
            clock in
          </button>

          </div>
)

    }
   
          
          </div>
  )
}

export default Attendance