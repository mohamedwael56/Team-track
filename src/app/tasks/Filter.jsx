import React from 'react'
import Autocomplete from '@mui/joy/Autocomplete';

function filter({show,dueDate,setModalType}) {
    if(!show){
        return false
    }
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
        <>
            <div  className='bg-black inset-0 fixed z-60 opacity-50 '></div>
        <div className="sticky inset-0 flex items-center justify-end z-60 ">
<div className="bg-gray-100 px-5 py-3 h-full w-100 rounded-2xl gap-5 flex flex-col ">
<div className="flex gap-2 bg-gray-200 p-2 w-full rounded-xl">
    <button className='w-full text-white bg-blue-900 rounded-xl py-2 cursor-pointer'>filter</button>
    <button onClick={()=>{setModalType('sort')}} className='w-full cursor-pointer text-gray-500'>sort</button>

</div>
  <div>
        <p className='text-black mb-2'>List Name</p>
         <Autocomplete
      placeholder="Combo box"
      options={top100Films}
      sx={{ width: '100%',height:50, borderRadius: '20px' }}
    />


    </div>
    <div>
        <p className='text-black mb-2'>Assigned To</p>
        <Autocomplete
      placeholder="Combo box"
      options={assignment}
      sx={{ width: '100%',height:50, borderRadius: '20px' }}
    />
    </div>
    <form className="">
        <h1 className='text-black mb-3'>Task priority</h1>
      
       <div className='border text-black border-gray-300 p-5 w-full flex flex-col gap-5 rounded-2xl'>
       <div className="flex justify-between">
        <label  htmlFor="highest">
           highest
        </label>
         <input id='highest'  name='priority' className='accent-blue-900 scale-120' type="radio" />
      </div>
       <div className="flex justify-between">
        <label  htmlFor="high">
           high
        </label>
         <input id='high' name='priority' className='accent-blue-900 scale-120' type="radio" />
      </div>
       <div className="flex justify-between">
        <label  htmlFor="medium">
           medium
        </label>
         <input id='medium' name='priority' className='accent-blue-900 scale-120' type="radio" />
      </div>
       <div className="flex justify-between">
        <label  htmlFor="low">
           low
        </label>
         <input id='low' name='priority' className='accent-blue-900 scale-120' type="radio" />
      </div>
       <div className="flex justify-between">
        <label  htmlFor="lowest">
           lowest
        </label>
         <input id='lowest' name='priority' className='accent-blue-900 scale-120' type="radio" />
      </div>
        </div>
    </form>
    <div className="flex flex-col gap-1 text-black capitalize ">
        <h1>due date</h1>
    <button onClick={()=>setModalType('date')} className='border mb-10 border-gray-300 w-full text-black px-3 py-2 rounded-xl flex justify-between items-center'>
    <p className={`cursor-pointer ${dueDate&&'text-lime-600'}`}>{dueDate ? dueDate.format('MMM D, YYYY') : 'set due date'}</p>
    <img src="/icons/calendar-03.png" alt="" />
    </button>

    </div>
    <div className="mt-10 flex gap-2 w-full">
<button className='w-full text-lg bg-gray-200 rounded-2xl py-3 text-blue-800 cursor-pointer'>Clear</button>
<button onClick={()=>setModalType(null)} className='w-full bg-blue-900 text-white rounded-2xl cursor-pointer'>Apply</button>
    </div>
</div>
        </div>
        </>  )
}

export default filter