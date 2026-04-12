'use client'
import Autocomplete from '@mui/joy/Autocomplete';
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Invitations from './invitations';
function Page() {
    const router=useRouter();
    const assignment = [
  { label: 'mohamed wael' },
  { label: 'mohamed ahmed' },
  { label: 'ahmed mohamed' },
]
const [showInvitations, setShowInvitations] = useState(false)
const [listOption, setListOption] = useState(false);
    const [sortOption, setSortOption] = useState(false);
    const [createList, setCreateList] = useState(false);
    const [selected, setSelected] = useState([]);
        const [confirmDeleteTask,setConfirmDeleteTask]=useState(false)
    const [deleteTask,setDeleteTask]=useState(false)
    return (
    <div className='flex'>
    <div className="flex-1 ml-69">
        <Header />
        <main>
    
    {
        createList&&(
            <>
                                <div className='bg-black opacity-50 inset-0 fixed z-50'></div>
                    <div className="flex items-center justify-center z-50 fixed mr-5 inset-0">
<div className="bg-white capitalize w-130 flex flex-col p-5 rounded-2xl">
<div className="flex justify-between items-center">
<h1 className='text-black'>create a new list</h1>
<p onClick={()=>setCreateList(false)} className='cursor-pointer text-black text-2xl'>×</p>
</div>
<div className="flex text-black flex-col gap-4 my-4">
    <label htmlFor="">list name</label>
    <input type="text" className='w-full px-2 rounded-lg py-2 border-gray-300 border' />
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
    <div className="rounded-full p-6 cursor-pointer bg-blue-500"></div>
    <div className="rounded-full p-6 cursor-pointer bg-black"></div>
    <div className="rounded-full p-6 cursor-pointer bg-green-800"></div>
    <div className="rounded-full p-6 cursor-pointer bg-blue-800"></div>
    <div className="rounded-full p-6 cursor-pointer bg-yellow-500"></div>
    <div className="rounded-full p-6 cursor-pointer bg-indigo-600"></div>
    <div className="rounded-full p-6 cursor-pointer bg-stone-600"></div>
    <div className="rounded-full p-6 cursor-pointer bg-slate-600"></div>
    <div className="rounded-full p-6 cursor-pointer bg-pink-500"></div>
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
    }        {
                sortOption&&(
                    <>
                    <div className='bg-black opacity-50 inset-0 fixed z-50'></div>
                    <div className="flex items-center justify-end z-50 fixed mr-5 inset-0">
                        <div className="bg-white w-120 rounded-2xl p-5">
                    <div className="flex items-center justify-between">
                        <h1 className='text-black'>Sort By</h1>
                        <p className='text-2xl text-black cursor-pointer' onClick={()=>setSortOption(false)}>×</p>
                    </div>
                    <div className="flex text-black flex-col gap-4 my-4">
                        <h1 className='text-black'>sort options</h1>
                     <div className="border gap-2 flex flex-col border-gray-300 rounded-2xl p-3">
                        <div className="flex justify-between">
                            <label htmlFor="sort1">number of tasks</label>
                            <input type="radio" name="sort" id="sort1" />
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="sort2">date created</label>
                            <input type="radio" name="sort" id="sort2" />
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="sort3">due date</label>
                            <input type="radio" name="sort" id="sort3" />
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="sort4">my day</label>
                            <input type="radio" name="sort" id="sort4" />
                        </div>
                     </div>
                     <h1 className='capitalize text-black my-2'>sort type</h1>
                     <div className="border flex flex-col border-gray-300 p-5 rounded-2xl">
                       <div className="flex justify-between items-center">
                        <label htmlFor="sortType1">Ascending</label>
                        <input type="radio" name='sortType' id="sortType1" />

                       </div>
                       <div className="flex justify-between items-center">
                        <label htmlFor="sortType2">Descending</label>
                        <input type="radio" name='sortType' id="sortType2" />

                       </div>
                     </div>
                     <div className="flex gap-2 w-full mt-30">
                <button onClick={()=>setSortOption(false)} className='flex-1 bg-gray-200 rounded-2xl cursor-pointer py-2 px-5 text-black'>Cancel</button>
                <button onClick={()=>setSortOption(false)} className='flex-1 bg-blue-900 rounded-2xl cursor-pointer py-2 px-5 text-white'>Apply</button>

                     </div>
                        </div>

                        </div>
                    </div>
                    </>
                )
            }
            <div className="bg-gray-100 flex flex-col p-5 rounded-2xl">
       <div className="flex justify-between mb-5 items-center">
        <h1 className='text-black font-bold text-xl'>lists</h1>
<button onClick={()=>setCreateList(true)} className='bg-blue-900 cursor-pointer text-white px-6 py-2 rounded-2xl'>+ Add List</button>
       </div>
       <hr />
       <div className="flex gap-5 my-5 justify-between items-center">
    <div className="  w-full  relative">
                <button className='cursor-pointer'>
                <img src="/icons/search.png" alt="" className='absolute left-4 top-3 ' />
            </button>
            <input type="text" placeholder="Search..." className="border border-gray-300 text-zinc-950 rounded-xl px-4 py-2 w-full pl-12" />
       </div>
       <button onClick={()=>setSortOption(true)} className='cursor-pointer relative'>
            <img src="/icons/arrow-sort.png" alt="" className='absolute left-5 top-4 '  />
            <div className=' border-gray-300 border rounded-xl px-6 pl-8 py-3 text-zinc-950 ml-2'>
           Sort
            </div>
            </button>
       </div>
       <div className="flex flex-col my-5 shadow-md p-5 rounded-2xl border gap-5">
<div className="flex items-center justify-between">
    <div className="text-black">
        list invitations
    </div>
    <div className="text-blue-500 flex flex-row gap-4">
        <button onClick={()=>setShowInvitations(!showInvitations)} className='cursor-pointer'>{showInvitations?'Hide':'Show'} invitations</button>
       <button onClick={()=>router.push('/lists/lists-invitations')} className='cursor-pointer'>View All</button>
    </div>
</div>


{
showInvitations?(
    <Invitations />
):null
}


       </div>
       <div className="grid grid-cols-4 gap-3">
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex relative bg-blue-900 text-white px-5 py-2 rounded-xl">
                <h1 onClick={()=>router.push('/lists/members-list')} className='flex-1 cursor-pointer text-center'>My List</h1>
                <button onClick={() => setListOption(!listOption)} className='flex  justify-end cursor-pointer text-end'>⋮</button>
               {deleteTask&&(
        <>
        <div className='fixed inset-0 bg-black z-60 opacity-50 '></div>
        <div className='fixed flex justify-center items-center z-60 p-5 inset-0'>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-5 rounded-2xl">
       
        <img src="/icons/delete-03.png" alt="" className='bg-red-100 p-5 rounded-full my-5 ' />
    <h1 className='text-black my-3 font-bold'>Delete List ?</h1>
        <p className='text-gray-500 '>Are you sure you want to delete this List ? </p>
        <p className='text-gray-500 '>this action is irreversible</p>
<div className='flex gap-2 w-full mt-5'>
<button onClick={()=>setDeleteTask(false)} className='w-full cursor-pointer border rounded-2xl border-indigo-500 text-indigo-500'>cancel</button>
<button onClick={()=>{setConfirmDeleteTask(true) 
setDeleteTask(false)}} className='w-full bg-red-500 py-3 rounded-xl text-white cursor-pointer'>delete</button>
</div>
            
        </div>
        </div>
        
        </>
    )}
              
                {
                    listOption&&(
                        <>
                       
        <div className="bg-white absolute border flex flex-col gap-2 px-3 mt-7 right-3 w-25 text-black border-gray-300 py-2 z-50 shadow-xl rounded-xl">
       <button onClick={()=>{setListOption(false)
        setCreateList(true)}} className='cursor-pointer flex items-center gap-2 '>
        <img className='w-4' src="/icons/edit-02.png" alt="" />
        Edit</button>
       <button onClick={()=>setDeleteTask(true)} className='cursor-pointer flex items-center gap-2'>
        <img className='w-4' src="/icons/delete-03.png" alt="" />
        Delete</button>
        {confirmDeleteTask&&(
        <>
        <div className='fixed inset-0 bg-black z-60 opacity-50 '></div>
        <div className='fixed flex justify-center items-center z-60 p-5 inset-0'>
        <div className="flex flex-col items-center justify-center w-100 bg-gray-100 p-5 rounded-2xl">
        <img src="/icons/icon(5).png" alt="" className='my-5' />
    <h1 className='text-black my-3 font-bold'>Done!</h1>
    <p className='text-gray-500 mx-5 '> List is deleted successfully  </p>
    <button onClick={()=>setConfirmDeleteTask(false)} className='w-full text-white cursor-pointer border rounded-2xl mt-7 bg-blue-900 py-3'>Got it</button>     
        </div>
        </div>
        
        </>
    
                     
                    )
                }
                </div>
                </>
                )
                }
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-blue-500 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-green-900 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-yellow-500 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-blue-900 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-purple-500 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-pink-600 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-gray-600 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-blue-900 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-blue-500 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-emerald-900 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
        <div className="flex border rounded-2xl flex-col ">
            <div className="flex bg-orange-600 text-white px-5 py-2 rounded-xl">
                <h1 className='flex-1 text-center'>Team List</h1>
                <button className='flex justify-end cursor-pointer text-end'>⋮</button>
            </div>
<div className="text-center text-black my-2">20 overdue</div>
<hr />
<div className="text-center text-black my-2">03 My Day</div>
<hr />
<div className="text-center text-black my-2">03 To-do</div>
<hr />
<div className="text-center text-black my-2">03 in progress</div>
<hr />
        </div>
       </div>
            </div>
        </main>
        </div>
        <Sidebar />    
    </div>
  )
}

export default Page