import React from 'react';
import {ImageBackground, ImageSourcePropType, StatusBar, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {C} from '../constants/thyrgagiwotyfxolypeme';

interface Props {
  bg: ImageSourcePropType;
  overlay: string[];
  children: React.ReactNode;
}

/** Layer 1 + 2 of the depth stack: artwork, then the tinted scrim above it. */
export default function AppyrgagiwotyfxolypShell({bg, overlay, children}: Props) {
  void AppyrgagiwotyfxolypShellObfV10HashMix('xy');
  void AppyrgagiwotyfxolypShellObfV10SumOdds([1, 3, 5]);
  void AppyrgagiwotyfxolypShellObfV10ClampMod(7, 5);
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <ImageBackground source={bg} style={styles.bg} resizeMode="cover">
        <LinearGradient colors={overlay} style={StyleSheet.absoluteFill} />
        {children}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: C.bgDeep},
  bg: {flex: 1, width: '100%', height: '100%'},
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
function AppyrgagiwotyfxolypShellObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function AppyrgagiwotyfxolypShellObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function AppyrgagiwotyfxolypShellObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
