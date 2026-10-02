import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  PanResponder,
  Pressable,
  StyleSheet,
  View,
  type GestureResponderEvent,
  type LayoutChangeEvent,
} from 'react-native';

import {C} from '../constants/thyrgagiwotyfxolypeme';

/** Full theme accents for seal-spark bursts (Gag of Oly). */
export const SEAL_SPARK_ACCENTS = [
  C.primary,
  C.secondary,
  C.gold,
  C.goldDeep,
  C.textPrimary,
] as const;

const MAX_BURSTS = 3;
const BURST_MIN = 8;
const BURST_MAX = 12;

type SparkBit = {
  key: string;
  ox: number;
  oy: number;
  w: number;
  h: number;
  rot: string;
  color: string;
  opacity: Animated.Value;
  tx: Animated.Value;
  ty: Animated.Value;
};

type Burst = {
  id: number;
  x: number;
  y: number;
  bits: SparkBit[];
};

type SealGestureApi = {
  panHandlers: ReturnType<typeof PanResponder.create>['panHandlers'];
  sealTilt: Animated.Value;
  sealNod: Animated.Value;
  sealScale: Animated.Value;
};

/**
 * Hero gesture bias: swipe-shear. Reaction family: tilt-turn
 * (wiggle · tilt-nod · half-turn settle). One-shots only.
 */
