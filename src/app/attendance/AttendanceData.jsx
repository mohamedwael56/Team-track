import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

function AttendanceData({setOpen}) {
  const data = {
    labels: ["Working", "Break", "Late"],
    datasets: [
      {
        data: [25, 50, 25],
        backgroundColor: ["#4ade80", "#facc15", "#f87171"],
      },
    ],
  };
  const attendanceData = [
    {
      id: "1",
      date: "13Mar",
      status: "completed",
      clockIn: "09:00",
      clockOut: "05:00",
      workingHours: "07:55",
      breakHours: "07:55",
      lateHours: "07:55",
    },
    {
      id: "2",
      date: "13Mar",
      status: "completed",
      clockIn: "09:00",
      clockOut: "05:00",
      workingHours: "07:55",
      breakHours: "07:55",
      lateHours: "07:55",
    },
    {
      id: "3",
      date: "13Mar",
      status: "completed",
      clockIn: "09:00",
      clockOut: "05:00",
      workingHours: "07:55",
      breakHours: "07:55",
      lateHours: "07:55",
    },
    {
      id: "4",
      date: "13Mar ",
      status: "completed",
      clockIn: "09:00",
      clockOut: "05:00",
      workingHours: "07:55",
      breakHours: "07:55",
      lateHours: "07:55",
    },
    {
      id: "5",
      date: "13Mar",
      status: "completed",
      clockIn: "09:00",
      clockOut: "05:00",
      workingHours: "07:55",
      breakHours: "07:55",
      lateHours: "07:55",
    },
    {
      id: "6",
      date: "13Mar",
      status: "completed",
      clockIn: "09:00",
      clockOut: "05:00",
      workingHours: "07:55",
      breakHours: "07:55",
      lateHours: "07:55",
    },
    {
      id: "7",
      date: "13Mar",
      status: "InCompleted",
      clockIn: "09:00",
      clockOut: "-- --",
      workingHours: "07:55",
      breakHours: "07:55",
      lateHours: "07:55",
    },
  ];
  return (
    <>
      {attendanceData.map((attendance) => {
        return (
          <>
            <button
              key={attendance.id}
              onClick={() => setOpen(true)}
              className="flex flex-col rounded-2xl  mt-4 shadow-lg border items-center"
            >
              <div className="flex mb-2 gap-5 p-2  text-black justify-between items-center">
                <div className=" relative w-20 h-20">
                  <div>
                    <Doughnut
                      data={data}
                      options={{
                        plugins: { legend: { display: false } },
                        cutout: "70%",
                      }}
                    />
                  </div>
                  <div className="flex absolute top-7 right-5">
                    <span className="capitalize">{attendance.date}</span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className={`${attendance.status === 'completed' ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'} px-3 rounded-2xl`}>
                    {" "}
                    {attendance.status}
                  </p>
                  <div className="flex items-center gap-3">
                    <img src="/icons/green-sign.png" alt="" />
                    <span>clock in</span>
                    <span className="text-green-600">{attendance.clockIn}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/icons/red-sign.png" alt="" />
                    <span>clock out</span>
                    <span className="text-red-600">{attendance.clockOut}</span>
                  </div>
                </div>
              </div>
              <hr className="w-full" />

              <div className="flex w-full flex-col text-black mt-2">
                <div className=" flex p-2 justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <img src="/icons/green-sign.png" alt="" />
                    <p>working hrs</p>
                  </div>
                  <div>
                    <p>{attendance.workingHours}</p>
                  </div>
                </div>
                <div className=" flex p-2 justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <img src="/icons/purple-sign.png" alt="" />
                    <p>break hrs</p>
                  </div>
                  <div>
                    <p>{attendance.breakHours}</p>
                  </div>
                </div>
                <div className=" flex p-2 justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <img src="/icons/orange-sign.png" alt="" />
                    <p>late hrs</p>
                  </div>
                  <div>
                    <p>{attendance.lateHours}</p>
                  </div>
                </div>
              </div>
            </button>
          </>
        );
      })}
    </>
  );
}

export default AttendanceData;
