/**
 * Semantic Color Tokens - ClickMax Design System
 *
 * PURPOSE-BASED COLORS - ALWAYS USE THESE IN YOUR DESIGNS
 *
 * ⚠️ CRITICAL RULES:
 * 1. NEVER import from '../primitives/colors' directly in components
 * 2. ALWAYS use semantic tokens (this file) for styling
 * 3. Semantic tokens provide meaning and context
 * 4. Primitive colors are implementation details that can change
 *
 * STRUCTURE:
 * - Background colors (bg)
 * - Text colors (text)
 * - Border colors (border)
 * - Interactive states (interactive)
 * - Feedback states (feedback)
 * - Surface colors (surface)
 * - Overlay colors (overlay)
 */

import { colors } from '../primitives/colors';

/**
 * =============================================================================
 * BACKGROUND COLORS
 * =============================================================================
 * Use for container, card, page, and section backgrounds
 */
export const backgroundColors = {
  /**
   * PRIMARY BACKGROUND
   * Usage: Main page background, default container background
   * Color: White (#FFFFFF)
   * Accessibility: Base for all text contrast calculations
   *
   * ✅ Good: <div className="bg-bg-primary">
   * ❌ Bad: <div style={{ background: '#FFFFFF' }}>
   */
  primary: colors.neutral[0],

  /**
   * SECONDARY BACKGROUND
   * Usage: Alternate sections, cards on primary background, subtle differentiation
   * Color: Light gray (#F4F5F5)
   * Accessibility: Maintains readability with neutral-900 text (16:1 contrast)
   *
   * ✅ Good: <Card className="bg-bg-secondary">
   * ❌ Bad: Using for primary content areas (too subtle)
   */
  secondary: colors.neutral[100],

  /**
   * TERTIARY BACKGROUND
   * Usage: Nested cards, hover states on secondary bg, layered content
   * Color: Lightest gray (#FAFAFA)
   * Accessibility: Very subtle, use for depth not differentiation
   *
   * ✅ Good: <Card className="bg-bg-secondary"><div className="bg-bg-tertiary">
   * ❌ Bad: Using as primary background (no depth perception)
   */
  tertiary: colors.neutral[50],

  /**
   * INVERSE BACKGROUND
   * Usage: Dark mode primary, dark headers, dark sections, contrasting areas
   * Color: Dark gray (#1F2123)
   * Accessibility: Use with text-inverse for AAA contrast (16:1)
   *
   * ✅ Good: <header className="bg-bg-inverse text-text-inverse">
   * ❌ Bad: Using with text-primary (poor contrast)
   */
  inverse: colors.neutral[900],

  /**
   * ACCENT BACKGROUND
   * Usage: Brand highlights, call-to-action sections, promotional banners
   * Color: Fluor (#D4FF00 - fluorescent yellow-green)
   * Accessibility: Use with text-primary (neutral-900) for AAA contrast (13.92:1)
   *
   * ⚠️ WARNING: Never use with white or light text - poor contrast
   * ✅ Good: <section className="bg-bg-accent text-text-primary">
   * ❌ Bad: <section className="bg-bg-accent text-white">
   */
  accent: colors.fluor[500],

  /**
   * DISABLED BACKGROUND
   * Usage: Disabled inputs, inactive buttons, non-interactive elements
   * Color: Light gray (#EDEEEF)
   * Accessibility: Intentionally low contrast to indicate disabled state
   *
   * ✅ Good: <button disabled className="bg-bg-disabled">
   * ❌ Bad: Using for active, clickable elements
   */
  disabled: colors.neutral[200],

  /**
   * SUBTLE BACKGROUND
   * Usage: Hover states, focus states (non-interactive), breadcrumb trails
   * Color: Lightest gray (#FAFAFA)
   * Accessibility: Very subtle visual change, not for critical information
   *
   * ✅ Good: <tr className="hover:bg-bg-subtle">
   * ❌ Bad: Relying on this alone to indicate selection
   */
  subtle: colors.neutral[50],

  /**
   * GRADIENT BACKGROUNDS
   * Usage: Decorative backgrounds, hero sections, marketing pages
   * Accessibility: Always test text contrast on gradient backgrounds
   *
   * ✅ Good: Decorative sections with no text
   * ❌ Bad: Primary content areas (readability issues)
   */
  gradient: {
    /** Base gradient: Stone 100 to Neutral 50 */
    base: colors.background.base,
    /** Soft gradient: Neutral 50 to White */
    soft: colors.background.soft,
  },
} as const;

