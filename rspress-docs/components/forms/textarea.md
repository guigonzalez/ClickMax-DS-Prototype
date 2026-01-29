# Textarea

A multi-line text input field that allows users to enter longer text content with label, description, and error message support.

## Overview

The Textarea component enables users to input multiple lines of text, making it ideal for comments, descriptions, messages, and other long-form content. It includes built-in support for labels, helper text, error messages, and resizable functionality.

## Features

- **3 size variants** - Small (80px), Medium (100px), Large (120px) minimum heights
- **Label support** - Optional label with proper association
- **Helper text** - Description text to guide users
- **Error states** - Built-in error message display
- **Resizable** - Vertical resize by default
- **Auto-sizing** - Minimum height with user-controlled growth
- **Accessibility** - Auto-generated IDs, aria-describedby, aria-invalid
- **TypeScript support** - Full type safety
- **Disabled state** - Visual and functional disabled support

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text displayed above the textarea |
| `description` | `string` | - | Helper text displayed below the label |
| `error` | `string` | - | Error message (replaces description when present) |
| `variant` | `'default' \| 'error'` | `'default'` | Visual variant (auto-set when error prop is provided) |
| `textareaSize` | `'sm' \| 'md' \| 'lg'` | `'md'` | Minimum height of the textarea |
| `placeholder` | `string` | - | Placeholder text |
| `disabled` | `boolean` | `false` | Whether the textarea is disabled |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | auto-generated | Textarea ID (auto-generated if not provided) |

All standard HTML textarea attributes are also supported (rows, cols, maxLength, etc.).

## Size Variants

| Size | Min Height | Usage |
|------|-----------|-------|
| `sm` | 80px | Short comments, brief messages |
| `md` | 100px | General purpose, default size |
| `lg` | 120px | Long descriptions, detailed feedback |

Note: All textareas are vertically resizable, these are minimum heights only.

## Usage

### Basic Example

```tsx
import { Textarea } from '@clickmax/design-system';

function MyForm() {
  return (
    <Textarea
      label="Message"
      placeholder="Type your message here..."
    />
  );
}
```

### With Description

```tsx
<Textarea
  label="Bio"
  description="Tell us a little bit about yourself"
  placeholder="I am a..."
/>
```

### With Error

```tsx
<Textarea
  label="Comment"
  error="Comment must be at least 10 characters"
  placeholder="Add your comment..."
  defaultValue="Too short"
/>
```

### Disabled State

```tsx
<Textarea
  label="Disabled Textarea"
  placeholder="Can't edit this"
  disabled
/>
```

### All Sizes

```tsx
<div className="flex flex-col gap-6 w-[400px]">
  <Textarea
    label="Small (80px min-height)"
    textareaSize="sm"
    placeholder="Small textarea..."
  />

  <Textarea
    label="Medium (100px min-height)"
    textareaSize="md"
    placeholder="Medium textarea..."
  />

  <Textarea
    label="Large (120px min-height)"
    textareaSize="lg"
    placeholder="Large textarea..."
  />
</div>
```

### Without Label

```tsx
<Textarea placeholder="Textarea without label..." />
```

### With Character Limit

```tsx
<Textarea
  label="Tweet"
  description="200 characters maximum"
  placeholder="What's happening?"
  maxLength={200}
/>
```

## Form Examples

### Contact Form

```tsx
<form className="w-[500px] space-y-4">
  <h3 className="text-lg font-semibold text-text-primary">Contact Us</h3>

  <Textarea
    label="Subject"
    textareaSize="sm"
    placeholder="What is this about?"
  />

  <Textarea
    label="Message"
    description="Please provide as much detail as possible"
    placeholder="Describe your issue or question..."
    textareaSize="lg"
  />
</form>
```

### Feedback Form

```tsx
<form className="w-[500px] space-y-6">
  <div>
    <h3 className="text-lg font-semibold text-text-primary mb-2">
      Share Your Feedback
    </h3>
    <p className="text-sm text-text-secondary">
      We'd love to hear your thoughts on our product
    </p>
  </div>

  <Textarea
    label="What do you like most?"
    description="Tell us what features you find most valuable"
    placeholder="I really appreciate..."
    textareaSize="md"
  />

  <Textarea
    label="What could be improved?"
    description="Help us make the product better for you"
    placeholder="I think you could..."
    textareaSize="md"
  />

  <Textarea
    label="Additional comments"
    description="Anything else you'd like to share?"
    placeholder="Optional feedback..."
    textareaSize="sm"
  />
</form>
```

