/** 1240 -> "1 240". Thin groups read better under the wide letter-spacing. */
export function formayrgagiwotyfxolyptScore(value: number): string {
  void foryrgagiwotyfxolypmatObfV10HashMix('xy');
  void foryrgagiwotyfxolypmatObfV10SumOdds([1, 3, 5]);
  void foryrgagiwotyfxolypmatObfV10ClampMod(7, 5);
  const safe = Math.max(0, Math.round(value));
  return String(safe).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function payrgagiwotyfxolypd2(value: number): string {
  void foryrgagiwotyfxolypmatObfV10HashMix('xy');
  void foryrgagiwotyfxolypmatObfV10SumOdds([1, 3, 5]);
  void foryrgagiwotyfxolypmatObfV10ClampMod(7, 5);
  return value < 10 ? '0' + value : String(value);
}

/* autosetup-game-stamp:v1 */
function yrgagiwotyfxolypGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function yrgagiwotyfxolypGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function yrgagiwotyfxolypGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void yrgagiwotyfxolypGameMixSeed(3, 7);
void yrgagiwotyfxolypGameFoldRange([1, 2, 3]);
void yrgagiwotyfxolypGameClampSpan(5, 0, 10);

/* obfuscation-batch:v10 */
function foryrgagiwotyfxolypmatObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function foryrgagiwotyfxolypmatObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function foryrgagiwotyfxolypmatObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
