import React from 'react'
import Autocomplete from '@mui/joy/Autocomplete';
import { useState } from 'react';
function CreateList({title,setEditList,editList,show,createList,setCreateList}) {
  const [selected, setSelected] = useState([]);
  if(!show){
    return null;
}

      const assignment = [
    { label: 'mohamed wael' },
    { label: 'mohamed ahmed' },
    { label: 'ahmed mohamed' },
  ]
  
  return (
       <>
                                <div className='bg-black opacity-50 inset-0 fixed z-50'></div>
                    <div className="flex items-center justify-center z-50 fixed mr-5 inset-0">
<div className="bg-white capitalize w-80 lg:w-130 flex flex-col p-5 rounded-2xl">
<div className="flex justify-between items-center">
<h1 className='text-black'>{title}</h1>
<p onClick={()=>setCreateList(false)} className='cursor-pointer text-black text-2xl'>×</p>
</div>
<div className="flex text-black flex-col gap-4 my-4">
    <label htmlFor="">list name</label>
    <input  type="text" value={editList} onChange={(e) => setEditList(e.target.value)} className='w-full px-2 rounded-lg py-2 border-gray-300 border' />
    </div>
    <div className="flex text-black flex-col gap-4 my-4  ">
        <h1 className='text-black'>list members</h1>
       < Autocomplete
  multiple
  options={assignment}
  getOptionLabel={(option) => option.label}
  value={selected}
  onChange={(event, newValue) => {
    setSelected(newValue);
  }}
  placeholder="Select users"
/>
    </div>
    <div className="flex flex-col gap-4 my-4">
<h1 className='text-black'>color</h1>
<div className="flex gap-2">
    <div className="rounded-full p-3 lg:p-6 cursor-pointer bg-blue-500"></div>
    <div className="rounded-full p-3 lg:p-6 cursor-pointer bg-black"></div>
    <div className="rounded-full p-3 lg:p-6 cursor-pointer bg-green-800"></div>
    <div className="rounded-full p-3 lg:p-6 cursor-pointer bg-blue-800"></div>
    <div className="rounded-full p-3 lg:p-6 cursor-pointer bg-yellow-500"></div>
    <div className="rounded-full p-3 lg:p-6 cursor-pointer bg-indigo-600"></div>
    <div className="rounded-full p-3 lg:p-6 cursor-pointer bg-stone-600"></div>
    <div className="rounded-full p-3 lg:p-6 cursor-pointer bg-slate-600"></div>
    <div className="rounded-full p-3 lg:p-6 cursor-pointer bg-pink-500"></div>
</div>
</div>
<div className="w-full gap-2 mt-5 flex">
    <button onClick={()=>setCreateList(false)} className='flex-1 border border-blue-800 rounded-2xl cursor-pointer py-4 px-5 text-blue-800'>Cancel</button>
    <button onClick={()=>setCreateList(false)} className='flex-1 bg-blue-900 rounded-2xl cursor-pointer py-4 px-5 text-white'>Save</button>
</div>
</div>
                </div>
            </>
  )
}

export default CreateList