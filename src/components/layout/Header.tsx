'use client';

import { useState } from 'react';
import { X, Menu } from 'lucide-react';

const navLeft = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Servicios', href: '#servicios' },
];

const navRight = [
  { label: 'Presupuesto', href: '#presupuesto' },
  { label: 'Contacto', href: '#contacto' },
];

const navLinkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-inter)',
  fontSize: '11px',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.3em',
  color: 'var(--noir)',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
};

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const allNav = [...navLeft, ...navRight];

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--light-grey)',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 40px',
            height: '72px',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
          }}
        >
          {/* Nav Left — hidden on mobile */}
          <nav className="hidden-mobile" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            {navLeft.map((item) => (
              <a key={item.href} href={item.href} style={navLinkStyle}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = 'var(--champagne)')}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'var(--noir)')}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Logo — center */}
          <a
            href="#inicio"
            style={{
              textDecoration: 'none',
              textAlign: 'center',
              justifySelf: 'center',
            }}
            aria-label="Romy Ramos Makeup — Inicio"
          >
            <div
              style={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 500,
                fontSize: '28px',
                letterSpacing: '0.04em',
                color: 'var(--noir)',
                textTransform: 'uppercase',
                lineHeight: 1,
              }}
            >
              RR
            </div>
          </a>

          {/* Nav Right — hidden on mobile */}
          <nav
            className="hidden-mobile"
            style={{ display: 'flex', gap: '40px', alignItems: 'center', justifyContent: 'flex-end' }}
          >
            {navRight.map((item) => (
              <a key={item.href} href={item.href} style={navLinkStyle}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = 'var(--champagne)')}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'var(--noir)')}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Hamburger — mobile only */}
          <button
            className="show-mobile"
            onClick={() => setDrawerOpen(true)}
            aria-label="Abrir menú"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              justifySelf: 'end',
              color: 'var(--noir)',
            }}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
          }}
        >
          {/* Backdrop */}
          <div
            style={{ flex: 1, background: 'rgba(0,0,0,0.4)' }}
            onClick={() => setDrawerOpen(false)}
          />

          {/* Drawer */}
          <div
            style={{
              width: '280px',
              background: 'var(--blanc)',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              padding: '32px 40px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 500,
                  fontSize: '24px',
                  letterSpacing: '0.04em',
                  color: 'var(--noir)',
                  textTransform: 'uppercase',
                }}
              >
                RR
              </span>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Cerrar menú"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--cendre)', padding: '4px' }}
              >
                <X size={20} />
              </button>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {allNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setDrawerOpen(false)}
                  style={{
                    ...navLinkStyle,
                    fontSize: '13px',
                    letterSpacing: '0.35em',
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div style={{ marginTop: 'auto', borderTop: '1px solid var(--light-grey)', paddingTop: '32px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontStyle: 'italic',
                  fontSize: '15px',
                  color: 'var(--cendre)',
                }}
              >
                Maquillaje profesional, Paraguay
              </span>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 968px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 969px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
