/**
 * Button Component Tokens
 */

import { spacing } from '../primitives/spacing';

export const buttonTokens = {
  size: {
    sm: {
      height: '32px',
      paddingX: spacing[3], // 12px
      fontSize: '0.875rem',
      gap: spacing[1], // 4px
    },
    md: {
      height: '40px',
      paddingX: spacing[4], // 16px
      fontSize: '0.875rem',
      gap: spacing[2], // 8px
    },
    lg: {
      height: '48px',
      paddingX: spacing[6], // 24px
      fontSize: '1rem',
      gap: spacing[2], // 8px
    },
    icon: {
      height: '40px',
      width: '40px',
      padding: '0',
    },
  },
} as const;

export type ButtonTokens = typeof buttonTokens;
