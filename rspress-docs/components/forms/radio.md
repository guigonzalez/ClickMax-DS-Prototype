# Radio

A radio button group that allows users to select a single option from a set of choices.

## Overview

The Radio component consists of a RadioGroup container and RadioGroupItem elements. It ensures only one option can be selected at a time, making it ideal for mutually exclusive choices. Built on Radix UI with full accessibility support.

## Features

- **3 sizes** - Small (16px), Medium (20px), Large (24px)
- **Label support** - Optional label text with proper association
- **Description text** - Helper text below the label
- **Disabled state** - Disable entire group or individual items
- **Orientation** - Vertical or horizontal layout
- **Keyboard navigation** - Arrow keys to navigate, Space to select
- **Accessibility** - ARIA attributes, screen reader support
- **TypeScript support** - Full type safety

## Components

### RadioGroup

The container component that manages the radio group state.

### RadioGroupItem

Individual radio button within the group.

## Props

### RadioGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultValue` | `string` | - | Default selected value |
| `value` | `string` | - | Controlled selected value |
| `onValueChange` | `(value: string) => void` | - | Callback when selection changes |
| `disabled` | `boolean` | `false` | Disable all radio items |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Layout orientation |
| `className` | `string` | - | Additional CSS classes |

### RadioGroupItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | **required** | Value of the radio item |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the radio button |
| `label` | `string` | - | Label text displayed next to radio |
| `description` | `string` | - | Description text shown below the label |
| `disabled` | `boolean` | `false` | Whether this item is disabled |
| `id` | `string` | - | Radio ID for label association |
| `className` | `string` | - | Additional CSS classes |

