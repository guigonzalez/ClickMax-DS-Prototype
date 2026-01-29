import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
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
  Mail,
  User,
  Heart,
  Star,
  X,
  ChevronRight,
  ChevronLeft,
  Eye,
  Lock,
  Unlock,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

// Icon mapping for controls
const iconMap = {
  none: null,
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
  Mail,
  User,
  Heart,
  Star,
  X,
  ChevronRight,
  ChevronLeft,
  Eye,
  Lock,
  Unlock,
  ArrowRight,
  ArrowLeft,
};

const meta: Meta<typeof Button> = {
  title: 'C. Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Botões com hierarquia clara e efeito acqua glossy premium: "primary" (neutro com gradiente escuro) para ações do sistema, "action" (fluor com brilho vibrante) para CTAs de conversão. Gradientes sutis, sombras internas e efeitos hover que amplificam a sensação de profundidade. Inclui "secondary" (azure outline), "tertiary" (purplish), "ghost", e "destructive". Suporta Radix Slot para renderização polimórfica.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'action',
        'secondary',
        'tertiary',
        'ghost',
        'destructive',
        'outline',
        'link',
      ],
      description: 'Variante visual do botão (hierarquia: primary=sistema, action=CTA)',
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
    variant: 'primary',
    size: 'md',
    disabled: false,
    asChild: false,
    children: 'Button',
  },
  render: ({ leftIcon, rightIcon, children, ...args }) => {
    const LeftIconComponent = leftIcon && leftIcon !== 'none' ? iconMap[leftIcon as keyof typeof iconMap] : null;
    const RightIconComponent = rightIcon && rightIcon !== 'none' ? iconMap[rightIcon as keyof typeof iconMap] : null;

    return (
      <Button {...args}>
        {LeftIconComponent && <LeftIconComponent className="h-5 w-5" />}
        {children}
        {RightIconComponent && <RightIconComponent className="h-5 w-5" />}
      </Button>
    );
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

export const Action: Story = {
  args: {
    variant: 'action',
    children: 'Call-to-Action',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
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
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3">
          Hierarquia Interativa
        </h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" data-testid="btn-primary">Primary (Sistema)</Button>
          <Button variant="action" data-testid="btn-action">Action (CTA)</Button>
          <Button variant="secondary" data-testid="btn-secondary">Secondary (Alt)</Button>
          <Button variant="tertiary" data-testid="btn-tertiary">Tertiary (Info)</Button>
          <Button variant="ghost" data-testid="btn-ghost">Ghost</Button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3">
          Outras Variantes
        </h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="destructive" data-testid="btn-destructive">Destructive</Button>
          <Button variant="outline" data-testid="btn-outline">Outline</Button>
          <Button variant="link" data-testid="btn-link">Link</Button>
        </div>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test that all button variants are rendered
    const primaryBtn = canvas.getByTestId('btn-primary');
    const actionBtn = canvas.getByTestId('btn-action');
    const destructiveBtn = canvas.getByTestId('btn-destructive');

    // Verify buttons have correct text content
    expect(primaryBtn).toHaveTextContent('Primary (Sistema)');
    expect(actionBtn).toHaveTextContent('Action (CTA)');
    expect(destructiveBtn).toHaveTextContent('Destructive');

    // Verify computed styles for gradients
    const primaryStyles = window.getComputedStyle(primaryBtn);
    const actionStyles = window.getComputedStyle(actionBtn);

    // Primary should have gradient background (not solid color)
    expect(primaryStyles.backgroundImage).toContain('gradient');

    // Action should have gradient background and dark text
    expect(actionStyles.backgroundImage).toContain('gradient');
    expect(actionStyles.color).toContain('rgb(31, 33, 35)'); // neutral-900 text

    // Test that buttons are clickable (not disabled)
    expect(primaryBtn).not.toBeDisabled();
    expect(actionBtn).not.toBeDisabled();
    expect(destructiveBtn).not.toBeDisabled();

    // Simulate click interaction
    await userEvent.click(primaryBtn);
    await userEvent.click(actionBtn);
  },
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

export const HierarchyExample: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="bg-bg-secondary p-6 rounded-lg">
        <h3 className="text-sm font-semibold text-text-primary mb-2">
          ✅ Correto: Formulário de Cadastro
        </h3>
        <p className="text-xs text-text-secondary mb-4">
          Primary para voltar (sistema), Action para CTA principal
        </p>
        <div className="flex gap-3">
          <Button variant="primary">Voltar</Button>
          <Button variant="action">
            <Plus className="h-5 w-5" />
            Criar Conta Grátis
          </Button>
        </div>
      </div>

      <div className="bg-bg-secondary p-6 rounded-lg">
        <h3 className="text-sm font-semibold text-text-primary mb-2">
          ✅ Correto: Modal de Confirmação
        </h3>
        <p className="text-xs text-text-secondary mb-4">
          Ghost para cancelar (discreto), Primary para confirmar
        </p>
        <div className="flex gap-3 justify-end">
          <Button variant="ghost">Cancelar</Button>
          <Button variant="primary">Confirmar</Button>
        </div>
      </div>

      <div className="bg-bg-secondary p-6 rounded-lg">
        <h3 className="text-sm font-semibold text-text-primary mb-2">
          ✅ Correto: Landing Page Hero
        </h3>
        <p className="text-xs text-text-secondary mb-4">
          Action para CTA, Secondary para alternativa, Tertiary para docs
        </p>
        <div className="flex gap-3">
          <Button variant="action">Começar Agora</Button>
          <Button variant="secondary">Ver Demo</Button>
          <Button variant="tertiary">📚 Docs</Button>
        </div>
      </div>
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
          <Button variant="ghost">Cancelar</Button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3">
          Call-to-Action (Conversão)
        </h3>
        <div className="flex gap-3">
          <Button variant="action">
            <Plus className="h-5 w-5" />
            Criar Projeto
          </Button>
          <Button variant="action">
            <Upload className="h-5 w-5" />
            Fazer Upload
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
          <Button variant="ghost">Cancelar</Button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3">
          Ajuda e Suporte
        </h3>
        <div className="flex gap-3">
          <Button variant="tertiary">
            <Settings className="h-5 w-5" />
            Ajuda
          </Button>
          <Button variant="tertiary">📚 Documentação</Button>
        </div>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
    leftIcon: 'none',
    rightIcon: 'none',
    disabled: false,
  },
};

