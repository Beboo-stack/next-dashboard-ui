"use client";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EventCalender = () => {
  const [value, onChange] = useState(new Date());

  const events = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="bg-white rounded-md p-4">
      <Calendar onChange={onChange} value={value} />
      <div className="flex justify-between items-center">
        <h2 className="my-4">Events</h2>
        <Image
          src="/moreDark.png"
          className="cursor-pointer"
          width={20}
          height={20}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="border-2 p-5 rounded-md border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-gray-600">{event.title}</h2>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalender;
