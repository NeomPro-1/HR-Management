import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, UserX, Briefcase } from "lucide-react";

const stats = [
    { title: "Total Employees", value: "105", icon: <Users className="h-6 w-6 text-muted-foreground" /> },
    { title: "Present Today", value: "98", icon: <UserCheck className="h-6 w-6 text-muted-foreground" /> },
    { title: "On Leave", value: "7", icon: <UserX className="h-6 w-6 text-muted-foreground" /> },
    { title: "Open Positions", value: "3", icon: <Briefcase className="h-6 w-6 text-muted-foreground" /> },
];


export function DashboardStats() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map(stat => (
                <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                    {stat.title}
                    </CardTitle>
                    {stat.icon}
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
                </Card>
            ))}
        </div>
    )
}
