"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "2024-07-01", present: 116, absent: 8 },
  { date: "2024-07-02", present: 119, absent: 5 },
  { date: "2024-07-03", present: 123, absent: 1 },
  { date: "2024-07-04", present: 114, absent: 10 },
  { date: "2024-07-05", present: 124, absent: 0 },
  { date: "2024-07-06", present: 121, absent: 3 },
  { date: "2024-07-07", present: 120, absent: 4 },
];

const chartConfig = {
  present: {
    label: "Present",
    color: "hsl(var(--chart-1))",
  },
  absent: {
    label: "Absent",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function AttendanceChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[250px] w-full">
      <ResponsiveContainer>
        <BarChart 
            data={chartData} 
            margin={{ top: 20, right: 20, bottom: 5, left: 0 }}
            barGap={4}
        >
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar dataKey="present" fill="var(--color-present)" radius={4} />
          <Bar dataKey="absent" fill="var(--color-absent)" radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
