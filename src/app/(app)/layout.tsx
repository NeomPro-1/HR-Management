
'use client';

import type { PropsWithChildren } from 'react';
import { AppHeader } from '@/components/layout/app-header';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { ClientOnly } from '@/components/client-only';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import { Preloader } from '@/components/layout/preloader';

export default function AppLayout({ children }: PropsWithChildren) {
  const [loading, setLoading] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <ClientOnly>
      <Sidebar collapsible="icon" variant="sidebar">
        <AppSidebar />
      </Sidebar>
      <SidebarInset>
        {loading && <Preloader />}
        <AppHeader />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {!loading && children}
        </main>
      </SidebarInset>
    </ClientOnly>
  );
}
