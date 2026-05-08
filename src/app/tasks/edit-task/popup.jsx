import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import SuccessMessage from '@/components/SuccessMessage';
import DeleteMessage from '@/components/DeleteMessage';
import ConfirmMessage from '@/components/ConfirmMessage';
import DiscardChange from '@/components/discardChange';
function PopUp({open,setOpen,modalType,setModalType, tempDate, changeDate, confirmDate}) {
  return (
<>
   <SuccessMessage text={{ title: 'Task updated successfully ?', description: 'Congratulations,the changes you made is saved successfully' }} show={modalType==='success'} onClose={() => setModalType(null)} />
        <DeleteMessage text={{ title: 'Delete Task ?', description: 'Are you sure you want to delete this task?' }} show={modalType==='delete'} onClose={() => setModalType(null)} onConfirm={() => setModalType('confirmDelete')}/>
         <ConfirmMessage show={modalType==='confirmDelete'} onClose={() => setModalType(null)} />
  <DiscardChange show={modalType==='discardChange'} onClose={() => setModalType(null)} onConfirm={() => setModalType(null)} />
    
    
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