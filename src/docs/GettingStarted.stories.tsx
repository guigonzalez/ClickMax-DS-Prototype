import type { Meta } from '@storybook/react';
import { Button } from '../components/foundation/Button';
import { Input } from '../components/forms/Input';
import { Badge } from '../components/foundation/Badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../components/layout/Card';
import { Plus, Download, Check } from 'lucide-react';

const meta: Meta = {
  title: 'A. Getting Started',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Bem-vindo ao ClickMax Design System R! Este guia irá ajudá-lo a começar rapidamente.',
      },
    },
  },
};

export default meta;

export const GettingStarted = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
        Começando com ClickMax Design System
      </h1>
      <p style={{ fontSize: '1.125rem', color: '#6B7280', marginBottom: '32px' }}>
        Um Design System moderno com hierarquia clara de cores interativas, componentes acessíveis e tokens semânticos baseados em Tailwind CSS 4.
      </p>

      <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2 style={{ fontSize: '1.875rem', fontWeight: '600', marginBottom: '16px' }}>
        📦 Instalação
      </h2>
      <pre
        style={{
          padding: '16px',
          backgroundColor: '#F3F4F6',
          borderRadius: '8px',
          overflow: 'auto',
        }}
      >
        <code>npm install @clickmax/design-system</code>
      </pre>

      <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2 style={{ fontSize: '1.875rem', fontWeight: '600', marginBottom: '16px' }}>
        ⚙️ Configuração Básica
      </h2>

      <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginTop: '24px', marginBottom: '12px' }}>
        1. Importe os estilos globais
      </h3>
      <p style={{ marginBottom: '16px' }}>
        No seu arquivo principal (geralmente <code>main.tsx</code> ou <code>App.tsx</code>):
      </p>
      <pre
        style={{
          padding: '16px',
          backgroundColor: '#F3F4F6',
          borderRadius: '8px',
          overflow: 'auto',
        }}
      >
        <code>import '@clickmax/design-system/styles.css';</code>
      </pre>

      <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2 style={{ fontSize: '1.875rem', fontWeight: '600', marginBottom: '16px' }}>
        🎨 Componentes Principais
      </h2>

      <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginTop: '24px', marginBottom: '12px' }}>
        Button - Hierarquia Clara
      </h3>
      <p style={{ marginBottom: '16px' }}>
        <strong>Primary (Neutral)</strong> para ações do sistema, <strong>Action (Fluor)</strong> para CTAs de conversão:
      </p>

      <div
        style={{
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          marginTop: '16px',
        }}
      >
        <div style={{ marginBottom: '16px' }}>
          <p style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '8px' }}>
            ✅ <strong>Correto:</strong> Primary para voltar (sistema), Action para CTA principal
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Button variant="primary">Voltar</Button>
            <Button variant="action">
              <Plus className="h-5 w-5" />
              Criar Conta Grátis
            </Button>
          </div>
        </div>

        <div style={{ marginTop: '24px' }}>
          <p style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '8px' }}>
            Outras variantes:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>
      </div>

      <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginTop: '24px', marginBottom: '12px' }}>
        Badge - Indicadores Visuais
      </h3>
      <p style={{ marginBottom: '16px' }}>
        Badges seguem a mesma hierarquia: <strong>Primary</strong>, <strong>Action</strong>, e variantes de feedback:
      </p>

      <div
        style={{
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          marginTop: '16px',
        }}
      >
        <div style={{ marginBottom: '16px' }}>
          <p style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '8px' }}>
            Interactive:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="action">Action</Badge>
          </div>
        </div>

        <div>
          <p style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '8px' }}>
            Feedback:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Badge variant="success">
              <Check className="h-3 w-3" />
              Success
            </Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </div>
      </div>

      <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginTop: '24px', marginBottom: '12px' }}>
        Card
      </h3>
      <p style={{ marginBottom: '16px' }}>
        Container versátil para agrupar conteúdo relacionado:
      </p>

      <div
        style={{
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          marginTop: '16px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Card de Exemplo</CardTitle>
            <CardDescription>
              Este é um exemplo de card do Design System.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Input label="Nome" placeholder="Digite seu nome" />
              <Input label="Email" type="email" placeholder="seu@email.com" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="primary" className="w-full">
              Enviar
            </Button>
          </CardFooter>
        </Card>
      </div>

      <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2 style={{ fontSize: '1.875rem', fontWeight: '600', marginBottom: '16px' }}>
        🎯 Ícones (Lucide React)
      </h2>
      <p style={{ marginBottom: '16px' }}>
        O Design System inclui a biblioteca Lucide React com 1000+ ícones:
      </p>

      <div
        style={{
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          marginTop: '16px',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <Button variant="primary">
            <Plus className="h-5 w-5" />
            Criar
          </Button>
          <Button variant="secondary">
            <Download className="h-5 w-5" />
            Download
          </Button>
        </div>
      </div>

      <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2 style={{ fontSize: '1.875rem', fontWeight: '600', marginBottom: '16px' }}>
        🎨 Hierarquia de Cores Interativas
      </h2>
      <p style={{ marginBottom: '16px' }}>
        O Design System implementa uma hierarquia clara de 5 níveis:
      </p>

      <div
        style={{
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          marginTop: '16px',
        }}
      >
        <ul style={{ listStyle: 'none', paddingLeft: '0', marginBottom: '0' }}>
          <li style={{ marginBottom: '12px' }}>
            <strong>1. Primary (Neutral 900)</strong> - Ações do sistema, navegação, botões padrão
          </li>
          <li style={{ marginBottom: '12px' }}>
            <strong>2. Action (Fluor 500)</strong> - CTAs de conversão, ações críticas para o negócio
          </li>
          <li style={{ marginBottom: '12px' }}>
            <strong>3. Secondary (Azure 500)</strong> - Ações alternativas, menos destaque
          </li>
          <li style={{ marginBottom: '12px' }}>
            <strong>4. Tertiary (Purplish 500)</strong> - Ajuda, informações, documentação
          </li>
          <li>
            <strong>5. Ghost (Transparente)</strong> - Ações discretas, cancelamentos
          </li>
        </ul>
      </div>

      <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2 style={{ fontSize: '1.875rem', fontWeight: '600', marginBottom: '16px' }}>
        📚 Próximos Passos
      </h2>

      <div style={{ marginTop: '16px' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '12px' }}>
          Explore a documentação
        </h3>
        <ul style={{ listStyle: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
          <li><strong>Foundation</strong> - Tokens de cores, tipografia, espaçamento e efeitos</li>
          <li><strong>Components</strong> - 9 componentes implementados com variantes completas</li>
          <li><strong>Playground</strong> - Experimente combinações de componentes interativamente</li>
        </ul>

        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '12px', marginTop: '24px' }}>
          Componentes disponíveis
        </h3>
        <ul style={{ listStyle: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
          <li><strong>Button</strong> - 8 variantes (primary, action, secondary, tertiary, ghost, destructive, outline, link)</li>
          <li><strong>Badge</strong> - 9 variantes com hierarquia interativa</li>
          <li><strong>Input</strong> - Com label, descrição e estados de erro</li>
          <li><strong>Checkbox, Radio, Switch</strong> - Componentes de formulário acessíveis</li>
          <li><strong>Textarea</strong> - Área de texto com validação</li>
          <li><strong>Card</strong> - Container versátil com subcomponentes</li>
          <li><strong>Icon</strong> - Wrapper para Lucide React (1000+ ícones)</li>
        </ul>
      </div>

      <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2 style={{ fontSize: '1.875rem', fontWeight: '600', marginBottom: '16px' }}>
        ♿ Acessibilidade & Testes
      </h2>
      <p style={{ marginBottom: '16px' }}>
        Todos os componentes seguem as melhores práticas de acessibilidade e incluem testes automatizados:
      </p>
      <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
        <li>✅ <strong>Navegação por teclado</strong> - Todos os componentes interativos são acessíveis via teclado</li>
        <li>✅ <strong>ARIA attributes</strong> - Uso correto de roles, states e properties (Radix UI)</li>
        <li>✅ <strong>Contraste adequado</strong> - Cores seguem WCAG AA/AAA guidelines</li>
        <li>✅ <strong>Screen reader friendly</strong> - Labels e descrições apropriadas</li>
        <li>✅ <strong>Play functions</strong> - Testes automatizados de interação no Storybook</li>
      </ul>

      <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2 style={{ fontSize: '1.875rem', fontWeight: '600', marginBottom: '16px' }}>
        🛠️ Stack Tecnológica
      </h2>
      <ul style={{ listStyle: 'disc', paddingLeft: '24px' }}>
        <li><strong>React 19</strong> - Framework UI</li>
        <li><strong>TypeScript 5.7</strong> - Type safety</li>
        <li><strong>Tailwind CSS 4</strong> - CSS-first configuration</li>
        <li><strong>Radix UI</strong> - Primitivos acessíveis</li>
        <li><strong>Class Variance Authority</strong> - Gerenciamento de variantes</li>
        <li><strong>Lucide React</strong> - Biblioteca de ícones (1000+)</li>
        <li><strong>Storybook 10.2</strong> - Documentação interativa</li>
      </ul>
    </div>
  );
};

GettingStarted.parameters = {
  docs: {
    page: null,
  },
};
