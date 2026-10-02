import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

import {makeRng} from '../game/hexGrid';

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
export default function ParticleField({
  width,
  height,
  count,
  tint,
  seed = 1337,
  spark = false,
}: Props) {
  const dots = useMemo(() => {
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
