
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { leaveRequests } from "@/lib/placeholder-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default async function AdminLeavePage() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leave Requests</CardTitle>
        <CardDescription>Approve or reject leave requests from your team.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Leave Type</TableHead>
              <TableHead>Days</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaveRequests.map((request) => (
              <TableRow key={request.name}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={request.avatar} alt={request.name} data-ai-hint="person face" />
                      <AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="font-medium">{request.name}</div>
                  </div>
                </TableCell>
                <TableCell>{request.leaveType}</TableCell>
                <TableCell>{request.days}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      request.status === "Approved"
                        ? "default"
                        : request.status === "Pending"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {request.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  {request.status === "Pending" && (
                    <div className="flex gap-2 justify-end">
                      <Button variant="outline" size="icon">
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button variant="destructive" size="icon">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

    