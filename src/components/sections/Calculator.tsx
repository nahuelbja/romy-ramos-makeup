'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { SERVICES, TRASLADO_OPTIONS } from '@/lib/services';
import { formatGs } from '@/lib/formatters';
import { ServiceType, CityOption } from '@/types/calculator';
import TypeSelector from '@/components/calculator/TypeSelector';
import ExtraItem from '@/components/calculator/ExtraItem';
import TotalBar from '@/components/calculator/TotalBar';
import ToggleGroup from '@/components/calculator/ToggleGroup';

export default function Calculator() {
  const [serviceType, setServiceType] = useState<ServiceType>('social');
  const [selectedExtras, setSelectedExtras] = useState<Set<string>>(new Set());
  const [companionCount, setCompanionCount] = useState(1);
  const [companionWithLashes, setCompanionWithLashes] = useState(false);
  const [city, setCity] = useState<CityOption>('none');

  const currentService = useMemo(
    () => SERVICES.find((s) => s.id === serviceType)!,
    [serviceType]
  );

  const handleTypeChange = useCallback((type: ServiceType) => {
    setServiceType(type);
    setSelectedExtras(new Set());
    setCompanionCount(1);
    setCompanionWithLashes(false);
    setCity('none');
  }, []);

  const toggleExtra = useCallback((id: string) => {
    setSelectedExtras((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const { total, extrasBreakdown } = useMemo(() => {
    const includedPrice = currentService.included?.price ?? 0;
    const base = currentService.base + includedPrice;
    let extras = 0;
    const extrasBreakdown: Array<{ label: string; price: number }> = [];

    for (const extra of currentService.extras) {
      if (!selectedExtras.has(extra.id)) continue;

      if (extra.hasQuantity) {
        const unitPrice = extra.price + (companionWithLashes && extra.hasToggle ? (extra.togglePrice ?? 0) : 0);
        const totalPrice = unitPrice * companionCount;
        extras += totalPrice;
        extrasBreakdown.push({
          label: `${extra.label} x${companionCount}${companionWithLashes ? ' + pestañas' : ''}`,
          price: totalPrice,
        });
      } else {
        extras += extra.price;
        extrasBreakdown.push({ label: extra.label, price: extra.price });
      }
    }

    const subtotalBase = base + extras;

    let trasladoPrice = 0;
    if (city === 'asuncion') {
      trasladoPrice = serviceType === 'novia' ? 400000 : 100000;
      extrasBreakdown.push({ label: 'Traslado — Asunción y alrededores', price: trasladoPrice });
    } else if (city === 'outside') {
      const fijo = serviceType === 'novia' ? 400000 : 100000;
      const porcentaje = Math.round(subtotalBase * 0.25);
      trasladoPrice = fijo + porcentaje;
      extrasBreakdown.push({ label: `Fuera del área — ${formatGs(fijo)} + 25% (${formatGs(porcentaje)})`, price: trasladoPrice });
    }

    return {
      subtotal: subtotalBase,
      total: subtotalBase + trasladoPrice,
      extrasBreakdown,
    };
  }, [currentService, selectedExtras, companionCount, companionWithLashes, city, serviceType]);

  const calNotes = useMemo(() => {
    const lines: string[] = [`Servicio: ${currentService.name}`];

    if (currentService.included) {
      lines.push(`Maquillaje: ${formatGs(currentService.base)}`);
      lines.push(`${currentService.included.label}: ${formatGs(currentService.included.price)}`);
    } else {
      lines.push(`Base: ${formatGs(currentService.base)}`);
    }

    lines.push('', 'Adicionales:');

    if (extrasBreakdown.length === 0) {
      lines.push('• Sin adicionales');
    } else {
      extrasBreakdown.forEach((e) => {
        lines.push(`• ${e.label}: ${formatGs(e.price)}`);
      });
    }

    lines.push('');
    lines.push(`Total estimado: ${formatGs(total)}`);
    return lines.join('\n');
  }, [currentService, extrasBreakdown, total]);

  const isNovia = serviceType === 'novia';
  const nonTrasladoExtras = currentService.extras;
  const SOCIAL_GLAM_ZONE_OPTIONS = [
    { id: 'asuncion', label: 'Asunción (+Gs. 100.000)' },
    { id: 'outside', label: 'Fuera del área (+Gs. 100.000 + 25%)' },
  ];

  return (
    <section
      id="presupuesto"
      style={{
        background: 'var(--noir)',
        padding: '120px 0',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px' }} className="calc-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{
            textAlign: 'center',
            marginBottom: '64px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: 'rgba(255,255,255,0.4)',
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            Calculadora
            <span style={{ display: 'block', width: '40px', height: '1px', background: 'var(--champagne)' }} />
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontSize: 'clamp(36px, 5vw, 60px)',
              color: 'var(--blanc)',
              lineHeight: 1.05,
            }}
          >
            Tu Presupuesto
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontSize: '18px',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '440px',
            }}
          >
            Personalizá tu servicio y obtené un estimado al instante.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 }}
          style={{
            border: '1px solid rgba(255,255,255,0.1)',
            overflow: 'hidden',
          }}
        >
          {/* Type selector */}
          <div style={{ padding: '24px 24px 0' }}>
            <TypeSelector
              services={SERVICES}
              selected={serviceType}
              onChange={handleTypeChange}
            />
          </div>

          {/* Base price display */}
          <div
            style={{
              padding: '20px 40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: currentService.included ? '1px solid rgba(255,255,255,0.04)' : '1px solid rgba(255,255,255,0.08)',
            }}
            className="base-price-row"
          >
            <span
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '12px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.25em',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              {currentService.included ? `Maquillaje — ${currentService.name}` : `Precio base — ${currentService.name}`}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 500,
                fontSize: '18px',
                color: 'var(--blanc)',
              }}
            >
              {formatGs(currentService.base)}
            </span>
          </div>

          {/* Included spot (always part of the package) */}
          {currentService.included && (
            <div
              style={{
                padding: '20px 40px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
              className="spot-row"
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '12px',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.25em',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    {currentService.included.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '9px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      color: 'var(--champagne)',
                      border: '1px solid var(--champagne)',
                      padding: '3px 8px',
                    }}
                  >
                    Incluido
                  </span>
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 500,
                    fontSize: '18px',
                    color: 'var(--blanc)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {formatGs(currentService.included.price)}
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontStyle: 'italic',
                  fontSize: '15px',
                  lineHeight: 1.5,
                  color: 'rgba(255,255,255,0.45)',
                  marginTop: '10px',
                  maxWidth: '520px',
                }}
              >
                {currentService.included.description}
              </p>
            </div>
          )}

          {/* Extras list */}
          <div style={{ padding: '8px 40px 24px' }} className="extras-section">
            <div
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '11px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                color: 'rgba(255,255,255,0.35)',
                padding: '20px 0 12px',
              }}
            >
              Adicionales
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {nonTrasladoExtras.map((extra) => (
                <ExtraItem
                  key={`${serviceType}-${extra.id}`}
                  extra={extra}
                  checked={selectedExtras.has(extra.id)}
                  onToggle={toggleExtra}
                  quantity={companionCount}
                  onQuantityChange={setCompanionCount}
                  withLashes={companionWithLashes}
                  onLashesToggle={setCompanionWithLashes}
                />
              ))}
            </div>

            {/* Zona / Traslado — all services */}
            <div style={{ paddingTop: '20px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '11px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.3em',
                  color: 'rgba(255,255,255,0.35)',
                  paddingBottom: '16px',
                }}
              >
                {isNovia ? 'Traslado a domicilio' : 'Zona del servicio'}
              </div>
              <ToggleGroup
                options={isNovia
                  ? TRASLADO_OPTIONS.filter((o) => o.id !== 'none').map((o) => ({
                      id: o.id,
                      label: o.id === 'asuncion' ? 'Asunción (+Gs. 400.000)' : 'Fuera del área (+Gs. 400.000 + 25%)',
                    }))
                  : SOCIAL_GLAM_ZONE_OPTIONS
                }
                selected={city}
                onChange={(v) => setCity(v as CityOption)}
                ariaLabel="Seleccionar zona del servicio"
              />
            </div>
          </div>

          {/* Total bar */}
          <TotalBar
            total={total}
            calNotes={calNotes}
            isSticky={false}
          />
        </motion.div>

        {/* Footer note */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontSize: '15px',
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            Los valores con &ldquo;desde&rdquo; pueden ajustarse al confirmar el servicio por WhatsApp
          </p>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 640px) {
          .calc-container {
            padding: 0 16px !important;
          }
          .base-price-row {
            padding: 16px 20px !important;
          }
          .spot-row {
            padding: 16px 20px !important;
          }
          .extras-section {
            padding: 8px 20px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
