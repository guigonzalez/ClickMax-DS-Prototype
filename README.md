# ClickMax Design System

> Modern Design System built with React 19, Tailwind CSS 4, and Radix UI

[![npm version](https://img.shields.io/npm/v/@clickmax/design-system.svg)](https://www.npmjs.com/package/@clickmax/design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📦 Installation

```bash
npm install @clickmax/design-system
# or
yarn add @clickmax/design-system
# or
pnpm add @clickmax/design-system
```

## 🚀 Quick Start

### 1. Import global styles

In your main entry file (e.g., `main.tsx` or `App.tsx`):

```tsx
import '@clickmax/design-system/styles.css';
```

### 2. Use components

```tsx
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '@clickmax/design-system';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My App</CardTitle>
      </CardHeader>
      <CardContent>
        <Input label="Name" placeholder="Enter your name" />
        <Button variant="primary">Submit</Button>
      </CardContent>
    </Card>
  );
}
```

## 🎨 Components

- **Button** - Multiple variants (primary, secondary, ghost, outline, destructive)
- **Input** - Text input with label, description, and error support
- **Badge** - Status indicators with icon support
- **Card** - Container with Header, Title, Description, Content, and Footer
- **Icon** - Wrapper for Lucide React icons with variants

## 🎯 Features

- ✅ **React 19** - Latest React with improved performance
- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS 4** - Modern CSS-first configuration
- ✅ **Radix UI** - Accessible headless components
- ✅ **Lucide Icons** - 1000+ beautiful icons
- ✅ **CVA** - Type-safe variant management
- ✅ **3-Layer Token System** - Primitives → Semantic → Component
- ✅ **Full Accessibility** - WCAG AA compliant

## 📚 Documentation

Full documentation with interactive examples available in Storybook:

```bash
# Clone the repo and run Storybook locally
git clone https://github.com/guigonzalez/ClickMax-DS-Prototype.git
cd ClickMax-DS-Prototype
npm install
npm run storybook
```

## 🎨 Design Tokens

The Design System uses a 3-layer token architecture:

### Layer 1: Primitives (raw values - never use directly)
```typescript
colors.yellow[500], colors.gray[900]
```

### Layer 2: Semantic (purpose-based tokens)
```tsx
<div className="bg-bg-primary text-text-primary border-border-default" />
```

### Layer 3: Component (component-specific tokens)
```tsx
<Button variant="primary" size="md" />
```

## 🔧 Peer Dependencies

```json
{
  "react": ">=19.0.0",
  "react-dom": ">=19.0.0"
}
```

## 📦 What's Included

```
@clickmax/design-system/
├── dist/
│   ├── esm/              # ES Modules
│   ├── cjs/              # CommonJS
│   ├── types/            # TypeScript declarations
│   └── styles.css        # Global styles
```

## 🌐 Exports

```typescript
// Components
import { Button, Input, Badge, Card, Icon } from '@clickmax/design-system';

// Styles
import '@clickmax/design-system/styles.css';

// Tokens (optional - for advanced usage)
import { tokens } from '@clickmax/design-system/tokens';
```

## 🎨 Customization

All components accept `className` for Tailwind customization:

```tsx
<Button className="w-full" variant="primary">
  Full Width Button
</Button>
```

## ♿ Accessibility

All components follow accessibility best practices:

- ✅ Keyboard navigation support
- ✅ ARIA attributes
- ✅ WCAG AA contrast ratios
- ✅ Screen reader friendly

## 📄 License

MIT © [ClickMax - Guilherme Gonzalez](https://github.com/guigonzalez)

## 🔗 Links

- [GitHub Repository](https://github.com/guigonzalez/ClickMax-DS-Prototype)
- [Report Issues](https://github.com/guigonzalez/ClickMax-DS-Prototype/issues)
- [NPM Package](https://www.npmjs.com/package/@clickmax/design-system)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ by [Guilherme Gonzalez](https://github.com/guigonzalez)
