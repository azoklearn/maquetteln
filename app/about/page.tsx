'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import { Button } from '@/components/ui/Button';

const valuesKeys = ['discretion', 'exclusivity', 'network', 'standards'] as const;

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-32 px-6 md:px-12 lg:px-16 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
            {t.about.title}
          </h1>
          <p className="mt-6 text-gold/90 font-body text-sm uppercase tracking-[0.25em]">
            {t.about.subtitle}
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed">
            {t.about.mission}
          </p>
          <p className="font-body text-base md:text-lg text-white/75 leading-relaxed">
            {t.about.story}
          </p>
        </motion.section>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 md:mt-24">
          {valuesKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-black-border bg-black-soft/30 p-8 md:p-10 group hover:border-gold/40 transition-colors"
            >
              <span className="block font-display text-xl md:text-2xl font-medium text-white group-hover:text-gold transition-colors">
                {t.about.values[key]}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-32 pt-16 border-t border-black-border text-center"
        >
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white">
            {t.about.ctaTitle}
          </h2>
          <p className="mt-4 text-white/70 font-body max-w-xl mx-auto">
            {t.about.ctaText}
          </p>
          <div className="mt-8">
            <Button href="/contact">{t.about.ctaButton}</Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
