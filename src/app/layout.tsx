import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Romy Ramos Makeup — Maquillaje profesional en Paraguay',
  description:
    'Maquillaje profesional para novias, eventos sociales, glam y producciones editoriales. Atención personalizada en Asunción y todo Paraguay.',
  openGraph: {
    title: 'Romy Ramos Makeup — Maquillaje profesional en Paraguay',
    description:
      'Maquillaje profesional para novias, eventos sociales, glam y producciones editoriales.',
    type: 'website',
    locale: 'es_PY',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
