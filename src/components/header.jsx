import React from 'react'
import Link from 'next/link'

function Header() {
  return (
      <header>
          <div className="flex justify-between items-center">
            <div className="relative pr-5">
              <button className="absolute top-3 left-2 cursor-pointer">
                <img src="/icons/search.png" alt="" width={15} />
             </button>

              <input type="text" placeholder="Search" className="bg-gray-100 pl-8 pr-5 py-2 rounded-xl text-black"/>
            </div>
            <div className='flex items-center gap-3'>
              <Link href='/notifications' className="bg-gray-100 cursor-pointer rounded-2xl p-3">
                <img src="/icons/notification.png" alt="" />
              </Link>
            <nav className="flex w-full  items-center justify-end gap-5 p-5">
              <Link
                href="/profile"
                className="text-gray-500 hover:text-gray-700 transition duration-300 flex gap-4 items-center"
              >
                <img
                  src="/icons/avatar.png"
                  alt=""
                  className="bg-gray-300 py-2 px-3 w-10 rounded-xl"
                />
                <div className="flex items-start flex-col">
                  <h1 className="text-xl text-black">mohamed wael</h1>
                  <p className="text-gray-400 text-sm">flutter developer</p>
                </div>
              </Link>
            </nav>
            </div>
          </div>
        </header>
  )
}

export default Header