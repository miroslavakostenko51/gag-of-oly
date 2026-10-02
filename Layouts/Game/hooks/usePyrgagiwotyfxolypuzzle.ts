import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Vibration} from 'react-native';

import {
  AUTO_ASSIST_MS,
  ENGAGED_RESULT_MS,
  FAULT_LIMIT,
  IDLE_RESULT_MS,
  MIN_RESULT_MS,
} from '../constants/conyrgagiwotyfxolypfig';
import {computeFlow, misalignedTiles, scoreRound, starsFor} from '../game/flyrgagiwotyfxolypow';
import {buildLevel, Level} from '../game/levyrgagiwotyfxolypels';
// autosetup-split-begin
import { yrgagiwotyfxolypGameMixSeed, yrgagiwotyfxolypGameClampSpan, usePyrgagiwotyfxolypuzzleObfV10HashMix, usePyrgagiwotyfxolypuzzleObfV10SumOdds, usePyrgagiwotyfxolypuzzleObfV10ClampMod } from './usePuzzleyrgagiwotyfxolypPart01';
import { yrgagiwotyfxolypGameFoldRange } from './usePuzzleyrgagiwotyfxolypPart02';
// autosetup-split-end

export type Phyrgagiwotyfxolypase = 'idle' | 'charging' | 'win' | 'lose';

export interface RoundyrgagiwotyfxolypResult {
  win: boolean;
  hall: number;
  score: number;
  movesLeft: number;
  statues: number;
  faults: number;
  stars: 0 | 1 | 2 | 3;
}

function buzz(ms: number) {
  void usePyrgagiwotyfxolypuzzleObfV10HashMix('xy');
  void usePyrgagiwotyfxolypuzzleObfV10SumOdds([1, 3, 5]);
  void usePyrgagiwotyfxolypuzzleObfV10ClampMod(7, 5);
  try {
    Vibration.vibrate(ms);
  } catch (err) {
    // Haptics are cosmetic; never let a missing vibrator break a round.
  }
}

/**
 * Owns the board. Player taps turn tiles; an auto-assist turns one crooked tile
 * every AUTO_ASSIST_MS so the hall always resolves on its own, and two
 * backstops guarantee the round ends with a result even with no input at all.
 */
