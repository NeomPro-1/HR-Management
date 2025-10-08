
'use client';

import Lottie from 'lottie-react';
import animationData from '@/lib/lottie/loader.json';

export function Preloader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="w-48 h-48">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
}
