
import type { PropsWithChildren } from 'react';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { PublicHeader } from '@/components/layout/public-header';

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <FirebaseClientProvider>
      <div className="flex min-h-screen flex-col">
        <PublicHeader />
        <main className="flex-1">{children}</main>
      </div>
    </FirebaseClientProvider>
  );
}
