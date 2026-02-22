'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { useLocale } from '@/context/LocaleContext';

const navLinks = [
  { href: '/', key: 'home' as const },
  { href: '/services', key: 'services' as const },
  { href: '/about', key: 'about' as const },
  { href: '/contact', key: 'contact' as const },
] as const;

export function Header() {
  const pathname = usePathname();
  const { t, locale, setLocale } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 bg-black/80 backdrop-blur-md border-b border-black-border"
    >
      <Link href="/" className="flex items-center gap-2 shrink-0">
        <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black-border rounded-sm overflow-hidden">
          {!logoError ? (
            <Image
              src="/logoln.jpeg"
              alt="LN Conciergerie"
              fill
              className="object-contain"
              sizes="48px"
              priority
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="font-display text-gold font-semibold text-lg">LN</span>
          )}
        </div>
        <span className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight hidden sm:block">
          LN CONCIERGERIE
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-8 lg:gap-12">
        {navLinks.map(({ href, key }) => (
          <Link
            key={href}
            href={href}
            className={`relative font-body text-sm uppercase tracking-[0.2em] transition-colors duration-300 hover:text-gold ${
              pathname === href ? 'text-gold' : 'text-white/90'
            }`}
          >
            {t.nav[key]}
            {pathname === href && (
              <motion.span
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 right-0 h-px bg-gold"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        {/* Language toggle */}
        <div className="flex rounded overflow-hidden border border-black-border">
          <button
            onClick={() => setLocale('en')}
            className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
              locale === 'en' ? 'bg-gold text-black' : 'text-white/70 hover:text-white'
            }`}
            aria-label="English"
          >
            EN
          </button>
          <button
            onClick={() => setLocale('fr')}
            className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
              locale === 'fr' ? 'bg-gold text-black' : 'text-white/70 hover:text-white'
            }`}
            aria-label="Français"
          >
            FR
          </button>
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 border border-gold text-gold font-body text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-all duration-300"
        >
          {t.nav.requestAccess}
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden p-2 text-white/90 hover:text-gold transition-colors"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 md:hidden bg-black border-b border-black-border overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map(({ href, key }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-body text-sm uppercase tracking-[0.2em] py-2 ${
                    pathname === href ? 'text-gold' : 'text-white/90'
                  }`}
                >
                  {t.nav[key]}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 py-3 border border-gold text-gold text-center font-body text-xs uppercase tracking-[0.2em]"
              >
                {t.nav.requestAccess}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
