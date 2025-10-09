
'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Bell, ChevronLeft, LogOut } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/firebase';

function getPageTitle(pathname: string) {
  const segment = pathname.split('/').pop()?.replace(/-/g, ' ') || 'dashboard';
  // Capitalize first letter of each word
  return segment.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const topLevelPages = [
  '/hr/employee-dashboard',
  '/recruitment',
  '/helpdesk',
  '/payroll/items',
  '/',
  '/hr',
  '/payroll'
];


export function AppHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const auth = useAuth();
  const pageTitle = getPageTitle(pathname);
  const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar');
  const isMobile = useIsMobile();
  const showBackButton = !topLevelPages.includes(pathname);
  
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/login');
  };

  if (!mounted) {
    return (
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b border-border bg-background/80 px-4 backdrop-blur-sm lg:px-6">
        {/* Render a skeleton or placeholder here if you want */}
        </header>
    );
  }

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b border-border bg-background/80 px-4 backdrop-blur-sm lg:px-6">
      <div className="flex items-center gap-2 md:hidden">
        <SidebarTrigger className={cn(showBackButton && "hidden")} />
         {showBackButton && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="shrink-0"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Button>
        )}
      </div>

      <div className="flex-1 flex items-center gap-3">
        <h1 className={cn(
          "text-lg font-semibold md:text-2xl font-headline",
          showBackButton && isMobile && "hidden",
        )}>
          {pageTitle}
        </h1>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2 md:gap-4">
        <div className="relative hidden w-full max-w-sm md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-secondary pl-8"
          />
        </div>
        <ThemeToggle />
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                {userAvatar && <AvatarImage src={userAvatar.imageUrl} alt="User Avatar" data-ai-hint={userAvatar.imageHint} />}
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