export const GlossyAcquaEffect: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl">
      <div>
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          ✨ Efeito Acqua Glossy Premium
        </h3>
        <p className="text-sm text-text-secondary mb-6">
          Botões rounded-full com gradientes orgânicos. Action usa gradiente bottom-to-top (#c5e600 → #d4ff00 → #e0ff4d) para criar profundidade natural.
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Primary - Gradiente Neutro Escuro (rounded-full)
            </h4>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                <Save className="h-5 w-5" />
                Salvar Alterações
              </Button>
              <Button variant="primary" size="md">
                <Settings className="h-5 w-5" />
                Configurações
              </Button>
              <Button variant="primary" size="sm">
                <Check className="h-4 w-4" />
                Confirmar
              </Button>
            </div>
            <p className="text-xs text-text-tertiary mt-4">
              • Gradiente vertical: neutral-800 → neutral-900 → neutral-950<br/>
              • Sombra interna: highlight branco sutil no topo<br/>
              • Hover: overlay branco com opacidade + sombra elevada<br/>
              • Active: sombra interna escura + scale 0.98
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Action - Gradiente Fluor Orgânico (rounded-full)
            </h4>
            <div className="flex flex-wrap gap-4">
              <Button variant="action" size="lg">
                <Plus className="h-5 w-5" />
                Criar Projeto Grátis
              </Button>
              <Button variant="action" size="md">
                <Upload className="h-5 w-5" />
                Fazer Upload
              </Button>
              <Button variant="action" size="sm">
                <Send className="h-4 w-4" />
                Enviar
              </Button>
            </div>
            <p className="text-xs text-text-tertiary mt-4">
              • Gradiente vertical suave: #c5e600 (base escura) → #d4ff00 (meio) → #e0ff4d (topo claro)<br/>
              • Sombras em camadas: highlight interno branco + glow externo fluor<br/>
              • Hover: glow mais intenso + scale 1.02<br/>
              • Active: sombra interna + scale 0.98
            </p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-lg">
            <h4 className="text-sm font-semibold text-white mb-4">
              Contraste em Fundos Escuros
            </h4>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">
                <Download className="h-5 w-5" />
                Download
              </Button>
              <Button variant="action">
                <Plus className="h-5 w-5" />
                Novo Projeto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
