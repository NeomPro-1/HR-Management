
'use client';

import type { PropsWithChildren } from 'react';
import { AppHeader } from '@/components/layout/app-header';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import * as React from 'react';
import { Preloader } from '@/components/layout/preloader';

export default function AppLayout({ children }: PropsWithChildren) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <AppSidebar />
      <SidebarInset>
        {loading && <Preloader />}
        <div className={loading ? 'hidden' : 'contents flex flex-col w-full'}>
          <AppHeader />
          <main className="flex-1 overflow-y-auto p-4 lg:p-6">
            {children}
          </main>
        </div>
      </SidebarInset>
    </Sidebar>
  );
}
