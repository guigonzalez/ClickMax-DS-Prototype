import type { Meta, StoryObj } from '@storybook/react';
import {
  // Common icons
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  // UI icons
  Home,
  Settings,
  User,
  Users,
  Bell,
  Mail,
  Calendar,
  Clock,
  Star,
  Heart,
  // Actions
  Plus,
  Minus,
  Check,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  // File & Edit
  File,
  Folder,
  Download,
  Upload,
  Edit,
  Trash2,
  Copy,
  Save,
  // Social
  Share2,
  MessageCircle,
  ThumbsUp,
  Eye,
  EyeOff,
} from 'lucide-react';

const meta: Meta = {
  title: 'Tokens/Icons',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Lucide Icons é a biblioteca de ícones padrão do Design System. Oferece mais de 1.000 ícones consistentes, otimizados e personalizáveis. Todos os ícones são SVG, suportam props de tamanho, cor e className.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const IconCard = ({
  icon: Icon,
  name,
}: {
  icon: React.ElementType;
  name: string;
}) => (
  <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border-default hover:bg-bg-secondary transition-colors">
    <Icon className="h-6 w-6 text-text-primary" />
    <span className="text-xs text-text-secondary font-mono">{name}</span>
  </div>
);

export const CommonIcons: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Ícones Comuns
        </h1>
        <p className="text-text-secondary">
          Ícones mais utilizados em interfaces.
        </p>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        <IconCard icon={Search} name="Search" />
        <IconCard icon={Menu} name="Menu" />
        <IconCard icon={X} name="X" />
        <IconCard icon={ChevronDown} name="ChevronDown" />
        <IconCard icon={ChevronUp} name="ChevronUp" />
        <IconCard icon={ChevronLeft} name="ChevronLeft" />
        <IconCard icon={ChevronRight} name="ChevronRight" />
        <IconCard icon={ArrowLeft} name="ArrowLeft" />
        <IconCard icon={ArrowRight} name="ArrowRight" />
        <IconCard icon={ArrowUp} name="ArrowUp" />
        <IconCard icon={ArrowDown} name="ArrowDown" />
        <IconCard icon={Plus} name="Plus" />
        <IconCard icon={Minus} name="Minus" />
        <IconCard icon={Check} name="Check" />
      </div>
    </div>
  ),
};

export const UIIcons: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Ícones de Interface
        </h1>
        <p className="text-text-secondary">
          Ícones para navegação e elementos de UI.
        </p>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        <IconCard icon={Home} name="Home" />
        <IconCard icon={Settings} name="Settings" />
        <IconCard icon={User} name="User" />
        <IconCard icon={Users} name="Users" />
        <IconCard icon={Bell} name="Bell" />
        <IconCard icon={Mail} name="Mail" />
        <IconCard icon={Calendar} name="Calendar" />
        <IconCard icon={Clock} name="Clock" />
        <IconCard icon={Star} name="Star" />
        <IconCard icon={Heart} name="Heart" />
      </div>
    </div>
  ),
};

export const ActionIcons: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Ícones de Ação
        </h1>
        <p className="text-text-secondary">
          Ícones para feedback e estados de alerta.
        </p>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        <IconCard icon={AlertCircle} name="AlertCircle" />
        <IconCard icon={AlertTriangle} name="AlertTriangle" />
        <IconCard icon={Info} name="Info" />
        <IconCard icon={HelpCircle} name="HelpCircle" />
        <IconCard icon={Check} name="Check" />
        <IconCard icon={X} name="X" />
      </div>
    </div>
  ),
};

export const FileIcons: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Ícones de Arquivo e Edição
        </h1>
        <p className="text-text-secondary">
          Ícones para operações com arquivos e edição.
        </p>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        <IconCard icon={File} name="File" />
        <IconCard icon={Folder} name="Folder" />
        <IconCard icon={Download} name="Download" />
        <IconCard icon={Upload} name="Upload" />
        <IconCard icon={Edit} name="Edit" />
        <IconCard icon={Trash2} name="Trash2" />
        <IconCard icon={Copy} name="Copy" />
        <IconCard icon={Save} name="Save" />
      </div>
    </div>
  ),
};

