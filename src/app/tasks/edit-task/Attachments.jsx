import React from 'react'
import Image from 'next/image'
function Attachments() {
    const Attachments=[{
        id:1,
        name:'devs presentation.pdf',
        size:'1.5 MB'
},
{
    id:2,
    name:'project plan.docx',
    size:'2.0 MB'
},{
    id:3,
    name:'design mockup.png',
    size:'3.2 MB'
}
    ]
  return (
    
 <div className='border object-cover shadow-xl p-3 rounded-xl'>
    <div className='lg:text-xl text-sm text-black'>Attachment</div>
    <div className='flex gap-2'>
<button className='bg-violet-200 cursor-pointer mt-2 px-5 py-2 text-violet-500 rounded-xl'>
<div className='flex lg:text-base text-[9px] gap-2 items-center'>
<p>+</p>
<p className='text-nowrap  '>upload more items </p>
</div>
</button>
{Attachments.map((attachment)=>{
    return(
    
        <div key={attachment.id} className='border rounded-xl px-3  shadow-xl'>
<div className='flex justify-between'>
<div className='flex items-center'>
    <Image width={30} height={30} src="/frame.svg" alt="" className='lg:w-full w-3' />
    <div  className='flex  flex-col ml-2'>
<p className='text-black text-[9px] lg:text-sm text-nowrap'>{attachment.name}</p>
<p className='flex justify-start text-[9px] lg:text-sm'>{attachment.size}</p>
    </div>
</div>
<div className='flex items-center gap-1 lg:gap-2 ml-3'>
    <button className='cursor-pointer lg:w-full w-3'><Image width={15} height={20} src="/icons/view.png" alt="" /></button>
    <button className='cursor-pointer lg:w-full w-3'><Image width={15} height={20} src="/icons/delete-03.png" alt="" /></button>
</div>
</div>
</div>
        
 ) } )
}

    </div>
    </div>  
    )
}

export default Attachments