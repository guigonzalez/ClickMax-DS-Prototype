import type { Meta, StoryObj } from '@storybook/react';
import { colors } from '../tokens/primitives/colors';

const meta: Meta = {
  title: 'B. Foundation/Colors',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

const ColorSwatch = ({
  name,
  value,
  description,
}: {
  name: string;
  value: string;
  description?: string;
}) => {
  return (
    <div className="flex flex-col">
      <div
        className="h-20 w-full rounded-t-lg border border-border-subtle"
        style={{ backgroundColor: value }}
      />
      <div className="bg-bg-secondary p-3 rounded-b-lg border border-t-0 border-border-subtle">
        <p className="text-sm font-semibold text-text-primary">{name}</p>
        <p className="text-xs text-text-secondary font-mono mt-1">{value}</p>
        {description && (
          <p className="text-xs text-text-tertiary mt-1">{description}</p>
        )}
      </div>
    </div>
  );
};

const PaletteSection = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-4">
    <div>
      <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
      {description && (
        <p className="text-text-secondary mt-1">{description}</p>
      )}
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {children}
    </div>
  </div>
);

export const Overview: Story = {
  render: () => (
    <div className="space-y-12 p-8 bg-bg-primary rounded-xl">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-text-primary">
          Sistema de Cores ClickMax
        </h1>
        <p className="text-lg text-text-secondary max-w-3xl">
          Paletas de cores modernas e vibrantes para o ClickMax Design System.
          6 paletas completas com 10 tons cada, otimizadas para acessibilidade e impacto visual.
        </p>
        <div className="flex gap-2 flex-wrap mt-4">
          <span className="px-3 py-1 bg-fluor-500 text-neutral-900 rounded-full text-sm font-medium">
            Fluor - Brand
          </span>
          <span className="px-3 py-1 bg-azure-500 text-white rounded-full text-sm font-medium">
            Azure - Success
          </span>
          <span className="px-3 py-1 bg-purplish-500 text-white rounded-full text-sm font-medium">
            Purplish - Info
          </span>
          <span className="px-3 py-1 bg-cadmium-500 text-neutral-900 rounded-full text-sm font-medium">
            Cadmium - Warning
          </span>
          <span className="px-3 py-1 bg-torch-500 text-white rounded-full text-sm font-medium">
            Torch - Error
          </span>
        </div>
      </div>
    </div>
  ),
};

export const Neutral: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-bg-primary rounded-xl">
      <PaletteSection
        title="Neutral"
        description="13 tons de cinza para fundos, bordas e textos neutros. Base para todo o design system."
      >
        <ColorSwatch name="neutral-0" value={colors.neutral[0]} description="White" />
        <ColorSwatch name="neutral-50" value={colors.neutral[50]} />
        <ColorSwatch name="neutral-100" value={colors.neutral[100]} />
        <ColorSwatch name="neutral-200" value={colors.neutral[200]} />
        <ColorSwatch name="neutral-300" value={colors.neutral[300]} />
        <ColorSwatch name="neutral-400" value={colors.neutral[400]} />
        <ColorSwatch name="neutral-500" value={colors.neutral[500]} />
        <ColorSwatch name="neutral-600" value={colors.neutral[600]} />
        <ColorSwatch name="neutral-700" value={colors.neutral[700]} />
        <ColorSwatch name="neutral-800" value={colors.neutral[800]} />
        <ColorSwatch name="neutral-900" value={colors.neutral[900]} />
        <ColorSwatch name="neutral-950" value={colors.neutral[950]} />
        <ColorSwatch name="neutral-1000" value={colors.neutral[1000]} description="Black" />
      </PaletteSection>
    </div>
  ),
};

