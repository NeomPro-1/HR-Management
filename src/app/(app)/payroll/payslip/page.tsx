
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { payslipData } from "@/lib/placeholder-data";
import { Printer } from "lucide-react";

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
};

export default function PayslipPage() {
    const { employee, payPeriod, earnings, deductions } = payslipData;
    const totalEarnings = earnings.reduce((sum, item) => sum + item.amount, 0);
    const totalDeductions = deductions.reduce((sum, item) => sum + item.amount, 0);
    const netSalary = totalEarnings - totalDeductions;

    return (
        <Card className="max-w-4xl mx-auto">
            <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <CardTitle>Payslip for {payPeriod}</CardTitle>
                    <CardDescription>Generated for {employee.name} ({employee.id})</CardDescription>
                </div>
                <Button variant="outline">
                    <Printer className="mr-2 h-4 w-4" />
                    Print Payslip
                </Button>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <h3 className="font-semibold mb-2">Company Details</h3>
                        <p className="text-sm text-muted-foreground">SynergyHR Inc.</p>
                        <p className="text-sm text-muted-foreground">123 Business Bay, Bangalore</p>
                        <p className="text-sm text-muted-foreground">Karnataka, India</p>
                    </div>
                    <div className="md:text-right">
                        <h3 className="font-semibold mb-2">Employee Details</h3>
                        <p className="text-sm text-muted-foreground">Name: {employee.name}</p>
                        <p className="text-sm text-muted-foreground">Department: {employee.department}</p>
                        <p className="text-sm text-muted-foreground">Designation: {employee.designation}</p>
                        <p className="text-sm text-muted-foreground">Joining Date: {employee.joiningDate}</p>
                    </div>
                </div>

                <Separator className="my-6" />

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-green-600">Earnings</h3>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Description</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {earnings.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.description}</TableCell>
                                        <TableCell className="text-right">{formatCurrency(item.amount)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                         <div className="flex justify-between items-center mt-4 p-2 bg-muted rounded-md">
                            <span className="font-semibold">Total Earnings</span>
                            <span className="font-semibold text-green-600">{formatCurrency(totalEarnings)}</span>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-lg font-semibold mb-4 text-red-600">Deductions</h3>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Description</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {deductions.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.description}</TableCell>
                                        <TableCell className="text-right">{formatCurrency(item.amount)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                         <div className="flex justify-between items-center mt-4 p-2 bg-muted rounded-md">
                            <span className="font-semibold">Total Deductions</span>
                            <span className="font-semibold text-red-600">{formatCurrency(totalDeductions)}</span>
                        </div>
                    </div>
                </div>
                
                <Separator className="my-6" />

                <div className="flex justify-end">
                    <div className="w-full max-w-sm space-y-2">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Total Earnings:</span>
                            <span>{formatCurrency(totalEarnings)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Total Deductions:</span>
                            <span>{formatCurrency(totalDeductions)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-lg font-bold">
                            <span>Net Salary:</span>
                            <span>{formatCurrency(netSalary)}</span>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8 text-sm text-muted-foreground">
                    This is a computer-generated payslip and does not require a signature.
                </div>
            </CardContent>
        </Card>
    );
}
