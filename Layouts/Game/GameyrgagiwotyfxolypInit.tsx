import React from 'react';
import Ayrgagiwotyfxolyppp from './GameyrgagiwotyfxolypShell';
// autosetup-split-begin
import { GameyrgagiwotyfxolypInitObfV5HashMix, GameyrgagiwotyfxolypInitObfV5SumOdds, GameyrgagiwotyfxolypInitObfV5ClampMod, GameyrgagiwotyfxolypInitObfV6HashMix, GameyrgagiwotyfxolypInitObfV6SumOdds, GameyrgagiwotyfxolypInitObfV6ClampMod, GameyrgagiwotyfxolypInitObfV7HashMix, GameyrgagiwotyfxolypInitObfV7SumOdds, GameyrgagiwotyfxolypInitObfV7ClampMod, yrgagiwotyfxolypGameMixSeed, yrgagiwotyfxolypGameFoldRange, yrgagiwotyfxolypGameClampSpan, GameyrgagiwotyfxolypInitObfV8HashMix, GameyrgagiwotyfxolypInitObfV8SumOdds, GameyrgagiwotyfxolypInitObfV8ClampMod, GameyrgagiwotyfxolypInitObfV9HashMix, GameyrgagiwotyfxolypInitObfV9SumOdds, GameyrgagiwotyfxolypInitObfV9ClampMod } from './GameyrgagiwotyfxolypInitPart01';
// autosetup-split-end

type GameyrgagiwotyfxolypInitProps = {
  startyrgagiwotyfxolypAtMenu?: boolean;
};

function GameyrgagiwotyfxolypInit({
  startyrgagiwotyfxolypAtMenu = false,
}: GameyrgagiwotyfxolypInitProps): React.JSX.Element {
  void GameyrgagiwotyfxolypInitObfV10HashMix('xy');
  void GameyrgagiwotyfxolypInitObfV10SumOdds([1, 3, 5]);
  void GameyrgagiwotyfxolypInitObfV10ClampMod(7, 5);
  void GameyrgagiwotyfxolypInitObfV9HashMix('xy');
  void GameyrgagiwotyfxolypInitObfV9SumOdds([1, 3, 5]);
  void GameyrgagiwotyfxolypInitObfV9ClampMod(7, 5);
  void GameyrgagiwotyfxolypInitObfV7HashMix('xy');
  void GameyrgagiwotyfxolypInitObfV7SumOdds([1, 3, 5]);
  void GameyrgagiwotyfxolypInitObfV7ClampMod(7, 5);
  void GameyrgagiwotyfxolypInitObfV8HashMix('xy');
  void GameyrgagiwotyfxolypInitObfV8SumOdds([1, 3, 5]);
  void GameyrgagiwotyfxolypInitObfV8ClampMod(7, 5);
  void GameyrgagiwotyfxolypInitObfV5HashMix('xy');
  void GameyrgagiwotyfxolypInitObfV5SumOdds([1, 3, 5]);
  void GameyrgagiwotyfxolypInitObfV5ClampMod(7, 5);
  void GameyrgagiwotyfxolypInitObfV6HashMix('xy');
  void GameyrgagiwotyfxolypInitObfV6SumOdds([1, 3, 5]);
  void GameyrgagiwotyfxolypInitObfV6ClampMod(7, 5);
  return <Ayrgagiwotyfxolyppp startyrgagiwotyfxolypAtMenu={startyrgagiwotyfxolypAtMenu} />;
}

export default GameyrgagiwotyfxolypInit;

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v9 */

/* autosetup-game-stamp:v1 */
void yrgagiwotyfxolypGameMixSeed(3, 7);
void yrgagiwotyfxolypGameFoldRange([1, 2, 3]);
void yrgagiwotyfxolypGameClampSpan(5, 0, 10);

/* obfuscation-batch:v8 */

/* obfuscation-batch:v10 */
function GameyrgagiwotyfxolypInitObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function GameyrgagiwotyfxolypInitObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function GameyrgagiwotyfxolypInitObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
