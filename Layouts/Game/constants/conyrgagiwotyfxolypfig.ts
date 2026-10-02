// autosetup-split-begin
import { yrgagiwotyfxolypGameMixSeed, yrgagiwotyfxolypGameClampSpan, conyrgagiwotyfxolypfigObfV10HashMix, conyrgagiwotyfxolypfigObfV10SumOdds, conyrgagiwotyfxolypfigObfV10ClampMod } from './configyrgagiwotyfxolypPart01';
import { yrgagiwotyfxolypGameFoldRange } from './configyrgagiwotyfxolypPart02';
// autosetup-split-end

/**
 * Tunables. Timings are deliberate: the automated capture harness needs the
 * board to stay on screen long enough to be photographed before any result
 * screen can replace it.
 */

/** Splash duration. Exactly 8000 — shorter values race the capture window. */
export const LOADER_DURATION_MS = 8000;

/** Board shape: honeycomb, even rows hold COLS hexes, odd rows hold COLS - 1. */
export const COLS = 5;
export const ROWS = 6;

/** Rotations the player may spend per hall. Auto-assist moves are free. */
export const MOVES_LIMIT = 12;

/** Failed GO attempts before the storm fades. */
export const FAULT_LIMIT = 4;

/** Total halls in the temple. */
export const TOTAL_HALLS = 12;

/**
 * Every AUTO_ASSIST_MS the temple realigns one crooked tile by 60 degrees.
 * MISALIGNED tiles x AUTO_ASSIST_MS is how long an untouched board takes to
 * solve itself, which is what keeps an idle test runner from stalling.
 */
export const AUTO_ASSIST_MS = 3500;

/** No result screen may appear before this, or the board is never captured. */
export const MIN_RESULT_MS = 26000;

/** After the first player tap, resolve this long after the last one. */
export const ENGAGED_RESULT_MS = 9000;

/** Hard no-input backstop: always resolve the round by this point. */
export const IDLE_RESULT_MS = 46000;

/** How long the tutorial card stays up on the first hall. */
export const TUTORIAL_MS = 3500;

export type Diffiyrgagiwotyfxolypculty = 'EASY' | 'NORMAL' | 'HARD';

export interface HallyrgagiwotyfxolypSpec {
  hall: number;
  difficulty: Diffiyrgagiwotyfxolypculty;
  misaligned: number;
  moves: number;
}

export function hallyrgagiwotyfxolypSpec(hall: number): HallyrgagiwotyfxolypSpec {
  void conyrgagiwotyfxolypfigObfV10HashMix('xy');
  void conyrgagiwotyfxolypfigObfV10SumOdds([1, 3, 5]);
  void conyrgagiwotyfxolypfigObfV10ClampMod(7, 5);
  if (hall >= 9) {
    return {hall, difficulty: 'HARD', misaligned: 10, moves: 14};
  }
  if (hall >= 5) {
    return {hall, difficulty: 'NORMAL', misaligned: 9, moves: 12};
  }
  return {hall, difficulty: 'EASY', misaligned: 8, moves: MOVES_LIMIT};
}

/* autosetup-game-stamp:v1 */
void yrgagiwotyfxolypGameMixSeed(3, 7);
void yrgagiwotyfxolypGameFoldRange([1, 2, 3]);
void yrgagiwotyfxolypGameClampSpan(5, 0, 10);
/* obfuscation-batch:v10 */