### Blog Post Editor

```tsx
<div className="w-full max-w-2xl">
  <Textarea
    label="Post Content"
    description="Write your blog post content in Markdown"
    placeholder="# Your Title

Start writing your post here..."
    textareaSize="lg"
    rows={15}
  />
</div>
```

### Support Ticket

```tsx
<form className="max-w-lg space-y-4">
  <h3 className="text-lg font-semibold text-text-primary">
    Submit Support Ticket
  </h3>

  <Textarea
    label="Issue Description"
    description="Describe the problem you're experiencing"
    placeholder="I'm having trouble with..."
    textareaSize="md"
    required
  />

  <Textarea
    label="Steps to Reproduce"
    description="Help us understand how to reproduce the issue"
    placeholder="1. Go to...
2. Click on...
3. See error..."
    textareaSize="lg"
  />
</form>
```

### Review Form

```tsx
<div className="max-w-md space-y-4">
  <h3 className="text-base font-semibold text-text-primary">
    Write a Review
  </h3>

  <Textarea
    label="Your Review"
    description="Share your experience with this product"
    placeholder="What did you think about..."
    textareaSize="md"
    minLength={50}
  />

  <p className="text-xs text-text-secondary">
    Minimum 50 characters required
  </p>
</div>
```

## Examples

View the Textarea component in [Storybook](http://localhost:6006/?path=/story/c-components-textarea) for interactive examples.

## Accessibility

- **Auto-generated IDs** - Unique IDs for proper label association
- **aria-describedby** - Links description and error messages to textarea
- **aria-invalid** - Indicates error state to assistive technologies
- **Label association** - Proper `htmlFor` and `id` linking
- **Focus management** - Visible focus ring with proper contrast
- **Screen reader support** - Descriptive error messages
- **Resizable** - User can adjust size vertically
- **WCAG 2.1 AA compliant** - Meets accessibility standards

## Best Practices

1. **Always use labels** - Every textarea should have a visible label
2. **Provide helpful descriptions** - Guide users on what to write
3. **Clear error messages** - Explain what's wrong and how to fix it
4. **Appropriate size** - Use sm for short text, lg for long content
5. **Character limits** - Display maximum length when applicable
6. **Placeholder as hint** - Use placeholder for examples, not instructions
7. **Minimum height** - Choose a size that hints at expected content length
8. **Don't disable resize** - Let users adjust the textarea height
9. **Required indicators** - Mark required fields clearly

## Common Patterns

### Character Counter

```tsx
import { useState } from 'react';

function CharacterCounterExample() {
  const [value, setValue] = useState('');
  const maxLength = 200;

  return (
    <div className="w-[400px]">
      <Textarea
        label="Tweet"
        placeholder="What's happening?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
      />
      <p className="text-xs text-text-secondary mt-1 text-right">
        {value.length} / {maxLength} characters
      </p>
    </div>
  );
}
```

### Auto-Growing Textarea

```tsx
import { useRef, useEffect } from 'react';

function AutoGrowTextarea() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }, []);

  return (
    <Textarea
      ref={textareaRef}
      label="Auto-growing textarea"
      placeholder="Type to expand..."
      className="resize-none overflow-hidden"
    />
  );
}
```

### Validation Example

```tsx
import { useState } from 'react';

function ValidatedTextarea() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const minLength = 10;

  const handleBlur = () => {
    if (value.length > 0 && value.length < minLength) {
      setError(`Message must be at least ${minLength} characters`);
    } else {
      setError('');
    }
  };

  return (
    <Textarea
      label="Message"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleBlur}
      error={error}
      placeholder="Type your message..."
    />
  );
}
```

## Design Notes

- **Minimum heights**: 80px (sm), 100px (md), 120px (lg)
- **Padding**: 12px horizontal, 8px vertical
- **Border Radius**: 8px (rounded-lg)
- **Typography**: Body 14 Regular (14px, font-weight 400, line-height 1.5)
- **Border**: 2px solid
- **Resize**: Vertical only (resize-y)
- **Focus Ring**: 2px ring with 2px offset using primary color
- **Label typography**: Body 14 Medium
- **Description typography**: Body 14 Regular, secondary color

## Related Components

- [Input](/components/forms/input) - For single-line text input
- [Checkbox](/components/forms/checkbox) - For binary choices
- [Radio](/components/forms/radio) - For single choice from multiple options
- [Switch](/components/forms/switch) - For toggle states