export const Fluor: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-bg-primary rounded-xl">
      <PaletteSection
        title="Fluor - Brand Primary"
        description="Amarelo-verde fluorescente vibrante. Cor principal do brand ClickMax, usada em CTAs, botões primários e elementos interativos."
      >
        <ColorSwatch name="fluor-50" value={colors.fluor[50]} />
        <ColorSwatch name="fluor-100" value={colors.fluor[100]} />
        <ColorSwatch name="fluor-200" value={colors.fluor[200]} />
        <ColorSwatch name="fluor-300" value={colors.fluor[300]} />
        <ColorSwatch name="fluor-400" value={colors.fluor[400]} />
        <ColorSwatch name="fluor-500" value={colors.fluor[500]} description="★ Primary" />
        <ColorSwatch name="fluor-600" value={colors.fluor[600]} description="Hover" />
        <ColorSwatch name="fluor-700" value={colors.fluor[700]} description="Active" />
        <ColorSwatch name="fluor-800" value={colors.fluor[800]} />
        <ColorSwatch name="fluor-900" value={colors.fluor[900]} />
      </PaletteSection>

      <div className="bg-bg-secondary p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Exemplos de Uso</h3>
        <div className="flex gap-4 flex-wrap">
          <button className="px-6 py-3 bg-fluor-500 text-neutral-900 rounded-lg font-semibold hover:bg-fluor-600 transition-colors">
            Botão Primary
          </button>
          <button className="px-6 py-3 bg-fluor-600 text-neutral-900 rounded-lg font-semibold">
            Hover State
          </button>
          <button className="px-6 py-3 bg-fluor-700 text-neutral-900 rounded-lg font-semibold">
            Active State
          </button>
        </div>
      </div>
    </div>
  ),
};

export const Azure: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-bg-primary rounded-xl">
      <PaletteSection
        title="Azure - Success & Secondary"
        description="Azul vibrante para feedback de sucesso e ações secundárias."
      >
        <ColorSwatch name="azure-50" value={colors.azure[50]} />
        <ColorSwatch name="azure-100" value={colors.azure[100]} />
        <ColorSwatch name="azure-200" value={colors.azure[200]} />
        <ColorSwatch name="azure-300" value={colors.azure[300]} />
        <ColorSwatch name="azure-400" value={colors.azure[400]} />
        <ColorSwatch name="azure-500" value={colors.azure[500]} description="Success" />
        <ColorSwatch name="azure-600" value={colors.azure[600]} />
        <ColorSwatch name="azure-700" value={colors.azure[700]} />
        <ColorSwatch name="azure-800" value={colors.azure[800]} />
        <ColorSwatch name="azure-900" value={colors.azure[900]} />
      </PaletteSection>

      <div className="bg-bg-secondary p-6 rounded-lg space-y-4">
        <div className="bg-azure-50 border-l-4 border-azure-500 p-4 rounded">
          <p className="text-azure-800 font-medium">Operação concluída com sucesso!</p>
        </div>
        <button className="px-6 py-3 bg-azure-500 text-white rounded-lg font-semibold hover:bg-azure-600 transition-colors">
          Ação Secundária
        </button>
      </div>
    </div>
  ),
};

export const Purplish: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-bg-primary rounded-xl">
      <PaletteSection
        title="Purplish - Info & Tertiary"
        description="Roxo vibrante para feedback informativo e ações terciárias."
      >
        <ColorSwatch name="purplish-50" value={colors.purplish[50]} />
        <ColorSwatch name="purplish-100" value={colors.purplish[100]} />
        <ColorSwatch name="purplish-200" value={colors.purplish[200]} />
        <ColorSwatch name="purplish-300" value={colors.purplish[300]} />
        <ColorSwatch name="purplish-400" value={colors.purplish[400]} />
        <ColorSwatch name="purplish-500" value={colors.purplish[500]} description="Info" />
        <ColorSwatch name="purplish-600" value={colors.purplish[600]} />
        <ColorSwatch name="purplish-700" value={colors.purplish[700]} />
        <ColorSwatch name="purplish-800" value={colors.purplish[800]} />
        <ColorSwatch name="purplish-900" value={colors.purplish[900]} />
      </PaletteSection>

      <div className="bg-bg-secondary p-6 rounded-lg space-y-4">
        <div className="bg-purplish-50 border-l-4 border-purplish-500 p-4 rounded">
          <p className="text-purplish-800 font-medium">Informação importante: Verifique sua conta.</p>
        </div>
        <button className="px-6 py-3 bg-purplish-500 text-white rounded-lg font-semibold hover:bg-purplish-600 transition-colors">
          Ação Terciária
        </button>
      </div>
    </div>
  ),
};

