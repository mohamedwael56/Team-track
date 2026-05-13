import React from 'react'

function Lists({search}) {
       const lists=[
        {
            id:'1',
            title:"To-do",
            tasks:[
{
    id:'10',
name:"Revision 1: Fixing Navbar at Dashboard Page",
date:"20/2/2022",
level:"Low"
},
{
    id:'11',
name:"Revision 1: Fixing Navbar at Dashboard Page",
date:"20/2/2021",
level:"Low"
},

]
        },
        {
             id:'2',
            title:"In-Progress",
            tasks:[
                {
    id:'13',
name:"Revision 1: Fixing Navbar at Dashboard Page",
date:"20/2/2021",
level:"Low"
                },
                {
id:'14',
name:"Revision 1: Fixing Navbar at Dashboard Page",
date:"20/2/2021",
level:"Low"
                },
                {
id:'15',
name:"Revision 1: Fixing Navbar at Dashboard Page",
date:"20/2/2021",
level:"Low"
                },
                {
id:'16',
name:"Revision 1: Fixing Navbar at Dashboard Page",
date:"20/2/2021",
level:"Low"
                },
            ]
        },
        {
             id:'3',
            title:"completed",
             tasks:[
                {
                    id:'17',
name:"Revision 1: Fixing Navbar at Dashboard Page",
date:"20/2/2021",
level:"Low"
                },
                {
                    id:'18',
name:"Revision 1: Fixing Navbar at Dashboard Page",
date:"20/2/2021",
level:"Low"
                },
            ]
        }
    ]
  return (
        <>
    {
                lists.map((list)=>{

const filteredProduct=list.tasks.filter((product)=>{
return(
product.name.includes(search)||
product.date.includes(search)
)
})
return(
    
       <div key={list.id} className='border flex flex-col rounded-2xl shadow-xl p-3'>
            <div className='flex justify-between gap-3'>
                <div className='flex items-center gap-3'>
            <div className={`${list.title==="To-do"&&"bg-red-600"||
                list.title==="In-Progress"&&"bg-orange-600"
                ||list.title==="completed"&&"bg-green-600"} rounded-3xl h-1 w-1 p-1`}></div>
            <h1 className='text-black font-bold'> {list.title}</h1>
            </div>
            <div className='object-cover '>
            <img src="/icons/arrow-sort.png" alt="" />
            </div>
            </div>
            <hr className='text-red-600 my-3' />
          {filteredProduct.map((task)=>{
return(
    
        <div key={task.id} className='border rounded-2xl p-3 flex my-2 flex-col'>
            <h1 className='text-black font-bold'>{task.name}</h1>
            <div className='flex items-center gap-2 mt-2'>
            <p className='text-gray-600 '>Deadline:</p>
          <span className='text-red-600 text-sm'>{task.date}</span>
            </div>
            <div className='flex justify-between mt-2'>
        <p className='text-black flex items-center gap-1'>
           <img src='/icons/arrow-down.png' />
            {task.level}
            </p>
        <p className='bg-violet-200 text-violet-500 py-1 px-3 rounded-2xl'>List name</p>
            </div>
            </div>
    
)
          })}
          {
            list.title==='To-do'&&(
 <div className='border rounded-2xl mt-2 bg-red-100 border-red-600 border-dashed'>
            <div className='border rotate-6 bg-gray-100 rounded-2xl p-3 my-2 flex flex-col'>
            <h1 className='text-black font-bold'>Revision 1: Fixing Navbar at Dashboard Page</h1>
            <div className='flex items-center gap-2 mt-2'>
            <p className='text-gray-600 '>Deadline:</p>
          <span className='text-red-600 text-sm'>20/2/2021</span>
            </div>
            <div className='flex justify-between mt-2'>
        <p className='text-black flex items-center gap-1'>
           <img src='/icons/arrow-down.png' />
            Low
            </p>
        <p className='bg-violet-200 text-violet-500 py-1 px-3 rounded-2xl'>List name</p>
            </div>
            </div>
            </div>
            )
          }
     
            </div>
    
)
                })
                
            }
 </> )
}

export default Lists