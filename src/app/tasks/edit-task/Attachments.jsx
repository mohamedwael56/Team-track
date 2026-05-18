import React from 'react'

function Attachments() {
  return (
  <div className='border object-cover shadow-xl p-3 rounded-xl'>
    <div className='text-black'>Attachments</div>
    <div className='flex gap-2'>
<button className='bg-violet-200 cursor-pointer mt-2 px-5 py-2 text-violet-500 rounded-xl'>
<div className='flex gap-2 items-center'>
<p>+</p>
<p className='text-nowrap'>upload more items </p>
</div>
</button>
<div className='border rounded-xl px-3  shadow-xl'>
<div className='flex justify-between'>
<div className='flex items-center'>
    <img src="/frame.svg" alt="" />
    <div  className='flex  flex-col ml-2'>
<p className='text-black text-sm text-nowrap'>devs presentation.pdf</p>
<p className='flex justify-start text-sm'>1.5 MB</p>
    </div>
</div>
<div className='flex items-center gap-2 ml-3'>
    <button className='cursor-pointer'><img src="/icons/view.png" alt="" /></button>
    <button className='cursor-pointer'><img src="/icons/delete-03.png" alt="" /></button>
</div>
</div>
</div>
<div className='border rounded-xl px-3  shadow-xl'>
<div className='flex justify-between'>
<div className='flex items-center'>
    <img src="/frame.svg" alt="" />
    <div className='flex  flex-col ml-2'>
<p className='text-black text-nowrap text-sm'>devs presentation.pdf</p>
<p className='flex justify-start text-sm'>1.5 MB</p>
    </div>
</div>
<div className='flex items-center gap-2 ml-3'>
    <button className='cursor-pointer'><img src="/icons/view.png" alt="" /></button>
    <button className='cursor-pointer'><img src="/icons/delete-03.png" alt="" /></button>
</div>
</div>
</div>
<div className='border rounded-xl px-3  shadow-xl'>
<div className='flex justify-between'>
<div className='flex items-center'>
    <img src="/frame.svg" alt="" />
    <div className='flex  flex-col ml-2'>
<p className='text-black text-nowrap text-sm'>devs presentation.pdf</p>
<p className='flex justify-start text-sm'>1.5 MB</p>
    </div>
</div>
<div className='flex items-center gap-2 ml-3'>
    <button className='cursor-pointer'><img src="/icons/view.png" alt="" /></button>
    <button className='cursor-pointer'><img src="/icons/delete-03.png" alt="" /></button>
</div>
</div>
</div>
    </div>
    </div>
  )
}

export default Attachments