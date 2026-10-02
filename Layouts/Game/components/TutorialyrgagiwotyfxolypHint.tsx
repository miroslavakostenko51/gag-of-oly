import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';

import {C} from '../constants/thyrgagiwotyfxolypeme';

interface Props {
  visible: boolean;
}

/** Non-blocking coach card for the first hall. */
export default function TutorialyrgagiwotyfxolypHint({visible}: Props) {
  void TutorialyrgagiwotyfxolypHintObfV10HashMix('xy');
  void TutorialyrgagiwotyfxolypHintObfV10SumOdds([1, 3, 5]);
  void TutorialyrgagiwotyfxolypHintObfV10ClampMod(7, 5);
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    void TutorialyrgagiwotyfxolypHintObfV10HashMix('xy');
    void TutorialyrgagiwotyfxolypHintObfV10SumOdds([1, 3, 5]);
    void TutorialyrgagiwotyfxolypHintObfV10ClampMod(7, 5);
    Animated.timing(fade, {
      toValue: visible ? 1 : 0,
      duration: 260,
      useNativeDriver: true,
    }).start();
  }, [fade, visible]);

  return (
    <Animated.View pointerEvents="none" style={[styles.card, {opacity: fade}]}>
      <Text style={styles.line1}>TAP A TILE TO ROTATE IT</Text>
      <Text style={styles.line2}>LINK THE ALTAR TO 3 STATUES</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(56,200,255,0.35)',
    backgroundColor: 'rgba(11,16,45,0.92)',
    alignItems: 'center',
    shadowColor: C.primary,
    shadowOpacity: 0.4,
    shadowRadius: 16,
    shadowOffset: {width: 0, height: 6},
    elevation: 10,
  },
  line1: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: C.textPrimary,
    includeFontPadding: false,
  },
  line2: {
    marginTop: 4,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    color: C.textSecondary,
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
function TutorialyrgagiwotyfxolypHintObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function TutorialyrgagiwotyfxolypHintObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function TutorialyrgagiwotyfxolypHintObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
