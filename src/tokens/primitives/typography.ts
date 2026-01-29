/**
 * Primitive Typography Tokens
 * Raw values - NEVER use directly in components
 */

export const typography = {
  fontFamily: {
    heading: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", Consolas, monospace',
  },
  fontSize: {
    8: '0.5rem', // 8px
    10: '0.625rem', // 10px
    12: '0.75rem', // 12px
    14: '0.875rem', // 14px
    16: '1rem', // 16px
    18: '1.125rem', // 18px
    20: '1.25rem', // 20px
    24: '1.5rem', // 24px
    32: '2rem', // 32px
    40: '2.5rem', // 40px
    48: '3rem', // 48px
    56: '3.5rem', // 56px
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    100: '1', // 100%
    120: '1.2', // 120%
    140: '1.4', // 140%
    150: '1.5', // 150%
  },
  letterSpacing: {
    0: '0em', // 0%
    0.5: '0.005em', // 0.5%
    1: '0.01em', // 1%
  },
} as const;

export type Typography = typeof typography;
