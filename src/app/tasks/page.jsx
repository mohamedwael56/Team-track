'use client'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import React, { useState } from 'react'
import Autocomplete from '@mui/joy/Autocomplete';
import Link from 'next/link'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

function Page() {
     const top100Films = [
  { label: 'My design rerquests', year: 1991 },
  { label: 'development team tasks', year: 1991 },
  { label: 'backend bugs team', year: 1991 },
  { label: 'list for developers', year: 19911 },
  { label: 'any list for now', year: 1991 },
  { label: 'draft tasks for dev ops', year: 1991 },
  ]
       const assignment = [
  {label: 'mohamed wael' },
  {label: 'mohamed ahmed' },
  {label: 'ahmed mohamed' },

  ]
    const lists=[
        {
            id:'1',
            title:"To-do",
            tasks:[
{
    id:'10',
name:"Revision 1: Fixing Navbar at Dashboard Page",
date:"20/2/2022",
level:"Low"
},
{
    id:'11',
name:"Revision 1: Fixing Navbar at Dashboard Page",
date:"20/2/2021",
level:"Low"
},

]
        },
        {
             id:'2',
            title:"In-Progress",
            tasks:[
                {
    id:'13',
name:"Revision 1: Fixing Navbar at Dashboard Page",
date:"20/2/2021",
level:"Low"
                },
                {
id:'14',
name:"Revision 1: Fixing Navbar at Dashboard Page",
date:"20/2/2021",
level:"Low"
                },
                {
id:'15',
name:"Revision 1: Fixing Navbar at Dashboard Page",
date:"20/2/2021",
level:"Low"
                },
                {
id:'16',
name:"Revision 1: Fixing Navbar at Dashboard Page",
date:"20/2/2021",
level:"Low"
                },
            ]
        },
        {
             id:'3',
            title:"completed",
             tasks:[
                {
                    id:'17',
name:"Revision 1: Fixing Navbar at Dashboard Page",
date:"20/2/2021",
level:"Low"
                },
                {
                    id:'18',
name:"Revision 1: Fixing Navbar at Dashboard Page",
date:"20/2/2021",
level:"Low"
                },
            ]
        }
    ]
const [search,setSearch]=useState('')
const [filter,setFilter]=useState(false)
const [tempDate,setTempDate]= useState(null)
const [dueDate, setDueDate] = useState(null); 
const [open, setOpen] = useState(false);
const [sort ,setSort]=useState(false)

const confirmDate=()=>{
    setDueDate(tempDate)
    setOpen(false)
}
const changeDate=(newValue)=>{
 setTempDate(newValue)
}
  return (
   
    <div className='flex'>
    <div className='flex-1 ml-69'>
        <div>
            <Header />
        </div>

        <div className='m-5 p-5 rounded-2xl bg-gray-100'>
            <main>
                {open&& (
        <>
        <div  className="fixed inset-0 bg-black opacity-50 z-60 " ></div>
           <div className="fixed inset-0  flex justify-center items-center z-70 " >
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
                 {
        filter?(
            <>
            <div  className='bg-black inset-0 fixed z-60 opacity-50 '></div>
        <div className="sticky inset-0 flex items-center justify-end z-60 ">
<div className="bg-gray-100 px-5 py-3 h-full w-100 rounded-2xl gap-5 flex flex-col ">
<div className="flex gap-2 bg-gray-200 p-2 w-full rounded-xl">
    <button className='w-full text-white bg-blue-900 rounded-xl py-2 cursor-pointer'>filter</button>
    <button onClick={()=>{setFilter(false);setSort(true)}} className='w-full cursor-pointer text-gray-500'>sort</button>

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
    <button onClick={()=>setOpen(true)} className='border mb-10 border-gray-300 w-full text-black px-3 py-2 rounded-xl flex justify-between items-center'>
    <p className={`cursor-pointer ${dueDate&&'text-lime-600'}`}>{dueDate ? dueDate.format('MMM D, YYYY') : 'set due date'}</p>
    <img src="/icons/calendar-03.png" alt="" />
    </button>

    </div>
    <div className="mt-10 flex gap-2 w-full">
<button className='w-full text-lg bg-gray-200 rounded-2xl py-3 text-blue-800 cursor-pointer'>Clear</button>
<button onClick={()=>setFilter(false)} className='w-full bg-blue-900 text-white rounded-2xl cursor-pointer'>Apply</button>
    </div>
</div>
        </div>
        </>
        ):sort?(
            <>
        <div  className='bg-black inset-0 fixed z-60 opacity-50 '></div>
           <div className="sticky h-screen inset-0 flex items-center justify-end z-60 ">
<div className="bg-gray-100 px-5 py-3 h-full w-100 rounded-2xl gap-5 flex flex-col ">
<div className="flex gap-2 bg-gray-200 p-2 w-full rounded-xl">
    <button onClick={()=>{setFilter(true); setSort(false)}} className='w-full cursor-pointer text-gray-500'>filter</button>
    <button  className='w-full text-white bg-blue-900 rounded-xl py-2 cursor-pointer'>sort</button>

</div>
  
    <form className="">
        <h1 className='text-black mb-3'>Sort options</h1>
      
       <div className='border text-black border-gray-300 p-5 w-full flex flex-col gap-5 rounded-2xl'>
       <div className="flex justify-between">
        <label  htmlFor="highest">
           Task name
        </label>
         <input id='highest'  name='priority' className='accent-blue-900 scale-120' type="radio" />
      </div>
       <div className="flex justify-between">
        <label  htmlFor="high">
           Creation date
        </label>
         <input id='high' name='priority' className='accent-blue-900 scale-120' type="radio" />
      </div>
       <div className="flex justify-between">
        <label  htmlFor="medium">
           Due date
        </label>
         <input id='medium' name='priority' className='accent-blue-900 scale-120' type="radio" />
      </div>
        </div>
    </form>
   
    <div className="mt-auto flex gap-2 w-full">
<button className='w-full text-lg bg-gray-200 rounded-2xl py-3 text-blue-800 cursor-pointer'>Clear</button>
<button onClick={()=>{setSort(false);setOpen(true)}} className='w-full bg-blue-900 text-white rounded-2xl cursor-pointer'>Apply</button>
    </div>
</div>
        </div>
       </> ):null
    }
                <div className='flex justify-between mb-5'>
                <h1 className='text-2xl text-black '>My Tasks</h1>
                <Link href="/tasks/add-task" className='bg-blue-900 text-white px-4 py-2 rounded-xl'>+ Add task</Link>
           </div>
           <hr />
           <div className='flex justify-between gap-2 mt-5 mb-5'>
            <div className="w-full relative">
                <button className='cursor-pointer'>
                <img src="/icons/search.png" alt="" className='absolute left-4 top-3 ' />
            </button>
            <input onChange={(a)=>{setSearch(a.target.value)}} value={search} type="text" placeholder="Search tasks..." className="border border-gray-300 text-zinc-950 rounded-xl px-4 py-2 w-full pl-12" />
       </div>
          <div className=' relative '>
            <img src="/icons/filter.png" alt="" className='absolute left-7 top-4 '  />
              <button  onClick={()=>setFilter(true)}  className=' cursor-pointer border-gray-300 border rounded-xl px-5 pl-7 py-3 text-zinc-950 ml-6'>
                Filter
            </button>
          </div>
          <div className='relative'>
            <img src="/icons/arrow-sort.png" alt="" className='absolute left-5 top-4 '  />
            <button onClick={()=>setSort(true)} className='cursor-pointer border-gray-300 border rounded-xl px-6 pl-8 py-3 text-zinc-950 ml-2'>
sort
            </button>
            </div>
            <button className='cursor-pointer bg-gray-200 text-black px-4 py-2 rounded-xl'>
                <img src="/icons/grid.png" alt="" width={40} />
            </button>
            <button className='cursor-pointer bg-gray-200 text-black px-4 py-2 rounded-xl'>
                <img src="/icons/table.png" alt="" width={40} />
            </button>
           </div>

           <div className='grid grid-cols-3 gap-3 '>
            {
                lists.map((list)=>{

const filteredProduct=list.tasks.filter((product)=>{
return(
product.name.includes(search)||
product.date.includes(search)
)
})
return(
    
       <div key={list.id} className='border flex flex-col rounded-2xl shadow-xl p-3'>
            <div className='flex justify-between gap-3'>
                <div className='flex items-center gap-3'>
            <div className={`${list.title==="To-do"&&"bg-red-600"||
                list.title==="In-Progress"&&"bg-orange-600"
                ||list.title==="completed"&&"bg-green-600"} rounded-3xl h-1 w-1 p-1`}></div>
            <h1 className='text-black font-bold'> {list.title}</h1>
            </div>
            <div className='object-cover '>
            <img src="/icons/arrow-sort.png" alt="" />
            </div>
            </div>
            <hr className='text-red-600 my-3' />
          {filteredProduct.map((task)=>{
return(
    
        <div key={task.id} className='border rounded-2xl p-3 flex my-2 flex-col'>
            <h1 className='text-black font-bold'>{task.name}</h1>
            <div className='flex items-center gap-2 mt-2'>
            <p className='text-gray-600 '>Deadline:</p>
          <span className='text-red-600 text-sm'>{task.date}</span>
            </div>
            <div className='flex justify-between mt-2'>
        <p className='text-black flex items-center gap-1'>
           <img src='/icons/arrow-down.png' />
            {task.level}
            </p>
        <p className='bg-violet-200 text-violet-500 py-1 px-3 rounded-2xl'>List name</p>
            </div>
            </div>
    
)
          })}
          {
            list.title==='To-do'&&(
 <div className='border rounded-2xl mt-2 bg-red-100 border-red-600 border-dashed'>
            <div className='border rotate-6 bg-gray-100 rounded-2xl p-3 my-2 flex flex-col'>
            <h1 className='text-black font-bold'>Revision 1: Fixing Navbar at Dashboard Page</h1>
            <div className='flex items-center gap-2 mt-2'>
            <p className='text-gray-600 '>Deadline:</p>
          <span className='text-red-600 text-sm'>20/2/2021</span>
            </div>
            <div className='flex justify-between mt-2'>
        <p className='text-black flex items-center gap-1'>
           <img src='/icons/arrow-down.png' />
            Low
            </p>
        <p className='bg-violet-200 text-violet-500 py-1 px-3 rounded-2xl'>List name</p>
            </div>
            </div>
            </div>
            )
          }
     
            </div>
    
)
                })
            }
         
           
           </div>
            </main>
     
    
        </div>
    </div>    

<Sidebar />
    </div>
  )
}

export default Page