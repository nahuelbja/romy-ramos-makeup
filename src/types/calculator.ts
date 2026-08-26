export type ServiceType = 'social' | 'glam' | 'novia';

export interface ExtraOption {
  id: string;
  label: string;
  note?: string;
  price: number;
  hasQuantity?: boolean;
  /** Título del selector de cantidad. Por defecto "Cantidad". */
  quantityLabel?: string;
  /** Qué se está contando: "acompañantes", "horas". Se usa en el resumen. */
  quantityUnit?: string;
  quantityMax?: number;
  hasToggle?: boolean;
  toggleLabel?: string;
  togglePrice?: number;
}

export interface IncludedItem {
  label: string;
  price: number;
  description: string;
}

export interface Service {
  id: ServiceType;
  number: string;
  name: string;
  base: number;
  /** Cómo se titula el precio base. Por defecto "Precio base — {nombre}". */
  baseLabel?: string;
  extras: ExtraOption[];
  included?: IncludedItem;
}

export type CityOption = 'none' | 'asuncion' | 'outside';

export interface CalculatorState {
  serviceType: ServiceType;
  selectedExtras: Set<string>;
  companionCount: number;
  companionWithLashes: boolean;
  city: CityOption;
}
