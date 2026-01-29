# Architecture

Overview of the ClickMax Design System architecture and design decisions.

## Tech Stack

- **React 19**: Latest React with new hooks and concurrent features
- **TypeScript 5.7**: Strict type safety
- **Tailwind CSS 4**: CSS-first configuration with `@theme` block
- **Radix UI**: Headless accessible primitives
- **CVA**: Type-safe variant management
- **Rsbuild**: Lightning-fast build tool

## Token System

The design system uses a 3-layer token architecture:

### Layer 1: Primitives
Raw values (colors, spacing, typography). Never use directly.

### Layer 2: Semantic
Purpose-based tokens. Use these in your components.

### Layer 3: Component
Component-specific tokens that reference semantic tokens.

Learn more in the [Design Tokens](/docs/tokens/colors) section.

## Component Structure

All components follow this pattern:
- Built with `forwardRef` for ref forwarding
- Use CVA for variant management
- Include comprehensive TypeScript types
- Support dark mode automatically
- Follow accessibility best practices

## Accessibility

All components:
- Support keyboard navigation
- Include proper ARIA attributes
- Have clear focus indicators
- Work with screen readers
- Meet WCAG 2.1 AA standards
