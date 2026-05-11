export type ServiceType = 'social' | 'glam' | 'novia';

export interface ExtraOption {
  id: string;
  label: string;
  note?: string;
  price: number;
  hasQuantity?: boolean;
  hasToggle?: boolean;
  toggleLabel?: string;
  togglePrice?: number;
}

export interface Service {
  id: ServiceType;
  number: string;
  name: string;
  base: number;
  extras: ExtraOption[];
}

export type CityOption = 'none' | 'asuncion' | 'outside';

export interface CalculatorState {
  serviceType: ServiceType;
  selectedExtras: Set<string>;
  companionCount: number;
  companionWithLashes: boolean;
  city: CityOption;
}
