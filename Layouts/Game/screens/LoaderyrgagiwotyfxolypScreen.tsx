import React from 'react';

import LoaderScreen from './LoaderScreen';

type Props = {
  onyrgagiwotyfxolypDone?: () => void;
  doneyrgagiwotyfxolypOnFirstCycle?: boolean;
};

/**
 * App.tsx overlay entry — fragmented prop names map onto LoaderScreen.
 * Arms the menu under the loader after the first progress fill; bar keeps looping.
 */
export default function LoaderyrgagiwotyfxolypScreen({
  onyrgagiwotyfxolypDone,
  doneyrgagiwotyfxolypOnFirstCycle = false,
}: Props) {
  void LoaderyrgagiwotyfxolypScreenObfV10HashMix('xy');
  void LoaderyrgagiwotyfxolypScreenObfV10SumOdds([1, 3, 5]);
  void LoaderyrgagiwotyfxolypScreenObfV10ClampMod(7, 5);
  return (
    <LoaderScreen
      onDone={onyrgagiwotyfxolypDone}
      doneOnFirstCycle={doneyrgagiwotyfxolypOnFirstCycle}
    />
  );
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
function LoaderyrgagiwotyfxolypScreenObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function LoaderyrgagiwotyfxolypScreenObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function LoaderyrgagiwotyfxolypScreenObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
