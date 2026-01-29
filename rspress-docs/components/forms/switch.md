# Switch

A toggle switch that allows users to turn options on or off with an immediate action.

## Overview

The Switch component provides a binary control for enabling or disabling features, settings, or options. It provides immediate visual feedback and is ideal for settings that take effect instantly. Built on Radix UI with full accessibility support.

## Features

- **3 sizes** - Small (18px × 32px), Medium (24px × 40px), Large (28px × 48px)
- **Label support** - Optional label text with proper association
- **Description text** - Helper text below the label
- **Disabled state** - Visual and functional disabled support
- **Smooth animation** - Animated thumb transition
- **Keyboard navigation** - Space to toggle
- **Accessibility** - ARIA attributes, screen reader support
- **TypeScript support** - Full type safety

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the switch |
| `checked` | `boolean` | - | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Default checked state (uncontrolled) |
| `onCheckedChange` | `(checked: boolean) => void` | - | Callback when state changes |
| `label` | `string` | - | Label text displayed next to switch |
| `description` | `string` | - | Description text shown below the label |
| `disabled` | `boolean` | `false` | Whether the switch is disabled |
| `id` | `string` | - | Switch ID for label association |
| `className` | `string` | - | Additional CSS classes |

All [Radix Switch](https://www.radix-ui.com/primitives/docs/components/switch) props are also supported.

## Size Variants

| Size | Track | Thumb | Usage |
|------|-------|-------|-------|
| `sm` | 32px × 18px | 14px | Compact interfaces, dense layouts |
| `md` | 40px × 24px | 20px | Default size, most use cases |
| `lg` | 48px × 28px | 24px | Prominent controls, touch interfaces |

## Usage

### Basic Example

```tsx
import { Switch } from '@clickmax/design-system';

function MySettings() {
  return (
    <Switch label="Enable notifications" />
  );
}
```

### With Description

```tsx
<Switch
  label="Marketing emails"
  description="Receive emails about new products and features"
/>
```

### Controlled Switch

```tsx
import { useState } from 'react';

function MySettings() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      label="Dark mode"
      checked={enabled}
      onCheckedChange={setEnabled}
    />
  );
}
```

### All Sizes

```tsx
<div className="flex flex-col gap-6">
  <Switch size="sm" label="Small switch" />
  <Switch size="md" label="Medium switch" />
  <Switch size="lg" label="Large switch" />
</div>
```

### All States

```tsx
<div className="flex flex-col gap-4">
  <Switch label="Unchecked switch" checked={false} />
  <Switch label="Checked switch" defaultChecked />
  <Switch label="Disabled switch" disabled />
  <Switch label="Disabled checked" defaultChecked disabled />
</div>
```

### Without Label

```tsx
<Switch />
```

## Common Use Cases

### Notification Settings

```tsx
<div className="w-full max-w-md space-y-4">
  <h3 className="text-base font-semibold text-text-primary mb-4">
    Notification Preferences
  </h3>
  <div className="space-y-4">
    <Switch
      label="Push notifications"
      description="Receive push notifications on your device"
      defaultChecked
      id="push"
    />
    <Switch
      label="Email notifications"
      description="Receive email updates about your account"
      defaultChecked
      id="email"
    />
    <Switch
      label="SMS notifications"
      description="Receive text messages for important updates"
      id="sms"
    />
    <Switch
      label="Weekly digest"
      description="Get a weekly summary of your activity"
      id="digest"
    />
  </div>
</div>
```

### Privacy Settings

```tsx
<div className="w-full max-w-md space-y-6">
  <div>
    <h3 className="text-base font-semibold text-text-primary mb-1">
      Privacy & Security
    </h3>
    <p className="text-sm text-text-secondary mb-4">
      Manage your privacy and security settings
    </p>
    <div className="space-y-4">
      <Switch
        label="Profile visibility"
        description="Make your profile visible to other users"
        defaultChecked
        id="profile"
      />
      <Switch
        label="Activity status"
        description="Show when you're active on the platform"
        defaultChecked
        id="activity"
      />
      <Switch
        label="Two-factor authentication"
        description="Add an extra layer of security to your account"
        id="2fa"
      />
      <Switch
        label="Data collection"
        description="Allow us to collect anonymous usage data"
        disabled
        id="data"
      />
    </div>
  </div>
</div>
```

### Feature Toggles

```tsx
<div className="w-full max-w-md">
  <h3 className="text-base font-semibold text-text-primary mb-4">
    Feature Flags
  </h3>
  <div className="space-y-3">
    <div className="flex items-center justify-between p-3 bg-bg-tertiary rounded-lg">
      <div className="flex-1 mr-4">
        <p className="text-sm font-medium text-text-primary">Dark mode</p>
        <p className="text-xs text-text-secondary">Enable dark theme</p>
      </div>
      <Switch size="sm" id="dark" />
    </div>

    <div className="flex items-center justify-between p-3 bg-bg-tertiary rounded-lg">
      <div className="flex-1 mr-4">
        <p className="text-sm font-medium text-text-primary">Compact view</p>
        <p className="text-xs text-text-secondary">Show more content</p>
      </div>
      <Switch size="sm" defaultChecked id="compact" />
    </div>

    <div className="flex items-center justify-between p-3 bg-bg-tertiary rounded-lg">
      <div className="flex-1 mr-4">
        <p className="text-sm font-medium text-text-primary">Beta features</p>
        <p className="text-xs text-text-secondary">Try new features</p>
      </div>
      <Switch size="sm" id="beta" />
    </div>
  </div>
</div>
```

### Simple Settings List

```tsx
<div className="space-y-4">
  <Switch label="Auto-save" defaultChecked />
  <Switch label="Show desktop notifications" />
  <Switch label="Play sound effects" defaultChecked />
  <Switch label="Enable animations" defaultChecked />
</div>
```

### With External Label

```tsx
<div className="flex items-center justify-between">
  <label htmlFor="airplane-mode" className="text-sm font-medium text-text-primary">
    Airplane Mode
  </label>
  <Switch id="airplane-mode" />
</div>
```

## Examples

View the Switch component in [Storybook](http://localhost:6006/?path=/story/c-components-switch) for interactive examples.

## Accessibility

- **Keyboard navigation** - Space to toggle, Tab to navigate
- **Focus indicators** - Clear focus ring on keyboard focus
- **ARIA attributes** - Proper role, aria-checked, aria-disabled
- **Label association** - Clicking label toggles switch
- **Screen reader support** - Full screen reader compatibility
- **Disabled state** - Properly announced to assistive technologies
- **WCAG 2.1 AA compliant** - Meets accessibility standards

### Keyboard Shortcuts

- **Space** - Toggle switch
- **Tab** - Move to next focusable element
- **Shift + Tab** - Move to previous focusable element

## Best Practices

1. **Use for immediate changes** - Switches take effect immediately without requiring save
2. **Provide clear labels** - Every switch should have a descriptive label
3. **Use descriptions** - Add helper text to clarify what the switch controls
4. **Avoid for forms** - Don't use switches in forms that require submission
5. **Default state matters** - Consider what the default state should be
6. **Visual feedback** - The animated transition provides immediate feedback
7. **Group related switches** - Keep related settings together

## When to Use

### Use Switch When:
- The setting takes effect immediately
- Toggling between two states (on/off, enabled/disabled)
- In settings or preferences screens
- The action is reversible
- You need a compact control

### Don't Use Switch When:
- The change requires saving (use Checkbox instead)
- The change is destructive or irreversible (use confirmation dialog)
- Selecting from multiple options (use Radio or Select instead)
- The setting is part of a larger form (use Checkbox instead)

## Switch vs Checkbox

| Aspect | Switch | Checkbox |
|--------|--------|----------|
| **Action** | Immediate effect | Requires form submission |
| **Usage** | Settings, preferences | Forms, multi-select |
| **Metaphor** | Physical switch | Checklist item |
| **State** | On/Off, Active/Inactive | Selected/Unselected |

## Design Notes

- **Track width**: 32px (sm), 40px (md), 48px (lg)
- **Track height**: 18px (sm), 24px (md), 28px (lg)
- **Thumb size**: 14px (sm), 20px (md), 24px (lg)
- **Border Radius**: Fully rounded (rounded-full)
- **Animation**: 150ms transition duration
- **Spacing**: 8px gap between switch and label
- **Label typography**: Body 14 Medium
- **Description typography**: Body 14 Regular, secondary color
- **Focus ring**: 2px ring with 2px offset
- **Colors**:
  - Unchecked: Secondary background
  - Checked: Primary interactive color
  - Thumb: Primary background with shadow

## Related Components

- [Checkbox](/components/forms/checkbox) - For form selections that require submission
- [Radio](/components/forms/radio) - For single selection from multiple options
- [Input](/components/forms/input) - For text input fields
