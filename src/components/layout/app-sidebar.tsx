
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Briefcase,
  CircleDollarSign,
  LayoutDashboard,
  MessageCircle,
  Users,
  Fingerprint,
  UserCheck,
  CalendarClock,
  CalendarDays,
  UserCog,
  ClipboardList,
  BookUser,
  FileText,
  ReceiptText,
  FilePlus,
  List,
} from 'lucide-react';
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
  SidebarMenuSub,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { Settings } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const DynamicSidebarMenuSkeleton = dynamic(() => import('@/components/ui/sidebar').then(mod => mod.SidebarMenuSkeleton), {
  ssr: false,
});


const navItems = [
  { href: '/recruitment', icon: Briefcase, label: 'Recruitment' },
  { href: '/helpdesk', icon: MessageCircle, label: 'Helpdesk' },
];

const hrmNavItems = [
    { href: '/hr/employee-dashboard', label: 'Employee Dashboard', icon: LayoutDashboard },
    { href: '/hr/employee', label: 'Employee', icon: Users },
    { href: '/hr/employee-details', label: 'Employee Details', icon: ClipboardList },
    { href: '/hr/designations', label: 'Designations', icon: UserCog },
    { href: '/hr/admin-attendance', label: 'Admin Attendance', icon: UserCheck },
    { href: '/hr/employee-attendance', label: 'Employee Attendance', icon: CalendarClock },
    { href: '/hr/biometric-attendance', label: 'Biometric Attendance', icon: Fingerprint },
    { href: '/hr/admin-leave', label: 'Admin Leave', icon: BookUser },
    { href: '/hr/employee-leave', label: 'Employee Leave', icon: FileText },
    { href: '/hr/holidays', label: 'Holidays', icon: CalendarDays },
];

const payrollNavItems = [
    { href: '/payroll/items', label: 'Payroll Items', icon: List },
    { href: '/payroll/payslip', label: 'Payslip', icon: ReceiptText },
    { href: '/payroll/create-payslip', label: 'Create Payslip', icon: FilePlus },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { open } = useSidebar();
  const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar');
  const isHRSectionActive = pathname.startsWith('/hr');
  const isPayrollSectionActive = pathname.startsWith('/payroll');

  // Hydration fix
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <>
        <SidebarHeader>
          <Link href="/hr/employee-dashboard" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-primary">
              <path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.5 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
              <path d="M12 4a8 8 0 1 1 0 16 4 4 0 0 0 0-8 4 4 0 0 0 0-8Zm0 1.5a6.5 6.5 0 1 0 0 13 2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0-5 6.5 6.5 0 0 0 0-3Z" />
            </svg>
            <h1 className="text-xl font-bold font-headline text-sidebar-foreground">SynergyHR</h1>
          </Link>
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarMenu>
            {[...Array(5)].map((_, i) => (
                <SidebarMenuItem key={i}>
                    <DynamicSidebarMenuSkeleton showIcon />
                </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </>
    );
  }


  return (
    <>
      <SidebarHeader>
        <Link href="/hr/employee-dashboard" className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-primary">
            <path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.5 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
            <path d="M12 4a8 8 0 1 1 0 16 4 4 0 0 0 0-8 4 4 0 0 0 0-8Zm0 1.5a6.5 6.5 0 1 0 0 13 2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0-5 6.5 6.5 0 0 0 0-3Z" />
          </svg>
          <h1 className="text-xl font-bold font-headline text-sidebar-foreground">SynergyHR</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
           <Collapsible asChild defaultOpen={isHRSectionActive}>
            <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                        isActive={isHRSectionActive}
                        tooltip={{ children: 'HRM Apps', side: 'right' }}
                        className="justify-between"
                        isDropdown
                    >
                        <div className="flex items-center gap-2">
                            <Users />
                            <span>HRM Apps</span>
                        </div>
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent asChild>
                  <SidebarMenuSub>
                    {hrmNavItems.map((item) => (
                      <SidebarMenuItem key={`${item.href}-${item.label}`}>
                        <Link href={item.href}>
                            <SidebarMenuSubButton isActive={pathname === item.href}>
                                <item.icon className="h-4 w-4" />
                                <span>{item.label}</span>
                            </SidebarMenuSubButton>
                        </Link>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href}>
                <SidebarMenuButton
                  isActive={pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/')}
                  tooltip={{ children: item.label, side: 'right' }}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
           <Collapsible asChild defaultOpen={isPayrollSectionActive}>
            <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                        isActive={isPayrollSectionActive}
                        tooltip={{ children: 'Payroll', side: 'right' }}
                        className="justify-between"
                        isDropdown
                    >
                        <div className="flex items-center gap-2">
                            <CircleDollarSign />
                            <span>Payroll</span>
                        </div>
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent asChild>
                  <SidebarMenuSub>
                    {payrollNavItems.map((item) => (
                      <SidebarMenuItem key={`${item.href}-${item.label}`}>
                        <Link href={item.href}>
                            <SidebarMenuSubButton isActive={pathname === item.href}>
                                <item.icon className="h-4 w-4" />
                                <span>{item.label}</span>
                            </SidebarMenuSubButton>
                        </Link>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border p-2 mt-auto">
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/hr/settings">
              <SidebarMenuButton tooltip={{ children: 'Settings', side: 'right' }} isActive={pathname.startsWith('/hr/settings')}>
                <Settings />
                <span>Settings</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="#">
              <SidebarMenuButton tooltip={{ children: 'Profile', side: 'right' }}>
                <Avatar className="h-7 w-7">
                  {userAvatar && <AvatarImage src={userAvatar.imageUrl} alt="User Avatar" data-ai-hint={userAvatar.imageHint}/>}
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <span>Jane Doe</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
