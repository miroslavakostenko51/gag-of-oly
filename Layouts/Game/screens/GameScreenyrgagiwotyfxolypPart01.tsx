/* autosetup-split:v1 */

export function yrgagiwotyfxolypGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function yrgagiwotyfxolypGameFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function yrgagiwotyfxolypGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v10 */
export function GameScreenyrgagiwotyfxolypPart01ObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
export function GameScreenyrgagiwotyfxolypPart01ObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
export function GameScreenyrgagiwotyfxolypPart01ObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v10 */
export function GameyrgagiwotyfxolypScreenObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
export function GameyrgagiwotyfxolypScreenObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
export function GameyrgagiwotyfxolypScreenObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
