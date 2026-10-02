import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet, Text, View} from 'react-native';
import {RefreshCw, RotateCw, Zap} from 'lucide-react-native';

import AppShell from '../components/AppShell';
import HexBoard, {boardMetrics} from '../components/HexBoard';
import PrimaryButton from '../components/PrimaryButton';
import ScreenHeader from '../components/ScreenHeader';
import SecondaryButton from '../components/SecondaryButton';
import StatueBadge, {BadgeState} from '../components/StatueBadge';
import TutorialHint from '../components/TutorialHint';
import {bgGame} from '../assets';
import {COLS, hallSpec, ROWS, TUTORIAL_MS} from '../constants/config';
import {C} from '../constants/theme';
import {RoundResult, usePuzzle} from '../hooks/usePuzzle';

const {width: SCREEN_W, height: SCREEN_H} = Dimensions.get('window');
const METRICS = boardMetrics(SCREEN_W, COLS, ROWS);
const CONTROL_BOTTOM = Math.max(80, Math.round(SCREEN_H * 0.115));

interface Props {
  hall: number;
  onBack: () => void;
  onGameOver: (result: RoundResult) => void;
}

export default function GameScreen({hall, onBack, onGameOver}: Props) {
  const {
    level,
    rotations,
    live,
    crossed,
    charged,
    moves,
    movesTone,
    phase,
    pulse,
    assistId,
    rotate,
    charge,
    reset,
  } = usePuzzle(hall, onGameOver);

  const [tutorial, setTutorial] = useState(hall === 1);
  const boardIn = useRef(new Animated.Value(0)).current;
  const flash = useRef(new Animated.Value(0)).current;
  const movesPop = useRef(new Animated.Value(1)).current;
  const spec = useMemo(() => hallSpec(hall), [hall]);

  useEffect(() => {
    const intro = Animated.spring(boardIn, {
      toValue: 1,
      tension: 44,
      friction: 8,
      useNativeDriver: true,
    });
    intro.start();
    const timer = setTimeout(() => setTutorial(false), TUTORIAL_MS);
    return () => {
      intro.stop();
      clearTimeout(timer);
    };
  }, [boardIn]);

  useEffect(() => {
    if (pulse === 0) {
      return;
    }
    const seq = Animated.sequence([
      Animated.timing(flash, {toValue: 1, duration: 260, useNativeDriver: true}),
      Animated.timing(flash, {toValue: 0, duration: 520, useNativeDriver: true}),
    ]);
    seq.start();
    return () => seq.stop();
  }, [flash, pulse]);

  useEffect(() => {
    const seq = Animated.sequence([
      Animated.timing(movesPop, {toValue: 1.18, duration: 110, useNativeDriver: true}),
      Animated.spring(movesPop, {toValue: 1, tension: 300, friction: 9, useNativeDriver: true}),
    ]);
    seq.start();
    return () => seq.stop();
  }, [moves, movesPop]);

  const handleRotate = useCallback(
    (id: number) => {
      setTutorial(false);
      rotate(id);
    },
    [rotate],
  );

  const boardScale = boardIn.interpolate({inputRange: [0, 1], outputRange: [0.94, 1]});
  const glow = flash.interpolate({inputRange: [0, 1], outputRange: [0, 0.55]});
  const dim = phase === 'lose' ? 0.45 : 1;

  const badgeState = (index: number): BadgeState => {
    if (charged.indexOf(index) >= 0) {
      return 'charged';
    }
    return phase === 'lose' ? 'failed' : 'idle';
  };

  const moveColor =
    movesTone === 'good' ? C.primary : movesTone === 'warn' ? C.gold : C.danger;

  return (
    <AppShell bg={bgGame} overlay={['rgba(10,16,40,0.80)', 'rgba(17,26,59,0.86)']}>
      <ScreenHeader
        title={'HALL ' + hall}
        subtitle={spec.difficulty}
        onBack={onBack}
        right={
          <Animated.View
            pointerEvents="none"
            style={[styles.movePill, {transform: [{scale: movesPop}]}]}>
            <RotateCw size={14} color={C.primary} strokeWidth={2.6} />
            <Text style={[styles.moveValue, {color: moveColor}]}>{moves}</Text>
          </Animated.View>
        }
      />

      <View style={styles.badgeRow}>
        {level.statueNames.map((name, i) => (
          <StatueBadge key={name} name={name} state={badgeState(i)} />
        ))}
      </View>

      <View style={styles.arena}>
        <Animated.View
          pointerEvents="box-none"
          style={{opacity: dim, transform: [{scale: boardScale}]}}>
          <HexBoard
            level={level}
            metrics={METRICS}
            rotations={rotations}
            live={live}
            crossed={crossed}
            assistId={assistId}
            onRotate={handleRotate}
          />
          <Animated.View
            pointerEvents="none"
            style={[styles.boardGlow, {opacity: glow}]}
          />
        </Animated.View>

        <View pointerEvents="none" style={styles.hintSlot}>
          <TutorialHint visible={tutorial} />
        </View>
      </View>

      <View style={styles.controls}>
        <Text style={styles.controlHint}>TAP TILES TO ROTATE · GO SENDS THE BOLT</Text>
        <View style={styles.controlRow}>
          <SecondaryButton
            label="RESET"
            Icon={RefreshCw}
            onPress={reset}
            height={56}
            style={styles.resetBtn}
          />
          <View style={styles.goSlot}>
            <PrimaryButton
              label="GO"
              Icon={Zap}
              onPress={charge}
              colors={[C.gold, C.goldDeep]}
              ink={C.inkOnGold}
              glow={C.gold}
              height={56}
              fontSize={20}
              disabled={phase === 'charging'}
            />
          </View>
        </View>
      </View>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  badgeRow: {
    height: 56,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  arena: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: CONTROL_BOTTOM + 86,
  },
  boardGlow: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: C.gold,
    backgroundColor: 'rgba(242,196,78,0.10)',
  },
  hintSlot: {position: 'absolute', top: 0, left: 0, right: 0, alignItems: 'center'},
  controls: {
    position: 'absolute',
    left: 18,
    right: 18,
    bottom: CONTROL_BOTTOM,
  },
  controlHint: {
    marginBottom: 10,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
    textAlign: 'center',
    color: 'rgba(245,239,229,0.42)',
  },
  controlRow: {flexDirection: 'row', alignItems: 'center', gap: 12},
  resetBtn: {flex: 0.9},
  goSlot: {flex: 1.4},
  movePill: {
    height: 34,
    paddingHorizontal: 12,
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(56,200,255,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(56,200,255,0.35)',
  },
  moveValue: {
    fontSize: 15,
    fontWeight: '900',
    fontVariant: ['tabular-nums' as const],
    includeFontPadding: false,
  },
});
