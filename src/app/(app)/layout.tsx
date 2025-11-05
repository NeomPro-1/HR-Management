'use client';

import type { PropsWithChildren } from 'react';
import * as React from 'react';
import { AppHeader } from '@/components/layout/app-header';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { SidebarProvider, Sidebar } from '@/components/ui/sidebar';
import { Preloader } from '@/components/layout/preloader';
import { usePathname, useRouter } from 'next/navigation';
import { FirebaseClientProvider, useUser } from '@/firebase';

export const dynamic = 'force-dynamic';

function AuthenticatedAppLayout({ children }: PropsWithChildren) {
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, isUserLoading } = useUser();

  const [isPageLoading, setIsPageLoading] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  React.useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  // Effect to handle page loading state on navigation
  React.useEffect(() => {
    setIsPageLoading(true);
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 500); // A short delay to ensure preloader is visible

    return () => clearTimeout(timer);
  }, [pathname]);

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
            {isPageLoading ? <Preloader /> : children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <FirebaseClientProvider>
      <AuthenticatedAppLayout>{children}</AuthenticatedAppLayout>
    </FirebaseClientProvider>
  )
}
