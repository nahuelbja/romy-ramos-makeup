'use client';

import { WHATSAPP_DISPLAY, WHATSAPP_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '@/lib/constants';

export default function TopBar() {
  return (
    <div
      style={{
        background: 'var(--noir)',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        fontFamily: 'var(--font-inter)',
        fontSize: '11px',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.25em',
        color: 'rgba(255,255,255,0.7)',
        position: 'relative',
        zIndex: 50,
      }}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
        onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#fff')}
        onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)')}
        aria-label="Contactar por WhatsApp"
      >
        {WHATSAPP_DISPLAY}
      </a>
      <span style={{ color: 'var(--champagne)' }}>—</span>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
        onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#fff')}
        onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)')}
        aria-label="Ver Instagram"
      >
        {INSTAGRAM_HANDLE}
      </a>
    </div>
  );
}