export const Cadmium: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-bg-primary rounded-xl">
      <PaletteSection
        title="Cadmium - Warning"
        description="Amarelo-ouro para avisos e alertas que requerem atenção."
      >
        <ColorSwatch name="cadmium-50" value={colors.cadmium[50]} />
        <ColorSwatch name="cadmium-100" value={colors.cadmium[100]} />
        <ColorSwatch name="cadmium-200" value={colors.cadmium[200]} />
        <ColorSwatch name="cadmium-300" value={colors.cadmium[300]} />
        <ColorSwatch name="cadmium-400" value={colors.cadmium[400]} />
        <ColorSwatch name="cadmium-500" value={colors.cadmium[500]} />
        <ColorSwatch name="cadmium-600" value={colors.cadmium[600]} description="Warning" />
        <ColorSwatch name="cadmium-700" value={colors.cadmium[700]} />
        <ColorSwatch name="cadmium-800" value={colors.cadmium[800]} />
        <ColorSwatch name="cadmium-900" value={colors.cadmium[900]} />
      </PaletteSection>

      <div className="bg-bg-secondary p-6 rounded-lg">
        <div className="bg-cadmium-50 border-l-4 border-cadmium-600 p-4 rounded">
          <p className="text-cadmium-800 font-medium">⚠️ Atenção: Esta ação requer confirmação.</p>
        </div>
      </div>
    </div>
  ),
};

export const Torch: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-bg-primary rounded-xl">
      <PaletteSection
        title="Torch - Error & Destructive"
        description="Vermelho-rosa vibrante para erros e ações destrutivas."
      >
        <ColorSwatch name="torch-50" value={colors.torch[50]} />
        <ColorSwatch name="torch-100" value={colors.torch[100]} />
        <ColorSwatch name="torch-200" value={colors.torch[200]} />
        <ColorSwatch name="torch-300" value={colors.torch[300]} />
        <ColorSwatch name="torch-400" value={colors.torch[400]} />
        <ColorSwatch name="torch-500" value={colors.torch[500]} description="Error" />
        <ColorSwatch name="torch-600" value={colors.torch[600]} />
        <ColorSwatch name="torch-700" value={colors.torch[700]} />
        <ColorSwatch name="torch-800" value={colors.torch[800]} />
        <ColorSwatch name="torch-900" value={colors.torch[900]} />
      </PaletteSection>

      <div className="bg-bg-secondary p-6 rounded-lg space-y-4">
        <div className="bg-torch-50 border-l-4 border-torch-500 p-4 rounded">
          <p className="text-torch-800 font-medium">❌ Erro: Não foi possível completar a operação.</p>
        </div>
        <button className="px-6 py-3 bg-torch-500 text-white rounded-lg font-semibold hover:bg-torch-600 transition-colors">
          Deletar
        </button>
      </div>
    </div>
  ),
};

