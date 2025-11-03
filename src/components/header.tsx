'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/team', label: 'Team' },
  { href: '/competition', label: 'Competition' },
  {
    label: 'AUVs',
    subLinks: [
      { href: '/auvs', label: 'Overview' },
      { href: '/auvs/hydrus', label: 'Hydrus' },
      { href: '/auvs/proteus', label: 'Proteus' },
    ],
  },
  { href: '/activities', label: 'Activities' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <Logo className="h-16 w-32" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.subLinks ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 text-white/80 hover:text-white hover:bg-transparent"
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black text-white border-gray-800">
                  {link.subLinks.map((subLink) => (
                    <DropdownMenuItem key={subLink.href} asChild>
                      <Link
                        href={subLink.href}
                        className={cn(
                          'font-medium transition-colors',
                          pathname === subLink.href ? 'text-white' : 'text-white/80 hover:text-white'
                        )}
                      >
                        {subLink.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-medium transition-colors',
                  pathname === link.href ? 'text-white' : 'text-white/80 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black text-white border-gray-800">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="mb-8">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Logo className="h-24 w-48" />
                </Link>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) =>
                  link.subLinks ? (
                    <Collapsible key={link.label}>
                      <CollapsibleTrigger className='w-full'>
                        <div className="flex items-center justify-between text-lg font-medium text-white/80 transition-colors hover:text-white">
                          {link.label}
                          <ChevronDown className="h-5 w-5" />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-4 mt-2 flex flex-col gap-4">
                        {link.subLinks.map((subLink) => (
                           <Link
                           key={subLink.href}
                           href={subLink.href}
                           onClick={() => setIsOpen(false)}
                           className={cn(
                             'text-lg font-medium text-white/60 transition-colors hover:text-white',
                             pathname === subLink.href && 'text-white'
                           )}
                         >
                           {subLink.label}
                         </Link>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'text-lg font-medium text-white/80 transition-colors hover:text-white',
                        pathname === link.href && 'text-white'
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
