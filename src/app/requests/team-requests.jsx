"use client";
import Header from "@/components/header";
import React from "react";
import Sidebar from "@/components/sidebar";
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, Legend, ArcElement } from "chart.js";
ChartJs.register(ArcElement, Tooltip, Legend);
function Page() {
  const requests=[{
    id:1,
    name:'mohamed ahmed',
    avatar:'/mohamed.png',

  },{
    id:2,
    name:'mohamed ahmed',
    avatar:'/mohamed.png',

  },{
    id:3,
    name:'mohamed ahmed',
    avatar:'/mohamed.png',

  },{
    id:4,
    name:'mohamed ahmed',
    avatar:'/mohamed.png',

  },{
    id:5,
    name:'mohamed ahmed',
    avatar:'/mohamed.png',

  },{
    id:6,
    name:'mohamed ahmed',
    avatar:'/mohamed.png',

  },{
    id:7,
    name:'mohamed ahmed',
    avatar:'/mohamed.png',

  },{
    id:8,
    name:'mohamed ahmed',
    avatar:'/mohamed.png',

  },{
    id:9,
    name:'mohamed ahmed',
    avatar:'/mohamed.png',

  },{
    id:10,
    name:'mohamed ahmed',
    avatar:'/mohamed.png',

  },{
    id:11,
    name:'mohamed ahmed',
    avatar:'/mohamed.png',

  },{
    id:12,
    name:'mohamed ahmed',
    avatar:'/mohamed.png',

  },
]
  const [open, setOpen] = useState(false);
  const [activeOption, setActiveOption] = useState("accepted");
  const [requestDetails, setRequestDetails] = useState(false);
  

  const data = {
    labels: ["matric 1", "matric 2", "matric 3", "matric 4", "matric 5"],
    datasets: [
      {
        data: [42, 42, 42, 78, 65],
        backgroundColor: [
          "#3F27F5",
          "#F2F527",
          "#F58E27",
          "#F22A1B",
          "#F25B1B",
        ],
      },
    ],
  };
  return (
    <div className="grid grid-cols-3 gap-5">
      {requestDetails && (
        <>
          <div className="bg-black opacity-50 fixed inset-0 z-50"></div>
          <div className="absolute top-80 z-50 inset-0 flex items-center justify-end mr-5">
            <div className="bg-white capitalize flex flex-col p-5 w-120 rounded-2xl">
              <div className="flex items-center justify-between">
                <h1 className="text-black capitalize">request details</h1>
                <p
                  onClick={() => setRequestDetails(false)}
                  className="text-2xl cursor-pointer text-black"
                >
                  ×
                </p>
              </div>
              <div className="border gap-5 border-gray-300 mt-10 rounded-2xl p-5 flex flex-col">
                <div className="flex justify-between items-center">
                  <p className="text-black">Request date</p>
                  <p className="text-black">02-02-2024</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">Request type</p>
                  <p className="text-black">leave request</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">leave duration</p>
                  <p className="text-black">full day</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">leave type</p>
                  <p className="text-indigo-700 bg-indigo-200 px-2 rounded-2xl">
                    partial leave
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">date</p>
                  <p className="text-black">02-02-2024</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">start time</p>
                  <p className="text-black">03:25 PM</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">end time</p>
                  <p className="text-black">03:25 PM</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">total hours</p>
                  <p className="text-black">02-02-2024</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">status</p>
                  <p className="bg-orange-100 text-orange-700 px-3 py-1 rounded-2xl">
                    pending
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">file</p>
                  <div className="flex border px-2 rounded-xl border-grey-400 justify-between">
                    <div className="flex items-center">
                      <img src="/frame.svg" alt="" />
                      <div className="flex  flex-col ml-2">
                        <p className="text-black text-nowrap text-sm">
                          devs presentation.pdf
                        </p>
                        <p className="flex justify-start text-sm">1.5 MB</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-3">
                      <button className="cursor-pointer">
                        <img src="/icons/view.png" alt="" />
                      </button>
                      <button className="cursor-pointer">
                        <img src="/icons/delete-03.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex flex-col gap-3">
                  <p className="text-gray-400">reason</p>
                  <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas, voluptate.
                  </p>
                </div>
              </div>
              <div className="w-full capitalize flex mt-40">
                <button
                  onClick={() => setRequestDetails(false)}
                  className=" text-red-600 bg-red-100 w-full rounded-xl cursor-pointer px-5 py-2 ml-2"
                >
                  Reject
                </button>
                <button
                  onClick={() => setRequestDetails(false)}
                  className=" text-white bg-blue-900 w-full rounded-xl cursor-pointer px-5 py-2 ml-2"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {open && (
        <>
          <div className="bg-black opacity-50 fixed inset-0 z-50"></div>
          <div className="fixed z-50 inset-0 flex items-center justify-center">
            <div className="bg-white p-2 flex-col w-120 rounded-2xl">
              <div className="flex justify-between mb-5 items-center">
                <h1 className="text-black">{`${activeOption === "accepted" ? "Request accepted" : "Request rejected"}`}</h1>
                <button
                  onClick={() => setOpen(false)}
                  className="text-2xl cursor-pointer text-black"
                >
                  ×
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-black">
                  comments
                </label>
                <input
                  type="text"
                  id=""
                  className="rounded-lg px-2 text-black border py-2 border-gray-400"
                />
              </div>
              <div className="flex my-5 gap-2">
                <button
                  onClick={() => setOpen(false)}
                  className=" border-blue-800 border text-blue-800 w-full rounded-xl cursor-pointer px-5 py-2 ml-2"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="bg-blue-900 w-full rounded-xl cursor-pointer text-white px-5 py-2"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </>
      )}
   {
    requests.map((request)=>{
      return(
        <>
  <div key={request.id} className=" flex flex-col border rounded-xl p-5">
        <div className="flex items-center flex-row gap-2">
          <img
            onClick={() => setRequestDetails(true)}
            className="cursor-pointer"
            src="/mohamed.png"
          />
          <div className="flex flex-col text-black">
            <h1 className="text-xl"> mohamed ahmed</h1>
            <p className="text-gray-400 text-sm text-nowrap">
              09/30/2024 - 10/06/2024
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => {
              setActiveOption("rejected");
              setOpen(true);
            }}
            className="bg-red-100 cursor-pointer text-red-500 py-2 px-5 rounded-xl flex-1"
          >
            reject
          </button>
          <button
            onClick={() => {
              setActiveOption("accepted");
              setOpen(true);
            }}
            className="text-white cursor-pointer bg-blue-900 px-5 py-2 rounded-xl flex-1"
          >
            accept
          </button>
        </div>
      </div>

        </>
   )})}
    
    </div>
  );
}

export default Page;
