# Text

The Text component provides consistent text styles for body text, subheadings, overlines, and small text using the Inter font.

## Overview

The Text component renders semantic text elements with pre-configured typography tokens, supporting multiple variants and font weights for different use cases.

## Features

- **7 text variants** - Subheading, Body (18/16/14/12), Overline, XSmall
- **4 font weights** - Regular, Medium, Semibold, Bold
- **Semantic HTML** - Uses appropriate tags (p, span, etc.)
- **Typography tokens** - Consistent sizing and spacing
- **Inter font** - Clean, readable body font
- **TypeScript support** - Full type safety

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'subheading18' \| 'subheading16' \| 'subheading14' \| 'body18' \| 'body16' \| 'body14' \| 'body12' \| 'overline10' \| 'xsmall8'` | `'body16'` | Text style variant |
| `weight` | `'regular' \| 'medium' \| 'semibold' \| 'bold'` | varies | Font weight (availability depends on variant) |
| `as` | `'p' \| 'span' \| 'div' \| 'label'` | `'p'` | HTML element to render |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Text content |

## Typography Variants

### Subheading Variants

| Variant | Font Size | Default Weight | Line Height | Letter Spacing |
|---------|-----------|----------------|-------------|----------------|
| subheading18 | 18px | Bold (700) | 120% | 0.5% |
| subheading16 | 16px | Bold (700) | 120% | 0.5% |
| subheading14 | 14px | Bold (700) | 120% | 0.5% |

### Body Variants

| Variant | Font Size | Default Weight | Line Height | Letter Spacing |
|---------|-----------|----------------|-------------|----------------|
| body18 | 18px | Regular (400) | 140% | 0% |
| body16 | 16px | Regular (400) | 150% | 0% |
| body14 | 14px | Regular (400) | 150% | 0% |
| body12 | 12px | Regular (400) | 150% | 0% |

### Special Variants

| Variant | Font Size | Default Weight | Line Height | Letter Spacing | Notes |
|---------|-----------|----------------|-------------|----------------|-------|
| overline10 | 10px | Regular (400) | 150% | 1% | Uppercase styling |
| xsmall8 | 8px | Regular (400) | 100% | 0% | Very small text |

## Usage

### Basic Example

```tsx
import { Text } from '@clickmax/design-system';

function MyComponent() {
  return (
    <>
      <Text variant="body16">This is regular body text.</Text>
      <Text variant="body14" weight="medium">This is medium weight text.</Text>
      <Text variant="overline10">OVERLINE TEXT</Text>
    </>
  );
}
```

### Different Weights

```tsx
<Text variant="body16" weight="regular">Regular weight</Text>
<Text variant="body16" weight="medium">Medium weight</Text>
<Text variant="body16" weight="semibold">Semibold weight</Text>
<Text variant="body16" weight="bold">Bold weight</Text>
```

### Subheadings

```tsx
<Text variant="subheading18">Section Subheading</Text>
<Text variant="subheading16">Card Title</Text>
<Text variant="subheading14">Small Subheading</Text>
```

### As Different Elements

```tsx
<Text as="span" variant="body14">Inline text</Text>
<Text as="label" variant="body14" weight="medium">Form Label</Text>
<Text as="div" variant="body12">Description text</Text>
```

## Examples

View the Text component in [Storybook](http://localhost:6006/?path=/story/c-components-typography-text) for interactive examples.

## Accessibility

- Uses semantic HTML elements
- Supports all standard HTML text attributes
- Proper contrast ratios for readability
- WCAG 2.1 AA compliant

## Best Practices

1. **Choose appropriate variants** - Use body16 for main content, body14 for secondary
2. **Consistent weights** - Use medium for labels, regular for body text
3. **Avoid very small text** - Use xsmall8 sparingly, only for metadata
4. **Semantic elements** - Use `as` prop to render the right HTML element
5. **Overline for labels** - Use overline10 for category labels and tags

## Common Use Cases

### Form Labels
```tsx
<Text as="label" variant="body14" weight="medium">
  Email Address
</Text>
```

### Card Descriptions
```tsx
<Text variant="body14" className="text-text-secondary">
  This is a description of the card content.
</Text>
```

### Metadata
```tsx
<Text variant="body12" className="text-text-tertiary">
  Last updated: 2 hours ago
</Text>
```

## Related Components

- [Heading](/components/typography/heading) - For headings (H1-H6)
- [Typography Tokens](/tokens/typography) - Typography token system
