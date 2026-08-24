'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getService } from '@/lib/services';
import { formatGs } from '@/lib/formatters';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Foto de portada de la página de novias
export const NOVIA_HERO = '/novia-6.jpg';

// Galería "Mis Novias" — para agregar o cambiar fotos,
// subilas a /public y editá esta lista.
export const NOVIA_GALLERY = [
  '/novia-1.jpg',
  '/novia-2.jpg',
  '/novia-3.jpg',
  '/novia-4.jpg',
  '/novia-5.jpg',
  '/novia-6.jpg',
];

const INCLUYE = [
  {
    titulo: 'Facial básico previo',
    detalle: 'Preparamos tu piel antes del maquillaje para que todo asiente perfecto.',
  },
  {
    titulo: 'Diseño de piel personalizado',
    detalle: 'Adaptado a tu tipo de piel: seca, oleosa o madura.',
  },
  {
    titulo: 'Productos de larga duración',
    detalle: 'Cosmética profesional que aguanta el día entero y las fotos.',
  },
  {
    titulo: 'Pestañas postizas',
    detalle: 'Aplicación opcional, sin costo adicional.',
  },
  {
    titulo: 'Bata de novia',
    detalle: 'Para que estés cómoda y elegante durante todo el procedimiento.',
  },
  {
    titulo: 'Spot de maquillaje',
    detalle: 'Silla profesional, luces y todas las comodidades para tu gran día.',
  },
];

const PASOS = [
  { n: '01', t: 'Conversamos', d: 'Me contás cómo te imaginás ese día y definimos juntas el estilo.' },
  { n: '02', t: 'Prueba previa', d: 'Probamos el look completo con tiempo, sin apuro, hasta que sea el indicado.' },
  { n: '03', t: 'El gran día', d: 'Llego con todo listo. Vos solo tenés que disfrutar.' },
];

export default function NoviasContent() {
  const novia = getService('novia')!;
  const desde = novia.base + (novia.included?.price ?? 0);

  return (
    <>
      {/* ===== HERO NOVIA ===== */}
      <section
        style={{
          position: 'relative',
          minHeight: '92vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--noir)',
          overflow: 'hidden',
        }}
      >
        <Image
          src={NOVIA_HERO}
          alt="Novia maquillada por Romy Ramos"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.72) 100%)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            padding: '140px 24px 100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '28px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: 'rgba(255,255,255,0.65)',
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            Experiencia Novia
            <span style={{ display: 'block', width: '40px', height: '1px', background: 'var(--champagne)' }} />
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-playfair)',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontSize: 'clamp(44px, 9vw, 120px)',
              lineHeight: 0.95,
              color: 'var(--blanc)',
            }}
          >
            Tu Día
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontSize: 'clamp(18px, 2.4vw, 24px)',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '540px',
              lineHeight: 1.6,
            }}
          >
            Una experiencia pensada solo para vos. Desde la primera prueba hasta el último retoque.
          </p>

          <div
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
            className="novia-cta-group"
          >
            <a
              href="#presupuesto"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--champagne)',
                color: 'var(--noir)',
                border: '1px solid var(--champagne)',
                padding: '18px 44px',
                fontFamily: 'var(--font-inter)',
                fontSize: '11px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              Ver Precios
            </a>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: 'transparent',
                color: 'var(--blanc)',
                border: '1px solid rgba(255,255,255,0.45)',
                padding: '18px 44px',
                fontFamily: 'var(--font-inter)',
                fontSize: '11px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              <span aria-hidden="true">←</span> Otros servicios
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ===== LA EXPERIENCIA (pasos) ===== */}
      <section style={{ background: 'var(--ivoire)', padding: '120px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
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
              La experiencia
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                fontSize: 'clamp(32px, 5vw, 56px)',
                color: 'var(--noir)',
                lineHeight: 1.05,
              }}
            >
              Cómo Trabajamos
            </h2>
          </motion.div>

          <div className="novia-pasos">
            {PASOS.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease, delay: i * 0.12 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.3em',
                    color: 'var(--champagne)',
                  }}
                >
                  — {p.n} —
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 500,
                    fontSize: '24px',
                    letterSpacing: '0.02em',
                    color: 'var(--noir)',
                  }}
                >
                  {p.t}
                </h3>
                <div style={{ width: '40px', height: '1px', background: 'var(--champagne)' }} />
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: 'var(--cendre)',
                  }}
                >
                  {p.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUÉ INCLUYE ===== */}
      <section style={{ background: 'var(--blanc)', padding: '120px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            style={{
              textAlign: 'center',
              marginBottom: '64px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <span className="section-label" style={{ fontFamily: 'var(--font-inter)' }}>
              Incluido
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                fontSize: 'clamp(32px, 5vw, 56px)',
                color: 'var(--noir)',
                lineHeight: 1.05,
              }}
            >
              Qué Incluye
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontStyle: 'italic',
                fontSize: '18px',
                color: 'var(--cendre)',
                maxWidth: '480px',
              }}
            >
              Todo esto viene con el servicio de novia, sin cargo extra.
            </p>
          </motion.div>

          <div className="novia-incluye">
            {INCLUYE.map((item, i) => (
              <motion.div
                key={item.titulo}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease, delay: (i % 3) * 0.1 }}
                style={{
                  border: '1px solid var(--light-grey)',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <span style={{ color: 'var(--champagne)', fontSize: '18px', lineHeight: 1 }}>—</span>
                <h3
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 500,
                    fontSize: '20px',
                    color: 'var(--noir)',
                  }}
                >
                  {item.titulo}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px',
                    lineHeight: 1.7,
                    color: 'var(--cendre)',
                  }}
                >
                  {item.detalle}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Precio desde */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            style={{
              marginTop: '64px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
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
              }}
            >
              Desde
            </span>
            <span
              style={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 500,
                fontSize: 'clamp(36px, 5vw, 52px)',
                color: 'var(--noir)',
                lineHeight: 1,
              }}
            >
              {formatGs(desde)}
            </span>
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontStyle: 'italic',
                fontSize: '16px',
                color: 'var(--cendre)',
              }}
            >
              Armá tu presupuesto exacto más abajo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== GALERÍA ===== */}
      <section style={{ background: 'var(--ivoire)', padding: '120px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            style={{
              textAlign: 'center',
              marginBottom: '64px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <span className="section-label" style={{ fontFamily: 'var(--font-inter)' }}>
              Galería
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                fontSize: 'clamp(32px, 5vw, 56px)',
                color: 'var(--noir)',
                lineHeight: 1.05,
              }}
            >
              Mis Novias
            </h2>
          </motion.div>

          <div className="novia-galeria">
            {NOVIA_GALLERY.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease, delay: (i % 3) * 0.08 }}
                style={{
                  position: 'relative',
                  aspectRatio: '3 / 4',
                  overflow: 'hidden',
                  background: 'var(--light-grey)',
                }}
              >
                <Image
                  src={src}
                  alt={`Novia maquillada por Romy Ramos ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 968px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .novia-pasos {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .novia-incluye {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .novia-galeria {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 968px) {
          .novia-pasos,
          .novia-incluye,
          .novia-galeria {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .novia-pasos,
          .novia-incluye,
          .novia-galeria {
            grid-template-columns: 1fr !important;
          }
          .novia-cta-group {
            flex-direction: column !important;
            width: 100%;
            max-width: 320px;
          }
          .novia-cta-group a {
            width: 100% !important;
          }
        }
      `}</style>
    </>
  );
}
