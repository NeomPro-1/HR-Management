
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { employees } from "@/lib/placeholder-data";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function PayrollPage() {
  const [selectedMonth, setSelectedMonth] = useState('July 2024');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const totalPayroll = employees.reduce((sum, emp) => sum + (emp.salary || 0), 0);

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
    <Card>
      <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
            <CardTitle>Payroll Management</CardTitle>
            <CardDescription>Review and process monthly payroll for your team.</CardDescription>
        </div>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Select defaultValue="july-2024" onValueChange={(value) => setSelectedMonth(value === 'july-2024' ? 'July 2024' : value === 'june-2024' ? 'June 2024' : 'May 2024')}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Month" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="july-2024">July 2024</SelectItem>
                    <SelectItem value="june-2024">June 2024</SelectItem>
                    <SelectItem value="may-2024">May 2024</SelectItem>
                </SelectContent>
            </Select>
            <Button onClick={handleRunPayroll} disabled={isProcessing}>
                {isProcessing ? 'Processing...' : `Run Payroll`}
            </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Role</TableHead>
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
                                    <div className="text-sm text-muted-foreground">{employee.email}</div>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell>{employee.role}</TableCell>
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
  );
}
