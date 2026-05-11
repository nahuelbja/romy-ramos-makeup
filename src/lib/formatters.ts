export function formatGs(amount: number): string {
  return 'Gs. ' + amount.toLocaleString('es-PY').replace(/,/g, '.');
}

export function formatNumber(amount: number): string {
  return amount.toLocaleString('es-PY').replace(/,/g, '.');
}
