import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const attendanceLog = [
    { date: "2024-07-22", status: "Present", checkIn: "09:01 AM", checkOut: "06:05 PM" },
    { date: "2024-07-21", status: "Present", checkIn: "08:55 AM", checkOut: "06:00 PM" },
    { date: "2024-07-20", status: "Weekend", checkIn: "-", checkOut: "-" },
    { date: "2024-07-19", status: "Weekend", checkIn: "-", checkOut: "-" },
    { date: "2024-07-18", status: "Sick Leave", checkIn: "-", checkOut: "-" },
];


export default function AttendancePage() {
    return (
        <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>My Attendance Log</CardTitle>
                        <CardDescription>Your attendance record for the last few days.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Check-in</TableHead>
                                    <TableHead>Check-out</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {attendanceLog.map(log => (
                                    <TableRow key={log.date}>
                                        <TableCell className="font-medium">{new Date(log.date).toLocaleDateString('en-IN', { weekday: 'short', month: 'long', day: 'numeric' })}</TableCell>
                                        <TableCell>
                                            <Badge variant={
                                                log.status === 'Present' ? 'default' : log.status === 'Weekend' ? 'secondary' : 'destructive'
                                            }>{log.status}</Badge>
                                        </TableCell>
                                        <TableCell>{log.checkIn}</TableCell>
                                        <TableCell>{log.checkOut}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
            <div className="lg:col-span-2">
                 <Card>
                    <CardHeader>
                        <CardTitle>Leave Calendar</CardTitle>
                        <CardDescription>Select a date to request leave.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <Calendar
                            mode="single"
                            className="rounded-md border"
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
