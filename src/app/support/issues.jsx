'use client'
import {useState} from 'react'
import { useRouter } from 'next/navigation'
import TicketDetails from './TicketDetails'
function Issues() {

    const issues=[{
        id:1,
        subject:'How to uninstall the...',
        ticketId:'334533',
        status:'open',
        submitted:'mar23,2022'
    },
{
        id:2,
        subject:'How to uninstall the...',
        ticketId:'334533',
        status:'open',
        submitted:'mar23,2022'
    },
{
        id:3,
        subject:'How to uninstall the...',
        ticketId:'334533',
        status:'open',
        submitted:'mar23,2022'

},
{
        id:4,
        subject:'How to uninstall the...',
        ticketId:'334533',
        status:'in progress',
        submitted:'mar23,2022'
    },
{
        id:5,
        subject:'How to uninstall the...',
        ticketId:'334533',
        status:'in progress',
        submitted:'mar23,2022'
    },
{
        id:6,
        subject:'How to uninstall the...',
        ticketId:'334533',
        status:'in progress',
        submitted:'mar23,2022'
    },
{
        id:7,
        subject:'How to uninstall the...',
        ticketId:'334533',
        status:'Solved',
        submitted:'mar23,2022'
    },
{
        id:8,
        subject:'How to uninstall the...',
        ticketId:'334533',
        status:'Solved',
        submitted:'mar23,2022'
    },
{
        id:9,
        subject:'How to uninstall the...',
        ticketId:'334533',
        status:'Solved',
        submitted:'mar23,2022'
    },
    {
        id:10,
        subject:'How to uninstall the...',
        ticketId:'334533',
        status:'open',
        submitted:'mar23,2022'
    },
{
        id:11,
        subject:'How to uninstall the...',
        ticketId:'334533',
        status:'open',
        submitted:'mar23,2022'
    },
{
        id:12,
        subject:'How to uninstall the...',
        ticketId:'334533',
        status:'open',
        submitted:'mar23,2022'

},
{
        id:13,
        subject:'How to uninstall the...',
        ticketId:'334533',
        status:'in progress',
        submitted:'mar23,2022'
    },
{
        id:14,
        subject:'How to uninstall the...',
        ticketId:'334533',
        status:'in progress',
        submitted:'mar23,2022'
    },
{
        id:15,
        subject:'How to uninstall the...',
        ticketId:'334533',
        status:'in progress',
        submitted:'mar23,2022'
    },
{
        id:16,
        subject:'How to uninstall the...',
        ticketId:'334533',
        status:'Solved',
        submitted:'mar23,2022'
    },
{
        id:17,
        subject:'How to uninstall the...',
        ticketId:'334533',
        status:'Solved',
        submitted:'mar23,2022'
    },
{
        id:18,
        subject:'How to uninstall the...',
        ticketId:'334533',
        status:'Solved',
        submitted:'mar23,2022'
    },

]
    const router = useRouter();
    const [open , setOpen] = useState(false)
  return (
  
            <div className="flex flex-col ">
                {
                    open&&(
                        <>
                        <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
                        <div className="absolute top-110 inset-0 flex items-center justify-end z-50">

                         <TicketDetails setOpen={setOpen} />

                                </div>
                        </>
                    )
                }
            <div className="flex w-full items-center mt-5 justify-between">
             <div className="flex-1 relative">
                <button className='cursor-pointer'>
                <img src="/icons/search.png" alt="" className='absolute left-4 top-3 ' />
            </button>
            <input type="text" placeholder="Search tasks..." className="border border-gray-300 text-zinc-950 rounded-xl px-4 py-2 w-full pl-12" />
       </div>
       <div className='flex items-center ml-5 gap-3'>
        <button className='border flex gap-2 items-center rounded-2xl py-3 px-4 cursor-pointer'>
                <img src="/icons/filter.png" alt="" />
                <p className='text-black'>filter</p>
            </button>
        <button onClick={()=>router.push('/support/new-ticket')} className='border bg-blue-900 flex gap-2 items-center rounded-2xl py-3 px-5 cursor-pointer'>
                <p className='text-white'> + add ticket</p>
            </button>

       </div>
    </div>
    <div className="mt-5 flex flex-col">
        <h1 className='text-black font-bold'>my tickets</h1>
        <div className="grid grid-cols-3 gap-2">
           {
            issues.map((card)=>{
                return(
                <>
                      <button key={card.id} onClick={()=>setOpen(true)} className=" cursor-pointer shadow-ms py-5 px-4 border flex justify-between rounded-xl">
        <div className=" flex items-center gap-3">
<img src="/support/frame-1.png" alt="" />
<div className="flex flex-col ">
<p className='text-black font-bold'>{card.subject}</p>
<p className='text-gray-400 text-start'>{card.ticketId}</p>
</div>
        </div>
        <div className="flex justify-end gap-2 flex-col">
        <p className={`${card.status === 'open' && 'bg-blue-200 text-blue-900' } ${card.status === 'Solved' && 'bg-green-100 text-green-500'} ${card.status === 'in progress' && 'bg-orange-100 text-orange-500'} font-bold rounded-lg flex justify-center px-2 `}>{card.status}</p>
        <p className='text-gray-400'>{card.submitted}</p>
        </div>
            </button>
                </>
                )
            })
           }
      
    
         

        </div>
    </div>
  </div>
                
  )
}

export default Issues