# Colors Changelog

**Date:** January 28, 2026

## Summary

The primitive color system has been completely redesigned with new ClickMax palettes, moving from generic colors to a brand-specific, purpose-driven color system.

---

## Changes to Primitive Colors

### Removed

All previous palettes have been replaced:
- ❌ `yellow` (old yellow palette)
- ❌ `gray` (old gray palette)
- ❌ `red` (error feedback)
- ❌ `orange` (warning feedback)
- ❌ `green` (success feedback)
- ❌ `blue` (info feedback)

### Added

New palettes with complete scales:

#### 1. Neutral (13 shades)

Grayscale for backgrounds, borders, and neutral text.

| Token | Value | Usage |
|-------|-------|-------|
| `neutral-0` | `#FFFFFF` | Pure white |
| `neutral-50` | `#FAFAFA` | Very light gray |
| `neutral-100` | `#F4F5F5` | Light gray background |
| `neutral-200` | `#EDEEEF` | Disabled background |
| `neutral-300` | `#DEE0E2` | Subtle borders |
| `neutral-400` | `#B9BDC1` | Medium borders |
| `neutral-500` | `#989EA4` | Tertiary text |
| `neutral-600` | `#697077` | Secondary text |
| `neutral-700` | `#565C61` | Icons, muted text |
| `neutral-800` | `#3A3D41` | Dark text |
| `neutral-900` | `#1F2123` | Primary text ⭐ |
| `neutral-950` | `#131416` | Very dark |
| `neutral-1000` | `#000000` | Pure black |

#### 2. Fluor (10 shades) - Brand Primary

Fluorescent yellow-green for primary actions and branding.

| Token | Value | Usage |
|-------|-------|-------|
| `fluor-50` | `#FAFFE7` | Very light tint |
| `fluor-100` | `#F2FEC2` | Light tint |
| `fluor-200` | `#E7FD97` | Soft highlight |
| `fluor-300` | `#D7F433` | Bright accent |
| `fluor-400` | `#DDFC68` | Light accent |
| `fluor-500` | `#D4FF00` | **Brand Primary** ⭐ |
| `fluor-600` | `#C8EB00` | Darker brand |
| `fluor-700` | `#B9D400` | Active state |
| `fluor-800` | `#AABC00` | Deep accent |
| `fluor-900` | `#929300` | Very dark |

#### 3. Azure (10 shades)

Vibrant blue for success feedback and secondary actions.

| Token | Value | Usage |
|-------|-------|-------|
| `azure-50` | `#E1F6FF` | Very light blue |
| `azure-100` | `#B4E9FF` | Light blue |
| `azure-200` | `#86DCFF` | Soft blue |
| `azure-300` | `#58CFFF` | Medium blue |
| `azure-400` | `#2BC1FF` | Bright blue |
| `azure-500` | `#00AEFF` | **Primary Azure** ⭐ |
| `azure-600` | `#009FE5` | Darker azure |
| `azure-700` | `#008AC7` | Active blue |
| `azure-800` | `#0075A9` | Deep blue |
| `azure-900` | `#065BA5` | Very dark blue |

#### 4. Purplish (10 shades)

Purple for info feedback and tertiary actions.

| Token | Value | Usage |
|-------|-------|-------|
| `purplish-50` | `#F1E6FF` | Very light purple |
| `purplish-100` | `#E0CCFF` | Light purple |
| `purplish-200` | `#CFB3FF` | Soft purple |
| `purplish-300` | `#BE99FF` | Medium purple |
| `purplish-400` | `#AD80FF` | Bright purple |
| `purplish-500` | `#6A00FF` | **Primary Purple** ⭐ |
| `purplish-600` | `#5F00E5` | Darker purple |
| `purplish-700` | `#5400C7` | Active purple |
| `purplish-800` | `#4900A9` | Deep purple |
| `purplish-900` | `#0A0AB8` | Very dark purple |

#### 5. Cadmium (10 shades)

Golden yellow for warnings and alerts.

| Token | Value | Usage |
|-------|-------|-------|
| `cadmium-50` | `#FFFDE5` | Very light yellow |
| `cadmium-100` | `#FFF9B3` | Light yellow |
| `cadmium-200` | `#FFF580` | Soft yellow |
| `cadmium-300` | `#FFF14D` | Medium yellow |
| `cadmium-400` | `#FFED1A` | Bright yellow |
| `cadmium-500` | `#FFEA00` | **Primary Yellow** ⭐ |
| `cadmium-600` | `#FFD700` | Golden |
| `cadmium-700` | `#FFA500` | Orange warning |
| `cadmium-800` | `#FD8C00` | Deep orange |
| `cadmium-900` | `#FD7700` | Dark orange |

#### 6. Torch (10 shades)

Red-pink for errors and destructive actions.

