# ClickMax Design System

**Modern, Accessible, Production-Ready Design System**

Built with React 19, Tailwind CSS 4, and Radix UI

[Get Started](/guide/getting-started) | [Components](/components/foundation/button) | [View on GitHub](https://github.com/guigonzalez/ClickMax-DS-Prototype)

---

## Overview

ClickMax Design System is a comprehensive component library and design token system built for modern web applications. With 11 production-ready components, a complete 3-layer token system, and extensive documentation, it provides everything you need to build consistent, accessible user interfaces.

**Project Status:** 77% Complete | **Version:** 0.1.0-dev | [View Full Status →](/project/status)

---

## Features

### 🎨 Complete Design Token System
3-layer token architecture (primitives → semantic → component) with brand-specific colors, comprehensive typography scale, and consistent spacing.

- **6 Color Families** - Fluor (brand), Neutral, Azure, Purplish, Cadmium, Torch
- **Typography System** - Plus Jakarta Sans (headings) + Inter (body)
- **Spacing Scale** - 4px-based system with semantic tokens
- **Effects** - Shadows, border radius, z-index scales

[Explore Tokens →](/tokens/colors)

### ♿ Accessibility First
Built on Radix UI primitives ensuring WCAG 2.1 AA compliance with full keyboard navigation, screen reader support, and proper ARIA attributes.

- **Keyboard Navigation** - All interactive components
- **Screen Reader Friendly** - Proper labels and descriptions
- **Focus Management** - Clear focus indicators
- **Color Contrast** - Tested combinations

[Read Accessibility Report →](/project/accessibility)

### 🧩 11 Production Components

#### Foundation (3)
- **Button** - 7 variants with clear interaction hierarchy
- **Badge** - 8 variants for status and labels
- **Icon** - Lucide React integration (1000+ icons)

#### Typography (2)
- **Heading** - H1-H6 with Plus Jakarta Sans
- **Text** - Body, Subheading, Overline, XSmall

#### Forms (5)
- **Input** - Text input with label, description, validation
- **Checkbox** - 3 sizes with indeterminate state
- **Radio** - Radio button groups
- **Switch** - Toggle switches
- **Textarea** - Multi-line text input

#### Layout (1)
- **Card** - Container with compound components

[Browse All Components →](/components/foundation/button)

### ⚡ Modern Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.0.0 | UI Framework with latest features |
| **TypeScript** | 5.7.2 | Type safety with strict mode |
| **Tailwind CSS** | 4.0.0 | CSS-first configuration |
| **Radix UI** | 1.x | Accessible component primitives |
| **CVA** | 0.7.1 | Type-safe variant management |
| **Rsbuild** | 1.7.2 | Fast build tool (Rspack) |
| **Storybook** | 10.2.0 | Component development |
| **Rspress** | 2.0.0-beta.21 | Documentation site |

[Read Architecture Guide →](/guide/architecture)

---

## Quick Start

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
npm run storybook          # http://localhost:6006

# Start documentation site
npm run docs:dev           # http://localhost:3001

# Start main app
npm run dev                # http://localhost:3001
```

### Basic Usage

```tsx
import { Button, Input, Badge, Card, CardHeader, CardTitle, CardContent } from '@clickmax/design-system';

function LoginForm() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Welcome Back</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="your@email.com"
            description="We'll never share your email."
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
          />

          <div className="flex gap-2">
            <Button variant="primary" className="flex-1">
              Sign In
            </Button>
            <Button variant="secondary" className="flex-1">
              Sign Up
            </Button>
          </div>

          <Badge variant="success">Active Account</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
```

[View More Examples →](/examples/forms)

---

## Recent Updates

### Latest Changes (January 28, 2026)

- ✅ **Complete Typography System** - Plus Jakarta Sans + Inter with full scale
- ✅ **Project Reorganization** - Better structure (foundation, typography, forms)
- ✅ **Updated Documentation** - Comprehensive Rspress docs
- ✅ **Accessibility Report** - WCAG compliance testing results
- ✅ **Migration Guide** - Step-by-step guide for developers

[View Reorganization Details →](/project/reorganization/overview) | [Read Migration Guide →](/guide/migration)

---

## Documentation

### For Developers
- [Getting Started](/guide/getting-started) - Setup and first steps
- [Installation](/guide/installation) - Detailed installation guide
- [Architecture](/guide/architecture) - System architecture overview
- [Migration Guide](/guide/migration) - Update to latest structure

### For Designers
- [Colors](/tokens/colors) - Complete color system
- [Typography](/tokens/typography) - Font system and scales
- [Spacing](/tokens/spacing) - Spacing tokens
- [Effects](/tokens/effects) - Shadows and effects

### Project Information
- [Project Status](/project/status) - Current progress (77%)
- [Accessibility](/project/accessibility) - WCAG compliance report
- [Quick Wins](/project/quick-wins) - Recent improvements
- [Reorganization](/project/reorganization/overview) - Structure changes

---

## Contributing

We welcome contributions! This project is actively developed and we're always looking to improve.

- **Report Issues**: [GitHub Issues](https://github.com/guigonzalez/ClickMax-DS-Prototype/issues)
- **Contributing Guide**: [How to Contribute](/guide/contributing)
- **Changelog**: [View Changes](/guide/changelog)

---

## Roadmap

### Q1 2026
- [ ] Complete missing basic components (Select, Modal, Dropdown)
- [ ] Unit tests with >80% coverage
- [ ] Dark mode implementation
- [ ] Publish v0.1.0

### Q2 2026
- [ ] Complex components (DataTable, Pagination)
- [ ] RTL language support
- [ ] Visual regression testing
- [ ] Publish v0.2.0

[View Full Roadmap →](/project/status)

---

**Status:** 🟢 Active Development
**Version:** 0.1.0-dev
**Last Updated:** January 28, 2026
**Build:** ✅ Success

**Built with ❤️ by ClickMax | Powered by Rspress v2**
