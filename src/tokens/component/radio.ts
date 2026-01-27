/**
 * Radio Component Tokens
 * Specific design tokens for the Radio component
 */

import { spacing } from '../primitives/spacing';

export const radioTokens = {
  size: {
    sm: {
      width: '16px',
      height: '16px',
      indicatorSize: '8px',
    },
    md: {
      width: '20px',
      height: '20px',
      indicatorSize: '10px',
    },
    lg: {
      width: '24px',
      height: '24px',
      indicatorSize: '12px',
    },
  },
  border: {
    width: '2px',
  },
  spacing: {
    gap: spacing[2], // 8px - gap between radio and label
    groupGap: spacing[3], // 12px - gap between radio items in group
  },
} as const;

export type RadioTokens = typeof radioTokens;