/**
 * =============================================================================
 * TEXT COLORS
 * =============================================================================
 * Use for all text content, labels, and typographic elements
 */
export const textColors = {
  /**
   * PRIMARY TEXT
   * Usage: Headings, body text, main content, labels
   * Color: Dark gray (#1F2123)
   * Accessibility: AAA contrast on white (16.15:1), AA on secondary bg
   *
   * ✅ Good: <h1 className="text-text-primary">
   * ❌ Bad: Using for text on dark backgrounds (use text-inverse)
   */
  primary: colors.neutral[900],

  /**
   * SECONDARY TEXT
   * Usage: Descriptions, helper text, supporting content, timestamps
   * Color: Medium gray (#697077)
   * Accessibility: AA contrast on white (5.02:1), use 16px+ font size
   *
   * ✅ Good: <p className="text-text-secondary text-sm">
   * ❌ Bad: Using for 12px or smaller text (contrast too low)
   */
  secondary: colors.neutral[600],

  /**
   * TERTIARY TEXT
   * Usage: Placeholder text, disabled labels, de-emphasized content
   * Color: Light gray (#989EA4)
   * Accessibility: FAILS WCAG AA (2.71:1) - ONLY use for large text (18pt+)
   *
   * ⚠️ CRITICAL: Do NOT use for body text or critical information
   * ✅ Good: <p className="text-text-tertiary text-xl">Placeholder
   * ❌ Bad: <span className="text-text-tertiary text-sm">Important info
   */
  tertiary: colors.neutral[500],

  /**
   * INVERSE TEXT
   * Usage: Text on dark backgrounds, dark mode primary text, contrast text
   * Color: White (#FFFFFF)
   * Accessibility: AAA contrast on neutral-900 (16.15:1)
   *
   * ✅ Good: <div className="bg-bg-inverse text-text-inverse">
   * ❌ Bad: Using on light backgrounds (invisible)
   */
  inverse: colors.neutral[0],

  /**
   * ACCENT TEXT
   * Usage: Brand-colored text, highlighted keywords, call-to-action text
   * Color: Fluor Dark (#B9D400)
   * Accessibility: AA contrast on white (sufficient for large text)
   *
   * ⚠️ WARNING: Not suitable for body text, use sparingly
   * ✅ Good: <span className="text-text-accent font-bold text-lg">
   * ❌ Bad: Long paragraphs in accent color
   */
  accent: colors.fluor[700],

  /**
   * DISABLED TEXT
   * Usage: Disabled form labels, inactive menu items, non-interactive text
   * Color: Light gray (#B9BDC1)
   * Accessibility: FAILS WCAG AA (1.89:1) - Intentionally low for disabled state
   *
   * ✅ Good: <label className="text-text-disabled">Disabled option
   * ❌ Bad: Using for active, readable content
   */
  disabled: colors.neutral[400],

  /**
   * MUTED TEXT
   * Usage: Captions, footnotes, metadata, less important info
   * Color: Medium gray (#697077) - Same as secondary
   * Accessibility: AA contrast on white (5.02:1)
   *
   * ✅ Good: <figcaption className="text-text-muted text-sm">
   * ❌ Bad: Primary headings or important content
   */
  muted: colors.neutral[600],
} as const;

/**
 * =============================================================================
 * BORDER COLORS
 * =============================================================================
 * Use for borders, dividers, separators, and outlines
 */
