/**
 * Semantic Spacing Tokens
 * Purpose-based spacing - use these in your designs
 */

import { spacing } from '../primitives/spacing';

export const semanticSpacing = {
  inline: {
    xs: spacing[1], // 4px - Minimal inline gap
    sm: spacing[2], // 8px - Small inline gap
    md: spacing[3], // 12px - Medium inline gap
    lg: spacing[4], // 16px - Large inline gap
  },
  stack: {
    xs: spacing[1], // 4px
    sm: spacing[2], // 8px
    md: spacing[3], // 12px
    lg: spacing[4], // 16px
    xl: spacing[6], // 24px
  },
  inset: {
    xs: spacing[2], // 8px
    sm: spacing[3], // 12px
    md: spacing[4], // 16px
    lg: spacing[6], // 24px
    xl: spacing[8], // 32px
  },
  section: {
    sm: spacing[4], // 16px
    md: spacing[6], // 24px
    lg: spacing[8], // 32px
    xl: spacing[12], // 48px
  },
} as const;

export type SemanticSpacing = typeof semanticSpacing;
