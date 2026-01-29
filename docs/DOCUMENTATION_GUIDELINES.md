# Diretrizes de Documentacao - ClickMax Design System R

## Estrategia de Documentacao

Este projeto utiliza **duas ferramentas complementares** para documentacao, cada uma com seu formato especifico:

### 1. Storybook 10.2.0 - Desenvolvimento de Componentes

**Formato**: `.stories.tsx` (React/TSX apenas)

**Localizacao**: `src/**/*.stories.tsx`

**Uso**:
- Desenvolvimento isolado de componentes
- Testes visuais interativos
- Documentacao de props e variants
- Showcase de diferentes estados

**URL**: http://localhost:6006

**Comando**: `npm run storybook`

### 2. Rspress 2.0.0 - Documentacao Estatica

**Formato**: `.mdx` (Markdown com JSX)

**Localizacao**: `rspress-docs/**/*.mdx`

**Uso**:
- Guias de uso e instalacao
- Tutoriais passo a passo
- Documentacao de arquitetura
- Guias de contribuicao
- Exemplos complexos

**URL**: http://localhost:3001

**Comando**: `npm run docs:dev`

---

## Regra Fundamental

### ✅ O QUE FAZER

| Ferramenta | Formato | Exemplo |
|------------|---------|---------|
| **Storybook** | `.stories.tsx` | `Button.stories.tsx` |
| **Rspress** | `.mdx` | `getting-started.mdx` |

### ❌ O QUE NAO FAZER

| Ferramenta | Formato Proibido | Motivo |
|------------|------------------|--------|
| **Storybook** | `.mdx`, `.stories.mdx` | `@storybook/blocks` descontinuado no Storybook 10 |
| **Rspress** | `.stories.tsx` | Rspress espera MDX para documentacao |

---

## Por que essa separacao?

### Mudancas no Storybook 10

O Storybook 10 introduziu mudancas importantes que tornaram MDX incompativel:

1. **`@storybook/blocks` descontinuado**: Pacote removido e integrado ao core
2. **ESM-only**: Distribuicao apenas como ES Modules
3. **Addons integrados**: Addons como `addon-essentials` nao existem mais como pacotes separados

### Tentativa de usar MDX no Storybook 10

**ANTES (Storybook 8 - funcionava):**
```mdx
// src/docs/GettingStarted.mdx
import { Meta } from '@storybook/blocks';

<Meta title="Documentation/Getting Started" />

# Meu Componente
```

**DEPOIS (Storybook 10 - ERRO):**
```
Module not found: Can't resolve '@storybook/blocks'
```

### Solucao

Converter documentacao do Storybook para `.stories.tsx`:

```tsx
// src/docs/GettingStarted.stories.tsx
import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Documentation/Getting Started',
};

export default meta;

export const GettingStarted = () => {
  return (
    <div>
      <h1>Meu Componente</h1>
      {/* Conteudo aqui */}
    </div>
  );
};
```

---

## Templates

### Template: Storybook Story (.stories.tsx)

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'destructive', 'outline', 'link'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Story basica
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

// Story com interacao
export const WithIcon: Story = {
  args: {
    variant: 'primary',
    children: (
      <>
        <Plus className="h-5 w-5" />
        Button
      </>
    ),
  },
};
```

### Template: Documentacao Rspress (.mdx)

```mdx
---
title: Getting Started
description: Como comecar a usar o ClickMax Design System
---

# Getting Started

Bem-vindo ao ClickMax Design System R!

## Instalacao

\`\`\`bash
npm install @clickmax/design-system
\`\`\`

## Uso Basico

\`\`\`tsx
import { Button } from '@clickmax/design-system';

function App() {
  return <Button variant="primary">Click me</Button>;
}
\`\`\`

## Componente Interativo

Voce pode importar e usar componentes React diretamente:

import { Button } from '@/components/primitives/Button';

<Button variant="primary">Botao Interativo</Button>
```

---

## Estrutura de Arquivos

### Storybook

```
src/
├── components/
│   ├── primitives/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx    ← Storybook story
│   │   │   └── index.ts
│   │   └── Input/
│   │       ├── Input.tsx
│   │       ├── Input.stories.tsx      ← Storybook story
│   │       └── index.ts
│   └── forms/
│       ├── Checkbox/
│       │   ├── Checkbox.tsx
│       │   ├── Checkbox.stories.tsx   ← Storybook story
│       │   └── index.ts
│       └── ...
└── docs/
    └── GettingStarted.stories.tsx     ← Documentacao no Storybook
```

### Rspress

