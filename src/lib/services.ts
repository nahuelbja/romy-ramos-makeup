import { Service } from '@/types/calculator';

export const SERVICES: Service[] = [
  {
    id: 'social',
    number: '01',
    name: 'Social',
    base: 280000,
    extras: [
      {
        id: 'peinado',
        label: 'Peinado',
        note: 'desde Gs. 300.000, ajuste por WhatsApp',
        price: 300000,
      },
    ],
  },
  {
    id: 'glam',
    number: '02',
    name: 'Glam',
    base: 330000,
    extras: [
      {
        id: 'peinado',
        label: 'Peinado',
        note: 'desde Gs. 300.000, ajuste por WhatsApp',
        price: 300000,
      },
    ],
  },
  {
    id: 'novia',
    number: '03',
    name: 'Novia',
    base: 850000,
    baseLabel: 'Servicio de maquillaje nupcial',
    included: {
      label: 'Spot de maquillaje',
      price: 500000,
      description:
        'Incluye silla profesional de maquillaje, luces, bata de novia y todas las comodidades para tu gran día.',
    },
    extras: [
      // --- Para la novia ---
      {
        id: 'prueba_maquillaje',
        label: 'Prueba de maquillaje',
        price: 400000,
      },
      {
        id: 'prueba_peinado',
        label: 'Prueba de peinado',
        note: 'desde Gs. 400.000, ajuste por WhatsApp',
        price: 400000,
      },
      {
        id: 'peinado_novia',
        label: 'Peinado de novia',
        price: 700000,
      },
      {
        id: 'cambio_look',
        label: 'Cambio de look (2do maquillaje)',
        price: 400000,
      },
      {
        id: 'sesion_fotos',
        label: 'Maquillaje para sesión de fotos previa',
        note: 'Sin retoque ni acompañamiento',
        price: 500000,
      },
      {
        id: 'acompanamiento',
        label: 'Acompañamiento durante la boda',
        note: 'Gs. 400.000 por hora',
        price: 400000,
        hasQuantity: true,
        quantityLabel: 'Horas',
        quantityUnit: 'horas',
        quantityMax: 12,
      },
      // --- Para las acompañantes ---
      {
        id: 'acompanantes',
        label: 'Maquillajes para acompañantes',
        price: 300000,
        hasQuantity: true,
        quantityUnit: 'acompañantes',
        hasToggle: true,
        toggleLabel: '+ pestañas',
        togglePrice: 50000,
      },
      {
        id: 'peinado_acompanantes',
        label: 'Peinado para acompañantes',
        note: 'desde Gs. 300.000, ajuste por WhatsApp',
        price: 300000,
        hasQuantity: true,
        quantityUnit: 'acompañantes',
      },
    ],
  },
];

export function getService(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}

// Traslado prices (only for novia)
export const TRASLADO_OPTIONS = [
  { id: 'none', label: 'Sin traslado', price: 0 },
  { id: 'asuncion', label: 'Asunción y alrededores', price: 400000 },
  { id: 'outside', label: 'Fuera del área', price: 0 }, // 30% sobre subtotal
];
