'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import Autocomplete from '@mui/joy/Autocomplete';
import TaskCard from './TaskCard';
import {lists} from '../../../Data/listsData';
import {ClientProfileData} from '@/lib/ClientProfileData';
function Page() {
    
const [profile,setProfile]=useState(null)
  React.useEffect(()=>{
    const fetchProfile=async()=>{
        const data=await ClientProfileData();
        setProfile(data)
    }
    fetchProfile()
    },[])
    console.log(profile)

    return (
    <div className='flex '>
      <div className='flex-1 lg:ml-69 p-5 gap-5 '>
<main>
    {profile?.role==="employee"?
   
    <div className='flex flex-col w-80 lg:w-full bg-gray-100 p-5 rounded-2xl'>
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

<div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
{
    lists.map((list)=>{
return(

   <TaskCard key={list.id} list={list}  />
    
)
    })
}


</div>

    </div>
   : <div className='flex items-center justify-center h-screen'>
        <p className='text-lg  text-black'>You are not authorized to add tasks.</p>
      </div> }
</main>
      </div>
    </div>
  )
}

export default Page