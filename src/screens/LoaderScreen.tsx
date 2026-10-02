import React, {useEffect, useRef} from 'react';
import {Animated, Dimensions, Easing, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Circle, Path, Polygon} from 'react-native-svg';

import AppShell from '../components/AppShell';
import ParticleField from '../components/ParticleField';
import {bgLoader} from '../assets';
import {LOADER_DURATION_MS} from '../constants/config';
import {C} from '../constants/theme';

const {width: SCREEN_W, height: SCREEN_H} = Dimensions.get('window');
const BAR_W = 190;
const SEAL = 132;

interface Props {
  onDone: () => void;
}

/**
 * Brand card. Deliberately colder and far darker than the menu: no gold sky,
 * no chips, no buttons — just the seal of Olympus over a storm.
 */
export default function LoaderScreen({onDone}: Props) {
  const sealIn = useRef(new Animated.Value(0)).current;
  const titleIn = useRef(new Animated.Value(0)).current;
  const halo = useRef(new Animated.Value(0)).current;
  const bar = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const intro = Animated.parallel([
      Animated.spring(sealIn, {toValue: 1, tension: 38, friction: 7, useNativeDriver: true}),
      Animated.sequence([
        Animated.delay(260),
        Animated.timing(titleIn, {toValue: 1, duration: 380, useNativeDriver: true}),
      ]),
      // Finite spin only — a perpetual loop keeps the window busy forever.
      Animated.timing(halo, {
        toValue: 1,
        duration: 6000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(bar, {
        toValue: 1,
        duration: 7400,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
    ]);
    intro.start();

    const timer = setTimeout(onDone, LOADER_DURATION_MS);
    return () => {
      intro.stop();
      clearTimeout(timer);
    };
  }, [bar, halo, onDone, sealIn, titleIn]);

  const sealScale = sealIn.interpolate({inputRange: [0, 1], outputRange: [0.7, 1]});
  const haloSpin = halo.interpolate({inputRange: [0, 1], outputRange: ['0deg', '360deg']});
  const barSlide = bar.interpolate({inputRange: [0, 1], outputRange: [-BAR_W, 0]});
  const titleLift = titleIn.interpolate({inputRange: [0, 1], outputRange: [18, 0]});

  return (
    <AppShell
      bg={bgLoader}
      overlay={['rgba(6,10,28,0.92)', 'rgba(17,26,59,0.88)', 'rgba(10,7,32,0.96)']}>
      <ParticleField
        width={SCREEN_W}
        height={SCREEN_H}
        count={1200}
        seed={9041}
        tint={['#38C8FF', '#F5EFE5', '#7450C8']}
      />

      <View style={styles.body}>
        <Animated.View
          style={[styles.sealWrap, {opacity: sealIn, transform: [{scale: sealScale}]}]}>
          <Animated.View style={[styles.halo, {transform: [{rotate: haloSpin}]}]}>
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

        <Animated.View
          style={{opacity: titleIn, transform: [{translateY: titleLift}]}}>
          <Text style={styles.brand}>GAG OF OLY</Text>
          <Text style={styles.tagline}>CHANNEL THE STORM</Text>
        </Animated.View>

        <View style={styles.track}>
          <Animated.View style={[styles.fillClip, {transform: [{translateX: barSlide}]}]}>
            <LinearGradient
              colors={[C.primary, C.secondary, C.gold]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.fill}
            />
          </Animated.View>
        </View>
        <Text style={styles.loading}>LOADING...</Text>
      </View>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  body: {flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24},
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
  fillClip: {width: BAR_W, height: 5},
  fill: {width: BAR_W, height: 5, borderRadius: 3},
  loading: {
    marginTop: 14,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    color: 'rgba(245,239,229,0.45)',
  },
});
