# Input

A text input field component that allows users to enter data with label, description, and error message support.

## Overview

The Input component is a fundamental form element that enables users to input text and other data types. It includes built-in support for labels, helper text, error messages, and various input types with full accessibility features.

## Features

- **Multiple input types** - Text, email, password, number, tel, url, and more
- **Label support** - Optional label with proper association
- **Helper text** - Description text to guide users
- **Error states** - Built-in error message display
- **Icon support** - Add prefix or suffix icons (with wrapper)
- **Accessibility** - Auto-generated IDs, aria-describedby, aria-invalid
- **TypeScript support** - Full type safety
- **Disabled state** - Visual and functional disabled support

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text displayed above the input |
| `description` | `string` | - | Helper text displayed below the label |
| `error` | `string` | - | Error message (replaces description when present) |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url' \| ...` | `'text'` | HTML input type |
| `placeholder` | `string` | - | Placeholder text |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | auto-generated | Input ID (auto-generated if not provided) |

All standard HTML input attributes are also supported.

## Usage

### Basic Example

```tsx
import { Input } from '@clickmax/design-system';

function MyForm() {
  return (
    <Input
      label="Name"
      placeholder="Enter your name"
    />
  );
}
```

### With Description

```tsx
<Input
  label="Email"
  type="email"
  placeholder="your@email.com"
  description="We'll never share your email with anyone."
/>
```

### With Error

```tsx
<Input
  label="Password"
  type="password"
  error="Password must be at least 8 characters"
/>
```

### Disabled State

```tsx
<Input
  label="Disabled Input"
  placeholder="Can't edit this"
  disabled
/>
```

## Input Types

### Email

```tsx
<Input
  label="Email Address"
  type="email"
  placeholder="your@email.com"
/>
```

### Password

```tsx
<Input
  label="Password"
  type="password"
  placeholder="Enter your password"
/>
```

### Number

```tsx
<Input
  label="Age"
  type="number"
  placeholder="Enter your age"
  min={0}
  max={120}
/>
```

### Telephone

```tsx
<Input
  label="Phone Number"
  type="tel"
  placeholder="(00) 00000-0000"
/>
```

### URL

```tsx
<Input
  label="Website"
  type="url"
  placeholder="https://example.com"
/>
```

## With Icons

Icons require an external wrapper div with relative positioning:

### Prefix Icons

```tsx
import { Mail, Lock, Search, User } from 'lucide-react';

<div>
  <label className="text-sm font-medium text-text-primary mb-1 block">
    Email
  </label>
  <div className="relative">
    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
    <Input
      type="email"
      placeholder="your@email.com"
      className="pl-10"
    />
  </div>
</div>

<div>
  <label className="text-sm font-medium text-text-primary mb-1 block">
    Password
  </label>
  <div className="relative">
    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
    <Input
      type="password"
      placeholder="••••••••"
      className="pl-10"
    />
  </div>
</div>

<div>
  <label className="text-sm font-medium text-text-primary mb-1 block">
    Search
  </label>
  <div className="relative">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
    <Input
      placeholder="Search..."
      className="pl-10"
    />
  </div>
</div>
```

### Suffix Icons

```tsx
import { CheckCircle2, AlertCircle } from 'lucide-react';

<div>
  <label className="text-sm font-medium text-text-primary mb-1 block">
    Valid Email
  </label>
  <div className="relative">
    <Input
      type="email"
      placeholder="your@email.com"
      defaultValue="user@example.com"
      className="pr-10"
    />
    <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-feedback-success" />
  </div>
</div>

<div>
  <label className="text-sm font-medium text-text-primary mb-1 block">
    Invalid Email
  </label>
  <div className="relative">
    <Input
      type="email"
      placeholder="your@email.com"
      defaultValue="invalid-email"
      className="pr-10 border-feedback-error"
    />
    <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-feedback-error" />
  </div>
  <p className="text-sm text-feedback-error mt-1">
    Invalid email. Please check the format.
  </p>
</div>
```

## Form Examples

### Login Form

```tsx
import { Mail, Lock } from 'lucide-react';

<form className="max-w-md space-y-6">
  <h3 className="text-lg font-semibold text-text-primary">Login</h3>

  <div>
    <label className="text-sm font-medium text-text-primary mb-1 block">
      Email
    </label>
    <div className="relative">
      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
      <Input
        type="email"
        placeholder="your@email.com"
        className="pl-10"
      />
    </div>
    <p className="text-sm text-text-secondary mt-1">
      We'll never share your email.
    </p>
  </div>

  <div>
    <label className="text-sm font-medium text-text-primary mb-1 block">
      Password
    </label>
    <div className="relative">
      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
      <Input
        type="password"
        placeholder="••••••••"
        className="pl-10"
      />
    </div>
  </div>
</form>
```

### Contact Form

```tsx
import { User, Phone, Calendar } from 'lucide-react';

<form className="max-w-md space-y-6">
  <h3 className="text-lg font-semibold text-text-primary">
    Contact Information
  </h3>

  <div>
    <label className="text-sm font-medium text-text-primary mb-1 block">
      Full Name
    </label>
    <div className="relative">
      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
      <Input
        placeholder="Your full name"
        className="pl-10"
      />
    </div>
  </div>

  <div>
    <label className="text-sm font-medium text-text-primary mb-1 block">
      Phone
    </label>
    <div className="relative">
      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
      <Input
        type="tel"
        placeholder="(00) 00000-0000"
        className="pl-10"
      />
    </div>
  </div>

  <div>
    <label className="text-sm font-medium text-text-primary mb-1 block">
      Date of Birth
    </label>
    <div className="relative">
      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
      <Input
        type="date"
        className="pl-10"
      />
    </div>
  </div>
</form>
```

## Examples

View the Input component in [Storybook](http://localhost:6006/?path=/story/c-components-input) for interactive examples.

## Accessibility

- **Auto-generated IDs** - Unique IDs for proper label association
- **aria-describedby** - Links description and error messages to input
- **aria-invalid** - Indicates error state to assistive technologies
- **Label association** - Proper `htmlFor` and `id` linking
- **Focus management** - Visible focus ring with proper contrast
- **Screen reader support** - Descriptive error messages
- **WCAG 2.1 AA compliant** - Meets accessibility standards

## Best Practices

1. **Always use labels** - Every input should have a visible label
2. **Provide helpful descriptions** - Guide users with helper text when needed
3. **Clear error messages** - Explain what's wrong and how to fix it
4. **Appropriate input types** - Use type="email" for emails, type="tel" for phones, etc.
5. **Placeholder as hint** - Don't rely on placeholder alone, use labels
6. **Icon sizing** - Use `h-5 w-5` (20px) for input icons
7. **Icon positioning** - Left icons need `pl-10`, right icons need `pr-10`
8. **Validation timing** - Show errors after user interaction, not before

## Design Notes

- **Height**: Fixed at 40px (h-10)
- **Padding**: 12px horizontal, 8px vertical
- **Border Radius**: 8px (rounded-lg)
- **Typography**: Body 14 Regular (14px, font-weight 400, line-height 1.5)
- **Border**: 1px solid, 2px on focus
- **Focus Ring**: 2px ring with 2px offset using primary color
- **Icons**: 20px × 20px, positioned 12px from edge

## Related Components

- [Textarea](/components/forms/textarea) - For multi-line text input
- [Checkbox](/components/forms/checkbox) - For binary choices
- [Radio](/components/forms/radio) - For single choice from multiple options
- [Switch](/components/forms/switch) - For toggle states
