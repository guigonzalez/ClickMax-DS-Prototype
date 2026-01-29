# ClickMax Design System - Rspress Documentation

Este diretório contém a documentação do design system construída com [Rspress](https://rspress.dev/).

## 🚀 Início Rápido

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run docs:dev

# Acesse em http://localhost:3001
```

### Build de Produção

```bash
# Build estático
npm run docs:build

# Preview do build
npm run docs:preview
```

## 📁 Estrutura

```
rspress-docs/
├── .rspress/
│   ├── config.ts          # Configuração principal do Rspress
│   └── theme/             # Customização de tema (futuro)
│
├── guide/                 # Guias e tutoriais
│   └── getting-started.mdx
│
├── components/            # Documentação de componentes
│   ├── primitives/
│   │   └── button.mdx
│   ├── forms/
│   └── layout/
│
├── tokens/                # Design tokens
│   └── colors.mdx
│
├── examples/              # Exemplos práticos
│   └── forms.mdx
│
├── public/                # Assets estáticos
│
└── index.mdx              # Homepage
```

## ✨ Funcionalidades

- ✅ **Navegação hierárquica** com sidebar colapsável
- ✅ **Busca full-text** integrada
- ✅ **Dark mode** nativo
- ✅ **Syntax highlighting** para código
- ✅ **MDX support** para componentes React interativos
- ✅ **Responsivo** mobile-first
- ✅ **Build otimizado** com code splitting

## 📝 Escrevendo Documentação

### MDX Básico

```mdx
# Título da Página

Texto em Markdown normal.

## Seção

```tsx
// Código TypeScript/React
import { Button } from '@clickmax/design-system';

<Button variant="primary">Click me</Button>
\```
```

### Callouts

Use callouts para destacar informações:

```mdx
:::tip Dica
Isso é uma dica útil!
:::

:::warning Atenção
Tenha cuidado com isso.
:::

:::danger Perigo
Não faça isso em produção!
:::
```

### Tabelas

```mdx
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | string | 'primary' | Visual style |
```

### Links Internos

```mdx
[Ver componente Button](/components/primitives/button)
[Guia de instalação](/guide/installation)
```

## 🎨 Customização

### Modificar Tema

Edite `.rspress/config.ts` para alterar cores, fontes, etc:

```typescript
export default defineConfig({
  themeConfig: {
    // Sua customização aqui
  },
});
```

### Adicionar Páginas

1. Crie um arquivo `.mdx` na pasta apropriada
2. Adicione o link no sidebar em `.rspress/config.ts`
3. O Rspress detecta automaticamente

## 🔧 Configuração

A configuração principal está em `.rspress/config.ts`:

```typescript
export default defineConfig({
  root: '.',
  title: 'ClickMax Design System',
  themeConfig: {
    nav: [...],      // Navegação superior
    sidebar: {...},  // Navegação lateral
    search: true,    // Busca habilitada
    darkMode: true,  // Dark mode habilitado
  },
});
```

## 📦 Deploy

### Build de Produção

O comando `npm run docs:build` gera os arquivos estáticos em `doc_build/`:

```
doc_build/
├── index.html
├── components/
├── guide/
├── tokens/
└── static/
    ├── css/
    ├── js/
    └── search_index.json
```

### Deploy em Plataformas

#### Vercel

```bash
vercel --cwd rspress-docs
```

#### Netlify

Adicione `netlify.toml`:

```toml
[build]
  command = "npm run docs:build"
  publish = "doc_build"
```

#### GitHub Pages

Configure GitHub Actions para fazer deploy automático.

## 📊 Estatísticas do Build

Build atual:
- **Total size**: 632.5 kB (187.3 kB gzipped)
- **Build time**: ~0.75s
- **Pages**: 6 páginas documentadas

## 🆚 Rspress vs Storybook

| Aspecto | Rspress | Storybook |
|---------|---------|-----------|
| **Foco** | Documentação narrativa | Componentes isolados |
| **Performance** | ⚡ Extremamente rápido | Lento |
| **SEO** | ✅ Excelente (SSG) | ❌ Ruim (SPA) |
| **Busca** | ✅ Built-in | ⚠️ Addon necessário |
| **Learning Curve** | 📉 Baixa | 📈 Alta |

**Recomendação**: Use ambos!
- Rspress para documentação pública
- Storybook para desenvolvimento de componentes

## 📚 Recursos

- [Rspress Documentation](https://rspress.dev/)
- [MDX Documentation](https://mdxjs.com/)
- [GitHub Repository](https://github.com/guigonzalez/ClickMax-DS-Prototype)

## 🤝 Contribuindo

Para adicionar/melhorar documentação:

1. Crie/edite arquivos `.mdx`
2. Teste localmente com `npm run docs:dev`
3. Verifique build com `npm run docs:build`
4. Commit suas mudanças

---

Construído com ❤️ usando [Rspress](https://rspress.dev/)
