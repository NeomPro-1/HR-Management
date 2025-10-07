import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { HeadcountChart } from "@/components/dashboard/headcount-chart";

export default function EmployeeDashboardPage() {
  return (
    <div className="space-y-6">
       <Card>
        <CardHeader>
          <CardTitle>Employee Dashboard</CardTitle>
          <CardDescription>
            Central hub for HR to monitor workforce metrics.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <DashboardStats />
        </CardContent>
      </Card>
       <Card>
          <CardHeader>
            <CardTitle>Department Headcount</CardTitle>
            <CardDescription>Distribution of employees across departments.</CardDescription>
          </CardHeader>
          <CardContent>
            <HeadcountChart />
          </CardContent>
        </Card>
    </div>
  );
}
