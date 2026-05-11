'use client';

import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  'aria-label'?: string;
}

export default function Button({
  variant = 'primary',
  children,
  href,
  onClick,
  className = '',
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center transition-all duration-300 cursor-pointer`;
  const styles: Record<string, string> = {
    primary:
      'bg-[var(--noir)] text-[var(--blanc)] border border-[var(--noir)] px-8 py-4 text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-transparent hover:text-[var(--noir)]',
    outline:
      'bg-transparent text-[var(--blanc)] border border-[var(--blanc)] px-8 py-4 text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-[var(--blanc)] hover:text-[var(--noir)]',
    ghost:
      'bg-transparent text-[var(--cendre)] px-0 py-2 text-[11px] uppercase tracking-[0.3em] font-medium hover:text-[var(--noir)]',
  };

  const sharedStyle: React.CSSProperties = {
    fontFamily: 'var(--font-inter)',
    touchAction: 'manipulation',
  };

  if (href) {
    return (
      <a href={href} className={`${base} ${styles[variant]} ${className}`} style={sharedStyle} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles[variant]} ${className}`}
      style={sharedStyle}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
