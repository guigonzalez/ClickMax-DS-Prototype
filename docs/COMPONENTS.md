# Componentes - ClickMax Design System R

Documentacao de todos os componentes implementados.

---

## Primitives

### Icon

Componente wrapper para icones Lucide com variantes consistentes.

#### Import

```tsx
import { Icon, Settings, Home, User } from '@clickmax/design-system';
// ou importar diretamente do lucide-react
import { Settings } from 'lucide-react';
```

#### Props

| Prop | Tipo | Default | Descricao |
|------|------|---------|-----------|
| `icon` | `LucideIcon` | - | Componente de icone do Lucide |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamanho do icone |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'inverse' \| 'accent' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | Cor semantica |

#### Tamanhos

```tsx
<Icon icon={Settings} size="xs" />  // 12px
<Icon icon={Settings} size="sm" />  // 16px
<Icon icon={Settings} size="md" />  // 20px
<Icon icon={Settings} size="lg" />  // 24px
<Icon icon={Settings} size="xl" />  // 32px
```

#### Cores

```tsx
// Cores de texto
<Icon icon={User} color="primary" />
<Icon icon={User} color="secondary" />
<Icon icon={User} color="tertiary" />

// Cores de feedback
<Icon icon={Check} color="success" />
<Icon icon={AlertCircle} color="warning" />
<Icon icon={AlertCircle} color="error" />
<Icon icon={Info} color="info" />
```

#### Uso Direto com Lucide

Tambem e possivel usar icones Lucide diretamente com classes Tailwind:

```tsx
import { Settings } from 'lucide-react';

<Settings className="h-5 w-5 text-text-primary" />
```

#### Icones Comuns

- **Navegacao**: Home, Settings, User, Users, Menu, X
- **Acoes**: Plus, Minus, Check, Edit, Trash2, Save
- **Direcionais**: ChevronDown, ChevronUp, ArrowLeft, ArrowRight
- **Feedback**: AlertCircle, AlertTriangle, Info, HelpCircle
- **Arquivos**: File, Folder, Download, Upload
- **Social**: Heart, Share2, MessageCircle, ThumbsUp

