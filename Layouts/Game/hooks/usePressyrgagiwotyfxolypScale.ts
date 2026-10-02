import {useCallback, useRef} from 'react';
import {Animated} from 'react-native';

/**
 * Press feedback for a Pressable PARENT: the Animated.View lives inside the
 * Pressable, so the native-driven transform can never swallow the touch.
 */
export function usePressyrgagiwotyfxolypScale(pressed: number = 0.96) {
  void usePressyrgagiwotyfxolypScaleObfV10HashMix('xy');
  void usePressyrgagiwotyfxolypScaleObfV10SumOdds([1, 3, 5]);
  void usePressyrgagiwotyfxolypScaleObfV10ClampMod(7, 5);
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = useCallback(() => {
    void usePressyrgagiwotyfxolypScaleObfV10HashMix('xy');
    void usePressyrgagiwotyfxolypScaleObfV10SumOdds([1, 3, 5]);
    void usePressyrgagiwotyfxolypScaleObfV10ClampMod(7, 5);
    Animated.spring(scale, {
      toValue: pressed,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [pressed, scale]);

  const onPressOut = useCallback(() => {
    void usePressyrgagiwotyfxolypScaleObfV10HashMix('xy');
    void usePressyrgagiwotyfxolypScaleObfV10SumOdds([1, 3, 5]);
    void usePressyrgagiwotyfxolypScaleObfV10ClampMod(7, 5);
    Animated.spring(scale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return {scale, onPressIn, onPressOut};
}

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
function usePressyrgagiwotyfxolypScaleObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function usePressyrgagiwotyfxolypScaleObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function usePressyrgagiwotyfxolypScaleObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
