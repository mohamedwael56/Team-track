import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
function TicketHeader() {
     const router = useRouter();
    const [open, setOpen] = useState(false)
    const [status, setStatus] = useState('successful')
  return (
    <>
     {open&&(
                    <>
                    <div className="bg-black opacity-50 fixed inset-0 z-50"></div>
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-5 items-center flex flex-col rounded-2xl ">
                    <Image alt='' width={100} height={70} src={status === 'successful' ? "/icons/icon.png" : "/icons/icon(2).png"}  />
                    <div className="flex flex-col items-center justify-center">
                    <div className="mt-5  text-black"> {status === 'successful' ? ' successful submission' : ' submission failed'}</div>
                    <div className="my-5 text-center text-gray-400 w-[300px] text-sm "> {`${status === 'successful' ? 'Your support ticket has been submitted successfully. Our support team will contact you shortly.' : 'Your support ticket submission failed. Please try again later.'}`}</div>
                    </div>
                    {status === 'successful' ? (
                        <button onClick={()=>setOpen(false)} className='bg-blue-900 text-white px-4 py-2 rounded-xl cursor-pointer w-full'>Got it</button>
                    ) : (
                         <button onClick={()=>setOpen(false)} className='bg-red-500 text-white px-4 py-2 rounded-xl cursor-pointer w-full'>Got it</button>
                    )}

                    </div>
                    </div>
                    </>
                )}
                     <div className="flex mb-5 justify-between gap-2">
                <div className=" flex items-center gap-2">
<Link href='#' onClick={()=>router.back()} className='lg:text-base text-xs text-blue-500'> back</Link>
<p className='text-black lg:text-xl text-sm font-bold'>New Ticket</p>
                </div>
                <div className=" flex gap-3 mx-5">
                <button onClick={()=>router.back()} className='cursor-pointer text-xs lg:text-base text-red-500'>discard</button>
                <button onClick={()=>setOpen(true)} className='text-white bg-blue-900 text-[9px] lg:text-base lg:px-4 lg:py-2 px-2 py-1 rounded-xl cursor-pointer'>submit ticket</button>
                </div>
            </div>
            </>
)
}

export default TicketHeader