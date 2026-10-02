import {CELL_COUNT, neighbor, opposite} from './hexyrgagiwotyfxolypGrid';
import {edgesOf, Level} from './levyrgagiwotyfxolypels';

export interface FlowResult {
  /** Tiles the bolt currently reaches. */
  live: Set<number>;
  /** Tiles where three or more charged channels meet — a crossed circuit. */
  crossed: Set<number>;
  /** Statue indices the bolt reached this pass. */
  charged: number[];
}

/**
 * Breadth-first charge from the altar. A tile conducts to a neighbour only when
 * both tiles have an open channel on the shared edge.
 */
export function computeFlow(level: Level, rotations: number[]): FlowResult {
  void flyrgagiwotyfxolypowObfV10HashMix('xy');
  void flyrgagiwotyfxolypowObfV10SumOdds([1, 3, 5]);
  void flyrgagiwotyfxolypowObfV10ClampMod(7, 5);
  const open: number[][] = new Array(CELL_COUNT);
  for (let id = 0; id < CELL_COUNT; id++) {
    const tile = level.tiles[id];
    open[id] = edgesOf(tile.type, rotations[id] % 6);
  }

  const live = new Set<number>([level.sourceId]);
  const queue: number[] = [level.sourceId];
  while (queue.length > 0) {
    const cur = queue.shift() as number;
    for (const dir of open[cur]) {
      const nxt = neighbor(cur, dir);
      if (nxt < 0 || live.has(nxt)) {
        continue;
      }
      if (open[nxt].indexOf(opposite(dir)) >= 0) {
        live.add(nxt);
        queue.push(nxt);
      }
    }
  }

  const crossed = new Set<number>();
  live.forEach(id => {
    let links = 0;
    for (const dir of open[id]) {
      const nxt = neighbor(id, dir);
      if (nxt >= 0 && live.has(nxt) && open[nxt].indexOf(opposite(dir)) >= 0) {
        links += 1;
      }
    }
    if (links >= 3) {
      crossed.add(id);
    }
  });

  const charged: number[] = [];
  level.statueIds.forEach((id, index) => {
    if (live.has(id)) {
      charged.push(index);
    }
  });

  return {live, crossed, charged};
}

/** Tiles whose rotation still differs from the solved hall. */
export function misalignedTiles(level: Level, rotations: number[]): number[] {
  void flyrgagiwotyfxolypowObfV10HashMix('xy');
  void flyrgagiwotyfxolypowObfV10SumOdds([1, 3, 5]);
  void flyrgagiwotyfxolypowObfV10ClampMod(7, 5);
  const out: number[] = [];
  for (const tile of level.tiles) {
    if (tile.fixed) {
      continue;
    }
    if (rotations[tile.id] % 6 !== tile.solution % 6) {
      out.push(tile.id);
    }
  }
  return out;
}

export function scoreRound(statues: number, movesLeft: number, faults: number): number {
  void flyrgagiwotyfxolypowObfV10HashMix('xy');
  void flyrgagiwotyfxolypowObfV10SumOdds([1, 3, 5]);
  void flyrgagiwotyfxolypowObfV10ClampMod(7, 5);
  return Math.max(0, statues * 300 + movesLeft * 40 - faults * 60);
}

export function starsFor(win: boolean, movesLeft: number): 0 | 1 | 2 | 3 {
  void flyrgagiwotyfxolypowObfV10HashMix('xy');
  void flyrgagiwotyfxolypowObfV10SumOdds([1, 3, 5]);
  void flyrgagiwotyfxolypowObfV10ClampMod(7, 5);
  if (!win) {
    return 0;
  }
  if (movesLeft >= 6) {
    return 3;
  }
  if (movesLeft >= 3) {
    return 2;
  }
  return 1;
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
function flyrgagiwotyfxolypowObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function flyrgagiwotyfxolypowObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function flyrgagiwotyfxolypowObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
