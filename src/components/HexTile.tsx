import React, {useEffect, useMemo, useRef} from 'react';
import {Animated, Easing, Pressable, StyleSheet, Text, View} from 'react-native';
import Svg, {Circle, Defs, LinearGradient, Path, Polygon, Stop} from 'react-native-svg';

import {C} from '../constants/theme';
import {BASE, ChannelType, TileKind} from '../game/levels';

interface Props {
  size: number;
  type: ChannelType;
  rot: number;
  live: boolean;
  crossed: boolean;
  kind: TileKind;
  letter?: string;
  onPress: () => void;
}

const DEG = Math.PI / 180;

function polygonPoints(size: number): string {
  const r = size / 2;
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const a = (30 + i * 60) * DEG;
    pts.push((r + r * Math.cos(a)).toFixed(2) + ',' + (r + r * Math.sin(a)).toFixed(2));
  }
  return pts.join(' ');
}

function edgePoint(size: number, dir: number) {
  const r = size / 2;
  const inr = r * 0.866;
  const a = dir * 60 * DEG;
  return {x: r + inr * Math.cos(a), y: r + inr * Math.sin(a)};
}

/** One marble hex: the channel is drawn at rotation 0 and the whole tile turns. */
function HexTile({size, type, rot, live, crossed, kind, letter, onPress}: Props) {
  const spin = useRef(new Animated.Value(rot)).current;
  const bounce = useRef(new Animated.Value(1)).current;
  const turns = useRef(rot);
  const prev = useRef(rot);

  useEffect(() => {
    if (rot === prev.current) {
      return;
    }
    const delta = (rot - prev.current + 6) % 6;
    prev.current = rot;
    turns.current += delta;
    Animated.timing(spin, {
      toValue: turns.current,
      duration: 180,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
    Animated.sequence([
      Animated.timing(bounce, {toValue: 0.92, duration: 90, useNativeDriver: true}),
      Animated.spring(bounce, {toValue: 1, tension: 320, friction: 10, useNativeDriver: true}),
    ]).start();
  }, [bounce, rot, spin]);

  const spinDeg = spin.interpolate({inputRange: [0, 6], outputRange: ['0deg', '360deg']});

  const channel = useMemo(() => {
    const center = size / 2;
    return BASE[type]
      .map(dir => {
        const p = edgePoint(size, dir);
        return 'M' + center + ' ' + center + ' L' + p.x.toFixed(2) + ' ' + p.y.toFixed(2);
      })
      .join(' ');
  }, [size, type]);

  const points = useMemo(() => polygonPoints(size), [size]);
  const gid = 'marble' + size;
  const wide = Math.max(3, size * 0.3);
  const thin = Math.max(2, size * 0.16);
  const isSource = kind === 'source';
  const isStatue = kind === 'statue';

  const stroke = live ? C.primary : 'rgba(245,239,229,0.55)';
  const rimColor = isSource
    ? C.gold
    : isStatue
    ? live
      ? C.primary
      : C.gold
    : crossed
    ? C.danger
    : 'rgba(245,239,229,0.16)';
  const rimWidth = isSource || isStatue ? 2 : crossed ? 1.6 : 1;

  return (
    <Pressable
      onPress={onPress}
      hitSlop={{top: 2, bottom: 2, left: 2, right: 2}}
      style={{width: size, height: size}}>
      <Animated.View
        style={[
          styles.inner,
          {width: size, height: size, transform: [{rotate: spinDeg}, {scale: bounce}]},
        ]}>
        <Svg width={size} height={size}>
          <Defs>
            <LinearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#2A3A78" />
              <Stop offset="1" stopColor="#1A2450" />
            </LinearGradient>
          </Defs>
          <Polygon
            points={points}
            fill={'url(#' + gid + ')'}
            stroke={rimColor}
            strokeWidth={rimWidth}
          />
          {live && channel.length > 0 ? (
            <Path
              d={channel}
              stroke={C.primary}
              strokeOpacity={0.35}
              strokeWidth={wide}
              strokeLinecap="round"
              fill="none"
            />
          ) : null}
          {channel.length > 0 ? (
            <Path
              d={channel}
              stroke={stroke}
              strokeWidth={thin}
              strokeLinecap="round"
              fill="none"
            />
          ) : null}
          {isSource ? (
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={size * 0.22}
              fill="rgba(242,196,78,0.18)"
              stroke={C.gold}
              strokeWidth={2}
            />
          ) : null}
          {isStatue ? (
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={size * 0.24}
              fill={live ? 'rgba(56,200,255,0.22)' : 'rgba(242,196,78,0.12)'}
              stroke={live ? C.primary : C.gold}
              strokeWidth={2}
            />
          ) : null}
        </Svg>
      </Animated.View>

      {isSource ? (
        <View pointerEvents="none" style={styles.overlay}>
          <Text style={[styles.mark, styles.markGold]}>{'★'}</Text>
        </View>
      ) : null}
      {isStatue && letter ? (
        <View pointerEvents="none" style={styles.overlay}>
          <Text style={[styles.mark, live ? styles.markLive : styles.markGold]}>{letter}</Text>
        </View>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  inner: {alignItems: 'center', justifyContent: 'center'},
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mark: {fontSize: 15, fontWeight: '900', includeFontPadding: false},
  markGold: {color: C.gold},
  markLive: {color: C.primary},
});

export default React.memo(HexTile);
