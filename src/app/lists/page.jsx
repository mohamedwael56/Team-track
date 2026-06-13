'use client'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Invitations from './invitations';
import Lists from './lists';
import CreateList from './CreateList';
function Page() {

    const lists=[
        {
            id:1,
            name:'my list',
            color:'bg-blue-900',

        },
        {
            id:2,
            name:'team list',
            color:'bg-blue-500',
        },
        {
            id:3,
            name:'team list',
            color:'bg-green-900',
        },
        {
            id:4,
            name:'team list',
            color:'bg-blue-900',
        },
        {
            id:5,
            name:'team list',
            color:'bg-yellow-500',
        },
        {
            id:6,
            name:'team list',
            color:'bg-green-900',
        },
        {
            id:7,

            name:'team list',
            color:'bg-purple-500',
        },
        {
            id:8,
            name:'team list',
            color:'bg-pink-600',
        },
        {
            id:9,
            name:'team list',
            color:'bg-gray-600',
        },

         {
            id:10,
            name:'team list',
            color:'bg-blue-900',
             
         }  ,
         {
            id:11,
            name:'team list',
            color:'bg-emerald-900',
         },
            {
            id:12,
            name:'team list',
            color:'bg-orange-600',
            },
    ]
    const router=useRouter();
const [showInvitations, setShowInvitations] = useState(false)
    const [sortOption, setSortOption] = useState(false);
      const [createList, setCreateList] = useState(null);
        const [editList,setEditList]=useState('My List')

    return (
    <div className='flex'>
    <div className="flex-1 lg:ml-69">
      
        <main>
    
    {
     <CreateList show={createList==='create'} createList={createList} setCreateList={setCreateList}  title='create a new list' />
    }
    {
    <CreateList show={createList==='edit'} editList={editList} setEditList={setEditList} createList={createList} setCreateList={setCreateList} title='Edit this list' />
    }
    
            {
                sortOption&&(
                    <>
                    <div className='bg-black opacity-50 inset-0 fixed z-50'></div>
                    <div className="flex items-center justify-end z-50 fixed mr-5 inset-0">
                        <div className="bg-white w-120 rounded-2xl p-5">
                    <div className="flex items-center justify-between">
                        <h1 className='text-black'>Sort By</h1>
                        <p className='text-2xl text-black cursor-pointer' onClick={()=>setSortOption(false)}>×</p>
                    </div>
                    <div className="flex text-black flex-col gap-4 my-4">
                        <h1 className='text-black'>sort options</h1>
                     <div className="border gap-2 flex flex-col border-gray-300 rounded-2xl p-3">
                        <div className="flex justify-between">
                            <label htmlFor="sort1">number of tasks</label>
                            <input type="radio" name="sort" id="sort1" />
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="sort2">date created</label>
                            <input type="radio" name="sort" id="sort2" />
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="sort3">due date</label>
                            <input type="radio" name="sort" id="sort3" />
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="sort4">my day</label>
                            <input type="radio" name="sort" id="sort4" />
                        </div>
                     </div>
                     <h1 className='capitalize text-black my-2'>sort type</h1>
                     <div className="border flex flex-col border-gray-300 p-5 rounded-2xl">
                       <div className="flex justify-between items-center">
                        <label htmlFor="sortType1">Ascending</label>
                        <input type="radio" name='sortType' id="sortType1" />

                       </div>
                       <div className="flex justify-between items-center">
                        <label htmlFor="sortType2">Descending</label>
                        <input type="radio" name='sortType' id="sortType2" />

                       </div>
                     </div>
                     <div className="flex gap-2 w-full mt-30">
                <button onClick={()=>setSortOption(false)} className='flex-1 bg-gray-200 rounded-2xl cursor-pointer py-2 px-5 text-black'>Cancel</button>
                <button onClick={()=>setSortOption(false)} className='flex-1 bg-blue-900 rounded-2xl cursor-pointer py-2 px-5 text-white'>Apply</button>

                     </div>
                        </div>

                        </div>
                    </div>
                    </>
                )
            }
            <div className="bg-gray-100 w-80 lg:w-full flex flex-col p-5 rounded-2xl">
       <div className="flex justify-between mb-5 items-center">
        <h1 className='text-black font-bold text-base lg:text-xl'>lists</h1>
<button onClick={()=>setCreateList('create')} className='bg-blue-900 cursor-pointer text-white lg:text-base text-[10px] px-6 py-2 rounded-2xl'>+ Add List</button>
       </div>
       <hr />
       <div className="flex gap-5 my-5 justify-between items-center">
    <div className="  w-full  relative">
                <button className='cursor-pointer'>
                <img src="/icons/search.png" alt="" className='absolute left-4 top-3 ' />
            </button>
            <input type="text" placeholder="Search..." className="border border-gray-300 text-zinc-950 rounded-xl px-4 py-2 w-full pl-12" />
       </div>
       <button onClick={()=>setSortOption(true)} className='cursor-pointer relative'>
            <img src="/icons/arrow-sort.png" alt="" className='absolute left-5 top-4 '  />
            <div className=' border-gray-300 border rounded-xl px-6 pl-8 py-3 text-zinc-950 ml-2'>
           Sort
            </div>
            </button>
       </div>
       <div className="flex flex-col my-5 shadow-md p-5 rounded-2xl border gap-5">
<div className="flex items-center justify-between">
    <div className="text-xs lg:text-base text-black">
        list invitations
    </div>
    <div className="text-blue-500 flex flex-row gap-1 lg:gap-4">
        <button onClick={()=>setShowInvitations(!showInvitations)} className='cursor-pointer lg:text-base text-[10px]'>{showInvitations?'Hide':'Show'} invitations</button>
       <button onClick={()=>router.push('/lists/lists-invitations')} className='cursor-pointer lg:text-base text-[10px]'>View All</button>
    </div>
</div>


{
showInvitations?(
    <Invitations />
):null
}


       </div>
       <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
     
      {
        lists.map((list)=>{
            return(
                <>
           <Lists key={list.id} setEditList={setEditList} setCreateList={setCreateList} list={list} />
                </>
            )
        }
      )}
       
    
       
      
    
        
     
       
    
      
    
       </div>
            </div>
        </main>
        </div>
           
    </div>
  )
}

export default Page