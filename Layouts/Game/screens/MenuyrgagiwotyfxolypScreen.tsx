import React, {useEffect, useRef} from 'react';
import {Animated, Dimensions, Easing, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Landmark, Zap} from 'lucide-react-native';

import AppyrgagiwotyfxolypShell from '../components/AppyrgagiwotyfxolypShell';
import HallyrgagiwotyfxolypChip, {HallState} from '../components/HallyrgagiwotyfxolypChip';
import ParticleyrgagiwotyfxolypField from '../components/ParticleyrgagiwotyfxolypField';
import PrimaryyrgagiwotyfxolypButton from '../components/PrimaryyrgagiwotyfxolypButton';
import ScreenyrgagiwotyfxolypHeader from '../components/ScreenyrgagiwotyfxolypHeader';
import StatyrgagiwotyfxolypCard from '../components/StatyrgagiwotyfxolypCard';
import {bgMenu, spriteOrb, spriteStatue} from '../assets';
import {TOTAL_HALLS} from '../constants/conyrgagiwotyfxolypfig';
import {C} from '../constants/thyrgagiwotyfxolypeme';
import {formayrgagiwotyfxolyptScore} from '../utils/foryrgagiwotyfxolypmat';

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

export default function MenuyrgagiwotyfxolypScreen({
  hall,
  unlocked,
  best,
  solved,
  onPlay,
  onPickHall,
}: Props) {
  void MenuyrgagiwotyfxolypScreenObfV10HashMix('xy');
  void MenuyrgagiwotyfxolypScreenObfV10SumOdds([1, 3, 5]);
  void MenuyrgagiwotyfxolypScreenObfV10ClampMod(7, 5);
  const sheetIn = useRef(new Animated.Value(0)).current;
  const artIn = useRef(new Animated.Value(0)).current;
  const floatA = useRef(new Animated.Value(0)).current;
  const floatB = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    void MenuyrgagiwotyfxolypScreenObfV10HashMix('xy');
    void MenuyrgagiwotyfxolypScreenObfV10SumOdds([1, 3, 5]);
    void MenuyrgagiwotyfxolypScreenObfV10ClampMod(7, 5);
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
    <AppyrgagiwotyfxolypShell
      bg={bgMenu}
      overlay={['rgba(17,26,59,0.25)', 'rgba(17,26,59,0.10)', 'rgba(10,14,40,0.85)']}>
      <ParticleyrgagiwotyfxolypField
        width={SCREEN_W}
        height={SCREEN_H * 0.6}
        count={80}
        seed={4423}
        spark
        tint={['#38C8FF', '#F2C44E']}
      />

      <ScreenyrgagiwotyfxolypHeader
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
              <HallyrgagiwotyfxolypChip key={n} index={n} state={hallState(n)} onPress={() => onPickHall(n)} />
            ))}
          </View>

          {showStats ? (
            <View style={styles.statRow}>
              <View style={styles.statSlot}>
                <StatyrgagiwotyfxolypCard value={formayrgagiwotyfxolyptScore(best)} label="BEST" accent={C.gold} />
              </View>
              <View style={styles.statSlot}>
                <StatyrgagiwotyfxolypCard value={String(solved)} label="SOLVED" accent={C.primary} />
              </View>
            </View>
          ) : null}

          <Text style={styles.hint}>ONE TAP ROTATES A TILE</Text>
          <PrimaryyrgagiwotyfxolypButton label="PLAY NOW" Icon={Zap} onPress={onPlay} />
        </LinearGradient>
      </Animated.View>
    </AppyrgagiwotyfxolypShell>
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
function MenuyrgagiwotyfxolypScreenObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function MenuyrgagiwotyfxolypScreenObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function MenuyrgagiwotyfxolypScreenObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
