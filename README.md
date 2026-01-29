# ClickMax Design System - Rspress V2 Edition

Modern, accessible, and production-ready design system built with React 19, Tailwind CSS 4, and Radix UI.

**Documentation powered by Rspress v2 (beta)** - Full React 19 support! 🎉

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or 20+
- npm 9+ or pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/guigonzalez/ClickMax-DS-Prototype.git
cd ClickMax-DS-Prototype

# Install dependencies
npm install
```

### Development

```bash
# Start Storybook (component playground)
npm run storybook

# Start Rspress v2 (documentation site)
npm run docs:dev

# Start main app (interactive playground)
npm run dev
```

### Available Servers

| Command | Port | URL | Purpose |
|---------|------|-----|---------|
| `npm run storybook` | 6006 | http://localhost:6006 | Component development (Storybook 10) |
| `npm run docs:dev` | 3001 | http://localhost:3001 | Documentation (Rspress v2 - MDX only) |
| `npm run dev` | 3001 | http://localhost:3001 | Interactive playground |

### Documentation Format Guidelines

**IMPORTANT:** The project uses different documentation formats for different tools:

- **Storybook (10.2.0)**: Use `.stories.tsx` files only (MDX not supported)
- **Rspress (2.0.0-beta.21)**: Use `.mdx` files for documentation pages

This separation is necessary because Storybook 10 removed support for `@storybook/blocks` and MDX documentation.

---

## ✨ What's New in This Version

### Rspress v2 Features

- ✅ **Full React 19 Support** - Native compatibility, no workarounds needed
- ✅ **Faster Build Times** - Improved performance over v1
- ✅ **Better MDX Support** - Enhanced MDX capabilities
- ✅ **Component Import** - Can import React components directly in MDX
- ✅ **No Virtual Module Errors** - All issues from v1 resolved

### Migration from v1 to v2

**Key Changes**:
- Upgraded from `rspress@1.47.1` to `rspress@2.0.0-beta.21`
- Upgraded from `@rspress/theme-default@1.47.1` to `2.0.0-beta.21`
- Updated sidebar configuration (added `collapsible` option)
- All documentation pages work correctly with React 19

**No Breaking Changes** for this project - all content migrated seamlessly!

---

## 📚 Documentation

Full documentation is available at the Rspress site:

```bash
npm run docs:dev
```

Then visit: http://localhost:3001/

### Documentation Structure

- **Guide**: Getting started, installation, architecture, contributing
- **Components**: Full API reference for all 9 components
- **Tokens**: Design tokens system (colors, typography, spacing, effects)
- **Examples**: Real-world usage examples (forms, layouts)

### Complete Pages (4)

✅ **Getting Started** - Full guide with examples  
✅ **Button Component** - Complete API reference  
✅ **Colors Tokens** - Full token system documentation  
✅ **Forms Examples** - 4 complete form examples

### All Pages Available (20 total)

- Guide: Getting Started, Installation, Architecture, Contributing, Changelog
- Components: Button, Input, Badge, Icon, Checkbox, Radio, Switch, Textarea, Card
- Tokens: Colors, Typography, Spacing, Effects
- Examples: Forms, Layouts

---

## 🎨 Features

- ✅ **9 Production-Ready Components**
- ✅ **3-Layer Token System** (primitives → semantic → component)
- ✅ **Full TypeScript Support** with strict typing
- ✅ **Accessibility First** (WCAG 2.1 AA compliant)
- ✅ **Dark Mode** with seamless theme switching
- ✅ **Storybook** for component development
- ✅ **Rspress v2** for comprehensive documentation
- ✅ **React 19 Compatible** throughout

---

## 🧩 Components

### Foundation (Base Components)
- **Button** - Interactive button with 7 variants and 3 sizes
- **Badge** - Status indicator with 8 variants
- **Icon** - Icon component using Lucide React

### Typography
- **Heading** - H1 to H6 with Plus Jakarta Sans
- **Text** - Body, Subheading, Overline, XSmall variants

### Forms
- **Input** - Text input with label, description, and error support
- **Checkbox** - Checkbox with indeterminate state
- **Radio** - Radio button group
- **Switch** - Toggle switch
- **Textarea** - Multi-line text input

### Layout
- **Card** - Card container with compound pattern

---

## 🎯 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.0.0 | UI Framework |
| **TypeScript** | 5.7.2 | Type safety |
| **Tailwind CSS** | 4.0.0 | Styling (CSS-first config) |
| **Radix UI** | 1.x | Accessible primitives |
| **CVA** | 0.7.1 | Type-safe variants |
| **Rsbuild** | 1.3.21 | Build tool (Rspack) |
| **Storybook** | 10.2.0 | Component playground |
| **Rspress** | 2.0.0-beta.21 | Documentation site |

---

## 📖 Usage Example

```tsx
import { Button, Input, Badge, Card, CardHeader, CardTitle, CardContent } from '@clickmax/design-system';

function LoginForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="your@email.com"
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
          />
          <Button variant="primary" className="w-full">
            Sign In
          </Button>
          <Badge variant="success">Account Active</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
```

---

## 🏗️ Project Structure

```
.
├── src/
│   ├── components/          # Component library
│   │   ├── foundation/      # Button, Badge, Icon
│   │   ├── typography/      # Heading, Text
│   │   ├── forms/           # Input, Checkbox, Radio, Switch, Textarea
│   │   ├── layout/          # Card
│   │   └── playground/      # Interactive playground
│   ├── tokens/              # Design tokens (3-layer system)
│   │   ├── primitives/      # Raw values
│   │   ├── semantic/        # Purpose-based tokens
│   │   └── component/       # Component-specific tokens
│   ├── styles/              # Global styles
│   ├── utils/               # Utilities (cn, etc)
│   └── docs/                # Storybook documentation
├── rspress-docs/            # Rspress v2 documentation
│   ├── guide/               # Getting started, architecture
│   ├── components/          # Component documentation
│   │   ├── foundation/
│   │   ├── typography/
│   │   ├── forms/
│   │   └── layout/
│   ├── tokens/              # Token documentation
│   ├── examples/            # Usage examples
│   └── index.md             # Homepage
├── rspress.config.ts        # Rspress v2 configuration
├── .storybook/              # Storybook configuration
└── docs/                    # Additional documentation
```

---

## 🧪 Development Commands

```bash
# Linting and formatting
npm run lint              # Lint code
npm run lint:fix          # Fix linting issues
npm run format            # Format code with Prettier

# Type checking
npm run type-check        # Run TypeScript type checking

# Building
npm run build             # Build main app
npm run build-storybook   # Build Storybook
npm run docs:build        # Build documentation

# Preview builds
npm run preview           # Preview main app build
npm run docs:preview      # Preview documentation build
```

---

## 🎨 Design System Architecture

### Token System (3 Layers)

```
┌─────────────────────────────────────────┐
│         Component Tokens                │  ← Specific by component
│    (button-padding, card-gap, etc)      │
├─────────────────────────────────────────┤
│          Semantic Tokens                │  ← Purpose-based (USE THESE!)
│  (bg-primary, text-secondary, etc)      │
├─────────────────────────────────────────┤
│         Primitive Tokens                │  ← Raw values
│   (yellow-500, spacing-4, etc)          │  ← NEVER use directly!
└─────────────────────────────────────────┘
```

**Important**: Always use semantic tokens in your components. Never use primitive tokens directly.

---

## ♿ Accessibility

All components are built with accessibility in mind:

- ✅ Keyboard navigation support
- ✅ Proper ARIA attributes
- ✅ Screen reader friendly
- ✅ WCAG 2.1 AA compliant
- ✅ Focus indicators
- ✅ Color contrast validation

---

## 🆚 Comparison: Rspress v2 vs Docusaurus

| Feature | Rspress v2 | Docusaurus |
|---------|------------|------------|
| **React Version** | 19 (native) | 18 (separate) |
| **Setup** | Single project | Separate docs folder |
| **Build Speed** | Very fast (Rspack) | Fast (Webpack) |
| **MDX Support** | Native, enhanced | Good |
| **Configuration** | Simple, single file | Multiple files |
| **Bundle Size** | Smaller | Larger |
| **Ecosystem** | Growing | Mature |

**Why Rspress v2?**
- ✅ Native React 19 support (no version conflicts)
- ✅ Faster build times with Rspack
- ✅ Simpler configuration
- ✅ Smaller bundle sizes
- ✅ Built by the Rspack team (same as Rsbuild)

---

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guide](rspress-docs/guide/contributing.md).

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- **Documentation**: http://localhost:3001/
- **Storybook**: http://localhost:6006
- **GitHub**: https://github.com/guigonzalez/ClickMax-DS-Prototype
- **Issues**: https://github.com/guigonzalez/ClickMax-DS-Prototype/issues
- **Rspress v2 Docs**: https://v2.rspress.rs/

---

## 📋 Changelog

### v0.1.1 - Rspress v2 Migration

**Added**:
- ✅ Rspress v2.0.0-beta.21 (React 19 compatible)
- ✅ Full sidebar navigation with all pages
- ✅ Complete documentation content (20 pages)
- ✅ Collapsible sidebar groups

**Changed**:
- Upgraded from Rspress v1.47.1 to v2.0.0-beta.21
- Updated configuration for v2 features

**Fixed**:
- ❌ No more virtual module errors
- ❌ No more React Helmet errors
- ✅ All pages render correctly with React 19

**Removed**:
- Docusaurus implementation (separate branch available)

---

## 🎉 Success!

This version successfully runs with:
- ✅ React 19.0.0
- ✅ Rspress 2.0.0-beta.21
- ✅ All pages loading correctly
- ✅ No console errors
- ✅ Fast build times
- ✅ Native MDX support

**Built with ❤️ by ClickMax | Powered by Rspress v2**
