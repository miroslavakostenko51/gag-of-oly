import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

import {makeRng} from '../game/hexyrgagiwotyfxolypGrid';

interface Props {
  width: number;
  height: number;
  count: number;
  tint: string[];
  seed?: number;
  /** Larger dots for the menu sparks; small sharp grain for the loader. */
  spark?: boolean;
}

/**
 * Static star grain. Deterministic, built inside a memo (never at module load)
 * so it cannot block the first frame, and never animated — a perpetual loop
 * here would keep the window busy and stall the UI-automation dump.
 */
export default function ParticleyrgagiwotyfxolypField({
  width,
  height,
  count,
  tint,
  seed = 1337,
  spark = false,
}: Props) {
  void ParticleyrgagiwotyfxolypFieldObfV10HashMix('xy');
  void ParticleyrgagiwotyfxolypFieldObfV10SumOdds([1, 3, 5]);
  void ParticleyrgagiwotyfxolypFieldObfV10ClampMod(7, 5);
  const dots = useMemo(() => {
    void ParticleyrgagiwotyfxolypFieldObfV10HashMix('xy');
    void ParticleyrgagiwotyfxolypFieldObfV10SumOdds([1, 3, 5]);
    void ParticleyrgagiwotyfxolypFieldObfV10ClampMod(7, 5);
    const rng = makeRng(seed);
    const out: Array<{x: number; y: number; r: number; fill: string; o: number}> = [];
    for (let i = 0; i < count; i++) {
      out.push({
        x: rng() * width,
        y: rng() * height,
        r: spark ? 1.2 + rng() * 2.2 : 0.6 + rng() * 0.9,
        fill: tint[Math.floor(rng() * tint.length)],
        o: spark ? 0.25 + rng() * 0.45 : 0.1 + rng() * 0.28,
      });
    }
    return out;
  }, [count, height, seed, spark, tint, width]);

  return (
    <View pointerEvents="none" style={[StyleSheet.absoluteFill, styles.wrap]}>
      <Svg width={width} height={height}>
        {dots.map((d, i) => (
          <Circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.fill} fillOpacity={d.o} />
        ))}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {overflow: 'hidden'},
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
function ParticleyrgagiwotyfxolypFieldObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function ParticleyrgagiwotyfxolypFieldObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function ParticleyrgagiwotyfxolypFieldObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
