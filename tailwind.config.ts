import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        noir: '#0A0A0A',
        blanc: '#FFFFFF',
        ivoire: '#FAFAFA',
        cendre: '#8A8580',
        champagne: '#B8A378',
        'light-grey': '#E8E6E3',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
