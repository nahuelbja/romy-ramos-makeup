'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/services';
import { formatGs } from '@/lib/formatters';

const featuresMap: Record<string, string[]> = {
  social: [
    'Maquillaje natural',
    'Tonos neutros',
    'Maquillaje con pestañas',
    'Acabado fresco, sin mucha intensidad en los ojos',
  ],
  glam: [
    'Maquillaje completo con pestañas',
    'Brillo opcional',
    'Mayor intensidad y marcación en la mirada',
  ],
  novia: [
    'Facial básico previo al maquillaje',
    'Diseño de piel personalizado (piel seca, oleosa o madura)',
    'Productos profesionales de larga duración',
    'Aplicación de pestañas postizas (opcional, sin costo adicional)',
    'Bata de novia durante todo el procedimiento',
  ],
};

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--blanc)',
        border: '1px solid var(--light-grey)',
        padding: '48px 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease',
        borderColor: hovered ? 'var(--champagne)' : 'var(--light-grey)',
      }}
    >
      {/* Hover top border animation */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '2px',
          background: 'var(--champagne)',
          width: hovered ? '100%' : '0%',
          transition: 'width 0.4s ease',
        }}
      />

      {/* Number */}
      <div
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.3em',
          color: 'var(--champagne)',
        }}
      >
        — {service.number} —
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-playfair)',
          fontWeight: 500,
          fontSize: '28px',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          color: 'var(--noir)',
        }}
      >
        {service.name}
      </h3>

      {/* Price */}
      <div
        style={{
          fontFamily: 'var(--font-playfair)',
          fontWeight: 500,
          fontSize: '22px',
          color: 'var(--noir)',
        }}
      >
        {formatGs(service.base + (service.included?.price ?? 0))}
      </div>

      {/* Champagne line */}
      <div style={{ width: '40px', height: '1px', background: 'var(--champagne)' }} />

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '15px',
          lineHeight: 1.7,
          color: 'var(--cendre)',
        }}
      >
        {service.id === 'social' && 'Ideal para eventos, reuniones y celebraciones. Un maquillaje pulido y elegante que dura todo el día.'}
        {service.id === 'glam' && 'Para las noches que merecen ser recordadas. Intensidad, definición y una presencia que no pasa desapercibida.'}
        {service.id === 'novia' && 'Una experiencia completa pensada para vos. Desde la preparación de la piel hasta el último detalle, todo para que te sientas única.'}
      </p>

      {/* Features */}
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '4px' }}>
        {featuresMap[service.id].map((f) => (
          <li
            key={f}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              fontFamily: 'var(--font-inter)',
              fontSize: '14px',
              color: 'var(--cendre)',
              lineHeight: 1.5,
            }}
          >
            <span style={{ color: 'var(--champagne)', flexShrink: 0, marginTop: '1px' }}>—</span>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA — Novia lleva a su página dedicada */}
      <a
        href={service.id === 'novia' ? '/novias' : '#presupuesto'}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'var(--font-inter)',
          fontSize: '11px',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.3em',
          color: 'var(--noir)',
          textDecoration: 'none',
          marginTop: '8px',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => ((e.currentTarget).style.color = 'var(--champagne)')}
        onMouseLeave={(e) => ((e.currentTarget).style.color = 'var(--noir)')}
      >
        {service.id === 'novia' ? 'Ver más →' : 'Calcular →'}
      </a>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="servicios"
      style={{
        background: 'var(--blanc)',
        padding: '120px 40px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{
            textAlign: 'center',
            marginBottom: '72px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <span className="section-label" style={{ fontFamily: 'var(--font-inter)' }}>
            Servicios
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontSize: 'clamp(36px, 5vw, 60px)',
              color: 'var(--noir)',
              lineHeight: 1.05,
            }}
          >
            Mis Servicios
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 968px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
