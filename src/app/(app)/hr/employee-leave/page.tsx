
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const leaveHistory = [
  { id: 1, type: "Sick Leave", date: "2024-07-18", days: 1, status: "Approved" },
  { id: 2, type: "Vacation", date: "2024-06-10", days: 5, status: "Approved" },
  { id: 3, type: "Personal", date: "2024-05-01", days: 1, status: "Approved" },
];

const leaveBalances = [
    { type: "Annual Leave", used: 5, total: 20 },
    { type: "Sick Leave", used: 2, total: 12 },
    { type: "Personal Leave", used: 1, total: 5 },
]

export default async function EmployeeLeavePage() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return (
    <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle>Leave Balances</CardTitle>
                <CardDescription>Your available leave balances for the year.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                    {leaveBalances.map(balance => (
                        <Card key={balance.type}>
                            <CardHeader className="pb-2">
                                <CardDescription>{balance.type}</CardDescription>
                                <CardTitle className="text-4xl">{balance.total - balance.used}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-xs text-muted-foreground">
                                    {balance.used} of {balance.total} days used
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </CardContent>
        </Card>

      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <CardTitle>Leave History</CardTitle>
            <CardDescription>Your past leave requests and their statuses.</CardDescription>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Request Leave
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Leave Type</TableHead>
                <TableHead>Days</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaveHistory.map((leave) => (
                <TableRow key={leave.id}>
                  <TableCell className="font-medium">{new Date(leave.date).toLocaleDateString()}</TableCell>
                  <TableCell>{leave.type}</TableCell>
                  <TableCell>{leave.days}</TableCell>
                  <TableCell>
                    <Badge variant={leave.status === "Approved" ? "default" : "destructive"}>
                      {leave.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

    