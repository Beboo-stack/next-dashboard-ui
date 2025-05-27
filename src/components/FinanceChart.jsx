"use client";
import Image from "next/image";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const FinanceChart = () => {
  const data = [
    {
      name: "JAN",
      income: 4000,
      expense: 2400,
    },
    {
      name: "FEB",
      income: 3000,
      expense: 1398,
    },
    {
      name: "MAR",
      income: 2000,
      expense: 9800,
    },
    {
      name: "APR",
      income: 2780,
      expense: 3908,
    },
    {
      name: "MAY",
      income: 1890,
      expense: 4800,
    },
    {
      name: "JUN",
      income: 2390,
      expense: 3800,
    },
    {
      name: "JUL",
      income: 3490,
      expense: 4300,
    },
    {
      name: "AUG",
      income: 3490,
      expense: 4300,
    },
    {
      name: "SEP",
      income: 3490,
      expense: 4300,
    },
    {
      name: "OCT",
      income: 3490,
      expense: 4300,
    },
    {
      name: "NOV",
      income: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "DEC",
      income: 3490,
      expense: 4300,
    },
  ];
  return (
    <div className="bg-white rounded-2xl flex flex-col gap-4 w-full h-full p-4">
      {" "}
      <div className="flex justify-between items-center">
        <h2>Finance</h2>
        <Image src="/moreDark.png" width={20} height={20} alt="" />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            tickMargin={10}
            axisLine={false}
            tickLine={false}
            dataKey="name"
          />
          <YAxis tickMargin={10} axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingBottom: "40px", paddingTop: "20px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#8884d8"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#82ca9d"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
