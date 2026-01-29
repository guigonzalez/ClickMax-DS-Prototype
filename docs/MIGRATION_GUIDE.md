# 🔄 Guia de Migração - Nova Estrutura

Para quem está trabalhando com versões antigas do projeto, este guia ajuda a migrar para a nova estrutura.

---

## 📋 Mudanças de Imports

### Componentes Foundation

```diff
- import { Button } from './components/primitives/Button';
+ import { Button } from './components/foundation/Button';

- import { Badge } from './components/primitives/Badge';
+ import { Badge } from './components/foundation/Badge';

- import { Icon } from './components/primitives/Icon';
+ import { Icon } from './components/foundation/Icon';
```

### Componentes Typography

```diff
- import { Heading } from './components/primitives/Heading';
+ import { Heading } from './components/typography/Heading';

- import { Text } from './components/primitives/Text';
+ import { Text } from './components/typography/Text';
```

### Componentes Forms

```diff
- import { Input } from './components/primitives/Input';
+ import { Input } from './components/forms/Input';

# Outros componentes de forms não mudaram
✅ import { Checkbox } from './components/forms/Checkbox';
✅ import { Radio } from './components/forms/Radio';
✅ import { Switch } from './components/forms/Switch';
✅ import { Textarea } from './components/forms/Textarea';
```

### Utilitários

```diff
- import { cn } from '@/lib/utils';
+ import { cn } from '@/utils';
```

---

## 🔍 Buscar e Substituir

Use estes comandos para atualizar automaticamente:

### macOS/Linux

```bash
# Atualizar Button
find . -type f -name "*.tsx" -exec sed -i '' "s|from './components/primitives/Button'|from './components/foundation/Button'|g" {} \;

# Atualizar Badge
find . -type f -name "*.tsx" -exec sed -i '' "s|from './components/primitives/Badge'|from './components/foundation/Badge'|g" {} \;

# Atualizar Icon
find . -type f -name "*.tsx" -exec sed -i '' "s|from './components/primitives/Icon'|from './components/foundation/Icon'|g" {} \;

# Atualizar Heading
find . -type f -name "*.tsx" -exec sed -i '' "s|from './components/primitives/Heading'|from './components/typography/Heading'|g" {} \;

# Atualizar Text
find . -type f -name "*.tsx" -exec sed -i '' "s|from './components/primitives/Text'|from './components/typography/Text'|g" {} \;

# Atualizar Input
find . -type f -name "*.tsx" -exec sed -i '' "s|from './components/primitives/Input'|from './components/forms/Input'|g" {} \;

# Atualizar utils
find . -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' "s|from '@/lib/utils'|from '@/utils'|g" {} \;
```

### VS Code (Search & Replace)

1. Abra a busca global (Cmd+Shift+F)
2. Ative Replace mode
3. Use estas substituições:

```
# Foundation
Find:    from './components/primitives/Button'
Replace: from './components/foundation/Button'

Find:    from './components/primitives/Badge'
Replace: from './components/foundation/Badge'

Find:    from './components/primitives/Icon'
Replace: from './components/foundation/Icon'

# Typography
Find:    from './components/primitives/Heading'
Replace: from './components/typography/Heading'

Find:    from './components/primitives/Text'
Replace: from './components/typography/Text'

# Forms
Find:    from './components/primitives/Input'
Replace: from './components/forms/Input'

# Utils
Find:    from '@/lib/utils'
Replace: from '@/utils'
```

---

## ✅ Checklist de Migração

Após fazer as mudanças, verifique:

- [ ] Todos os imports foram atualizados
- [ ] Não há mais referências a `primitives/`
- [ ] Não há mais referências a `@/lib/utils`
- [ ] `npm run build` executa sem erros
- [ ] `npm run storybook` funciona corretamente
- [ ] TypeScript não reporta erros

---

## 🛠️ Comandos de Verificação

```bash
# Verificar se ainda há imports antigos
grep -r "primitives/Button" src/
grep -r "primitives/Badge" src/
grep -r "primitives/Icon" src/
grep -r "primitives/Heading" src/
grep -r "primitives/Text" src/
grep -r "primitives/Input" src/
grep -r "@/lib/utils" src/

# Se não retornar nada, está OK! ✅
```

---

## 📦 Usando Barrel Exports

Agora você pode importar múltiplos componentes de uma categoria:

```tsx
// Antes (imports individuais)
import { Button } from './components/foundation/Button';
import { Badge } from './components/foundation/Badge';
import { Icon } from './components/foundation/Icon';

// Depois (barrel export)
import { Button, Badge, Icon } from './components/foundation';
```

```tsx
// Typography
import { Heading, Text } from './components/typography';

// Forms
import { Input, Checkbox, Radio, Switch, Textarea } from './components/forms';

// Layout
import { Card, CardHeader, CardTitle, CardContent } from './components/layout';
```

---

## ⚠️ Breaking Changes

**NENHUM!** 🎉

Esta reorganização foi feita de forma que:
- ✅ Nenhuma API de componente mudou
- ✅ Props permanecem as mesmas
- ✅ Comportamento é idêntico
- ✅ Apenas os paths de import mudaram

---

## 🐛 Problemas Comuns

### Erro: Module not found

**Problema:**
```
Module not found: Can't resolve './components/primitives/Button'
```

**Solução:**
Atualize o import para a nova estrutura:
```tsx
import { Button } from './components/foundation/Button';
```

### Erro: Cannot find module '@/lib/utils'

**Problema:**
```
Cannot find module '@/lib/utils'
```

**Solução:**
```tsx
import { cn } from '@/utils';
```

### TypeScript Errors

**Problema:**
Erros de tipo após migração

**Solução:**
1. Limpar cache: `rm -rf node_modules/.cache`
2. Restart TypeScript server no VS Code
3. Rebuild: `npm run build`

---

## 📞 Precisa de Ajuda?

Se encontrar problemas durante a migração:

1. Verifique [`REORGANIZATION_COMPLETE.md`](./REORGANIZATION_COMPLETE.md)
2. Confira a estrutura em [`REORGANIZATION_PLAN.md`](./REORGANIZATION_PLAN.md)
3. Consulte os exemplos em `src/App.tsx` e `src/components/playground/`

---

**Última atualização:** 28/01/2026
**Versão:** 0.1.1
