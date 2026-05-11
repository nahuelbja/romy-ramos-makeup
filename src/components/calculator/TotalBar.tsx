'use client';

import { WHATSAPP_NUMBER } from '@/lib/constants';
import { formatGs } from '@/lib/formatters';

interface TotalBarProps {
  total: number;
  whatsappMessage: string;
  isSticky?: boolean;
}

export default function TotalBar({ total, whatsappMessage, isSticky }: TotalBarProps) {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.12)',
        padding: '32px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        flexWrap: 'wrap',
        position: isSticky ? 'sticky' : 'relative',
        bottom: isSticky ? '0' : undefined,
        zIndex: isSticky ? 10 : undefined,
        backdropFilter: isSticky ? 'blur(12px)' : undefined,
      }}
      className="total-bar"
    >
      {/* Total label + amount */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '11px',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.4em',
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          Total Estimado
        </span>
        <span
          style={{
            fontFamily: 'var(--font-playfair)',
            fontWeight: 500,
            fontSize: 'clamp(36px, 5vw, 52px)',
            color: 'var(--blanc)',
            lineHeight: 1,
            letterSpacing: '-0.01em',
          }}
          aria-live="polite"
          aria-atomic="true"
        >
          {formatGs(total)}
        </span>
      </div>

      {/* WhatsApp CTA */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Reservar por WhatsApp"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: '#25D366',
          color: 'var(--blanc)',
          padding: '16px 32px',
          fontFamily: 'var(--font-inter)',
          fontSize: '12px',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.25em',
          textDecoration: 'none',
          transition: 'all 0.25s ease',
          touchAction: 'manipulation',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#1ebe5d'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = '#25D366'; }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Reservar por WhatsApp
      </a>

      <style jsx global>{`
        @media (max-width: 640px) {
          .total-bar {
            padding: 24px 20px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .total-bar a {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </div>
  );
}
