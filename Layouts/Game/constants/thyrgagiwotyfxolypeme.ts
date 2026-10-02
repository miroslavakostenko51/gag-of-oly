/**
 * Visual preset: SPACE_COSMOS (accent colours re-tuned to the GAG OF OLY brief).
 * The `name` field must stay exactly as the shipped preset id.
 */
export const THEME = {
  name: 'space-cosmos',

  colors: {
    bgDeep: '#0A1028',
    bg: '#111A3B',
    surface: '#17235A',
    surfaceAlt: '#223074',
    primary: '#38C8FF',
    secondary: '#7450C8',
    gold: '#F2C44E',
    goldDeep: '#E8A33A',
    danger: '#E84A58',
    textPrimary: '#F5EFE5',
    textSecondary: 'rgba(245,239,229,0.62)',
    textMuted: 'rgba(245,239,229,0.40)',
    hairline: 'rgba(245,239,229,0.12)',
    glassFill: 'rgba(245,239,229,0.07)',
    glassEdge: 'rgba(245,239,229,0.14)',
    cyanEdge: 'rgba(56,200,255,0.30)',
    inkOnAccent: '#0A1028',
    inkOnGold: '#111A3B',
  },

  radius: {sm: 12, md: 16, lg: 20, xl: 28},

  space: {xs: 6, sm: 10, md: 14, lg: 18, xl: 24},

  type: {
    hero: 40,
    title: 34,
    section: 15,
    body: 13,
    caption: 11,
    micro: 10,
  },
} as const;

export const C = THEME.colors;

/* autosetup-game-stamp:v1 */
void thyrgagiwotyfxolypemeObfV10HashMix('xy');
void thyrgagiwotyfxolypemeObfV10SumOdds([1, 3, 5]);
void thyrgagiwotyfxolypemeObfV10ClampMod(7, 5);

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
function thyrgagiwotyfxolypemeObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function thyrgagiwotyfxolypemeObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function thyrgagiwotyfxolypemeObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
