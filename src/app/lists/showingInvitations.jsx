"use client"
import React from 'react'
import Invitations from './invitations';
import { useState } from 'react'
function ShowingInvitations() {

    const [showInvitations, setShowInvitations] = useState(false)
    
  return (
   <div className="flex flex-col my-5 shadow-md p-5 rounded-2xl border gap-5">
<div className="flex items-center justify-between">
    <div className="text-xs lg:text-base text-black">
        list invitations
    </div>
    <div className="text-blue-500 flex flex-row gap-1 lg:gap-4">
        <button onClick={()=>setShowInvitations(!showInvitations)} className='cursor-pointer lg:text-base text-[10px]'>{showInvitations?'Hide':'Show'} invitations</button>
       <button onClick={()=>router.push('/lists/lists-invitations')} className='cursor-pointer lg:text-base text-[10px]'>View All</button>
    </div>
</div>


{
showInvitations?(
    <Invitations />
):null
}


       </div>  )
}

export default ShowingInvitations