import React from "react";
import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import AttendanceChart from "@/components/AttendanceChart";
import FinanceChart from "@/components/FinanceChart";
import EventCalender from "@/components/EventCalender";
import Announcement from "@/components/Announcement";

const page = () => {
  return ( 
    <div className="flex flex-col md:flex-row p-4 gap-4">
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8 ">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Staff" />
          <UserCard type="Student" />
          <UserCard type="Teacher" />
          <UserCard type="Parent" />
        </div>
        {/* Middle Charts */}
        <div className="flex gap-4 flex-col lg:flex-row ">
          <div className="w-full lg:w-1/3 h-[450px] ">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* Bottom Charts */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalender />
        <Announcement />
      </div>
    </div>
  );
};

export default page;