export const SocialIcons: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Ícones Sociais
        </h1>
        <p className="text-text-secondary">
          Ícones para interações sociais e compartilhamento.
        </p>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        <IconCard icon={Share2} name="Share2" />
        <IconCard icon={MessageCircle} name="MessageCircle" />
        <IconCard icon={ThumbsUp} name="ThumbsUp" />
        <IconCard icon={Eye} name="Eye" />
        <IconCard icon={EyeOff} name="EyeOff" />
        <IconCard icon={Heart} name="Heart" />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Tamanhos de Ícones
        </h1>
        <p className="text-text-secondary">
          Tamanhos padrão recomendados para diferentes contextos.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-6">
          <Settings className="h-4 w-4 text-text-primary" />
          <div>
            <p className="text-sm font-medium text-text-primary">
              16px / 1rem
            </p>
            <p className="text-xs text-text-secondary">
              Small - Ícones inline no texto
            </p>
          </div>
          <code className="text-xs font-mono text-text-secondary bg-bg-secondary px-2 py-1 rounded">
            className="h-4 w-4"
          </code>
        </div>

        <div className="flex items-center gap-6">
          <Settings className="h-5 w-5 text-text-primary" />
          <div>
            <p className="text-sm font-medium text-text-primary">
              20px / 1.25rem
            </p>
            <p className="text-xs text-text-secondary">
              Default - Ícones em botões e inputs
            </p>
          </div>
          <code className="text-xs font-mono text-text-secondary bg-bg-secondary px-2 py-1 rounded">
            className="h-5 w-5"
          </code>
        </div>

        <div className="flex items-center gap-6">
          <Settings className="h-6 w-6 text-text-primary" />
          <div>
            <p className="text-sm font-medium text-text-primary">
              24px / 1.5rem
            </p>
            <p className="text-xs text-text-secondary">
              Medium - Ícones em cards e listas
            </p>
          </div>
          <code className="text-xs font-mono text-text-secondary bg-bg-secondary px-2 py-1 rounded">
            className="h-6 w-6"
          </code>
        </div>

        <div className="flex items-center gap-6">
          <Settings className="h-8 w-8 text-text-primary" />
          <div>
            <p className="text-sm font-medium text-text-primary">
              32px / 2rem
            </p>
            <p className="text-xs text-text-secondary">
              Large - Ícones decorativos e hero
            </p>
          </div>
          <code className="text-xs font-mono text-text-secondary bg-bg-secondary px-2 py-1 rounded">
            className="h-8 w-8"
          </code>
        </div>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Cores de Ícones
        </h1>
        <p className="text-text-secondary">
          Use os tokens de cor semânticos para colorir ícones.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Settings className="h-6 w-6 text-text-primary" />
          <code className="text-sm font-mono">text-text-primary</code>
          <span className="text-sm text-text-secondary">Texto principal</span>
        </div>

        <div className="flex items-center gap-4">
          <Settings className="h-6 w-6 text-text-secondary" />
          <code className="text-sm font-mono">text-text-secondary</code>
          <span className="text-sm text-text-secondary">
            Texto secundário
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Settings className="h-6 w-6 text-feedback-success" />
          <code className="text-sm font-mono">text-feedback-success</code>
          <span className="text-sm text-text-secondary">Sucesso</span>
        </div>

        <div className="flex items-center gap-4">
          <Settings className="h-6 w-6 text-feedback-warning" />
          <code className="text-sm font-mono">text-feedback-warning</code>
          <span className="text-sm text-text-secondary">Aviso</span>
        </div>

        <div className="flex items-center gap-4">
          <Settings className="h-6 w-6 text-feedback-error" />
          <code className="text-sm font-mono">text-feedback-error</code>
          <span className="text-sm text-text-secondary">Erro</span>
        </div>

        <div className="flex items-center gap-4">
          <Settings className="h-6 w-6 text-feedback-info" />
          <code className="text-sm font-mono">text-feedback-info</code>
          <span className="text-sm text-text-secondary">Informação</span>
        </div>
      </div>
    </div>
  ),
};

export const Usage: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Uso de Ícones
        </h1>
        <p className="text-text-secondary">
          Exemplos práticos de como usar ícones com os componentes.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-3">
            Import
          </h3>
          <pre className="bg-bg-secondary p-4 rounded-lg overflow-x-auto">
            <code className="text-sm font-mono text-text-primary">
              {`import { Settings, User, Home } from 'lucide-react';`}
            </code>
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-3">
            Ícones em Botões
          </h3>
          <div className="flex gap-4">
            <button className="inline-flex items-center gap-2 px-4 h-10 bg-interactive-default text-text-accent rounded-lg hover:bg-interactive-hover transition-colors">
              <Plus className="h-5 w-5" />
              Criar Novo
            </button>
            <button className="inline-flex items-center gap-2 px-4 h-10 bg-bg-secondary text-text-primary rounded-lg hover:bg-bg-tertiary transition-colors">
              <Download className="h-5 w-5" />
              Download
            </button>
            <button className="inline-flex items-center justify-center h-10 w-10 bg-bg-secondary text-text-primary rounded-lg hover:bg-bg-tertiary transition-colors">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-3">
            Ícones em Alertas
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50 border border-green-200">
              <Check className="h-5 w-5 text-feedback-success" />
              <div>
                <p className="text-sm font-medium text-feedback-success">
                  Sucesso
                </p>
                <p className="text-sm text-text-secondary">
                  Operação concluída com sucesso.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
              <AlertCircle className="h-5 w-5 text-feedback-error" />
              <div>
                <p className="text-sm font-medium text-feedback-error">Erro</p>
                <p className="text-sm text-text-secondary">
                  Algo deu errado. Tente novamente.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
              <AlertTriangle className="h-5 w-5 text-feedback-warning" />
              <div>
                <p className="text-sm font-medium text-feedback-warning">
                  Aviso
                </p>
                <p className="text-sm text-text-secondary">
                  Esta ação não pode ser desfeita.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-3">
            Ícones em Navegação
          </h3>
          <nav className="space-y-1 w-64">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-interactive-default text-text-accent"
            >
              <Home className="h-5 w-5" />
              <span className="text-sm font-medium">Home</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-bg-secondary text-text-primary transition-colors"
            >
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium">Usuários</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-bg-secondary text-text-primary transition-colors"
            >
              <Settings className="h-5 w-5" />
              <span className="text-sm font-medium">Configurações</span>
            </a>
          </nav>
        </div>
      </div>

      <div className="p-4 bg-bg-secondary rounded-lg">
        <p className="text-sm text-text-secondary">
          <span className="font-medium text-text-primary">Dica:</span> Visite{' '}
          <a
            href="https://lucide.dev/icons"
            target="_blank"
            rel="noopener noreferrer"
            className="text-interactive-default hover:underline"
          >
            lucide.dev/icons
          </a>{' '}
          para explorar todos os ícones disponíveis.
        </p>
      </div>
    </div>
  ),
};
