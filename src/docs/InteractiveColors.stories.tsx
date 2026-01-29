import type { Meta, StoryObj } from '@storybook/react';
import {
  Plus,
  X,
  Settings,
  ArrowLeft,
  HelpCircle,
  Eye,
  Trash2,
  Save,
  ShoppingCart,
  UserPlus,
  PlayCircle
} from 'lucide-react';

const meta: Meta = {
  title: 'B. Foundation/Colors/Interactive',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Hierarquia de cores interativas para botões e elementos clicáveis.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

// Helper component for button examples
const ButtonExample = ({
  label,
  description,
  variant,
  className,
  icon: Icon,
}: {
  label: string;
  description: string;
  variant: string;
  className: string;
  icon?: any;
}) => (
  <div className="flex flex-col gap-2">
    <button className={`${className} px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2`}>
      {Icon && <Icon className="h-4 w-4" />}
      {label}
    </button>
    <div className="text-sm">
      <p className="font-semibold text-text-primary">{variant}</p>
      <p className="text-text-secondary">{description}</p>
    </div>
  </div>
);

export const Overview: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-bg-primary rounded-xl max-w-6xl">
      <div>
        <h1 className="text-3xl font-bold text-text-primary mb-2">
          Interactive Colors Hierarchy
        </h1>
        <p className="text-text-secondary text-lg">
          Sistema de 5 níveis para criar hierarquia visual clara em elementos interativos.
        </p>
      </div>

      <div className="bg-bg-secondary p-6 rounded-lg border-l-4 border-interactive-action-default">
        <h3 className="font-bold text-text-primary mb-2">💡 Conceito Chave</h3>
        <p className="text-text-secondary">
          <strong>Primary (Neutral)</strong> para botões sistêmicos comuns, e{' '}
          <strong>Action (Fluor)</strong> para Call-to-Actions de conversão.
          Isso cria uma separação clara entre ações rotineiras e ações críticas de negócio.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-text-primary">Hierarquia Visual</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Primary - System */}
          <div className="bg-bg-secondary p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-interactive-primary-default" />
              <h3 className="font-bold text-text-primary">1. Primary</h3>
            </div>
            <p className="text-sm text-text-secondary mb-4">
              Botões sistêmicos, ações comuns
            </p>
            <button className="w-full bg-interactive-primary-default hover:bg-interactive-primary-hover text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Fechar
            </button>
          </div>

          {/* Action - CTA */}
          <div className="bg-bg-secondary p-6 rounded-lg ring-2 ring-interactive-action-default">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-interactive-action-default" />
              <h3 className="font-bold text-text-primary">2. Action ⭐</h3>
            </div>
            <p className="text-sm text-text-secondary mb-4">
              CTAs, conversões críticas
            </p>
            <button className="w-full bg-interactive-action-default hover:bg-interactive-action-hover text-neutral-900 px-4 py-2 rounded-lg font-bold transition-colors">
              Criar Conta
            </button>
          </div>

          {/* Secondary */}
          <div className="bg-bg-secondary p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-interactive-secondary-default" />
              <h3 className="font-bold text-text-primary">3. Secondary</h3>
            </div>
            <p className="text-sm text-text-secondary mb-4">
              Ações alternativas (outline)
            </p>
            <button className="w-full border-2 border-interactive-secondary-default hover:bg-interactive-secondary-default/10 text-interactive-secondary-default px-4 py-2 rounded-lg font-medium transition-colors">
              Saiba Mais
            </button>
          </div>

          {/* Tertiary */}
          <div className="bg-bg-secondary p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-interactive-tertiary-default" />
              <h3 className="font-bold text-text-primary">4. Tertiary</h3>
            </div>
            <p className="text-sm text-text-secondary mb-4">
              Ajuda, informações
            </p>
            <button className="w-full bg-interactive-tertiary-default hover:bg-interactive-tertiary-hover text-white px-4 py-2 rounded-lg font-medium transition-colors">
              <HelpCircle className="h-4 w-4 inline mr-2" />
              Ajuda
            </button>
          </div>

          {/* Ghost */}
          <div className="bg-bg-secondary p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded border-2 border-neutral-300" />
              <h3 className="font-bold text-text-primary">5. Ghost</h3>
            </div>
            <p className="text-sm text-text-secondary mb-4">
              Ações discretas, mínimas
            </p>
            <button className="w-full bg-interactive-ghost-default hover:bg-interactive-ghost-hover text-interactive-ghost-text px-4 py-2 rounded-lg font-medium transition-colors">
              Pular
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const PrimarySystemButtons: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-bg-primary rounded-xl">
      <div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Primary Interactive (Neutral) - Botões Sistêmicos
        </h2>
        <p className="text-text-secondary">
          Use para ações comuns do sistema: fechar, cancelar, voltar, configurações.
        </p>
      </div>

      <div className="bg-bg-secondary p-6 rounded-lg">
        <h3 className="font-semibold text-text-primary mb-4">Características</h3>
        <ul className="space-y-2 text-sm text-text-secondary">
          <li>✅ <strong>Cor:</strong> Neutral 900 (cinza escuro #1F2123)</li>
          <li>✅ <strong>Texto:</strong> Branco (#FFFFFF)</li>
          <li>✅ <strong>Contraste:</strong> AAA (16.15:1)</li>
          <li>✅ <strong>Personalidade:</strong> Profissional, confiável, neutro</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ButtonExample
          variant="Primary"
          label="Fechar"
          description="Fechar modal/dialog"
          className="bg-interactive-primary-default hover:bg-interactive-primary-hover active:bg-interactive-primary-active text-white"
          icon={X}
        />
        <ButtonExample
          variant="Primary"
          label="Cancelar"
          description="Cancelar operação"
          className="bg-interactive-primary-default hover:bg-interactive-primary-hover active:bg-interactive-primary-active text-white"
        />
        <ButtonExample
          variant="Primary"
          label="Voltar"
          description="Navegação anterior"
          className="bg-interactive-primary-default hover:bg-interactive-primary-hover active:bg-interactive-primary-active text-white"
          icon={ArrowLeft}
        />
        <ButtonExample
          variant="Primary"
          label="Configurações"
          description="Abrir settings"
          className="bg-interactive-primary-default hover:bg-interactive-primary-hover active:bg-interactive-primary-active text-white"
          icon={Settings}
        />
      </div>

      <div className="bg-feedback-info-bg border-l-4 border-feedback-info p-4 rounded">
        <p className="text-feedback-info-text text-sm">
          <strong>Quando usar:</strong> Ações padrão do sistema que não requerem destaque da marca.
          Reserve Primary para 80% dos seus botões.
        </p>
      </div>
    </div>
  ),
};

export const ActionCTAButtons: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-bg-primary rounded-xl">
      <div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Action Interactive (Fluor) - Call-to-Actions
        </h2>
        <p className="text-text-secondary">
          Use SOMENTE para CTAs principais e ações de conversão críticas.
        </p>
      </div>

      <div className="bg-bg-secondary p-6 rounded-lg">
        <h3 className="font-semibold text-text-primary mb-4">Características</h3>
        <ul className="space-y-2 text-sm text-text-secondary">
          <li>✅ <strong>Cor:</strong> Fluor 500 (fluorescente #D4FF00)</li>
          <li>✅ <strong>Texto:</strong> Neutral 900 (SEMPRE escuro)</li>
          <li>✅ <strong>Contraste:</strong> AAA (13.92:1)</li>
          <li>✅ <strong>Personalidade:</strong> Energético, marca, ação</li>
        </ul>
      </div>

      <div className="bg-feedback-error-bg border-l-4 border-feedback-error p-4 rounded mb-6">
        <p className="text-feedback-error-text text-sm font-semibold">
          ⚠️ CRÍTICO: SEMPRE use text-neutral-900 (escuro). NUNCA use texto branco (contraste 2.47:1 - FALHA).
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ButtonExample
          variant="Action CTA"
          label="Criar Conta"
          description="Cadastro/Sign up"
          className="bg-interactive-action-default hover:bg-interactive-action-hover active:bg-interactive-action-active text-neutral-900 font-bold"
          icon={UserPlus}
        />
        <ButtonExample
          variant="Action CTA"
          label="Comprar Agora"
          description="Conversão de vendas"
          className="bg-interactive-action-default hover:bg-interactive-action-hover active:bg-interactive-action-active text-neutral-900 font-bold"
          icon={ShoppingCart}
        />
        <ButtonExample
          variant="Action CTA"
          label="Salvar"
          description="Submit principal"
          className="bg-interactive-action-default hover:bg-interactive-action-hover active:bg-interactive-action-active text-neutral-900 font-bold"
          icon={Save}
        />
        <ButtonExample
          variant="Action CTA"
          label="Novo Projeto"
          description="Criação de conteúdo"
          className="bg-interactive-action-default hover:bg-interactive-action-hover active:bg-interactive-action-active text-neutral-900 font-bold"
          icon={Plus}
        />
      </div>

      <div className="bg-feedback-warning-bg border-l-4 border-feedback-warning p-4 rounded">
        <p className="text-feedback-warning-text text-sm">
          <strong>Regra de Ouro:</strong> Use com moderação! Máximo 1-2 botões Action por tela.
          Overuse diminui o impacto e confunde a hierarquia.
        </p>
      </div>
    </div>
  ),
};

