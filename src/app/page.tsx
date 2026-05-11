import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Calculator from '@/components/sections/Calculator';
import Policies from '@/components/sections/Policies';
import Contact from '@/components/sections/Contact';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Calculator />
        <Policies />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
