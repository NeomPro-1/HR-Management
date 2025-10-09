
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
import { MoreHorizontal, PlusCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Skeleton } from '@/components/ui/skeleton';

interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  email: string;
  department: string;
  jobTitle: string;
  employeeStatus: 'Active' | 'On Leave' | 'Inactive';
  dateOfJoining: string;
}

export default function EmployeesPage() {
  const employees: UserProfile[] = [];
  const isLoading = false;

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

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
                <CardTitle>Employee Management</CardTitle>
                <CardDescription>View, add, and manage employee profiles.</CardDescription>
            </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Add Employee
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {/* Mobile View */}
        <div className="md:hidden">
          {isLoading && [...Array(1)].map((_, i) => renderSkeletonRow(true, i))}
          {!isLoading && employees?.map((employee) => {
            const fullName = `${employee.firstName} ${employee.lastName}`;
            return (
              <div key={employee.id} className="border-b p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={employee.avatarUrl} alt={fullName} data-ai-hint="person face" />
                      <AvatarFallback>{employee.firstName?.charAt(0)}{employee.lastName?.charAt(0)}</AvatarFallback>
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
                    <div>{employee.jobTitle}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Status</div>
                    <div>
                      <Badge variant={employee.employeeStatus === "Active" ? "default" : "secondary"}>
                        {employee.employeeStatus}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Joining Date</div>
                    <div>{employee.dateOfJoining}</div>
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
                {isLoading && [...Array(1)].map((_, i) => renderSkeletonRow(false, i))}
                {!isLoading && employees?.map((employee) => {
                  const fullName = `${employee.firstName} ${employee.lastName}`;
                  return (
                    <TableRow key={employee.id}>
                        <TableCell>
                        <div className="flex items-center gap-3">
                            <Avatar>
                            <AvatarImage src={employee.avatarUrl} alt={fullName} data-ai-hint="person face" />
                            <AvatarFallback>{employee.firstName?.charAt(0)}{employee.lastName?.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-medium">{fullName}</div>
                                <div className="text-sm text-muted-foreground">{employee.email}</div>
                            </div>
                        </div>
                        </TableCell>
                        <TableCell>{employee.department}</TableCell>
                        <TableCell>{employee.jobTitle}</TableCell>
                        <TableCell>
                        <Badge variant={employee.employeeStatus === "Active" ? "default" : "secondary"}>
                            {employee.employeeStatus}
                        </Badge>
                        </TableCell>
                        <TableCell>
                        {employee.dateOfJoining ? new Date(employee.dateOfJoining).toLocaleDateString() : ''}
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
