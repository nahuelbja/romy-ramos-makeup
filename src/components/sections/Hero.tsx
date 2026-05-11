'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const HERO_IMAGES = [
  '/IMG_0218.jpeg',
  '/IMG_0219.jpeg',
  '/IMG_0220.jpeg',
  '/IMG_0221.jpeg',
  '/IMG_0223.jpeg',
  '/IMG_0225.jpeg',
  '/IMG_0226.jpeg',
];

const INTERVAL_MS = 2000;

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease, delay },
  }),
};

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="hero-section"
      style={{
        width: '100%',
        position: 'relative',
        background: 'var(--ivoire)',
      }}
    >
      {/* Image container — clips slide transitions */}
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
              src={HERO_IMAGES[current]}
              alt="Romy Ramos Makeup"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center center' }}
              priority={current === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* White overlay */}
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

      {/* Content — sticky, stays centered in viewport as user scrolls */}
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
            Maquillaje Profesional
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
          ROMY RAMOS
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
          MAKEUP
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
          Cada rostro es una obra única. Mi trabajo es revelarla.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.55}
          variants={fadeUp}
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
            Calcular Presupuesto
          </a>
        </motion.div>

        {/* Slide dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ display: 'flex', gap: '8px', marginTop: '40px' }}
        >
          {HERO_IMAGES.map((_, i) => (
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

        {/* Scroll indicator — bottom of first viewport */}
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

      <style jsx global>{`
        @media (min-width: 769px) {
          .hero-section {
            aspect-ratio: 4 / 5;
            min-height: 100vh;
          }
        }
        @media (max-width: 768px) {
          .hero-section {
            min-height: 100vh;
          }
        }
      `}</style>
    </section>
  );
}
