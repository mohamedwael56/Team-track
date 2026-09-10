"use client"
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Lists from './lists';
import Image from 'next/image'
import { lists } from '@/Data/lists';
import CreateList from './CreateList';
import ShowingInvitations from './showingInvitations';
function ListsHeader() {

    const router=useRouter();
    const [sortOption, setSortOption] = useState(false);
      const [createList, setCreateList] = useState(null);
        const [editList,setEditList]=useState('My List')

  return (
    <>
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
                <Image width={20} height={20} src="/icons/search.png" alt="" className='absolute left-4 top-3 ' />
            </button>
            <input type="text" placeholder="Search..." className="border border-gray-300 text-zinc-950 rounded-xl px-4 py-2 w-full pl-12" />
       </div>
       <button onClick={()=>setSortOption(true)} className='cursor-pointer relative'>
            <Image width={18} height={18} src="/icons/arrow-sort.png" alt="" className='absolute left-5 top-4 '  />
            <div className=' border-gray-300 border rounded-xl px-6 pl-8 py-3 text-zinc-950 ml-2'>
           Sort
            </div>
            </button>
       </div>
       <ShowingInvitations />
    
       <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
     
      {
        lists.map((list)=>{
            return(
                
           <Lists key={list.id} setEditList={setEditList} setCreateList={setCreateList} list={list} />
                
            )
        }
      )}
       
    </div>
            </div>
       
    </>
  )
}

export default ListsHeader