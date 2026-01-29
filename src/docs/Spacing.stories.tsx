import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'B. Foundation/Spacing',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

const SpacingBox = ({
  name,
  size,
  pixels,
}: {
  name: string;
  size: string;
  pixels: string;
}) => (
  <div className="flex items-center gap-4 py-2 border-b border-border-default">
    <div className="w-24">
      <p className="text-sm font-medium text-text-primary font-mono">{name}</p>
      <p className="text-xs text-text-secondary">{pixels}</p>
    </div>
    <div
      className="h-6 bg-interactive-action-default rounded"
      style={{ width: size }}
    />
  </div>
);

export const SpacingScale: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Spacing Scale
        </h1>
        <p className="text-text-secondary">
          Escala de espacamento base do Design System. Use esses valores para
          margens, paddings e gaps.
        </p>
      </div>

      <div className="space-y-1">
        <SpacingBox name="space-1" size="4px" pixels="4px / 0.25rem" />
        <SpacingBox name="space-2" size="8px" pixels="8px / 0.5rem" />
        <SpacingBox name="space-3" size="12px" pixels="12px / 0.75rem" />
        <SpacingBox name="space-4" size="16px" pixels="16px / 1rem" />
        <SpacingBox name="space-6" size="24px" pixels="24px / 1.5rem" />
        <SpacingBox name="space-8" size="32px" pixels="32px / 2rem" />
      </div>

      <div className="p-4 bg-bg-secondary rounded-lg">
        <p className="text-sm text-text-secondary">
          <span className="font-medium text-text-primary">Dica:</span> Use as
          classes Tailwind como <code className="font-mono">p-4</code>,{' '}
          <code className="font-mono">m-2</code>,{' '}
          <code className="font-mono">gap-6</code> para aplicar esses valores.
        </p>
      </div>
    </div>
  ),
};

export const ButtonSpacing: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Button Spacing Tokens
        </h1>
        <p className="text-text-secondary">
          Tokens de espacamento especificos para o componente Button.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-default">
              <th className="text-left py-3 px-4 font-semibold text-text-primary">
                Token
              </th>
              <th className="text-left py-3 px-4 font-semibold text-text-primary">
                Valor
              </th>
              <th className="text-left py-3 px-4 font-semibold text-text-primary">
                Uso
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --button-padding-x-sm
              </td>
              <td className="py-3 px-4 text-text-secondary">12px</td>
              <td className="py-3 px-4 text-text-secondary">
                Padding horizontal - Small
              </td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --button-padding-x-md
              </td>
              <td className="py-3 px-4 text-text-secondary">16px</td>
              <td className="py-3 px-4 text-text-secondary">
                Padding horizontal - Medium
              </td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --button-padding-x-lg
              </td>
              <td className="py-3 px-4 text-text-secondary">24px</td>
              <td className="py-3 px-4 text-text-secondary">
                Padding horizontal - Large
              </td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --button-gap-sm
              </td>
              <td className="py-3 px-4 text-text-secondary">4px</td>
              <td className="py-3 px-4 text-text-secondary">
                Gap entre icone e texto - Small
              </td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --button-gap-md
              </td>
              <td className="py-3 px-4 text-text-secondary">8px</td>
              <td className="py-3 px-4 text-text-secondary">
                Gap entre icone e texto - Medium
              </td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --button-gap-lg
              </td>
              <td className="py-3 px-4 text-text-secondary">8px</td>
              <td className="py-3 px-4 text-text-secondary">
                Gap entre icone e texto - Large
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
};

export const InputSpacing: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Input Spacing Tokens
        </h1>
        <p className="text-text-secondary">
          Tokens de espacamento especificos para campos de entrada.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-default">
              <th className="text-left py-3 px-4 font-semibold text-text-primary">
                Token
              </th>
              <th className="text-left py-3 px-4 font-semibold text-text-primary">
                Valor
              </th>
              <th className="text-left py-3 px-4 font-semibold text-text-primary">
                Uso
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --input-height
              </td>
              <td className="py-3 px-4 text-text-secondary">40px</td>
              <td className="py-3 px-4 text-text-secondary">Altura do input</td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --input-padding-x
              </td>
              <td className="py-3 px-4 text-text-secondary">12px</td>
              <td className="py-3 px-4 text-text-secondary">
                Padding horizontal
              </td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --input-padding-y
              </td>
              <td className="py-3 px-4 text-text-secondary">8px</td>
              <td className="py-3 px-4 text-text-secondary">Padding vertical</td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --input-gap
              </td>
              <td className="py-3 px-4 text-text-secondary">4px</td>
              <td className="py-3 px-4 text-text-secondary">
                Gap entre label e input
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
};

export const CardSpacing: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Card Spacing Tokens
        </h1>
        <p className="text-text-secondary">
          Tokens de espacamento especificos para o componente Card.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-default">
              <th className="text-left py-3 px-4 font-semibold text-text-primary">
                Token
              </th>
              <th className="text-left py-3 px-4 font-semibold text-text-primary">
                Valor
              </th>
              <th className="text-left py-3 px-4 font-semibold text-text-primary">
                Uso
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --card-padding
              </td>
              <td className="py-3 px-4 text-text-secondary">24px</td>
              <td className="py-3 px-4 text-text-secondary">
                Padding interno do card
              </td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --card-gap
              </td>
              <td className="py-3 px-4 text-text-secondary">16px</td>
              <td className="py-3 px-4 text-text-secondary">
                Gap entre secoes do card
              </td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --card-header-gap
              </td>
              <td className="py-3 px-4 text-text-secondary">6px</td>
              <td className="py-3 px-4 text-text-secondary">
                Gap entre titulo e descricao
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
};

export const BadgeSpacing: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Badge Spacing Tokens
        </h1>
        <p className="text-text-secondary">
          Tokens de espacamento especificos para o componente Badge.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-default">
              <th className="text-left py-3 px-4 font-semibold text-text-primary">
                Token
              </th>
              <th className="text-left py-3 px-4 font-semibold text-text-primary">
                Valor
              </th>
              <th className="text-left py-3 px-4 font-semibold text-text-primary">
                Uso
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --badge-padding-x
              </td>
              <td className="py-3 px-4 text-text-secondary">8px</td>
              <td className="py-3 px-4 text-text-secondary">
                Padding horizontal
              </td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --badge-padding-y
              </td>
              <td className="py-3 px-4 text-text-secondary">2px</td>
              <td className="py-3 px-4 text-text-secondary">Padding vertical</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
};
