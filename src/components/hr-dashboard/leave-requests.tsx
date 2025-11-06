'use client';
import { leaveRequests } from "@/lib/placeholder-data"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DashboardCardSkeleton } from "./dashboard-card-skeleton"

interface LeaveRequestsProps {
  isLoading: boolean;
}

export function LeaveRequests({ isLoading }: LeaveRequestsProps) {
  if (isLoading) {
    return <DashboardCardSkeleton />;
  }
  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Employee</TableHead>
          <TableHead>Days</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leaveRequests.slice(0, 4).map((request) => (
          <TableRow key={request.name}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={request.avatar} alt={request.name} data-ai-hint="person face" />
                  <AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{request.name}</span>
              </div>
            </TableCell>
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
