'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import Sidebar from '@/components/sidebar'
import Header from '@/components/header'
import Autocomplete from '@mui/joy/Autocomplete';
import TaskCard from './TaskCard';

function Page() {
    
     const lists=[
{
id:'1',
            label:'Revision 1: My design requests',
            name:'ahmed mohamed',
            img:"/ellipse.png"
},
{
    id:'2',
            label:'Revision 2: development team tasks',
            name:'ahmed mohamed',
            img:"/ellipse.png"
},
{
    id:'3',
            label:'Revision 3: backend bugs team',
            name:'ahmed mohamed',
            img:"/ellipse.png"
},
{
    id:'4',
            label:'Revision 4: list for developers',
            name:'ahmed mohamed',
            img:"/ellipse.png"
},
{
    id:'5',
            label:'Revision 5: any list for now',
            name:'ahmed mohamed',
            img:"/ellipse.png"
},
{
    id:'6',
            label:'Revision 6: draft tasks for dev ops',
            name:'ahmed mohamed',
            img:"/ellipse.png"
},
{
    id:'7',
            label:'Revision 7: list for developers',
            name:'ahmed mohamed',
            img:"/ellipse.png"
},
{
    id:'8',
            label:'Revision 8: Fixing Navbar at Dashboard Page',
            name:'ahmed mohamed',
            img:"/ellipse.png"
},
{
      id:'9',
            label:'Revision 9: Fixing Navbar at Dashboard Page',
            name:'ahmed mohamed',
            img:"/ellipse.png"
},

    ]

    return (
    <div className='flex '>
      <div className='flex-1 ml-69 p-5 gap-5 '>
<Header />
<main>
   
    <div className='flex flex-col bg-gray-100 p-5 rounded-2xl'>
  <div className='flex items-center gap-3 mb-5'>
        <Link href="/tasks" className='text-md text-blue-700'>← Back</Link>
        <h1 className='text-xl text-black'>Add  Task</h1>
</div>
<hr />
<form onClick={()=>{console.log('a7a')}} className='flex mb-5'>
  <Autocomplete
      placeholder="Select task"
      options={lists}
      getOptionLabel={(option) => option.label}
      sx={{ width: '100%',height:50,text:700 }}
    />

    

</form>

<div className='grid grid-cols-3 gap-3'>
{
    lists.map((list)=>{
return(

   <TaskCard key={list.id} list={list}  />
    
)
    })
}


</div>

    </div>
</main>
      </div>
      <Sidebar />
    </div>
  )
}

export default Page