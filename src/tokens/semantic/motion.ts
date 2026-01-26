/**
 * Semantic Motion Tokens
 * Purpose-based animations - use these in your designs
 */

import { animations } from '../primitives/animations';

export const semanticMotion = {
  duration: {
    instant: animations.duration.instant,
    fast: animations.duration.fast,
    normal: animations.duration.normal,
    slow: animations.duration.slow,
  },
  easing: {
    default: animations.easing.easeInOut,
    enter: animations.easing.easeOut,
    exit: animations.easing.easeIn,
    bounce: animations.easing.easeOutBack,
  },
} as const;

export type SemanticMotion = typeof semanticMotion;
