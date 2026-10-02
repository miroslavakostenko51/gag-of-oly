import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Circle, Path, Polygon} from 'react-native-svg';

import AppyrgagiwotyfxolypShell from '../components/AppyrgagiwotyfxolypShell';
import ParticleyrgagiwotyfxolypField from '../components/ParticleyrgagiwotyfxolypField';
import {bgLoader} from '../assets';
import {LOADER_DURATION_MS} from '../constants/conyrgagiwotyfxolypfig';
import {C} from '../constants/thyrgagiwotyfxolypeme';
import {
  LoaderSparkSealyrgagiwotyfxolypField,
  useSealHeroyrgagiwotyfxolypGestures,
} from './LoaderSparkyrgagiwotyfxolypSeal';

const {width: SCREEN_W, height: SCREEN_H} = Dimensions.get('window');
const BAR_W = 190;
const SEAL = 132;

interface Props {
  onDone?: () => void;
  /** Fire onDone after the first progress fill; keep looping (no fade-out). */
  doneOnFirstCycle?: boolean;
}

/**
 * Brand card. Deliberately colder and far darker than the menu: no gold sky,
 * no chips, no buttons — just the seal of Olympus over a storm.
 *
 * Persona (Gag of Oly fingerprint): swipe-shear · tilt-turn · sparks /
 * float-drift · striped-fill · nudge hint under-loading.
 */
