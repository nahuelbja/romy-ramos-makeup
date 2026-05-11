'use client';

interface QuantitySelectorProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (val: number) => void;
  label?: string;
}

export default function QuantitySelector({
  value,
  min = 1,
  max = 10,
  onChange,
  label = 'cantidad',
}: QuantitySelectorProps) {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: '0' }}
      role="group"
      aria-label={`Selector de ${label}`}
    >
      <button
        type="button"
        onClick={dec}
        disabled={value <= min}
        aria-label={`Reducir ${label}`}
        style={{
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRight: 'none',
          color: value <= min ? 'rgba(255,255,255,0.25)' : 'var(--blanc)',
          cursor: value <= min ? 'not-allowed' : 'pointer',
          fontFamily: 'var(--font-inter)',
          fontSize: '18px',
          fontWeight: 300,
          touchAction: 'manipulation',
          transition: 'background 0.15s',
        }}
      >
        −
      </button>

      <div
        aria-live="polite"
        style={{
          width: '56px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.15)',
          fontFamily: 'var(--font-playfair)',
          fontWeight: 500,
          fontSize: '18px',
          color: 'var(--blanc)',
          userSelect: 'none',
        }}
      >
        {value}
      </div>

      <button
        type="button"
        onClick={inc}
        disabled={value >= max}
        aria-label={`Aumentar ${label}`}
        style={{
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderLeft: 'none',
          color: value >= max ? 'rgba(255,255,255,0.25)' : 'var(--blanc)',
          cursor: value >= max ? 'not-allowed' : 'pointer',
          fontFamily: 'var(--font-inter)',
          fontSize: '18px',
          fontWeight: 300,
          touchAction: 'manipulation',
          transition: 'background 0.15s',
        }}
      >
        +
      </button>
    </div>
  );
}
