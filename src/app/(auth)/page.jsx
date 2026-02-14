import React from 'react'
import Link from 'next/link'

function page() {
  return (

    <>
  <div className='flex capitalize ml-50 overflow-hidden mt-20 flex-col gap-10 items-center justify-center mb-30'>
    <div className='mb-10'>
  <img src="/icons/Buy2logo.png" alt="Buy2 Logo" />
  </div>
  <div className='flex items-center flex-col'>
    <h1 className="text-3xl font-bold">
      welcome!
    </h1>
    <p className=' text-gray-500'>
      please login to continue
    </p>
  </div>
  <form action="">
  <div className='flex flex-col gap-5 mt-10 relative'>
    <div className='flex flex-col'>
    <label htmlFor="email" className='font-bold'>Email address</label>
    <input id="email" type="text" placeholder='Email' className='border-2 border-gray-300 rounded-xl p-2 w-80' />
   <button type='button' className='absolute top-9 right-3 cursor-pointer'>
    <img src="/icons/mail.png" alt="Mail Icon" />
   </button>
    </div>
    <div className='flex flex-col relative'>
    <label htmlFor="password" className='font-bold'>Password</label>
    <input id="password" type="password" placeholder='password' className='border-2 border-gray-300 rounded-xl p-2 w-80' />
    <button type='button' className=' cursor-pointer absolute right-4 top-9'>
      <img src="/icons/eye.png" alt="Eye Icon" />
    </button>
    </div>
    <div className='flex justify-between'>
    <label htmlFor="remember-me" className='flex select-none items-center gap-2 text-gray-500'>
      <input id='remember-me' type="checkbox" />
      remember me
    </label>
    <Link href="/forgot-password" className='text-blue-500 hover:underline'>Forgot password?</Link>
    </div>
    <button className='bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'>
      Login
    </button>
  </div>
  
  </form>
</div>

    
    
    </>
  )
}

export default page