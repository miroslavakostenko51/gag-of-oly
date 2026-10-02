import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';

import {C} from '../constants/theme';

interface Props {
  visible: boolean;
}

/** Non-blocking coach card for the first hall. */
export default function TutorialHint({visible}: Props) {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      toValue: visible ? 1 : 0,
      duration: 260,
      useNativeDriver: true,
    }).start();
  }, [fade, visible]);

  return (
    <Animated.View pointerEvents="none" style={[styles.card, {opacity: fade}]}>
      <Text style={styles.line1}>TAP A TILE TO ROTATE IT</Text>
      <Text style={styles.line2}>LINK THE ALTAR TO 3 STATUES</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(56,200,255,0.35)',
    backgroundColor: 'rgba(11,16,45,0.92)',
    alignItems: 'center',
    shadowColor: C.primary,
    shadowOpacity: 0.4,
    shadowRadius: 16,
    shadowOffset: {width: 0, height: 6},
    elevation: 10,
  },
  line1: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: C.textPrimary,
    includeFontPadding: false,
  },
  line2: {
    marginTop: 4,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    color: C.textSecondary,
    includeFontPadding: false,
  },
});
