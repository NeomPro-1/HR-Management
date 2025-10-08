
'use client';

import { cn } from '@/lib/utils';

type PreloaderProps = {
  loading: boolean;
};

export function Preloader({ loading }: PreloaderProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-[200] bg-transparent backdrop-blur-sm flex items-center justify-center transition-opacity duration-500',
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="fingerprint-scanner">
        <div className="fingerprint"></div>
        <div className="scanner-line"></div>
        <p className="scanner-text">Authenticating...</p>
      </div>
    </div>
  );
}
