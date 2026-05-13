import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { useState } from 'react';
function DatePopUp({show,Closing,setDueDate}) {
        const [tempDate,setTempDate]= useState(null)

    if(!show){
        return null
    }
    
    const confirmDate=()=>{
    setDueDate(tempDate)
    Closing
}
const changeDate=(newValue)=>{
 setTempDate(newValue)
}
  return (
 <>
        <div  className="fixed inset-0 bg-black opacity-50 z-60 " ></div>
           <div className="fixed inset-0  flex justify-center items-center z-70 " >
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateTimePicker
        orientation="landscape"
        value={tempDate}
        onChange={changeDate}
        onAccept={confirmDate}
        onClose={() => Closing()}
      />
    </LocalizationProvider>
   </div>
   </>  )
}

export default DatePopUp