export const Semantic: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Cores Semânticas
        </h1>
        <p className="text-text-secondary">
          Use SEMPRE os tokens semânticos nos componentes. Nunca use cores primitivas diretamente.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-3">Background</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-bg-primary border-2 border-border-default rounded-lg">
              <p className="text-sm font-semibold">bg-primary</p>
              <p className="text-xs text-text-secondary">#FFFFFF</p>
            </div>
            <div className="p-4 bg-bg-secondary border-2 border-border-default rounded-lg">
              <p className="text-sm font-semibold">bg-secondary</p>
              <p className="text-xs text-text-secondary">#F4F5F5</p>
            </div>
            <div className="p-4 bg-bg-accent border-2 border-border-default rounded-lg">
              <p className="text-sm font-semibold">bg-accent</p>
              <p className="text-xs text-text-secondary">#D4FF00</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-3">Interactive Colors</h3>
          <p className="text-sm text-text-secondary mb-4">Hierarquia interativa: Primary (sistema), Action (CTA), Secondary (alternativa), Tertiary (info), Ghost (discreto)</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-interactive-primary-default border-2 border-border-default rounded-lg">
              <p className="text-sm font-semibold text-white">interactive-primary-default</p>
              <p className="text-xs text-neutral-200">Neutral 900 - Sistema</p>
            </div>
            <div className="p-4 bg-interactive-action-default border-2 border-border-default rounded-lg">
              <p className="text-sm font-semibold text-neutral-900">interactive-action-default</p>
              <p className="text-xs text-neutral-700">Fluor 500 - CTAs</p>
            </div>
            <div className="p-4 border-2 border-interactive-secondary-default rounded-lg">
              <p className="text-sm font-semibold text-interactive-secondary-default">interactive-secondary-default</p>
              <p className="text-xs text-text-secondary">Azure 500 - Alternativa</p>
            </div>
            <div className="p-4 bg-interactive-tertiary-default border-2 border-border-default rounded-lg">
              <p className="text-sm font-semibold text-white">interactive-tertiary-default</p>
              <p className="text-xs text-neutral-200">Purplish 500 - Info</p>
            </div>
            <div className="p-4 bg-interactive-ghost-hover border-2 border-border-default rounded-lg">
              <p className="text-sm font-semibold text-interactive-ghost-text">interactive-ghost-hover</p>
              <p className="text-xs text-text-secondary">Transparent - Discreto</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-3">Feedback</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-feedback-success-bg border-l-4 border-feedback-success rounded-lg">
              <p className="text-sm font-semibold text-feedback-success-text">Success</p>
            </div>
            <div className="p-4 bg-feedback-warning-bg border-l-4 border-feedback-warning rounded-lg">
              <p className="text-sm font-semibold text-feedback-warning-text">Warning</p>
            </div>
            <div className="p-4 bg-feedback-error-bg border-l-4 border-feedback-error rounded-lg">
              <p className="text-sm font-semibold text-feedback-error-text">Error</p>
            </div>
            <div className="p-4 bg-feedback-info-bg border-l-4 border-feedback-info rounded-lg">
              <p className="text-sm font-semibold text-feedback-info-text">Info</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Usage: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-bg-primary rounded-xl max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Como Usar
        </h1>
        <p className="text-text-secondary">
          Guia prático para usar o sistema de cores no seu código.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            ✅ CORRETO - Usar tokens semânticos
          </h3>
          <div className="bg-bg-secondary p-4 rounded-lg font-mono text-sm">
            <pre className="text-text-primary overflow-x-auto">
{`<div className="bg-bg-primary text-text-primary border-border-default">
  {/* Botões de sistema */}
  <Button variant="primary">Salvar</Button>

  {/* Call-to-Actions */}
  <Button variant="action">Criar Conta</Button>
</div>`}
            </pre>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-torch-500 mb-2">
            ❌ ERRADO - Usar cores primitivas
          </h3>
          <div className="bg-torch-50 p-4 rounded-lg font-mono text-sm">
            <pre className="text-torch-800 overflow-x-auto">
{`<div className="bg-neutral-100 text-neutral-900">
  {/* Não faça isso! */}
</div>`}
            </pre>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Classes Tailwind Disponíveis
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-bg-secondary p-4 rounded-lg">
              <h4 className="font-semibold text-text-primary mb-2">Background</h4>
              <ul className="text-sm text-text-secondary space-y-1 font-mono">
                <li>bg-bg-primary</li>
                <li>bg-bg-secondary</li>
                <li>bg-bg-accent</li>
                <li>bg-interactive-primary-default</li>
                <li>bg-interactive-action-default</li>
              </ul>
            </div>
            <div className="bg-bg-secondary p-4 rounded-lg">
              <h4 className="font-semibold text-text-primary mb-2">Text</h4>
              <ul className="text-sm text-text-secondary space-y-1 font-mono">
                <li>text-text-primary</li>
                <li>text-text-secondary</li>
                <li>text-feedback-error</li>
                <li>text-feedback-success</li>
              </ul>
            </div>
            <div className="bg-bg-secondary p-4 rounded-lg">
              <h4 className="font-semibold text-text-primary mb-2">Border</h4>
              <ul className="text-sm text-text-secondary space-y-1 font-mono">
                <li>border-border-default</li>
                <li>border-border-strong</li>
                <li>border-border-focus</li>
              </ul>
            </div>
            <div className="bg-bg-secondary p-4 rounded-lg">
              <h4 className="font-semibold text-text-primary mb-2">States</h4>
              <ul className="text-sm text-text-secondary space-y-1 font-mono">
                <li>hover:bg-interactive-primary-hover</li>
                <li>active:bg-interactive-action-active</li>
                <li>focus:ring-interactive-primary-focus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
