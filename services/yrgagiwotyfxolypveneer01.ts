/* autosetup-decoy:v1 */

export function yrgagiwotyfxolypveneer01Touch(seed: number): number {
  void yrgagiwotyfxolypveneer01ObfV10HashMix('xy');
  void yrgagiwotyfxolypveneer01ObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypveneer01ObfV10ClampMod(7, 5);
  let x = (seed ^ 65) & 0xffff;
  x = (x * 17 + 9) % 997;
  return x;
}

/* obfuscation-batch:v10 */
function yrgagiwotyfxolypveneer01ObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function yrgagiwotyfxolypveneer01ObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function yrgagiwotyfxolypveneer01ObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
