/**
 * Textarea Component Tokens
 * Specific design tokens for the Textarea component
 */

import { spacing } from '../primitives/spacing';

export const textareaTokens = {
  padding: {
    x: spacing[3], // 12px
    y: spacing[2], // 8px
  },
  minHeight: {
    sm: '80px',
    md: '100px',
    lg: '120px',
  },
  spacing: {
    gap: spacing[1], // 4px - gap between elements
  },
} as const;

export type TextareaTokens = typeof textareaTokens;
