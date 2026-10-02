import React from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';

import {C} from '../constants/theme';
import {usePressScale} from '../hooks/usePressScale';

interface Props {
  label: string;
  onPress: () => void;
  Icon?: any;
  tone?: 'ghost' | 'gold';
  height?: number;
  style?: any;
}

const ICON = 24;

export default function SecondaryButton({
  label,
  onPress,
  Icon,
  tone = 'ghost',
  height = 50,
  style,
}: Props) {
  const {scale, onPressIn, onPressOut} = usePressScale(0.97);
  const gold = tone === 'gold';
  const ink = gold ? C.gold : C.textPrimary;

  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={[
        styles.hit,
        {
          height,
          backgroundColor: gold ? 'rgba(242,196,78,0.14)' : C.glassFill,
          borderColor: gold ? C.gold : C.glassEdge,
        },
        style,
      ]}>
      <Animated.View style={[styles.fill, {height, transform: [{scale}]}]}>
        <View style={styles.row}>
          {Icon ? <Icon size={ICON} color={ink} strokeWidth={2.4} /> : null}
          <Text style={[styles.label, {color: ink}]}>{label}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  hit: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
  },
  fill: {alignItems: 'center', justifyContent: 'center', width: '100%'},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1.8,
    lineHeight: ICON,
    includeFontPadding: false,
  },
});
