import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Tokens/Effects',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

const ShadowBox = ({
  name,
  shadowClass,
  cssValue,
}: {
  name: string;
  shadowClass: string;
  cssValue: string;
}) => (
  <div className="flex items-center gap-6 py-4">
    <div
      className={`h-16 w-32 bg-bg-primary rounded-lg ${shadowClass} border border-border-subtle`}
    />
    <div className="flex-1">
      <p className="text-sm font-medium text-text-primary font-mono">{name}</p>
      <p className="text-xs text-text-secondary mt-1 font-mono max-w-md truncate">
        {cssValue}
      </p>
    </div>
  </div>
);

const RadiusBox = ({
  name,
  radiusClass,
  value,
}: {
  name: string;
  radiusClass: string;
  value: string;
}) => (
  <div className="flex items-center gap-6 py-3">
    <div
      className={`h-16 w-16 bg-interactive-default ${radiusClass}`}
    />
    <div>
      <p className="text-sm font-medium text-text-primary font-mono">{name}</p>
      <p className="text-xs text-text-secondary">{value}</p>
    </div>
  </div>
);

export const Shadows: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-secondary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Shadow Tokens
        </h1>
        <p className="text-text-secondary">
          Sombras para criar hierarquia visual e profundidade.
        </p>
      </div>

      <div className="space-y-2">
        <ShadowBox
          name="--shadow-sm"
          shadowClass="shadow-sm"
          cssValue="0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
        />
        <ShadowBox
          name="--shadow-md"
          shadowClass="shadow-md"
          cssValue="0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
        />
        <ShadowBox
          name="--shadow-lg"
          shadowClass="shadow-lg"
          cssValue="0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
        />
      </div>

      <div className="p-4 bg-bg-primary rounded-lg">
        <p className="text-sm text-text-secondary">
          <span className="font-medium text-text-primary">Uso:</span> Use{' '}
          <code className="font-mono">shadow-sm</code> para elementos sutis,{' '}
          <code className="font-mono">shadow-md</code> para cards e dropdowns,{' '}
          <code className="font-mono">shadow-lg</code> para modais e popovers.
        </p>
      </div>
    </div>
  ),
};

export const BorderRadius: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Border Radius Tokens
        </h1>
        <p className="text-text-secondary">
          Escala de arredondamento de bordas para diferentes contextos.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <RadiusBox name="--radius-sm" radiusClass="rounded-sm" value="4px" />
        <RadiusBox name="--radius-md" radiusClass="rounded-md" value="6px" />
        <RadiusBox name="--radius-lg" radiusClass="rounded-lg" value="8px" />
        <RadiusBox name="--radius-xl" radiusClass="rounded-xl" value="12px" />
        <RadiusBox
          name="--radius-full"
          radiusClass="rounded-full"
          value="9999px"
        />
      </div>

      <div className="p-4 bg-bg-secondary rounded-lg">
        <p className="text-sm text-text-secondary">
          <span className="font-medium text-text-primary">Recomendacao:</span>{' '}
          Use <code className="font-mono">rounded-lg</code> para a maioria dos
          componentes (buttons, cards, inputs).{' '}
          <code className="font-mono">rounded-full</code> para avatares e badges
          circulares.
        </p>
      </div>
    </div>
  ),
};

export const ZIndex: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Z-Index Scale
        </h1>
        <p className="text-text-secondary">
          Escala de empilhamento para controlar a ordem de sobreposicao dos
          elementos.
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
                --z-dropdown
              </td>
              <td className="py-3 px-4 text-text-secondary">1000</td>
              <td className="py-3 px-4 text-text-secondary">
                Menus dropdown, selects
              </td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --z-sticky
              </td>
              <td className="py-3 px-4 text-text-secondary">1100</td>
              <td className="py-3 px-4 text-text-secondary">
                Headers fixos, navbars
              </td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --z-overlay
              </td>
              <td className="py-3 px-4 text-text-secondary">1300</td>
              <td className="py-3 px-4 text-text-secondary">
                Overlays, backdrops
              </td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --z-modal
              </td>
              <td className="py-3 px-4 text-text-secondary">1400</td>
              <td className="py-3 px-4 text-text-secondary">Modais, dialogs</td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --z-popover
              </td>
              <td className="py-3 px-4 text-text-secondary">1500</td>
              <td className="py-3 px-4 text-text-secondary">Popovers</td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --z-toast
              </td>
              <td className="py-3 px-4 text-text-secondary">1700</td>
              <td className="py-3 px-4 text-text-secondary">
                Toasts, notificacoes
              </td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono text-text-primary">
                --z-tooltip
              </td>
              <td className="py-3 px-4 text-text-secondary">1800</td>
              <td className="py-3 px-4 text-text-secondary">Tooltips</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
};

export const Animations: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-bg-primary rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Animation Tokens
        </h1>
        <p className="text-text-secondary">
          Duracoes e curvas de aceleracao para animacoes consistentes.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Duracoes
          </h3>
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
                    --duration-instant
                  </td>
                  <td className="py-3 px-4 text-text-secondary">0ms</td>
                  <td className="py-3 px-4 text-text-secondary">
                    Sem animacao
                  </td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-3 px-4 font-mono text-text-primary">
                    --duration-fast
                  </td>
                  <td className="py-3 px-4 text-text-secondary">150ms</td>
                  <td className="py-3 px-4 text-text-secondary">
                    Hovers, micro-interacoes
                  </td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-3 px-4 font-mono text-text-primary">
                    --duration-normal
                  </td>
                  <td className="py-3 px-4 text-text-secondary">200ms</td>
                  <td className="py-3 px-4 text-text-secondary">
                    Transicoes padrao
                  </td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-3 px-4 font-mono text-text-primary">
                    --duration-slow
                  </td>
                  <td className="py-3 px-4 text-text-secondary">300ms</td>
                  <td className="py-3 px-4 text-text-secondary">
                    Modais, expansoes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Curvas de Aceleracao (Easing)
          </h3>
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
                    --ease-default
                  </td>
                  <td className="py-3 px-4 text-text-secondary font-mono text-xs">
                    cubic-bezier(0.4, 0, 0.2, 1)
                  </td>
                  <td className="py-3 px-4 text-text-secondary">
                    Transicoes gerais
                  </td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-3 px-4 font-mono text-text-primary">
                    --ease-enter
                  </td>
                  <td className="py-3 px-4 text-text-secondary font-mono text-xs">
                    cubic-bezier(0, 0, 0.2, 1)
                  </td>
                  <td className="py-3 px-4 text-text-secondary">
                    Elementos entrando
                  </td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-3 px-4 font-mono text-text-primary">
                    --ease-exit
                  </td>
                  <td className="py-3 px-4 text-text-secondary font-mono text-xs">
                    cubic-bezier(0.4, 0, 1, 1)
                  </td>
                  <td className="py-3 px-4 text-text-secondary">
                    Elementos saindo
                  </td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-3 px-4 font-mono text-text-primary">
                    --ease-bounce
                  </td>
                  <td className="py-3 px-4 text-text-secondary font-mono text-xs">
                    cubic-bezier(0.175, 0.885, 0.32, 1.275)
                  </td>
                  <td className="py-3 px-4 text-text-secondary">
                    Efeito de "quique"
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ),
};
