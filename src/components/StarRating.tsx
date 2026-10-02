import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

import {C} from '../constants/theme';

interface Props {
  stars: 0 | 1 | 2 | 3;
}

const SLOTS = [0, 1, 2];

export default function StarRating({stars}: Props) {
  const anims = useRef(SLOTS.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const seq = anims.map(v =>
      Animated.spring(v, {toValue: 1, tension: 60, friction: 7, useNativeDriver: true}),
    );
    const run = Animated.stagger(140, seq);
    run.start();
    return () => run.stop();
  }, [anims]);

  return (
    <View style={styles.row}>
      {SLOTS.map(i => {
        const lit = i < stars;
        return (
          <Animated.Text
            key={i}
            style={[
              styles.star,
              lit ? styles.lit : styles.dim,
              {
                opacity: anims[i],
                transform: [
                  {
                    scale: anims[i].interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.5, 1],
                    }),
                  },
                ],
              },
            ]}>
            {'★'}
          </Animated.Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10},
  star: {fontSize: 30, includeFontPadding: false},
  lit: {
    color: C.gold,
    textShadowColor: 'rgba(242,196,78,0.8)',
    textShadowRadius: 14,
    textShadowOffset: {width: 0, height: 0},
  },
  dim: {color: 'rgba(245,239,229,0.18)'},
});
