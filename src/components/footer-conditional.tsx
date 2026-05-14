"use client";

import { usePathname } from 'next/navigation';
import Footer from '@/components/footer';

export default function FooterConditional() {
  const pathname = usePathname();

  if (pathname?.startsWith('/software/docs')) {
    return null;
  }

  return <Footer />;
}
