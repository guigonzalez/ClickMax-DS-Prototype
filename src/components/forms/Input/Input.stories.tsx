import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import { Input } from './Input';
import {
  Mail,
  Lock,
  Search,
  User,
  Phone,
  Calendar,
  CreditCard,
  AlertCircle,
  CheckCircle2,
  Eye,
  EyeOff,
  MapPin,
  Globe,
  Building,
  DollarSign,
  Percent,
  Hash,
  AtSign,
} from 'lucide-react';

// Icon mapping for controls
const iconMap = {
  none: null,
  Mail,
  Lock,
  Search,
  User,
  Phone,
  Calendar,
  CreditCard,
  AlertCircle,
  CheckCircle2,
  Eye,
  EyeOff,
  MapPin,
  Globe,
  Building,
  DollarSign,
  Percent,
  Hash,
  AtSign,
};

const meta: Meta<typeof Input> = {
  title: 'C. Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Input é um campo de entrada de texto que permite ao usuário inserir dados. Suporta label, descrição auxiliar e mensagens de erro, além de estados como disabled e diversos tipos (text, email, password, number). Implementado com acessibilidade completa através de IDs únicos, aria-describedby e aria-invalid.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label do campo',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: 'Texto de ajuda abaixo do input',
      table: {
        type: { summary: 'string' },
      },
    },
    error: {
      control: 'text',
      description: 'Mensagem de erro',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Tipo do input HTML',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: 'text',
      description: 'Classes CSS adicionais',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Função chamada ao mudar o valor',
      table: {
        type: { summary: '(e: ChangeEvent<HTMLInputElement>) => void' },
      },
    },
    leftIcon: {
      control: 'select',
      options: Object.keys(iconMap),
      description: 'Ícone à esquerda (requer wrapper externo)',
      table: {
        type: { summary: 'LucideIcon | null' },
      },
    },
    rightIcon: {
      control: 'select',
      options: Object.keys(iconMap),
      description: 'Ícone à direita (requer wrapper externo)',
      table: {
        type: { summary: 'LucideIcon | null' },
      },
    },
  },
  args: {
    type: 'text',
    placeholder: 'Enter text...',
    disabled: false,
  },
  render: ({ leftIcon, rightIcon, label, ...args }) => {
    const LeftIconComponent = leftIcon && leftIcon !== 'none' ? iconMap[leftIcon as keyof typeof iconMap] : null;
    const RightIconComponent = rightIcon && rightIcon !== 'none' ? iconMap[rightIcon as keyof typeof iconMap] : null;

    return (
      <div className="w-full max-w-sm">
        {label && (
          <label className="text-sm font-medium text-text-primary mb-1 block">
            {label}
          </label>
        )}
        <div className="relative">
          {LeftIconComponent && (
            <LeftIconComponent className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
          )}
          <Input
            {...args}
            className={`${LeftIconComponent ? 'pl-10' : ''} ${RightIconComponent ? 'pr-10' : ''}`}
          />
          {RightIconComponent && (
            <RightIconComponent className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
          )}
        </div>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Email',
    placeholder: 'your@email.com',
    description: "We'll never share your email with anyone.",
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    error: 'Password must be at least 8 characters',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: "Can't edit this",
    disabled: true,
  },
};

export const Email: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'your@email.com',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <Input label="Default" placeholder="Enter text..." data-testid="input-default" />
      <Input
        label="With Description"
        placeholder="Enter text..."
        description="This is a helpful description"
        data-testid="input-description"
      />
      <Input
        label="With Error"
        placeholder="Enter text..."
        error="This field is required"
        data-testid="input-error"
      />
      <Input label="Disabled" placeholder="Can't edit this" disabled data-testid="input-disabled" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test default input
    const defaultInput = canvas.getByTestId('input-default');
    expect(defaultInput).toBeInTheDocument();
    expect(defaultInput).toHaveAttribute('placeholder', 'Enter text...');

    // Test typing interaction
    await userEvent.type(defaultInput, 'Hello World');
    expect(defaultInput).toHaveValue('Hello World');

    // Test input with error
    const errorInput = canvas.getByTestId('input-error');
    expect(errorInput).toHaveAttribute('aria-invalid', 'true');
    expect(canvas.getByText('This field is required')).toBeInTheDocument();

    // Test disabled state
    const disabledInput = canvas.getByTestId('input-disabled');
    expect(disabledInput).toBeDisabled();

    // Test focus styles (primary interactive color)
    await userEvent.click(defaultInput);
    const focusedStyles = window.getComputedStyle(defaultInput);
    expect(focusedStyles.outlineStyle).toBe('none'); // focus-visible:outline-none
  },
};

export const WithIconPrefix: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <div>
        <label className="text-sm font-medium text-text-primary mb-1 block">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
          <Input
            type="email"
            placeholder="seu@email.com"
            className="pl-10"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-text-primary mb-1 block">
          Senha
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
          <Input type="password" placeholder="••••••••" className="pl-10" />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-text-primary mb-1 block">
          Buscar
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
          <Input placeholder="Buscar..." className="pl-10" />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-text-primary mb-1 block">
          Nome
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
          <Input placeholder="Seu nome completo" className="pl-10" />
        </div>
      </div>
    </div>
  ),
};

export const WithIconSuffix: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <div>
        <label className="text-sm font-medium text-text-primary mb-1 block">
          Email válido
        </label>
        <div className="relative">
          <Input
            type="email"
            placeholder="seu@email.com"
            defaultValue="usuario@example.com"
            className="pr-10"
          />
          <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-feedback-success" />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-text-primary mb-1 block">
          Email inválido
        </label>
        <div className="relative">
          <Input
            type="email"
            placeholder="seu@email.com"
            defaultValue="email-invalido"
            className="pr-10 border-feedback-error"
          />
          <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-feedback-error" />
        </div>
        <p className="text-sm text-feedback-error mt-1">
          Email inválido. Verifique o formato.
        </p>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    type: 'text',
    leftIcon: 'none',
    rightIcon: 'none',
    disabled: false,
  },
};

export const FormExamples: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <h3 className="text-lg font-semibold text-text-primary">
        Formulário de Login
      </h3>

      <div>
        <label className="text-sm font-medium text-text-primary mb-1 block">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
          <Input
            type="email"
            placeholder="seu@email.com"
            className="pl-10"
          />
        </div>
        <p className="text-sm text-text-secondary mt-1">
          Nunca compartilharemos seu email.
        </p>
      </div>

      <div>
        <label className="text-sm font-medium text-text-primary mb-1 block">
          Senha
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
          <Input type="password" placeholder="••••••••" className="pl-10" />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-text-primary pt-4">
        Informações de Contato
      </h3>

      <div>
        <label className="text-sm font-medium text-text-primary mb-1 block">
          Telefone
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
          <Input
            type="tel"
            placeholder="(00) 00000-0000"
            className="pl-10"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-text-primary mb-1 block">
          Data de Nascimento
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
          <Input type="date" className="pl-10" />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-text-primary pt-4">
        Informações de Pagamento
      </h3>

      <div>
        <label className="text-sm font-medium text-text-primary mb-1 block">
          Número do Cartão
        </label>
        <div className="relative">
          <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
          <Input
            type="text"
            placeholder="0000 0000 0000 0000"
            className="pl-10"
          />
        </div>
      </div>
    </div>
  ),
};
