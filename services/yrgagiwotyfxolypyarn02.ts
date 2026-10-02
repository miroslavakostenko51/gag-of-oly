/* autosetup-decoy:v1 */

export function yrgagiwotyfxolypyarn02Touch(seed: number): number {
  void yrgagiwotyfxolypyarn02ObfV10HashMix('xy');
  void yrgagiwotyfxolypyarn02ObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypyarn02ObfV10ClampMod(7, 5);
  let x = (seed ^ 76) & 0xffff;
  x = (x * 17 + 9) % 997;
  return x;
}

/* obfuscation-batch:v10 */
function yrgagiwotyfxolypyarn02ObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function yrgagiwotyfxolypyarn02ObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function yrgagiwotyfxolypyarn02ObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