export default function LoaderScreen({
  onDone,
  doneOnFirstCycle = false,
}: Props) {
  void LoaderyrgagiwotyfxolypScreenObfV10HashMix('xy');
  void LoaderyrgagiwotyfxolypScreenObfV10SumOdds([1, 3, 5]);
  void LoaderyrgagiwotyfxolypScreenObfV10ClampMod(7, 5);
  const sealIn = useRef(new Animated.Value(0)).current;
  const titleIn = useRef(new Animated.Value(0)).current;
  const halo = useRef(new Animated.Value(0)).current;
  const progress = useRef(new Animated.Value(0)).current;
  const firstCycleDone = useRef(false);
  const {panHandlers, sealTilt, sealNod, sealScale} = useSealHeroyrgagiwotyfxolypGestures();

  useEffect(() => {
    void LoaderyrgagiwotyfxolypScreenObfV10HashMix('xy');
    void LoaderyrgagiwotyfxolypScreenObfV10SumOdds([1, 3, 5]);
    void LoaderyrgagiwotyfxolypScreenObfV10ClampMod(7, 5);
    const intro = Animated.parallel([
      Animated.spring(sealIn, {
        toValue: 1,
        tension: 38,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.delay(260),
        Animated.timing(titleIn, {
          toValue: 1,
          duration: 380,
          useNativeDriver: true,
        }),
      ]),
      // Finite spin only — never a perpetual loop on the hero.
      Animated.timing(halo, {
        toValue: 1,
        duration: 6000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]);
    intro.start();

    let stopped = false;
    const fillOnce = () => {
      if (stopped) {
        return;
      }
      progress.setValue(0);
      const ms = 1300 + Math.floor(Math.random() * 900);
      Animated.timing(progress, {
        toValue: 1,
        duration: ms,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start(({finished}) => {
        if (!finished || stopped) {
          return;
        }
        if (doneOnFirstCycle && onDone && !firstCycleDone.current) {
          firstCycleDone.current = true;
          onDone();
        }
        fillOnce();
      });
    };
    fillOnce();

    // In-game shell still advances on the fixed splash timer when not arming via first cycle.
    const timer =
      !doneOnFirstCycle && onDone
        ? setTimeout(onDone, LOADER_DURATION_MS)
        : null;

    return () => {
      stopped = true;
      progress.stopAnimation();
      intro.stop();
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [doneOnFirstCycle, halo, onDone, progress, sealIn, titleIn]);

  const sealPop = sealIn.interpolate({
    inputRange: [0, 1],
    outputRange: [0.7, 1],
  });
  const haloSpin = halo.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const barWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, BAR_W],
  });
  const titleLift = titleIn.interpolate({
    inputRange: [0, 1],
    outputRange: [18, 0],
  });
  const tiltDeg = sealTilt.interpolate({
    inputRange: [-180, 180],
    outputRange: ['-180deg', '180deg'],
  });
  const nodShift = sealNod.interpolate({
    inputRange: [-30, 30],
    outputRange: [-10, 10],
  });

  return (
    <AppyrgagiwotyfxolypShell
      bg={bgLoader}
      overlay={[
        'rgba(6,10,28,0.92)',
        'rgba(17,26,59,0.88)',
        'rgba(10,7,32,0.96)',
      ]}>
      <ParticleyrgagiwotyfxolypField
        width={SCREEN_W}
        height={SCREEN_H}
        count={1200}
        seed={9041}
        tint={['#38C8FF', '#F5EFE5', '#7450C8']}
      />

      {/* Spark underlay — under center column (box-none parent). */}
      <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
        <LoaderSparkSealyrgagiwotyfxolypField />
      </View>

      <View style={styles.body} pointerEvents="box-none">
        <Animated.View
          style={[
            styles.sealWrap,
            {
              opacity: sealIn,
              transform: [{scale: sealPop}],
            },
          ]}
          {...panHandlers}>
          <Animated.View
            style={{
              transform: [
                {scale: sealScale},
                {rotate: tiltDeg},
                {translateY: nodShift},
              ],
            }}>
            <Animated.View
              style={[styles.halo, {transform: [{rotate: haloSpin}]}]}>
              <Svg width={SEAL} height={SEAL}>
                <Circle
                  cx={SEAL / 2}
                  cy={SEAL / 2}
                  r={SEAL / 2 - 3}
                  stroke="rgba(56,200,255,0.55)"
                  strokeWidth={1.5}
                  strokeDasharray="7 11"
                  fill="none"
                />
              </Svg>
            </Animated.View>

            <Svg width={SEAL} height={SEAL}>
              <Polygon
                points="66,16 110,41 110,91 66,116 22,91 22,41"
                fill="rgba(23,35,90,0.85)"
                stroke={C.gold}
                strokeWidth={2}
              />
              <Path
                d="M74 38 L52 70 L64 70 L58 96 L82 62 L69 62 Z"
                fill={C.primary}
                stroke="rgba(245,239,229,0.75)"
                strokeWidth={1}
              />
            </Svg>
          </Animated.View>
        </Animated.View>

        <Animated.View
          pointerEvents="none"
          style={{opacity: titleIn, transform: [{translateY: titleLift}]}}>
          <Text style={styles.brand}>GAG OF OLY</Text>
          <Text style={styles.tagline}>CHANNEL THE STORM</Text>
        </Animated.View>

        <View style={styles.track} pointerEvents="none">
          <Animated.View style={[styles.fillClip, {width: barWidth}]}>
            <LinearGradient
              colors={[C.primary, C.secondary, C.gold]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.fill}
            />
            {/* striped-fill chrome */}
            <View style={styles.stripeA} />
            <View style={styles.stripeB} />
            <View style={styles.stripeC} />
          </Animated.View>
        </View>
        <Text style={styles.loading} pointerEvents="none">
          LOADING...
        </Text>
        <Text style={styles.hint} pointerEvents="none">
          NUDGE THE SEAL
        </Text>
      </View>
    </AppyrgagiwotyfxolypShell>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  sealWrap: {
    width: SEAL,
    height: SEAL,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    shadowColor: C.primary,
    shadowOpacity: 0.9,
    shadowRadius: 24,
    shadowOffset: {width: 0, height: 0},
    elevation: 16,
  },
  halo: {position: 'absolute', width: SEAL, height: SEAL},
  brand: {
    fontSize: 40,
    fontWeight: '900',
    letterSpacing: 4,
    color: C.textPrimary,
    textAlign: 'center',
    textShadowColor: 'rgba(56,200,255,0.85)',
    textShadowRadius: 18,
    textShadowOffset: {width: 0, height: 0},
  },
  tagline: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 3,
    textAlign: 'center',
    color: 'rgba(56,200,255,0.85)',
  },
  track: {
    marginTop: 44,
    width: BAR_W,
    height: 5,
    borderRadius: 3,
    backgroundColor: 'rgba(245,239,229,0.12)',
    overflow: 'hidden',
  },
  fillClip: {
    height: 5,
    borderRadius: 3,
    overflow: 'hidden',
  },
  fill: {
    ...StyleSheet.absoluteFillObject,
    width: BAR_W,
    height: 5,
    borderRadius: 3,
  },
  stripeA: {
    position: 'absolute',
    left: 28,
    top: 0,
    bottom: 0,
    width: 10,
    backgroundColor: 'rgba(245,239,229,0.18)',
  },
  stripeB: {
    position: 'absolute',
    left: 78,
    top: 0,
    bottom: 0,
    width: 8,
    backgroundColor: 'rgba(10,16,40,0.22)',
  },
  stripeC: {
    position: 'absolute',
    left: 132,
    top: 0,
    bottom: 0,
    width: 12,
    backgroundColor: 'rgba(245,239,229,0.14)',
  },
  loading: {
    marginTop: 14,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    color: 'rgba(245,239,229,0.45)',
  },
  hint: {
    marginTop: 8,
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 2.4,
    color: 'rgba(56,200,255,0.55)',
    textAlign: 'center',
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
function LoaderyrgagiwotyfxolypScreenObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function LoaderyrgagiwotyfxolypScreenObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function LoaderyrgagiwotyfxolypScreenObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
