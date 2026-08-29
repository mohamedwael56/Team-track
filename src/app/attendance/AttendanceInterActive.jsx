'use client';
import React from 'react'
import AttendanceOverview from './attendanceOverview'
import AttendanceData from './AttendanceData'
import {useState} from 'react'
function AttendanceInterActive() {
     
    const [open,setOpen]=useState(false)

  return (
    <>
    <AttendanceOverview open={open} setOpen={setOpen} />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
 
 
 <AttendanceData setOpen={setOpen} />

            </div>
 </>
  )
}

export default AttendanceInterActive