
'use client';

import { cn } from '@/lib/utils';

type PreloaderProps = {
  loading: boolean;
};

export function Preloader({ loading }: PreloaderProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-500',
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-primary">
            <path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.5 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
            <path d="M12 4a8 8 0 1 1 0 16 4 4 0 0 0 0-8 4 4 0 0 0 0-8Zm0 1.5a6.5 6.5 0 1 0 0 13 2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0-5 6.5 6.5 0 0 0 0-3Z" />
        </svg>
      </div>
    </div>
  );
}
