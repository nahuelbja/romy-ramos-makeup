'use client';

import { motion } from 'framer-motion';

const POLICIES = [
  'Para confirmar la fecha, día y hora del servicio es necesario abonar una seña mínima desde Gs. 100.000.',
  'La totalidad del servicio se cancela antes de realizarse.',
  'El presupuesto no es reembolsable ni modificable.',
  'La seña no es reembolsable.',
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Policies() {
  return (
    <section
      style={{
        background: 'var(--ivoire)',
        padding: '80px 40px 64px',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '24px',
            marginBottom: '56px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: 'var(--cendre)',
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            Información importante
            <span style={{ display: 'block', width: '40px', height: '1px', background: 'var(--champagne)' }} />
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: 'var(--noir)',
              lineHeight: 1.1,
            }}
          >
            Políticas de reserva
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {POLICIES.map((policy, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'flex-start',
                padding: '24px 0',
                borderBottom: i < POLICIES.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '11px',
                  fontWeight: 500,
                  color: 'var(--champagne)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  paddingTop: '3px',
                  flexShrink: 0,
                }}
              >
                0{i + 1}
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '15px',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: 'var(--cendre)',
                }}
              >
                {policy}
              </p>
            </motion.div>
          ))}
        </div>

        <div
          style={{
            marginTop: '56px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, var(--champagne), transparent)',
          }}
        />
      </div>
    </section>
  );
}
