import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CalendarCheck, FileText, UserPlus } from "lucide-react";

const stats = [
  {
    title: "Total Employees",
    value: "124",
    icon: Users,
    change: "+2% from last month",
  },
  {
    title: "On Leave Today",
    value: "8",
    icon: CalendarCheck,
    change: "3 sick, 5 vacation",
  },
  {
    title: "Open Positions",
    value: "5",
    icon: UserPlus,
    change: "2 engineering, 3 sales",
  },
  {
    title: "Pending Approvals",
    value: "12",
    icon: FileText,
    change: "Leave, expenses, etc.",
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
