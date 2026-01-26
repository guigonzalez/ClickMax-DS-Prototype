import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import {
  Settings,
  Home,
  User,
  Bell,
  Search,
  Heart,
  Check,
  AlertCircle,
  Info,
} from 'lucide-react';

const meta: Meta<typeof Icon> = {
  title: 'Primitives/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Icon é um componente wrapper para ícones Lucide que fornece variantes consistentes de tamanho e cor. Use este componente para garantir que todos os ícones sigam os padrões do Design System. Baseado na biblioteca Lucide React com mais de 1.000 ícones disponíveis.',
      },
    },
  },
  argTypes: {
    icon: {
      control: false,
      description: 'Componente de ícone do Lucide React',
      table: {
        type: { summary: 'LucideIcon' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Tamanho do ícone',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'inverse',
        'accent',
        'success',
        'warning',
        'error',
        'info',
      ],
      description: 'Cor semântica do ícone',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
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
    icon: Settings,
    size: 'md',
    color: 'primary',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: Settings,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Settings} size="xs" />
        <span className="text-xs text-text-secondary">xs (12px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Settings} size="sm" />
        <span className="text-xs text-text-secondary">sm (16px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Settings} size="md" />
        <span className="text-xs text-text-secondary">md (20px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Settings} size="lg" />
        <span className="text-xs text-text-secondary">lg (24px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Settings} size="xl" />
        <span className="text-xs text-text-secondary">xl (32px)</span>
      </div>
    </div>
  ),
};

export const TextColors: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Icon icon={User} color="primary" />
        <span className="text-sm text-text-secondary">primary</span>
      </div>
      <div className="flex items-center gap-3">
        <Icon icon={User} color="secondary" />
        <span className="text-sm text-text-secondary">secondary</span>
      </div>
      <div className="flex items-center gap-3">
        <Icon icon={User} color="tertiary" />
        <span className="text-sm text-text-secondary">tertiary</span>
      </div>
      <div className="flex items-center gap-3 bg-bg-inverse p-2 rounded">
        <Icon icon={User} color="inverse" />
        <span className="text-sm text-text-inverse">inverse</span>
      </div>
      <div className="flex items-center gap-3 bg-interactive-default p-2 rounded">
        <Icon icon={User} color="accent" />
        <span className="text-sm text-text-accent">accent</span>
      </div>
    </div>
  ),
};

export const FeedbackColors: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Icon icon={Check} color="success" />
        <span className="text-sm text-text-secondary">success</span>
      </div>
      <div className="flex items-center gap-3">
        <Icon icon={AlertCircle} color="warning" />
        <span className="text-sm text-text-secondary">warning</span>
      </div>
      <div className="flex items-center gap-3">
        <Icon icon={AlertCircle} color="error" />
        <span className="text-sm text-text-secondary">error</span>
      </div>
      <div className="flex items-center gap-3">
        <Icon icon={Info} color="info" />
        <span className="text-sm text-text-secondary">info</span>
      </div>
    </div>
  ),
};

export const CommonIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Home} size="lg" />
        <span className="text-xs text-text-secondary">Home</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={User} size="lg" />
        <span className="text-xs text-text-secondary">User</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Settings} size="lg" />
        <span className="text-xs text-text-secondary">Settings</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Bell} size="lg" />
        <span className="text-xs text-text-secondary">Bell</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Search} size="lg" />
        <span className="text-xs text-text-secondary">Search</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Heart} size="lg" />
        <span className="text-xs text-text-secondary">Heart</span>
      </div>
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <button className="inline-flex items-center gap-2 px-4 h-10 bg-interactive-default text-text-accent rounded-lg hover:bg-interactive-hover transition-colors">
        <Icon icon={Settings} size="sm" color="accent" />
        Configurações
      </button>
      <button className="inline-flex items-center gap-2 px-4 h-10 bg-bg-secondary text-text-primary rounded-lg hover:bg-bg-tertiary transition-colors">
        <Icon icon={Home} size="sm" />
        Home
      </button>
      <button className="inline-flex items-center justify-center h-10 w-10 bg-bg-secondary text-text-primary rounded-lg hover:bg-bg-tertiary transition-colors">
        <Icon icon={Bell} size="sm" />
      </button>
    </div>
  ),
};
