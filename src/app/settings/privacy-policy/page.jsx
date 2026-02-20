import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import React from 'react'

function page() {
  return (
    <div className='flex'>
        <div className="flex-1 ml-69">
            <Header />
            <main>
                <div className="bg-gray-100 p-5 flex flex-col rounded-2xl h-screen">
            <div className="text-black text-2xl font-bold">
                settings
            </div>
            <div className="flex my-5 text-black flex-row gap-4">
                <button className='border border-violet-400 px-5 py-1 text-violet-500 rounded-2xl cursor-pointer'>password</button>
                <button className='cursor-pointer'>language</button>
                <button className='cursor-pointer'>about buy2</button>
                <button className='cursor-pointer'>terms of use</button>
                <button className='cursor-pointer'>privacy policy</button>
            </div>
            <hr />
            <div className=" text-gray-500 flex flex-col mt-6 ">
           <div className="flex flex-col">
            <h1 className='text-blue-900'>1- Heading one</h1>
            <p>Lorem ipsum, dolor sit amet consectetur
                 adipisicing elit. Laudantium earum 
                 quasi est nobis, accusantium quo deserunt
                  omnis illo accusamus molestias aliquam 
                  nulla voluptates praesentium, quam quos 
                  ullam dicta voluptas iure! Lorem ipsum
                   dolor sit amet consectetur adipisicing
                    elit. Ea cumque totam impedit nostrum 
                    ipsa magni consectetur saepe quo laborum 
                    quod cupiditate a eveniet repudiandae, et
                     libero provident ducimus excepturi unde.</p>
           </div>
       
           <div className="flex flex-col">
            <h1 className='text-blue-900 mt-5'>2- Heading two</h1>
            <p>Lorem ipsum, dolor sit amet consectetur
                 adipisicing elit. Laudantium earum 
                 quasi est nobis, accusantium quo deserunt
                  omnis illo accusamus molestias aliquam 
                  nulla voluptates praesentium, quam quos 
                  ullam dicta voluptas iure! Lorem ipsum
                   dolor sit amet consectetur adipisicing
                    elit. Ea cumque totam impedit nostrum 
                    ipsa magni consectetur saepe quo laborum 
                    quod cupiditate a eveniet repudiandae, et
                     libero provident ducimus excepturi unde.</p>
           </div>
       
           <div className="flex flex-col">
            <h1 className='text-blue-900 mt-5'>3- Heading three</h1>
            <p>Lorem ipsum, dolor sit amet consectetur
                 adipisicing elit. Laudantium earum 
                 quasi est nobis, accusantium quo deserunt
                  omnis illo accusamus molestias aliquam 
                  nulla voluptates praesentium, quam quos 
                  ullam dicta voluptas iure! Lorem ipsum
                   dolor sit amet consectetur adipisicing
                    elit. Ea cumque totam impedit nostrum 
                    ipsa magni consectetur saepe quo laborum 
                    quod cupiditate a eveniet repudiandae, et
                     libero provident ducimus excepturi unde.</p>
           </div>
       
            </div>
                </div>
            </main>
        </div>
        <Sidebar />
    </div>
  )
}

export default page