import React from "react";
import SwapShifts from "./swap-shifts";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import MyShifts from "./My-shifts";
import ShiftsMarket from "./shifts-market";
import ShiftsTabs from "./ShiftsTabs";
ChartJS.register(ArcElement, Tooltip, Legend);

function Page() {

  return (
    <div className="flex">
      <div className="flex-1 lg:ml-69">
        <main>
         <ShiftsTabs SwapShifts={<SwapShifts />} MyShifts={<MyShifts />}
          ShiftsMarket={<ShiftsMarket />} />
     
        </main>
      </div>
    </div>
  );
}

export default Page;
