/* autosetup-split:v1 */

export function yrgagiwotyfxolypGameFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

/* obfuscation-batch:v10 */
export function configyrgagiwotyfxolypPart02ObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
export function configyrgagiwotyfxolypPart02ObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
export function configyrgagiwotyfxolypPart02ObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
