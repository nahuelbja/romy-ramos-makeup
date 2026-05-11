'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

export default function About() {
  return (
    <section
      id="sobre-mi"
      style={{
        background: 'var(--ivoire)',
        padding: '120px 40px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
        className="about-grid"
      >
        {/* Photo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          style={{ position: 'relative' }}
        >
          <div
            style={{
              aspectRatio: '3/4',
              position: 'relative',
              overflow: 'hidden',
              background: 'var(--light-grey)',
            }}
          >
            <Image
              src="/about.jpg"
              alt="Romy Ramos — Maquilladora profesional"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="(max-width: 968px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
        >
          <span className="section-label" style={{ fontFamily: 'var(--font-inter)' }}>
            Sobre mí
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontSize: 'clamp(32px, 4vw, 52px)',
              color: 'var(--noir)',
              lineHeight: 1.1,
            }}
          >
            Belleza a tu medida
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontSize: '20px',
              color: 'var(--cendre)',
              lineHeight: 1.6,
            }}
          >
            Con años de experiencia en maquillaje artístico y nupcial, mi misión es potenciar
            la belleza natural de cada persona de manera única e irrepetible.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'var(--cendre)',
            }}
          >
            Cada sesión comienza con una conversación para entender tu visión, tu estilo y el evento
            que celebrarás. Trabajo con productos de alta calidad, técnicas actualizadas y una mirada
            editorial que garantiza resultados duraderos y fotogénicos.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'var(--cendre)',
            }}
          >
            Especialista en maquillaje nupcial, social y de producción. Atiendo en Asunción y con
            traslado a todo el Paraguay. Cada look es diseñado para vos — porque tu rostro es único
            y merece ser revelado en su máximo esplendor.
          </p>

          <div
            style={{
              width: '40px',
              height: '1px',
              background: 'var(--champagne)',
            }}
          />
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
