'use client'
import React from 'react'
import Header from './header'
import Sidebar from './sidebar'
import { useState } from 'react'
import Link from 'next/link'
import { ClientProfileData } from '@/lib/ClientProfileData.jsx';
function DashboardShell({ children }) {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const [profile, setProfile] = useState(null);
const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    const getProfileData = async () => {
      const profile = await ClientProfileData();
      setProfile(profile);
      setLoading(false);
    };
    getProfileData();
  }, []);
  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="text-black text-3xl animate-pulse ">Loading</div>
      </div>
    );
  }
     if (!profile) {
    return(
      <div className="h-screen w-screen flex items-center justify-center">
     <Link href="/" className='text-3xl text-white bg-blue-800 p-2 rounded-xl hover:scale-105 transition-transform duration-300 '>Sign in</Link>;
  </div>)}
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