# Badge

Compact visual indicators used to label, categorize, or display status information prominently.

## Overview

The Badge component is a small, inline element that displays short pieces of information like status, category, count, or labels. Badges are ideal for drawing attention to important information without taking up much space.

## Features

- **9 variants** - Default, Primary, Action, Success, Warning, Error, Info, Outline, Secondary
- **Icon support** - Add icons before or after text
- **Compact design** - 24px height with balanced padding
- **Status display** - Perfect for order status, priorities, and tags
- **Typography tokens** - Uses Body 12 Medium for consistency
- **TypeScript support** - Full type safety

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'action' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'outline' \| 'secondary'` | `'default'` | Visual variant of the badge |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Badge content (text, icons, or both) |

## Variants

### Interactive Badges

| Variant | Usage | Colors |
|---------|-------|--------|
| Primary | System actions and primary indicators | Dark background (neutral-900), white text |
| Action | Call-to-action badges and highlights | Fluor background (fluor-500), dark text |

### Feedback Badges

| Variant | Usage | Colors |
|---------|-------|--------|
| Success | Completed, approved, or positive status | Green background, white text |
| Warning | Pending, in-progress, or caution status | Orange background, white text |
| Error | Failed, cancelled, or error status | Red background, white text |
| Info | Informational or neutral status | Blue background, white text |

### Neutral Badges

| Variant | Usage | Colors |
|---------|-------|--------|
| Default | General labels and tags | Light gray background with border |
| Outline | Lightweight tags and categories | Border only, transparent background |
| Secondary | Subdued labels and metadata | Secondary background color |

## Usage

### Basic Example

```tsx
import { Badge } from '@clickmax/design-system';

function MyComponent() {
  return (
    <>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="action">Action</Badge>
      <Badge variant="success">Success</Badge>
    </>
  );
}
```

### With Icons

```tsx
import { Badge } from '@clickmax/design-system';
import { Check, X, AlertTriangle, Clock } from 'lucide-react';

function StatusBadges() {
  return (
    <>
      <Badge variant="success" className="inline-flex items-center gap-1">
        <Check className="h-3 w-3" />
        Completed
      </Badge>

      <Badge variant="error" className="inline-flex items-center gap-1">
        <X className="h-3 w-3" />
        Cancelled
      </Badge>

      <Badge variant="warning" className="inline-flex items-center gap-1">
        <AlertTriangle className="h-3 w-3" />
        Pending
      </Badge>

      <Badge variant="default" className="inline-flex items-center gap-1">
        <Clock className="h-3 w-3" />
        In Progress
      </Badge>
    </>
  );
}
```

### Icon Only

```tsx
<Badge variant="success" className="inline-flex items-center">
  <Check className="h-3 w-3" />
</Badge>

<Badge variant="error" className="inline-flex items-center">
  <X className="h-3 w-3" />
</Badge>
```

### With Numbers

```tsx
<div className="flex items-center gap-2">
  <span className="text-sm">Notifications</span>
  <Badge variant="error">12</Badge>
</div>

<div className="flex items-center gap-2">
  <span className="text-sm">Cart</span>
  <Badge variant="default" className="inline-flex items-center gap-1">
    <ShoppingCart className="h-3 w-3" />
    3
  </Badge>
</div>

<div className="flex items-center gap-2">
  <span className="text-sm">Messages</span>
  <Badge variant="success">99+</Badge>
</div>
```

## Common Use Cases

### Order Status

```tsx
<Badge variant="warning" className="inline-flex items-center gap-1">
  <Clock className="h-3 w-3" />
  Processing
</Badge>

<Badge variant="default" className="inline-flex items-center gap-1">
  <Package className="h-3 w-3" />
  Packed
</Badge>

<Badge variant="default" className="inline-flex items-center gap-1">
  <Truck className="h-3 w-3" />
  In Transit
</Badge>

<Badge variant="success" className="inline-flex items-center gap-1">
  <Check className="h-3 w-3" />
  Delivered
</Badge>

<Badge variant="error" className="inline-flex items-center gap-1">
  <X className="h-3 w-3" />
  Cancelled
</Badge>
```

### Priority Levels

```tsx
<Badge variant="secondary">Low</Badge>
<Badge variant="default">Normal</Badge>
<Badge variant="warning" className="inline-flex items-center gap-1">
  <TrendingUp className="h-3 w-3" />
  High
</Badge>
<Badge variant="error" className="inline-flex items-center gap-1">
  <Zap className="h-3 w-3" />
  Urgent
</Badge>
```

### Tags and Categories

```tsx
<div className="flex flex-wrap gap-2">
  <Badge variant="outline">React</Badge>
  <Badge variant="outline">TypeScript</Badge>
  <Badge variant="outline">Tailwind</Badge>
  <Badge variant="outline">Storybook</Badge>
</div>
```

### Feature Badges

```tsx
<Badge variant="success" className="inline-flex items-center gap-1">
  <Star className="h-3 w-3" />
  Premium
</Badge>

<Badge variant="default" className="inline-flex items-center gap-1">
  <Zap className="h-3 w-3" />
  Fast
</Badge>

<Badge variant="secondary">Beta</Badge>
```

## Examples

View the Badge component in [Storybook](http://localhost:6006/?path=/story/c-components-badge) for interactive examples.

## Accessibility

- Uses semantic HTML span element
- Proper color contrast for all variants
- Supports all standard HTML span attributes
- WCAG 2.1 AA compliant
- Screen reader accessible

## Best Practices

1. **Choose the right variant** - Use success for positive states, error for negative, warning for caution
2. **Keep text short** - 1-3 words maximum for best readability
3. **Use icons sparingly** - Icons should enhance, not replace, text
4. **Consistent usage** - Use the same variant for the same status across your app
5. **Icon size** - Use `h-3 w-3` (12px) for icons inside badges
6. **Avoid overuse** - Too many badges can create visual clutter

## Design Notes

- **Height**: Fixed at 24px for consistency
- **Padding**: 10px horizontal, 2px vertical
- **Border Radius**: 6px (rounded-md)
- **Typography**: Body 12 Medium (12px, font-weight 500, line-height 1.5)
- **Icons**: 12px × 12px with 4px gap from text

## Related Components

- [Button](/components/foundation/button) - For actionable elements
- [Icon](/components/foundation/icon) - For icon usage
- [Text](/components/typography/text) - For text styles
