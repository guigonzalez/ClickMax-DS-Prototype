/**
 * Semantic Typography Tokens
 * Use these in components - they map to primitive values
 */

import { typography as primitives } from '../primitives/typography';

/**
 * Heading Styles
 * Font: Plus Jakarta Sans
 * Weight: Bold
 * Line-height: 120%
 * Letter-spacing: 0.5%
 */
export const heading = {
  h1: {
    fontFamily: primitives.fontFamily.heading,
    fontSize: primitives.fontSize[56],
    fontWeight: primitives.fontWeight.bold,
    lineHeight: primitives.lineHeight[120],
    letterSpacing: primitives.letterSpacing[0.5],
  },
  h2: {
    fontFamily: primitives.fontFamily.heading,
    fontSize: primitives.fontSize[48],
    fontWeight: primitives.fontWeight.bold,
    lineHeight: primitives.lineHeight[120],
    letterSpacing: primitives.letterSpacing[0.5],
  },
  h3: {
    fontFamily: primitives.fontFamily.heading,
    fontSize: primitives.fontSize[40],
    fontWeight: primitives.fontWeight.bold,
    lineHeight: primitives.lineHeight[120],
    letterSpacing: primitives.letterSpacing[0.5],
  },
  h4: {
    fontFamily: primitives.fontFamily.heading,
    fontSize: primitives.fontSize[32],
    fontWeight: primitives.fontWeight.bold,
    lineHeight: primitives.lineHeight[120],
    letterSpacing: primitives.letterSpacing[0.5],
  },
  h5: {
    fontFamily: primitives.fontFamily.heading,
    fontSize: primitives.fontSize[24],
    fontWeight: primitives.fontWeight.bold,
    lineHeight: primitives.lineHeight[120],
    letterSpacing: primitives.letterSpacing[0.5],
  },
  h6: {
    fontFamily: primitives.fontFamily.heading,
    fontSize: primitives.fontSize[20],
    fontWeight: primitives.fontWeight.bold,
    lineHeight: primitives.lineHeight[120],
    letterSpacing: primitives.letterSpacing[0.5],
  },
} as const;

/**
 * Subheading Styles
 * Font: Plus Jakarta Sans
 * Weight: Bold
 * Line-height: 120%
 * Letter-spacing: 0.5%
 */
export const subheading = {
  18: {
    fontFamily: primitives.fontFamily.heading,
    fontSize: primitives.fontSize[18],
    fontWeight: primitives.fontWeight.bold,
    lineHeight: primitives.lineHeight[120],
    letterSpacing: primitives.letterSpacing[0.5],
  },
  16: {
    fontFamily: primitives.fontFamily.heading,
    fontSize: primitives.fontSize[16],
    fontWeight: primitives.fontWeight.bold,
    lineHeight: primitives.lineHeight[120],
    letterSpacing: primitives.letterSpacing[0.5],
  },
  14: {
    fontFamily: primitives.fontFamily.heading,
    fontSize: primitives.fontSize[14],
    fontWeight: primitives.fontWeight.bold,
    lineHeight: primitives.lineHeight[120],
    letterSpacing: primitives.letterSpacing[0.5],
  },
} as const;

/**
 * Body 18 Styles
 * Font: Inter
 * Line-height: 140%
 * Letter-spacing: 0%
 */
export const body18 = {
  regular: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[18],
    fontWeight: primitives.fontWeight.regular,
    lineHeight: primitives.lineHeight[140],
    letterSpacing: primitives.letterSpacing[0],
  },
  medium: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[18],
    fontWeight: primitives.fontWeight.medium,
    lineHeight: primitives.lineHeight[140],
    letterSpacing: primitives.letterSpacing[0],
  },
  semibold: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[18],
    fontWeight: primitives.fontWeight.semibold,
    lineHeight: primitives.lineHeight[140],
    letterSpacing: primitives.letterSpacing[0],
  },
  bold: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[18],
    fontWeight: primitives.fontWeight.bold,
    lineHeight: primitives.lineHeight[140],
    letterSpacing: primitives.letterSpacing[0],
  },
} as const;

/**
 * Body 16 Styles
 * Font: Inter
 * Line-height: 150%
 * Letter-spacing: 0%
 */
