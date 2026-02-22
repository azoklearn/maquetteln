'use client';

import Link from 'next/link';
import { useLocale } from '@/context/LocaleContext';

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="relative border-t border-black-border bg-black-soft py-12 md:py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-gold text-lg md:text-xl font-medium tracking-wide">
            LN CONCIERGERIE
          </p>
          <p className="text-white/60 text-sm mt-1">{t.footer.tagline}</p>
        </div>
        <nav className="flex items-center gap-6 md:gap-8">
          <Link
            href="/services"
            className="text-white/60 hover:text-gold text-sm uppercase tracking-wider transition-colors"
          >
            {t.nav.services}
          </Link>
          <Link
            href="/about"
            className="text-white/60 hover:text-gold text-sm uppercase tracking-wider transition-colors"
          >
            {t.nav.about}
          </Link>
          <Link
            href="/contact"
            className="text-white/60 hover:text-gold text-sm uppercase tracking-wider transition-colors"
          >
            {t.nav.contact}
          </Link>
        </nav>
      </div>
      <p className="text-center text-white/40 text-xs mt-8 uppercase tracking-widest" suppressHydrationWarning>
        © <span suppressHydrationWarning>{new Date().getFullYear()}</span> LN Conciergerie. {t.footer.rights}
      </p>
    </footer>
  );
}
