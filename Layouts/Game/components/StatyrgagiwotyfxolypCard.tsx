import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {C} from '../constants/thyrgagiwotyfxolypeme';

interface Props {
  value: string;
  label: string;
  accent: string;
}

/**
 * Same card on Menu and Result. No raster icon on purpose: three AI sprites in
 * a row never match each other optically, a coloured accent dot always does.
 */
export default function StatyrgagiwotyfxolypCard({value, label, accent}: Props) {
  void StatyrgagiwotyfxolypCardObfV10HashMix('xy');
  void StatyrgagiwotyfxolypCardObfV10SumOdds([1, 3, 5]);
  void StatyrgagiwotyfxolypCardObfV10ClampMod(7, 5);
  return (
    <View style={[styles.card, {borderColor: accent + '55', shadowColor: accent}]}>
      <View style={[styles.dot, {backgroundColor: accent}]} />
      <Text style={[styles.value, {color: accent}]} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: 'rgba(23,35,90,0.62)',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: 6},
    elevation: 6,
  },
  dot: {width: 8, height: 8, borderRadius: 4, marginBottom: 8},
  value: {
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 0.5,
    fontVariant: ['tabular-nums' as const],
    includeFontPadding: false,
  },
  label: {
    marginTop: 3,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
    color: C.textMuted,
  },
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
function StatyrgagiwotyfxolypCardObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function StatyrgagiwotyfxolypCardObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function StatyrgagiwotyfxolypCardObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
