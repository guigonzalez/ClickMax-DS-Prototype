# Interactive Color Tokens - Usage Guide

## Hierarquia de Cores Interativas

O ClickMax Design System define **4 níveis** de cores interativas para criar uma hierarquia visual clara:

```
┌─────────────────────────────────────────────────────────────┐
│  1. PRIMARY (Neutral)    - Botões sistêmicos                │
│  2. ACTION (Fluor)       - Call-to-Actions (CTAs)           │
│  3. SECONDARY (Azure)    - Ações alternativas               │
│  4. TERTIARY (Purplish)  - Ações informativas               │
│  5. GHOST (Transparent)  - Ações mínimas                    │
└─────────────────────────────────────────────────────────────┘
```

---

## 1. Primary Interactive (Neutral) - Botões Sistêmicos

### Quando Usar
- Botões padrão do sistema
- Ações comuns e rotineiras
- Controles de navegação
- Ações secundárias em formulários

### Características
- **Cor**: Neutral 900 (cinza escuro `#1F2123`)
- **Texto**: Branco (`#FFFFFF`)
- **Acessibilidade**: AAA (16.15:1 contraste)
- **Personalidade**: Profissional, neutro, confiável

### Exemplos de Uso

```tsx
// ✅ CORRETO: Botões do sistema
<Button variant="primary">
  Fechar
</Button>

<Button variant="primary">
  Cancelar
</Button>

<Button variant="primary">
  Voltar
</Button>

<Button variant="primary">
  <Settings className="h-4 w-4" />
  Configurações
</Button>
```

### Classes Tailwind

```tsx
// Default state
className="bg-interactive-primary-default text-white"

// With hover
className="bg-interactive-primary-default hover:bg-interactive-primary-hover text-white"

// Complete with states
className="
  bg-interactive-primary-default
  hover:bg-interactive-primary-hover
  active:bg-interactive-primary-active
  focus:ring-2 focus:ring-interactive-primary-focus
  text-white
"
```

### Casos de Uso

| Ação | Tipo | Exemplo |
|------|------|---------|
| Fechar modal | Primary | `<Button variant="primary">Fechar</Button>` |
| Cancelar operação | Primary | `<Button variant="primary">Cancelar</Button>` |
| Voltar página | Primary | `<Button variant="primary">← Voltar</Button>` |
| Abrir configurações | Primary | `<Button variant="primary">⚙️ Settings</Button>` |
| Editar item | Primary | `<Button variant="primary">✏️ Editar</Button>` |

---

## 2. Action Interactive (Fluor) - Call-to-Actions

### Quando Usar
- **CTAs principais** (conversão crítica)
- Ações primárias em formulários
- Botões de "começar", "criar", "comprar"
- Destaque máximo de marca

### Características
- **Cor**: Fluor 500 (amarelo-verde fluorescente `#D4FF00`)
- **Texto**: Neutral 900 (escuro `#1F2123`)
- **Acessibilidade**: AAA (13.92:1 contraste)
- **Personalidade**: Energético, marca, ação

### ⚠️ Regras Críticas
1. **SEMPRE use texto escuro** (neutral-900) - NUNCA branco
2. **Use com moderação** - Máximo 1-2 por tela
3. **Reserve para conversões** - Não use em ações comuns

### Exemplos de Uso

```tsx
// ✅ CORRETO: CTAs de conversão
<Button variant="action">
  Criar Conta
</Button>

<Button variant="action">
  Começar Agora
</Button>

<Button variant="action">
  Comprar Agora
</Button>

<Button variant="action">
  <Plus className="h-4 w-4" />
  Novo Projeto
</Button>

// ❌ ERRADO: Não use para ações comuns
<Button variant="action">Fechar</Button> // Use primary
<Button variant="action">Cancelar</Button> // Use primary
```

### Classes Tailwind

```tsx
// ⚠️ CRÍTICO: SEMPRE use text-neutral-900 (text-white falha contraste)
className="
  bg-interactive-action-default
  hover:bg-interactive-action-hover
  active:bg-interactive-action-active
  focus:ring-2 focus:ring-interactive-action-focus
  text-neutral-900
  font-semibold
"
```

