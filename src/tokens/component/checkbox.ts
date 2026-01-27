/**
 * Checkbox Component Tokens
 * Specific design tokens for the Checkbox component
 */

import { spacing } from '../primitives/spacing';

export const checkboxTokens = {
  size: {
    sm: {
      width: '16px',
      height: '16px',
      iconSize: '12px',
    },
    md: {
      width: '20px',
      height: '20px',
      iconSize: '14px',
    },
    lg: {
      width: '24px',
      height: '24px',
      iconSize: '16px',
    },
  },
  border: {
    width: '2px',
    radius: spacing[1], // 4px
  },
  spacing: {
    gap: spacing[2], // 8px - gap between checkbox and label
  },
} as const;

export type CheckboxTokens = typeof checkboxTokens;
