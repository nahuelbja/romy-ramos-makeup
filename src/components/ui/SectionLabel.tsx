'use client';

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionLabel({ children, light }: SectionLabelProps) {
  return (
    <span
      className="section-label"
      style={{
        color: light ? 'rgba(255,255,255,0.5)' : undefined,
        fontFamily: 'var(--font-inter)',
      }}
    >
      {children}
    </span>
  );
}