### Casos de Uso

| Ação | Por quê Action? | Exemplo |
|------|-----------------|---------|
| Criar conta | Conversão primária | `<Button variant="action">Sign Up</Button>` |
| Comprar produto | Ação de vendas | `<Button variant="action">Buy Now - $49</Button>` |
| Iniciar trial | Lead generation | `<Button variant="action">Start Free Trial</Button>` |
| Enviar formulário | Ação principal | `<Button variant="action">Submit</Button>` |
| Adicionar item | Criação de conteúdo | `<Button variant="action">+ New Item</Button>` |

### Hierarquia em Formulários

```tsx
// ✅ CORRETO: Action para ação principal, Primary para cancelar
<form>
  <div className="flex gap-3">
    <Button variant="primary">Cancelar</Button>
    <Button variant="action">Salvar Alterações</Button>
  </div>
</form>

// ❌ ERRADO: Dois Action buttons competindo
<form>
  <div className="flex gap-3">
    <Button variant="action">Cancelar</Button> {/* Wrong */}
    <Button variant="action">Salvar</Button>
  </div>
</form>
```

---

## 3. Secondary Interactive (Azure) - Ações Alternativas

### Quando Usar
- Ações secundárias
- Caminhos alternativos
- Informações adicionais
- Links para recursos

### Características
- **Cor**: Azure 500 (azul vibrante `#00AEFF`)
- **Texto**: Branco ou escuro (dependendo da variante)
- **Acessibilidade**: ⚠️ Requer cuidado (2.47:1 em branco)
- **Personalidade**: Informativo, alternativo, suave

### ⚠️ Problema de Acessibilidade
- `azure-500` em branco: **2.47:1 (FALHA AA)**
- **Solução**: Use outline ou azure-700 para filled

### Exemplos de Uso

```tsx
// ✅ CORRETO: Como outline (evita problema de contraste)
<Button variant="outline" className="border-interactive-secondary-default text-interactive-secondary-default">
  Saiba Mais
</Button>

// ✅ CORRETO: Com azure-700 (melhor contraste)
<Button className="bg-interactive-secondary-active text-white">
  Preview
</Button>

// ⚠️ CUIDADO: azure-500 filled precisa de teste
<Button className="bg-interactive-secondary-default text-white">
  Ver Detalhes
</Button>
```

### Classes Tailwind (Outline - Recomendado)

```tsx
className="
  border-2
  border-interactive-secondary-default
  hover:border-interactive-secondary-hover
  hover:bg-interactive-secondary-default/10
  text-interactive-secondary-default
  bg-transparent
"
```

### Casos de Uso

| Ação | Tipo | Exemplo |
|------|------|---------|
| Saiba mais | Secondary | `<Button variant="outline">Learn More</Button>` |
| Preview | Secondary | `<Button variant="outline">👁️ Preview</Button>` |
| Ver detalhes | Secondary | `<Button variant="outline">View Details</Button>` |
| Download recurso | Secondary | `<Button variant="outline">📥 Download</Button>` |

---

## 4. Tertiary Interactive (Purplish) - Ações Informativas

### Quando Usar
- Ações relacionadas a ajuda/suporte
- Documentação
- Informações adicionais
- Tutoriais

### Características
- **Cor**: Purplish 500 (roxo profundo `#6A00FF`)
- **Texto**: Branco (`#FFFFFF`)
- **Acessibilidade**: ✅ AAA (6.87:1 contraste)
- **Personalidade**: Informativo, intelectual, ajuda

### Exemplos de Uso

```tsx
// ✅ CORRETO: Ações de ajuda/info
<Button variant="tertiary">
  <HelpCircle className="h-4 w-4" />
  Ajuda
</Button>

<Button variant="tertiary">
  📚 Documentação
</Button>

<Button variant="tertiary">
  💬 Suporte
</Button>
```

### Classes Tailwind

```tsx
className="
  bg-interactive-tertiary-default
  hover:bg-interactive-tertiary-hover
  active:bg-interactive-tertiary-active
  focus:ring-2 focus:ring-interactive-tertiary-focus
  text-white
"
```

