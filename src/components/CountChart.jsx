"use client";
import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CountChart = () => {
  const data = [
    {
      name: "Total",
      count: 80,
      fill: "white",
    },
    {
      name: "Boys",
      count: 50,
      fill: "#8884d8",
    },
    {
      name: "Girls",
      count: 30,
      fill: "#83a6ed",
    },
  ];

  return (
    <div className="bg-white rounded-2xl w-full h-full p-4">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h2>Students</h2>
        <Image src="/moreDark.png" width={20} height={20} alt="" />
      </div>

      {/* Charts */}
      <div className="w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom */}
      <div className="flex justify-center gap-16 ">
        <div className="flex flex-col gap-1 justify-start items-start">
          <div className="w-5 h-5 bg-[#8884d8] rounded-full" />
          <h1 className="font-bold ">500</h1>
          <span className="text-gray-500 text-sm">Boys (55%)</span>
        </div>

        <div className="flex flex-col gap-1 justify-start items-start">
          <div className="w-5 h-5 bg-[#83a6ed] rounded-full" />
          <h1 className="font-bold ">350</h1>
          <span className="text-gray-500 text-sm">Girls (55%)</span>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
