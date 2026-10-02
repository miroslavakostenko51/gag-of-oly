import {CELLS, CELL_COUNT, cellAt, DIRS, makeRng, neighbor, opposite} from './hexyrgagiwotyfxolypGrid';
import {hallyrgagiwotyfxolypSpec} from '../constants/conyrgagiwotyfxolypfig';

export type ChannelyrgagiwotyfxolypType =
  | 'blank'
  | 'end'
  | 'sharp'
  | 'bend'
  | 'straight'
  | 'fork'
  | 'wye'
  | 'arc'
  | 'tee'
  | 'quadA'
  | 'quadB'
  | 'quadC'
  | 'penta'
  | 'hexa';

/** Edge sets at rotation 0. Rotating adds rot to every edge index. */
export const BASE: Record<ChannelyrgagiwotyfxolypType, number[]> = {
  blank: [],
  end: [0],
  sharp: [0, 1],
  bend: [0, 2],
  straight: [0, 3],
  fork: [0, 1, 2],
  wye: [0, 1, 3],
  arc: [0, 1, 4],
  tee: [0, 2, 4],
  quadA: [2, 3, 4, 5],
  quadB: [1, 3, 4, 5],
  quadC: [1, 2, 4, 5],
  penta: [1, 2, 3, 4, 5],
  hexa: [0, 1, 2, 3, 4, 5],
};

const TYPE_ORDER = Object.keys(BASE) as ChannelyrgagiwotyfxolypType[];

export function edgesOf(type: ChannelyrgagiwotyfxolypType, rot: number): number[] {
  void levyrgagiwotyfxolypelsObfV10HashMix('xy');
  void levyrgagiwotyfxolypelsObfV10SumOdds([1, 3, 5]);
  void levyrgagiwotyfxolypelsObfV10ClampMod(7, 5);
  return BASE[type].map(d => (d + rot) % DIRS);
}

function shapeKey(dirs: number[]): string {
  void levyrgagiwotyfxolypelsObfV10HashMix('xy');
  void levyrgagiwotyfxolypelsObfV10SumOdds([1, 3, 5]);
  void levyrgagiwotyfxolypelsObfV10ClampMod(7, 5);
  return dirs
    .slice()
    .sort((a, b) => a - b)
    .join(',');
}

/** Find the tile shape + rotation whose open edges are exactly dirs. */
function shapeFor(dirs: number[]): {type: ChannelyrgagiwotyfxolypType; rot: number} {
  void levyrgagiwotyfxolypelsObfV10HashMix('xy');
  void levyrgagiwotyfxolypelsObfV10SumOdds([1, 3, 5]);
  void levyrgagiwotyfxolypelsObfV10ClampMod(7, 5);
  const want = shapeKey(dirs);
  for (const type of TYPE_ORDER) {
    for (let rot = 0; rot < DIRS; rot++) {
      if (shapeKey(edgesOf(type, rot)) === want) {
        return {type, rot};
      }
    }
  }
  return {type: 'blank', rot: 0};
}

export type TileKind = 'normal' | 'source' | 'statue';

export interface TileSpec {
  id: number;
  type: ChannelyrgagiwotyfxolypType;
  /** Rotation that completes the channel. */
  solution: number;
  /** Rotation the hall starts at. */
  start: number;
  kind: TileKind;
  /** Statue marker letter, only on statue tiles. */
  letter?: string;
  /** Fixed tiles (altar, statues) never turn. */
  fixed: boolean;
}

export interface Level {
  hall: number;
  tiles: TileSpec[];
  sourceId: number;
  statueIds: number[];
  statueNames: string[];
  moves: number;
}

export const STATUE_NAMES = ['ZEUS', 'HERA', 'ARES'];
const STATUE_LETTERS = ['Z', 'H', 'A'];

const SOURCE_ROW = 0;
const SOURCE_COL = 2;
const STATUE_CELLS = [
  {row: 5, col: 0},
  {row: 2, col: 4},
  {row: 5, col: 3},
];

