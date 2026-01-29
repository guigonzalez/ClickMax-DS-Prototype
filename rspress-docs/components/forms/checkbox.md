# Checkbox

A checkbox input that allows users to select or deselect options with support for labels, descriptions, and indeterminate state.

## Overview

The Checkbox component provides a way for users to make binary choices or select multiple options from a list. Built on Radix UI, it supports checked, unchecked, and indeterminate states with full accessibility features.

## Features

- **3 sizes** - Small (16px), Medium (20px), Large (24px)
- **3 states** - Unchecked, Checked, Indeterminate
- **Label support** - Optional label text with proper association
- **Description text** - Helper text below the label
- **Disabled state** - Visual and functional disabled support
- **Keyboard navigation** - Full keyboard support
- **Accessibility** - ARIA attributes, screen reader support
- **TypeScript support** - Full type safety

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the checkbox |
| `checked` | `boolean \| 'indeterminate'` | - | Checked state of the checkbox |
| `label` | `string` | - | Label text displayed next to checkbox |
| `description` | `string` | - | Description text shown below the label |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | - | Checkbox ID for label association |

All [Radix Checkbox](https://www.radix-ui.com/primitives/docs/components/checkbox) props are also supported.

## Size Variants

| Size | Checkbox | Icon | Usage |
|------|----------|------|-------|
| `sm` | 16px × 16px | 12px | Compact forms, dense layouts |
| `md` | 20px × 20px | 14px | Default size, most use cases |
| `lg` | 24px × 24px | 16px | Prominent selections, touch interfaces |

## States

### Unchecked

The default state when the checkbox is not selected.

### Checked

When the user has selected the checkbox, indicated by a checkmark icon.

### Indeterminate

A mixed state used for "select all" scenarios where some but not all child items are selected.

### Disabled

When the checkbox cannot be interacted with, shown with reduced opacity.

## Usage

### Basic Example

```tsx
import { Checkbox } from '@clickmax/design-system';

function MyForm() {
  return (
    <Checkbox label="Accept terms and conditions" />
  );
}
```

### With Description

```tsx
<Checkbox
  label="Marketing emails"
  description="Receive emails about new products and features"
/>
```

### Controlled Checkbox

```tsx
import { useState } from 'react';

function MyForm() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      label="Subscribe to newsletter"
      checked={checked}
      onCheckedChange={setChecked}
    />
  );
}
```

### All Sizes

```tsx
<div className="flex flex-col gap-6">
  <Checkbox size="sm" label="Small checkbox" />
  <Checkbox size="md" label="Medium checkbox" />
  <Checkbox size="lg" label="Large checkbox" />
</div>
```

### All States

```tsx
<div className="flex flex-col gap-4">
  <Checkbox label="Unchecked checkbox" checked={false} />
  <Checkbox label="Checked checkbox" checked={true} />
  <Checkbox label="Indeterminate checkbox" checked="indeterminate" />
  <Checkbox label="Disabled checkbox" disabled />
  <Checkbox label="Disabled checked" checked={true} disabled />
</div>
```

### Without Label

```tsx
<Checkbox />
```

## Common Use Cases

### Form Agreement

```tsx
<Checkbox
  label="I agree to the Terms of Service and Privacy Policy"
  required
/>
```

### Checkbox Group

```tsx
<div className="space-y-4">
  <h3 className="text-base font-semibold text-text-primary">
    Select your interests
  </h3>
  <div className="space-y-3">
    <Checkbox
      label="Design"
      description="UI/UX design and prototyping"
    />
    <Checkbox
      label="Development"
      description="Frontend and backend development"
    />
    <Checkbox
      label="Marketing"
      description="Digital marketing and SEO"
    />
    <Checkbox
      label="Product"
      description="Product management and strategy"
    />
  </div>
</div>
```

### Select All Pattern

```tsx
import { useState, useEffect } from 'react';

function SelectAllExample() {
  const [items, setItems] = useState({
    item1: false,
    item2: false,
    item3: false,
  });

  const allChecked = Object.values(items).every(Boolean);
  const someChecked = Object.values(items).some(Boolean);
  const selectAllState = allChecked ? true : someChecked ? 'indeterminate' : false;

  const handleSelectAll = (checked: boolean) => {
    setItems({
      item1: checked,
      item2: checked,
      item3: checked,
    });
  };

  return (
    <div className="space-y-3">
      <Checkbox
        label="Select All"
        checked={selectAllState}
        onCheckedChange={handleSelectAll}
      />
      <div className="ml-6 space-y-2">
        <Checkbox
          label="Item 1"
          checked={items.item1}
          onCheckedChange={(checked) =>
            setItems({ ...items, item1: checked })
          }
        />
        <Checkbox
          label="Item 2"
          checked={items.item2}
          onCheckedChange={(checked) =>
            setItems({ ...items, item2: checked })
          }
        />
        <Checkbox
          label="Item 3"
          checked={items.item3}
          onCheckedChange={(checked) =>
            setItems({ ...items, item3: checked })
          }
        />
      </div>
    </div>
  );
}
```

### Settings Form

```tsx
<div className="space-y-4">
  <h3 className="text-base font-semibold text-text-primary">
    Notification Settings
  </h3>
  <div className="space-y-3">
    <Checkbox
      label="Email notifications"
      description="Receive email updates about your account"
      defaultChecked
    />
    <Checkbox
      label="Push notifications"
      description="Receive push notifications on your device"
      defaultChecked
    />
    <Checkbox
      label="SMS notifications"
      description="Receive text messages for important updates"
    />
  </div>
</div>
```

### Long Description

```tsx
<Checkbox
  label="Terms and conditions"
  description="By checking this box, you agree to our Terms of Service and Privacy Policy. You can change your preferences at any time in your account settings."
/>
```

## Examples

View the Checkbox component in [Storybook](http://localhost:6006/?path=/story/c-components-checkbox) for interactive examples.

## Accessibility

- **Keyboard navigation** - Space to toggle, Tab to navigate
- **Focus indicators** - Clear focus ring on keyboard focus
- **ARIA attributes** - Proper role, aria-checked, aria-disabled
- **Label association** - Clicking label toggles checkbox
- **Screen reader support** - Full screen reader compatibility
- **Disabled state** - Properly announced to assistive technologies
- **WCAG 2.1 AA compliant** - Meets accessibility standards

### Keyboard Shortcuts

- **Space** - Toggle checkbox
- **Tab** - Move to next focusable element
- **Shift + Tab** - Move to previous focusable element

## Best Practices

1. **Always provide labels** - Every checkbox should have a descriptive label
2. **Use for multiple selections** - Checkboxes allow multiple items to be selected
3. **Group related checkboxes** - Keep related options together
4. **Clear descriptions** - Use description text to provide context
5. **Indeterminate for parent items** - Use indeterminate state for "select all" scenarios
6. **Avoid single checkboxes** - For single yes/no choices, consider using a Switch
7. **Vertical alignment** - Stack checkboxes vertically for better scannability

## Design Notes

- **Checkbox sizes**: 16px (sm), 20px (md), 24px (lg)
- **Icon sizes**: 12px (sm), 14px (md), 16px (lg)
- **Border**: 2px solid
- **Border Radius**: 4px (rounded)
- **Spacing**: 8px gap between checkbox and label
- **Label typography**: Body 14 Medium
- **Description typography**: Body 14 Regular, secondary color
- **Focus ring**: 2px ring with 2px offset

## Related Components

- [Radio](/components/forms/radio) - For single selection from multiple options
- [Switch](/components/forms/switch) - For binary on/off states
- [Input](/components/forms/input) - For text input fields
