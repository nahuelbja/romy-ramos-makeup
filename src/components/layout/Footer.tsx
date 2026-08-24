'use client';

const navLinks = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Sobre mí', href: '/#sobre-mi' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Novias', href: '/novias' },
  { label: 'Presupuesto', href: '/#presupuesto' },
  { label: 'Contacto', href: '/#contacto' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--noir)',
        color: 'var(--blanc)',
        padding: '80px 40px 48px',
        textAlign: 'center',
      }}
    >
      {/* Giant RR monogram */}
      <div
        style={{
          fontFamily: 'var(--font-playfair)',
          fontWeight: 500,
          fontSize: 'clamp(80px, 12vw, 120px)',
          letterSpacing: '0.04em',
          color: 'var(--champagne)',
          textTransform: 'uppercase',
          lineHeight: 1,
          marginBottom: '16px',
        }}
      >
        RR
      </div>

      {/* Wordmark */}
      <div
        style={{
          fontFamily: 'var(--font-playfair)',
          fontWeight: 500,
          fontSize: '14px',
          letterSpacing: '0.45em',
          textTransform: 'uppercase',
          color: 'var(--blanc)',
          marginBottom: '12px',
        }}
      >
        ROMY RAMOS
      </div>

      {/* Editorial tagline */}
      <div
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontStyle: 'italic',
          fontSize: '17px',
          color: 'rgba(255,255,255,0.5)',
          marginBottom: '48px',
        }}
      >
        — Maquillaje profesional —
      </div>

      {/* Champagne separator */}
      <div
        style={{
          width: '60px',
          height: '1px',
          background: 'var(--champagne)',
          margin: '0 auto 40px',
        }}
      />

      {/* Nav links */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '32px',
          marginBottom: '48px',
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = 'var(--champagne)')}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)')}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Copyright */}
      <p
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '11px',
          fontWeight: 400,
          letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.3)',
        }}
      >
        © 2026 · Romy Ramos Makeup · Paraguay
      </p>
    </footer>
  );
}
