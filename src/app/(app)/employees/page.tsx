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
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Skeleton } from '@/components/ui/skeleton';
import { AddEmployeeForm } from '@/components/hr/add-employee-form';
import { employees as placeholderEmployees } from '@/lib/placeholder-data';

interface UserProfile {
  id: string;
  name: string;
  avatar?: string;
  email: string;
  department: string;
  role: string;
  status: 'Active' | 'On Leave' | 'Inactive';
  joiningDate: string;
}

export default function EmployeesPage() {
  const [employees, setEmployees] = React.useState<UserProfile[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    // Simulate loading data
    const timer = setTimeout(() => {
       const formattedEmployees = placeholderEmployees.map(emp => ({
        ...emp,
        status: emp.status as 'Active' | 'On Leave' | 'Inactive'
      }));
      setEmployees(formattedEmployees);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const formatDate = (dateString?: string) => {
    if (!mounted || !dateString) return '';
    return new Date(dateString).toLocaleDateString();
  };


  const renderSkeletonRow = (isMobile: boolean, key: number) => (
    isMobile ? (
       <div key={key} className="border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-3 w-[150px]" />
            </div>
          </div>
          <Skeleton className="h-8 w-8" />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-8 w-full" />)}
        </div>
      </div>
    ) : (
      <TableRow key={key}>
        <TableCell>
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-3 w-[150px]" />
            </div>
          </div>
        </TableCell>
        {[...Array(4)].map((_, i) => <TableCell key={i}><Skeleton className="h-6 w-full" /></TableCell>)}
        <TableCell><Skeleton className="h-8 w-8" /></TableCell>
      </TableRow>
    )
  );

  if (isLoading || !mounted) {
    return (
       <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <CardTitle>Employee Management</CardTitle>
                    <CardDescription>View, add, and manage employee profiles.</CardDescription>
                </div>
              <AddEmployeeForm />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="md:hidden">
              {[...Array(3)].map((_, i) => renderSkeletonRow(true, i))}
            </div>
            <div className="hidden md:block">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Joining Date</TableHead>
                    <TableHead><span className="sr-only">Actions</span></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[...Array(5)].map((_, i) => renderSkeletonRow(false, i))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
       </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
                <CardTitle>Employee Management</CardTitle>
                <CardDescription>View, add, and manage employee profiles.</CardDescription>
            </div>
          <AddEmployeeForm />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {/* Mobile View */}
        <div className="md:hidden">
          {!isLoading && employees?.map((employee) => {
            const fullName = employee.name;
            const fallback = fullName.split(' ').map(n => n[0]).join('');
            return (
              <div key={employee.id} className="border-b p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={employee.avatar} alt={fullName} data-ai-hint="person face" />
                      <AvatarFallback>{fallback}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{fullName}</div>
                      <div className="text-sm text-muted-foreground">{employee.email}</div>
                    </div>
                  </div>
                  <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Department</div>
                    <div>{employee.department}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Role</div>
                    <div>{employee.role}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Status</div>
                    <div>
                      <Badge variant={employee.status === "Active" ? "default" : "secondary"}>
                        {employee.status}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Joining Date</div>
                    <div>{formatDate(employee.joiningDate)}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block overflow-x-auto">
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="min-w-[250px]">Employee</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joining Date</TableHead>
                <TableHead>
                    <span className="sr-only">Actions</span>
                </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {!isLoading && employees?.map((employee) => {
                  const fullName = employee.name;
                   const fallback = fullName.split(' ').map(n => n[0]).join('');
                  return (
                    <TableRow key={employee.id}>
                        <TableCell>
                        <div className="flex items-center gap-3">
                            <Avatar>
                            <AvatarImage src={employee.avatar} alt={fullName} data-ai-hint="person face" />
                            <AvatarFallback>{fallback}</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-medium">{fullName}</div>
                                <div className="text-sm text-muted-foreground">{employee.email}</div>
                            </div>
                        </div>
                        </TableCell>
                        <TableCell>{employee.department}</TableCell>
                        <TableCell>{employee.role}</TableCell>
                        <TableCell>
                        <Badge variant={employee.status === "Active" ? "default" : "secondary"}>
                            {employee.status}
                        </Badge>
                        </TableCell>
                        <TableCell>
                          {formatDate(employee.joiningDate)}
                        </TableCell>
                        <TableCell>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
            </Table>
        </div>
         {!isLoading && (!employees || employees.length === 0) && (
            <div className="text-center p-8 text-muted-foreground">
                No employees found.
            </div>
        )}
      </CardContent>
    </Card>
  );
}
