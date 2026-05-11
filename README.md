# Romy Ramos Makeup

Sitio web profesional para Romy Ramos Makeup — maquilladora profesional en Paraguay.

Construido con Next.js 14 (App Router), TypeScript, Tailwind CSS y Framer Motion.

---

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

Para build de producción:

```bash
npm run build
npm start
```

---

## Dónde editar precios y servicios

Todos los precios y la definición de servicios están centralizados en:

```
src/lib/services.ts
```

Ahí encontrarás el array `SERVICES` con:
- `base`: precio base de cada servicio en Gs.
- `extras`: lista de adicionales con su `price`
- `note`: texto aclaratorio en itálica (para "desde X")

También está `TRASLADO_OPTIONS` para los valores del traslado del servicio Novia.

Ejemplo de cómo cambiar el precio base de Social de 280.000 a 300.000:
```ts
// services.ts
{ id: 'social', base: 300000, ... }
```

---

## Dónde cambiar WhatsApp e Instagram

```
src/lib/constants.ts
```

Variables disponibles:
- `WHATSAPP_NUMBER` — número sin el `+` (ej: `595971521131`)
- `WHATSAPP_DISPLAY` — número formateado para mostrar (ej: `0971 521 131`)
- `INSTAGRAM_HANDLE` — handle con @ (ej: `@makeup.romyramos`)
- `INSTAGRAM_URL` — URL completa de Instagram

---

## Cómo agregar la foto real en la sección "Sobre mí"

1. Guardá la foto en `public/about.jpg` (recomendado: proporción 3:4, mínimo 800x1067px)
2. Abrí `src/components/sections/About.tsx`
3. Reemplazá el bloque del placeholder (el `<div>` con el monograma RR decorativo) por:

```tsx
import Image from 'next/image';

<Image
  src="/about.jpg"
  alt="Romy Ramos — Maquilladora profesional"
  fill
  style={{ objectFit: 'cover' }}
  sizes="(max-width: 968px) 100vw, 50vw"
  priority
/>
```

El `<div>` padre ya tiene `position: 'relative'` y `aspectRatio: '3/4'`, así que el `fill` de Next/Image funcionará directo.

---

## Stack técnico

| Tecnología | Uso |
|---|---|
| Next.js 14 | Framework (App Router) |
| TypeScript | Tipado estático |
| Tailwind CSS | Utilidades de estilos |
| Framer Motion | Animaciones fadeUp on scroll |
| Lucide React | Íconos |
| Google Fonts | Playfair Display, Cormorant Garamond, Inter |

---

## Estructura de archivos

```
src/
├── app/
│   ├── layout.tsx          ← Fuentes, metadata SEO
│   ├── page.tsx            ← Composición de secciones
│   └── globals.css         ← CSS variables, reset
├── components/
│   ├── layout/
│   │   ├── TopBar.tsx      ← Barra superior (WhatsApp / Instagram)
│   │   ├── Header.tsx      ← Header sticky + menú mobile
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Calculator.tsx  ← Calculadora (sección crítica)
│   │   └── Contact.tsx
│   ├── calculator/
│   │   ├── TypeSelector.tsx
│   │   ├── ExtraItem.tsx
│   │   ├── QuantitySelector.tsx
│   │   ├── ToggleGroup.tsx
│   │   └── TotalBar.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── SectionLabel.tsx
│   └── FloatingWhatsApp.tsx
├── lib/
│   ├── services.ts         ← ⭐ EDITAR PRECIOS AQUÍ
│   ├── constants.ts        ← ⭐ EDITAR WHATSAPP/INSTAGRAM AQUÍ
│   └── formatters.ts
└── types/
    └── calculator.ts
```

---

© 2026 · Romy Ramos Makeup · Paraguay