export const borderColors = {
  /**
   * DEFAULT BORDER
   * Usage: Input borders, card borders, dividers, table borders
   * Color: Light gray (#EDEEEF)
   * Accessibility: FAILS WCAG AA for UI (1.16:1) - Decorative only
   *
   * ⚠️ NOTE: Not suitable for critical UI boundaries
   * ✅ Good: <Card className="border border-border-default">
   * ❌ Bad: Relying on border alone to show focus state
   */
  default: colors.neutral[200],

  /**
   * STRONG BORDER
   * Usage: Emphasized borders, active states, important separations
   * Color: Dark gray (#3A3D41)
   * Accessibility: AAA contrast on white (10.92:1)
   *
   * ✅ Good: <div className="border-2 border-border-strong">
   * ❌ Bad: All borders (too heavy for subtle separations)
   */
  strong: colors.neutral[800],

  /**
   * SUBTLE BORDER
   * Usage: Very light separations, nested containers, optional dividers
   * Color: Very light gray (#F4F5F5)
   * Accessibility: Extremely low contrast - purely decorative
   *
   * ✅ Good: <hr className="border-border-subtle">
   * ❌ Bad: Critical UI boundaries or interactive elements
   */
  subtle: colors.neutral[100],

  /**
   * FOCUS BORDER
   * Usage: Keyboard focus rings, active input states, accessibility outlines
   * Color: Fluor (#D4FF00 - fluorescent yellow-green)
   * Accessibility: AAA contrast on dark (13.92:1), highly visible
   *
   * ⚠️ CRITICAL: Required for keyboard navigation accessibility
   * ✅ Good: <input className="focus:border-border-focus focus:ring-2">
   * ❌ Bad: Removing or overriding focus borders
   */
  focus: colors.fluor[500],

  /**
   * DISABLED BORDER
   * Usage: Disabled inputs, inactive form fields
   * Color: Light gray (#EDEEEF)
   * Accessibility: Low contrast intentional for disabled state
   *
   * ✅ Good: <input disabled className="border-border-disabled">
   * ❌ Bad: Active, interactive elements
   */
  disabled: colors.neutral[200],
} as const;

/**
 * =============================================================================
 * INTERACTIVE COLORS
 * =============================================================================
 * Use for buttons, links, and interactive elements with state variations
 *
 * HIERARCHY:
 * 1. Primary (Neutral) - System buttons, standard actions
 * 2. Action (Fluor) - Call-to-Actions, brand-focused interactions
 * 3. Secondary (Azure) - Alternative actions
 * 4. Tertiary (Purplish) - Info actions, less prominent
 */
