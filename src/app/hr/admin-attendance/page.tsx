
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default async function AdminAttendancePage() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Attendance Policy Management</CardTitle>
          <CardDescription>
            Define shift timings, grace periods, and other attendance rules for your organization.
          </CardDescription>
        </CardHeader>
        <CardContent>
           <div className="flex items-center justify-center h-48 border-2 border-dashed rounded-lg">
            <Button variant="outline">
              <PlusCircle className="mr-2 h-4 w-4" />
              Create New Policy
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Team Attendance Calendar</CardTitle>
          <CardDescription>
            Visualize attendance trends and spot irregularities.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
           <Calendar
              mode="single"
              className="rounded-md border"
            />
        </CardContent>
      </Card>
    </div>
  );
}

    
