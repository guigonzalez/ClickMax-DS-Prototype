# Changelog - ClickMax Design System R

Historico de todas as mudancas e decisoes do projeto.

---

## [1.0.0] - 2026-01-26

### Inicializacao do Projeto

#### Stack Tecnologico Escolhido

| Tecnologia | Versao | Justificativa |
|------------|--------|---------------|
| React | 19.x | Ultima versao estavel com melhorias de performance |
| TypeScript | 5.9+ | Type safety e melhor DX |
| Tailwind CSS | 4.x | CSS-first config, melhor performance, CSS nativo |
| Rsbuild | 1.3+ | Dev server rapido baseado em Rspack |
| Rslib | 0.3+ | Build otimizado para bibliotecas (ESM + CJS) |
| Storybook | 10.2 | Documentacao e desenvolvimento isolado |
| Radix UI | Latest | Primitivos acessiveis e sem estilo |
| CVA | 0.7+ | Gerenciamento de variantes type-safe |

#### Estrutura de Pastas Criada

```
POC DS R/
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── src/
│   ├── components/
│   │   ├── primitives/      # Button, Input, Badge
│   │   └── layout/          # Card
│   ├── docs/                # Stories de documentacao de tokens
│   ├── tokens/
│   │   ├── primitives/      # cores, espacamento, tipografia
│   │   ├── semantic/        # tokens semanticos
│   │   ├── component/       # tokens por componente
│   │   └── index.ts
│   ├── lib/
│   │   └── utils.ts         # cn() utility
│   ├── styles/
│   │   └── globals.css
│   └── index.ts
├── docs/                    # Documentacao do projeto
├── package.json
├── tsconfig.json
├── rslib.config.ts
└── rsbuild.config.ts
```

---

### Componentes Implementados

#### Button
- **Variantes**: primary, secondary, ghost, destructive, outline, link
- **Tamanhos**: sm (32px), md (40px), lg (48px), icon
- **Features**: asChild pattern com Radix Slot, forwardRef

#### Input
- **Features**: label, description, error states
- **Acessibilidade**: aria-describedby, aria-invalid, IDs unicos com useId()

#### Badge
- **Variantes**: default, success, warning, error, outline, secondary

#### Card
- **Subcomponentes**: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- **Pattern**: Compound component com forwardRef

---

### Decisoes Tecnicas

#### 1. Arquitetura de Tokens em 3 Camadas

**Decisao**: Implementar sistema de tokens em 3 niveis (primitives → semantic → component)

**Justificativa**:
- Primitives: Valores brutos que nunca devem ser usados diretamente
- Semantic: Tokens com proposito (bg-primary, text-secondary)
- Component: Tokens especificos por componente

**Beneficios**:
- Facilita theming e dark mode
- Tokens semanticos comunicam intencao
- Manutencao centralizada

#### 2. Tailwind CSS 4 com @theme Block

**Decisao**: Usar configuracao CSS-first do Tailwind 4 ao inves de tailwind.config.js

**Implementacao**:
```css
@import 'tailwindcss';

@theme {
  --color-bg-primary: #ffffff;
  --color-text-primary: #2a2d31;
  --color-interactive-default: #e4ff00;
  /* ... */
}
```

**Beneficios**:
- Configuracao nativa em CSS
- Melhor performance (sem build de config JS)
- CSS variables acessiveis em runtime

#### 3. CVA para Variantes de Componentes

**Decisao**: Usar class-variance-authority para gerenciar variantes

**Exemplo**:
```typescript
const buttonVariants = cva(
  ['base-classes'],
  {
    variants: {
      variant: { primary: [...], secondary: [...] },
      size: { sm: [...], md: [...], lg: [...] },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
)
```

**Beneficios**:
- Type-safe variants
- Composable classes
- Defaults automaticos

#### 4. Utility cn() com clsx + tailwind-merge

**Decisao**: Criar utility que combina clsx e tailwind-merge

