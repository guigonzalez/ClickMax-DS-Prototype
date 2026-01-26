/**
 * Card Component Tokens
 */

import { spacing } from '../primitives/spacing';

export const cardTokens = {
  padding: spacing[6], // 24px
  gap: spacing[4], // 16px
  headerGap: spacing[1.5], // 6px
  borderRadius: '12px',
} as const;

export type CardTokens = typeof cardTokens;
