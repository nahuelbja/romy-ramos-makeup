'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_DISPLAY, WHATSAPP_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '@/lib/constants';

interface ContactCardProps {
  icon: string;
  label: string;
  value: string;
  href: string;
  ariaLabel: string;
  index: number;
}

function ContactCard({ icon, label, value, href, ariaLabel, index }: ContactCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: index * 0.12 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        padding: '64px 40px',
        border: '1px solid var(--light-grey)',
        textDecoration: 'none',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s',
        borderColor: hovered ? 'var(--noir)' : 'var(--light-grey)',
      }}
    >
      {/* Hover fill from bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: hovered ? '100%' : '0%',
          background: 'var(--noir)',
          transition: 'height 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          zIndex: 0,
        }}
      />

      {/* Icon */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          fontFamily: 'var(--font-playfair)',
          fontWeight: 500,
          fontSize: '64px',
          lineHeight: 1,
          color: hovered ? 'var(--champagne)' : 'var(--champagne)',
          transition: 'color 0.3s',
          userSelect: 'none',
        }}
      >
        {icon}
      </div>

      {/* Label */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '11px',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: hovered ? 'rgba(255,255,255,0.5)' : 'var(--cendre)',
            transition: 'color 0.3s',
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-playfair)',
            fontWeight: 400,
            fontSize: '20px',
            letterSpacing: '0.04em',
            color: hovered ? 'var(--blanc)' : 'var(--noir)',
            transition: 'color 0.3s',
            textAlign: 'center',
          }}
        >
          {value}
        </span>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section
      id="contacto"
      style={{
        background: 'var(--ivoire)',
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
            Contacto
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
            Hablemos
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontSize: '20px',
              color: 'var(--cendre)',
              maxWidth: '420px',
            }}
          >
            Estoy disponible para consultas, reservas y presupuestos personalizados.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
          }}
        >
          <ContactCard
            icon="W"
            label="WhatsApp"
            value={WHATSAPP_DISPLAY}
            href={WHATSAPP_URL}
            ariaLabel="Contactar por WhatsApp"
            index={0}
          />
          <ContactCard
            icon="I"
            label="Instagram"
            value={INSTAGRAM_HANDLE}
            href={INSTAGRAM_URL}
            ariaLabel="Ver perfil de Instagram"
            index={1}
          />
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 640px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
