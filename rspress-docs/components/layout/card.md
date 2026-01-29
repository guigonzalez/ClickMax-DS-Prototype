# Card

A versatile container component for grouping related content with optional header, content, and footer sections.

## Overview

The Card component provides a flexible container that organizes information into visually distinct sections. It uses a compound component pattern with optional subcomponents: CardHeader, CardTitle, CardDescription, CardContent, and CardFooter. Cards are perfect for creating interfaces like dashboards, product listings, user profiles, and form containers.

## Features

- **Compound pattern** - Flexible composition with subcomponents
- **5 subcomponents** - Header, Title, Description, Content, Footer
- **Flexible layout** - Use only the parts you need
- **Consistent styling** - Border, shadow, and spacing tokens
- **Typography integration** - Uses design system typography tokens
- **Semantic HTML** - Proper heading hierarchy
- **TypeScript support** - Full type safety

## Components

### Card

The main container component.

### CardHeader

Header section for titles and descriptions, with built-in padding and spacing.

### CardTitle

Heading element (h3) for the card title using Subheading 18 tokens.

### CardDescription

Description text (p) using Body 14 Regular tokens.

### CardContent

Main content area with horizontal and bottom padding.

### CardFooter

Footer section for actions, with top border and padding.

## Props

All card components accept standard HTML div props (except CardTitle which accepts heading props and CardDescription which accepts paragraph props).

| Component | Props | Description |
|-----------|-------|-------------|
| `Card` | `HTMLAttributes<HTMLDivElement>` | Main container props |
| `CardHeader` | `HTMLAttributes<HTMLDivElement>` | Header section props |
| `CardTitle` | `HTMLAttributes<HTMLHeadingElement>` | Title (h3) props |
| `CardDescription` | `HTMLAttributes<HTMLParagraphElement>` | Description props |
| `CardContent` | `HTMLAttributes<HTMLDivElement>` | Content area props |
| `CardFooter` | `HTMLAttributes<HTMLDivElement>` | Footer section props |

All components support the `className` prop for additional styling.

## Usage

### Basic Example

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@clickmax/design-system';

function MyCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
    </Card>
  );
}
```

### With Footer

```tsx
import { Button } from '@clickmax/design-system';

<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create Account</CardTitle>
    <CardDescription>
      Enter your information to create an account.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      <Input label="Name" placeholder="Enter your name" />
      <Input label="Email" type="email" placeholder="your@email.com" />
    </div>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Create Account</Button>
    <Button variant="ghost">Cancel</Button>
  </CardFooter>
</Card>
```

### Simple Card

```tsx
<Card className="w-[350px] p-6">
  <p className="text-text-primary">
    This is a simple card with just content inside.
  </p>
</Card>
```

### Without Header

```tsx
<Card className="w-[350px]">
  <CardContent>
    <p className="text-text-primary">
      Card content without a header.
    </p>
  </CardContent>
</Card>
```

## Common Use Cases

### Login Card

```tsx
import { Input, Button } from '@clickmax/design-system';
import { Mail, Lock } from 'lucide-react';

<Card className="w-[400px]">
  <CardHeader>
    <CardTitle>Sign in to your account</CardTitle>
    <CardDescription>
      Enter your credentials to access.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
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
          <Input type="password" placeholder="••••••••" className="pl-10" />
        </div>
      </div>
    </div>
  </CardContent>
  <CardFooter className="flex-col gap-2">
    <Button variant="primary" className="w-full">
      Sign In
    </Button>
    <Button variant="ghost" className="w-full">
      Forgot password?
    </Button>
  </CardFooter>
</Card>
```

### Profile Card

```tsx
import { User, Settings, CreditCard } from 'lucide-react';

