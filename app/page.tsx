'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from '@/context/LocaleContext';
import { SceneClient } from '@/components/three/SceneClient';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/ServiceCard';

const serviceKeys = [
  'cars',
  'restaurant',
  'event',
  'personalShopping',
  'travel',
  'watch',
] as const;

export default function HomePage() {
  const { t } = useLocale();

  return (
    <>
      {/* Hero — fullscreen cinematic */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
        <SceneClient />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-white/20 to-black z-10 pointer-events-none" />
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.05] tracking-tight"
          >
            {t.hero.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 text-white/80 font-body text-base md:text-lg max-w-xl mx-auto"
          >
            {t.hero.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12"
          >
            <Button href="/contact">{t.hero.cta}</Button>
          </motion.div>
          <motion.a
            href="#services-preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="inline-block mt-16 text-white/50 hover:text-gold text-sm uppercase tracking-[0.3em] transition-colors"
          >
            {t.hero.scroll} ↓
          </motion.a>
        </div>
      </section>

      {/* Services preview */}
      <section
        id="services-preview"
        className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 border-t border-black-border bg-black"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">
              {t.services.title}
            </h2>
            <p className="mt-4 text-gold/90 font-body text-sm uppercase tracking-[0.25em]">
              {t.services.subtitle}
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {serviceKeys.map((key, i) => (
              <ServiceCard
                key={key}
                title={t.services[key]}
                index={i}
                compact
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-gold font-body text-sm uppercase tracking-[0.2em] hover:text-gold-light transition-colors"
            >
              {t.services.viewAll}
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Worldwide + 24/7 */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-black-soft border-t border-black-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white"
          >
            {t.worldwide.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-gold font-body text-sm uppercase tracking-[0.3em]"
          >
            {t.worldwide.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-white/80 font-body text-lg leading-relaxed"
          >
            {t.worldwide.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 inline-flex items-center gap-2 px-6 py-3 border border-gold/50 rounded-sm"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold font-body text-sm uppercase tracking-[0.2em]">
              {t.worldwide.available}
            </span>
          </motion.div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 border-t border-black-border bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-semibold text-white"
          >
            {t.homeCta.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-white/80 font-body text-lg"
          >
            {t.homeCta.text}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10"
          >
            <Button href="/contact">{t.homeCta.button}</Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