Visite [lucide.dev/icons](https://lucide.dev/icons) para explorar todos os 1000+ icones disponiveis.

---

### Button

Botao interativo com multiplas variantes e tamanhos.

#### Import

```tsx
import { Button } from '@clickmax/design-system';
```

#### Props

| Prop | Tipo | Default | Descricao |
|------|------|---------|-----------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'destructive' \| 'outline' \| 'link'` | `'primary'` | Estilo visual |
| `size` | `'sm' \| 'md' \| 'lg' \| 'icon'` | `'md'` | Tamanho |
| `asChild` | `boolean` | `false` | Renderiza como filho (Slot) |
| `disabled` | `boolean` | `false` | Estado desabilitado |

#### Variantes

```tsx
// Primary - Acoes principais
<Button variant="primary">Primary</Button>

// Secondary - Acoes secundarias
<Button variant="secondary">Secondary</Button>

// Ghost - Acoes terciarias
<Button variant="ghost">Ghost</Button>

// Destructive - Acoes destrutivas
<Button variant="destructive">Destructive</Button>

// Outline - Com borda
<Button variant="outline">Outline</Button>

// Link - Estilo de link
<Button variant="link">Link</Button>
```

#### Tamanhos

```tsx
<Button size="sm">Small (32px)</Button>
<Button size="md">Medium (40px)</Button>
<Button size="lg">Large (48px)</Button>
<Button size="icon">Icon Only</Button>
```

#### Com Icones

```tsx
import { Button, Icon, Plus, Download, Settings } from '@clickmax/design-system';

// Botao com icone e texto
<Button variant="primary">
  <Icon icon={Plus} size="sm" color="accent" />
  Criar Novo
</Button>

// Ou usando Lucide diretamente
<Button variant="secondary">
  <Download className="h-5 w-5" />
  Download
</Button>

// Botao apenas com icone
<Button variant="ghost" size="icon">
  <Icon icon={Settings} size="sm" />
</Button>
```

#### asChild Pattern

```tsx
import { Link } from 'react-router-dom';

// Renderiza como Link mantendo estilos do Button
<Button asChild>
  <Link to="/dashboard">Go to Dashboard</Link>
</Button>
```

#### Acessibilidade

- Focus visible com ring customizado
- Suporta navegacao por teclado
- Estados disabled com `aria-disabled`

---

### Input

Campo de entrada com suporte a label, descricao e erro.

#### Import

```tsx
import { Input } from '@clickmax/design-system';
```

#### Props

| Prop | Tipo | Default | Descricao |
|------|------|---------|-----------|
| `label` | `string` | - | Label do campo |
| `description` | `string` | - | Texto de ajuda |
| `error` | `string` | - | Mensagem de erro |
| `type` | `string` | `'text'` | Tipo do input |
| `disabled` | `boolean` | `false` | Estado desabilitado |

#### Uso Basico

```tsx
<Input
  label="Nome"
  placeholder="Digite seu nome"
/>
```

#### Com Descricao

```tsx
<Input
  label="Email"
  type="email"
  placeholder="seu@email.com"
  description="Nunca compartilharemos seu email."
/>
```

#### Com Erro

```tsx
<Input
  label="Senha"
  type="password"
  error="Senha deve ter no minimo 8 caracteres"
/>
```

#### Desabilitado

```tsx
<Input
  label="Campo bloqueado"
  disabled
  placeholder="Nao editavel"
/>
```

#### Acessibilidade

- IDs unicos gerados automaticamente com `useId()`
- `aria-describedby` para descricao e erro
- `aria-invalid` quando em estado de erro
- Labels associados corretamente

---

### Badge

Indicador de status ou rotulo.

#### Import

```tsx
import { Badge } from '@clickmax/design-system';
```

#### Props

| Prop | Tipo | Default | Descricao |
|------|------|---------|-----------|
| `variant` | `'default' \| 'success' \| 'warning' \| 'error' \| 'outline' \| 'secondary'` | `'default'` | Estilo visual |

#### Variantes

```tsx
// Default - Neutro
<Badge>Default</Badge>

// Success - Sucesso
<Badge variant="success">Success</Badge>

// Warning - Aviso
<Badge variant="warning">Warning</Badge>

// Error - Erro
<Badge variant="error">Error</Badge>

// Outline - Com borda
<Badge variant="outline">Outline</Badge>

// Secondary - Secundario
<Badge variant="secondary">Secondary</Badge>
```

#### Exemplos de Uso

```tsx
// Status de pedido
<Badge variant="success">Entregue</Badge>
<Badge variant="warning">Em transito</Badge>
<Badge variant="error">Cancelado</Badge>

// Tags
<Badge variant="outline">React</Badge>
<Badge variant="outline">TypeScript</Badge>

// Contadores
<Badge variant="secondary">99+</Badge>
```

---

## Layout

### Card

Container para agrupar conteudo relacionado.

#### Import

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@clickmax/design-system';
```

#### Subcomponentes

| Componente | Descricao |
|------------|-----------|
| `Card` | Container principal |
| `CardHeader` | Cabecalho com padding |
| `CardTitle` | Titulo (h3) |
| `CardDescription` | Subtitulo/descricao |
| `CardContent` | Area de conteudo |
| `CardFooter` | Rodape com borda superior |

#### Uso Basico

```tsx
<Card>
  <CardHeader>
    <CardTitle>Titulo do Card</CardTitle>
    <CardDescription>Descricao do card aqui.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Conteudo do card.</p>
  </CardContent>
</Card>
```

#### Com Footer

```tsx
<Card>
  <CardHeader>
    <CardTitle>Criar Conta</CardTitle>
    <CardDescription>
      Preencha os dados para criar sua conta.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <Input label="Nome" placeholder="Seu nome" />
    <Input label="Email" type="email" placeholder="seu@email.com" />
  </CardContent>
  <CardFooter>
    <Button variant="primary">Criar Conta</Button>
    <Button variant="ghost">Cancelar</Button>
  </CardFooter>
</Card>
```

#### Card Simples

```tsx
<Card className="p-6">
  <p>Card sem subcomponentes, apenas com padding.</p>
</Card>
```

#### Card de Notificacao

```tsx
<Card>
  <CardHeader>
    <CardTitle>Notificacoes</CardTitle>
    <CardDescription>Voce tem 3 mensagens nao lidas.</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      <div className="flex items-start gap-4 p-4 border border-border-default rounded-lg">
        <div className="h-2 w-2 rounded-full bg-feedback-success" />
        <div>
          <p className="text-sm font-medium">Sua ligacao foi confirmada.</p>
          <p className="text-sm text-text-secondary">1 hora atras</p>
        </div>
      </div>
    </div>
  </CardContent>
  <CardFooter>
    <Button variant="outline" className="w-full">
      Marcar todas como lidas
    </Button>
  </CardFooter>
</Card>
```

---

## Padroes de Composicao

### Formulario Completo

```tsx
<Card className="w-[400px]">
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>
      Entre com suas credenciais para acessar.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      <Input
        label="Email"
        type="email"
        placeholder="seu@email.com"
      />
      <Input
        label="Senha"
        type="password"
        placeholder="••••••••"
      />
    </div>
  </CardContent>
  <CardFooter>
    <Button variant="primary" className="w-full">
      Entrar
    </Button>
  </CardFooter>
</Card>
```

### Lista com Badges

```tsx
<Card>
  <CardHeader>
    <CardTitle>Pedidos Recentes</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span>Pedido #1234</span>
        <Badge variant="success">Entregue</Badge>
      </div>
      <div className="flex items-center justify-between">
        <span>Pedido #1235</span>
        <Badge variant="warning">Em transito</Badge>
      </div>
      <div className="flex items-center justify-between">
        <span>Pedido #1236</span>
        <Badge variant="error">Cancelado</Badge>
      </div>
    </div>
  </CardContent>
</Card>
```

### Acoes com Botoes

```tsx
<Card>
  <CardContent className="pt-6">
    <div className="flex flex-wrap gap-2">
      <Button variant="primary">Salvar</Button>
      <Button variant="secondary">Rascunho</Button>
      <Button variant="ghost">Cancelar</Button>
      <Button variant="destructive">Excluir</Button>
    </div>
  </CardContent>
</Card>
```
