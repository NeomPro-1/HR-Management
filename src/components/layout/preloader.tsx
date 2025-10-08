
'use client';

import { cn } from '@/lib/utils';

type PreloaderProps = {
  loading: boolean;
};

export function Preloader({ loading }: PreloaderProps) {
  return (
    <div
      className={cn(
        'fixed inset-x-0 top-0 h-1 z-[200] bg-transparent transition-opacity duration-300',
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="shimmer-bar h-full w-full" />
    </div>
  );
}