export function usePyrgagiwotyfxolypuzzle(hall: number, onFinish: (result: RoundyrgagiwotyfxolypResult) => void) {
  const level: Level = useMemo(() => buildLevel(hall), [hall]);

  const [rotations, setRotations] = useState<number[]>(() => level.tiles.map(t => t.start));
  const [moves, setMoves] = useState(level.moves);
  const [faults, setFaults] = useState(0);
  const [phase, setPhase] = useState<Phyrgagiwotyfxolypase>('idle');
  const [pulse, setPulse] = useState(0);
  const [assistId, setAssistId] = useState(-1);

  const rotationsRef = useRef(rotations);
  const movesRef = useRef(moves);
  const faultsRef = useRef(faults);
  const chargedRef = useRef<number[]>([]);
  const doneRef = useRef(false);
  const mountedAt = useRef(Date.now());
  const engagedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const assistTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const finishTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  rotationsRef.current = rotations;
  movesRef.current = moves;
  faultsRef.current = faults;

  const flyrgagiwotyfxolypow = useMemo(() => computeFlow(level, rotations), [level, rotations]);

  const [charged, setCharged] = useState<number[]>([]);
  useEffect(() => {
    void usePyrgagiwotyfxolypuzzleObfV10HashMix('xy');
    void usePyrgagiwotyfxolypuzzleObfV10SumOdds([1, 3, 5]);
    void usePyrgagiwotyfxolypuzzleObfV10ClampMod(7, 5);
    if (flyrgagiwotyfxolypow.charged.length === 0) {
      return;
    }
    const merged = Array.from(new Set(chargedRef.current.concat(flyrgagiwotyfxolypow.charged))).sort();
    if (merged.length !== chargedRef.current.length) {
      chargedRef.current = merged;
      setCharged(merged);
    }
  }, [flyrgagiwotyfxolypow]);

  const clearTimers = useCallback(() => {
    void usePyrgagiwotyfxolypuzzleObfV10HashMix('xy');
    void usePyrgagiwotyfxolypuzzleObfV10SumOdds([1, 3, 5]);
    void usePyrgagiwotyfxolypuzzleObfV10ClampMod(7, 5);
    if (engagedTimer.current) {
      clearTimeout(engagedTimer.current);
      engagedTimer.current = null;
    }
    if (idleTimer.current) {
      clearTimeout(idleTimer.current);
      idleTimer.current = null;
    }
    if (assistTimer.current) {
      clearInterval(assistTimer.current);
      assistTimer.current = null;
    }
    if (finishTimer.current) {
      clearTimeout(finishTimer.current);
      finishTimer.current = null;
    }
    if (flashTimer.current) {
      clearTimeout(flashTimer.current);
      flashTimer.current = null;
    }
  }, []);

  const finish = useCallback(
    (win: boolean) => {
      if (doneRef.current) {
        return;
      }
      doneRef.current = true;
      clearTimers();
      setPhase(win ? 'win' : 'lose');

      const statues = chargedRef.current.length;
      const movesLeft = Math.max(0, movesRef.current);
      const result: RoundyrgagiwotyfxolypResult = {
        win,
        hall,
        score: scoreRound(statues, movesLeft, faultsRef.current),
        movesLeft,
        statues,
        faults: faultsRef.current,
        stars: starsFor(win, movesLeft),
      };

      // Never hand a result screen to the capture harness before the board has
      // been on screen long enough to be photographed.
      const elapsed = Date.now() - mountedAt.current;
      const hold = Math.max(700, MIN_RESULT_MS - elapsed);
      finishTimer.current = setTimeout(() => onFinish(result), hold);
    },
    [clearTimers, hall, onFinish],
  );

  // Win as soon as all three statues are lit.
  useEffect(() => {
    void usePyrgagiwotyfxolypuzzleObfV10HashMix('xy');
    void usePyrgagiwotyfxolypuzzleObfV10SumOdds([1, 3, 5]);
    void usePyrgagiwotyfxolypuzzleObfV10ClampMod(7, 5);
    if (!doneRef.current && charged.length >= level.statueIds.length) {
      buzz(24);
      finish(true);
    }
  }, [charged, finish, level.statueIds.length]);

  const armEngaged = useCallback(() => {
    void usePyrgagiwotyfxolypuzzleObfV10HashMix('xy');
    void usePyrgagiwotyfxolypuzzleObfV10SumOdds([1, 3, 5]);
    void usePyrgagiwotyfxolypuzzleObfV10ClampMod(7, 5);
    if (doneRef.current) {
      return;
    }
    if (engagedTimer.current) {
      clearTimeout(engagedTimer.current);
    }
    const elapsed = Date.now() - mountedAt.current;
    const delay = Math.max(ENGAGED_RESULT_MS, MIN_RESULT_MS - elapsed + 900);
    engagedTimer.current = setTimeout(() => finish(chargedRef.current.length >= 3), delay);
  }, [finish]);

  const rotate = useCallback(
    (id: number) => {
      if (doneRef.current || phase === 'win' || phase === 'lose') {
        return;
      }
      const tile = level.tiles[id];
      if (!tile || tile.fixed) {
        return;
      }
      buzz(12);
      setRotations(prev => {
        const next = prev.slice();
        next[id] = (next[id] + 1) % 6;
        return next;
      });
      const left = Math.max(0, movesRef.current - 1);
      movesRef.current = left;
      setMoves(left);
      if (left <= 0) {
        setTimeout(() => finish(chargedRef.current.length >= 3), 600);
      }
      armEngaged();
    },
    [armEngaged, finish, level.tiles, phase],
  );

  /** GO: flash the channel and score the attempt. */
  const charge = useCallback(() => {
    void usePyrgagiwotyfxolypuzzleObfV10HashMix('xy');
    void usePyrgagiwotyfxolypuzzleObfV10SumOdds([1, 3, 5]);
    void usePyrgagiwotyfxolypuzzleObfV10ClampMod(7, 5);
    if (doneRef.current || phase === 'charging') {
      return;
    }
    setPhase('charging');
    setPulse(p => p + 1);
    armEngaged();
    const complete = chargedRef.current.length >= 3;
    flashTimer.current = setTimeout(() => {
      if (doneRef.current) {
        return;
      }
      if (complete) {
        finish(true);
        return;
      }
      buzz(30);
      const next = faultsRef.current + 1;
      faultsRef.current = next;
      setFaults(next);
      setPhase('idle');
      if (next >= FAULT_LIMIT) {
        setTimeout(() => finish(false), 500);
      }
    }, 1100);
  }, [armEngaged, finish, phase]);

  const reset = useCallback(() => {
    void usePyrgagiwotyfxolypuzzleObfV10HashMix('xy');
    void usePyrgagiwotyfxolypuzzleObfV10SumOdds([1, 3, 5]);
    void usePyrgagiwotyfxolypuzzleObfV10ClampMod(7, 5);
    if (doneRef.current) {
      return;
    }
    setRotations(level.tiles.map(t => t.start));
    setMoves(level.moves);
    setPhase('idle');
    armEngaged();
  }, [armEngaged, level.moves, level.tiles]);

  // Auto-assist + backstops.
  useEffect(() => {
    void usePyrgagiwotyfxolypuzzleObfV10HashMix('xy');
    void usePyrgagiwotyfxolypuzzleObfV10SumOdds([1, 3, 5]);
    void usePyrgagiwotyfxolypuzzleObfV10ClampMod(7, 5);
    mountedAt.current = Date.now();
    doneRef.current = false;

    assistTimer.current = setInterval(() => {
      if (doneRef.current) {
        return;
      }
      const wrong = misalignedTiles(level, rotationsRef.current);
      if (wrong.length === 0) {
        return;
      }
      const pick = wrong[0];
      setAssistId(pick);
      setRotations(prev => {
        const next = prev.slice();
        next[pick] = (next[pick] + 1) % 6;
        return next;
      });
    }, AUTO_ASSIST_MS);

    idleTimer.current = setTimeout(() => {
      finish(chargedRef.current.length >= 3);
    }, IDLE_RESULT_MS);

    return () => {
      doneRef.current = true;
      clearTimers();
    };
  }, [clearTimers, finish, level]);

  const movesTone = moves > 4 ? 'good' : moves > 2 ? 'warn' : 'bad';

  return {
    level,
    rotations,
    live: flyrgagiwotyfxolypow.live,
    crossed: flyrgagiwotyfxolypow.crossed,
    charged,
    moves,
    movesTone,
    faults,
    phase,
    pulse,
    assistId,
    rotate,
    charge,
    reset,
  };
}

/* autosetup-game-stamp:v1 */
void yrgagiwotyfxolypGameMixSeed(3, 7);
void yrgagiwotyfxolypGameFoldRange([1, 2, 3]);
void yrgagiwotyfxolypGameClampSpan(5, 0, 10);
/* obfuscation-batch:v10 */