### Casos de Uso

| Ação | Tipo | Exemplo |
|------|------|---------|
| Abrir ajuda | Tertiary | `<Button variant="tertiary">? Help</Button>` |
| Ver documentação | Tertiary | `<Button variant="tertiary">📖 Docs</Button>` |
| Contatar suporte | Tertiary | `<Button variant="tertiary">💬 Support</Button>` |
| Tutorial | Tertiary | `<Button variant="tertiary">🎓 Tutorial</Button>` |

---

## 5. Ghost Interactive (Transparent) - Ações Mínimas

### Quando Usar
- Ações de baixa prioridade
- Cancelar em modais
- Fechar discreto
- Links textuais

### Características
- **Cor**: Transparent
- **Texto**: Neutral 900 (escuro)
- **Hover**: Neutral 100 (cinza muito claro)
- **Personalidade**: Discreto, mínimo, sutil

### Exemplos de Uso

```tsx
// ✅ CORRETO: Ações discretas
<Button variant="ghost">
  Pular
</Button>

<Button variant="ghost">
  <X className="h-4 w-4" />
  Fechar
</Button>

<Button variant="ghost">
  Cancelar
</Button>
```

### Classes Tailwind

```tsx
className="
  bg-interactive-ghost-default
  hover:bg-interactive-ghost-hover
  active:bg-interactive-ghost-active
  text-interactive-ghost-text
"
```

---

## Guia de Decisão Rápido

### Fluxograma de Escolha

```
Precisa de um botão?
│
├─ É a ação PRINCIPAL de conversão? → ACTION (Fluor)
│  ├─ Criar conta
│  ├─ Comprar agora
│  ├─ Começar trial
│  └─ Enviar formulário principal
│
├─ É um botão do SISTEMA? → PRIMARY (Neutral)
│  ├─ Fechar
│  ├─ Cancelar
│  ├─ Voltar
│  ├─ Configurações
│  └─ Editar
│
├─ É uma ação ALTERNATIVA? → SECONDARY (Azure)
│  ├─ Saiba mais
│  ├─ Preview
│  ├─ Ver detalhes
│  └─ Download
│
├─ É relacionado a AJUDA/INFO? → TERTIARY (Purplish)
│  ├─ Ajuda
│  ├─ Documentação
│  ├─ Suporte
│  └─ Tutorial
│
└─ É uma ação DISCRETA? → GHOST (Transparent)
   ├─ Pular
   ├─ Fechar (discreto)
   └─ Cancelar (modal)
```

---

## Exemplos de Telas Completas

### Modal de Confirmação

```tsx
<Dialog>
  <DialogHeader>
    <DialogTitle>Confirmar Exclusão</DialogTitle>
    <DialogDescription>
      Esta ação não pode ser desfeita.
    </DialogDescription>
  </DialogHeader>

  <DialogFooter className="flex gap-3">
    {/* Ghost para ação discreta de cancelar */}
    <Button variant="ghost">Cancelar</Button>

    {/* Destructive (torch) para ação perigosa */}
    <Button className="bg-feedback-error text-white">
      Excluir Permanentemente
    </Button>
  </DialogFooter>
</Dialog>
```

### Formulário de Cadastro

```tsx
<form>
  <div className="space-y-4">
    <Input label="Nome" />
    <Input label="Email" type="email" />
    <Input label="Senha" type="password" />
  </div>

  <div className="flex gap-3 mt-6">
    {/* Primary para cancelar (ação sistêmica) */}
    <Button variant="primary">Cancelar</Button>

    {/* Action para CTA principal */}
    <Button variant="action">Criar Conta Grátis</Button>
  </div>

  <div className="mt-4 text-center">
    {/* Ghost para link discreto */}
    <Button variant="ghost">Já tem uma conta? Entrar</Button>
  </div>
</form>
```

### Landing Page Hero

