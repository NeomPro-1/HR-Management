
'use client';

import type { PropsWithChildren } from 'react';
import { AppHeader } from '@/components/layout/app-header';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { ClientOnly } from '@/components/client-only';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <ClientOnly>
        <Sidebar collapsible="icon" variant="sidebar">
          <AppSidebar />
        </Sidebar>
        <SidebarInset>
          <AppHeader />
          <main className="flex-1 overflow-y-auto p-4 lg:p-6 bg-background">
            {children}
          </main>
        </SidebarInset>
      </ClientOnly>
    </>
  );
}
