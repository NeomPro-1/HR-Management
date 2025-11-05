
import type { PropsWithChildren } from 'react';
import { FirebaseClientProvider } from '@/firebase/client-provider';

export default function PublicLayout({ children }: PropsWithChildren) {
  return <FirebaseClientProvider>{children}</FirebaseClientProvider>;
}
    