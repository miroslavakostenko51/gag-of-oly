/**
 * GAG OF OLY — rotate the marble hexes, route the bolt from the altar to all
 * three statues. Screen flow is a plain state machine, no navigation library.
 */
import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import GameScreen from './src/screens/GameScreen';
import LoaderScreen from './src/screens/LoaderScreen';
import MenuScreen from './src/screens/MenuScreen';
import ResultScreen from './src/screens/ResultScreen';
import {TOTAL_HALLS} from './src/constants/config';
import {C} from './src/constants/theme';
import {RoundResult} from './src/hooks/usePuzzle';

type Screen = 'loader' | 'menu' | 'game' | 'result';

export default function App() {
  const [screen, setScreen] = useState<Screen>('loader');
  const [hall, setHall] = useState(1);
  const [unlocked, setUnlocked] = useState(1);
  const [best, setBest] = useState(0);
  const [solved, setSolved] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<RoundResult | null>(null);

  const startHall = useCallback((next: number) => {
    setHall(next);
    setAttempt(a => a + 1);
    setScreen('game');
  }, []);

  const handleGameOver = useCallback((round: RoundResult) => {
    setResult(round);
    setBest(prev => (round.score > prev ? round.score : prev));
    if (round.win) {
      setSolved(prev => prev + 1);
      setUnlocked(prev => Math.min(TOTAL_HALLS, Math.max(prev, round.hall + 1)));
    }
    setScreen('result');
  }, []);

  const goMenu = useCallback(() => setScreen('menu'), []);

  return (
    <View style={styles.root}>
      {screen === 'loader' ? <LoaderScreen onDone={goMenu} /> : null}

      {screen === 'menu' ? (
        <MenuScreen
          hall={hall}
          unlocked={unlocked}
          best={best}
          solved={solved}
          onPlay={() => startHall(hall)}
          onPickHall={startHall}
        />
      ) : null}

      {screen === 'game' ? (
        <GameScreen
          key={'hall-' + hall + '-' + attempt}
          hall={hall}
          onBack={goMenu}
          onGameOver={handleGameOver}
        />
      ) : null}

      {screen === 'result' && result ? (
        <ResultScreen
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
