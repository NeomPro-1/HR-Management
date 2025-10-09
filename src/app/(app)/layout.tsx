
'use client';

import type { PropsWithChildren } from 'react';
import * as React from 'react';
import { AppHeader } from '@/components/layout/app-header';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { SidebarProvider, Sidebar } from '@/components/ui/sidebar';
import { Preloader } from '@/components/layout/preloader';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function AppLayout({ children }: PropsWithChildren) {
  const [mounted, setMounted] = React.useState(false);
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!isUserLoading && !user && mounted) {
      router.push('/login');
    }
  }, [isUserLoading, user, router, mounted]);

  if (!mounted || isUserLoading || !user) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-background">
        <Preloader />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <Sidebar>
          <AppSidebar />
        </Sidebar>
        <div className="flex flex-1 flex-col">
          <AppHeader />
          <main className="flex-1 overflow-y-auto p-6 lg:p-8">
            <React.Suspense fallback={<Preloader />}>
              {children}
            </React.Suspense>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
