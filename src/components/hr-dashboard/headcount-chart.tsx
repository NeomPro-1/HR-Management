"use client"

import { Pie, PieChart, ResponsiveContainer, Cell, Legend } from "recharts"
import { DashboardCardSkeleton } from "./dashboard-card-skeleton";

const data = [
  { name: "Engineering", value: 45, color: "hsl(var(--chart-1))" },
  { name: "Sales", value: 25, color: "hsl(var(--chart-2))"  },
  { name: "Marketing", value: 15, color: "hsl(var(--chart-3))"  },
  { name: "HR", value: 10, color: "hsl(var(--chart-4))"  },
  { name: "Others", value: 10, color: "hsl(var(--chart-5))"  },
]

interface HeadcountChartProps {
  isLoading: boolean;
}

export function HeadcountChart({ isLoading }: HeadcountChartProps) {
  if (isLoading) {
    return <DashboardCardSkeleton />;
  }

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry) => (
            <Cell key={`cell-${entry.name}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