export const Comparison: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-bg-primary rounded-xl">
      <div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Primary vs Action - Quando Usar Cada Um
        </h2>
        <p className="text-text-secondary">
          Comparação lado a lado para decisões de design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Primary Column */}
        <div className="bg-bg-secondary p-6 rounded-lg">
          <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-interactive-primary-default" />
            Primary (Neutral)
          </h3>

          <div className="space-y-4">
            <div>
              <p className="font-semibold text-text-primary mb-2">✅ Use para:</p>
              <ul className="text-sm text-text-secondary space-y-1 list-disc list-inside">
                <li>Fechar modals/dialogs</li>
                <li>Cancelar operações</li>
                <li>Voltar/navegação</li>
                <li>Editar itens</li>
                <li>Configurações</li>
                <li>Ações secundárias em forms</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-border-default">
              <p className="font-semibold text-text-primary mb-3">Exemplos:</p>
              <div className="space-y-2">
                <button className="w-full bg-interactive-primary-default hover:bg-interactive-primary-hover text-white px-4 py-2 rounded-lg transition-colors">
                  <X className="h-4 w-4 inline mr-2" />
                  Fechar
                </button>
                <button className="w-full bg-interactive-primary-default hover:bg-interactive-primary-hover text-white px-4 py-2 rounded-lg transition-colors">
                  Cancelar
                </button>
                <button className="w-full bg-interactive-primary-default hover:bg-interactive-primary-hover text-white px-4 py-2 rounded-lg transition-colors">
                  <Settings className="h-4 w-4 inline mr-2" />
                  Configurações
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Column */}
        <div className="bg-bg-secondary p-6 rounded-lg ring-2 ring-interactive-action-default">
          <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-interactive-action-default" />
            Action (Fluor) ⭐
          </h3>

          <div className="space-y-4">
            <div>
              <p className="font-semibold text-text-primary mb-2">✅ Use para:</p>
              <ul className="text-sm text-text-secondary space-y-1 list-disc list-inside">
                <li>Criar conta/Sign up</li>
                <li>Comprar/Checkout</li>
                <li>Enviar formulário principal</li>
                <li>Começar trial</li>
                <li>Adicionar/Criar novo</li>
                <li>Ações de conversão críticas</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-border-default">
              <p className="font-semibold text-text-primary mb-3">Exemplos:</p>
              <div className="space-y-2">
                <button className="w-full bg-interactive-action-default hover:bg-interactive-action-hover text-neutral-900 px-4 py-2 rounded-lg font-bold transition-colors">
                  <UserPlus className="h-4 w-4 inline mr-2" />
                  Criar Conta Grátis
                </button>
                <button className="w-full bg-interactive-action-default hover:bg-interactive-action-hover text-neutral-900 px-4 py-2 rounded-lg font-bold transition-colors">
                  <ShoppingCart className="h-4 w-4 inline mr-2" />
                  Comprar Agora - R$ 49
                </button>
                <button className="w-full bg-interactive-action-default hover:bg-interactive-action-hover text-neutral-900 px-4 py-2 rounded-lg font-bold transition-colors">
                  <PlayCircle className="h-4 w-4 inline mr-2" />
                  Começar Trial Grátis
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-bg-secondary p-6 rounded-lg">
        <h3 className="font-bold text-text-primary mb-3">📏 Regra Prática</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-bg-primary p-4 rounded">
            <p className="font-semibold text-text-primary mb-2">✅ Hierarquia Correta</p>
            <p className="text-text-secondary">
              80% Primary (sistema) + 20% Action (CTA) = Hierarquia clara e efetiva
            </p>
          </div>
          <div className="bg-feedback-error-bg p-4 rounded">
            <p className="font-semibold text-feedback-error-text mb-2">❌ Hierarquia Errada</p>
            <p className="text-text-secondary">
              Muitos Action buttons = Perda de impacto e confusão visual
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-bg-primary rounded-xl">
      <div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Exemplos de Uso Real
        </h2>
        <p className="text-text-secondary">
          Padrões comuns de UI mostrando a hierarquia correta.
        </p>
      </div>

      {/* Modal Example */}
      <div className="bg-bg-secondary p-6 rounded-lg">
        <h3 className="font-bold text-text-primary mb-4">Modal de Confirmação</h3>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
          <h4 className="text-lg font-bold text-text-primary mb-2">Confirmar Exclusão</h4>
          <p className="text-text-secondary mb-6">
            Tem certeza que deseja excluir este item? Esta ação não pode ser desfeita.
          </p>
          <div className="flex gap-3 justify-end">
            <button className="bg-interactive-ghost-default hover:bg-interactive-ghost-hover text-interactive-ghost-text px-4 py-2 rounded-lg transition-colors">
              Cancelar
            </button>
            <button className="bg-feedback-error hover:bg-feedback-error/90 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
              <Trash2 className="h-4 w-4 inline mr-2" />
              Excluir Permanentemente
            </button>
          </div>
        </div>
        <p className="text-sm text-text-secondary mt-4">
          💡 Ghost para cancelar (discreto), Destructive para ação perigosa
        </p>
      </div>

      {/* Form Example */}
      <div className="bg-bg-secondary p-6 rounded-lg">
        <h3 className="font-bold text-text-primary mb-4">Formulário de Cadastro</h3>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
          <h4 className="text-lg font-bold text-text-primary mb-4">Criar Nova Conta</h4>
          <div className="space-y-4 mb-6">
            <input type="text" placeholder="Nome completo" className="w-full px-3 py-2 border border-border-default rounded-lg" />
            <input type="email" placeholder="Email" className="w-full px-3 py-2 border border-border-default rounded-lg" />
            <input type="password" placeholder="Senha" className="w-full px-3 py-2 border border-border-default rounded-lg" />
          </div>
          <div className="flex gap-3">
            <button className="flex-1 bg-interactive-primary-default hover:bg-interactive-primary-hover text-white px-4 py-2 rounded-lg transition-colors">
              Voltar
            </button>
            <button className="flex-1 bg-interactive-action-default hover:bg-interactive-action-hover text-neutral-900 px-4 py-2 rounded-lg font-bold transition-colors">
              Criar Conta Grátis
            </button>
          </div>
        </div>
        <p className="text-sm text-text-secondary mt-4">
          💡 Primary para voltar (sistema), Action para CTA principal
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-bg-secondary p-6 rounded-lg">
        <h3 className="font-bold text-text-primary mb-4">Hero de Landing Page</h3>
        <div className="bg-gradient-to-b from-neutral-900 to-neutral-800 p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Revolucione seu Workflow
          </h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            A plataforma mais poderosa para gerenciar projetos com eficiência máxima
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-interactive-action-default hover:bg-interactive-action-hover text-neutral-900 px-6 py-3 rounded-lg font-bold transition-colors">
              <Plus className="h-5 w-5 inline mr-2" />
              Começar Gratuitamente
            </button>
            <button className="border-2 border-interactive-secondary-default hover:bg-interactive-secondary-default/10 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              <PlayCircle className="h-5 w-5 inline mr-2" />
              Ver Demo
            </button>
            <button className="bg-interactive-tertiary-default hover:bg-interactive-tertiary-hover text-white px-6 py-3 rounded-lg transition-colors">
              <HelpCircle className="h-5 w-5 inline mr-2" />
              Documentação
            </button>
          </div>
        </div>
        <p className="text-sm text-text-secondary mt-4">
          💡 Action para CTA principal, Secondary outline para demo, Tertiary para docs
        </p>
      </div>

      {/* Table Actions */}
      <div className="bg-bg-secondary p-6 rounded-lg">
        <h3 className="font-bold text-text-primary mb-4">Ações em Tabela</h3>
        <div className="bg-white p-4 rounded-lg shadow">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-default">
                <th className="text-left py-3 px-4 text-text-primary font-semibold">Projeto</th>
                <th className="text-left py-3 px-4 text-text-primary font-semibold">Status</th>
                <th className="text-right py-3 px-4 text-text-primary font-semibold">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border-subtle">
                <td className="py-3 px-4 text-text-primary">Projeto Alpha</td>
                <td className="py-3 px-4">
                  <span className="bg-feedback-success-bg text-feedback-success-text px-2 py-1 rounded text-xs font-medium">
                    Ativo
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2 justify-end">
                    <button className="bg-interactive-ghost-default hover:bg-interactive-ghost-hover text-interactive-ghost-text p-2 rounded transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="bg-interactive-primary-default hover:bg-interactive-primary-hover text-white px-3 py-1 rounded text-sm transition-colors">
                      Editar
                    </button>
                    <button className="bg-interactive-ghost-default hover:bg-feedback-error-bg text-feedback-error p-2 rounded transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-secondary mt-4">
          💡 Ghost para ver (discreto), Primary para editar, Ghost+error para deletar
        </p>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-bg-primary rounded-xl">
      <div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Todas as Variantes Interativas
        </h2>
        <p className="text-text-secondary">
          Referência completa com estados: default, hover, active, focus.
        </p>
      </div>

      <div className="space-y-6">
        {/* Primary */}
        <div className="bg-bg-secondary p-6 rounded-lg">
          <h3 className="font-bold text-text-primary mb-4">1. Primary (Neutral) - Sistema</h3>
          <div className="flex gap-3 flex-wrap">
            <button className="bg-interactive-primary-default text-white px-6 py-2 rounded-lg">
              Default
            </button>
            <button className="bg-interactive-primary-hover text-white px-6 py-2 rounded-lg">
              Hover
            </button>
            <button className="bg-interactive-primary-active text-white px-6 py-2 rounded-lg">
              Active
            </button>
            <button className="bg-interactive-primary-default text-white px-6 py-2 rounded-lg ring-2 ring-interactive-primary-focus ring-offset-2">
              Focus
            </button>
          </div>
        </div>

        {/* Action */}
        <div className="bg-bg-secondary p-6 rounded-lg">
          <h3 className="font-bold text-text-primary mb-4">2. Action (Fluor) - CTA ⭐</h3>
          <div className="flex gap-3 flex-wrap">
            <button className="bg-interactive-action-default text-neutral-900 px-6 py-2 rounded-lg font-bold">
              Default
            </button>
            <button className="bg-interactive-action-hover text-neutral-900 px-6 py-2 rounded-lg font-bold">
              Hover
            </button>
            <button className="bg-interactive-action-active text-neutral-900 px-6 py-2 rounded-lg font-bold">
              Active
            </button>
            <button className="bg-interactive-action-default text-neutral-900 px-6 py-2 rounded-lg font-bold ring-2 ring-interactive-action-focus ring-offset-2">
              Focus
            </button>
          </div>
        </div>

        {/* Secondary */}
        <div className="bg-bg-secondary p-6 rounded-lg">
          <h3 className="font-bold text-text-primary mb-4">3. Secondary (Azure) - Alternativo</h3>
          <div className="flex gap-3 flex-wrap">
            <button className="border-2 border-interactive-secondary-default text-interactive-secondary-default px-6 py-2 rounded-lg">
              Default
            </button>
            <button className="border-2 border-interactive-secondary-hover text-interactive-secondary-hover px-6 py-2 rounded-lg">
              Hover
            </button>
            <button className="border-2 border-interactive-secondary-active text-interactive-secondary-active px-6 py-2 rounded-lg">
              Active
            </button>
            <button className="border-2 border-interactive-secondary-default text-interactive-secondary-default px-6 py-2 rounded-lg ring-2 ring-interactive-secondary-focus ring-offset-2">
              Focus
            </button>
          </div>
        </div>

        {/* Tertiary */}
        <div className="bg-bg-secondary p-6 rounded-lg">
          <h3 className="font-bold text-text-primary mb-4">4. Tertiary (Purplish) - Info</h3>
          <div className="flex gap-3 flex-wrap">
            <button className="bg-interactive-tertiary-default text-white px-6 py-2 rounded-lg">
              Default
            </button>
            <button className="bg-interactive-tertiary-hover text-white px-6 py-2 rounded-lg">
              Hover
            </button>
            <button className="bg-interactive-tertiary-active text-white px-6 py-2 rounded-lg">
              Active
            </button>
            <button className="bg-interactive-tertiary-default text-white px-6 py-2 rounded-lg ring-2 ring-interactive-tertiary-focus ring-offset-2">
              Focus
            </button>
          </div>
        </div>

        {/* Ghost */}
        <div className="bg-bg-secondary p-6 rounded-lg">
          <h3 className="font-bold text-text-primary mb-4">5. Ghost (Transparent) - Discreto</h3>
          <div className="flex gap-3 flex-wrap">
            <button className="bg-interactive-ghost-default text-interactive-ghost-text px-6 py-2 rounded-lg">
              Default
            </button>
            <button className="bg-interactive-ghost-hover text-interactive-ghost-text px-6 py-2 rounded-lg">
              Hover
            </button>
            <button className="bg-interactive-ghost-active text-interactive-ghost-text px-6 py-2 rounded-lg">
              Active
            </button>
            <button className="bg-interactive-ghost-default text-interactive-ghost-text px-6 py-2 rounded-lg ring-2 ring-interactive-primary-focus ring-offset-2">
              Focus
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
};
