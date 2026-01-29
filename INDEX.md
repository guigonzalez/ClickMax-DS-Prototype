# 📑 Índice de Documentação - ClickMax Design System

**Última atualização:** 28/01/2026

---

## 🚀 Começando

- **[README.md](./README.md)** - Início rápido e instruções de instalação
- **[PROJECT_STATUS.md](./PROJECT_STATUS.md)** - Status atual do projeto (77% completo)
- **[ARCHITECTURE.md](./docs/ARCHITECTURE.md)** - Arquitetura do sistema
- **[DOCUMENTATION_INTEGRATION.md](./DOCUMENTATION_INTEGRATION.md)** ⭐ **Documentação Rspress Completa** - 33 páginas integradas

---

## 📋 Reorganização do Projeto

### Status
- ✅ **100% Completa**
- ✅ Build funcionando
- ✅ Zero breaking changes

### Documentos

1. **[REORGANIZATION_FINAL.md](./REORGANIZATION_FINAL.md)** ⭐ **COMEÇAR AQUI**
   - Resumo completo da reorganização
   - Status 100% concluído
   - Estatísticas finais

2. **[REORGANIZATION_PLAN.md](./REORGANIZATION_PLAN.md)**
   - Plano original completo
   - Estrutura proposta
   - 4 fases detalhadas

3. **[REORGANIZATION_SUMMARY.md](./REORGANIZATION_SUMMARY.md)**
   - Resumo da Fase 1
   - Próximas fases (todas concluídas)
   - Progresso geral

4. **[REORGANIZATION_COMPLETE.md](./REORGANIZATION_COMPLETE.md)**
   - Conclusão detalhada
   - Mudanças realizadas
   - Impacto e benefícios

5. **[MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)**
   - Guia de migração passo a passo
   - Find & Replace commands
   - Troubleshooting

---

## 🎯 Melhorias Implementadas

- **[QUICK_WINS.md](./QUICK_WINS.md)**
  - Sistema de tipografia completo
  - 8 componentes atualizados
  - Métricas antes/depois
  - Lições aprendidas

---

## 📚 Documentação Técnica

### Design Tokens
- **[CHANGELOG_COLORS.md](./CHANGELOG_COLORS.md)** - Mudanças no sistema de cores
- Tokens Primitivos em `src/tokens/primitives/`
- Tokens Semânticos em `src/tokens/semantic/`
- Tokens de Componentes em `src/tokens/component/`

### Acessibilidade
- **[ACCESSIBILITY_REPORT.md](./ACCESSIBILITY_REPORT.md)** - Relatório de acessibilidade

### Guias Interativos
- **[INTERACTIVE_TOKENS_GUIDE.md](./docs/INTERACTIVE_TOKENS_GUIDE.md)** - Guia interativo de tokens
- **[DOCUMENTATION_GUIDELINES.md](./docs/DOCUMENTATION_GUIDELINES.md)** - Diretrizes de documentação

---

## 🗂️ Estrutura do Projeto

```
ClickMax Design System/
│
├── 📁 src/
│   ├── components/
│   │   ├── foundation/      # Badge, Button, Icon
│   │   ├── typography/      # Heading, Text
│   │   ├── forms/          # Input, Checkbox, Radio, Switch, Textarea
│   │   ├── layout/         # Card
│   │   └── playground/     # Interactive playground
│   │
│   ├── tokens/
│   │   ├── primitives/     # Raw design tokens
│   │   ├── semantic/       # Purpose-based tokens
│   │   └── component/      # Component-specific tokens
│   │
│   ├── utils/              # Utility functions
│   ├── styles/             # Global CSS
│   ├── hooks/              # React hooks
│   └── docs/               # Storybook documentation
│
├── 📄 Documentação
│   ├── INDEX.md (este arquivo)
│   ├── README.md
│   ├── PROJECT_STATUS.md
│   ├── REORGANIZATION_FINAL.md
│   ├── MIGRATION_GUIDE.md
│   └── ...
│
└── 📦 Configuração
    ├── package.json
    ├── tsconfig.json
    ├── .storybook/
    └── ...
```

---

