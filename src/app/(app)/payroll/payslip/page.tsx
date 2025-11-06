
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { payslipData } from "@/lib/placeholder-data";
import { Printer, Save, Download, Send } from "lucide-react";
import React from 'react';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
};

export default function PayslipPage() {
    React.useEffect(() => {
        const timer = setTimeout(() => {
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const { employee, payPeriod, payDate, earnings, deductions, leaveSummary, paymentDetails } = payslipData;
    const totalEarnings = earnings.reduce((sum, item) => sum + item.amount, 0);
    const totalDeductions = deductions.reduce((sum, item) => sum + item.amount, 0);
    const netSalary = totalEarnings - totalDeductions;

    return (
        <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-9">
                <Card>
                    <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                            <div className="flex items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-primary">
                                    <path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.5 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
                                    <path d="M12 4a8 8 0 1 1 0 16 4 4 0 0 0 0-8 4 4 0 0 0 0-8Zm0 1.5a6.5 6.5 0 1 0 0 13 2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0-5 6.5 6.5 0 0 0 0-3Z" />
                                </svg>
                                <div>
                                    <h2 className="text-xl font-bold">SynergyHR Inc.</h2>
                                    <p className="text-sm text-muted-foreground">123 Business Bay, Bangalore, Karnataka, India</p>
                                </div>
                            </div>
                            <div className="text-left sm:text-right w-full sm:w-auto">
                                <h1 className="text-2xl font-bold">Payslip</h1>
                                <p className="text-muted-foreground">For {payPeriod}</p>
                            </div>
                        </div>
                        <Separator className="mb-6"/>

                        {/* Employee Info */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 mb-6 text-sm">
                            <div><strong className="text-muted-foreground block">Employee ID:</strong> {employee.id}</div>
                            <div><strong className="text-muted-foreground block">Name:</strong> {employee.name}</div>
                            <div><strong className="text-muted-foreground block">Department:</strong> {employee.department}</div>
                            <div><strong className="text-muted-foreground block">Designation:</strong> {employee.designation}</div>
                            <div><strong className="text-muted-foreground block">Joining Date:</strong> {employee.joiningDate}</div>
                            <div><strong className="text-muted-foreground block">PAN:</strong> {employee.panNumber}</div>
                            <div><strong className="text-muted-foreground block">Bank:</strong> {paymentDetails.bankName}</div>
                            <div><strong className="text-muted-foreground block">Account No:</strong> {paymentDetails.accountNumber}</div>
                        </div>

                        {/* Earnings and Deductions */}
                        <div className="grid md:grid-cols-2 gap-8 mb-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-green-600 border-b pb-1">Earnings</h3>
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableBody>
                                            {earnings.map((item, index) => (
                                                <TableRow key={index}>
                                                    <TableCell className="py-2">{item.description}</TableCell>
                                                    <TableCell className="text-right py-2">{formatCurrency(item.amount)}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                                <div className="flex justify-between items-center mt-2 p-2 bg-muted rounded-md font-semibold">
                                    <span>Total Earnings</span>
                                    <span>{formatCurrency(totalEarnings)}</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-red-600 border-b pb-1">Deductions</h3>
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableBody>
                                            {deductions.map((item, index) => (
                                                <TableRow key={index}>
                                                    <TableCell className="py-2">{item.description}</TableCell>
                                                    <TableCell className="text-right py-2">{formatCurrency(item.amount)}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                                 <div className="flex justify-between items-center mt-2 p-2 bg-muted rounded-md font-semibold">
                                    <span>Total Deductions</span>
                                    <span>{formatCurrency(totalDeductions)}</span>
                                </div>
                            </div>
                        </div>
                        
                        <Separator className="my-6"/>

                        {/* Leave Summary */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Leave Summary</h3>
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Leave Type</TableHead>
                                            <TableHead className="text-center">Opening</TableHead>
                                            <TableHead className="text-center">Availed</TableHead>
                                            <TableHead className="text-center">Closing</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {leaveSummary.map((leave, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{leave.type}</TableCell>
                                                <TableCell className="text-center">{leave.opening}</TableCell>
                                                <TableCell className="text-center">{leave.availed}</TableCell>
                                                <TableCell className="text-center">{leave.closing}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                        
                        {/* Net Pay */}
                        <div className="bg-primary/10 text-primary-foreground p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                            <h3 className="text-lg font-bold text-primary">Net Pay</h3>
                            <p className="text-2xl font-bold text-primary">{formatCurrency(netSalary)}</p>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2 text-right">Net pay in words: One Lakh Forty Five Thousand Rupees only.</p>

                        <div className="text-center mt-8 text-xs text-muted-foreground">
                            This is a computer-generated payslip and does not require a signature.
                        </div>

                    </CardContent>
                </Card>
            </div>
            <div className="lg:col-span-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <Button className="w-full justify-start gap-2" variant="outline"><Printer /> Print</Button>
                        <Button className="w-full justify-start gap-2" variant="outline"><Save /> Save as PDF</Button>
                        <Button className="w-full justify-start gap-2" variant="outline"><Download /> Download</Button>
                        <Button className="w-full justify-start gap-2"><Send /> Send via Email</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

    