```
rspress-docs/
├── index.md                           ← Homepage
├── guide/
│   ├── getting-started.mdx            ← Guia de inicio
│   ├── installation.mdx
│   ├── architecture.mdx
│   └── contributing.mdx
├── components/
│   ├── primitives/
│   │   ├── button.mdx                 ← Doc do Button
│   │   ├── input.mdx
│   │   └── badge.mdx
│   └── forms/
│       ├── checkbox.mdx
│       └── radio.mdx
├── tokens/
│   ├── colors.mdx
│   ├── typography.mdx
│   └── spacing.mdx
└── examples/
    ├── forms.mdx
    └── layouts.mdx
```

---

## Quando Usar Cada Ferramenta

### Use Storybook (.stories.tsx) para:

- ✅ Documentacao de componentes individuais
- ✅ Diferentes variants e estados
- ✅ Props e configuracoes
- ✅ Testes visuais interativos
- ✅ Desenvolvimento isolado
- ✅ Showcase de casos de uso

### Use Rspress (.mdx) para:

- ✅ Guias "Getting Started"
- ✅ Tutoriais passo a passo
- ✅ Documentacao de arquitetura
- ✅ Guias de contribuicao
- ✅ Exemplos complexos com multiplos componentes
- ✅ Documentacao conceitual
- ✅ Changelog

---

## Checklist para Novos Componentes

### 1. Implementacao

- [ ] Criar `ComponentName.tsx` em `src/components/[categoria]/ComponentName/`
- [ ] Implementar com TypeScript, CVA, e Radix UI (se aplicavel)
- [ ] Adicionar tipos e interfaces
- [ ] Exportar em `index.ts`

### 2. Storybook

- [ ] Criar `ComponentName.stories.tsx` no mesmo diretorio
- [ ] Adicionar meta com `title`, `component`, `tags: ['autodocs']`
- [ ] Criar pelo menos 3 stories: Default, Variants, States
- [ ] Testar interatividade e controls

### 3. Rspress (Opcional)

- [ ] Se o componente merece documentacao detalhada, criar `component-name.mdx` em `rspress-docs/components/[categoria]/`
- [ ] Adicionar exemplos de uso
- [ ] Documentar props e comportamentos especiais
- [ ] Adicionar ao sidebar em `rspress.config.ts`

---

## Exemplos Reais

### Button - Storybook Story

Arquivo: `src/components/primitives/Button/Button.stories.tsx`

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Plus, Download } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};
```

### Button - Rspress Documentation

Arquivo: `rspress-docs/components/primitives/button.mdx`

```mdx
---
title: Button
description: Componente de botao interativo com multiplas variantes
---

# Button

Botao interativo com suporte a icones, loading states, e multiplas variantes.

## Instalacao

\`\`\`tsx
import { Button } from '@clickmax/design-system';
\`\`\`

## Uso Basico

\`\`\`tsx
<Button variant="primary">Click me</Button>
\`\`\`

## Variantes

O Button oferece 6 variantes:

import { Button } from '@/components/primitives/Button';

<div className="flex gap-4">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="ghost">Ghost</Button>
</div>

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | string | 'primary' | Variante visual do botao |
| size | string | 'md' | Tamanho do botao |
| disabled | boolean | false | Desabilita o botao |
```

---

## Migrar de MDX para TSX (Storybook)

Se voce tiver arquivos `.mdx` antigos no Storybook, siga este guia:

### 1. Identificar imports de @storybook/blocks

```mdx
<!-- ANTES (nao funciona) -->
import { Meta, Canvas, Story } from '@storybook/blocks';
```

### 2. Converter para Story TSX

```tsx
// DEPOIS (funciona)
import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Documentation/MyDoc',
};

export default meta;
```

### 3. Mover conteudo para JSX

```tsx
export const MyDocumentation = () => {
  return (
    <div className="prose">
      <h1>Titulo</h1>
      <p>Conteudo aqui</p>
    </div>
  );
};
```

---

## Recursos Adicionais

- [Storybook 10 Migration Guide](https://storybook.js.org/docs/releases/migration-guide)
- [Rspress Documentation](https://rspress.dev/)
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Arquitetura completa do projeto

---

## Resumo

**Regra de Ouro:**

- 📘 **Storybook**: Apenas `.stories.tsx`
- 📗 **Rspress**: Apenas `.mdx`
- ❌ **Nunca**: `.stories.mdx` ou imports de `@storybook/blocks`

Seguir essa convencao garante que toda a documentacao funcione corretamente com o Storybook 10 e Rspress 2.