<Card className="w-[350px]">
  <CardHeader>
    <div className="flex items-center gap-4">
      <div className="h-16 w-16 rounded-full bg-interactive-action-default flex items-center justify-center">
        <User className="h-8 w-8 text-neutral-900" />
      </div>
      <div>
        <CardTitle>John Doe</CardTitle>
        <CardDescription>john@example.com</CardDescription>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <div className="space-y-3">
      <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-bg-secondary transition-colors text-left">
        <User className="h-5 w-5 text-text-secondary" />
        <span className="text-sm text-text-primary">My Profile</span>
      </button>
      <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-bg-secondary transition-colors text-left">
        <Settings className="h-5 w-5 text-text-secondary" />
        <span className="text-sm text-text-primary">Settings</span>
      </button>
      <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-bg-secondary transition-colors text-left">
        <CreditCard className="h-5 w-5 text-text-secondary" />
        <span className="text-sm text-text-primary">Payments</span>
      </button>
    </div>
  </CardContent>
</Card>
```

### Notification Card

```tsx
import { Bell, CheckCircle2, Info } from 'lucide-react';

<Card className="w-[400px]">
  <CardHeader>
    <div className="flex items-center gap-2">
      <Bell className="h-5 w-5 text-text-primary" />
      <CardTitle>Notifications</CardTitle>
    </div>
    <CardDescription>You have 3 unread messages.</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-3">
      <div className="flex items-start gap-3 rounded-lg border border-border-default p-3">
        <CheckCircle2 className="h-5 w-5 text-feedback-success mt-0.5" />
        <div className="flex-1">
          <p className="text-sm font-medium text-text-primary">
            Your call was confirmed.
          </p>
          <p className="text-xs text-text-secondary mt-1">1 hour ago</p>
        </div>
      </div>
      <div className="flex items-start gap-3 rounded-lg border border-border-default p-3">
        <Info className="h-5 w-5 text-feedback-info mt-0.5" />
        <div className="flex-1">
          <p className="text-sm font-medium text-text-primary">
            You have a new message!
          </p>
          <p className="text-xs text-text-secondary mt-1">2 hours ago</p>
        </div>
      </div>
    </div>
  </CardContent>
  <CardFooter>
    <Button variant="outline" className="w-full">
      <CheckCircle2 className="h-5 w-5" />
      Mark all as read
    </Button>
  </CardFooter>
</Card>
```

### Stats Card

```tsx
import { TrendingUp, DollarSign } from 'lucide-react';

<Card>
  <CardContent className="pt-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-text-secondary">Total Revenue</p>
        <p className="text-2xl font-bold text-text-primary mt-1">
          $45,231
        </p>
        <p className="text-xs text-feedback-success mt-1 flex items-center gap-1">
          <TrendingUp className="h-3 w-3" />
          +20.1% from last month
        </p>
      </div>
      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
        <DollarSign className="h-6 w-6 text-feedback-success" />
      </div>
    </div>
  </CardContent>
</Card>
```

### Order Card

```tsx
import { Truck, ArrowUpRight } from 'lucide-react';
import { Badge } from '@clickmax/design-system';

<Card className="w-[400px]">
  <CardHeader>
    <div className="flex items-center justify-between">
      <div>
        <CardTitle>Order #3210</CardTitle>
        <CardDescription>Placed on Jan 15, 2026</CardDescription>
      </div>
      <Badge variant="warning" className="inline-flex items-center gap-1">
        <Truck className="h-3 w-3" />
        In Transit
      </Badge>
    </div>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      <div className="flex justify-between text-sm">
        <span className="text-text-secondary">Subtotal</span>
        <span className="text-text-primary">$99.00</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-text-secondary">Shipping</span>
        <span className="text-text-primary">$15.00</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-text-secondary">Discount</span>
        <span className="text-feedback-success">- $10.00</span>
      </div>
      <div className="border-t border-border-default pt-4 flex justify-between">
        <span className="font-semibold text-text-primary">Total</span>
        <span className="font-bold text-text-primary">$104.00</span>
      </div>
    </div>
  </CardContent>
  <CardFooter className="flex gap-2">
    <Button variant="outline" className="flex-1">
      Track Order
    </Button>
    <Button variant="primary" className="flex-1">
      <ArrowUpRight className="h-5 w-5" />
      View Details
    </Button>
  </CardFooter>