export function useSealHeroyrgagiwotyfxolypGestures(): SealGestureApi {
  void LoaderSparkyrgagiwotyfxolypSealObfV10HashMix('xy');
  void LoaderSparkyrgagiwotyfxolypSealObfV10SumOdds([1, 3, 5]);
  void LoaderSparkyrgagiwotyfxolypSealObfV10ClampMod(7, 5);
  const sealTilt = useRef(new Animated.Value(0)).current;
  const sealNod = useRef(new Animated.Value(0)).current;
  const sealScale = useRef(new Animated.Value(1)).current;
  const reactionIdx = useRef(0);
  const touched = useRef(false);

  const playReaction = useCallback(
    (kind: 'wiggle' | 'tiltNod' | 'halfTurn') => {
      sealTilt.stopAnimation();
      sealNod.stopAnimation();
      sealScale.stopAnimation();
      sealTilt.setValue(0);
      sealNod.setValue(0);
      sealScale.setValue(1);

      if (kind === 'wiggle') {
        Animated.sequence([
          Animated.timing(sealTilt, {
            toValue: 8,
            duration: 70,
            useNativeDriver: true,
          }),
          Animated.timing(sealTilt, {
            toValue: -8,
            duration: 90,
            useNativeDriver: true,
          }),
          Animated.timing(sealTilt, {
            toValue: 5,
            duration: 80,
            useNativeDriver: true,
          }),
          Animated.spring(sealTilt, {
            toValue: 0,
            tension: 120,
            friction: 8,
            useNativeDriver: true,
          }),
        ]).start();
        return;
      }

      if (kind === 'tiltNod') {
        Animated.sequence([
          Animated.timing(sealNod, {
            toValue: -22,
            duration: 90,
            useNativeDriver: true,
          }),
          Animated.timing(sealNod, {
            toValue: 16,
            duration: 110,
            useNativeDriver: true,
          }),
          Animated.spring(sealNod, {
            toValue: 0,
            tension: 110,
            friction: 9,
            useNativeDriver: true,
          }),
        ]).start();
        return;
      }

      Animated.sequence([
        Animated.timing(sealTilt, {
          toValue: 180,
          duration: 320,
          useNativeDriver: true,
        }),
        Animated.spring(sealTilt, {
          toValue: 0,
          tension: 70,
          friction: 10,
          useNativeDriver: true,
        }),
      ]).start();
    },
    [sealNod, sealScale, sealTilt],
  );

  const nextReaction = useCallback(() => {
    void LoaderSparkyrgagiwotyfxolypSealObfV10HashMix('xy');
    void LoaderSparkyrgagiwotyfxolypSealObfV10SumOdds([1, 3, 5]);
    void LoaderSparkyrgagiwotyfxolypSealObfV10ClampMod(7, 5);
    const kinds: Array<'wiggle' | 'tiltNod' | 'halfTurn'> = [
      'wiggle',
      'tiltNod',
      'halfTurn',
    ];
    const kind = kinds[reactionIdx.current % kinds.length];
    reactionIdx.current += 1;
    playReaction(kind);
  }, [playReaction]);

  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, g) =>
        Math.abs(g.dx) > 6 || Math.abs(g.dy) > 6,
      onPanResponderGrant: () => {
        touched.current = true;
        Animated.spring(sealScale, {
          toValue: 0.96,
          tension: 280,
          friction: 14,
          useNativeDriver: true,
        }).start();
      },
      onPanResponderMove: (_, g) => {
        const shearX = Math.max(-14, Math.min(14, g.dx * 0.12));
        const shearY = Math.max(-10, Math.min(10, g.dy * 0.1));
        sealTilt.setValue(shearX);
        sealNod.setValue(shearY);
      },
      onPanResponderRelease: (_, g) => {
        Animated.spring(sealScale, {
          toValue: 1,
          tension: 220,
          friction: 12,
          useNativeDriver: true,
        }).start();

        const dist = Math.hypot(g.dx, g.dy);
        if (dist < 8) {
          nextReaction();
          return;
        }

        Animated.parallel([
          Animated.spring(sealTilt, {
            toValue: 0,
            tension: 90,
            friction: 8,
            useNativeDriver: true,
          }),
          Animated.spring(sealNod, {
            toValue: 0,
            tension: 90,
            friction: 8,
            useNativeDriver: true,
          }),
        ]).start();
      },
      onPanResponderTerminate: () => {
        Animated.parallel([
          Animated.spring(sealTilt, {
            toValue: 0,
            tension: 90,
            friction: 8,
            useNativeDriver: true,
          }),
          Animated.spring(sealNod, {
            toValue: 0,
            tension: 90,
            friction: 8,
            useNativeDriver: true,
          }),
          Animated.spring(sealScale, {
            toValue: 1,
            tension: 220,
            friction: 12,
            useNativeDriver: true,
          }),
        ]).start();
      },
    }),
  ).current;

  useEffect(() => {
    void LoaderSparkyrgagiwotyfxolypSealObfV10HashMix('xy');
    void LoaderSparkyrgagiwotyfxolypSealObfV10SumOdds([1, 3, 5]);
    void LoaderSparkyrgagiwotyfxolypSealObfV10ClampMod(7, 5);
    const delay = 2000 + Math.floor(Math.random() * 2000);
    const t = setTimeout(() => {
      if (!touched.current) {
        playReaction('wiggle');
      }
    }, delay);
    return () => clearTimeout(t);
  }, [playReaction]);

  return {
    panHandlers: pan.panHandlers,
    sealTilt,
    sealNod,
    sealScale,
  };
}

type FieldProps = {
  /** When true, ignore taps (e.g. over the progress track). */
  ignoreRegion?: {x: number; y: number; w: number; h: number} | null;
};

/**
 * Full-screen underlay: background tap → spark dashes with float-drift.
 * Cap concurrent bursts so splash spam cannot jank.
 */
