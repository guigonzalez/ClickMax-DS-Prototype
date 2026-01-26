/**
 * Input Component Tokens
 */

import { spacing } from '../primitives/spacing';

export const inputTokens = {
  height: '40px',
  paddingX: spacing[3], // 12px
  paddingY: spacing[2], // 8px
  fontSize: '0.875rem',
  borderRadius: '8px',
  gap: spacing[1], // 4px between label and input
} as const;

export type InputTokens = typeof inputTokens;
