'use client';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function Attendance() {
      const percentage = 50;

  return (
    <div>     <div className="bg-gray-100 mr-5 rounded-2xl">
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
                 <button className="bg-blue-900 text-white cursor-pointer py-2 px-5 rounded-xl mt-5 w-full">
            clock in
          </button>

          </div></div>
  )
}

export default Attendance