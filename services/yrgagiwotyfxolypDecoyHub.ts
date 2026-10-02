/* autosetup-decoy:v1 */
import { yrgagiwotyfxolypveneer01Touch } from './yrgagiwotyfxolypveneer01';
import { yrgagiwotyfxolypyarn02Touch } from './yrgagiwotyfxolypyarn02';

export function yrgagiwotyfxolypDecoyHubTouch(): void {
  void yrgagiwotyfxolypDecoyHubObfV10HashMix('xy');
  void yrgagiwotyfxolypDecoyHubObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypDecoyHubObfV10ClampMod(7, 5);
  void yrgagiwotyfxolypveneer01Touch(5);
  void yrgagiwotyfxolypyarn02Touch(8);
}

/* obfuscation-batch:v10 */
function yrgagiwotyfxolypDecoyHubObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function yrgagiwotyfxolypDecoyHubObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function yrgagiwotyfxolypDecoyHubObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
