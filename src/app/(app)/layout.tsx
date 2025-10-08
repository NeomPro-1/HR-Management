

'use client';

import type { PropsWithChildren } from 'react';
import { AppHeader } from '@/components/layout/app-header';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { Sidebar, SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import * as React from 'react';
import { Preloader } from '@/components/layout/preloader';

export default function AppLayout({ children }: PropsWithChildren) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // This effect runs once on mount to simulate an initial load.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);


  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" variant="sidebar">
        <AppSidebar />
        <SidebarInset className="flex-1 flex flex-col">
          {loading ? <Preloader /> : (
            <>
              <AppHeader />
              <main className="flex-1 overflow-y-auto p-4 lg:p-6">
                {children}
              </main>
            </>
          )}
        </SidebarInset>
      </Sidebar>
    </SidebarProvider>
  );
}
