import React from 'react'

function ticketDetails({setOpen}) {
  return (
   <div className="bg-white flex flex-col p-5 rounded-lg w-120 mr-5">
                                <div className="flex items-start justify-between">
                                <h1 className="text-xl text-black font-bold mb-4">ticket details</h1>
                                <button className='text-black text-2xl cursor-pointer' onClick={()=>setOpen(false)}>×</button>  
                              </div>
                              <div className="border gap-3 p-5 rounded-xl flex flex-col">
                                <div className="flex justify-between items-center">
                                <h1 className='text-gray-500'>Ticket ID</h1>  
                                <p className='text-black'>1234</p>
                                </div>
                                <div className="flex justify-between items-center">
                                <h1 className='text-gray-500'>subject</h1>  
                                
                                <p className='text-black'>cant update the app</p>
                                </div>
                                <div className="flex justify-between items-center">
                                <h1 className='text-gray-500'>submitted</h1>  
                                
                                <p className='text-black'> mar3,2022</p>
                                </div>
                                <div className="flex justify-between items-center">
                                <h1 className='text-gray-500'>ticket status</h1>  
                                
                                <p className='text-black'> open</p>
                                </div>
                                <div className="flex justify-between items-center">
                                <h1 className='text-gray-500'>description</h1>  
                                
                                <p className='text-black'> cant update the app</p>
                                </div>
                                <div className="flex justify-between items-center">
                                <h1 className='text-gray-500'>category</h1>  
                                
                                <p className='text-black'> cant update the app</p>
                                </div>
                                <div className="flex justify-between items-center">
                                <h1 className='text-gray-500'>priority</h1>  
                                
                                <p className='text-black'>  Low</p>
                                </div>
                                <div className="flex justify-between items-center">
                                <h1 className='text-gray-500'>attachment</h1>  
                                
                                <div className='flex border rounded-xl px-3 justify-between'>
                            <div className='flex items-center'>
                                <img src="/frame.svg" alt="" />
                                <div className='flex  flex-col ml-2'>
                            <p className='text-black text-nowrap text-sm'>devs presentation.pdf</p>
                            <p className='flex justify-start text-xs'>1.5 MB</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 ml-3'>
                                <button className='cursor-pointer'><img src="/icons/view.png" alt="" /></button>
                                <button className='cursor-pointer'><img src="/icons/delete-03.png" alt="" /></button>
                            </div>
                            </div>
                                </div>

                              </div>
                              <h1 className='text-black my-5 text-xl'>comments</h1>
                              <div className="flex flex-col px-5 border rounded-xl">
                                <div className="flex justify-between my-2 items-center">
                                    <h1 className='text-black'>My name</h1>
                                    <p className='text-gray-400'>3m ago</p>
                                </div>
                                <p className='text-gray-400 mb-2'>
                                    why cant i update teh app? it keeps reloading the same page. please help.
                                </p>
                              </div>

                              <div className="flex flex-col border rounded-xl px-5 mt-4">
                                <div className="flex justify-between items-center mt-5">
                                <div className="flex items-center">
                                    <img src="/icons/customer-service.png" alt="" />
                                    <h1 className='text-black ml-2'>deanna jones</h1>
                                </div>
                                <p className='text-gray-400'>3m ago</p>

                                </div>
                                <p className='text-gray-400 mb-2'>
                                    Hi, Deanna here, have you tried turning your phone off and on again? if the problem persists please contact us again and we will be happy to assist you.
                                </p>
                              </div>
                               <div className="flex flex-col px-5 my-5 border rounded-xl">
                                <div className="flex justify-between my-2 items-center">
                                    <h1 className='text-black'>My name</h1>
                                    <p className='text-gray-400'>3m ago</p>
                                </div>
                                <p className='text-gray-400 mb-2'>
                                    why cant i update teh app? it keeps reloading the same page. please help.
                                </p>
                              </div>
                              <div className="flex mt-30 ">
                                <input type="text" placeholder='add a comment...' className='border border-gray-300 text-zinc-950 rounded-xl px-4 py-2 w-full' />
                                <button className='bg-blue-900 text-white px-5 py-2 rounded-xl ml-2'>send</button>
                              </div>
                                </div>  )
}

export default ticketDetails