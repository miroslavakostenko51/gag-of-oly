/** 1240 -> "1 240". Thin groups read better under the wide letter-spacing. */
export function formatScore(value: number): string {
  const safe = Math.max(0, Math.round(value));
  return String(safe).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function pad2(value: number): string {
  return value < 10 ? '0' + value : String(value);
}
