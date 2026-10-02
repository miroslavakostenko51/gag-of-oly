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
