import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

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
          <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">Dashboard content coming soon...</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
