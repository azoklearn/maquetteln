'use client';

import { motion } from 'framer-motion';

type ServiceCardProps = {
  title: string;
  index?: number;
  compact?: boolean;
};

export function ServiceCard({ title, index = 0, compact }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className={`group relative border border-black-border bg-black-soft/50 overflow-hidden transition-colors hover:border-gold/40 ${
        compact ? 'p-5 md:p-6' : 'p-8 md:p-10'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <span className="block font-display text-lg md:text-xl font-medium text-white group-hover:text-gold transition-colors">
          {title}
        </span>
        {!compact && (
          <span className="mt-2 inline-block text-gold/70 text-sm font-body uppercase tracking-wider group-hover:text-gold transition-colors">
            →
          </span>
        )}
      </div>
    </motion.article>
  );
}
