"use client";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState("work_week");

  const handleViewChange = (view) => {
    setView(view);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      min={new Date(2025, 5, 16, 8, 0)}
      max={new Date(2025, 5, 16, 18, 0)}
      style={{ height: "98%" }}
      onView={handleViewChange}
    />
  );
};

export default BigCalendar;
