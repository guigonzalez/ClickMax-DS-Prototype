# ClickMax Design System R - Documentacao

Bem-vindo a documentacao do ClickMax Design System R.

---

## Indice

1. [CHANGELOG.md](./CHANGELOG.md) - Historico de mudancas e decisoes
2. [ARCHITECTURE.md](./ARCHITECTURE.md) - Arquitetura do sistema
3. [TOKENS.md](./TOKENS.md) - Documentacao de design tokens
4. [COMPONENTS.md](./COMPONENTS.md) - Documentacao de componentes

---

## Inicio Rapido

### Instalacao

```bash
npm install
```

### Desenvolvimento

```bash
# Iniciar dev server com Rsbuild
npm run dev

# Iniciar Storybook
npm run storybook
```

### Usando os Componentes

Importe os componentes diretamente do código fonte:

```tsx
import { Button, Input, Badge, Card } from './components';

function App() {
  return (
    <Card>
      <Input label="Nome" placeholder="Digite seu nome" />
      <Button variant="primary">Enviar</Button>
    </Card>
  );
}
```

---

## Storybook

A documentacao interativa esta disponivel no Storybook:

```bash
npm run storybook
```

Acesse em: http://localhost:6006

### Estrutura do Storybook

```
├── Tokens/
│   ├── Colors      # Paleta de cores
│   ├── Typography  # Tipografia
│   ├── Spacing     # Espacamentos
│   └── Effects     # Sombras, radius, z-index
├── Primitives/
│   ├── Button      # Botoes
│   ├── Input       # Campos de entrada
│   └── Badge       # Badges/Tags
└── Layout/
    └── Card        # Cards
```

---

## Decisoes de Design

### Por que Tailwind CSS 4?

- Configuracao CSS-first (sem tailwind.config.js)
- Melhor performance
- CSS variables nativas
- Suporte a theming facilitado

### Por que CVA?

- Type-safe variants
- Composicao de classes
- Defaults automaticos
- Melhor DX com TypeScript

### Por que Radix UI?

- Acessibilidade por padrao
- Headless (sem estilos)
- Comportamentos complexos ja implementados
- Suporte a composicao

### Por que Rsbuild?

- Build ultra-rapido baseado em Rspack (Rust)
- Suporte nativo a React 19
- Configuracao minima comparado ao Webpack/Vite
- Dev server instantaneo
- Hot Module Replacement (HMR) extremamente rapido
- Integração nativa com Storybook via storybook-react-rsbuild

---

## Proximos Passos

Consulte o [CHANGELOG.md](./CHANGELOG.md) para ver o roadmap de componentes planejados:

- **Fase 2**: Select, Checkbox, Radio, Switch, Textarea
- **Fase 3**: Tabs, DropdownMenu, Breadcrumbs, Pagination
- **Fase 4**: Alert, Toast, Dialog, Tooltip
- **Fase 5**: Stack, Grid, Container, ScrollArea
- **Fase 6**: Table, Avatar

---

## Contribuindo

### Estrutura de Componente

Cada componente deve seguir esta estrutura:

```
src/components/[categoria]/[ComponentName]/
├── [ComponentName].tsx       # Implementacao
├── [ComponentName].stories.tsx # Stories
├── [ComponentName].test.tsx  # Testes
└── index.ts                  # Re-export
```

### Padrao de Codigo

1. Use `forwardRef` para todos os componentes
2. Use CVA para variantes
3. Use `cn()` para merge de classes
4. Exporte types junto com componentes
5. Adicione `displayName` para debugging

### Acessibilidade

Todos os componentes devem:

- Ser navegaveis por teclado
- Ter ARIA attributes corretos
- Funcionar com screen readers
- Ter contraste adequado

---

## Links Uteis

- [Tailwind CSS 4 Docs](https://tailwindcss.com/docs)
- [Radix UI Docs](https://www.radix-ui.com/docs)
- [CVA Docs](https://cva.style/docs)
- [Storybook Docs](https://storybook.js.org/docs)
