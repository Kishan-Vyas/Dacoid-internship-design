import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";






const SchedulePage = () => {
  return (
    <div className="w-full  ">
      <div className="p-1 sticky h-[70px] flex items-center justify-between top-0 text-xl font-semibold z-10 leading-6 bg-white ">
        <div className="h-7 w-7 flex items-center justify-center rounded-md bg-[#F1F1F1]">
          <IoIosArrowBack />
        </div>
        <p>Workout Schedule</p>
        <div className="h-7 w-7 "></div>
      </div>
      <div>
        <div className="flex items-center text-[12px]  gap-1 justify-center">
          <IoIosArrowBack />
          <div className="text-[12px] -mt-0.5 ">Feb 2024</div>
          <IoIosArrowForward />
        </div>
        <div>
            <div>

            </div>
        </div>
      </div>
      
    </div>
  );
};









export default SchedulePage;