| Token | Value | Usage |
|-------|-------|-------|
| `torch-50` | `#FFE4EA` | Very light pink |
| `torch-100` | `#FFC2CF` | Light pink |
| `torch-200` | `#FFA1B4` | Soft pink |
| `torch-300` | `#FF8099` | Medium pink |
| `torch-400` | `#FF5E7E` | Bright pink |
| `torch-500` | `#FF0052` | **Primary Red** ⭐ |
| `torch-600` | `#E5004A` | Darker red |
| `torch-700` | `#C70041` | Active red |
| `torch-800` | `#A90038` | Deep red |
| `torch-900` | `#A30049` | Very dark red |

---

## Changes to Semantic Colors

### Background Tokens

| Token | Previous | New | Color |
|-------|----------|-----|-------|
| `bg-primary` | Generic white | `neutral-0` | `#FFFFFF` |
| `bg-secondary` | Generic gray | `neutral-100` | `#F4F5F5` |
| `bg-tertiary` | - | `neutral-50` | `#FAFAFA` |
| `bg-inverse` | - | `neutral-900` | `#1F2123` |
| `bg-accent` | `yellow-400` | `fluor-500` ⭐ | `#D4FF00` |
| `bg-disabled` | Generic gray | `neutral-200` | `#EDEEEF` |

### Text Tokens

| Token | Previous | New | Color |
|-------|----------|-----|-------|
| `text-primary` | Generic black | `neutral-900` | `#1F2123` |
| `text-secondary` | Generic gray | `neutral-600` | `#697077` |
| `text-tertiary` | Generic gray | `neutral-500` | `#989EA4` |
| `text-disabled` | Generic gray | `neutral-400` | `#B9BDC1` |
| `text-inverse` | Generic white | `neutral-0` | `#FFFFFF` |
| `text-accent` | `yellow-700` | `fluor-700` | `#B9D400` |

### Interactive Tokens

#### Primary (Neutral-based)
| Token | New Value | Color |
|-------|-----------|-------|
| `interactive-primary` | `neutral-900` | `#1F2123` |
| `interactive-primary-hover` | `neutral-800` | `#3A3D41` |
| `interactive-primary-active` | `neutral-950` | `#131416` |

#### Action (Fluor-based) ⭐
| Token | New Value | Color |
|-------|-----------|-------|
| `interactive-action` | `fluor-500` | `#D4FF00` |
| `interactive-action-hover` | `fluor-600` | `#C8EB00` |
| `interactive-action-active` | `fluor-700` | `#B9D400` |

### Feedback Tokens

| Category | Token | Previous | New | Color |
|----------|-------|----------|-----|-------|
| Success | `feedback-success` | `green-500` | `azure-500` | `#00AEFF` |
| Warning | `feedback-warning` | `orange-500` | `cadmium-700` | `#FFA500` |
| Error | `feedback-error` | `red-500` | `torch-500` | `#FF0052` |
| Info | `feedback-info` | `blue-500` | `purplish-500` | `#6A00FF` |

---

## Migration Impact

### Breaking Changes
- ❌ All old primitive color names removed
- ❌ Semantic tokens point to new primitives

### No Breaking Changes
- ✅ Semantic token **names** remain the same
- ✅ Components using semantic tokens work without changes
- ✅ Only visual appearance changes (colors)

### Migration Required For

If your code uses primitive colors directly (not recommended):

```tsx
// ❌ Old - Will break
color: colors.yellow[400]
background: colors.gray[100]

// ✅ New - Use these instead
color: colors.fluor[500]
background: colors.neutral[100]

// ✅ Best - Always use semantic tokens
color: colors.interactive.action
background: colors.background.secondary
```

---

## Rationale

### Why Change?

1. **Brand Identity** - Old colors were generic, new colors reflect ClickMax brand
2. **Hierarchy** - Clear distinction between primary (neutral) and action (fluor) states
3. **Accessibility** - New colors tested for WCAG compliance
4. **Consistency** - Complete 10-shade scales for all colors
5. **Purpose** - Each color family has a clear purpose

### Design Decisions

- **Fluor as Action Color**: Distinctive, eye-catching for CTAs
- **Neutral for Primary**: Professional, versatile for system actions
- **Azure for Success**: Positive, calming (instead of green)
- **Cadmium for Warning**: Attention-grabbing golden yellow
- **Torch for Error**: Bold, unmistakable red-pink
- **Purplish for Info**: Friendly, informative purple

---

## Testing & Validation

### Accessibility Testing
- ✅ WCAG AA compliance verified for text/background combinations
- ✅ Color contrast ratios meet minimum requirements
- ⚠️ Some combinations require careful usage (see [Accessibility Report](/project/accessibility))

### Visual Regression
- ✅ All components tested with new colors
- ✅ Storybook stories updated
- ✅ Interactive examples verified

### Build Verification
- ✅ CSS generated correctly
- ✅ Tailwind config updated
- ✅ No console errors

---

## Related Documentation

- [Colors Tokens](/tokens/colors) - Current color system documentation
- [Accessibility Report](/project/accessibility) - WCAG compliance details
- [Components](/components/foundation/button) - Updated component examples