export const interactiveColors = {
  /**
   * PRIMARY INTERACTIVE (NEUTRAL) - SYSTEM BUTTONS
   * Usage: Standard buttons, common actions, system controls
   * Color: Neutral 900 (dark gray)
   * Accessibility: AAA contrast with white text (16.15:1)
   *
   * Use case: Close, Cancel, Back, Settings, etc.
   *
   * ✅ Good: <Button variant="primary" className="bg-interactive-primary-default text-white">
   * ✅ Good: System-level buttons that don't need brand emphasis
   * ❌ Bad: Main call-to-action buttons (use action instead)
   */
  primary: {
    /** Default: Neutral 900 - Professional, system-level */
    default: colors.neutral[900],
    /** Hover: Neutral 800 - Slightly lighter */
    hover: colors.neutral[800],
    /** Active: Neutral 950 - Darker for pressed state */
    active: colors.neutral[950],
    /** Focus: Fluor 500 - Brand focus ring for accessibility */
    focus: colors.fluor[500],
  },

  /**
   * ACTION INTERACTIVE (FLUOR) - CALL-TO-ACTIONS
   * Usage: Primary CTAs, brand-focused actions, conversion-critical buttons
   * Color: Fluor (#D4FF00 - fluorescent yellow-green)
   * Accessibility: AAA contrast with neutral-900 text (13.92:1)
   *
   * Use case: Submit, Sign Up, Buy Now, Get Started, etc.
   *
   * ⚠️ CRITICAL: Always use dark text (neutral-900) for readability
   * ✅ Good: <Button variant="action" className="bg-interactive-action-default text-neutral-900">
   * ✅ Good: Main conversion buttons, primary CTAs
   * ❌ Bad: Using with white or light text (poor contrast 2.47:1)
   * ❌ Bad: Overusing on every button (diminishes impact)
   */
  action: {
    /** Default: Fluor 500 - Brand CTA color */
    default: colors.fluor[500],
    /** Hover: Fluor 600 - Darker for feedback */
    hover: colors.fluor[600],
    /** Active: Fluor 700 - Darkest for pressed state */
    active: colors.fluor[700],
    /** Focus: Fluor 500 - Same as default for consistency */
    focus: colors.fluor[500],
  },

  /**
   * SECONDARY INTERACTIVE (AZURE) - ALTERNATIVE ACTIONS
   * Usage: Secondary buttons, alternative paths, informational actions
   * Color: Azure blue (#00AEFF)
   *
   * Use case: Learn More, Preview, View Details, etc.
   *
   * ⚠️ ACCESSIBILITY WARNING: Azure has contrast issues
   * - azure-500 on white: 2.47:1 (FAILS AA for UI elements)
   * - white text on azure-500: 2.47:1 (FAILS AA for text)
   *
   * RECOMMENDED: Use as outlined button or with darker shade (azure-700)
   * ✅ Good: <Button variant="outline" className="border-interactive-secondary-default">
   * ⚠️ Warning: Filled buttons need darker shade or outline style
   */
  secondary: {
    /** Default: Azure 500 - ⚠️ Low contrast on white (2.47:1) */
    default: colors.azure[500],
    /** Hover: Azure 600 - Slightly better but still low contrast */
    hover: colors.azure[600],
    /** Active: Azure 700 - Better contrast (recommended for filled buttons) */
    active: colors.azure[700],
    /** Focus: Azure 500 - Same as default */
    focus: colors.azure[500],
  },

  /**
   * TERTIARY INTERACTIVE (PURPLISH) - INFO ACTIONS
   * Usage: Tertiary buttons, informational actions, help/support CTAs
   * Color: Purplish (#6A00FF)
   * Accessibility: AAA contrast on white (6.87:1) ✅
   *
   * Use case: Help, Documentation, Info, Support, etc.
   *
   * ✅ EXCELLENT: Best accessibility of interactive colors
   * ✅ Good: <Button variant="tertiary" className="bg-interactive-tertiary-default text-white">
   * ✅ Good: Can use white text on purplish backgrounds
   * ✅ Good: High visibility and brand differentiation
   */
  tertiary: {
    /** Default: Purplish 500 - AAA contrast ✅ */
    default: colors.purplish[500],
    /** Hover: Purplish 600 */
    hover: colors.purplish[600],
    /** Active: Purplish 700 */
    active: colors.purplish[700],
    /** Focus: Purplish 500 - Same as default */
    focus: colors.purplish[500],
  },

  /**
   * GHOST INTERACTIVE (TRANSPARENT) - MINIMAL BUTTONS
   * Usage: Ghost buttons, text buttons, minimal actions
   * Color: Transparent with text color
   * Accessibility: Relies on text color contrast
   *
   * Use case: Cancel (subtle), Close (minimal), Skip, etc.
   *
   * ✅ Good: <Button variant="ghost" className="text-interactive-ghost-default">
   * ✅ Good: Minimal visual weight for less important actions
   */
  ghost: {
    /** Default: Transparent background with neutral-900 text */
    default: 'transparent',
    /** Hover: Very subtle background */
    hover: colors.neutral[100],
    /** Active: Slightly darker background */
    active: colors.neutral[200],
    /** Text color for ghost buttons */
    text: colors.neutral[900],
  },
} as const;

/**
 * =============================================================================
 * FEEDBACK COLORS
 * =============================================================================
 * Use for alerts, notifications, form validation, and status indicators
 *
 * ⚠️ CRITICAL: Never rely on color alone for feedback
 * ALWAYS include:
 * 1. Icon (visual indicator)
 * 2. Text (message/label)
 * 3. Accessible markup (ARIA attributes)
 */
