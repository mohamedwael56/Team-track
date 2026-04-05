import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

function PopUp({open,setOpen,deleteTask,setDeleteTask,confirmDeleteTask,setConfirmDeleteTask,updateTask,setUpdateTask, discardChange, setDiscardChange, tempDate, changeDate, confirmDate}) {
  return (
<>
    {confirmDeleteTask&&(
        <>
        <div className='fixed inset-0 bg-black z-60 opacity-50 '></div>
        <div className='fixed flex justify-center items-center z-60 p-5 inset-0'>
        <div className="flex flex-col items-center justify-center w-100 bg-gray-100 p-5 rounded-2xl">
        <img src="/icons/icon(5).png" alt="" className='my-5' />
    <h1 className='text-black my-3 font-bold'>Done!</h1>
    <p className='text-gray-500 mx-5 '> Task is deleted successfully  </p>
    <button onClick={()=>setConfirmDeleteTask(false)} className='w-full cursor-pointer border rounded-2xl mt-7 bg-blue-900 py-3'>Got it</button>     
        </div>
        </div>
        
        </>
    )}
     {updateTask&&(
        <>
        <div className='fixed inset-0 bg-black z-60 opacity-50 '></div>
        <div className='fixed flex justify-center items-center z-60 p-5 inset-0'>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-5 rounded-2xl">
       
        <img src="/icons/icon(5).png" alt="" className='my-5' />
    <h1 className='text-black my-3 font-bold'>Task updated successfully ?</h1>
    <p className='text-gray-500 mx-5 '> Congratulations,the changes you made  </p>
    <p className='text-gray-500 '> is saved successfully  </p>
    <button onClick={()=>setUpdateTask(false)} className='w-full cursor-pointer border rounded-2xl mt-7 bg-blue-900 py-3'>Got it</button>

            
        </div>
        </div>
        
        </>
    )}
    {deleteTask&&(
        <>
        <div className='fixed inset-0 bg-black z-60 opacity-50 '></div>
        <div className='fixed flex justify-center items-center z-60 p-5 inset-0'>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-5 rounded-2xl">
       
        <img src="/icons/delete-03.png" alt="" className='bg-red-100 p-5 rounded-full my-5 ' />
    <h1 className='text-black my-3 font-bold'>Delete task ?</h1>
        <p className='text-gray-500 '>Are you sure you want to delete this task ? </p>
        <p className='text-gray-500 '>this action is irreversible</p>
<div className='flex gap-2 w-full mt-5'>
<button onClick={()=>setDeleteTask(false)} className='w-full cursor-pointer border rounded-2xl border-indigo-500 text-indigo-500'>cancel</button>
<button onClick={()=>{setConfirmDeleteTask(true) 
setDeleteTask(false)}} className='w-full bg-red-500 py-3 rounded-xl cursor-pointer'>delete</button>
</div>
            
        </div>
        </div>
        
        </>
    )}
    {discardChange&&(
        <>
        <div className='fixed inset-0 bg-black z-60 opacity-50 '></div>
        <div className='fixed flex justify-center items-center z-60 p-5 inset-0'>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-5 rounded-2xl">
       
        <img src="/icons/icon(2).png" alt="" className='my-5' />
    <h1 className='text-black my-3 font-bold'>Discard Change ?</h1>
        <p className='text-gray-500 mx-5'>Are you sure you want to Discard the changes  </p>
        <p className='text-gray-500 '>you made for this task?</p>
<div className='flex gap-2 w-full mt-5'>
<button onClick={()=>setDiscardChange(false)} className='w-full cursor-pointer border rounded-2xl border-indigo-500 text-indigo-500'>cancel</button>
<button onClick={()=>{setDiscardChange(false) 
setDeleteTask(false)}} className='w-full bg-red-500 py-3 rounded-xl cursor-pointer'>Discard</button>
</div>
            
        </div>
        </div>
        
        </>
    )}
     {open&& (
        <>
        <div  className="fixed inset-0 bg-black opacity-50 z-60 " ></div>
           <div className="fixed inset-0  flex justify-center items-center z-60 " >
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateTimePicker
        orientation="landscape"
        value={tempDate}
        onChange={changeDate}
        onAccept={confirmDate}
        onClose={() => setOpen(false)}
      />
    </LocalizationProvider>
   </div>
   </> )}
  </>
  )
}

export default PopUp