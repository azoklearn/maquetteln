'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

const base =
  'inline-flex items-center justify-center font-body text-xs uppercase tracking-[0.25em] px-8 py-4 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black';

const variants = {
  primary:
    'border border-gold bg-gold text-black hover:bg-gold-light hover:border-gold-light hover:shadow-[0_0_30px_rgba(201,169,98,0.3)]',
  outline:
    'border border-gold text-gold hover:bg-gold hover:text-black',
  ghost: 'text-gold hover:text-gold-light',
};

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <motion.span
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
