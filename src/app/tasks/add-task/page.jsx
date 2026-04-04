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
            title:'Revision 1: Fixing Navbar at Dashboard Page',
            name:'ahmed mohamed',
            img:"/ellipse.png"
},
{
    id:'2',
            title:'Revision 1: Fixing Navbar at Dashboard Page',
            name:'ahmed mohamed',
            img:"/ellipse.png"
},
{
    id:'3',
            title:'Revision 1: Fixing Navbar at Dashboard Page',
            name:'ahmed mohamed',
            img:"/ellipse.png"
},
{
    id:'4',
            title:'Revision 1: Fixing Navbar at Dashboard Page',
            name:'ahmed mohamed',
            img:"/ellipse.png"
},
{
    id:'5',
            title:'Revision 1: Fixing Navbar at Dashboard Page',
            name:'ahmed mohamed',
            img:"/ellipse.png"
},
{
    id:'6',
            title:'Revision 1: Fixing Navbar at Dashboard Page',
            name:'ahmed mohamed',
            img:"/ellipse.png"
},
{
    id:'7',
            title:'Revision 1: Fixing Navbar at Dashboard Page',
            name:'ahmed mohamed',
            img:"/ellipse.png"
},
{
    id:'8',
            title:'Revision 1: Fixing Navbar at Dashboard Page',
            name:'ahmed mohamed',
            img:"/ellipse.png"
},
{
      id:'9',
            title:'Revision 1: Fixing Navbar at Dashboard Page',
            name:'ahmed mohamed',
            img:"/ellipse.png"
},

    ]

    const options = [
  { id:'1', label: 'My design requests', year: 1994 },
  { id:'2', label: 'development team tasks', year: 1994 },
  { id:'3', label: 'backend bugs team', year: 1994 },
  { id:'4', label: 'list for developers', year: 1994 },
  { id:'5', label: 'any list for now', year: 1994 },
  { id:'6', label: 'draft tasks for dev ops', year: 1994 },
  { id:'7', label: 'list for developers', year: 1994 },]
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
      placeholder="Combo box"
      options={options}
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