import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {C} from '../constants/theme';

interface Props {
  value: string;
  label: string;
  accent: string;
}

/**
 * Same card on Menu and Result. No raster icon on purpose: three AI sprites in
 * a row never match each other optically, a coloured accent dot always does.
 */
export default function StatCard({value, label, accent}: Props) {
  return (
    <View style={[styles.card, {borderColor: accent + '55', shadowColor: accent}]}>
      <View style={[styles.dot, {backgroundColor: accent}]} />
      <Text style={[styles.value, {color: accent}]} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: 'rgba(23,35,90,0.62)',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: 6},
    elevation: 6,
  },
  dot: {width: 8, height: 8, borderRadius: 4, marginBottom: 8},
  value: {
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 0.5,
    fontVariant: ['tabular-nums' as const],
    includeFontPadding: false,
  },
  label: {
    marginTop: 3,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
    color: C.textMuted,
  },
});
