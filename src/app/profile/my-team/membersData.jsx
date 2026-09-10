import React from 'react'
import { teamMembers } from '@/Data/teamMembersData';
import Link from 'next/link';
import Image from 'next/image';
function MembersData() {
  return (
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
   {
    teamMembers.map((member)=>{
      return(
        
 <Link key={member.id} href="/profile/team-profile" className="flex relative items-center gap-2  shadow rounded-2xl border">
          <Image width={80} height={70} src={member.avatar} alt="" />
          <div className="flex w-full flex-col my-2">
            <div className="flex justify-between my-2 items-center">
            <h1 className='text-black font-bold capitalize'>{member.name}</h1>
          <p className='text-green-500 mr-5 font-bold'>{member.performance}</p>
            </div>
            <div className="bg-gray-200 mr-5 h-3 rounded-full">
              <div className="bg-green-600 rounded-2xl h-3 w-3 absolute" style={{left:"calc(80% - 10px)"}}></div>
            </div>
          </div>
        </Link>
      )
   })
   }
        
       
       </div>
)
}

export default MembersData