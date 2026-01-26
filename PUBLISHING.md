# Guia de Publicação no NPM

Este documento explica como publicar o **@clickmax/design-system** no NPM.

## Pré-requisitos

### 1. Conta NPM
- Você precisa ter uma conta no [npmjs.com](https://www.npmjs.com/)
- Username: `guigonzalez`

### 2. Login no NPM CLI

```bash
npm login
```

Você será solicitado a fornecer:
- **Username**: guigonzalez
- **Password**: sua senha do NPM
- **Email**: seu email do NPM
- **One-time password**: código 2FA (se habilitado)

Para verificar se você está logado:

```bash
npm whoami
# Deve retornar: guigonzalez
```

### 3. Organization no NPM (OPCIONAL para pacotes públicos)

**IMPORTANTE**: Para pacotes públicos com `--access public`, você **NÃO precisa** criar uma organization. O NPM permite publicar pacotes com escopo (@clickmax) diretamente como público e gratuito.

#### Opção A: Publicar Direto (Recomendado - Gratuito)
Simplesmente publique com `--access public` (já configurado nos scripts):
```bash
npm run publish:latest --otp=123456
```

#### Opção B: Criar Organization (Apenas se necessário)
Se você planeja adicionar membros ou gerenciar múltiplos pacotes:

1. Acesse https://www.npmjs.com/
2. Clique em seu avatar → "Add Organization"
3. Nome da organization: **clickmax**
4. Tipo: **Free** (permite até X membros)

Ou via CLI:
```bash
npm org create clickmax
```

**Nota**: Para primeira publicação de pacote público, a Opção A é suficiente e gratuita.

## Processo de Publicação

### 1. Verificar versão

Antes de publicar, verifique e atualize a versão no `package.json`:

```bash
# Patch version (0.1.0 → 0.1.1) - bug fixes
npm version patch

# Minor version (0.1.0 → 0.2.0) - new features
npm version minor

# Major version (0.1.0 → 1.0.0) - breaking changes
npm version major
```

### 2. Testar localmente (dry-run)

Sempre teste antes de publicar:

```bash
npm run publish:dry
```

Este comando irá:
- ✅ Limpar pasta `dist/`
- ✅ Fazer build completo
- ✅ Verificar tipos TypeScript
- ✅ Simular publicação
- ✅ Mostrar o conteúdo do pacote (108 arquivos)
- ✅ Mostrar tamanho do pacote (29.9 kB compressed)

### 3. Publicar como Pacote Público (IMPORTANTE)

**Todos os pacotes com escopo `@clickmax` devem ser públicos (gratuitos).**

Os scripts já incluem `--access public` automaticamente:

```bash
npm run publish:beta    # Inclui --access public
npm run publish:latest  # Inclui --access public
```

### 4. Autenticação 2FA (Two-Factor Authentication)

Se sua conta NPM tem 2FA habilitado, você precisará fornecer o código OTP:

```bash
# Com 2FA - pegue o código do seu autenticador (Google Authenticator, Authy, etc)
npm run publish:latest --otp=123456

# Ou comando direto
npm publish --access public --otp=123456
```

**Importante**: O código 2FA expira rapidamente (30 segundos), então tenha-o pronto antes de executar o comando.

### 5. Publicar versão Beta (recomendado primeiro)

Para testar em produção sem afetar a versão `latest`:

```bash
# Sem 2FA
npm run publish:beta

# Com 2FA
npm run publish:beta --otp=123456
```

Instalar versão beta:

```bash
npm install @clickmax/design-system@beta
```

### 6. Publicar versão Latest (produção)

Quando estiver pronto para publicação oficial:

```bash
# Sem 2FA
npm run publish:latest

# Com 2FA
npm run publish:latest --otp=123456
```

## Estrutura do Pacote Publicado

```
@clickmax/design-system@0.1.0
├── dist/
│   ├── cjs/              # CommonJS (36.5 kB)
│   │   ├── index.cjs
│   │   └── index.cjs.LICENSE.txt
│   ├── esm/              # ES Modules (32.6 kB)
│   │   ├── index.js
│   │   └── index.js.LICENSE.txt
│   ├── types/            # TypeScript declarations (108 .d.ts files)
│   └── styles.css        # Global CSS (6.5 kB)
├── LICENSE
├── README.md
└── package.json
```

## Verificações Automáticas (prepublishOnly)

Antes de cada publicação, o script `prepublishOnly` executa automaticamente:

1. **Clean**: Remove `dist/` e `storybook-static/`
2. **Build**: Gera ESM, CJS, types e CSS
3. **Type-check**: Verifica se não há erros TypeScript

Se qualquer etapa falhar, a publicação é cancelada.

## Após Publicação

### Verificar pacote no NPM

```bash
# Ver informações do pacote
npm view @clickmax/design-system

# Ver todas as versões
npm view @clickmax/design-system versions

# Baixar e testar
npm install @clickmax/design-system
```

### Atualizar documentação

1. Atualizar badges no README.md com versão correta
2. Criar GitHub Release com changelog
3. Anunciar nos canais relevantes

### Revogar publicação (apenas primeiras 72h)

⚠️ **Use com cuidado!** Só funciona nas primeiras 72 horas:

```bash
npm unpublish @clickmax/design-system@0.1.0
```

Para versões antigas (após 72h), use deprecate:

```bash
npm deprecate @clickmax/design-system@0.1.0 "Use version 0.2.0 instead"
```

## Troubleshooting

### Erro: 402 Payment Required - You must sign up for private packages

**Causa**: Pacotes com escopo (@clickmax) são privados por padrão e requerem pagamento.

**Solução**: Use `--access public` para publicar gratuitamente:
```bash
npm publish --access public --otp=123456
```

Ou use os scripts que já incluem `--access public`:
```bash
npm run publish:latest --otp=123456
```

### Erro: EOTP - This operation requires a one-time password

**Causa**: Sua conta tem 2FA habilitado.

**Solução**: Forneça o código do seu autenticador:
```bash
npm publish --access public --otp=123456
```

**Dica**: Tenha o código pronto antes de executar, pois ele expira em 30 segundos.

### Erro: Access token expired

```bash
npm logout
npm login
```

### Erro: No permission to publish

Certifique-se de:
1. Ter criado a organization "clickmax"
2. Ter permissão de publicação na org
3. O nome do pacote está correto: `@clickmax/design-system`
4. Usar `--access public` para pacotes gratuitos

### Erro: Package name already taken

Se `@clickmax/design-system` já existe:
- Use outro nome: `@clickmax/design-system-r`
- Ou contate o dono do pacote existente

## Comandos Úteis

```bash
# Ver conteúdo do pacote antes de publicar
npm pack --dry-run

# Criar tarball local para inspeção
npm pack

# Ver dist-tags
npm dist-tag ls @clickmax/design-system

# Adicionar tag a versão específica
npm dist-tag add @clickmax/design-system@0.1.0 stable

# Remover tag
npm dist-tag rm @clickmax/design-system beta
```

## Boas Práticas

1. ✅ Sempre teste com `npm run publish:dry` antes
2. ✅ Use versionamento semântico (SemVer)
3. ✅ Publique betas antes de versões estáveis
4. ✅ Mantenha CHANGELOG.md atualizado
5. ✅ Crie GitHub Releases para versões importantes
6. ✅ Teste o pacote instalando-o em projeto separado
7. ✅ Nunca publique tokens/secrets no código
8. ✅ Use `.npmignore` para excluir arquivos desnecessários

## Próximos Passos Recomendados

1. **Configurar CI/CD**
   - GitHub Actions para build automático
   - Publicação automática em tags

2. **Adicionar badges ao README**
   ```markdown
   [![npm version](https://img.shields.io/npm/v/@clickmax/design-system.svg)](https://www.npmjs.com/package/@clickmax/design-system)
   [![npm downloads](https://img.shields.io/npm/dm/@clickmax/design-system.svg)](https://www.npmjs.com/package/@clickmax/design-system)
   ```

3. **Configurar Storybook Deploy**
   - Chromatic para visual regression
   - GitHub Pages para documentação

4. **Monitoramento**
   - npm download stats
   - Bundle size tracking
   - GitHub stars/issues

---

## 🚀 Comando Rápido para Publicar

### Com 2FA habilitado (recomendado):

```bash
# 1. Faça login (se ainda não estiver logado)
npm login

# 2. Pegue o código 2FA do seu autenticador

# 3. Publique (substitua 123456 pelo código real)
npm run publish:latest --otp=123456
```

### Sem 2FA:

```bash
npm login
npm run publish:latest
```

### Apenas para testar (beta):

```bash
npm run publish:beta --otp=123456
```

---

**Pronto para publicar!** 🚀
