
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { PlusCircle, Trash2 } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";

export default function CreatePayslipPage() {
    const [earnings, setEarnings] = React.useState([
        { description: "Basic Salary", amount: "120000" },
        { description: "House Rent Allowance", amount: "20000" },
        { description: "Conveyance Allowance", amount: "10000" },
    ]);
    const [deductions, setDeductions] = React.useState([
        { description: "Income Tax", amount: "15000" },
        { description: "Provident Fund", amount: "8000" },
    ]);
    const [leaveSummary, setLeaveSummary] = React.useState([
        { type: "Casual Leave", opening: "10", availed: "2", closing: "8" },
        { type: "Sick Leave", opening: "12", availed: "1", closing: "11" },
        { type: "Earned Leave", opening: "15", availed: "5", closing: "10" },
    ]);

    const addEarning = () => setEarnings([...earnings, { description: "", amount: "" }]);
    const removeEarning = (index: number) => setEarnings(earnings.filter((_, i) => i !== index));
    
    const addDeduction = () => setDeductions([...deductions, { description: "", amount: "" }]);
    const removeDeduction = (index: number) => setDeductions(deductions.filter((_, i) => i !== index));

    return (
        <Card className="max-w-5xl mx-auto">
            <CardHeader>
                <CardTitle>Create/Edit Payslip</CardTitle>
                <CardDescription>Generate a new payslip or edit an existing one for an employee.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="employee">Select Employee</Label>
                             <Select>
                                <SelectTrigger id="employee">
                                    <SelectValue placeholder="Select an employee" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="emp001">Alisha Sharma (EMP001)</SelectItem>
                                    <SelectItem value="emp002">Rohan Verma (EMP002)</SelectItem>
                                    <SelectItem value="emp003">Priya Singh (EMP003)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="pay-period">Pay Period</Label>
                            <Input id="pay-period" type="month" defaultValue="2024-07" />
                        </div>
                    </div>

                    <Separator />

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-green-600">Earnings</h3>
                            <div className="space-y-4">
                                {earnings.map((earning, index) => (
                                    <div key={index} className="flex items-end gap-2">
                                        <div className="grid flex-1 gap-1.5">
                                            <Label htmlFor={`earning-desc-${index}`}>Description</Label>
                                            <Input id={`earning-desc-${index}`} defaultValue={earning.description} />
                                        </div>
                                        <div className="grid w-32 gap-1.5">
                                            <Label htmlFor={`earning-amount-${index}`}>Amount</Label>
                                            <Input id={`earning-amount-${index}`} type="number" defaultValue={earning.amount} />
                                        </div>
                                        <Button variant="ghost" size="icon" className="text-muted-foreground" onClick={() => removeEarning(index)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                            <Button type="button" variant="outline" className="mt-4" onClick={addEarning}>
                                <PlusCircle className="mr-2 h-4 w-4" /> Add Earning
                            </Button>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-red-600">Deductions</h3>
                            <div className="space-y-4">
                                 {deductions.map((deduction, index) => (
                                    <div key={index} className="flex items-end gap-2">
                                        <div className="grid flex-1 gap-1.5">
                                            <Label htmlFor={`deduction-desc-${index}`}>Description</Label>
                                            <Input id={`deduction-desc-${index}`} defaultValue={deduction.description} />
                                        </div>
                                        <div className="grid w-32 gap-1.5">
                                            <Label htmlFor={`deduction-amount-${index}`}>Amount</Label>
                                            <Input id={`deduction-amount-${index}`} type="number" defaultValue={deduction.amount} />
                                        </div>
                                        <Button variant="ghost" size="icon" className="text-muted-foreground" onClick={() => removeDeduction(index)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                            <Button type="button" variant="outline" className="mt-4" onClick={addDeduction}>
                                <PlusCircle className="mr-2 h-4 w-4" /> Add Deduction
                            </Button>
                        </div>
                    </div>

                    <Separator />
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Leave Summary</h3>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Leave Type</TableHead>
                                    <TableHead className="w-28">Opening</TableHead>
                                    <TableHead className="w-28">Availed</TableHead>
                                    <TableHead className="w-28">Closing</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {leaveSummary.map((leave, index) => (
                                     <TableRow key={index}>
                                        <TableCell>
                                            <Input defaultValue={leave.type} />
                                        </TableCell>
                                        <TableCell>
                                            <Input type="number" defaultValue={leave.opening} />
                                        </TableCell>
                                        <TableCell>
                                            <Input type="number" defaultValue={leave.availed} />
                                        </TableCell>
                                         <TableCell>
                                            <Input type="number" defaultValue={leave.closing} />
                                        </TableCell>
                                     </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <Separator />

                    <div className="flex justify-end gap-4">
                        <Button variant="outline" type="button">Cancel</Button>
                        <Button type="submit">Save Payslip</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
