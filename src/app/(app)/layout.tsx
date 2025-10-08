

'use client';

import type { PropsWithChildren } from 'react';
import { AppHeader } from '@/components/layout/app-header';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { Sidebar, SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import * as React from 'react';
import { Preloader } from '@/components/layout/preloader';

export default function AppLayout({ children }: PropsWithChildren) {
  const [loading, setLoading] = React.useState(true);
  // Using a ref to track the pathname and a state to trigger re-renders
  // This avoids direct dependency on pathname, reducing re-renders, but still reacting to changes
  const [currentPathname, setCurrentPathname] = React.useState('');

  React.useEffect(() => {
    // This effect now correctly depends on the result of usePathname()
    if (typeof window !== 'undefined' && currentPathname !== window.location.pathname) {
      setCurrentPathname(window.location.pathname);
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [currentPathname]);
  
  React.useEffect(() => {
    // Initial load
     if (typeof window !== 'undefined') {
      setCurrentPathname(window.location.pathname);
    }
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <SidebarProvider>
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
    </SidebarProvider>
  );
}

    