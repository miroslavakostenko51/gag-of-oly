import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {C} from '../constants/theme';

export type BadgeState = 'idle' | 'charged' | 'failed';

interface Props {
  name: string;
  state: BadgeState;
}

export default function StatueBadge({name, state}: Props) {
  const charged = state === 'charged';
  const failed = state === 'failed';

  return (
    <View
      style={[
        styles.badge,
        charged ? styles.charged : null,
        failed ? styles.failed : null,
      ]}>
      {charged ? <View style={styles.dot} /> : null}
      <Text
        style={[
          styles.text,
          charged ? styles.textCharged : null,
          failed ? styles.textFailed : null,
        ]}
        numberOfLines={1}>
        {name}
      </Text>
      {failed ? <Text style={styles.mark}>{'✗'}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: 'rgba(245,239,229,0.05)',
    borderColor: 'rgba(245,239,229,0.12)',
  },
  charged: {
    backgroundColor: 'rgba(56,200,255,0.18)',
    borderColor: C.primary,
    shadowColor: C.primary,
    shadowOpacity: 0.6,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: 0},
    elevation: 6,
  },
  failed: {borderColor: C.danger},
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: C.primary,
  },
  text: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: 'rgba(245,239,229,0.45)',
    includeFontPadding: false,
  },
  textCharged: {color: C.primary},
  textFailed: {color: C.danger},
  mark: {fontSize: 12, color: C.danger, includeFontPadding: false},
});
