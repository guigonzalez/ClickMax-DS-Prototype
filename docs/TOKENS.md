# Design Tokens - ClickMax Design System R

Documentacao completa de todos os tokens do Design System.

---

## Cores

### Cores Primitivas

> **Aviso**: Nunca use cores primitivas diretamente nos componentes. Use sempre os tokens semanticos.

#### Yellow (Brand)

| Token | Valor | Preview |
|-------|-------|---------|
| `--color-yellow-500` | `#E4FF00` | Brand primary |
| `--color-yellow-600` | `#D1E600` | Brand hover |

#### Gray

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-gray-50` | `#FAFAFA` | Backgrounds sutis |
| `--color-gray-100` | `#F5F5F5` | Backgrounds terciarios |
| `--color-gray-200` | `#E8E9EB` | Borders, backgrounds secundarios |
| `--color-gray-300` | `#C5C7CC` | Texto disabled |
| `--color-gray-400` | `#8B8F96` | Texto secundario |
| `--color-gray-500` | `#6B7280` | Texto terciario |
| `--color-gray-600` | `#4B5563` | Texto muted |
| `--color-gray-800` | `#3F4248` | Dark backgrounds |
| `--color-gray-900` | `#2A2D31` | Texto primary, inverse bg |

#### Feedback

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-red-500` | `#EF4444` | Error |
| `--color-orange-500` | `#F59E0B` | Warning |
| `--color-green-500` | `#10B981` | Success |
| `--color-blue-500` | `#3B82F6` | Info |

---

### Cores Semanticas

#### Background

| Token | Valor | Tailwind Class | Uso |
|-------|-------|----------------|-----|
| `--bg-primary` | `#FFFFFF` | `bg-bg-primary` | Fundo principal |
| `--bg-secondary` | `#E8E9EB` | `bg-bg-secondary` | Fundo secundario |
| `--bg-tertiary` | `#F5F5F5` | `bg-bg-tertiary` | Fundo terciario |
| `--bg-inverse` | `#2A2D31` | `bg-bg-inverse` | Fundo invertido |
| `--bg-accent` | `#E4FF00` | `bg-bg-accent` | Fundo de destaque |
| `--bg-disabled` | `#E8E9EB` | `bg-bg-disabled` | Fundo disabled |

#### Text

| Token | Valor | Tailwind Class | Uso |
|-------|-------|----------------|-----|
| `--text-primary` | `#2A2D31` | `text-text-primary` | Texto principal |
| `--text-secondary` | `#8B8F96` | `text-text-secondary` | Texto secundario |
| `--text-tertiary` | `#6B7280` | `text-text-tertiary` | Texto terciario |
| `--text-inverse` | `#FFFFFF` | `text-text-inverse` | Texto invertido |
| `--text-accent` | `#2A2D31` | `text-text-accent` | Texto sobre accent |
| `--text-disabled` | `#C5C7CC` | `text-text-disabled` | Texto disabled |

#### Border

| Token | Valor | Tailwind Class | Uso |
|-------|-------|----------------|-----|
| `--border-default` | `#E8E9EB` | `border-border-default` | Borda padrao |
| `--border-strong` | `#2A2D31` | `border-border-strong` | Borda forte |
| `--border-subtle` | `#F5F5F5` | `border-border-subtle` | Borda sutil |
| `--border-focus` | `#E4FF00` | `border-border-focus` | Borda de foco |

#### Interactive

| Token | Valor | Tailwind Class | Uso |
|-------|-------|----------------|-----|
| `--interactive-default` | `#E4FF00` | `bg-interactive-default` | Estado padrao |
| `--interactive-hover` | `#D1E600` | `bg-interactive-hover` | Estado hover |
| `--interactive-active` | `#D1E600` | `bg-interactive-active` | Estado active |

#### Feedback

| Token | Valor | Tailwind Class | Uso |
|-------|-------|----------------|-----|
| `--feedback-error` | `#EF4444` | `text-feedback-error` | Erros |
| `--feedback-warning` | `#F59E0B` | `text-feedback-warning` | Avisos |
| `--feedback-success` | `#10B981` | `text-feedback-success` | Sucesso |
| `--feedback-info` | `#3B82F6` | `text-feedback-info` | Informacao |

---

## Tipografia

### Font Families

| Token | Valor | Tailwind Class |
|-------|-------|----------------|
| `--font-family-sans` | Inter, system fonts | `font-sans` |
| `--font-family-mono` | JetBrains Mono, monospace | `font-mono` |

### Font Sizes

| Tailwind Class | Tamanho | Line Height |
|----------------|---------|-------------|
| `text-xs` | 12px / 0.75rem | 1rem |
| `text-sm` | 14px / 0.875rem | 1.25rem |
| `text-base` | 16px / 1rem | 1.5rem |
| `text-lg` | 18px / 1.125rem | 1.75rem |
| `text-xl` | 20px / 1.25rem | 1.75rem |
| `text-2xl` | 24px / 1.5rem | 2rem |
| `text-3xl` | 30px / 1.875rem | 2.25rem |
| `text-4xl` | 36px / 2.25rem | 2.5rem |
| `text-5xl` | 48px / 3rem | 1 |

