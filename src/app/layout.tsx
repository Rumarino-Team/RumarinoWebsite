import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import FooterConditional from '@/components/footer-conditional';
import { Anton, Roboto } from 'next/font/google';

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'RUMarino Robotics Hub',
  description: 'Official website for the RUMarino robotics team competing in Robosub 2025.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-96x96.webp',
    apple: '/apple-touch-icon.webp',
    other: [
      {
        rel: 'icon',
        url: '/favicon.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${anton.variable} ${roboto.variable} font-body antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow min-h-0">{children}</main>
        <FooterConditional />
        <Toaster />
      </body>
    </html>
  );
}
