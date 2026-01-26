# Arquitetura - ClickMax Design System R

## Visao Geral

O ClickMax Design System R e uma biblioteca de componentes React moderna, construida com foco em:

- **Acessibilidade**: Radix UI Primitives como base
- **Type Safety**: TypeScript em todo o codebase
- **Performance**: Tailwind CSS 4 com CSS-first config
- **Developer Experience**: Storybook para documentacao e desenvolvimento

---

## Stack Tecnologico

### Core

| Tecnologia | Papel |
|------------|-------|
| React 19 | UI Framework |
| TypeScript 5.9+ | Type safety |
| Tailwind CSS 4 | Styling |

### Build Tools

| Tecnologia | Papel |
|------------|-------|
| Rsbuild | Dev server |
| Rslib | Library build (ESM + CJS) |

### Component Patterns

| Tecnologia | Papel |
|------------|-------|
| Radix UI | Primitivos acessiveis |
| CVA | Gerenciamento de variantes |
| clsx + tailwind-merge | Utility para classes |

### Documentation

| Tecnologia | Papel |
|------------|-------|
| Storybook 10.2 | Documentacao interativa |

---

## Sistema de Tokens

### 3 Camadas

```
┌─────────────────────────────────────────┐
│           Component Tokens              │  ← Especifico por componente
│    (button-padding, card-gap, etc)      │
├─────────────────────────────────────────┤
│           Semantic Tokens               │  ← Tokens com proposito
│  (bg-primary, text-secondary, etc)      │
├─────────────────────────────────────────┤
│           Primitive Tokens              │  ← Valores brutos
│    (yellow-500, gray-900, etc)          │
└─────────────────────────────────────────┘
```

### Primitives (Nunca usar diretamente)

```typescript
// tokens/primitives/colors.ts
export const colors = {
  yellow: {
    500: '#E4FF00',  // Brand primary
    600: '#D1E600',  // Brand hover
  },
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E8E9EB',
    300: '#C5C7CC',
    400: '#8B8F96',
    500: '#6B7280',
    600: '#4B5563',
    800: '#3F4248',
    900: '#2A2D31',
  },
  // feedback colors...
}
```

### Semantic (Usar no design)

```typescript
// tokens/semantic/colors.ts
export const semanticColors = {
  bg: {
    primary: colors.white,      // Fundo principal
    secondary: colors.gray[200], // Fundo secundario
    tertiary: colors.gray[100],  // Fundo terciario
    inverse: colors.gray[900],   // Fundo invertido
    accent: colors.yellow[500],  // Fundo de destaque
  },
  text: {
    primary: colors.gray[900],   // Texto principal
    secondary: colors.gray[400], // Texto secundario
    tertiary: colors.gray[500],  // Texto terciario
    inverse: colors.white,       // Texto invertido
  },
  interactive: {
    default: colors.yellow[500], // Estado padrao
    hover: colors.yellow[600],   // Estado hover
    active: colors.yellow[600],  // Estado active
  },
  // ...
}
```

### Component (Especifico)

```typescript
// tokens/component/button.ts
export const buttonTokens = {
  size: {
    sm: { height: '32px', paddingX: '12px', gap: '4px' },
    md: { height: '40px', paddingX: '16px', gap: '8px' },
    lg: { height: '48px', paddingX: '24px', gap: '8px' },
  }
}
```

---

## Padrao de Componente

### Estrutura de Arquivos

```
src/components/primitives/Button/
├── Button.tsx       # Implementacao
├── Button.stories.tsx # Stories
├── Button.test.tsx  # Testes (futuro)
└── index.ts         # Re-export
```

### Template de Componente

```typescript
import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// 1. Definir variantes com CVA
const buttonVariants = cva(
  [
    // Classes base (sempre aplicadas)
    'inline-flex items-center justify-center',
    'font-medium whitespace-nowrap',
    'rounded-lg',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-interactive-default text-text-accent',
          'hover:bg-interactive-hover',
          'focus-visible:ring-interactive-default',
        ],
        secondary: [
          'bg-bg-secondary text-text-primary',
          'hover:bg-bg-tertiary',
          'focus-visible:ring-border-strong',
        ],
        // ... outras variantes
      },
      size: {
        sm: ['h-8 text-sm', 'px-3', 'gap-1'],
        md: ['h-10 text-sm', 'px-4', 'gap-2'],
        lg: ['h-12 text-base', 'px-6', 'gap-2'],
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

// 2. Definir interface com VariantProps
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// 3. Implementar com forwardRef
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

// 4. Exportar componente e variantes
export { Button, buttonVariants };
```

---

## Configuracao Tailwind CSS 4

### CSS-First Config

```css
/* src/styles/globals.css */
@import 'tailwindcss';

@theme {
  /* Fonts */
  --font-family-sans: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;

  /* Semantic Colors - geram classes automaticamente */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #e8e9eb;
  --color-text-primary: #2a2d31;
  --color-text-secondary: #8b8f96;
  --color-interactive-default: #e4ff00;
  --color-interactive-hover: #d1e600;
  --color-feedback-error: #ef4444;
  --color-feedback-success: #10b981;
  /* ... */
}
```

### Classes Geradas

O `@theme` block gera automaticamente classes como:
- `bg-bg-primary`, `bg-bg-secondary`
- `text-text-primary`, `text-text-secondary`
- `bg-interactive-default`, `bg-interactive-hover`
- `text-feedback-error`, `bg-feedback-success`

---

## Acessibilidade

### Principios

1. **Keyboard Navigation**: Todos os componentes interativos sao acessiveis via teclado
2. **ARIA**: Uso correto de roles, states e properties
3. **Focus Management**: Focus visible com ring customizado
4. **Screen Readers**: Labels e descricoes apropriadas

### Implementacao

```typescript
// Input com acessibilidade
<input
  type={type}
  id={inputId}
  ref={ref}
  aria-describedby={
    error ? errorId : description ? descriptionId : undefined
  }
  aria-invalid={error ? 'true' : undefined}
  // ...
/>
```

### Focus Ring

```css
.focus-ring:focus-visible {
  outline: 2px solid var(--interactive-focus);
  outline-offset: 2px;
}
```

---

## Build e Distribuicao

### Rslib Config

```typescript
// rslib.config.ts
export default defineConfig({
  lib: [
    { format: 'esm', syntax: 'es2021' },
    { format: 'cjs', syntax: 'es2021' },
  ],
  output: {
    target: 'web',
    distPath: { root: './dist' },
  },
  source: {
    entry: { index: './src/index.ts' },
  },
});
```

### Output

```
dist/
├── esm/
│   ├── index.js
│   └── index.d.ts
└── cjs/
    ├── index.js
    └── index.d.ts
```

---

## Storybook

### Configuracao

```typescript
// .storybook/main.ts
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: 'storybook-react-rsbuild',
};
```

### Estrutura de Stories

```
Storybook
├── Tokens/
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   └── Effects
├── Primitives/
│   ├── Button
│   ├── Input
│   └── Badge
└── Layout/
    └── Card
```

---

## Theming

### Dark Mode (Preparado)

```css
[data-theme='dark'] {
  --bg-primary: var(--color-gray-900);
  --bg-secondary: var(--color-gray-800);
  --text-primary: var(--color-white);
  --text-secondary: var(--color-gray-400);
  --border-default: var(--color-gray-800);
  /* ... */
}
```

### Uso

```html
<html data-theme="dark">
  <!-- Componentes automaticamente usam tema dark -->
</html>
```
