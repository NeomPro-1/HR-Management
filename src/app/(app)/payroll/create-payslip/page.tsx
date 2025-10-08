
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { PlusCircle, Trash2 } from "lucide-react";

export default function CreatePayslipPage() {
    return (
        <Card className="max-w-4xl mx-auto">
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

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-green-600">Earnings</h3>
                        <div className="space-y-4">
                            <div className="flex items-end gap-4">
                                <div className="grid flex-1 gap-1.5">
                                    <Label htmlFor="earning-desc-1">Description</Label>
                                    <Input id="earning-desc-1" defaultValue="Basic Salary" />
                                </div>
                                <div className="grid w-40 gap-1.5">
                                    <Label htmlFor="earning-amount-1">Amount</Label>
                                    <Input id="earning-amount-1" type="number" defaultValue="120000" />
                                </div>
                                <Button variant="ghost" size="icon" className="text-muted-foreground">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                             <div className="flex items-end gap-4">
                                <div className="grid flex-1 gap-1.5">
                                    <Input id="earning-desc-2" defaultValue="House Rent Allowance" />
                                </div>
                                <div className="grid w-40 gap-1.5">
                                    <Input id="earning-amount-2" type="number" defaultValue="20000" />
                                </div>
                                <Button variant="ghost" size="icon" className="text-muted-foreground">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <Button variant="outline" className="mt-4">
                            <PlusCircle className="mr-2 h-4 w-4" /> Add Earning
                        </Button>
                    </div>

                    <Separator />
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-red-600">Deductions</h3>
                        <div className="space-y-4">
                            <div className="flex items-end gap-4">
                                <div className="grid flex-1 gap-1.5">
                                    <Label htmlFor="deduction-desc-1">Description</Label>
                                    <Input id="deduction-desc-1" defaultValue="Income Tax" />
                                </div>
                                <div className="grid w-40 gap-1.5">
                                    <Label htmlFor="deduction-amount-1">Amount</Label>
                                    <Input id="deduction-amount-1" type="number" defaultValue="15000" />
                                </div>
                                <Button variant="ghost" size="icon" className="text-muted-foreground">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <Button variant="outline" className="mt-4">
                            <PlusCircle className="mr-2 h-4 w-4" /> Add Deduction
                        </Button>
                    </div>

                    <Separator />

                    <div className="flex justify-end gap-4">
                        <Button variant="outline">Cancel</Button>
                        <Button>Save Payslip</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
