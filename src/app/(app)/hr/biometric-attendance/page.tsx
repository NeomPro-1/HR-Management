
'use client';

import * as React from 'react';
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
import {
  Pencil,
  Trash2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

type AttendanceStatus = "On Time" | "Late" | "Early" | "Absent";

const getImg = (id: string) => PlaceHolderImages.find(p => p.id === id)?.imageUrl || '';

const attendanceData = [
    { id: "EMP-001", name: "John Smith", avatar: getImg("emp1-avatar"), date: "25 Apr 2025", clockIn: "09:00 AM", clockOut: "06:00 PM", status: "On Time" as AttendanceStatus },
    { id: "EMP-002", name: "Sarah Johnson", avatar: getImg("emp2-avatar"), date: "25 Apr 2025", clockIn: "09:15 AM", clockOut: "06:05 PM", status: "Late" as AttendanceStatus },
    { id: "EMP-003", name: "Michael Chen", avatar: getImg("emp3-avatar"), date: "25 Apr 2025", clockIn: "08:55 AM", clockOut: "05:50 PM", status: "Early" as AttendanceStatus },
    { id: "EMP-004", name: "Emily Wilson", avatar: getImg("emp4-avatar"), date: "25 Apr 2025", clockIn: "-", clockOut: "-", status: "Absent" as AttendanceStatus },
    { id: "EMP-005", name: "David Kim", avatar: getImg("emp5-avatar"), date: "25 Apr 2025", clockIn: "09:02 AM", clockOut: "06:01 PM", status: "On Time" as AttendanceStatus },
    { id: "EMP-006", name: "Jessica Martinez", avatar: getImg("leave-avatar-1"), date: "25 Apr 2025", clockIn: "09:00 AM", clockOut: "06:00 PM", status: "On Time" as AttendanceStatus },
    { id: "EMP-007", name: "Robert Taylor", avatar: getImg("leave-avatar-2"), date: "25 Apr 2025", clockIn: "09:20 AM", clockOut: "06:15 PM", status: "Late" as AttendanceStatus },
    { id: "EMP-008", name: "Lisa Anderson", avatar: getImg("leave-avatar-3"), date: "25 Apr 2025", clockIn: "08:50 AM", clockOut: "05:45 PM", status: "Early" as AttendanceStatus },
    { id: "EMP-009", name: "Daniel Brown", avatar: getImg("leave-avatar-4"), date: "25 Apr 2025", clockIn: "09:05 AM", clockOut: "06:00 PM", status: "On Time" as AttendanceStatus },
    { id: "EMP-010", name: "Amanda Lee", avatar: getImg("user-avatar"), date: "25 Apr 2025", clockIn: "-", clockOut: "-", status: "Absent" as AttendanceStatus },
];

const getStatusVariant = (status: AttendanceStatus) => {
    switch (status) {
        case "On Time":
            return "default";
        case "Late":
            return "secondary";
        case "Absent":
            return "destructive";
        case "Early":
            return "outline";
        default:
            return "default";
    }
};

const getStatusClass = (status: AttendanceStatus) => {
    switch (status) {
        case "On Time":
            return "bg-green-500/20 text-green-700 border-green-500/30";
        case "Late":
            return "bg-orange-500/20 text-orange-700 border-orange-500/30";
        case "Absent":
            return "bg-red-500/20 text-red-700 border-red-500/30";
        case "Early":
            return "bg-blue-500/20 text-blue-700 border-blue-500/30";
        default:
            return "";
    }
}


export default function BiometricAttendancePage() {
    React.useEffect(() => {
        const timer = setTimeout(() => {
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <CardTitle className="text-2xl">April 2025 Attendance</CardTitle>
                    </div>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                        <Button variant="outline">Export as CSV</Button>
                        <Button>Request Sync</Button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Show</span>
                        <Select defaultValue="10">
                            <SelectTrigger className="w-[70px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="25">25</SelectItem>
                                <SelectItem value="50">50</SelectItem>
                            </SelectContent>
                        </Select>
                        <span className="text-sm text-muted-foreground">entries</span>
                    </div>
                    <div className="w-full md:w-auto">
                        <Input placeholder="Search..." className="w-full md:w-64" />
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead className="hidden sm:table-cell">ID</TableHead>
                            <TableHead>Employee</TableHead>
                            <TableHead className="hidden md:table-cell">Date</TableHead>
                            <TableHead className="hidden lg:table-cell">Clock In</TableHead>
                            <TableHead className="hidden lg:table-cell">Clock Out</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {attendanceData.map((entry) => (
                            <TableRow key={entry.id}>
                                <TableCell className="font-medium text-muted-foreground hidden sm:table-cell">{entry.id}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={entry.avatar} alt={entry.name} data-ai-hint="person face" />
                                            <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <span className="font-medium">{entry.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">{entry.date}</TableCell>
                                <TableCell className="hidden lg:table-cell">{entry.clockIn}</TableCell>
                                <TableCell className="hidden lg:table-cell">{entry.clockOut}</TableCell>
                                <TableCell>
                                    <Badge variant={getStatusVariant(entry.status)} className={cn("font-semibold", getStatusClass(entry.status))}>
                                        {entry.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-1">
                                         <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-700">
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter className="flex items-center justify-between py-4">
                <div className="text-sm text-muted-foreground">
                    Showing 1 to 10 of 26 entries
                </div>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                         <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </CardFooter>
        </Card>
    );
}
