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
        note: 'desde Gs. 150.000, ajuste por WhatsApp',
        price: 150000,
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
        note: 'desde Gs. 150.000, ajuste por WhatsApp',
        price: 150000,
      },
    ],
  },
  {
    id: 'novia',
    number: '03',
    name: 'Novia',
    base: 850000,
    extras: [
      {
        id: 'prueba_maquillaje',
        label: 'Prueba de maquillaje',
        price: 400000,
      },
      {
        id: 'prueba_peinado',
        label: 'Prueba de peinado',
        note: 'desde Gs. 300.000, ajuste por WhatsApp',
        price: 300000,
      },
      {
        id: 'acompanantes',
        label: 'Maquillajes para acompañantes',
        price: 300000,
        hasQuantity: true,
        hasToggle: true,
        toggleLabel: '+ pestañas',
        togglePrice: 50000,
      },
      {
        id: 'peinado_acompanantes',
        label: 'Peinado para acompañantes',
        note: 'ajuste por WhatsApp',
        price: 150000,
        hasQuantity: true,
      },
      {
        id: 'acompanamiento',
        label: 'Acompañamiento durante la boda',
        price: 850000,
      },
      {
        id: 'sesion_fotos',
        label: 'Maquillaje para sesión de fotos previa',
        note: 'Sin retoque ni acompañamiento',
        price: 500000,
      },
      {
        id: 'cambio_look',
        label: 'Cambio de look (2do maquillaje)',
        price: 400000,
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
