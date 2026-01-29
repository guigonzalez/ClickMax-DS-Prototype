import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';
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
  Mail,
  User,
  Heart,
  Bell,
  Info as InfoIcon,
  AlertCircle,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

// Icon mapping for controls
const iconMap = {
  none: null,
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
  Mail,
  User,
  Heart,
  Bell,
  Info: InfoIcon,
  AlertCircle,
  CheckCircle2,
  XCircle,
};

const meta: Meta<typeof Badge> = {
  title: 'C. Components/Badge',
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
        'primary',
        'action',
        'success',
        'warning',
        'error',
        'info',
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
    leftIcon: {
      control: 'select',
      options: Object.keys(iconMap),
      description: 'Ícone à esquerda do texto',
      table: {
        type: { summary: 'LucideIcon | null' },
      },
    },
    rightIcon: {
      control: 'select',
      options: Object.keys(iconMap),
      description: 'Ícone à direita do texto',
      table: {
        type: { summary: 'LucideIcon | null' },
      },
    },
  },
  args: {
    variant: 'default',
    children: 'Badge',
  },
  render: ({ leftIcon, rightIcon, children, ...args }) => {
    const LeftIconComponent = leftIcon && leftIcon !== 'none' ? iconMap[leftIcon as keyof typeof iconMap] : null;
    const RightIconComponent = rightIcon && rightIcon !== 'none' ? iconMap[rightIcon as keyof typeof iconMap] : null;

    return (
      <Badge {...args} className="inline-flex items-center gap-1">
        {LeftIconComponent && <LeftIconComponent className="h-3 w-3" />}
        {children}
        {RightIconComponent && <RightIconComponent className="h-3 w-3" />}
      </Badge>
    );
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

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Action: Story = {
  args: {
    variant: 'action',
    children: 'Action',
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

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info',
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
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3">
          Interactive Badges
        </h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="primary" data-testid="badge-primary">Primary</Badge>
          <Badge variant="action" data-testid="badge-action">Action</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3">
          Feedback Badges
        </h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="success" data-testid="badge-success">Success</Badge>
          <Badge variant="warning" data-testid="badge-warning">Warning</Badge>
          <Badge variant="error" data-testid="badge-error">Error</Badge>
          <Badge variant="info" data-testid="badge-info">Info</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3">
          Neutral Badges
        </h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="default" data-testid="badge-default">Default</Badge>
          <Badge variant="outline" data-testid="badge-outline">Outline</Badge>
          <Badge variant="secondary" data-testid="badge-secondary">Secondary</Badge>
        </div>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test that all badge variants are rendered
    const defaultBadge = canvas.getByTestId('badge-default');
    const primaryBadge = canvas.getByTestId('badge-primary');
    const actionBadge = canvas.getByTestId('badge-action');

    // Verify badges have correct text content
    expect(defaultBadge).toHaveTextContent('Default');
    expect(primaryBadge).toHaveTextContent('Primary');
    expect(actionBadge).toHaveTextContent('Action');

    // Verify default badge has visible background (not transparent)
    const defaultStyles = window.getComputedStyle(defaultBadge);
    expect(defaultStyles.backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
    expect(defaultStyles.backgroundColor).not.toBe('transparent');

    // Verify interactive badges have proper contrast
    const primaryStyles = window.getComputedStyle(primaryBadge);
    const actionStyles = window.getComputedStyle(actionBadge);

    // Primary should have dark background
    expect(primaryStyles.backgroundColor).toContain('rgb(31, 33, 35)'); // neutral-900

    // Action should have fluor background
    expect(actionStyles.backgroundColor).toContain('rgb(212, 255, 0)'); // fluor-500
  },
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

export const Playground: Story = {
  args: {
    variant: 'default',
    children: 'Badge',
    leftIcon: 'none',
    rightIcon: 'none',
  },
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