</Card>
```

### Dashboard Stats Grid

```tsx
import { DollarSign, ShoppingBag, Package, TrendingUp } from 'lucide-react';

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <Card>
    <CardContent className="pt-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-text-secondary">Total Revenue</p>
          <p className="text-2xl font-bold text-text-primary mt-1">$45,231</p>
          <p className="text-xs text-feedback-success mt-1 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            +20.1% from last month
          </p>
        </div>
        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
          <DollarSign className="h-6 w-6 text-feedback-success" />
        </div>
      </div>
    </CardContent>
  </Card>

  <Card>
    <CardContent className="pt-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-text-secondary">Orders</p>
          <p className="text-2xl font-bold text-text-primary mt-1">+2,350</p>
          <p className="text-xs text-feedback-success mt-1 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            +180.1% from last month
          </p>
        </div>
        <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
          <ShoppingBag className="h-6 w-6 text-yellow-600" />
        </div>
      </div>
    </CardContent>
  </Card>

  <Card>
    <CardContent className="pt-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-text-secondary">Products</p>
          <p className="text-2xl font-bold text-text-primary mt-1">+12,234</p>
          <p className="text-xs text-feedback-success mt-1 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            +19% from last month
          </p>
        </div>
        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
          <Package className="h-6 w-6 text-feedback-info" />
        </div>
      </div>
    </CardContent>
  </Card>
</div>
```

## Examples

View the Card component in [Storybook](http://localhost:6006/?path=/story/c-components-card) for interactive examples.

## Accessibility

- **Semantic HTML** - Uses proper heading hierarchy
- **Heading structure** - CardTitle uses h3 by default
- **Text hierarchy** - Title and description use appropriate text styles
- **Focus management** - Interactive elements within cards are keyboard accessible
- **Screen reader support** - Proper semantic structure
- **WCAG 2.1 AA compliant** - Meets accessibility standards

## Best Practices

1. **Use semantic subcomponents** - Use CardHeader, CardContent, CardFooter for structure
2. **Heading hierarchy** - CardTitle uses h3, ensure proper page hierarchy
3. **Consistent spacing** - Use the provided subcomponents for consistent padding
4. **Footer for actions** - Place buttons and actions in CardFooter
5. **Width control** - Set card width using className (e.g., `w-[350px]` or `max-w-md`)
6. **Content organization** - Keep related information together
7. **Avoid nested cards** - Don't nest Card components inside each other

## Composition Patterns

### Minimal Card
```tsx
<Card className="p-6">
  <p>Simple content</p>
</Card>
```

### Header + Content
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
</Card>
```

### Full Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## Design Notes

- **Border**: 1px solid, border-default color
- **Border Radius**: 12px (rounded-xl)
- **Background**: Primary background color
- **Shadow**: Subtle shadow (shadow-sm)
- **Header padding**: 24px all sides (p-6)
- **Content padding**: 24px horizontal, 24px bottom (px-6 pb-6)
- **Footer padding**: 24px horizontal, 16px vertical (px-6 py-4)
- **Footer border**: Top border with default color
- **Title typography**: Subheading 18 (18px, font-weight 700, line-height 1.2, letter-spacing 0.5%)
- **Description typography**: Body 14 Regular (14px, font-weight 400, line-height 1.5)
- **Spacing**: 6px gap between title and description (gap-1.5)

## Related Components

- [Button](/components/foundation/button) - For actions in CardFooter
- [Badge](/components/foundation/badge) - For status indicators
- [Input](/components/forms/input) - For form cards
- [Heading](/components/typography/heading) - For custom headings
- [Text](/components/typography/text) - For custom text
