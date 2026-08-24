import type { Metadata } from 'next';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NoviasContent from '@/components/sections/NoviasContent';
import Calculator from '@/components/sections/Calculator';
import Contact from '@/components/sections/Contact';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: 'Novias — Romy Ramos Makeup | Maquillaje de novia en Paraguay',
  description:
    'Maquillaje profesional para novias en Paraguay. Prueba previa, spot de maquillaje, productos de larga duración y acompañamiento en tu gran día.',
  openGraph: {
    title: 'Novias — Romy Ramos Makeup',
    description:
      'Una experiencia de maquillaje pensada solo para tu día. Prueba previa, spot de maquillaje y acompañamiento.',
    type: 'website',
    locale: 'es_PY',
  },
};

export default function NoviasPage() {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Header />
      <main>
        <NoviasContent />
        <Calculator lockedService="novia" hideSectionHeader={false} />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