export const feedbackColors = {
  /**
   * ERROR / DESTRUCTIVE FEEDBACK
   * Usage: Form errors, destructive actions, critical alerts
   * Color: Torch (hot pink) #FF0052
   *
   * Accessibility:
   * - torch-500 on white: 3.91:1 (AA for UI) ✅
   * - torch-800 on torch-50: 5.04:1 (AA for text) ✅
   *
   * ✅ Good: Always include error icon + message
   * ❌ Bad: Color-only error indication
   */
  error: {
    /** Background for error alerts/toasts */
    bg: colors.torch[50],
    /** Border/icon color for error states */
    border: colors.torch[500],
    /** Text color for error messages on light background */
    text: colors.torch[800],
    /** Icon color for error indicators */
    icon: colors.torch[600],
  },

  /**
   * WARNING FEEDBACK
   * Usage: Warnings, caution messages, important notices
   * Color: Cadmium (bright yellow) #FED600
   *
   * ⚠️ CRITICAL ACCESSIBILITY ISSUE:
   * - cadmium-600 on white: 1.42:1 (FAILS AA) ❌
   * - cadmium-800 on cadmium-50: 1.94:1 (FAILS AA) ❌
   *
   * IMMEDIATE FIX REQUIRED: Replace with cadmium-900
   * ✅ Good: <Alert icon={<AlertTriangle />} variant="warning">
   * ❌ Bad: Using cadmium-600 for UI elements
   */
  warning: {
    /** Background for warning alerts */
    bg: colors.cadmium[50],
    /** Border/icon - ⚠️ FAILS WCAG AA (1.42:1) - USE cadmium-900 */
    border: colors.cadmium[600], // TODO: Change to cadmium[900]
    /** Text - ⚠️ FAILS WCAG AA (1.94:1) - USE cadmium-900 */
    text: colors.cadmium[800], // TODO: Change to cadmium[900]
    /** Icon color */
    icon: colors.cadmium[700],
  },

  /**
   * SUCCESS FEEDBACK
   * Usage: Success messages, confirmations, completed actions
   * Color: Azure (bright blue) #00AEFF
   *
   * Accessibility:
   * - azure-500 on white: 2.47:1 (FAILS AA for UI) ⚠️
   * - azure-800 on azure-50: 4.04:1 (Just below AA for text) ⚠️
   *
   * RECOMMENDED: Use azure-700 or darker for better contrast
   * ✅ Good: <Alert icon={<CheckCircle />} variant="success">
   * ❌ Bad: Relying on blue alone without icon/text
   */
  success: {
    /** Background for success alerts */
    bg: colors.azure[50],
    /** Border/icon - Low contrast warning */
    border: colors.azure[500],
    /** Text - Marginally below AA (4.04:1 vs 4.5:1 required) */
    text: colors.azure[800],
    /** Icon color */
    icon: colors.azure[600],
  },

  /**
   * INFO FEEDBACK
   * Usage: Informational messages, tips, help text
   * Color: Purplish (deep purple) #6A00FF
   *
   * Accessibility:
   * - purplish-500 on white: 6.87:1 (AAA) ✅
   * - purplish-800 on purplish-50: 9.13:1 (AAA) ✅
   *
   * ✅ EXCELLENT: Best accessibility of all feedback colors
   * ✅ Good: <Alert icon={<Info />} variant="info">
   */
  info: {
    /** Background for info alerts - AAA ✅ */
    bg: colors.purplish[50],
    /** Border/icon - AAA contrast ✅ */
    border: colors.purplish[500],
    /** Text - AAA contrast ✅ */
    text: colors.purplish[800],
    /** Icon color */
    icon: colors.purplish[600],
  },
} as const;

/**
 * =============================================================================
 * SURFACE COLORS
 * =============================================================================
 * Use for elevated surfaces, cards, modals, and layered content
 */
export const surfaceColors = {
  /**
   * CARD SURFACE
   * Usage: Card backgrounds, elevated containers
   * Color: White (#FFFFFF)
   *
   * ✅ Good: <Card className="bg-surface-card">
   */
  card: colors.neutral[0],

  /**
   * MODAL SURFACE
   * Usage: Modal backgrounds, dialog backgrounds
   * Color: White (#FFFFFF)
   *
   * ✅ Good: <Dialog className="bg-surface-modal">
   */
  modal: colors.neutral[0],

  /**
   * DROPDOWN SURFACE
   * Usage: Dropdown menus, popovers, tooltips
   * Color: White (#FFFFFF)
   *
   * ✅ Good: <DropdownMenu className="bg-surface-dropdown">
   */
  dropdown: colors.neutral[0],

  /**
   * ELEVATED SURFACE
   * Usage: Floating elements, raised cards
   * Color: White (#FFFFFF)
   * Note: Use with shadow-lg or shadow-xl for elevation
   *
   * ✅ Good: <div className="bg-surface-elevated shadow-lg">
   */
  elevated: colors.neutral[0],
} as const;

/**
 * =============================================================================
 * OVERLAY COLORS
 * =============================================================================
 * Use for overlays, backdrops, and semi-transparent layers
 */