### Font Weights

| Tailwind Class | Weight |
|----------------|--------|
| `font-normal` | 400 |
| `font-medium` | 500 |
| `font-semibold` | 600 |
| `font-bold` | 700 |

### Text Styles Recomendados

| Estilo | Classes |
|--------|---------|
| Heading 1 | `text-3xl font-bold` |
| Heading 2 | `text-2xl font-semibold` |
| Heading 3 | `text-lg font-semibold` |
| Body | `text-base font-normal` |
| Small | `text-sm font-normal` |
| Caption | `text-xs font-medium` |

---

## Espacamento

### Escala Base

| Token | Valor | Tailwind |
|-------|-------|----------|
| `--space-1` | 4px | `p-1`, `m-1`, `gap-1` |
| `--space-2` | 8px | `p-2`, `m-2`, `gap-2` |
| `--space-3` | 12px | `p-3`, `m-3`, `gap-3` |
| `--space-4` | 16px | `p-4`, `m-4`, `gap-4` |
| `--space-6` | 24px | `p-6`, `m-6`, `gap-6` |
| `--space-8` | 32px | `p-8`, `m-8`, `gap-8` |

### Button Spacing

| Token | Valor | Uso |
|-------|-------|-----|
| `--button-padding-x-sm` | 12px | Padding horizontal small |
| `--button-padding-x-md` | 16px | Padding horizontal medium |
| `--button-padding-x-lg` | 24px | Padding horizontal large |
| `--button-gap-sm` | 4px | Gap icone/texto small |
| `--button-gap-md` | 8px | Gap icone/texto medium |
| `--button-gap-lg` | 8px | Gap icone/texto large |

### Input Spacing

| Token | Valor | Uso |
|-------|-------|-----|
| `--input-height` | 40px | Altura do input |
| `--input-padding-x` | 12px | Padding horizontal |
| `--input-padding-y` | 8px | Padding vertical |
| `--input-gap` | 4px | Gap label/input |

### Card Spacing

| Token | Valor | Uso |
|-------|-------|-----|
| `--card-padding` | 24px | Padding interno |
| `--card-gap` | 16px | Gap entre secoes |
| `--card-header-gap` | 6px | Gap titulo/descricao |

### Badge Spacing

| Token | Valor | Uso |
|-------|-------|-----|
| `--badge-padding-x` | 8px | Padding horizontal |
| `--badge-padding-y` | 2px | Padding vertical |

---

## Efeitos

### Shadows

| Token | Valor | Tailwind Class |
|-------|-------|----------------|
| `--shadow-sm` | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)` | `shadow-sm` |
| `--shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` | `shadow-md` |
| `--shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` | `shadow-lg` |

### Border Radius

| Token | Valor | Tailwind Class |
|-------|-------|----------------|
| `--radius-sm` | 4px | `rounded-sm` |
| `--radius-md` | 6px | `rounded-md` |
| `--radius-lg` | 8px | `rounded-lg` |
| `--radius-xl` | 12px | `rounded-xl` |
| `--radius-full` | 9999px | `rounded-full` |

### Z-Index

| Token | Valor | Uso |
|-------|-------|-----|
| `--z-dropdown` | 1000 | Menus dropdown, selects |
| `--z-sticky` | 1100 | Headers fixos |
| `--z-overlay` | 1300 | Backdrops |
| `--z-modal` | 1400 | Modais, dialogs |
| `--z-popover` | 1500 | Popovers |
| `--z-toast` | 1700 | Toasts |
| `--z-tooltip` | 1800 | Tooltips |

---

## Animacoes

### Duracoes

| Token | Valor | Uso |
|-------|-------|-----|
| `--duration-instant` | 0ms | Sem animacao |
| `--duration-fast` | 150ms | Hovers, micro-interacoes |
| `--duration-normal` | 200ms | Transicoes padrao |
| `--duration-slow` | 300ms | Modais, expansoes |

### Easing

| Token | Valor | Uso |
|-------|-------|-----|
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | Transicoes gerais |
| `--ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Elementos entrando |
| `--ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Elementos saindo |
| `--ease-bounce` | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Efeito bounce |

---

## Uso

### Em Componentes React

```tsx
// Usando classes Tailwind geradas pelos tokens
<button className="bg-interactive-default text-text-accent hover:bg-interactive-hover">
  Click me
</button>

<p className="text-text-secondary text-sm">
  Texto secundario
</p>

<div className="border border-border-default rounded-lg shadow-sm">
  Card content
</div>
```

### Em CSS Custom

```css
.custom-element {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  transition: all var(--duration-normal) var(--ease-default);
}
```
