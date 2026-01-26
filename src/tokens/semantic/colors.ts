/**
 * Semantic Color Tokens
 * Purpose-based colors - use these in your designs
 */

import { colors } from '../primitives/colors';

export const semanticColors = {
  bg: {
    primary: colors.white,
    secondary: colors.gray[200],
    tertiary: colors.gray[100],
    inverse: colors.gray[900],
    accent: colors.yellow[500],
    disabled: colors.gray[200],
    subtle: colors.gray[50],
  },
  text: {
    primary: colors.gray[900],
    secondary: colors.gray[400],
    tertiary: colors.gray[500],
    inverse: colors.white,
    accent: colors.gray[900],
    disabled: colors.gray[300],
    muted: colors.gray[600],
  },
  border: {
    default: colors.gray[200],
    strong: colors.gray[900],
    subtle: colors.gray[100],
    focus: colors.yellow[500],
    disabled: colors.gray[200],
  },
  feedback: {
    error: {
      bg: colors.red[50],
      border: colors.red[500],
      text: colors.red[700],
      icon: colors.red[500],
    },
    warning: {
      bg: colors.orange[50],
      border: colors.orange[500],
      text: colors.orange[600],
      icon: colors.orange[500],
    },
    success: {
      bg: colors.green[50],
      border: colors.green[500],
      text: colors.green[600],
      icon: colors.green[500],
    },
    info: {
      bg: colors.blue[50],
      border: colors.blue[500],
      text: colors.blue[600],
      icon: colors.blue[500],
    },
  },
  interactive: {
    default: colors.yellow[500],
    hover: colors.yellow[600],
    active: colors.yellow[600],
    focus: colors.yellow[500],
  },
} as const;

export type SemanticColors = typeof semanticColors;
