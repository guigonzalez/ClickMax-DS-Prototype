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

| Tecnologia | Versao | Papel |
|------------|--------|-------|
| React | 19.0.0 | UI Framework |
| TypeScript | 5.7.2 | Type safety |
| Tailwind CSS | 4.0.0 | Styling (CSS-first config) |

### Build Tools

| Tecnologia | Versao | Papel |
|------------|--------|-------|
| Rsbuild | 1.3.21 | Dev server e build de producao |

### Component Patterns

| Tecnologia | Versao | Papel |
|------------|--------|-------|
| Radix UI | 1.1.x/1.2.x | Primitivos acessiveis (headless components) |
| CVA | 0.7.1 | Gerenciamento de variantes type-safe |
| clsx + tailwind-merge | 2.1.1 + 3.0.1 | Utility para classes condicionais |
| Lucide React | 0.468.0 | Biblioteca de icones |

### Documentation & Testing

| Tecnologia | Versao | Papel |
|------------|--------|-------|
| Storybook | 10.2.0 | Documentacao interativa e desenvolvimento isolado |
| storybook-react-rsbuild | 3.2.2 | Integracao Storybook + Rsbuild |
| Rspress | 2.0.0-beta.21 | Documentacao estatica em MDX |

---

## Organizacao de Diretorios

```
src/
├── components/          # Componentes organizados por categoria
│   ├── primitives/     # Botoes, inputs, badges, icones
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Badge/
│   │   └── Icon/
│   ├── forms/          # Componentes de formulario
│   │   ├── Checkbox/
│   │   ├── Radio/
│   │   ├── Switch/
│   │   └── Textarea/
│   ├── layout/         # Componentes de layout
│   │   └── Card/
│   ├── navigation/     # Componentes de navegacao (futuro)
│   ├── feedback/       # Componentes de feedback (futuro)
│   ├── data/           # Componentes de dados (futuro)
│   └── index.ts        # Export central de todos os componentes
│
├── tokens/             # Sistema de tokens (3 camadas)
│   ├── primitives/     # Valores brutos (nunca usar diretamente)
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   ├── typography.ts
│   │   ├── radius.ts
│   │   ├── shadows.ts
│   │   └── index.ts
│   ├── semantic/       # Tokens com proposito (usar no design)
│   │   ├── colors.ts
│   │   └── index.ts
│   └── component/      # Tokens especificos por componente
│       ├── button.ts
│       ├── input.ts
│       ├── card.ts
│       ├── badge.ts
│       ├── checkbox.ts
│       ├── radio.ts
│       ├── switch.ts
│       ├── textarea.ts
│       └── index.ts
│
├── styles/             # Estilos globais
│   └── globals.css     # Tailwind CSS 4 config (@theme block)
│
├── lib/                # Utilitarios
│   └── utils.ts        # cn() helper (clsx + tailwind-merge)
│
├── hooks/              # Custom hooks (futuro)
├── providers/          # Context providers (futuro)
└── docs/               # Documentacao adicional
```

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
src/components/[categoria]/[ComponentName]/
├── [ComponentName].tsx          # Implementacao
├── [ComponentName].stories.tsx  # Storybook stories
└── index.ts                     # Re-export

