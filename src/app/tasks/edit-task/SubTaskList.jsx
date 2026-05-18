import React from 'react'

function SubTaskList({setModalType}) {
  const subTasks=[
    
    {
    
id:'1',
title:'Change the icons to font awesome icons.',
img:'/icons/delete-03.png'
    },
    {
id:'2',
title:'Adjust the size to responsive mobile.',
img:'/icons/delete-03.png'
    },
    {
id:'3',
title:'Activate the navigation buttons to direct the users.',
img:'/icons/delete-03.png'
    },
    {
id:'4',
title:'Change the icons to font awesome icons.',
 img:'/icons/delete-03.png'
    },
    
]
  return (
<div className='border shadow-xl flex flex-col rounded-2xl p-3'>
<div className='flex justify-between items-center text-black'>
<p className='text-xl mr-3'>Revision 1: Fixing Navbar at Dashboard Page</p>
<button className="cursor-pointer ml-5 border-none text-blue-900 hover:text-blue-700 px-4 py-2 rounded-lg  text-lg">+ Add subtask</button>
</div>
{
    subTasks.map((task)=>{
        return(

<div key={task.id} className='bg-gray-200 rounded-2xl items-center p-3 mt-3 justify-between flex text-black'>
<p>{task.title}</p>
<button onClick={() => setModalType('delete')} className='cursor-pointer'>
<img src={task.img} alt=""  />
</button>
</div>

   ) })
}



</div>  )
}

export default SubTaskList