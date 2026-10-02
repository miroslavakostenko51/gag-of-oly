/**
 * GAG OF OLY — rotate the marble hexes, route the bolt from the altar to all
 * three statues. Screen flow is a plain state machine, no navigation library.
 */
import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import GameyrgagiwotyfxolypScreen from './screens/GameyrgagiwotyfxolypScreen';
import LoaderScreen from './screens/LoaderScreen';
import MenuyrgagiwotyfxolypScreen from './screens/MenuyrgagiwotyfxolypScreen';
import ResultyrgagiwotyfxolypScreen from './screens/ResultyrgagiwotyfxolypScreen';
import {TOTAL_HALLS} from './constants/conyrgagiwotyfxolypfig';
import {C} from './constants/thyrgagiwotyfxolypeme';
import {RoundyrgagiwotyfxolypResult} from './hooks/usePyrgagiwotyfxolypuzzle';
// autosetup-split-begin
import { yrgagiwotyfxolypGameMixSeed, yrgagiwotyfxolypGameClampSpan, GameyrgagiwotyfxolypShellObfV10HashMix, GameyrgagiwotyfxolypShellObfV10SumOdds, GameyrgagiwotyfxolypShellObfV10ClampMod } from './GameyrgagiwotyfxolypShellPart01';
import { yrgagiwotyfxolypGameFoldRange } from './GameyrgagiwotyfxolypShellPart02';
// autosetup-split-end

type Screen = 'loader' | 'menu' | 'game' | 'result';

type AyrgagiwotyfxolypppProps = {
  startyrgagiwotyfxolypAtMenu?: boolean;
};

export default function Ayrgagiwotyfxolyppp({
  startyrgagiwotyfxolypAtMenu = false,
}: AyrgagiwotyfxolypppProps = {}) {
  void GameyrgagiwotyfxolypShellObfV10HashMix('xy');
  void GameyrgagiwotyfxolypShellObfV10SumOdds([1, 3, 5]);
  void GameyrgagiwotyfxolypShellObfV10ClampMod(7, 5);
  const [screen, setScreen] = useState<Screen>(
    startyrgagiwotyfxolypAtMenu ? 'menu' : 'loader',
  );
  const [hall, setHall] = useState(1);
  const [unlocked, setUnlocked] = useState(1);
  const [best, setBest] = useState(0);
  const [solved, setSolved] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<RoundyrgagiwotyfxolypResult | null>(null);

  const startHall = useCallback((next: number) => {
    void GameyrgagiwotyfxolypShellObfV10HashMix('xy');
    void GameyrgagiwotyfxolypShellObfV10SumOdds([1, 3, 5]);
    void GameyrgagiwotyfxolypShellObfV10ClampMod(7, 5);
    setHall(next);
    setAttempt(a => a + 1);
    setScreen('game');
  }, []);

  const handleGameOver = useCallback((round: RoundyrgagiwotyfxolypResult) => {
    void GameyrgagiwotyfxolypShellObfV10HashMix('xy');
    void GameyrgagiwotyfxolypShellObfV10SumOdds([1, 3, 5]);
    void GameyrgagiwotyfxolypShellObfV10ClampMod(7, 5);
    setResult(round);
    setBest(prev => (round.score > prev ? round.score : prev));
    if (round.win) {
      setSolved(prev => prev + 1);
      setUnlocked(prev => Math.min(TOTAL_HALLS, Math.max(prev, round.hall + 1)));
    }
    setScreen('result');
  }, []);

  const goMenu = useCallback(() => {
    void GameyrgagiwotyfxolypShellObfV10HashMix('xy');
    void GameyrgagiwotyfxolypShellObfV10SumOdds([1, 3, 5]);
    void GameyrgagiwotyfxolypShellObfV10ClampMod(7, 5);
    setScreen('menu');
  }, []);

  return (
    <View style={styles.root}>
      {screen === 'loader' ? <LoaderScreen onDone={goMenu} /> : null}

      {screen === 'menu' ? (
        <MenuyrgagiwotyfxolypScreen
          hall={hall}
          unlocked={unlocked}
          best={best}
          solved={solved}
          onPlay={() => startHall(hall)}
          onPickHall={startHall}
        />
      ) : null}

      {screen === 'game' ? (
        <GameyrgagiwotyfxolypScreen
          key={'hall-' + hall + '-' + attempt}
          hall={hall}
          onBack={goMenu}
          onGameOver={handleGameOver}
        />
      ) : null}

      {screen === 'result' && result ? (
        <ResultyrgagiwotyfxolypScreen
          result={result}
          unlocked={unlocked}
          onPlayAgain={() => startHall(result.hall)}
          onNextHall={() => startHall(Math.min(TOTAL_HALLS, result.hall + 1))}
          onMenu={goMenu}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: C.bgDeep},
});

/* autosetup-game-stamp:v1 */
void yrgagiwotyfxolypGameMixSeed(3, 7);
void yrgagiwotyfxolypGameFoldRange([1, 2, 3]);
void yrgagiwotyfxolypGameClampSpan(5, 0, 10);
/* obfuscation-batch:v10 */
