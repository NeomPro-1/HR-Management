
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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PayslipPreview } from "@/components/payroll/payslip-preview";
import type { PayslipData } from "@/lib/placeholder-data";
import { useToast } from "@/hooks/use-toast";
import { ClientOnly } from "@/components/client-only";

export default function CreatePayslipPage() {
    React.useEffect(() => {
        const timer = setTimeout(() => {
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    const { toast } = useToast();
    const [employee, setEmployee] = React.useState({ id: "EMP001", name: "Alisha Sharma" });
    const [payPeriod, setPayPeriod] = React.useState("2024-07");

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

    const handleEarningChange = (index: number, field: 'description' | 'amount', value: string) => {
        const newEarnings = [...earnings];
        newEarnings[index][field] = value;
        setEarnings(newEarnings);
    };

    const handleDeductionChange = (index: number, field: 'description' | 'amount', value: string) => {
        const newDeductions = [...deductions];
        newDeductions[index][field] = value;
        setDeductions(newDeductions);
    };

    const handleLeaveChange = (index: number, field: 'type' | 'opening' | 'availed' | 'closing', value: string) => {
        const newLeaveSummary = [...leaveSummary];
        newLeaveSummary[index][field] = value;
        setLeaveSummary(newLeaveSummary);
    };

    const addEarning = () => setEarnings([...earnings, { description: "", amount: "" }]);
    const removeEarning = (index: number) => setEarnings(earnings.filter((_, i) => i !== index));
    
    const addDeduction = () => setDeductions([...deductions, { description: "", amount: "" }]);
    const removeDeduction = (index: number) => setDeductions(deductions.filter((_, i) => i !== index));

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast({
            title: "Payslip Saved",
            description: `The payslip for ${employee.name} for ${payPeriod} has been saved.`,
        });
    }

    const previewData: PayslipData = {
        id: "PREVIEW-001",
        employee: {
            name: employee.name,
            id: employee.id,
            department: "Engineering", // Example data
            designation: "Senior Frontend Developer", // Example data
            joiningDate: "15 Aug 2021", // Example data
            panNumber: "ABCDE1234F", // Example data
        },
        payPeriod: new Date(payPeriod).toLocaleString('default', { month: 'long', year: 'numeric' }),
        payDate: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric'}),
        earnings: earnings.map(e => ({...e, amount: parseFloat(e.amount) || 0})),
        deductions: deductions.map(d => ({...d, amount: parseFloat(d.amount) || 0})),
        leaveSummary: leaveSummary.map(l => ({
            ...l,
            opening: parseInt(l.opening) || 0,
            availed: parseInt(l.availed) || 0,
            closing: parseInt(l.closing) || 0,
        })),
        paymentDetails: {
            bankName: "HDFC Bank", // Example data
            accountNumber: "XXXX XXXX 1234", // Example data
            paymentMode: "Bank Transfer", // Example data
        },
    };

    return (
        <Card className="max-w-5xl mx-auto">
            <CardHeader>
                <CardTitle>Create/Edit Payslip</CardTitle>
                <CardDescription>Generate a new payslip or edit an existing one for an employee.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="employee">Select Employee</Label>
                             <Select onValueChange={(value) => {
                                 const [id, name] = value.split('|');
                                 setEmployee({id, name});
                             }} defaultValue={`${employee.id}|${employee.name}`}>
                                <SelectTrigger id="employee">
                                    <SelectValue placeholder="Select an employee" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="EMP001|Alisha Sharma">Alisha Sharma (EMP001)</SelectItem>
                                    <SelectItem value="EMP002|Rohan Verma">Rohan Verma (EMP002)</SelectItem>
                                    <SelectItem value="EMP003|Priya Singh">Priya Singh (EMP003)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="pay-period">Pay Period</Label>
                            <Input id="pay-period" type="month" value={payPeriod} onChange={(e) => setPayPeriod(e.target.value)} />
                        </div>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-green-600">Earnings</h3>
                            <div className="space-y-4">
                                {earnings.map((earning, index) => (
                                    <div key={index} className="flex flex-wrap sm:flex-nowrap items-end gap-2">
                                        <div className="grid flex-1 min-w-[150px] gap-1.5">
                                            <Label htmlFor={`earning-desc-${index}`}>Description</Label>
                                            <Input id={`earning-desc-${index}`} value={earning.description} onChange={e => handleEarningChange(index, 'description', e.target.value)} />
                                        </div>
                                        <div className="grid w-full sm:w-32 gap-1.5">
                                            <Label htmlFor={`earning-amount-${index}`}>Amount</Label>
                                            <Input id={`earning-amount-${index}`} type="number" value={earning.amount} onChange={e => handleEarningChange(index, 'amount', e.target.value)} />
                                        </div>
                                        <Button type="button" variant="ghost" size="icon" className="text-muted-foreground" onClick={() => removeEarning(index)}>
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
                                    <div key={index} className="flex flex-wrap sm:flex-nowrap items-end gap-2">
                                        <div className="grid flex-1 min-w-[150px] gap-1.5">
                                            <Label htmlFor={`deduction-desc-${index}`}>Description</Label>
                                            <Input id={`deduction-desc-${index}`} value={deduction.description} onChange={e => handleDeductionChange(index, 'description', e.target.value)} />
                                        </div>
                                        <div className="grid w-full sm:w-32 gap-1.5">
                                            <Label htmlFor={`deduction-amount-${index}`}>Amount</Label>
                                            <Input id={`deduction-amount-${index}`} type="number" value={deduction.amount} onChange={e => handleDeductionChange(index, 'amount', e.target.value)} />
                                        </div>
                                        <Button type="button" variant="ghost" size="icon" className="text-muted-foreground" onClick={() => removeDeduction(index)}>
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
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="min-w-[200px]">Leave Type</TableHead>
                                        <TableHead className="w-28">Opening</TableHead>
                                        <TableHead className="w-28">Availed</TableHead>
                                        <TableHead className="w-28">Closing</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {leaveSummary.map((leave, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Input value={leave.type} onChange={e => handleLeaveChange(index, 'type', e.target.value)} />
                                            </TableCell>
                                            <TableCell>
                                                <Input type="number" value={leave.opening} onChange={e => handleLeaveChange(index, 'opening', e.target.value)} />
                                            </TableCell>
                                            <TableCell>
                                                <Input type="number" value={leave.availed} onChange={e => handleLeaveChange(index, 'availed', e.target.value)} />
                                            </TableCell>
                                            <TableCell>
                                                <Input type="number" value={leave.closing} onChange={e => handleLeaveChange(index, 'closing', e.target.value)} />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                    <Separator />

                    <div className="flex flex-col sm:flex-row justify-end gap-4">
                        <Button variant="outline" type="button" className="w-full sm:w-auto">Cancel</Button>
                        <ClientOnly>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" type="button" className="w-full sm:w-auto">Preview</Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl">
                                    <DialogHeader>
                                    <DialogTitle>Payslip Preview</DialogTitle>
                                    </DialogHeader>
                                    <PayslipPreview data={previewData} />
                                </DialogContent>
                            </Dialog>
                        </ClientOnly>
                        <Button type="submit" className="w-full sm:w-auto">Save Payslip</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

    

