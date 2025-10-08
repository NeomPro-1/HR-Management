"use client"

import * as React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const initialData = [
  { name: "Mon", total: 0 },
  { name: "Tue", total: 0 },
  { name: "Wed", total: 0 },
  { name: "Thu", total: 0 },
  { name: "Fri", total: 0 },
  { name: "Sat", total: 0 },
  { name: "Sun", total: 0 },
];

export function AttendanceChart() {
  const [data, setData] = React.useState(initialData);

  React.useEffect(() => {
    setData([
      { name: "Mon", total: Math.floor(Math.random() * 100) + 80 },
      { name: "Tue", total: Math.floor(Math.random() * 100) + 80 },
      { name: "Wed", total: Math.floor(Math.random() * 100) + 80 },
      { name: "Thu", total: Math.floor(Math.random() * 100) + 80 },
      { name: "Fri", total: Math.floor(Math.random() * 100) + 80 },
      { name: "Sat", total: Math.floor(Math.random() * 100) + 80 },
      { name: "Sun", total: Math.floor(Math.random() * 100) + 80 },
    ]);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}
