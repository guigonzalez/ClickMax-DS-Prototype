import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import {
  Check,
  X,
  AlertTriangle,
  Clock,
  Zap,
  TrendingUp,
  Star,
  ShoppingCart,
  Package,
  Truck,
} from 'lucide-react';

const meta: Meta<typeof Badge> = {
  title: 'Primitives/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Badges são indicadores visuais compactos usados para rotular, categorizar ou exibir status de forma destacada. Use badges para mostrar contadores, estados de processo, tags ou categorias. São ideais para chamar atenção para informações importantes sem ocupar muito espaço.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'success',
        'warning',
        'error',
        'outline',
        'secondary',
      ],
      description: 'Variante visual do badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    children: {
      control: 'text',
      description: 'Conteúdo do badge',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: 'text',
      description: 'Classes CSS adicionais',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    variant: 'default',
    children: 'Badge',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="secondary">Secondary</Badge>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="success" className="inline-flex items-center gap-1">
        <Check className="h-3 w-3" />
        Concluído
      </Badge>
      <Badge variant="error" className="inline-flex items-center gap-1">
        <X className="h-3 w-3" />
        Cancelado
      </Badge>
      <Badge variant="warning" className="inline-flex items-center gap-1">
        <AlertTriangle className="h-3 w-3" />
        Pendente
      </Badge>
      <Badge variant="default" className="inline-flex items-center gap-1">
        <Clock className="h-3 w-3" />
        Em andamento
      </Badge>
      <Badge variant="outline" className="inline-flex items-center gap-1">
        <Zap className="h-3 w-3" />
        Urgente
      </Badge>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="success" className="inline-flex items-center">
        <Check className="h-3 w-3" />
      </Badge>
      <Badge variant="error" className="inline-flex items-center">
        <X className="h-3 w-3" />
      </Badge>
      <Badge variant="warning" className="inline-flex items-center">
        <AlertTriangle className="h-3 w-3" />
      </Badge>
      <Badge variant="default" className="inline-flex items-center">
        <Star className="h-3 w-3" />
      </Badge>
    </div>
  ),
};

export const WithNumbers: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <div className="flex items-center gap-2">
        <span className="text-sm text-text-primary">Notificações</span>
        <Badge variant="error">12</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-text-primary">Carrinho</span>
        <Badge variant="default" className="inline-flex items-center gap-1">
          <ShoppingCart className="h-3 w-3" />3
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-text-primary">Mensagens</span>
        <Badge variant="success">99+</Badge>
      </div>
    </div>
  ),
};

export const StatusExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3">
          Status de Pedido
        </h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="warning" className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Processando
          </Badge>
          <Badge variant="default" className="inline-flex items-center gap-1">
            <Package className="h-3 w-3" />
            Embalado
          </Badge>
          <Badge variant="default" className="inline-flex items-center gap-1">
            <Truck className="h-3 w-3" />
            Em trânsito
          </Badge>
          <Badge variant="success" className="inline-flex items-center gap-1">
            <Check className="h-3 w-3" />
            Entregue
          </Badge>
          <Badge variant="error" className="inline-flex items-center gap-1">
            <X className="h-3 w-3" />
            Cancelado
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3">
          Prioridades
        </h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="secondary">Baixa</Badge>
          <Badge variant="default">Normal</Badge>
          <Badge variant="warning" className="inline-flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            Alta
          </Badge>
          <Badge variant="error" className="inline-flex items-center gap-1">
            <Zap className="h-3 w-3" />
            Urgente
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3">Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Tailwind</Badge>
          <Badge variant="outline">Storybook</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3">
          Features
        </h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="success" className="inline-flex items-center gap-1">
            <Star className="h-3 w-3" />
            Premium
          </Badge>
          <Badge variant="default" className="inline-flex items-center gap-1">
            <Zap className="h-3 w-3" />
            Rápido
          </Badge>
          <Badge variant="secondary">Beta</Badge>
        </div>
      </div>
    </div>
  ),
};