**Implementacao**:
```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Beneficios**:
- Resolve conflitos de classes Tailwind
- Suporta condicionais
- API limpa para className

---

### Problemas Resolvidos

#### Problema 1: Imports do Storybook

**Erro**: `Module '"storybook-react-rsbuild"' has no exported member 'Meta'`

**Causa**: Stories usando import incorreto do pacote storybook-react-rsbuild

**Solucao**: Alterar imports para `@storybook/react`
```typescript
// Antes (incorreto)
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

// Depois (correto)
import type { Meta, StoryObj } from '@storybook/react';
```

#### Problema 2: CSS Variables no Tailwind 4

**Erro**: Padding e espacamentos nao aplicando nos componentes

**Causa**: Sintaxe `px-(--button-padding-x-sm)` nao funciona no Tailwind 4

**Tentativa 1**: `px-[var(--button-padding-x-sm)]` - funcionou parcialmente

**Solucao Final**: Registrar tokens no `@theme` block e usar classes geradas
```css
@theme {
  --spacing-button-x-sm: 12px;
  --spacing-button-x-md: 16px;
  --spacing-button-x-lg: 24px;
}
```

E nos componentes usar classes Tailwind padrao:
```typescript
size: {
  sm: ['h-8 text-sm', 'px-3', 'gap-1'],
  md: ['h-10 text-sm', 'px-4', 'gap-2'],
  lg: ['h-12 text-base', 'px-6', 'gap-2'],
}
```

#### Problema 3: CSS Reset Conflitando com Tailwind

**Erro**: `padding: 0` sendo aplicado mesmo com classes Tailwind

**Causa**: Reset CSS manual tinha maior especificidade que utilities
```css
/* Reset problematico */
*, *::before, *::after {
  margin: 0;
  padding: 0;
}
```

**Solucao**: Remover reset manual - Tailwind 4 inclui Preflight que ja faz reset adequado

---

### Stories de Documentacao de Tokens

Criadas stories para visualizar todos os tokens do Design System:

1. **Tokens/Colors** (`src/docs/Colors.stories.tsx`)
   - AllColors: Cores semanticas
   - Primitives: Cores primitivas
   - Usage: Exemplos de uso

2. **Tokens/Typography** (`src/docs/Typography.stories.tsx`)
   - FontSizes: Escala de tamanhos
   - FontWeights: Pesos de fonte
   - FontFamily: Inter e JetBrains Mono
   - TextStyles: Combinacoes comuns

3. **Tokens/Spacing** (`src/docs/Spacing.stories.tsx`)
   - SpacingScale: Escala base
   - ButtonSpacing: Tokens do Button
   - InputSpacing: Tokens do Input
   - CardSpacing: Tokens do Card
   - BadgeSpacing: Tokens do Badge

4. **Tokens/Effects** (`src/docs/Effects.stories.tsx`)
   - Shadows: sm, md, lg
   - BorderRadius: Escala de radius
   - ZIndex: Escala de empilhamento
   - Animations: Duracoes e easings

---

### Proximos Passos Planejados

#### Fase 2: Form Controls
- [ ] Select (Radix Select)
- [ ] Checkbox (Radix Checkbox)
- [ ] Radio (Radix RadioGroup)
- [ ] Switch (Radix Switch)
- [ ] Textarea

#### Fase 3: Navigation
- [ ] Tabs (Radix Tabs)
- [ ] DropdownMenu (Radix DropdownMenu)
- [ ] Breadcrumbs
- [ ] Pagination

#### Fase 4: Feedback
- [ ] Alert
- [ ] Toast (Radix Toast)
- [ ] Dialog (Radix Dialog)
- [ ] Tooltip (Radix Tooltip)

#### Fase 5: Layout
- [ ] Stack
- [ ] Grid
- [ ] Container
- [ ] ScrollArea (Radix ScrollArea)

#### Fase 6: Data
- [ ] Table
- [ ] Avatar (Radix Avatar)
