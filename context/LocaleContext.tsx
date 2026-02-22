'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Locale, dictionaries, Dictionary } from '@/lib/i18n/dictionaries';

type LocaleContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (typeof dictionaries)[Locale];
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    if (typeof window !== 'undefined') window.document.documentElement.lang = l;
  }, []);
  const t = dictionaries[locale];
  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
