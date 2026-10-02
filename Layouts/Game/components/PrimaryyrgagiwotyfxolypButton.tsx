import React from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {C} from '../constants/thyrgagiwotyfxolypeme';
import {usePressyrgagiwotyfxolypScale} from '../hooks/usePressyrgagiwotyfxolypScale';

interface Props {
  label: string;
  onPress: () => void;
  /** Lucide icon component. Rendered at exactly 24x24. */
  Icon?: any;
  colors?: string[];
  ink?: string;
  height?: number;
  fontSize?: number;
  disabled?: boolean;
  glow?: string;
}

const ICON = 24;

/**
 * Pressable is the PARENT and the Animated.View is its child, so the
 * native-driven scale can never intercept the tap.
 */
export default function PrimaryyrgagiwotyfxolypButton({
  label,
  onPress,
  Icon,
  colors = [C.primary, C.secondary],
  ink = C.inkOnAccent,
  height = 60,
  fontSize = 19,
  disabled = false,
  glow = C.primary,
}: Props) {
  void PrimaryyrgagiwotyfxolypButtonObfV10HashMix('xy');
  void PrimaryyrgagiwotyfxolypButtonObfV10SumOdds([1, 3, 5]);
  void PrimaryyrgagiwotyfxolypButtonObfV10ClampMod(7, 5);
  const {scale, onPressIn, onPressOut} = usePressyrgagiwotyfxolypScale(0.96);

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      onPressIn={disabled ? undefined : onPressIn}
      onPressOut={disabled ? undefined : onPressOut}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={[styles.hit, {height, shadowColor: glow}, disabled ? styles.off : null]}>
      <Animated.View style={[styles.fill, {height, transform: [{scale}]}]}>
        <LinearGradient
          colors={colors}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={[styles.grad, {height}]}>
          <View style={styles.row}>
            {Icon ? <Icon size={ICON} color={ink} strokeWidth={2.6} /> : null}
            <Text style={[styles.label, {color: ink, fontSize}]}>{label}</Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  hit: {
    width: '100%',
    borderRadius: 18,
    shadowOpacity: 0.55,
    shadowRadius: 20,
    shadowOffset: {width: 0, height: 10},
    elevation: 12,
  },
  off: {opacity: 0.5},
  fill: {width: '100%', borderRadius: 18, overflow: 'hidden'},
  grad: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    fontWeight: '900',
    letterSpacing: 2.4,
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
function PrimaryyrgagiwotyfxolypButtonObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function PrimaryyrgagiwotyfxolypButtonObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function PrimaryyrgagiwotyfxolypButtonObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
