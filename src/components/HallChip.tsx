import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Lock} from 'lucide-react-native';

import {C} from '../constants/theme';

export type HallState = 'locked' | 'active' | 'done';

interface Props {
  index: number;
  state: HallState;
  onPress: () => void;
}

export default function HallChip({index, state, onPress}: Props) {
  const active = state === 'active';
  const done = state === 'done';

  return (
    <Pressable
      onPress={state === 'locked' ? undefined : onPress}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={[
        styles.chip,
        active ? styles.active : null,
        done ? styles.done : null,
        state === 'locked' ? styles.locked : null,
      ]}>
      <View style={styles.row}>
        {state === 'locked' ? (
          <Lock size={14} color="rgba(245,239,229,0.30)" strokeWidth={2.4} />
        ) : (
          <Text
            style={[
              styles.num,
              active ? styles.numActive : null,
              done ? styles.numDone : null,
            ]}>
            {index}
          </Text>
        )}
        {done ? <Text style={styles.check}>{'✓'}</Text> : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    height: 44,
    minWidth: 52,
    flex: 1,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(245,239,229,0.05)',
    borderColor: 'rgba(245,239,229,0.10)',
  },
  row: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 4},
  active: {
    backgroundColor: 'rgba(56,200,255,0.16)',
    borderColor: C.primary,
    borderWidth: 1.5,
  },
  done: {borderColor: 'rgba(242,196,78,0.55)'},
  locked: {opacity: 0.85},
  num: {
    fontSize: 14,
    fontWeight: '800',
    color: 'rgba(245,239,229,0.30)',
    includeFontPadding: false,
  },
  numActive: {color: C.primary},
  numDone: {color: C.gold},
  check: {fontSize: 11, color: C.gold, includeFontPadding: false},
});
