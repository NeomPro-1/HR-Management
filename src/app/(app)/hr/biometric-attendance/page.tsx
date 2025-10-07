import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, MoreHorizontal, Download, RefreshCw } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const devices = [
  { id: "ZD-101", name: "Main Entrance", status: "Online", lastSync: "2 minutes ago" },
  { id: "ZD-102", name: "Cafeteria", status: "Online", lastSync: "5 minutes ago" },
  { id: "ZD-103", name: "Warehouse", status: "Offline", lastSync: "2 hours ago" },
];

const attendanceLogs = [
  { logId: "L001", empId: "EMP001", name: "Alisha Sharma", device: "Main Entrance", timestamp: "2024-07-25 09:01:15 AM", type: "Check-in" },
  { logId: "L002", empId: "EMP002", name: "Rohan Verma", device: "Main Entrance", timestamp: "2024-07-25 09:03:22 AM", type: "Check-in" },
  { logId: "L003", empId: "EMP004", name: "Amit Patel", device: "Cafeteria", timestamp: "2024-07-25 01:15:45 PM", type: "Check-in" },
  { logId: "L004", empId: "EMP001", name: "Alisha Sharma", device: "Main Entrance", timestamp: "2024-07-25 06:05:30 PM", type: "Check-out" },
];


export default function BiometricAttendancePage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <CardTitle>Biometric Devices</CardTitle>
            <CardDescription>Manage and monitor your attendance hardware.</CardDescription>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Device
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Device Name</TableHead>
                <TableHead className="hidden sm:table-cell">Device ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden sm:table-cell">Last Sync</TableHead>
                <TableHead><span className="sr-only">Actions</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {devices.map((d) => (
                <TableRow key={d.id}>
                  <TableCell className="font-medium">{d.name}</TableCell>
                  <TableCell className="hidden sm:table-cell">{d.id}</TableCell>
                  <TableCell>
                    <Badge variant={d.status === "Online" ? "default" : "destructive"}>{d.status}</Badge>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{d.lastSync}</TableCell>
                  <TableCell className="text-right">
                     <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Logs</DropdownMenuItem>
                        <DropdownMenuItem>Sync Now</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <CardTitle>Real-time Attendance Log</CardTitle>
            <CardDescription>Live feed of punches from all biometric devices.</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
            </Button>
            <Button>
                <Download className="mr-2 h-4 w-4" />
                Export Logs
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Device</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Type</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {attendanceLogs.map((log) => (
                    <TableRow key={log.logId}>
                        <TableCell>
                            <div className="font-medium">{log.name}</div>
                            <div className="text-sm text-muted-foreground">{log.empId}</div>
                        </TableCell>
                        <TableCell>{log.device}</TableCell>
                        <TableCell>{new Date(log.timestamp).toLocaleString('en-IN')}</TableCell>
                        <TableCell>{log.type}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