Exemplo:
src/components/forms/Checkbox/
├── Checkbox.tsx
├── Checkbox.stories.tsx
└── index.ts
```

### Template de Componente

**Padrão 1: Componente com Radix UI**

```typescript
import { forwardRef } from 'react';
import * as RadixPrimitive from '@radix-ui/react-[primitive]';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// 1. Definir variantes com CVA usando tokens semanticos
const componentVariants = cva(
  [
    // Classes base (sempre aplicadas)
    'shrink-0',
    'border-2 border-border-strong',
    'rounded',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    variants: {
      size: {
        sm: 'h-4 w-4', // 16px
        md: 'h-5 w-5', // 20px
        lg: 'h-6 w-6', // 24px
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

// 2. Definir interface com VariantProps
export interface ComponentProps
  extends Omit<RadixPrimitive.ComponentProps, 'size'>,
    VariantProps<typeof componentVariants> {
  label?: string;
  description?: string;
}

// 3. Implementar com forwardRef
const Component = forwardRef<
  React.ElementRef<typeof RadixPrimitive.Root>,
  ComponentProps
>(({ className, size, label, description, ...props }, ref) => {
  return (
    <RadixPrimitive.Root
      ref={ref}
      className={cn(componentVariants({ size, className }))}
      {...props}
    />
  );
});

Component.displayName = RadixPrimitive.Root.displayName;

// 4. Exportar componente e variantes
export { Component, componentVariants };
```

**Padrão 2: Componente Nativo (sem Radix UI)**

```typescript
import { forwardRef, useId, type TextareaHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textareaVariants = cva(
  [
    'flex w-full rounded-lg',
    'border-2 border-border-default',
    'bg-bg-primary',
    'px-3 py-2',
    'text-sm text-text-primary',
    'placeholder:text-text-secondary',
    'focus-visible:outline-none focus-visible:border-interactive-default',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: '',
        error: 'border-feedback-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string;
  description?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, label, description, error, id: providedId, ...props }, ref) => {
    const generatedId = useId();
    const id = providedId || generatedId;

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && <label htmlFor={id}>{label}</label>}
        {description && <p id={`${id}-description`}>{description}</p>}
        <textarea
          id={id}
          className={cn(textareaVariants({ variant: error ? 'error' : variant, className }))}
          ref={ref}
          aria-describedby={description ? `${id}-description` : undefined}
          aria-invalid={error ? true : undefined}
          {...props}
        />
        {error && <p className="text-sm text-feedback-error">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants };
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

## Componentes Implementados

### Primitives

| Componente | Radix UI | Variantes | Sizes | Descricao |
|------------|----------|-----------|-------|-----------|
| **Button** | `@radix-ui/react-slot` | 6 (primary, secondary, ghost, destructive, outline, link) | 4 (sm, md, lg, icon) | Botao interativo com Slot pattern |
| **Input** | `@radix-ui/react-label` | 2 (default, error) | - | Campo de entrada com label |
| **Badge** | - | 6 (default, success, warning, error, outline, secondary) | - | Indicador de status |
| **Icon** | - | 9 cores | 5 (xs, sm, md, lg, xl) | Wrapper para Lucide icons |

### Layout

| Componente | Radix UI | Variantes | Descricao |
|------------|----------|-----------|-----------|
| **Card** | - | - | Container com compound components (Header, Title, Description, Content, Footer) |

### Forms

| Componente | Radix UI | Variantes | Sizes | Estados | Descricao |
|------------|----------|-----------|-------|---------|-----------|
| **Checkbox** | `@radix-ui/react-checkbox@1.1.4` | - | 3 (sm, md, lg) | checked, unchecked, indeterminate, disabled | Caixa de selecao |
| **Radio** | `@radix-ui/react-radio-group@1.2.3` | - | 3 (sm, md, lg) | checked, unchecked, disabled | Grupo de opcoes exclusivas (RadioGroup + RadioGroupItem) |
| **Switch** | `@radix-ui/react-switch` | - | 3 (sm, md, lg) | on, off, disabled | Interruptor de alternancia (toggle) |
| **Textarea** | - (native) | 2 (default, error) | 3 (sm, md, lg) | - | Campo de texto multi-linha |

**Total:** 9 componentes implementados

**Proximos (Sprint 1):**
- Select (compound component com SelectTrigger, SelectContent, SelectItem, SelectGroup)

---

## Acessibilidade

### Principios

1. **Keyboard Navigation**: Todos os componentes interativos sao acessiveis via teclado
2. **ARIA**: Uso correto de roles, states e properties
3. **Focus Management**: Focus visible com ring customizado
4. **Screen Readers**: Labels e descricoes apropriadas

### Implementacao

**IDs Unicos com useId():**
```typescript
import { useId } from 'react';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id: providedId, description, error, ...props }, ref) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const descriptionId = description ? `${id}-description` : undefined;
    const errorId = error ? `${id}-error` : undefined;

    return (
      <textarea
        id={id}
        aria-describedby={[descriptionId, errorId].filter(Boolean).join(' ')}
        aria-invalid={error ? true : undefined}
        ref={ref}
        {...props}
      />
    );
  }
);
```

**Focus Visible:**
```typescript
const componentVariants = cva([
  // ... outras classes
  'focus-visible:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-offset-2',
  'focus-visible:ring-interactive-default',
]);
```

**Estados com data-state (Radix UI):**
```typescript
// Checkbox com estados checked/unchecked/indeterminate
<CheckboxPrimitive.Root
  className={cn(
    'data-[state=checked]:bg-interactive-default',
    'data-[state=indeterminate]:bg-interactive-default'
  )}
/>
```

---

## Build e Desenvolvimento

### Rsbuild Config

```typescript
// rsbuild.config.ts
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './index.html',
  },
  output: {
    target: 'web',
    distPath: { root: './dist' },
  },
});
```

### Scripts Disponiveis

```bash
# Desenvolvimento
npm run dev              # Inicia dev server (Rsbuild)
npm run storybook        # Inicia Storybook dev server

# Build
npm run build            # Build de producao
npm run build-storybook  # Build do Storybook

# Qualidade
npm run type-check       # Verificacao TypeScript
npm run lint             # ESLint
npm run format           # Prettier
```

### Output de Build

```
dist/
├── static/
│   ├── css/
│   └── js/
├── index.html
└── [assets]
```

**Nota:** Este e um projeto privado (`"private": true`) e nao sera publicado no NPM. O build e usado apenas para preview e deploys.

---

## Documentacao

### Estrategia de Documentacao

O projeto utiliza duas ferramentas complementares para documentacao:

1. **Storybook 10.2.0** - Desenvolvimento interativo e showcase de componentes
   - Formato: `.stories.tsx` (React/TSX)
   - Uso: Desenvolvimento isolado, testes visuais, documentacao de props
   - URL: http://localhost:6006

2. **Rspress 2.0.0** - Documentacao estatica e guias
   - Formato: `.mdx` (Markdown com JSX)
   - Uso: Guias de uso, tutoriais, arquitetura, contribuicao
   - URL: http://localhost:4321

### Regra de Formatos

**IMPORTANTE:**
- ✅ **Storybook**: Use apenas `.stories.tsx` (nunca `.mdx`)
- ✅ **Rspress**: Use apenas `.mdx` para documentacao estatica
- ❌ **Nao misturar**: MDX nao e suportado no Storybook 10 devido a descontinuacao do `@storybook/blocks`

### Configuracao Storybook

```typescript
// .storybook/main.ts
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'], // Somente TSX
  addons: [], // Addons integrados no core no Storybook 10
  framework: 'storybook-react-rsbuild',
};
```

### Estrutura de Stories

```
Storybook (apenas .stories.tsx)
├── Documentation/
│   └── Getting Started
├── Tokens/
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   └── Effects
├── Primitives/
│   ├── Button
│   ├── Input
│   ├── Badge
│   └── Icon
├── Forms/
│   ├── Checkbox
│   ├── Radio
│   ├── Switch
│   └── Textarea
└── Layout/
    └── Card
```

### Configuracao Rspress

```
rspress-docs/ (apenas .mdx)
├── guide/
│   ├── getting-started.mdx
│   ├── installation.mdx
│   └── usage.mdx
├── components/
│   └── [documentacao de componentes]
└── api/
    └── [referencia de API]
```

---

## Storybook 10 - Breaking Changes

### Principais Mudancas

O projeto foi atualizado para **Storybook 10.2.0**, que introduziu mudancas significativas:

1. **ESM-Only**: Storybook 10 e distribuido apenas como ES Modules
2. **Node Version**: Requer Node 20.19+ ou 22.12+
3. **Addons Descontinuados**: Pacotes como `@storybook/addon-essentials`, `@storybook/blocks`, etc. foram integrados ao core
4. **MDX Sem Suporte**: Arquivos `.mdx` com imports de `@storybook/blocks` nao funcionam mais

### Migracao de MDX para TSX

**Antes (Storybook 8 - nao funciona mais):**
```mdx
import { Meta } from '@storybook/blocks';

<Meta title="Documentation/Getting Started" />

# Meu componente
```

**Depois (Storybook 10 - funcional):**
```tsx
import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Documentation/Getting Started',
};

export default meta;

export const GettingStarted = () => {
  return <div>Meu componente</div>;
};
```

### Compatibilidade

- ✅ React 19.0.0
- ✅ Tailwind CSS 4.0.0
- ✅ Rsbuild 1.3.21
- ✅ storybook-react-rsbuild 3.2.2

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

---

## Integracao com Radix UI

### Filosofia

Radix UI fornece primitivos headless (sem estilo) com acessibilidade completa. Nos adicionamos estilos usando Tailwind CSS 4 e tokens semanticos.

### Versoes Fixas

Para garantir compatibilidade com `storybook-react-rsbuild`, algumas versoes do Radix UI estao fixadas:

```json
{
  "@radix-ui/react-checkbox": "1.1.4",
  "@radix-ui/react-radio-group": "1.2.3"
}
```

**Motivo:** Versoes 1.3.x+ tem breaking changes no sistema de exports ESM que causam conflitos com o Webpack do Storybook.

### Compound Components

Radix UI usa pattern de compound components (componentes compostos). Exemplo com Radio:

```typescript
// ❌ ERRADO - Size no RadioGroup nao propaga
<RadioGroup size="sm">
  <RadioGroupItem value="1" />
</RadioGroup>

// ✅ CORRETO - Size em cada RadioGroupItem
<RadioGroup>
  <RadioGroupItem value="1" size="sm" />
  <RadioGroupItem value="2" size="sm" />
</RadioGroup>
```

### Estados com data-state

Radix UI usa atributos `data-state` para estados:

```typescript
// Checkbox
data-state="checked" | "unchecked" | "indeterminate"

// Switch
data-state="checked" | "unchecked"

// Radio
data-state="checked" | "unchecked"
```

Aplicamos estilos com seletores de atributo:

```typescript
const checkboxVariants = cva([
  'data-[state=checked]:bg-interactive-default',
  'data-[state=indeterminate]:bg-interactive-default',
]);
```

### Componentes com Radix UI

| Componente | Package | Versao | Status |
|------------|---------|--------|--------|
| Button (Slot) | `@radix-ui/react-slot` | ^1.2.0 | ✅ |
| Label | `@radix-ui/react-label` | ^2.1.2 | ✅ |
| Checkbox | `@radix-ui/react-checkbox` | 1.1.4 (fixed) | ✅ |
| Radio | `@radix-ui/react-radio-group` | 1.2.3 (fixed) | ✅ |
| Switch | `@radix-ui/react-switch` | ^1.1.3 | ✅ |
| Select | `@radix-ui/react-select` | ^2.1.6 | ⏳ Proximo |
| Tabs | `@radix-ui/react-tabs` | ^1.1.3 | 📋 Planejado |
| Dialog | `@radix-ui/react-dialog` | ^1.1.6 | 📋 Planejado |
| Tooltip | `@radix-ui/react-tooltip` | ^1.1.8 | 📋 Planejado |
| Dropdown Menu | `@radix-ui/react-dropdown-menu` | ^2.1.6 | 📋 Planejado |

---

## Proximos Passos

### Sprint 1 - Form Controls (80% completo)

- [x] Checkbox
- [x] Radio
- [x] Switch
- [x] Textarea
- [ ] **Select** ← Proximo componente

### Sprint 2 - Navigation (Planejado)

- [ ] Tabs
- [ ] DropdownMenu
- [ ] Breadcrumbs
- [ ] Pagination

### Sprint 3 - Feedback (Planejado)

- [ ] Separator
- [ ] Tooltip
- [ ] Alert
- [ ] Dialog
- [ ] Toast

### Sprint 4 - Layout (Planejado)

- [ ] Stack
- [ ] Grid
- [ ] Container
- [ ] ScrollArea

### Sprint 5 - Data Display (Planejado)

- [ ] Avatar
- [ ] Table
