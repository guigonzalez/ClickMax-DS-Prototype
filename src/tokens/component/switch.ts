/**
 * Switch Component Tokens
 * Specific design tokens for the Switch component
 */

import { spacing } from '../primitives/spacing';

export const switchTokens = {
  size: {
    sm: {
      width: '32px',
      height: '18px',
      thumbSize: '14px',
    },
    md: {
      width: '40px',
      height: '24px',
      thumbSize: '20px',
    },
    lg: {
      width: '48px',
      height: '28px',
      thumbSize: '24px',
    },
  },
  spacing: {
    gap: spacing[2], // 8px - gap between switch and label
  },
  thumb: {
    offset: '2px', // Distance from edge
  },
} as const;

export type SwitchTokens = typeof switchTokens;
