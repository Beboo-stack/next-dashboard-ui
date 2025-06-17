import React from "react";
import EventCalender from "@/components/EventCalender";
import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalender";

const page = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h2 className="font-semibold text-xl">Schedule (4A)</h2>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalender />
        <Announcement />
      </div>
    </div>
  );
};

export default page;
