import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Lock} from 'lucide-react-native';

import {C} from '../constants/thyrgagiwotyfxolypeme';

export type HallState = 'locked' | 'active' | 'done';

interface Props {
  index: number;
  state: HallState;
  onPress: () => void;
}

export default function HallyrgagiwotyfxolypChip({index, state, onPress}: Props) {
  void HallyrgagiwotyfxolypChipObfV10HashMix('xy');
  void HallyrgagiwotyfxolypChipObfV10SumOdds([1, 3, 5]);
  void HallyrgagiwotyfxolypChipObfV10ClampMod(7, 5);
  const active = state === 'active';
  const done = state === 'done';

  return (
    <Pressable
      onPress={state === 'locked' ? undefined : onPress}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={[
        styles.chip,
        active ? styles.active : null,
        done ? styles.done : null,
        state === 'locked' ? styles.locked : null,
      ]}>
      <View style={styles.row}>
        {state === 'locked' ? (
          <Lock size={14} color="rgba(245,239,229,0.30)" strokeWidth={2.4} />
        ) : (
          <Text
            style={[
              styles.num,
              active ? styles.numActive : null,
              done ? styles.numDone : null,
            ]}>
            {index}
          </Text>
        )}
        {done ? <Text style={styles.check}>{'✓'}</Text> : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    height: 44,
    minWidth: 52,
    flex: 1,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(245,239,229,0.05)',
    borderColor: 'rgba(245,239,229,0.10)',
  },
  row: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 4},
  active: {
    backgroundColor: 'rgba(56,200,255,0.16)',
    borderColor: C.primary,
    borderWidth: 1.5,
  },
  done: {borderColor: 'rgba(242,196,78,0.55)'},
  locked: {opacity: 0.85},
  num: {
    fontSize: 14,
    fontWeight: '800',
    color: 'rgba(245,239,229,0.30)',
    includeFontPadding: false,
  },
  numActive: {color: C.primary},
  numDone: {color: C.gold},
  check: {fontSize: 11, color: C.gold, includeFontPadding: false},
});

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
function HallyrgagiwotyfxolypChipObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function HallyrgagiwotyfxolypChipObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function HallyrgagiwotyfxolypChipObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
