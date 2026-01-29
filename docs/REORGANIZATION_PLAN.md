# 📁 Plano de Reorganização do Projeto

## 🔍 Problemas Identificados

### 1. **Duplicação de Utilitários**
- ❌ `src/lib/utils.ts` e `src/utils/cn.ts` contêm a mesma função `cn()`
- ❌ Dois locais diferentes para o mesmo propósito

### 2. **Estrutura de Componentes Confusa**
- ⚠️ `primitives/Input` deveria estar em `forms/`
- ⚠️ `primitives/Heading` e `primitives/Text` são typography components
- ⚠️ Mistura de conceitos em `primitives/`

### 3. **Stories de Documentação Desorganizadas**
- 📝 `src/docs/` contém stories que poderiam estar melhor organizadas
- 📝 Falta separação clara entre foundation e components

### 4. **Playground isolado**
- 🎮 `src/components/playground/` poderia estar em `src/playground/`

## ✅ Estrutura Proposta

```
src/
├── components/
│   ├── foundation/           # NEW: Foundation components (primitivos puros)
│   │   ├── Badge/
│   │   ├── Button/
│   │   └── Icon/
│   │
│   ├── forms/               # Form-related components
│   │   ├── Checkbox/
│   │   ├── Input/          # MOVED from primitives
│   │   ├── Radio/
│   │   ├── Switch/
│   │   └── Textarea/
│   │
│   ├── layout/              # Layout components
│   │   └── Card/
│   │
│   ├── typography/          # NEW: Typography components
│   │   ├── Heading/        # MOVED from primitives
│   │   └── Text/           # MOVED from primitives
│   │
│   └── index.ts
│
├── docs/                    # RENAMED to stories
│   ├── foundation/          # NEW: Foundation stories
│   │   ├── Colors.stories.tsx
│   │   ├── Typography.stories.tsx
│   │   ├── Spacing.stories.tsx
│   │   ├── Effects.stories.tsx
│   │   └── Icons.stories.tsx
│   │
│   ├── getting-started/     # NEW: Getting started
│   │   ├── Introduction.stories.tsx
│   │   └── InteractiveColors.stories.tsx
│   │
│   └── Playground.stories.tsx
│
├── lib/                     # REMOVED: merged with utils
│
├── utils/                   # Consolidated utilities
│   ├── cn.ts               # Class name utility
│   └── index.ts            # Export all utilities
│
├── playground/              # MOVED from components
│   ├── CodePreview.tsx
│   ├── ComponentPalette.tsx
│   ├── DropZone.tsx
│   ├── componentRegistry.tsx
│   └── index.ts
│
├── tokens/
│   ├── primitives/
│   ├── semantic/
│   ├── component/
│   └── index.ts
│
├── styles/
│   └── globals.css
│
├── hooks/                   # Custom React hooks
├── providers/               # React context providers
├── types/                   # NEW: TypeScript types
│
├── App.tsx
├── main.tsx
└── index.ts
```

## 🎯 Benefícios da Reorganização

### 1. **Separação Clara de Responsabilidades**
- **foundation/**: Componentes primitivos (Button, Badge, Icon)
- **forms/**: Todos os componentes de formulário juntos
- **typography/**: Componentes de texto separados
- **layout/**: Componentes de estrutura

### 2. **Melhor Developer Experience**
- Fácil encontrar componentes por categoria
- Imports mais intuitivos
- Escalabilidade melhorada

### 3. **Organização de Stories**
- Stories de documentação separadas por categoria
- Fácil navegação no Storybook
- Estrutura alinhada com o Storybook sidebar

### 4. **Consolidação de Utilitários**
- Um único local para utilities
- Sem duplicação de código
- Exports centralizados

## 📋 Checklist de Migração

### Fase 1: Consolidar Utilitários ✅
- [ ] Manter apenas `src/utils/`
- [ ] Remover `src/lib/`
- [ ] Atualizar todos os imports de `@/lib/utils` para `@/utils`

### Fase 2: Reorganizar Componentes
- [ ] Criar `src/components/foundation/`
- [ ] Mover Badge, Button, Icon para `foundation/`
- [ ] Criar `src/components/typography/`
- [ ] Mover Heading e Text para `typography/`
- [ ] Mover Input para `forms/`
- [ ] Remover pasta `primitives/`

### Fase 3: Reorganizar Stories
- [ ] Criar estrutura `docs/foundation/`
- [ ] Mover stories de foundation
- [ ] Criar `docs/getting-started/`
- [ ] Ajustar paths no Storybook

### Fase 4: Mover Playground
- [ ] Mover `src/components/playground/` para `src/playground/`
- [ ] Atualizar imports

### Fase 5: Atualizar Exports
- [ ] Atualizar `src/components/index.ts`
- [ ] Atualizar barrel exports
- [ ] Verificar imports nos stories

### Fase 6: Testes
- [ ] Verificar build do Storybook
- [ ] Verificar build do projeto
- [ ] Testar todos os componentes

## 🚀 Comandos de Migração

```bash
# Fase 1: Consolidar utilitários
# (executar scripts de migração)

# Fase 2: Reorganizar componentes
# (executar scripts de reorganização)

# Fase 3: Verificar tudo funciona
npm run storybook
npm run build
```

## ⚠️ Notas Importantes

1. **Não quebrar imports existentes**: Manter exports temporários durante migração
2. **Migração gradual**: Fazer em fases pequenas e testar
3. **Git commits**: Commitar cada fase separadamente
4. **Documentação**: Atualizar README após migração

## 📦 Nova Estrutura de Imports

```tsx
// Antes
import { Button } from '@/components/primitives/Button';
import { Input } from '@/components/primitives/Input';
import { Heading } from '@/components/primitives/Heading';

// Depois
import { Button } from '@/components/foundation/Button';
import { Input } from '@/components/forms/Input';
import { Heading } from '@/components/typography/Heading';

// Ou usando barrel exports
import { Button } from '@/components/foundation';
import { Input } from '@/components/forms';
import { Heading } from '@/components/typography';
```

## 🎨 Estrutura do Storybook

```
A. Getting Started
  - Introduction
  - Interactive Colors Guide

B. Foundation
  - Colors
  - Typography
  - Spacing
  - Effects
  - Icons

C. Components
  ├─ Foundation
  │  ├─ Badge
  │  ├─ Button
  │  └─ Icon
  │
  ├─ Typography
  │  ├─ Heading
  │  └─ Text
  │
  ├─ Forms
  │  ├─ Checkbox
  │  ├─ Input
  │  ├─ Radio
  │  ├─ Switch
  │  └─ Textarea
  │
  └─ Layout
     └─ Card

D. Playground
  - Interactive Playground
```
