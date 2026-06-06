'use client'
import Header from '@/components/header'
import React from 'react'
import { useState } from 'react'
import Questions from './Questions'
import Issues from './issues'
function Page() {
  const [activeTab, setActiveTab] = useState('questions');
  return (
    <div className='flex'>
        <div className="flex-1 ml-69">
            <main>
                <div className="bg-gray-100 p-5 flex flex-col rounded-2xl h-screen">
            <div className="text-black flex justify-between mb-5 text-2xl font-bold">
                <h1>Support</h1>
                <div className='flex gap-5'>
                    <button onClick={()=>setActiveTab('questions')} className={`cursor-pointer ${activeTab === 'questions' ? 'text-indigo-500 border border-indigo-500' : 'text-black'} px-2 text-sm rounded-2xl`}>frequently questions</button>
                    <button onClick={()=>setActiveTab('issues')} className={`cursor-pointer ${activeTab === 'issues' ? 'text-indigo-500 border border-indigo-500' : 'text-black'} py-2 px-4 rounded-2xl text-sm`}>report issue</button>
                </div>
            </div>
            <hr />
      {
        activeTab === 'questions' &&(<Questions />)
        
      }
      {
        activeTab === 'issues' && (<Issues />)
      }
                </div>
            </main>
        </div>
    </div>
  )
}

export default Page