All [Radix Radio Group](https://www.radix-ui.com/primitives/docs/components/radio-group) props are also supported.

## Size Variants

| Size | Radio | Indicator | Usage |
|------|-------|-----------|-------|
| `sm` | 16px × 16px | 8px | Compact forms, dense layouts |
| `md` | 20px × 20px | 10px | Default size, most use cases |
| `lg` | 24px × 24px | 12px | Prominent selections, touch interfaces |

## Usage

### Basic Example

```tsx
import { RadioGroup, RadioGroupItem } from '@clickmax/design-system';

function MyForm() {
  return (
    <RadioGroup defaultValue="option-one">
      <RadioGroupItem value="option-one" label="Option One" id="option-one" />
      <RadioGroupItem value="option-two" label="Option Two" id="option-two" />
      <RadioGroupItem value="option-three" label="Option Three" id="option-three" />
    </RadioGroup>
  );
}
```

### With Description

```tsx
<RadioGroup defaultValue="comfortable">
  <RadioGroupItem
    value="default"
    label="Default"
    description="Default spacing for most use cases"
    id="default"
  />
  <RadioGroupItem
    value="comfortable"
    label="Comfortable"
    description="More spacing for a relaxed feel"
    id="comfortable"
  />
  <RadioGroupItem
    value="compact"
    label="Compact"
    description="Less spacing for dense layouts"
    id="compact"
  />
</RadioGroup>
```

### Controlled Radio Group

```tsx
import { useState } from 'react';

function MyForm() {
  const [value, setValue] = useState('option-one');

  return (
    <RadioGroup value={value} onValueChange={setValue}>
      <RadioGroupItem value="option-one" label="Option One" id="c-option-one" />
      <RadioGroupItem value="option-two" label="Option Two" id="c-option-two" />
      <RadioGroupItem value="option-three" label="Option Three" id="c-option-three" />
    </RadioGroup>
  );
}
```

### All Sizes

```tsx
<div className="space-y-8">
  <div>
    <p className="text-sm font-medium text-text-primary mb-3">Small Size</p>
    <RadioGroup defaultValue="sm-1">
      <RadioGroupItem value="sm-1" label="Option One" id="sm-1" size="sm" />
      <RadioGroupItem value="sm-2" label="Option Two" id="sm-2" size="sm" />
    </RadioGroup>
  </div>

  <div>
    <p className="text-sm font-medium text-text-primary mb-3">Medium Size (Default)</p>
    <RadioGroup defaultValue="md-1">
      <RadioGroupItem value="md-1" label="Option One" id="md-1" size="md" />
      <RadioGroupItem value="md-2" label="Option Two" id="md-2" size="md" />
    </RadioGroup>
  </div>

  <div>
    <p className="text-sm font-medium text-text-primary mb-3">Large Size</p>
    <RadioGroup defaultValue="lg-1">
      <RadioGroupItem value="lg-1" label="Option One" id="lg-1" size="lg" />
      <RadioGroupItem value="lg-2" label="Option Two" id="lg-2" size="lg" />
    </RadioGroup>
  </div>
</div>
```

### Disabled State

```tsx
<RadioGroup defaultValue="option-one" disabled>
  <RadioGroupItem value="option-one" label="Option One" id="d-option-one" />
  <RadioGroupItem value="option-two" label="Option Two" id="d-option-two" />
  <RadioGroupItem value="option-three" label="Option Three" id="d-option-three" />
</RadioGroup>
```

### Horizontal Layout

```tsx
<RadioGroup
  defaultValue="option-one"
  orientation="horizontal"
  className="flex gap-6"
>
  <RadioGroupItem value="option-one" label="Option One" id="h-option-one" />
  <RadioGroupItem value="option-two" label="Option Two" id="h-option-two" />
  <RadioGroupItem value="option-three" label="Option Three" id="h-option-three" />
</RadioGroup>
```

### Without Label

```tsx
<RadioGroup defaultValue="option-one">
  <RadioGroupItem value="option-one" id="nl-option-one" />
  <RadioGroupItem value="option-two" id="nl-option-two" />
  <RadioGroupItem value="option-three" id="nl-option-three" />
</RadioGroup>
```

## Common Use Cases

### Payment Method Selection

```tsx
<div className="w-full max-w-md">
  <h3 className="text-base font-semibold text-text-primary mb-4">
    Choose payment method
  </h3>
  <RadioGroup defaultValue="card">
    <RadioGroupItem
      value="card"
      label="Credit Card"
      description="Pay with Visa, Mastercard, or American Express"
      id="card"
    />
    <RadioGroupItem
      value="paypal"
      label="PayPal"
      description="Fast and secure payment with your PayPal account"
      id="paypal"
    />
    <RadioGroupItem
      value="bank"
      label="Bank Transfer"
      description="Direct transfer from your bank account"
      id="bank"
    />
    <RadioGroupItem
      value="crypto"
      label="Cryptocurrency"
      description="Pay with Bitcoin, Ethereum, or other cryptocurrencies"
      id="crypto"
    />
  </RadioGroup>
</div>
```

### Notification Frequency

```tsx
<div className="w-full max-w-md">
  <h3 className="text-base font-semibold text-text-primary mb-1">
    Notification Frequency
  </h3>
  <p className="text-sm text-text-secondary mb-4">
    How often do you want to receive notifications?
  </p>
  <RadioGroup defaultValue="daily">
    <RadioGroupItem
      value="realtime"
      label="Real-time"
      description="Get notified immediately"
      id="realtime"
    />
    <RadioGroupItem
      value="daily"
      label="Daily digest"
      description="Once per day summary"
      id="daily"
    />
    <RadioGroupItem
      value="weekly"
      label="Weekly digest"
      description="Once per week summary"
      id="weekly"
    />
    <RadioGroupItem
      value="never"
      label="Never"
      description="Disable all notifications"
      id="never"
    />
  </RadioGroup>
</div>
```

### Shipping Options

```tsx
<RadioGroup defaultValue="standard">
  <RadioGroupItem
    value="standard"
    label="Standard Shipping"
    description="5-7 business days • Free"
    id="standard"
  />
  <RadioGroupItem
    value="express"
    label="Express Shipping"
    description="2-3 business days • $10"
    id="express"
  />
  <RadioGroupItem
    value="overnight"
    label="Overnight Shipping"
    description="Next business day • $25"
    id="overnight"
  />
</RadioGroup>
```

### Size Selection

```tsx
<RadioGroup defaultValue="m" orientation="horizontal" className="flex gap-4">
  <RadioGroupItem value="xs" label="XS" id="size-xs" />
  <RadioGroupItem value="s" label="S" id="size-s" />
  <RadioGroupItem value="m" label="M" id="size-m" />
  <RadioGroupItem value="l" label="L" id="size-l" />
  <RadioGroupItem value="xl" label="XL" id="size-xl" />
</RadioGroup>
```

## Examples

View the Radio component in [Storybook](http://localhost:6006/?path=/story/c-components-radio) for interactive examples.

## Accessibility

- **Keyboard navigation** - Arrow keys to navigate, Space to select
- **Focus management** - Tab to enter group, arrows to navigate within
- **ARIA attributes** - Proper role, aria-checked, aria-disabled
- **Label association** - Clicking label selects radio
- **Screen reader support** - Full screen reader compatibility
- **Disabled state** - Properly announced to assistive technologies
- **WCAG 2.1 AA compliant** - Meets accessibility standards

### Keyboard Shortcuts

- **Arrow Up/Left** - Select previous item
- **Arrow Down/Right** - Select next item
- **Tab** - Move to next focusable element
- **Shift + Tab** - Move to previous focusable element
- **Space** - Select focused item

## Best Practices

1. **Use for single selection** - Radio buttons are for choosing one option from many
2. **Provide clear labels** - Each option should have a descriptive label
3. **Use descriptions** - Add helper text to clarify options
4. **Group related options** - Keep mutually exclusive choices together
5. **Default selection** - Consider providing a sensible default value
6. **Vertical layout** - Prefer vertical stacking for better scannability
7. **Limit options** - Keep the number of options manageable (5-7 max)
8. **Unique IDs** - Always provide unique IDs for proper label association

## When to Use

### Use Radio Buttons When:
- Users must select exactly one option from 2-7 choices
- All available options should be visible
- Comparing options is important
- The choice is required before proceeding

### Don't Use Radio Buttons When:
- Multiple selections are allowed (use Checkboxes instead)
- There are too many options (use Select/Dropdown instead)
- The selection is optional on/off (use Switch instead)
- Users can create custom values (use Input instead)

## Design Notes

- **Radio sizes**: 16px (sm), 20px (md), 24px (lg)
- **Indicator sizes**: 8px (sm), 10px (md), 12px (lg)
- **Border**: 2px solid
- **Border Radius**: 50% (fully rounded)
- **Spacing**: 8px gap between radio and label, 12px between items
- **Label typography**: Body 14 Medium
- **Description typography**: Body 14 Regular, secondary color
- **Focus ring**: 2px ring with 2px offset

## Related Components

- [Checkbox](/components/forms/checkbox) - For multiple selections
- [Switch](/components/forms/switch) - For binary on/off states
- [Input](/components/forms/input) - For text input fields
