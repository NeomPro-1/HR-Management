import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function EmployeeDetailsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Employee Details</CardTitle>
          <CardDescription>
            Detailed information for a single employee.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">Select an employee to see their details.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
