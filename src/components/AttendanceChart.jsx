"use client";
import Image from "next/image";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AttendanceChart = () => {
  const data = [
    {
      name: "Sun",
      present: 60,
      absent: 40,
    },
    {
      name: "Mon",
      present: 50,
      absent: 30,
    },
    {
      name: "Tue",
      present: 100,
      absent: 80,
    },
    {
      name: "Wed",
      present: 120,
      absent: 100,
    },
    {
      name: "Thu",
      present: 30,
      absent: 60,
    },
    {
      name: "Fri",
      present: 20,
      absent: 100,
    },
    {
      name: "Sat",
      present: 75,
      absent: 200,
    },
  ];
  return (
    <div className="bg-white rounded-2xl flex flex-col gap-4 w-full h-full p-4">
      {" "}
      <div className="flex justify-between items-center">
        <h2>Attendance</h2>
        <Image src="/moreDark.png" width={20} height={20} alt="" />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingBottom: "40px", paddingTop: "20px" }}
          />
          <Bar
            dataKey="present"
            fill="#8884d8"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#82ca9d"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
