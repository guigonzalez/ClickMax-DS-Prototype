# Heading

The Heading component provides consistent heading styles (H1-H6) using the Plus Jakarta Sans font.

## Overview

The Heading component renders semantic HTML heading elements (h1-h6) with pre-configured typography tokens that ensure consistency across your application.

## Features

- **6 heading levels** - H1 through H6
- **Semantic HTML** - Uses proper heading tags
- **Typography tokens** - Consistent sizing and spacing
- **Text alignment** - Left, center, right alignment support
- **Plus Jakarta Sans font** - Professional heading font
- **TypeScript support** - Full type safety

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h2'` | The heading level |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Text alignment |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Heading content |

## Typography Scale

| Level | Font Size | Weight | Line Height | Letter Spacing |
|-------|-----------|--------|-------------|----------------|
| H1 | 56px | Bold (700) | 120% | 0.5% |
| H2 | 48px | Bold (700) | 120% | 0.5% |
| H3 | 40px | Bold (700) | 120% | 0.5% |
| H4 | 32px | Bold (700) | 120% | 0.5% |
| H5 | 24px | Bold (700) | 120% | 0.5% |
| H6 | 20px | Bold (700) | 120% | 0.5% |

## Usage

### Basic Example

```tsx
import { Heading } from '@clickmax/design-system';

function MyComponent() {
  return (
    <>
      <Heading level="h1">Main Page Title</Heading>
      <Heading level="h2">Section Title</Heading>
      <Heading level="h3">Subsection Title</Heading>
    </>
  );
}
```

### Text Alignment

```tsx
<Heading level="h1" align="center">
  Centered Title
</Heading>

<Heading level="h2" align="right">
  Right-Aligned Title
</Heading>
```

### Custom Styling

```tsx
<Heading level="h3" className="text-blue-600 mb-4">
  Custom Styled Heading
</Heading>
```

## Examples

View the Heading component in [Storybook](http://localhost:6006/?path=/story/c-components-typography-heading) for interactive examples.

## Accessibility

- Uses semantic HTML heading elements
- Maintains proper heading hierarchy
- Supports screen readers
- WCAG 2.1 AA compliant

## Best Practices

1. **Maintain heading hierarchy** - Don't skip levels (e.g., h1 → h3)
2. **One H1 per page** - Use H1 only for the main page title
3. **Descriptive text** - Make headings clear and descriptive
4. **Visual hierarchy** - Use heading levels to create clear content structure

## Related Components

- [Text](/components/typography/text) - For body text and other text styles
- [Typography Tokens](/tokens/typography) - Typography token system
