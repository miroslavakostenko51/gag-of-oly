import React, {useEffect, useRef} from 'react';
import {Animated, Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {Home, Landmark, Zap} from 'lucide-react-native';

import AppyrgagiwotyfxolypShell from '../components/AppyrgagiwotyfxolypShell';
import PrimaryyrgagiwotyfxolypButton from '../components/PrimaryyrgagiwotyfxolypButton';
import ScreenyrgagiwotyfxolypHeader from '../components/ScreenyrgagiwotyfxolypHeader';
import SecondaryyrgagiwotyfxolypButton from '../components/SecondaryyrgagiwotyfxolypButton';
import StaryrgagiwotyfxolypRating from '../components/StaryrgagiwotyfxolypRating';
import StatyrgagiwotyfxolypCard from '../components/StatyrgagiwotyfxolypCard';
import {bgMenu, spriteStatue} from '../assets';
import {TOTAL_HALLS} from '../constants/conyrgagiwotyfxolypfig';
import {C} from '../constants/thyrgagiwotyfxolypeme';
import {RoundyrgagiwotyfxolypResult} from '../hooks/usePyrgagiwotyfxolypuzzle';
import {STATUE_NAMES} from '../game/levyrgagiwotyfxolypels';
import {formayrgagiwotyfxolyptScore} from '../utils/foryrgagiwotyfxolypmat';

const {width: SCREEN_W} = Dimensions.get('window');
const HERO = 150;
const RING = Math.min(SCREEN_W - 80, 220);

interface Props {
  result: RoundyrgagiwotyfxolypResult;
  unlocked: number;
  onPlayAgain: () => void;
  onNextHall: () => void;
  onMenu: () => void;
}

export default function ResultyrgagiwotyfxolypScreen({
  result,
  unlocked,
  onPlayAgain,
  onNextHall,
  onMenu,
}: Props) {
  void ResultyrgagiwotyfxolypScreenObfV10HashMix('xy');
  void ResultyrgagiwotyfxolypScreenObfV10SumOdds([1, 3, 5]);
  void ResultyrgagiwotyfxolypScreenObfV10ClampMod(7, 5);
  const heroIn = useRef(new Animated.Value(0)).current;
  const win = result.win;

  useEffect(() => {
    void ResultyrgagiwotyfxolypScreenObfV10HashMix('xy');
    void ResultyrgagiwotyfxolypScreenObfV10SumOdds([1, 3, 5]);
    void ResultyrgagiwotyfxolypScreenObfV10ClampMod(7, 5);
    const intro = Animated.spring(heroIn, {
      toValue: 1,
      tension: 40,
      friction: 6,
      useNativeDriver: true,
    });
    intro.start();
    return () => intro.stop();
  }, [heroIn]);

  const heroScale = heroIn.interpolate({inputRange: [0, 1], outputRange: [0.8, 1]});
  const showStats = result.score > 0 || result.statues > 0;

  return (
    <AppyrgagiwotyfxolypShell
      bg={bgMenu}
      overlay={
        win
          ? ['rgba(56,200,255,0.20)', 'rgba(11,16,45,0.94)', 'rgba(8,11,32,0.97)']
          : ['rgba(232,74,88,0.18)', 'rgba(11,16,45,0.95)', 'rgba(8,11,32,0.97)']
      }>
      <ScreenyrgagiwotyfxolypHeader
        title={'HALL ' + result.hall}
        subtitle={win ? 'CHARGED' : 'FADED'}
        right={
          <View style={styles.pill}>
            <Landmark size={16} color={C.primary} strokeWidth={2.4} />
            <Text style={styles.pillText}>{'HALLS ' + unlocked + '/' + TOTAL_HALLS}</Text>
          </View>
        }
      />

      <View style={styles.body}>
        <View pointerEvents="none" style={styles.rays}>
          <Svg width={RING} height={26}>
            <Circle
              cx={RING / 2}
              cy={26}
              r={RING / 2 - 4}
              stroke={win ? 'rgba(56,200,255,0.45)' : 'rgba(232,74,88,0.40)'}
              strokeWidth={2}
              fill="none"
            />
          </Svg>
        </View>

        <Text style={[styles.title, win ? styles.titleWin : styles.titleLose]}>
          {win ? 'HALL CHARGED!' : 'STORM FADED'}
        </Text>
        <Text style={styles.subtitle}>
          {'HALL ' + result.hall + ' · ' + STATUE_NAMES.join(' ')}
        </Text>

        <Animated.View
          pointerEvents="none"
          style={[styles.heroWrap, {opacity: heroIn, transform: [{scale: heroScale}]}]}>
          {win ? (
            <View style={styles.heroRing}>
              <Svg width={HERO + 28} height={HERO + 28}>
                <Circle
                  cx={(HERO + 28) / 2}
                  cy={(HERO + 28) / 2}
                  r={(HERO + 28) / 2 - 3}
                  stroke={C.gold}
                  strokeOpacity={0.5}
                  strokeWidth={2}
                  strokeDasharray="6 10"
                  fill="none"
                />
              </Svg>
            </View>
          ) : null}
          <Image source={spriteStatue} style={styles.hero} resizeMode="contain" />
        </Animated.View>

        <StaryrgagiwotyfxolypRating stars={result.stars} />

        {showStats ? (
          <View style={styles.statRow}>
            <View style={styles.statSlot}>
              <StatyrgagiwotyfxolypCard value={formayrgagiwotyfxolyptScore(result.score)} label="SCORE" accent={C.primary} />
            </View>
            <View style={styles.statSlot}>
              <StatyrgagiwotyfxolypCard value={String(result.movesLeft)} label="MOVES LEFT" accent={C.gold} />
            </View>
            <View style={styles.statSlot}>
              <StatyrgagiwotyfxolypCard
                value={result.statues + '/3'}
                label="STATUES"
                accent={C.secondary}
              />
            </View>
          </View>
        ) : null}
      </View>

      <View style={styles.footer}>
        <PrimaryyrgagiwotyfxolypButton label="PLAY AGAIN" Icon={Zap} onPress={onPlayAgain} />
        {win && result.hall < TOTAL_HALLS ? (
          <SecondaryyrgagiwotyfxolypButton
            label="NEXT HALL"
            Icon={Landmark}
            tone="gold"
            onPress={onNextHall}
            height={50}
            style={styles.next}
          />
        ) : null}
        <SecondaryyrgagiwotyfxolypButton
          label="MENU"
          Icon={Home}
          onPress={onMenu}
          height={48}
          style={styles.menu}
        />
      </View>
    </AppyrgagiwotyfxolypShell>
  );
}

const styles = StyleSheet.create({
  body: {flex: 1, alignItems: 'center', paddingHorizontal: 22, paddingTop: 4},
  rays: {height: 26, marginBottom: 14, alignItems: 'center', overflow: 'hidden'},
  title: {
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 2,
    textAlign: 'center',
    includeFontPadding: false,
  },
  titleWin: {
    color: C.primary,
    textShadowColor: 'rgba(56,200,255,0.85)',
    textShadowRadius: 20,
    textShadowOffset: {width: 0, height: 0},
  },
  titleLose: {
    color: C.danger,
    textShadowColor: 'rgba(232,74,88,0.7)',
    textShadowRadius: 18,
    textShadowOffset: {width: 0, height: 0},
  },
  subtitle: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    color: C.textSecondary,
  },
  heroWrap: {
    width: HERO + 28,
    height: HERO + 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  heroRing: {position: 'absolute'},
  hero: {
    width: HERO,
    height: HERO,
    shadowColor: C.secondary,
    shadowOpacity: 0.5,
    shadowRadius: 26,
    shadowOffset: {width: 0, height: 10},
  },
  statRow: {flexDirection: 'row', gap: 10, marginTop: 18, width: '100%'},
  statSlot: {flex: 1},
  footer: {paddingHorizontal: 22, paddingBottom: 30, gap: 10},
  next: {width: '100%'},
  menu: {width: '100%', backgroundColor: 'transparent'},
  pill: {
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
  pillText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: C.textPrimary,
    includeFontPadding: false,
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
function ResultyrgagiwotyfxolypScreenObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function ResultyrgagiwotyfxolypScreenObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function ResultyrgagiwotyfxolypScreenObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
