'use client';

import Script from 'next/script';
import { useCallback } from 'react';
import { formatGs } from '@/lib/formatters';

const CAL_USERNAME = 'romyramos.makeup';
const CAL_EVENT = 'reserva-de-turno-maquillaje';

interface TotalBarProps {
  total: number;
  calNotes: string;
  isSticky?: boolean;
}

export default function TotalBar({ total, calNotes, isSticky }: TotalBarProps) {
  const calLink = `${CAL_USERNAME}/${CAL_EVENT}`;

  const handleClick = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cal = (window as any).Cal;
    if (cal) {
      cal('modal', {
        calLink,
        config: {
          layout: 'month_view',
          theme: 'light',
          notes: calNotes,
        },
      });
    } else {
      // fallback si el script aún no cargó
      window.open(`https://cal.com/${calLink}`, '_blank');
    }
  }, [calLink, calNotes]);

  return (
    <>
      <Script
        id="cal-embed-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function (C, A, L) {
              let p = function (a, ar) { a.q.push(ar); };
              let d = C.document;
              C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                  cal.ns = {};
                  cal.q = cal.q || [];
                  d.head.appendChild(d.createElement("script")).src = A;
                  cal.loaded = true;
                }
                if (ar[0] === L) {
                  const api = function () { p(api, arguments); };
                  const namespace = ar[1];
                  api.q = api.q || [];
                  if (typeof namespace === "string") {
                    cal.ns[namespace] = cal.ns[namespace] || api;
                    p(cal.ns[namespace], ar);
                    return;
                  }
                  p(cal, ar);
                  return;
                }
                p(cal, ar);
              };
            })(window, "https://app.cal.com/embed/embed.js", "init");
            Cal("init", { origin: "https://cal.com" });
            Cal("ui", { theme: "light", hideEventTypeDetails: false, layout: "month_view" });
          `,
        }}
      />

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

        {/* Cal.com CTA */}
        <button
          onClick={handleClick}
          aria-label="Elegir fecha y hora para reservar turno"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'var(--champagne)',
            color: 'var(--noir)',
            border: 'none',
            padding: '16px 32px',
            fontFamily: 'var(--font-inter)',
            fontSize: '12px',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            touchAction: 'manipulation',
            WebkitTapHighlightColor: 'transparent',
            userSelect: 'none',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#a8935e'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--champagne)'; }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Reservar Turno
        </button>

        <style jsx global>{`
          @media (max-width: 640px) {
            .total-bar {
              padding: 24px 20px !important;
              flex-direction: column !important;
              align-items: flex-start !important;
            }
            .total-bar button {
              width: 100% !important;
              justify-content: center !important;
            }
          }
        `}</style>
      </div>
    </>
  );
}
