
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { DashboardStats } from "@/components/hr-dashboard/dashboard-stats";
import { AttendanceChart } from "@/components/hr-dashboard/attendance-chart";
import { LeaveRequests } from "@/components/hr-dashboard/leave-requests";
import { HeadcountChart } from "@/components/hr-dashboard/headcount-chart";

export default function EmployeeDashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardStats />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Attendance Overview</CardTitle>
            <CardDescription>Daily attendance for the last 7 days.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <AttendanceChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Leave Requests</CardTitle>
            <CardDescription>A summary of recent leave submissions.</CardDescription>
          </CardHeader>
          <CardContent>
            <LeaveRequests />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
         <Card>
          <CardHeader>
            <CardTitle>Department Headcount</CardTitle>
            <CardDescription>Distribution of employees across departments.</CardDescription>
          </CardHeader>
          <CardContent>
            <HeadcountChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Payroll</CardTitle>
            <CardDescription>Next payroll cycle is on July 31, 2024.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <p className="text-4xl font-bold">₹ 12,50,000</p>
                <p className="text-sm text-muted-foreground">Estimated Total Payout</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
