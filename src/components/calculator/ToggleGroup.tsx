'use client';

interface ToggleGroupProps {
  options: { id: string; label: string }[];
  selected: string;
  onChange: (id: string) => void;
  ariaLabel?: string;
}

export default function ToggleGroup({ options, selected, onChange, ariaLabel }: ToggleGroupProps) {
  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}
    >
      {options.map((opt) => {
        const isActive = selected === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(opt.id)}
            style={{
              padding: '8px 20px',
              background: isActive ? 'var(--champagne)' : 'rgba(255,255,255,0.08)',
              border: `1px solid ${isActive ? 'var(--champagne)' : 'rgba(255,255,255,0.2)'}`,
              color: isActive ? 'var(--noir)' : 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--font-inter)',
              fontSize: '12px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              touchAction: 'manipulation',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              minHeight: '44px',
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
