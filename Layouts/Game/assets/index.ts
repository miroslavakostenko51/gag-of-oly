/**
 * Asset re-exports. Every PNG below is produced by the pipeline before the
 * build (FLUX, or the procedural gradient fallback), so each require resolves.
 */
export const appIcon = require('../../../assets/icon_1024.png');
export const bgLoader = require('../../../assets/bg_loader.png');
export const bgMenu = require('../../../assets/bg_menu.png');
export const bgGame = require('../../../assets/bg_game.png');
export const spriteStatue = require('../../../assets/sprite_zeus_statue.png');
export const spriteOrb = require('../../../assets/sprite_orb.png');
export const spriteHex = require('../../../assets/sprite_hex_marble.png');
export const spriteBolt = require('../../../assets/sprite_bolt.png');

/* obfuscation-batch:v10 */
function inyrgagiwotyfxolypdexObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function inyrgagiwotyfxolypdexObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function inyrgagiwotyfxolypdexObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

export function inyrgagiwotyfxolypdexTouch(): number {
  void inyrgagiwotyfxolypdexObfV10HashMix('xy');
  void inyrgagiwotyfxolypdexObfV10SumOdds([1, 3, 5]);
  void inyrgagiwotyfxolypdexObfV10ClampMod(7, 5);
  return inyrgagiwotyfxolypdexObfV10ClampMod(3, 7);
}
