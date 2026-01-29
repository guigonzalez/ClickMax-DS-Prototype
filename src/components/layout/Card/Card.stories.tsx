import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './Card';
import { Button } from '../../foundation/Button';
import { Input } from '../../forms/Input';
import { Badge } from '../../foundation/Badge';
import {
  Bell,
  CheckCircle2,
  Info,
  CreditCard,
  Settings,
  User,
  Mail,
  Lock,
  TrendingUp,
  ArrowUpRight,
  Package,
  Truck,
  ShoppingBag,
  DollarSign,
} from 'lucide-react';

const meta: Meta<typeof Card> = {
  title: 'C. Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Card é um container versátil para agrupar conteúdo relacionado. Use cards para organizar informações em seções visuais distintas, criar formulários, exibir notificações ou agrupar conjuntos de dados. Composto por subcomponentes opcionais: CardHeader (cabeçalho), CardTitle (título), CardDescription (subtítulo), CardContent (conteúdo principal) e CardFooter (rodapé com ações).',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Classes CSS adicionais para o Card',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      control: false,
      description: 'Conteúdo do card (geralmente subcomponentes)',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
  args: {
    className: 'w-[350px]',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>
          Enter your information to create an account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input label="Name" placeholder="Enter your name" />
          <Input label="Email" type="email" placeholder="your@email.com" />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="primary">Create Account</Button>
        <Button variant="ghost">Cancel</Button>
      </CardFooter>
    </Card>
  ),
};

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-[350px] p-6">
      <p className="text-text-primary">
        This is a simple card with just content inside.
      </p>
    </Card>
  ),
};

export const NotificationCard: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-text-primary" />
          <CardTitle>Notificações</CardTitle>
        </div>
        <CardDescription>Você tem 3 mensagens não lidas.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-start gap-3 rounded-lg border border-border-default p-3">
            <CheckCircle2 className="h-5 w-5 text-feedback-success mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-text-primary">
                Sua ligação foi confirmada.
              </p>
              <p className="text-xs text-text-secondary mt-1">1 hora atrás</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-border-default p-3">
            <Info className="h-5 w-5 text-feedback-info mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-text-primary">
                Você tem uma nova mensagem!
              </p>
              <p className="text-xs text-text-secondary mt-1">2 horas atrás</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <CheckCircle2 className="h-5 w-5" />
          Marcar todas como lidas
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const LoginCard: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Entrar na sua conta</CardTitle>
        <CardDescription>
          Digite suas credenciais para acessar.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
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
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button variant="primary" className="w-full">
          Entrar
        </Button>
        <Button variant="ghost" className="w-full">
          Esqueceu a senha?
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const ProfileCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-interactive-action-default flex items-center justify-center">
            <User className="h-8 w-8 text-neutral-900" />
          </div>
          <div>
            <CardTitle>João Silva</CardTitle>
            <CardDescription>joao@example.com</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-bg-secondary transition-colors text-left">
            <User className="h-5 w-5 text-text-secondary" />
            <span className="text-sm text-text-primary">Meu Perfil</span>
          </button>
          <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-bg-secondary transition-colors text-left">
            <Settings className="h-5 w-5 text-text-secondary" />
            <span className="text-sm text-text-primary">Configurações</span>
          </button>
          <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-bg-secondary transition-colors text-left">
            <CreditCard className="h-5 w-5 text-text-secondary" />
            <span className="text-sm text-text-primary">Pagamentos</span>
          </button>
        </div>
      </CardContent>
    </Card>
  ),
};

export const StatsCard: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary">Receita Total</p>
              <p className="text-2xl font-bold text-text-primary mt-1">
                R$ 45.231
              </p>
              <p className="text-xs text-feedback-success mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +20.1% do mês passado
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-feedback-success" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary">Pedidos</p>
              <p className="text-2xl font-bold text-text-primary mt-1">
                +2,350
              </p>
              <p className="text-xs text-feedback-success mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +180.1% do mês passado
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <ShoppingBag className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary">Produtos</p>
              <p className="text-2xl font-bold text-text-primary mt-1">
                +12,234
              </p>
              <p className="text-xs text-feedback-success mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +19% do mês passado
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Package className="h-6 w-6 text-feedback-info" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

export const OrderCard: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Pedido #3210</CardTitle>
            <CardDescription>Realizado em 15 de Jan, 2026</CardDescription>
          </div>
          <Badge variant="warning" className="inline-flex items-center gap-1">
            <Truck className="h-3 w-3" />
            Em trânsito
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Subtotal</span>
            <span className="text-text-primary">R$ 99,00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Frete</span>
            <span className="text-text-primary">R$ 15,00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Desconto</span>
            <span className="text-feedback-success">- R$ 10,00</span>
          </div>
          <div className="border-t border-border-default pt-4 flex justify-between">
            <span className="font-semibold text-text-primary">Total</span>
            <span className="font-bold text-text-primary">R$ 104,00</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" className="flex-1">
          Rastrear Pedido
        </Button>
        <Button variant="primary" className="flex-1">
          <ArrowUpRight className="h-5 w-5" />
          Ver Detalhes
        </Button>
      </CardFooter>
    </Card>
  ),
};
