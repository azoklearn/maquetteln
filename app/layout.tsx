import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { LocaleProvider } from '@/context/LocaleContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LN Conciergerie | Luxury Concierge Service Worldwide',
  description:
    'Luxury Concierge Service — Lifestyle, Travel & Exclusive Access. Available 24/7. Cars, Restaurants, Events, Travel, Yacht, Helicopter & more.',
  openGraph: {
    title: 'LN Conciergerie | Luxury Concierge Worldwide',
    description: 'Your World, Unlocked. Elite concierge services across the globe.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <LocaleProvider>
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
