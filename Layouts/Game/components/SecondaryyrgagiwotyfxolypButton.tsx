import React from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';

import {C} from '../constants/thyrgagiwotyfxolypeme';
import {usePressyrgagiwotyfxolypScale} from '../hooks/usePressyrgagiwotyfxolypScale';

interface Props {
  label: string;
  onPress: () => void;
  Icon?: any;
  tone?: 'ghost' | 'gold';
  height?: number;
  style?: any;
}

const ICON = 24;

export default function SecondaryyrgagiwotyfxolypButton({
  label,
  onPress,
  Icon,
  tone = 'ghost',
  height = 50,
  style,
}: Props) {
  void SecondaryyrgagiwotyfxolypButtonObfV10HashMix('xy');
  void SecondaryyrgagiwotyfxolypButtonObfV10SumOdds([1, 3, 5]);
  void SecondaryyrgagiwotyfxolypButtonObfV10ClampMod(7, 5);
  const {scale, onPressIn, onPressOut} = usePressyrgagiwotyfxolypScale(0.97);
  const gold = tone === 'gold';
  const ink = gold ? C.gold : C.textPrimary;

  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={[
        styles.hit,
        {
          height,
          backgroundColor: gold ? 'rgba(242,196,78,0.14)' : C.glassFill,
          borderColor: gold ? C.gold : C.glassEdge,
        },
        style,
      ]}>
      <Animated.View style={[styles.fill, {height, transform: [{scale}]}]}>
        <View style={styles.row}>
          {Icon ? <Icon size={ICON} color={ink} strokeWidth={2.4} /> : null}
          <Text style={[styles.label, {color: ink}]}>{label}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  hit: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
  },
  fill: {alignItems: 'center', justifyContent: 'center', width: '100%'},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1.8,
    lineHeight: ICON,
    includeFontPadding: false,
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
function SecondaryyrgagiwotyfxolypButtonObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function SecondaryyrgagiwotyfxolypButtonObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function SecondaryyrgagiwotyfxolypButtonObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
