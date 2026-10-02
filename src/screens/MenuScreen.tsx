import React, {useEffect, useRef} from 'react';
import {Animated, Dimensions, Easing, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Landmark, Zap} from 'lucide-react-native';

import AppShell from '../components/AppShell';
import HallChip, {HallState} from '../components/HallChip';
import ParticleField from '../components/ParticleField';
import PrimaryButton from '../components/PrimaryButton';
import ScreenHeader from '../components/ScreenHeader';
import StatCard from '../components/StatCard';
import {bgMenu, spriteOrb, spriteStatue} from '../assets';
import {TOTAL_HALLS} from '../constants/config';
import {C} from '../constants/theme';
import {formatScore} from '../utils/format';

const {width: SCREEN_W, height: SCREEN_H} = Dimensions.get('window');
const CHIPS = [1, 2, 3, 4, 5];

interface Props {
  hall: number;
  unlocked: number;
  best: number;
  solved: number;
  onPlay: () => void;
  onPickHall: (hall: number) => void;
}

export default function MenuScreen({
  hall,
  unlocked,
  best,
  solved,
  onPlay,
  onPickHall,
}: Props) {
  const sheetIn = useRef(new Animated.Value(0)).current;
  const artIn = useRef(new Animated.Value(0)).current;
  const floatA = useRef(new Animated.Value(0)).current;
  const floatB = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const drift = (value: Animated.Value, duration: number) => {
      const step = () =>
        Animated.sequence([
          Animated.timing(value, {
            toValue: 1,
            duration,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
          Animated.timing(value, {
            toValue: 0,
            duration,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
        ]);
      // Six passes then rest: never a perpetual loop, that stalls UI automation.
      return Animated.sequence([step(), step(), step(), step(), step(), step()]);
    };

    const intro = Animated.parallel([
      Animated.timing(sheetIn, {
        toValue: 1,
        duration: 380,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.delay(120),
        Animated.timing(artIn, {toValue: 1, duration: 520, useNativeDriver: true}),
      ]),
      drift(floatA, 2600),
      drift(floatB, 3100),
    ]);
    intro.start();
    return () => intro.stop();
  }, [artIn, floatA, floatB, sheetIn]);

  const sheetLift = sheetIn.interpolate({inputRange: [0, 1], outputRange: [40, 0]});
  const artScale = artIn.interpolate({inputRange: [0, 1], outputRange: [0.9, 1]});
  const driftA = floatA.interpolate({inputRange: [0, 1], outputRange: [-10, 10]});
  const driftB = floatB.interpolate({inputRange: [0, 1], outputRange: [10, -10]});

  const hallState = (n: number): HallState => {
    if (n === hall) {
      return 'active';
    }
    return n < unlocked ? 'done' : n > unlocked ? 'locked' : 'done';
  };

  const showStats = best > 0 && solved > 0;

  return (
    <AppShell
      bg={bgMenu}
      overlay={['rgba(17,26,59,0.25)', 'rgba(17,26,59,0.10)', 'rgba(10,14,40,0.85)']}>
      <ParticleField
        width={SCREEN_W}
        height={SCREEN_H * 0.6}
        count={80}
        seed={4423}
        spark
        tint={['#38C8FF', '#F2C44E']}
      />

      <ScreenHeader
        title="OLYMPUS"
        framed={false}
        right={
          <View style={styles.hallsPill}>
            <Landmark size={16} color={C.primary} strokeWidth={2.4} />
            <Text style={styles.hallsPillText}>
              {'HALLS ' + unlocked + '/' + TOTAL_HALLS}
            </Text>
          </View>
        }
      />

      <View pointerEvents="none" style={styles.art}>
        <Animated.View
          style={{opacity: artIn, transform: [{scale: artScale}]}}>
          <Image source={spriteStatue} style={styles.statue} resizeMode="contain" />
        </Animated.View>
        <Animated.Image
          source={spriteOrb}
          resizeMode="contain"
          style={[styles.orbLeft, {transform: [{translateY: driftA}]}]}
        />
        <Animated.Image
          source={spriteOrb}
          resizeMode="contain"
          style={[styles.orbRight, {transform: [{translateY: driftB}]}]}
        />
      </View>

      <Animated.View
        pointerEvents="box-none"
        style={[styles.sheetWrap, {opacity: sheetIn, transform: [{translateY: sheetLift}]}]}>
        <LinearGradient
          colors={['rgba(23,35,90,0.94)', 'rgba(11,16,45,0.98)']}
          style={styles.sheet}>
          <Text style={styles.brand}>GAG OF OLY</Text>
          <Text style={styles.tagline}>ROTATE THE MARBLE. CHARGE THE GODS.</Text>

          <Text style={styles.sectionLabel}>HALLS OF OLYMPUS</Text>
          <View style={styles.chipRow}>
            {CHIPS.map(n => (
              <HallChip key={n} index={n} state={hallState(n)} onPress={() => onPickHall(n)} />
            ))}
          </View>

          {showStats ? (
            <View style={styles.statRow}>
              <View style={styles.statSlot}>
                <StatCard value={formatScore(best)} label="BEST" accent={C.gold} />
              </View>
              <View style={styles.statSlot}>
                <StatCard value={String(solved)} label="SOLVED" accent={C.primary} />
              </View>
            </View>
          ) : null}

          <Text style={styles.hint}>ONE TAP ROTATES A TILE</Text>
          <PrimaryButton label="PLAY NOW" Icon={Zap} onPress={onPlay} />
        </LinearGradient>
      </Animated.View>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  hallsPill: {
    height: 34,
    paddingHorizontal: 12,
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(245,239,229,0.08)',
    borderWidth: 1,
    borderColor: C.cyanEdge,
  },
  hallsPillText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: C.textPrimary,
    includeFontPadding: false,
  },
  art: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  statue: {
    width: 168,
    height: 168,
    shadowColor: C.secondary,
    shadowOpacity: 0.55,
    shadowRadius: 30,
    shadowOffset: {width: 0, height: 10},
  },
  orbLeft: {position: 'absolute', width: 46, height: 46, left: '14%', top: 40},
  orbRight: {position: 'absolute', width: 46, height: 46, right: '12%', top: 96},
  sheetWrap: {position: 'absolute', left: 0, right: 0, bottom: 0},
  sheet: {
    paddingTop: 22,
    paddingBottom: 28,
    paddingHorizontal: 20,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderTopWidth: 1,
    borderTopColor: 'rgba(56,200,255,0.28)',
    shadowColor: C.primary,
    shadowOpacity: 0.35,
    shadowRadius: 26,
    shadowOffset: {width: 0, height: -8},
    elevation: 18,
  },
  brand: {
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 3,
    color: C.textPrimary,
    textShadowColor: 'rgba(56,200,255,0.8)',
    textShadowRadius: 14,
    textShadowOffset: {width: 0, height: 0},
  },
  tagline: {
    marginTop: 6,
    marginBottom: 14,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1.6,
    color: C.textSecondary,
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    color: C.textMuted,
    marginBottom: 8,
  },
  chipRow: {flexDirection: 'row', gap: 8},
  statRow: {flexDirection: 'row', gap: 10, marginTop: 14},
  statSlot: {flex: 1},
  hint: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1.2,
    color: 'rgba(245,239,229,0.5)',
  },
});
