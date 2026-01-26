/**
 * Badge Component Tokens
 */

import { spacing } from '../primitives/spacing';

export const badgeTokens = {
  paddingX: spacing[2], // 8px
  paddingY: spacing[0.5], // 2px
  fontSize: '0.75rem',
  fontWeight: '500',
  borderRadius: '9999px',
} as const;

export type BadgeTokens = typeof badgeTokens;
