import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import {
  Plus,
  Download,
  Upload,
  Save,
  Settings,
  Search,
  Trash2,
  Edit,
  Send,
  LogOut,
  RefreshCw,
  Check,
} from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Buttons são elementos interativos fundamentais que acionam ações na interface. Use a variante "primary" para ações principais, "secondary" para ações complementares, "ghost" para ações terciárias, "destructive" para ações irreversíveis e "outline" quando precisar de destaque visual sem peso. Suporta o padrão "asChild" via Radix Slot para renderização polimórfica.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'ghost',
        'destructive',
        'outline',
        'link',
      ],
      description: 'Variante visual do botão',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
      description: 'Tamanho do botão',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    asChild: {
      control: 'boolean',
      description: 'Renderiza como filho usando Radix Slot',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'Conteúdo do botão',
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
    onClick: {
      action: 'clicked',
      description: 'Função chamada ao clicar',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    asChild: false,
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const WithIconLeft: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">
        <Plus className="h-5 w-5" />
        Criar Novo
      </Button>
      <Button variant="secondary">
        <Download className="h-5 w-5" />
        Download
      </Button>
      <Button variant="ghost">
        <Search className="h-5 w-5" />
        Buscar
      </Button>
      <Button variant="destructive">
        <Trash2 className="h-5 w-5" />
        Excluir
      </Button>
      <Button variant="outline">
        <Edit className="h-5 w-5" />
        Editar
      </Button>
    </div>
  ),
};

export const WithIconRight: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">
        Enviar
        <Send className="h-5 w-5" />
      </Button>
      <Button variant="secondary">
        Sair
        <LogOut className="h-5 w-5" />
      </Button>
      <Button variant="ghost">
        Atualizar
        <RefreshCw className="h-5 w-5" />
      </Button>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary" size="icon">
        <Plus className="h-5 w-5" />
      </Button>
      <Button variant="secondary" size="icon">
        <Settings className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon">
        <Search className="h-5 w-5" />
      </Button>
      <Button variant="destructive" size="icon">
        <Trash2 className="h-5 w-5" />
      </Button>
      <Button variant="outline" size="icon">
        <Edit className="h-5 w-5" />
      </Button>
    </div>
  ),
};

export const IconSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Button size="sm">
        <Plus className="h-4 w-4" />
        Small
      </Button>
      <Button size="md">
        <Plus className="h-5 w-5" />
        Medium
      </Button>
      <Button size="lg">
        <Plus className="h-5 w-5" />
        Large
      </Button>
    </div>
  ),
};

export const LoadingState: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary" disabled>
        <RefreshCw className="h-5 w-5 animate-spin" />
        Carregando...
      </Button>
      <Button variant="secondary" disabled>
        <RefreshCw className="h-5 w-5 animate-spin" />
        Processando
      </Button>
    </div>
  ),
};

export const SuccessState: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">
        <Check className="h-5 w-5" />
        Salvo com Sucesso
      </Button>
      <Button variant="outline">
        <Check className="h-5 w-5" />
        Concluído
      </Button>
    </div>
  ),
};

export const CommonActions: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3">
          Ações de Formulário
        </h3>
        <div className="flex gap-3">
          <Button variant="primary">
            <Save className="h-5 w-5" />
            Salvar
          </Button>
          <Button variant="secondary">Cancelar</Button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3">
          Upload/Download
        </h3>
        <div className="flex gap-3">
          <Button variant="primary">
            <Upload className="h-5 w-5" />
            Upload
          </Button>
          <Button variant="outline">
            <Download className="h-5 w-5" />
            Download
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3">
          Ações Destrutivas
        </h3>
        <div className="flex gap-3">
          <Button variant="destructive">
            <Trash2 className="h-5 w-5" />
            Excluir
          </Button>
          <Button variant="outline">Cancelar</Button>
        </div>
      </div>
    </div>
  ),
};
