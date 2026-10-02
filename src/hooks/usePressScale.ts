import {useCallback, useRef} from 'react';
import {Animated} from 'react-native';

/**
 * Press feedback for a Pressable PARENT: the Animated.View lives inside the
 * Pressable, so the native-driven transform can never swallow the touch.
 */
export function usePressScale(pressed: number = 0.96) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: pressed,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [pressed, scale]);

  const onPressOut = useCallback(() => {
    Animated.spring(scale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return {scale, onPressIn, onPressOut};
}
