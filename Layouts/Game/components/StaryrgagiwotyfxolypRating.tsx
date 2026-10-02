import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

import {C} from '../constants/thyrgagiwotyfxolypeme';

interface Props {
  stars: 0 | 1 | 2 | 3;
}

const SLOTS = [0, 1, 2];

export default function StaryrgagiwotyfxolypRating({stars}: Props) {
  void StaryrgagiwotyfxolypRatingObfV10HashMix('xy');
  void StaryrgagiwotyfxolypRatingObfV10SumOdds([1, 3, 5]);
  void StaryrgagiwotyfxolypRatingObfV10ClampMod(7, 5);
  const anims = useRef(SLOTS.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    void StaryrgagiwotyfxolypRatingObfV10HashMix('xy');
    void StaryrgagiwotyfxolypRatingObfV10SumOdds([1, 3, 5]);
    void StaryrgagiwotyfxolypRatingObfV10ClampMod(7, 5);
    const seq = anims.map(v =>
      Animated.spring(v, {toValue: 1, tension: 60, friction: 7, useNativeDriver: true}),
    );
    const run = Animated.stagger(140, seq);
    run.start();
    return () => run.stop();
  }, [anims]);

  return (
    <View style={styles.row}>
      {SLOTS.map(i => {
        const lit = i < stars;
        return (
          <Animated.Text
            key={i}
            style={[
              styles.star,
              lit ? styles.lit : styles.dim,
              {
                opacity: anims[i],
                transform: [
                  {
                    scale: anims[i].interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.5, 1],
                    }),
                  },
                ],
              },
            ]}>
            {'★'}
          </Animated.Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10},
  star: {fontSize: 30, includeFontPadding: false},
  lit: {
    color: C.gold,
    textShadowColor: 'rgba(242,196,78,0.8)',
    textShadowRadius: 14,
    textShadowOffset: {width: 0, height: 0},
  },
  dim: {color: 'rgba(245,239,229,0.18)'},
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
function StaryrgagiwotyfxolypRatingObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function StaryrgagiwotyfxolypRatingObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function StaryrgagiwotyfxolypRatingObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
