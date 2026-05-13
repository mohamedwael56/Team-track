'use client'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import React, { useState } from 'react'
import Link from 'next/link'
import Filter from './Filter';
import Lists from './lists';
import Sort from './Sort';
import DatePopUp from '@/components/DatePopUp'
function Page() {
const [modalType,setModalType]=useState(null)
const [search,setSearch]=useState('')
const [dueDate, setDueDate] = useState(null); 


  return (
   
    <div className='flex'>
    <div className='flex-1 ml-69'>
        <div>
            <Header />
        </div>

        <div className='m-5 p-5 rounded-2xl bg-gray-100'>
            <main>
                {<DatePopUp setDueDate={setDueDate}  show={modalType==='date'} Closing={()=>setModalType('filter')} />}
                {<DatePopUp setDueDate={setDueDate}  show={modalType==='sort-date'} Closing={()=>setModalType('null')} />}
   {
    <Filter dueDate={dueDate} setModalType={setModalType} show={modalType==='filter'}  />
   }
                 {
  <Sort show={modalType==='sort'} setModalType={setModalType} />
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
              <button  onClick={()=>setModalType('filter')}  className=' cursor-pointer border-gray-300 border rounded-xl px-5 pl-7 py-3 text-zinc-950 ml-6'>
                Filter
            </button>
          </div>
          <div className='relative'>
            <img src="/icons/arrow-sort.png" alt="" className='absolute left-5 top-4 '  />
            <button onClick={()=>setModalType('sort')} className='cursor-pointer border-gray-300 border rounded-xl px-6 pl-8 py-3 text-zinc-950 ml-2'>
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
        
         <Lists search={search} />
           
           </div>
            </main>
     
    
        </div>
    </div>    

<Sidebar />
    </div>
  )
}

export default Page