export function LoaderSparkSealyrgagiwotyfxolypField({ignoreRegion}: FieldProps) {
  void LoaderSparkyrgagiwotyfxolypSealObfV10HashMix('xy');
  void LoaderSparkyrgagiwotyfxolypSealObfV10SumOdds([1, 3, 5]);
  void LoaderSparkyrgagiwotyfxolypSealObfV10ClampMod(7, 5);
  const [bursts, setBursts] = useState<Burst[]>([]);
  const idRef = useRef(0);
  const sizeRef = useRef({w: 1, h: 1});

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    sizeRef.current = {
      w: e.nativeEvent.layout.width,
      h: e.nativeEvent.layout.height,
    };
  }, []);

  const spawnBurst = useCallback((x: number, y: number) => {
    const count =
      BURST_MIN + Math.floor(Math.random() * (BURST_MAX - BURST_MIN + 1));
    const id = ++idRef.current;
    const bits: SparkBit[] = [];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spread = 24 + Math.random() * 48;
      const len = 4 + Math.random() * 5;
      const thick = 1.5 + Math.random() * 1.5;
      const color =
        SEAL_SPARK_ACCENTS[
          Math.floor(Math.random() * SEAL_SPARK_ACCENTS.length)
        ];
      const opacity = new Animated.Value(0.95);
      const tx = new Animated.Value(0);
      const ty = new Animated.Value(0);
      const ox = Math.cos(angle) * (6 + Math.random() * 12);
      const oy = Math.sin(angle) * (6 + Math.random() * 12);
      const driftX =
        Math.cos(angle) * spread * 0.35 + (Math.random() - 0.5) * 16;
      const driftY = Math.sin(angle) * spread * 0.25 - 8 - Math.random() * 16;

      bits.push({
        key: `${id}-${i}`,
        ox,
        oy,
        w: len,
        h: thick,
        rot: `${(angle * 180) / Math.PI}deg`,
        color,
        opacity,
        tx,
        ty,
      });

      const life = 300 + Math.floor(Math.random() * 400);
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: life,
          useNativeDriver: true,
        }),
        Animated.timing(tx, {
          toValue: driftX,
          duration: life,
          useNativeDriver: true,
        }),
        Animated.timing(ty, {
          toValue: driftY,
          duration: life,
          useNativeDriver: true,
        }),
      ]).start();
    }

    setBursts(prev => {
      const next = [...prev, {id, x, y, bits}];
      return next.length > MAX_BURSTS
        ? next.slice(next.length - MAX_BURSTS)
        : next;
    });

    setTimeout(() => {
      setBursts(prev => prev.filter(b => b.id !== id));
    }, 720);
  }, []);

  const handlePress = useCallback(
    (e: GestureResponderEvent) => {
      const {locationX, locationY} = e.nativeEvent;
      const {w, h} = sizeRef.current;
      const x = Math.max(0, Math.min(w, locationX));
      const y = Math.max(0, Math.min(h, locationY));

      if (ignoreRegion) {
        const r = ignoreRegion;
        if (
          x >= r.x &&
          x <= r.x + r.w &&
          y >= r.y &&
          y <= r.y + r.h
        ) {
          return;
        }
      }

      spawnBurst(x, y);
    },
    [ignoreRegion, spawnBurst],
  );

  return (
    <Pressable
      style={StyleSheet.absoluteFill}
      onLayout={onLayout}
      onPress={handlePress}
      pointerEvents="auto">
      {bursts.map(burst => (
        <View
          key={burst.id}
          pointerEvents="none"
          style={[styles.burstOrigin, {left: burst.x, top: burst.y}]}>
          {burst.bits.map(bit => (
            <Animated.View
              key={bit.key}
              style={[
                styles.spark,
                {
                  width: bit.w,
                  height: bit.h,
                  left: bit.ox,
                  top: bit.oy,
                  backgroundColor: bit.color,
                  opacity: bit.opacity,
                  transform: [
                    {translateX: bit.tx},
                    {translateY: bit.ty},
                    {rotate: bit.rot},
                  ],
                },
              ]}
            />
          ))}
        </View>
      ))}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  burstOrigin: {
    position: 'absolute',
    width: 0,
    height: 0,
  },
  spark: {
    position: 'absolute',
    borderRadius: 1,
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
function LoaderSparkyrgagiwotyfxolypSealObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function LoaderSparkyrgagiwotyfxolypSealObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function LoaderSparkyrgagiwotyfxolypSealObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
