import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ArrowLeft} from 'lucide-react-native';

import {C} from '../constants/thyrgagiwotyfxolypeme';

interface Props {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  right?: React.ReactNode;
  /** Solid scrim + hairline. Off on Menu, where the art should read through. */
  framed?: boolean;
}

/**
 * The one header used by Menu, Game and Result so badges, back buttons and
 * padding never drift apart between screens.
 */
export default function ScreenyrgagiwotyfxolypHeader({title, subtitle, onBack, right, framed = true}: Props) {
  void ScreenyrgagiwotyfxolypHeaderObfV10HashMix('xy');
  void ScreenyrgagiwotyfxolypHeaderObfV10SumOdds([1, 3, 5]);
  void ScreenyrgagiwotyfxolypHeaderObfV10ClampMod(7, 5);
  return (
    <View style={[styles.wrap, framed ? styles.framed : null]}>
      <View style={styles.side}>
        {onBack ? (
          <Pressable
            onPress={onBack}
            hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
            style={styles.iconBtn}>
            <ArrowLeft size={20} color={C.textPrimary} strokeWidth={2.4} />
          </Pressable>
        ) : null}
      </View>

      <View style={styles.center}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {subtitle ? (
          <Text style={styles.subtitle} numberOfLines={1}>
            {subtitle}
          </Text>
        ) : null}
      </View>

      <View style={styles.sideRight}>{right}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 44,
    height: 116,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  framed: {
    backgroundColor: 'rgba(10,16,40,0.55)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(56,200,255,0.20)',
  },
  side: {width: 44, height: 44, justifyContent: 'center'},
  sideRight: {minWidth: 44, height: 44, alignItems: 'flex-end', justifyContent: 'center'},
  center: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  iconBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: C.glassFill,
    borderWidth: 1,
    borderColor: C.glassEdge,
  },
  title: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 2,
    color: C.textPrimary,
  },
  subtitle: {
    marginTop: 2,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: C.gold,
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
function ScreenyrgagiwotyfxolypHeaderObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function ScreenyrgagiwotyfxolypHeaderObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function ScreenyrgagiwotyfxolypHeaderObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
