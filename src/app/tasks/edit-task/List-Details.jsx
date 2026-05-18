import React from 'react'
import Autocomplete from '@mui/joy/Autocomplete';
import { List } from '@mui/material';

function ListDetails({dueDate,setOpen}) {

         const status = [
  { label: 'To-do', color: 'red' },
  { label: 'completed', year: 1991 },
  { label: 'in-progress', year: 1991 },

  ]

            const repeat = [
  {label: 'daily' },
  {label: 'weekly' },
  {label: 'monthly' },

  ]

      const priority = [
  {label: 'highest' },
  {label: 'high' },
  {label: 'medium' },
  {label: 'low' },
  {label: 'lowest' },

  ]

            const assignment = [
  {label: 'mohamed wael' },
  {label: 'mohamed ahmed' },
  {label: 'ahmed mohamed' },

  ]

          const top100Films = [
  { label: 'My design rerquests', year: 1991 },
  { label: 'development team tasks', year: 1991 },
  { label: 'backend bugs team', year: 1991 },
  { label: 'list for developers', year: 19911 },
  { label: 'any list for now', year: 1991 },
  { label: 'draft tasks for dev ops', year: 1991 },
  ]
  return (
<div className='ml-5 border shadow-xl flex flex-col w-200 rounded-2xl p-3'>
    <div>
        <p className='text-black mb-2'>List Name</p>
         <Autocomplete
      placeholder="Combo box"
      options={top100Films}
      sx={{ width: '100%',height:50, borderRadius: '20px' }}
    />


    </div>
    <div>
        <p className='text-black mb-2'>status</p>
         <Autocomplete
      placeholder="Combo box"
      options={status}
      sx={{ width: '100%',height:50, borderRadius: '20px' }}
    />
    </div>
    <div>
        <p className='text-black mb-2'>due date</p>
        <button onClick={()=>setOpen(true)} className=' flex border-gray-300 justify-between border rounded-xl mb-3 px-4 cursor-pointer py-2 text-black bg-gray-100 w-full'>
            <p className='flex items-start'>{dueDate?dueDate.format('MMMM DD,YYYY'):'Select Date'}</p>
            <img src="/icons/calendar.png" alt="calendar icon" />
        </button>
    </div>
    <div>
        <p className='text-black mb-2'>Assigned To</p>
        <Autocomplete
      placeholder="Combo box"
      options={assignment}
      sx={{ width: '100%',height:50, borderRadius: '20px' }}
    />
    </div>
    <div>
        <p className='text-black mb-2'>Priority</p>
       <Autocomplete
      placeholder="Combo box"
      options={priority}
      sx={{ width: '100%',height:50, borderRadius: '20px' }}
    />
    </div>
    <div>
        <p className='text-black mb-2'>Remind Me</p>
        <button onClick={()=>setOpen(true)} className=' flex border-gray-300 justify-between border rounded-xl mb-3 px-4 cursor-pointer py-2 text-black bg-gray-100 w-full'>
            <p className='flex items-start'>{dueDate?dueDate.format('MMMM DD,YYYY,hh:mm A'):'Select Date'}</p>
            <img src="/icons/calendar.png" alt="calendar icon" />
        </button>
    </div>
    <div>
        <p className='text-black mb-2'>Repeat</p>
       <Autocomplete
      placeholder="Combo box"
      options={repeat}
      sx={{ width: '100%',height:50, borderRadius: '20px' }}
    />
    </div>
</div>  )
}

export default ListDetails