# Icon

A wrapper component for Lucide React icons that provides consistent sizing and semantic colors.

## Overview

The Icon component standardizes icon usage across your application by providing predefined size and color variants. Built on top of Lucide React, it gives you access to over 1,000 icons with consistent styling.

## Features

- **5 size variants** - XS (12px), SM (16px), MD (20px), LG (24px), XL (32px)
- **8 color variants** - Primary, Secondary, Tertiary, Inverse, Success, Warning, Error, Info
- **1000+ icons** - Full Lucide React icon library
- **Semantic colors** - Uses design system color tokens
- **TypeScript support** - Full type safety
- **Accessible** - Supports all SVG attributes

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `LucideIcon` | **required** | The Lucide icon component to render |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Icon size |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'inverse' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | Semantic color |
| `className` | `string` | - | Additional CSS classes |

## Size Variants

| Size | Dimensions | Usage |
|------|------------|-------|
| `xs` | 12px × 12px | Small badges, inline text icons |
| `sm` | 16px × 16px | Button icons, form field icons |
| `md` | 20px × 20px | Default size, general purpose |
| `lg` | 24px × 24px | Headers, prominent actions |
| `xl` | 32px × 32px | Large feature icons, empty states |

## Color Variants

### Text Colors

| Color | Usage | Token |
|-------|-------|-------|
| `primary` | Main text color | `text-text-primary` |
| `secondary` | Less prominent text | `text-text-secondary` |
| `tertiary` | Subtle, low emphasis | `text-text-tertiary` |
| `inverse` | Light text on dark backgrounds | `text-text-inverse` |

### Feedback Colors

| Color | Usage | Token |
|-------|-------|-------|
| `success` | Positive states, completed actions | `text-feedback-success` |
| `warning` | Caution, pending states | `text-feedback-warning` |
| `error` | Errors, destructive actions | `text-feedback-error` |
| `info` | Information, help | `text-feedback-info` |

## Usage

### Basic Example

```tsx
import { Icon } from '@clickmax/design-system';
import { Settings, Home, User } from 'lucide-react';

function MyComponent() {
  return (
    <>
      <Icon icon={Settings} />
      <Icon icon={Home} size="lg" />
      <Icon icon={User} color="secondary" />
    </>
  );
}
```

### All Sizes

```tsx
import { Settings } from 'lucide-react';

<div className="flex items-end gap-4">
  <Icon icon={Settings} size="xs" />
  <Icon icon={Settings} size="sm" />
  <Icon icon={Settings} size="md" />
  <Icon icon={Settings} size="lg" />
  <Icon icon={Settings} size="xl" />
</div>
```

### Text Colors

```tsx
import { User } from 'lucide-react';

<div className="space-y-4">
  <Icon icon={User} color="primary" />
  <Icon icon={User} color="secondary" />
  <Icon icon={User} color="tertiary" />
  <div className="bg-bg-inverse p-2 rounded">
    <Icon icon={User} color="inverse" />
  </div>
</div>
```

### Feedback Colors

```tsx
import { Check, AlertCircle, Info } from 'lucide-react';

<div className="space-y-4">
  <Icon icon={Check} color="success" />
  <Icon icon={AlertCircle} color="warning" />
  <Icon icon={AlertCircle} color="error" />
  <Icon icon={Info} color="info" />
</div>
```

### In Buttons

```tsx
import { Settings, Home, Bell } from 'lucide-react';

<div className="flex gap-4">
  <button className="inline-flex items-center gap-2 px-4 h-10 bg-interactive-primary-default text-white rounded-lg">
    <Icon icon={Settings} size="sm" />
    Settings
  </button>

  <button className="inline-flex items-center gap-2 px-4 h-10 bg-bg-secondary text-text-primary rounded-lg">
    <Icon icon={Home} size="sm" />
    Home
  </button>

  <button className="inline-flex items-center justify-center h-10 w-10 bg-bg-secondary text-text-primary rounded-lg">
    <Icon icon={Bell} size="sm" />
  </button>
</div>
```

### Common Icons

```tsx
import {
  Home,
  User,
  Settings,
  Bell,
  Search,
  Heart
} from 'lucide-react';

<div className="flex flex-wrap gap-6">
  <div className="flex flex-col items-center gap-2">
    <Icon icon={Home} size="lg" />
    <span className="text-xs text-text-secondary">Home</span>
  </div>

  <div className="flex flex-col items-center gap-2">
    <Icon icon={User} size="lg" />
    <span className="text-xs text-text-secondary">User</span>
  </div>

  <div className="flex flex-col items-center gap-2">
    <Icon icon={Settings} size="lg" />
    <span className="text-xs text-text-secondary">Settings</span>
  </div>

  <div className="flex flex-col items-center gap-2">
    <Icon icon={Bell} size="lg" />
    <span className="text-xs text-text-secondary">Bell</span>
  </div>

  <div className="flex flex-col items-center gap-2">
    <Icon icon={Search} size="lg" />
    <span className="text-xs text-text-secondary">Search</span>
  </div>

  <div className="flex flex-col items-center gap-2">
    <Icon icon={Heart} size="lg" />
    <span className="text-xs text-text-secondary">Heart</span>
  </div>
</div>
```

## Icon Library

The Icon component uses [Lucide React](https://lucide.dev), which provides over 1,000 open-source icons. Browse the full icon library at [lucide.dev/icons](https://lucide.dev/icons).

### Popular Icon Categories

- **Navigation**: Home, Menu, ChevronRight, ArrowLeft, ArrowRight
- **Actions**: Plus, X, Check, Edit, Trash2, Download, Upload
- **Communication**: Mail, MessageSquare, Phone, Send
- **User**: User, Users, UserPlus, Settings, Bell
- **Files**: File, Folder, FileText, Download, Upload
- **UI**: Search, Filter, MoreHorizontal, MoreVertical
- **Status**: Check, X, AlertCircle, Info, AlertTriangle
- **Media**: Play, Pause, Volume, Image, Video

## Examples

View the Icon component in [Storybook](http://localhost:6006/?path=/story/c-components-icon) for interactive examples.

## Accessibility

- Uses semantic SVG elements
- Inherits accessible attributes from Lucide icons
- Supports `aria-label` and `aria-hidden` attributes
- Can be used with screen readers
- WCAG 2.1 AA compliant with proper color usage

## Best Practices

1. **Consistent sizing** - Use size variants instead of custom dimensions
2. **Semantic colors** - Use color variants that match the context (success for positive actions)
3. **Icon choice** - Choose icons that are universally recognizable
4. **Pair with text** - Include text labels for important actions, not just icons
5. **Button icons** - Use `sm` size (16px) for icons inside buttons
6. **Badge icons** - Use `xs` size (12px) for icons inside badges

## Common Patterns

### Icon with Text

```tsx
<div className="flex items-center gap-2">
  <Icon icon={Mail} size="sm" color="secondary" />
  <span className="text-sm text-text-primary">email@example.com</span>
</div>
```

### Status Indicators

```tsx
<div className="flex items-center gap-2">
  <Icon icon={Check} size="sm" color="success" />
  <span className="text-sm text-text-primary">Completed</span>
</div>

<div className="flex items-center gap-2">
  <Icon icon={AlertCircle} size="sm" color="error" />
  <span className="text-sm text-text-primary">Error occurred</span>
</div>
```

### Loading State

```tsx
<Icon
  icon={RefreshCw}
  size="md"
  className="animate-spin"
/>
```

## Related Components

- [Badge](/components/foundation/badge) - For status indicators with icons
- [Button](/components/foundation/button) - For actionable elements with icons
- [Text](/components/typography/text) - For text alongside icons
