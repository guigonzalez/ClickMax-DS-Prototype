import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Tokens/Colors',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

const ColorSwatch = ({
  name,
  value,
  textColor = 'text-text-primary',
}: {
  name: string;
  value: string;
  textColor?: string;
}) => (
  <div className="flex items-center gap-4">
    <div
      className="h-12 w-12 rounded-lg border border-border-default shadow-sm"
      style={{ backgroundColor: value }}
    />
    <div>
      <p className={`text-sm font-medium ${textColor}`}>{name}</p>
      <p className="text-xs text-text-secondary font-mono">{value}</p>
    </div>
  </div>
);

const ColorSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-text-primary border-b border-border-default pb-2">
      {title}
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {children}
    </div>
  </div>
);

export const AllColors: Story = {
  render: () => (
    <div className="space-y-10 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Color Tokens
        </h1>
        <p className="text-text-secondary">
          Sistema de cores semanticas do ClickMax Design System. Use sempre os
          tokens semanticos em vez das cores primitivas.
        </p>
      </div>

      <ColorSection title="Background">
        <ColorSwatch name="bg-primary" value="#ffffff" />
        <ColorSwatch name="bg-secondary" value="#e8e9eb" />
        <ColorSwatch name="bg-tertiary" value="#f5f5f5" />
        <ColorSwatch name="bg-inverse" value="#2a2d31" />
        <ColorSwatch name="bg-accent" value="#e4ff00" />
        <ColorSwatch name="bg-disabled" value="#e8e9eb" />
      </ColorSection>

      <ColorSection title="Text">
        <ColorSwatch name="text-primary" value="#2a2d31" />
        <ColorSwatch name="text-secondary" value="#8b8f96" />
        <ColorSwatch name="text-tertiary" value="#6b7280" />
        <ColorSwatch name="text-inverse" value="#ffffff" />
        <ColorSwatch name="text-accent" value="#2a2d31" />
        <ColorSwatch name="text-disabled" value="#c5c7cc" />
      </ColorSection>

      <ColorSection title="Border">
        <ColorSwatch name="border-default" value="#e8e9eb" />
        <ColorSwatch name="border-strong" value="#2a2d31" />
        <ColorSwatch name="border-subtle" value="#f5f5f5" />
        <ColorSwatch name="border-focus" value="#e4ff00" />
      </ColorSection>

      <ColorSection title="Interactive">
        <ColorSwatch name="interactive-default" value="#e4ff00" />
        <ColorSwatch name="interactive-hover" value="#d1e600" />
        <ColorSwatch name="interactive-active" value="#d1e600" />
      </ColorSection>

      <ColorSection title="Feedback">
        <ColorSwatch name="feedback-success" value="#10b981" />
        <ColorSwatch name="feedback-warning" value="#f59e0b" />
        <ColorSwatch name="feedback-error" value="#ef4444" />
        <ColorSwatch name="feedback-info" value="#3b82f6" />
      </ColorSection>
    </div>
  ),
};

export const Primitives: Story = {
  render: () => (
    <div className="space-y-10 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Primitive Colors
        </h1>
        <p className="text-text-secondary">
          Cores primitivas - NAO use diretamente nos componentes. Use os tokens
          semanticos.
        </p>
      </div>

      <ColorSection title="Yellow (Brand)">
        <ColorSwatch name="yellow-500" value="#e4ff00" />
        <ColorSwatch name="yellow-600" value="#d1e600" />
      </ColorSection>

      <ColorSection title="Gray">
        <ColorSwatch name="gray-50" value="#fafafa" />
        <ColorSwatch name="gray-100" value="#f5f5f5" />
        <ColorSwatch name="gray-200" value="#e8e9eb" />
        <ColorSwatch name="gray-300" value="#c5c7cc" />
        <ColorSwatch name="gray-400" value="#8b8f96" />
        <ColorSwatch name="gray-500" value="#6b7280" />
        <ColorSwatch name="gray-600" value="#4b5563" />
        <ColorSwatch name="gray-800" value="#3f4248" />
        <ColorSwatch name="gray-900" value="#2a2d31" />
      </ColorSection>

      <ColorSection title="Feedback Colors">
        <ColorSwatch name="red-500" value="#ef4444" />
        <ColorSwatch name="orange-500" value="#f59e0b" />
        <ColorSwatch name="green-500" value="#10b981" />
        <ColorSwatch name="blue-500" value="#3b82f6" />
      </ColorSection>
    </div>
  ),
};

export const Usage: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Como Usar
        </h1>
        <p className="text-text-secondary">
          Exemplos de uso dos tokens de cor no Tailwind CSS.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-text-primary">
          Classes Tailwind
        </h3>
        <div className="bg-bg-secondary p-4 rounded-lg font-mono text-sm space-y-2">
          <p>
            <span className="text-feedback-info">// Background</span>
          </p>
          <p>className="bg-bg-primary"</p>
          <p>className="bg-interactive-default"</p>
          <p className="mt-4">
            <span className="text-feedback-info">// Text</span>
          </p>
          <p>className="text-text-primary"</p>
          <p>className="text-feedback-error"</p>
          <p className="mt-4">
            <span className="text-feedback-info">// Border</span>
          </p>
          <p>className="border-border-default"</p>
          <p>className="border-border-strong"</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-text-primary">Exemplo</h3>
        <div className="border border-border-default rounded-lg p-4 bg-bg-primary">
          <button className="bg-interactive-default text-text-accent px-4 py-2 rounded-lg font-medium hover:bg-interactive-hover transition-colors">
            Botao Primary
          </button>
        </div>
      </div>
    </div>
  ),
};
