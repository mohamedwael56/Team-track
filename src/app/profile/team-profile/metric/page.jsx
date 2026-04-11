'use client';
import Header from '@/components/header'
import React from 'react'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRouter } from 'next/navigation';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJs,Tooltip,Legend,ArcElement } from 'chart.js'
ChartJs.register(ArcElement,Tooltip,Legend)
function Page() {
  const router = useRouter();
    const percentage = 66;
    const [status, setStatus] = useState('successful');
    const [submitted, setSubmitted] = useState(false);
const [open, setOpen] = useState(false);
const [actualField, setActualField] = useState(false);
 const [inputValue, setInputValue] = useState('');
 const [percentageValue, setPercentageValue] = useState(0);
 const savedPercentage=()=>{
  setActualField(open)
  setPercentageValue(inputValue)
  setOpen(false)
 }
const data={
    labels:['matric 1','matric 2','matric 3','matric 4','matric 5',],
    datasets:[{
      data:[42,42,42,78,65],
      backgroundColor:['#3F27F5','#F2F527','#F58E27','#F22A1B','#F25B1B']
    }]
  }
  return (
    
<div className="flex">
  <div className="flex-1 ml-69">
    <Header />
    <main>
      {
      open&&(
        <>
        <div className='fixed bg-black opacity-50 inset-0 z-50'></div>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-2 flex-col w-120 rounded-2xl">
            <div className="flex justify-between mb-5 items-center">
          <h1 className='text-black'>add actual field</h1>
          <button onClick={()=>setOpen(false)} className='text-2xl cursor-pointer text-black'>×</button>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className='text-black'>actual field</label>
              <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text" id="" className='rounded-lg px-2 text-black border py-2 border-gray-400' />
            </div>
            <div className="flex my-5 gap-2">
              <button onClick={()=>setOpen(false)} className=' border-blue-800 border text-blue-800 w-full rounded-xl cursor-pointer px-5 py-2 ml-2'>Cancel</button>
              <button onClick={savedPercentage} className='bg-blue-900 w-full rounded-xl cursor-pointer text-white px-5 py-2'>Save</button>
            </div>
            </div>
        </div>
        </>
      )
    }
    {submitted&&(
                    <>
                    <div className="bg-black opacity-50 fixed inset-0 z-50"></div>
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-5 items-center flex flex-col rounded-2xl ">
                    <img src={status === 'successful' ? "/icons/icon.png" : "/icons/icon(2).png"} width={70} />
                    <div className="flex flex-col items-center justify-center">
                    <div className="mt-5  text-black"> {status === 'successful' ? ' successful submission' : ' submission failed'}</div>
                    <div className="my-5 text-center text-gray-400 w-[300px] text-sm "> {`${status === 'successful' ? 'Your support ticket has been submitted successfully. Our support team will contact you shortly.' : 'Your support ticket submission failed. Please try again later.'}`}</div>
                    </div>
                    {status === 'successful' ? (
                        <button onClick={()=>setSubmitted(false)} className='bg-blue-900 text-white px-4 py-2 rounded-xl cursor-pointer w-full'>Got it</button>
                    ) : (
                         <button onClick={()=>setSubmitted(false)} className='bg-red-500 text-white px-4 py-2 rounded-xl cursor-pointer w-full'>Got it</button>
                    )}

                    </div>
                    </div>
                    </>
                )}
      <div className="bg-gray-100 flex flex-col rounded-2xl p-5 my-4">
    <div className="flex items-center mb-5 justify-between">
    <div className="flex gap-5 items-center flex-row">
    <Link href='/profile/team-profile' className='text-blue-500'>
    back
    </Link>
    <h1 className='text-black text-xl'>Add KPI</h1>
    </div>
    <div className="flex flex-row items-center gap-5">
        <button onClick={()=>router.back()} className='text-red-500 cursor-pointer'>discard</button>
        <button onClick={()=>setSubmitted(true)} className='bg-blue-900 rounded-xl cursor-pointer text-white px-5 py-2'>Submit KPI</button>
    </div>
    </div>
    <hr />
    <div className="border mb-5 flex flex-col shadow-xl rounded-xl p-5 mt-5">
<h1 className='text-gray-400 text-xl'>work quality</h1>
<p className='text-black text-sm mb-3 mt-1'>mar 23 ,2023</p>
<div className="flex flex-row gap-5 mt-2">
    <div className="bg-gray-200 w-full items-center flex p-5 justify-between rounded-2xl">
        <p className='text-black font-bold'>target</p>
        <div className="flex w-20 relative text-sm text-nowrap items-center text-black flex-col">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            pathTransitionDuration: 0.5,
            pathColor: `rgb(30, 0, 250)`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
        <p className='absolute top-7 font-bold text-lg'>48%</p>
        </div>
    </div>
    <div className="bg-gray-200 w-full items-center flex p-5 justify-between rounded-2xl">
        <p className='text-black font-bold'>target</p>
        <div className="flex w-20 relative text-sm text-nowrap items-center text-black flex-col">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            pathTransitionDuration: 0.5,
            pathColor: `rgb(250, 0, 0)`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
        <p className='absolute top-7 font-bold text-lg'>48%</p>
        </div>
    </div>
    <div className="bg-gray-200 w-full items-center flex p-5 justify-between rounded-2xl">
        <p className='text-black font-bold'>target</p>
        <div className="flex w-20 relative text-sm text-nowrap items-center text-black flex-col">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            pathTransitionDuration: 0.5,
            pathColor: `rgb(250, 100, 0)`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
        <p className='absolute top-7 font-bold text-lg'>48%</p>
        </div>
    </div>
    {
      actualField?(
     <div className="bg-gray-200 w-full items-center flex p-5 justify-between rounded-2xl">
        <p className='text-black font-bold'>target</p>
        <div className="flex w-20 relative text-sm text-nowrap items-center text-black flex-col">
        <CircularProgressbar
          value={inputValue}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            pathTransitionDuration: 0.5,
            pathColor: `rgb(30, 180, 0)`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
        <p className='absolute top-7 font-bold text-lg'>{percentageValue}%</p>
        </div>
    </div>
     
      ):(
    <button onClick={()=>setOpen(true)} className="bg-violet-200 cursor-pointer w-full items-center flex flex-col p-5 justify-center rounded-2xl">
       <p className='text-violet-500 text-xl font-bold '>+</p>
       <p className='text-violet-600 text-xl '>Add actual field</p>

    </button>

      )

    }
</div>
    </div>
    <h1 className='text-black text-xl mb-1'>Feed back</h1>
    <div className="flex gap-5 justify-between items-center">
        <div className="border w-full p-5 shadow-md rounded-xl text-zinc-800">
            Lorem ipsum, dolor sit amet consectetur
             adipisicing elit. Fuga ipsa molestiae
              dicta dolorum et beatae, doloremque 
              esse consequuntur qui officia ullam 
              incidunt consectetur necessitatibus 
              voluptate hic vel quaerat id nobis.
            Lorem ipsum dolor sit amet consectetur
            , adipisicing elit. Animi nihil harum,
             accusantium vero magnam natus, 
             dignissimos porro debitis odio 
             voluptate nesciunt a temporibus, iure 
             laudantium deleniti quos accusamus 
             modi saepe!Loremlor
            Lorem ipsum dolor, sit amet consectetur
             adipisicing elit. Dolorem enim rerum 
             veniam expedita, ullam voluptatibus. 
             Aliquid facilis qui fugit corporis 
             odio! Sapiente, aperiam? Provident rem
              saepe eius illum maxime sequi.
            Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Omnis error, 
             repudiandae minima distinctio 
             asperiores quaerat laudantium nisi 
             velit harum iusto, nihil accusamus 
             perferendis ipsam corporis 
             reprehenderit, sunt totam nemo modi?
        </div>
        <div className="border p-5 w-full bg-gray-200 h-100 shadow-md  rounded-xl text-zinc-800">
            <p className='text-black mb-2 text-xl font-bold'> description</p>
            <p> Lorem ipsum, dolor sit amet consectetur
             adipisicing elit. Fuga ipsa molestiae
              dicta dolorum et beatae, doloremque 
              esse consequuntur qui officia ullam 
              in</p>
           
        </div>

    </div>
      </div>
   


    </main>
  </div>
  <Sidebar />
</div>

  )
}

export default Page