export const body16 = {
  regular: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[16],
    fontWeight: primitives.fontWeight.regular,
    lineHeight: primitives.lineHeight[150],
    letterSpacing: primitives.letterSpacing[0],
  },
  medium: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[16],
    fontWeight: primitives.fontWeight.medium,
    lineHeight: primitives.lineHeight[150],
    letterSpacing: primitives.letterSpacing[0],
  },
  semibold: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[16],
    fontWeight: primitives.fontWeight.semibold,
    lineHeight: primitives.lineHeight[150],
    letterSpacing: primitives.letterSpacing[0],
  },
  bold: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[16],
    fontWeight: primitives.fontWeight.bold,
    lineHeight: primitives.lineHeight[150],
    letterSpacing: primitives.letterSpacing[0],
  },
} as const;

/**
 * Body 14 Styles
 * Font: Inter
 * Line-height: 150%
 * Letter-spacing: 0%
 */
export const body14 = {
  regular: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[14],
    fontWeight: primitives.fontWeight.regular,
    lineHeight: primitives.lineHeight[150],
    letterSpacing: primitives.letterSpacing[0],
  },
  medium: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[14],
    fontWeight: primitives.fontWeight.medium,
    lineHeight: primitives.lineHeight[150],
    letterSpacing: primitives.letterSpacing[0],
  },
  semibold: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[14],
    fontWeight: primitives.fontWeight.semibold,
    lineHeight: primitives.lineHeight[150],
    letterSpacing: primitives.letterSpacing[0],
  },
  bold: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[14],
    fontWeight: primitives.fontWeight.bold,
    lineHeight: primitives.lineHeight[150],
    letterSpacing: primitives.letterSpacing[0],
  },
} as const;

/**
 * Body 12 Styles
 * Font: Inter
 * Line-height: 150%
 * Letter-spacing: 0%
 */
export const body12 = {
  regular: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[12],
    fontWeight: primitives.fontWeight.regular,
    lineHeight: primitives.lineHeight[150],
    letterSpacing: primitives.letterSpacing[0],
  },
  medium: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[12],
    fontWeight: primitives.fontWeight.medium,
    lineHeight: primitives.lineHeight[150],
    letterSpacing: primitives.letterSpacing[0],
  },
  semibold: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[12],
    fontWeight: primitives.fontWeight.semibold,
    lineHeight: primitives.lineHeight[150],
    letterSpacing: primitives.letterSpacing[0],
  },
  bold: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[12],
    fontWeight: primitives.fontWeight.bold,
    lineHeight: primitives.lineHeight[150],
    letterSpacing: primitives.letterSpacing[0],
  },
} as const;

/**
 * Overline 10 Styles
 * Font: Inter
 * Line-height: 150%
 * Letter-spacing: 1%
 */
export const overline10 = {
  regular: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[10],
    fontWeight: primitives.fontWeight.regular,
    lineHeight: primitives.lineHeight[150],
    letterSpacing: primitives.letterSpacing[1],
  },
  medium: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[10],
    fontWeight: primitives.fontWeight.medium,
    lineHeight: primitives.lineHeight[150],
    letterSpacing: primitives.letterSpacing[1],
  },
  semibold: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[10],
    fontWeight: primitives.fontWeight.semibold,
    lineHeight: primitives.lineHeight[150],
    letterSpacing: primitives.letterSpacing[1],
  },
  bold: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[10],
    fontWeight: primitives.fontWeight.bold,
    lineHeight: primitives.lineHeight[150],
    letterSpacing: primitives.letterSpacing[1],
  },
} as const;

/**
 * XSmall 8 Styles
 * Font: Inter
 * Line-height: 100%
 * Letter-spacing: 0%
 */
export const xsmall8 = {
  regular: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[8],
    fontWeight: primitives.fontWeight.regular,
    lineHeight: primitives.lineHeight[100],
    letterSpacing: primitives.letterSpacing[0],
  },
  medium: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[8],
    fontWeight: primitives.fontWeight.medium,
    lineHeight: primitives.lineHeight[100],
    letterSpacing: primitives.letterSpacing[0],
  },
  semibold: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[8],
    fontWeight: primitives.fontWeight.semibold,
    lineHeight: primitives.lineHeight[100],
    letterSpacing: primitives.letterSpacing[0],
  },
  bold: {
    fontFamily: primitives.fontFamily.body,
    fontSize: primitives.fontSize[8],
    fontWeight: primitives.fontWeight.bold,
    lineHeight: primitives.lineHeight[100],
    letterSpacing: primitives.letterSpacing[0],
  },
} as const;

/**
 * Export all typography tokens
 */
export const typography = {
  heading,
  subheading,
  body18,
  body16,
  body14,
  body12,
  overline10,
  xsmall8,
} as const;

export type Typography = typeof typography;
