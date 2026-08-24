'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { getService } from '@/lib/services';
import { formatGs } from '@/lib/formatters';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Intervalo del carrusel de portada (igual que la portada de inicio)
const INTERVAL_MS = 2000;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease, delay },
  }),
};

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

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % NOVIA_GALLERY.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ===== HERO NOVIA — mismo comportamiento que la portada de inicio ===== */}
      <section
        className="novia-hero-section"
        style={{
          width: '100%',
          position: 'relative',
          background: 'var(--ivoire)',
        }}
      >
        {/* Contenedor de imágenes — recorta la transición entre fotos */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: 0,
          }}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <Image
                src={NOVIA_GALLERY[current]}
                alt="Novia maquillada por Romy Ramos"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center center' }}
                priority={current === 0}
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Velo blanco */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.78)',
            zIndex: 1,
          }}
        />

        {/* Contenido — sticky, queda centrado mientras se scrollea la foto */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 2,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '120px 40px 100px',
            textAlign: 'center',
          }}
        >
          {/* Label */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            style={{ marginBottom: '48px' }}
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
                gap: '12px',
              }}
            >
              Experiencia Novia
              <span
                style={{
                  display: 'block',
                  width: '40px',
                  height: '1px',
                  background: 'var(--champagne)',
                }}
              />
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.15}
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-playfair)',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontSize: 'clamp(60px, 10vw, 160px)',
              lineHeight: 0.9,
              color: 'var(--noir)',
              marginBottom: '8px',
            }}
          >
            TU DÍA
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.25}
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-playfair)',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.6em',
              fontSize: 'clamp(18px, 3vw, 36px)',
              color: 'var(--noir)',
              marginBottom: '48px',
            }}
          >
            NOVIAS
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '20px',
              color: 'var(--cendre)',
              maxWidth: '480px',
              lineHeight: 1.6,
              marginBottom: '56px',
            }}
          >
            Una experiencia pensada solo para vos. Desde la primera prueba hasta el último retoque.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.55}
            variants={fadeUp}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
            className="novia-cta-group"
          >
            <a
              href="#presupuesto"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--noir)',
                color: 'var(--blanc)',
                border: '1px solid var(--noir)',
                padding: '18px 48px',
                fontFamily: 'var(--font-inter)',
                fontSize: '11px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = 'transparent';
                el.style.color = 'var(--noir)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = 'var(--noir)';
                el.style.color = 'var(--blanc)';
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
                color: 'var(--noir)',
                border: '1px solid var(--noir)',
                padding: '18px 48px',
                fontFamily: 'var(--font-inter)',
                fontSize: '11px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = 'var(--noir)';
                el.style.color = 'var(--blanc)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = 'transparent';
                el.style.color = 'var(--noir)';
              }}
            >
              <span aria-hidden="true">←</span> Otros servicios
            </Link>
          </motion.div>

          {/* Puntitos del carrusel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{ display: 'flex', gap: '8px', marginTop: '40px' }}
          >
            {NOVIA_GALLERY.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Foto ${i + 1}`}
                style={{
                  width: i === current ? '24px' : '6px',
                  height: '6px',
                  background: i === current ? 'var(--champagne)' : 'rgba(0,0,0,0.2)',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.4s ease',
                }}
              />
            ))}
          </motion.div>

          {/* Indicador de scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            style={{
              position: 'absolute',
              bottom: '32px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'var(--cendre)',
            }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ChevronDown size={18} strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        </div>

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
        @media (min-width: 769px) {
          .novia-hero-section {
            aspect-ratio: 4 / 5;
            min-height: 100vh;
          }
        }
        @media (max-width: 768px) {
          .novia-hero-section {
            min-height: 100vh;
          }
        }
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
