

'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { employees } from "@/lib/placeholder-data";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { CircleDollarSign, UserCheck, UserCog } from 'lucide-react';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function PayrollItemsPage() {
  const [selectedMonth, setSelectedMonth] = useState('July 2024');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const totalPayroll = employees.reduce((sum, emp) => sum + (emp.salary || 0), 0);
  const employeesProcessed = employees.filter(e => e.status === 'Active').length;
  const employeesPending = employees.length - employeesProcessed;

  const payrollStats = [
      { title: "Total Payroll", value: formatCurrency(totalPayroll), icon: <CircleDollarSign className="h-6 w-6 text-muted-foreground" /> },
      { title: "Employees Processed", value: employeesProcessed, icon: <UserCheck className="h-6 w-6 text-muted-foreground" /> },
      { title: "Employees Pending", value: employeesPending, icon: <UserCog className="h-6 w-6 text-muted-foreground" /> },
  ];

  const handleRunPayroll = () => {
    setIsProcessing(true);
    toast({
        title: 'Processing Payroll...',
        description: `Running payroll for ${selectedMonth}.`,
    });

    setTimeout(() => {
        setIsProcessing(false);
        toast({
            title: 'Payroll Complete!',
            description: `Payroll for ${selectedMonth} has been successfully processed. Total payout: ${formatCurrency(totalPayroll)}`,
        });
    }, 2000);
  };

  return (
    <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
            {payrollStats.map(stat => (
                <Card key={stat.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                        {stat.icon}
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
        <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
                <CardTitle>Payroll Items</CardTitle>
                <CardDescription>Review and process monthly payroll for your team.</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                <Select defaultValue="july-2024" onValueChange={(value) => setSelectedMonth(value === 'july-2024' ? 'July 2024' : value === 'june-2024' ? 'June 2024' : 'May 2024')}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Select Month" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="july-2024">July 2024</SelectItem>
                        <SelectItem value="june-2024">June 2024</SelectItem>
                        <SelectItem value="may-2024">May 2024</SelectItem>
                    </SelectContent>
                </Select>
                <Button onClick={handleRunPayroll} disabled={isProcessing} className="w-full sm:w-auto">
                    {isProcessing ? 'Processing...' : `Run Payroll`}
                </Button>
            </div>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Employee</TableHead>
                        <TableHead className="hidden sm:table-cell">Role</TableHead>
                        <TableHead className="text-right">Monthly Salary</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {employees.map(employee => (
                        <TableRow key={employee.id}>
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage src={employee.avatar} alt={employee.name} data-ai-hint="person face" />
                                        <AvatarFallback>{employee.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-medium">{employee.name}</div>
                                        <div className="text-sm text-muted-foreground hidden sm:inline">{employee.email}</div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">{employee.role}</TableCell>
                            <TableCell className="text-right font-medium">{formatCurrency(employee.salary || 0)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex justify-end items-center mt-6 pt-4 border-t">
                <div className="text-right">
                    <p className="text-muted-foreground">Total Payroll for {selectedMonth}</p>
                    <p className="text-2xl font-bold">{formatCurrency(totalPayroll)}</p>
                </div>
            </div>
        </CardContent>
        </Card>
    </div>
  );
}
