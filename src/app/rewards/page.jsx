import React from 'react'
import Link from 'next/link'
import RewardsInfo from './RewardsInfo'

function Page() {
    
 
    return (
    <div className='flex'>
        <div className="flex-1 lg:ml-69">
            <main>
                {


                }
                <div className="flex flex-col mt-5 bg-gray-100 p-5 rounded-2xl ">
            <div className="flex gap-3 mb-4 items-center">
<Link href="/home" className='text-blue-600 text-sm'>back</Link>
<p className='text-black text-2xl'>rewards</p>
            </div>
            <hr />
<RewardsInfo />
       
            
                </div>
            </main>
        </div>
    </div>
  )
}

export default Page