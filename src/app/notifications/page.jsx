import React, { Fragment } from 'react'
import Image from 'next/image'
import { notifications } from '@/Data/notificationsData'
function page() {
   
        
        
  return (
    <div className='flex'>
        <div className='flex-1 lg:ml-69'>
      
        <main>
            <div className='p-5 flex flex-col bg-gray-100 rounded-2xl '>
            <div className='mb-4 text-black text-xl'> 
        notifications
            </div>
              <hr />
              {
                notifications.map((notification)=>{
                    return(

                    
                    <Fragment key={notification.id}>
     <div className="flex my-5 items-center gap-2">
            <div>
                <Image width={20} height={20} src="/icons/alert-outline.svg" alt="" />
            </div>
            <div className='flex flex-col'>
            <h1 className='text-black'>UI Task less than 8 days</h1>
            <p className='text-gray-300'>Phillip, your assignment is less than 8 days away from reaching</p>
            </div>
            </div>
            <hr />
                </Fragment>
               )
             }
            )

              }
       
        
            </div>
        </main>
        </div>
    </div>
  )
}

export default page