import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { leaveRequests } from "@/lib/placeholder-data";

export function LeaveRequests() {
  return (
    <div className="space-y-4">
      {leaveRequests.map((request, index) => (
        <div key={index} className="flex items-center gap-4">
          <Avatar className="h-9 w-9">
            <AvatarImage src={request.avatar} alt="Avatar" data-ai-hint="person face" />
            <AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="grid gap-1 flex-1">
            <p className="text-sm font-medium leading-none">{request.name}</p>
            <p className="text-sm text-muted-foreground">{request.leaveType} ({request.days} {request.days > 1 ? 'days' : 'day'})</p>
          </div>
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
        </div>
      ))}
    </div>
  );
}
