import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'RUMarino Robotics Hub',
  description: 'Official website for the RUMarino robotics team competing in Robosub 2025.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-96x96.png',
    apple: '/apple-touch-icon.png',
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