```tsx
<section className="hero">
  <h1>Revolucione seu Workflow</h1>
  <p>A plataforma mais poderosa para gerenciar projetos</p>

  <div className="flex gap-4 mt-8">
    {/* Action para CTA principal (conversão) */}
    <Button variant="action" size="lg">
      Começar Gratuitamente
    </Button>

    {/* Secondary para ação alternativa */}
    <Button variant="outline" size="lg" className="border-interactive-secondary-default">
      📹 Ver Demo
    </Button>

    {/* Tertiary para documentação */}
    <Button variant="tertiary">
      📚 Documentação
    </Button>
  </div>
</section>
```

### Tabela de Ações

```tsx
<Table>
  <TableRow>
    <TableCell>Projeto Alpha</TableCell>
    <TableCell className="flex gap-2">
      {/* Primary para ações do sistema */}
      <Button variant="primary" size="sm">
        <Edit className="h-3 w-3" />
        Editar
      </Button>

      {/* Ghost para ação discreta */}
      <Button variant="ghost" size="sm">
        <Eye className="h-3 w-3" />
        Ver
      </Button>

      {/* Destructive para exclusão */}
      <Button
        variant="ghost"
        size="sm"
        className="text-feedback-error hover:bg-feedback-error-bg"
      >
        <Trash className="h-3 w-3" />
      </Button>
    </TableCell>
  </TableRow>
</Table>
```

---

## Melhores Práticas

### ✅ DO (Faça)

1. **Use Action com moderação** - Máximo 1-2 por tela
2. **Primary para ações comuns** - Fechar, Cancelar, Voltar
3. **Sempre teste contraste** - Especialmente Azure e Action
4. **Mantenha hierarquia visual** - Action > Primary > Secondary > Ghost
5. **Use ícones para clareza** - Especialmente em botões pequenos
6. **Teste com usuários** - Valide se a hierarquia é clara

### ❌ DON'T (Não Faça)

1. **Não use texto branco em Action** - Use neutral-900
2. **Não abuse do Action** - Perde impacto se usado demais
3. **Não ignore acessibilidade** - Teste todos os contrastes
4. **Não misture hierarquias** - Seja consistente
5. **Não use só cor para diferenciar** - Use ícones + texto
6. **Não use Azure filled sem cuidado** - Prefira outline

---

## Acessibilidade

### Contrastes Testados

| Combinação | Contraste | Nível | Status |
|------------|-----------|-------|--------|
| Primary (neutral-900) + white | 16.15:1 | AAA | ✅ |
| Action (fluor-500) + neutral-900 | 13.92:1 | AAA | ✅ |
| Secondary (azure-500) + white | 2.47:1 | FAIL | ❌ |
| Secondary (azure-700) + white | ~4.5:1 | AA | ✅ |
| Tertiary (purplish-500) + white | 6.87:1 | AAA | ✅ |

### Recomendações de Acessibilidade

1. **Sempre inclua focus rings** - Use interactive-*-focus
2. **Navegação por teclado** - Teste Tab, Enter, Space
3. **Screen readers** - Use aria-label quando necessário
4. **Não confie só em cor** - Use ícones + texto
5. **Teste com simuladores** - Daltonismo, low vision

---

## Migração

### De Sistema Antigo

```tsx
// ANTES (sistema antigo)
<Button className="bg-yellow-500">Click Me</Button>

// DEPOIS (novo sistema)
// Se for CTA principal:
<Button variant="action">Click Me</Button>

// Se for botão do sistema:
<Button variant="primary">Click Me</Button>
```

### Checklist de Migração

- [ ] Identifique todos os botões na aplicação
- [ ] Classifique por hierarquia (Action vs Primary)
- [ ] Atualize classes Tailwind
- [ ] Teste contrastes WCAG
- [ ] Valide navegação por teclado
- [ ] Teste com usuários
- [ ] Documente casos especiais

---

## Recursos Adicionais

- [WCAG 2.1 Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Accessibility Report](./ACCESSIBILITY_REPORT.md)
- [Semantic Colors Documentation](../src/tokens/semantic/colors.ts)

---

**Última atualização**: 2026-01-28
**Versão**: 1.0.0
**Autor**: Claude Sonnet 4.5 para ClickMax Design System