## 🎨 Componentes

### Foundation (Primitivos)
- **Badge** - 8 variantes de badge
- **Button** - 7 variantes de botão
- **Icon** - Wrapper para Lucide icons

### Typography (Tipografia)
- **Heading** - H1 a H6 com Plus Jakarta Sans
- **Text** - Body, Subheading, Overline, XSmall

### Forms (Formulários)
- **Input** - Text input com validação
- **Checkbox** - 3 tamanhos + indeterminate
- **Radio** - Radio group
- **Switch** - Toggle switch
- **Textarea** - Textarea com resize

### Layout
- **Card** - Card com header, title, description, content, footer

---

## 🛠️ Comandos Úteis

```bash
# Desenvolvimento
npm run dev              # Aplicação principal
npm run storybook        # Storybook (porta 6006)
npm run docs:dev         # Rspress docs (porta 3001)

# Build
npm run build            # Build da aplicação
npm run build-storybook  # Build do Storybook
npm run docs:build       # Build da documentação

# Qualidade
npm run lint             # ESLint
npm run lint:fix         # ESLint com auto-fix
npm run format           # Prettier
npm run type-check       # TypeScript check
```

---

## 📊 Status Atual

### Progresso Geral: 77%

```
Foundation:     ████████████████████ 100%
Components:     ████████████████░░░░  80%
Documentation:  ██████████████████░░  90%
Infrastructure: ███████████████████░  95%
Testing:        ████░░░░░░░░░░░░░░░░  20%
```

### Componentes
- ✅ **11 componentes** prontos
- ⏳ **5+ componentes** planejados
- ✅ **100%** com Storybook

### Tokens
- ✅ **Cores** - Completo
- ✅ **Tipografia** - Completo
- ✅ **Spacing** - Completo
- ✅ **Effects** - Completo

---

## 🎯 Roadmap

### Q1 2026
- [x] Sistema de tipografia
- [x] Reorganização do projeto
- [ ] Completar componentes básicos
- [ ] Testes unitários (>80% coverage)
- [ ] Dark mode
- [ ] Publicar v0.1.0

### Q2 2026
- [ ] Componentes complexos
- [ ] RTL support
- [ ] Visual regression testing
- [ ] Publicar v0.2.0

---

## 🔗 Links Rápidos

### Desenvolvimento
- [Storybook](http://localhost:6006) - Component playground (Storybook 10.2)
- [Documentation](http://localhost:3001) - Rspress v2 documentation (33 páginas)
- [App](http://localhost:3001) - Main application

### Repositório
- [GitHub](https://github.com/guigonzalez/ClickMax-DS-Prototype)
- [Issues](https://github.com/guigonzalez/ClickMax-DS-Prototype/issues)

---

## 📞 Suporte

### Problemas Comuns
1. **Erro de import** → Ver [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)
2. **Build error** → Ver [REORGANIZATION_FINAL.md](./REORGANIZATION_FINAL.md)
3. **TypeScript error** → Limpar cache: `rm -rf node_modules/.cache`

### Precisa de Ajuda?
1. Consultar a documentação relevante acima
2. Verificar [PROJECT_STATUS.md](./PROJECT_STATUS.md)
3. Criar issue no GitHub

---

## 📝 Changelog

### [Unreleased] - 28/01/2026
- ✅ Sistema de tipografia completo
- ✅ Reorganização completa do projeto
- ✅ 8 componentes atualizados com tokens
- ✅ Consolidação de utilitários
- ✅ 6 documentos de reorganização criados

### [0.1.0] - Em desenvolvimento
- Setup inicial
- Componentes foundation
- Sistema de tokens

---

## 🏆 Conquistas Recentes

- ✅ **Tipografia:** Sistema completo implementado
- ✅ **Reorganização:** 100% concluída e testada
- ✅ **Documentação:** 6 novos documentos criados
- ✅ **Build:** Funcionando perfeitamente
- ✅ **Zero Breaking Changes:** Migração suave

---

**Versão:** 0.1.1-dev
**Status:** 🟢 Ativo
**Build:** ✅ Success
**Última Atualização:** 28/01/2026
