"use client";
import Attendance from "./attendance.jsx";
import Tasks from "./tasks.jsx";
import Meetings from "./meetings.jsx";
import Requests from "./requests.jsx";
import Recognition from "./recognition.jsx";
import Rewards from "./rewards.jsx";
import News from "./news.jsx";

function Page() {
  return (
    <div className="flex">
      <div className="flex-1 lg:ml-69 ml-0">
       
        <div>
          <main>
            <div className="flex justify-between mb-9">
              <div className="ml-2">
                <h1 className="text-2xl text-black mb-1">Hello Mohamed 👋🏻</h1>
                <p className="text-gray-600"> Good morning</p>
              </div>
              <div className="bg-gray-100 lg:block hidden  mr-8 flex items-center gap-5 py-2 px-5 rounded-xl">
                <div>
                  <img src="/icons/clock-icon.png" alt="" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm select-none">
                    Current date & time
                  </p>
                  <p className="text-black text-sm select-none">
                    26 September 2023, 12:10 PM{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 m-5">
              <div className="flex lg:flex-row flex-col gap-5 items-start  lg:justify-between lg:items-center">
                <Attendance />
                <Tasks />
              </div>
              <div className="flex lg:flex-row flex-col gap-5 items-start lg:justify-between lg:items-center">
               
  <Meetings />

                <div>

              <Requests />
                </div>
              </div>
            <div className="flex items-start lg:justify-between lg:flex-row flex-col gap-5 lg:items-center">

<div className="flex flex-col gap-2 mr-5">
<Recognition />
<Rewards />
</div>

<News />
            </div>


            </div>
          </main>
        </div>
      </div>

    </div>
  );
}

export default Page;
