import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Tokens/Typography',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

const FontSizeRow = ({
  name,
  size,
  className,
}: {
  name: string;
  size: string;
  className: string;
}) => (
  <div className="flex items-baseline gap-6 py-3 border-b border-border-default">
    <div className="w-20">
      <p className="text-xs text-text-secondary font-mono">{name}</p>
      <p className="text-xs text-text-tertiary">{size}</p>
    </div>
    <p className={`${className} text-text-primary`}>
      The quick brown fox jumps over the lazy dog
    </p>
  </div>
);

const FontWeightRow = ({
  name,
  weight,
  className,
}: {
  name: string;
  weight: string;
  className: string;
}) => (
  <div className="flex items-center gap-6 py-3 border-b border-border-default">
    <div className="w-24">
      <p className="text-xs text-text-secondary font-mono">{name}</p>
      <p className="text-xs text-text-tertiary">{weight}</p>
    </div>
    <p className={`text-lg ${className} text-text-primary`}>
      Design System
    </p>
  </div>
);

export const FontSizes: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Font Sizes
        </h1>
        <p className="text-text-secondary">
          Escala de tamanhos de fonte do Design System.
        </p>
      </div>

      <div className="space-y-1">
        <FontSizeRow name="text-xs" size="12px / 0.75rem" className="text-xs" />
        <FontSizeRow name="text-sm" size="14px / 0.875rem" className="text-sm" />
        <FontSizeRow
          name="text-base"
          size="16px / 1rem"
          className="text-base"
        />
        <FontSizeRow
          name="text-lg"
          size="18px / 1.125rem"
          className="text-lg"
        />
        <FontSizeRow
          name="text-xl"
          size="20px / 1.25rem"
          className="text-xl"
        />
        <FontSizeRow
          name="text-2xl"
          size="24px / 1.5rem"
          className="text-2xl"
        />
        <FontSizeRow
          name="text-3xl"
          size="30px / 1.875rem"
          className="text-3xl"
        />
        <FontSizeRow
          name="text-4xl"
          size="36px / 2.25rem"
          className="text-4xl"
        />
        <FontSizeRow name="text-5xl" size="48px / 3rem" className="text-5xl" />
      </div>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Font Weights
        </h1>
        <p className="text-text-secondary">
          Pesos de fonte disponiveis no Design System.
        </p>
      </div>

      <div className="space-y-1">
        <FontWeightRow name="font-normal" weight="400" className="font-normal" />
        <FontWeightRow name="font-medium" weight="500" className="font-medium" />
        <FontWeightRow
          name="font-semibold"
          weight="600"
          className="font-semibold"
        />
        <FontWeightRow name="font-bold" weight="700" className="font-bold" />
      </div>
    </div>
  ),
};

export const FontFamily: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Font Families
        </h1>
        <p className="text-text-secondary">
          Familias de fonte do Design System.
        </p>
      </div>

      <div className="space-y-6">
        <div className="p-4 border border-border-default rounded-lg">
          <p className="text-xs text-text-secondary mb-2 font-mono">
            font-sans (Inter)
          </p>
          <p className="text-xl font-sans text-text-primary">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </p>
          <p className="text-xl font-sans text-text-primary">
            abcdefghijklmnopqrstuvwxyz
          </p>
          <p className="text-xl font-sans text-text-primary">0123456789</p>
        </div>

        <div className="p-4 border border-border-default rounded-lg">
          <p className="text-xs text-text-secondary mb-2 font-mono">
            font-mono (JetBrains Mono)
          </p>
          <p className="text-xl font-mono text-text-primary">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </p>
          <p className="text-xl font-mono text-text-primary">
            abcdefghijklmnopqrstuvwxyz
          </p>
          <p className="text-xl font-mono text-text-primary">0123456789</p>
        </div>
      </div>
    </div>
  ),
};

export const TextStyles: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Text Styles
        </h1>
        <p className="text-text-secondary">
          Combinacoes comuns de tipografia para diferentes contextos.
        </p>
      </div>

      <div className="space-y-6">
        <div className="p-4 border border-border-default rounded-lg">
          <p className="text-xs text-text-secondary mb-3 font-mono">
            Heading 1: text-3xl font-bold
          </p>
          <h1 className="text-3xl font-bold text-text-primary">
            Titulo Principal
          </h1>
        </div>

        <div className="p-4 border border-border-default rounded-lg">
          <p className="text-xs text-text-secondary mb-3 font-mono">
            Heading 2: text-2xl font-semibold
          </p>
          <h2 className="text-2xl font-semibold text-text-primary">
            Titulo Secundario
          </h2>
        </div>

        <div className="p-4 border border-border-default rounded-lg">
          <p className="text-xs text-text-secondary mb-3 font-mono">
            Heading 3: text-lg font-semibold
          </p>
          <h3 className="text-lg font-semibold text-text-primary">
            Subtitulo
          </h3>
        </div>

        <div className="p-4 border border-border-default rounded-lg">
          <p className="text-xs text-text-secondary mb-3 font-mono">
            Body: text-base font-normal
          </p>
          <p className="text-base font-normal text-text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="p-4 border border-border-default rounded-lg">
          <p className="text-xs text-text-secondary mb-3 font-mono">
            Small: text-sm font-normal
          </p>
          <p className="text-sm font-normal text-text-secondary">
            Texto secundario para descricoes e informacoes auxiliares.
          </p>
        </div>

        <div className="p-4 border border-border-default rounded-lg">
          <p className="text-xs text-text-secondary mb-3 font-mono">
            Caption: text-xs font-medium
          </p>
          <p className="text-xs font-medium text-text-tertiary">
            LABEL OU CAPTION
          </p>
        </div>
      </div>
    </div>
  ),
};
