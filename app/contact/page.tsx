'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const { t } = useLocale();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-32 px-6 md:px-12 lg:px-16 min-h-screen bg-black">
      <div className="max-w-xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white">
            {t.contact.title}
          </h1>
          <p className="mt-4 text-gold/90 font-body text-sm uppercase tracking-[0.25em]">
            {t.contact.subtitle}
          </p>
          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-white/70 text-sm uppercase tracking-wider">
              {t.worldwide.available}
            </span>
          </div>
          <p className="mt-6 text-white/50 text-sm font-body max-w-md mx-auto">
            {t.contact.info}
          </p>
        </motion.header>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12 border border-gold/30 bg-gold/5"
          >
            <p className="text-gold font-body">{t.contact.success}</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div>
              <label htmlFor="name" className="block font-body text-xs uppercase tracking-[0.2em] text-white/70 mb-3">
                {t.contact.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-black-soft border border-black-border px-5 py-4 text-white font-body focus:border-gold focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-body text-xs uppercase tracking-[0.2em] text-white/70 mb-3">
                {t.contact.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-black-soft border border-black-border px-5 py-4 text-white font-body focus:border-gold focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-body text-xs uppercase tracking-[0.2em] text-white/70 mb-3">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-black-soft border border-black-border px-5 py-4 text-white font-body focus:border-gold focus:outline-none transition-colors resize-none"
              />
            </div>
            <div className="pt-4">
              <Button type="submit" variant="primary">
                {t.contact.send}
              </Button>
            </div>
          </motion.form>
        )}
      </div>
    </div>
  );
}