export const overlayColors = {
  /**
   * MODAL OVERLAY
   * Usage: Modal backdrops, dialog overlays
   * Color: Black with 50% opacity
   *
   * ✅ Good: <div className="bg-black/50"> or custom overlay class
   */
  modal: 'rgba(0, 0, 0, 0.5)',

  /**
   * LIGHT OVERLAY
   * Usage: Subtle overlays, hover effects
   * Color: Black with 10% opacity
   *
   * ✅ Good: <div className="bg-black/10">
   */
  light: 'rgba(0, 0, 0, 0.1)',

  /**
   * DARK OVERLAY
   * Usage: Strong overlays, disabled overlays
   * Color: Black with 70% opacity
   *
   * ✅ Good: <div className="bg-black/70">
   */
  dark: 'rgba(0, 0, 0, 0.7)',
} as const;

/**
 * =============================================================================
 * COMBINED SEMANTIC COLORS EXPORT
 * =============================================================================
 */
export const semanticColors = {
  bg: backgroundColors,
  text: textColors,
  border: borderColors,
  interactive: interactiveColors,
  feedback: feedbackColors,
  surface: surfaceColors,
  overlay: overlayColors,
} as const;

/**
 * =============================================================================
 * TYPE EXPORTS
 * =============================================================================
 */
export type BackgroundColors = typeof backgroundColors;
export type TextColors = typeof textColors;
export type BorderColors = typeof borderColors;
export type InteractiveColors = typeof interactiveColors;
export type FeedbackColors = typeof feedbackColors;
export type SurfaceColors = typeof surfaceColors;
export type OverlayColors = typeof overlayColors;
export type SemanticColors = typeof semanticColors;

/**
 * =============================================================================
 * ACCESSIBILITY REFERENCE
 * =============================================================================
 *
 * WCAG 2.1 Contrast Requirements:
 * - Normal text (< 18pt): 4.5:1 minimum (AA), 7:1 enhanced (AAA)
 * - Large text (≥ 18pt or ≥ 14pt bold): 3:1 minimum (AA), 4.5:1 enhanced (AAA)
 * - UI components and graphics: 3:1 minimum (AA)
 *
 * Interactive Color Contrasts:
 * ✅ interactive.primary.default (neutral-900) on white: 16.15:1 (AAA)
 * ✅ white text on interactive.primary.default: 16.15:1 (AAA)
 * ✅ interactive.action.default (fluor-500) + neutral-900 text: 13.92:1 (AAA)
 * ⚠️ white text on interactive.action.default: 2.47:1 (FAIL - use neutral-900)
 * ❌ interactive.secondary.default (azure-500) on white: 2.47:1 (FAIL - use outline or azure-700)
 * ✅ interactive.tertiary.default (purplish-500) + white text: 6.87:1 (AAA)
 *
 * Text Color Contrasts:
 * ✅ text-primary on bg-primary: 16.15:1 (AAA)
 * ✅ text-secondary on bg-primary: 5.02:1 (AA)
 * ✅ text-primary on bg-accent (fluor): 13.92:1 (AAA)
 * ❌ text-tertiary on bg-primary: 2.71:1 (FAIL - large text only)
 *
 * Feedback Color Contrasts:
 * ✅ feedback.error.text on feedback.error.bg: 5.04:1 (AA)
 * ✅ feedback.info.text on feedback.info.bg: 9.13:1 (AAA)
 * ❌ feedback.warning.border on bg-primary: 1.42:1 (FAIL - needs fix)
 * ❌ feedback.warning.text on feedback.warning.bg: 1.94:1 (FAIL - needs fix)
 *
 * CRITICAL USAGE RULES:
 * 1. ⚠️ NEVER use white text on interactive.action (fluor) - ALWAYS use neutral-900
 * 2. ⚠️ interactive.secondary (azure) should be outline or use azure-700 for filled
 * 3. ✅ interactive.primary (neutral) is best for system buttons - AAA contrast
 * 4. ✅ interactive.action (fluor) is for CTAs only - use sparingly (1-2 per page)
 * 5. ✅ interactive.tertiary (purplish) has excellent contrast - safe for all uses
 *
 * REQUIRED FIXES:
 * 1. Replace feedback.warning.border with cadmium[900]
 * 2. Replace feedback.warning.text with cadmium[900]
 * 3. Never use text-tertiary for body text (large text only)
 * 4. Always include icons with feedback colors
 * 5. Use interactive.primary for standard buttons, interactive.action for CTAs only
 */
