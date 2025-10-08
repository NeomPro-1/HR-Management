
'use client';

import type { PropsWithChildren } from 'react';
import { AppHeader } from '@/components/layout/app-header';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { Sidebar, SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import * as React from 'react';
import { Preloader } from '@/components/layout/preloader';

export default function AppLayout({ children }: PropsWithChildren) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Preloader />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" variant="sidebar">
        <AppSidebar />
        <SidebarInset className="flex-1 flex flex-col">
            <>
              <AppHeader />
              <main className="flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
            </>
        </SidebarInset>
      </Sidebar>
    </SidebarProvider>
  );
}
