'use client';

import Link from 'next/link';
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function PublicHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-primary"
            >
              <path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.5 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
              <path d="M12 4a8 8 0 1 1 0 16 4 4 0 0 0 0-8 4 4 0 0 0 0-8Zm0 1.5a6.5 6.5 0 1 0 0 13 2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0-5 6.5 6.5 0 0 0 0-3Z" />
            </svg>
            <span className="font-bold">SynergyHR</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                pathname === '/login' ? 'bg-accent' : ''
              )}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className={cn(
                buttonVariants({ variant: 'default' })
              )}
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
