'use client'
import React from 'react'
import Header from './header'
import Sidebar from './sidebar'
import { useState } from 'react'
function DashboardShell({ children }) {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
<html lang="en">
        <body className=''>
            <div className="flex">
    <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    <div className={`flex-1 transition-all duration-800 ${isSidebarOpen ? 'ml-69' : 'ml-10'} lg:ml-69`}>
          <div className="mt-5 text-black">
            <Header setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
          </div>
         
    </div>
            </div>
             <div className={` transition-all duration-800 ${isSidebarOpen ? 'ml-69' : 'ml-10'} lg:ml-0`}>
      {children}
    </div>
        </body>

    </html>  )
}

export default DashboardShell