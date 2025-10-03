"use client";

import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { department: "Engineering", count: 45, fill: "var(--color-engineering)" },
  { department: "Sales", count: 30, fill: "var(--color-sales)" },
  { department: "Marketing", count: 20, fill: "var(--color-marketing)" },
  { department: "HR", count: 10, fill: "var(--color-hr)" },
  { department: "Support", count: 19, fill: "var(--color-support)" },
];

const chartConfig = {
  count: {
    label: "Employees",
  },
  engineering: {
    label: "Engineering",
    color: "hsl(var(--chart-1))",
  },
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-2))",
  },
  marketing: {
    label: "Marketing",
    color: "hsl(var(--chart-3))",
  },
  hr: {
    label: "HR",
    color: "hsl(var(--chart-4))",
  },
  support: {
    label: "Support",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function HeadcountChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square h-[250px]"
    >
      <ResponsiveContainer>
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="count"
            nameKey="department"
            innerRadius={60}
            strokeWidth={5}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <ChartLegend
            content={<ChartLegendContent nameKey="department" />}
            className="-mt-2"
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
