'use client';

import { Service } from '@/types/calculator';
import { ServiceType } from '@/types/calculator';
import { formatGs } from '@/lib/formatters';

interface TypeSelectorProps {
  services: Service[];
  selected: ServiceType;
  onChange: (type: ServiceType) => void;
}

export default function TypeSelector({ services, selected, onChange }: TypeSelectorProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2px',
        background: 'rgba(255,255,255,0.08)',
        padding: '2px',
        borderRadius: '2px',
      }}
      className="type-selector"
    >
      {services.map((service) => {
        const isActive = selected === service.id;
        const fromPrice = service.base + (service.included?.price ?? 0);
        return (
          <button
            key={service.id}
            type="button"
            role="button"
            aria-pressed={isActive}
            aria-label={`Seleccionar servicio ${service.name} desde ${formatGs(fromPrice)}`}
            onClick={() => onChange(service.id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              minHeight: '100px',
              padding: '20px 16px',
              background: isActive ? 'var(--blanc)' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.25s ease',
              touchAction: 'manipulation',
              userSelect: 'none',
              WebkitUserSelect: 'none',
            }}
          >
            {/* Number */}
            <span
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.3em',
                color: isActive ? 'var(--champagne)' : 'rgba(255,255,255,0.35)',
                transition: 'color 0.25s',
              }}
            >
              — {service.number} —
            </span>

            {/* Name */}
            <span
              style={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 500,
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                color: isActive ? 'var(--noir)' : 'rgba(255,255,255,0.8)',
                transition: 'color 0.25s',
              }}
            >
              {service.name}
            </span>

            {/* Price */}
            <span
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '11px',
                fontWeight: 400,
                color: isActive ? 'var(--cendre)' : 'rgba(255,255,255,0.4)',
                transition: 'color 0.25s',
                letterSpacing: '0.05em',
              }}
            >
              desde {formatGs(fromPrice)}
            </span>
          </button>
        );
      })}

      <style jsx global>{`
        @media (max-width: 640px) {
          .type-selector button {
            min-height: 90px !important;
            padding: 16px 12px !important;
          }
        }
      `}</style>
    </div>
  );
}
