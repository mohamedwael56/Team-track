import Sidebar from '@/components/sidebar'
import React, { Fragment } from 'react'
import Header from '@/components/header'
function page() {
    const notifications=[
        {
            id:1,
            title:'UI Task less than 8 days',
            description:'Phillip, your assignment is less than 8 days away from reaching'
        },
        {
            id:2,
            title:'UI Task less than 8 days',
            description:'Phillip, your assignment is less than 8 days away from reaching'
        },
        {
            id:3,
            title:'UI Task less than 8 days',
            description:'Phillip, your assignment is less than 8 days away from reaching'
        },
        {
            id:4,
            title:'UI Task less than 8 days',
            description:'Phillip, your assignment is less than 8 days away from reaching'
        },
        {   
            id:5,
            title:'UI Task less than 8 days',   
            description:'Phillip, your assignment is less than 8 days away from reaching'
        },
        {
            id:6,   
            title:'UI Task less than 8 days',
            description:'Phillip, your assignment is less than 8 days away from reaching'
        },
        {   
            id:7,   
            title:'UI Task less than 8 days',   
            description:'Phillip, your assignment is less than 8 days away from reaching'   
        },  
        {
            id:8,
            title:'UI Task less than 8 days',

            description:'Phillip, your assignment is less than 8 days away from reaching'       
        },  
        {   
            id:9,   
            title:'UI Task less than 8 days',   
            description:'Phillip, your assignment is less than 8 days away from reaching'
        },  
        {   
            id:10,  
            title:'UI Task less than 8 days',   
            description:'Phillip, your assignment is less than 8 days away from reaching'
        },  
                                                            {

            id:11,
            title:'UI Task less than 8 days',
            description:'Phillip, your assignment is less than 8 days away from reaching'
        },
        {
            id:12,
            title:'UI Task less than 8 days',
            description:'Phillip, your assignment is less than 8 days away from reaching'
        }

    ]       
        
        
  return (
    <div className='flex'>
        <div className='flex-1 ml-69'>
        <Header />
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
                <img src="/icons/alert-outline.svg" alt="" />
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
        <Sidebar />
    </div>
  )
}

export default page