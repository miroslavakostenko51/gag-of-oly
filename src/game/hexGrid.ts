import {COLS, ROWS} from '../constants/config';

/**
 * Pointy-top honeycomb on an "odd-r" offset grid: even rows hold COLS hexes,
 * odd rows hold COLS - 1 and sit half a tile to the right. Edge/direction
 * indices run clockwise from East so that a +1 rotation of a tile is exactly
 * a 60 degree clockwise turn on screen.
 *
 *   0 = E   1 = SE   2 = SW   3 = W   4 = NW   5 = NE
 */
export const DIRS = 6;

export interface Cell {
  id: number;
  row: number;
  col: number;
}

export const CELLS: Cell[] = (() => {
  const out: Cell[] = [];
  for (let row = 0; row < ROWS; row++) {
    const wide = row % 2 === 0;
    const count = wide ? COLS : COLS - 1;
    for (let col = 0; col < count; col++) {
      out.push({id: out.length, row, col});
    }
  }
  return out;
})();

export const CELL_COUNT = CELLS.length;

const INDEX: number[][] = (() => {
  const grid: number[][] = [];
  for (let row = 0; row < ROWS; row++) {
    grid.push(new Array(COLS).fill(-1));
  }
  for (const cell of CELLS) {
    grid[cell.row][cell.col] = cell.id;
  }
  return grid;
})();

export function cellAt(row: number, col: number): number {
  if (row < 0 || row >= ROWS || col < 0 || col >= COLS) {
    return -1;
  }
  return INDEX[row][col];
}

/** Opposite edge of dir on the neighbouring tile. */
export function opposite(dir: number): number {
  return (dir + 3) % DIRS;
}

export function neighbor(id: number, dir: number): number {
  const cell = CELLS[id];
  if (!cell) {
    return -1;
  }
  const row = cell.row;
  const col = cell.col;
  const even = row % 2 === 0;
  switch (dir) {
    case 0:
      return cellAt(row, col + 1);
    case 1:
      return cellAt(row + 1, even ? col : col + 1);
    case 2:
      return cellAt(row + 1, even ? col - 1 : col);
    case 3:
      return cellAt(row, col - 1);
    case 4:
      return cellAt(row - 1, even ? col - 1 : col);
    case 5:
      return cellAt(row - 1, even ? col : col + 1);
    default:
      return -1;
  }
}

/** Pixel offset of a tile inside the board content box. */
export function tileOrigin(id: number, tile: number, rowStep: number) {
  const cell = CELLS[id];
  const shift = cell.row % 2 === 0 ? 0 : tile / 2;
  return {left: cell.col * tile + shift, top: cell.row * rowStep};
}

/** Deterministic xorshift32 so every hall looks the same on every launch. */
export function makeRng(seed: number) {
  let state = seed >>> 0 || 0x9e3779b9;
  return () => {
    state ^= state << 13;
    state >>>= 0;
    state ^= state >>> 17;
    state ^= state << 5;
    state >>>= 0;
    return state / 4294967296;
  };
}
