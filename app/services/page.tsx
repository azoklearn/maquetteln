'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from '@/context/LocaleContext';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/Button';

const serviceKeys = [
  'cars',
  'restaurant',
  'event',
  'personalShopping',
  'travel',
  'watch',
  'driver',
  'yacht',
  'helicopter',
] as const;

export default function ServicesPage() {
  const { t } = useLocale();

  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-32 px-6 md:px-12 lg:px-16 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
            {t.services.title}
          </h1>
          <p className="mt-6 text-gold/90 font-body text-sm uppercase tracking-[0.25em] max-w-xl mx-auto">
            {t.services.subtitle}
          </p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-white/70 font-body text-base md:text-lg max-w-2xl mx-auto"
          >
            {t.services.intro}
          </motion.p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceKeys.map((key, i) => (
            <ServiceCard
              key={key}
              title={t.services[key]}
              index={i}
            />
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-32 pt-16 border-t border-black-border text-center"
        >
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white">
            {t.services.ctaTitle}
          </h2>
          <p className="mt-4 text-white/70 font-body max-w-xl mx-auto">
            {t.services.ctaText}
          </p>
          <div className="mt-8">
            <Button href="/contact">{t.services.ctaButton}</Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
