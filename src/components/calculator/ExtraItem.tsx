'use client';

import { ExtraOption } from '@/types/calculator';
import { formatGs } from '@/lib/formatters';
import QuantitySelector from './QuantitySelector';
import ToggleGroup from './ToggleGroup';

interface ExtraItemProps {
  extra: ExtraOption;
  checked: boolean;
  onToggle: (id: string) => void;
  quantity: number;
  onQuantityChange: (val: number) => void;
  withLashes: boolean;
  onLashesToggle: (val: boolean) => void;
}

export default function ExtraItem({
  extra,
  checked,
  onToggle,
  quantity,
  onQuantityChange,
  withLashes,
  onLashesToggle,
}: ExtraItemProps) {
  const checkboxId = `extra-${extra.id}`;

  return (
    <div
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        paddingBottom: '20px',
      }}
    >
      {/* Main row */}
      <label
        htmlFor={checkboxId}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px',
          cursor: 'pointer',
          padding: '12px 0',
          WebkitTapHighlightColor: 'rgba(184,163,120,0.15)',
          touchAction: 'manipulation',
        }}
      >
        <input
          id={checkboxId}
          type="checkbox"
          className="custom-checkbox"
          checked={checked}
          onChange={() => onToggle(extra.id)}
          aria-label={extra.label}
          style={{ marginTop: '3px' }}
        />

        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '15px',
              fontWeight: 400,
              color: checked ? 'var(--blanc)' : 'rgba(255,255,255,0.75)',
              lineHeight: 1.4,
              transition: 'color 0.2s',
            }}
          >
            {extra.label}
          </div>
          {extra.note && (
            <div
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontStyle: 'italic',
                fontSize: '14px',
                color: 'rgba(255,255,255,0.4)',
                marginTop: '3px',
              }}
            >
              {extra.note}
            </div>
          )}
        </div>

        <div
          style={{
            fontFamily: 'var(--font-playfair)',
            fontWeight: 500,
            fontSize: '15px',
            color: checked ? 'var(--champagne)' : 'rgba(184,163,120,0.5)',
            transition: 'color 0.2s',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          + {formatGs(extra.price)}
        </div>
      </label>

      {/* Sub-options when checked */}
      {checked && (extra.hasQuantity || extra.hasToggle) && (
        <div
          style={{
            marginLeft: '38px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            paddingTop: '4px',
          }}
          className="extra-suboptions"
        >
          {extra.hasQuantity && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '12px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {extra.quantityLabel ?? 'Cantidad'}
              </span>
              <QuantitySelector
                value={quantity}
                min={1}
                max={extra.quantityMax ?? 10}
                onChange={onQuantityChange}
                label={extra.quantityUnit ?? 'acompañantes'}
              />
            </div>
          )}

          {extra.hasToggle && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '12px',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  {extra.toggleLabel}
                </span>
                {extra.togglePrice && (
                  <span
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '11px',
                      color: 'rgba(184,163,120,0.6)',
                      marginLeft: '8px',
                    }}
                  >
                    +Gs. {extra.togglePrice.toLocaleString('es-PY')} c/u
                  </span>
                )}
              </div>
              <ToggleGroup
                options={[
                  { id: 'si', label: 'Sí' },
                  { id: 'no', label: 'No' },
                ]}
                selected={withLashes ? 'si' : 'no'}
                onChange={(v) => onLashesToggle(v === 'si')}
                ariaLabel="Incluir pestañas"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
