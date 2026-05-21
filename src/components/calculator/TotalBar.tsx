'use client';

import { useState, useCallback } from 'react';
import { formatGs } from '@/lib/formatters';

const CAL_URL = 'https://cal.com/romyramos.makeup/reserva-de-turno-maquillaje';

interface TotalBarProps {
  total: number;
  calNotes: string;
  isSticky?: boolean;
}

function CalModal({ url, onClose }: { url: string; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '820px',
          height: '85vh',
          background: '#fff',
          position: 'relative',
          borderRadius: '2px',
          overflow: 'hidden',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            zIndex: 1,
            width: '32px',
            height: '32px',
            background: 'var(--noir)',
            color: 'var(--blanc)',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            lineHeight: 1,
          }}
        >
          ×
        </button>
        <iframe
          src={url}
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Reservar turno — Romy Ramos Makeup"
        />
      </div>
    </div>
  );
}

export default function TotalBar({ total, calNotes, isSticky }: TotalBarProps) {
  const [showModal, setShowModal] = useState(false);

  const calUrlWithNotes = `${CAL_URL}?notes=${encodeURIComponent(calNotes)}`;

  const handleClick = useCallback(() => {
    setShowModal(true);
  }, []);

  return (
    <>
      {showModal && (
        <CalModal url={calUrlWithNotes} onClose={() => setShowModal(false)} />
      )}

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