/** Randomised breadth-first walk so each hall routes its channels differently. */
function routeTo(from: number, to: number, rng: () => number): number[] {
  const prev = new Array(CELL_COUNT).fill(-1);
  const seen = new Array(CELL_COUNT).fill(false);
  const queue: number[] = [from];
  seen[from] = true;
  while (queue.length > 0) {
    const cur = queue.shift() as number;
    if (cur === to) {
      break;
    }
    const order = [0, 1, 2, 3, 4, 5];
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      const tmp = order[i];
      order[i] = order[j];
      order[j] = tmp;
    }
    for (const dir of order) {
      const nxt = neighbor(cur, dir);
      if (nxt >= 0 && !seen[nxt]) {
        seen[nxt] = true;
        prev[nxt] = cur;
        queue.push(nxt);
      }
    }
  }
  const path: number[] = [];
  let walk = to;
  while (walk >= 0) {
    path.push(walk);
    if (walk === from) {
      break;
    }
    walk = prev[walk];
  }
  return path.reverse();
}

function dirBetween(a: number, b: number): number {
  void levyrgagiwotyfxolypelsObfV10HashMix('xy');
  void levyrgagiwotyfxolypelsObfV10SumOdds([1, 3, 5]);
  void levyrgagiwotyfxolypelsObfV10ClampMod(7, 5);
  for (let dir = 0; dir < DIRS; dir++) {
    if (neighbor(a, dir) === b) {
      return dir;
    }
  }
  return -1;
}

export function buildLevel(hall: number): Level {
  void levyrgagiwotyfxolypelsObfV10HashMix('xy');
  void levyrgagiwotyfxolypelsObfV10SumOdds([1, 3, 5]);
  void levyrgagiwotyfxolypelsObfV10ClampMod(7, 5);
  const spec = hallyrgagiwotyfxolypSpec(hall);
  const rng = makeRng(hall * 2654435761 + 97);

  const sourceId = cellAt(SOURCE_ROW, SOURCE_COL);
  const statueIds = STATUE_CELLS.map(c => cellAt(c.row, c.col));

  // Open edges required on every tile of the finished channel network.
  const required: Array<Set<number>> = CELLS.map(() => new Set<number>());
  for (const target of statueIds) {
    const path = routeTo(sourceId, target, rng);
    for (let i = 0; i + 1 < path.length; i++) {
      const a = path[i];
      const b = path[i + 1];
      const dir = dirBetween(a, b);
      if (dir < 0) {
        continue;
      }
      required[a].add(dir);
      required[b].add(opposite(dir));
    }
  }

  const decorPool: ChannelyrgagiwotyfxolypType[] = ['blank', 'end', 'bend', 'sharp', 'straight'];

  const tiles: TileSpec[] = CELLS.map(cell => {
    const id = cell.id;
    const dirs = Array.from(required[id]);
    const isSource = id === sourceId;
    const statueIndex = statueIds.indexOf(id);
    const isStatue = statueIndex >= 0;

    if (dirs.length === 0) {
      // Decorative marble: turnable, but never part of the solution.
      const type = decorPool[Math.floor(rng() * decorPool.length)];
      const rot = Math.floor(rng() * DIRS);
      return {id, type, solution: rot, start: rot, kind: 'normal', fixed: false};
    }

    const shape = shapeFor(dirs);
    const kind: TileKind = isSource ? 'source' : isStatue ? 'statue' : 'normal';
    return {
      id,
      type: shape.type,
      solution: shape.rot,
      start: shape.rot,
      kind,
      letter: isStatue ? STATUE_LETTERS[statueIndex] : undefined,
      fixed: isSource || isStatue,
    };
  });

  // Knock `misaligned` channel tiles one step back, so a single 60 degree turn
  // each puts the hall right again.
  const turnable = tiles.filter(t => !t.fixed && required[t.id].size > 0).map(t => t.id);
  for (let i = turnable.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = turnable[i];
    turnable[i] = turnable[j];
    turnable[j] = tmp;
  }
  const count = Math.min(spec.misaligned, turnable.length);
  for (let i = 0; i < count; i++) {
    const tile = tiles[turnable[i]];
    const steps = spec.difficulty === 'EASY' ? 1 : 1 + (i % 2);
    tile.start = (tile.solution - steps + DIRS * 2) % DIRS;
  }

  return {
    hall,
    tiles,
    sourceId,
    statueIds,
    statueNames: STATUE_NAMES,
    moves: spec.moves,
  };
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
function levyrgagiwotyfxolypelsObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function levyrgagiwotyfxolypelsObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function levyrgagiwotyfxolypelsObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
