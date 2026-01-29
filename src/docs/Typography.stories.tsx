import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../components/typography/Heading';
import { Text } from '../components/typography/Text';

const meta: Meta = {
  title: 'B. Foundation/Typography',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

export const Overview: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-(--bg-primary) rounded-xl max-w-5xl">
      <div>
        <Heading level="h2" className="mb-2">
          Typography System
        </Heading>
        <Text variant="body16" color="secondary">
          Sistema de tipografia completo com Heading e Text components seguindo as
          especificações do Design System.
        </Text>
      </div>

      <div className="space-y-6">
        <div className="p-6 border border-(--border-default) rounded-lg">
          <Text variant="overline10" weight="medium" color="tertiary" className="mb-4">
            HEADINGS
          </Text>
          <div className="space-y-4">
            <div>
              <Heading level="h1">Heading 1</Heading>
              <Text variant="body12" color="secondary" className="mt-1">
                Plus Jakarta Sans · 56px · Bold · 120% · 0.5%
              </Text>
            </div>
            <div>
              <Heading level="h2">Heading 2</Heading>
              <Text variant="body12" color="secondary" className="mt-1">
                Plus Jakarta Sans · 48px · Bold · 120% · 0.5%
              </Text>
            </div>
            <div>
              <Heading level="h3">Heading 3</Heading>
              <Text variant="body12" color="secondary" className="mt-1">
                Plus Jakarta Sans · 40px · Bold · 120% · 0.5%
              </Text>
            </div>
            <div>
              <Heading level="h4">Heading 4</Heading>
              <Text variant="body12" color="secondary" className="mt-1">
                Plus Jakarta Sans · 32px · Bold · 120% · 0.5%
              </Text>
            </div>
            <div>
              <Heading level="h5">Heading 5</Heading>
              <Text variant="body12" color="secondary" className="mt-1">
                Plus Jakarta Sans · 24px · Bold · 120% · 0.5%
              </Text>
            </div>
            <div>
              <Heading level="h6">Heading 6</Heading>
              <Text variant="body12" color="secondary" className="mt-1">
                Plus Jakarta Sans · 20px · Bold · 120% · 0.5%
              </Text>
            </div>
          </div>
        </div>

        <div className="p-6 border border-(--border-default) rounded-lg">
          <Text variant="overline10" weight="medium" color="tertiary" className="mb-4">
            SUBHEADINGS
          </Text>
          <div className="space-y-3">
            <div>
              <Text variant="subheading18">Subheading 18</Text>
              <Text variant="body12" color="secondary" className="mt-1">
                Plus Jakarta Sans · 18px · Bold · 120% · 0.5%
              </Text>
            </div>
            <div>
              <Text variant="subheading16">Subheading 16</Text>
              <Text variant="body12" color="secondary" className="mt-1">
                Plus Jakarta Sans · 16px · Bold · 120% · 0.5%
              </Text>
            </div>
            <div>
              <Text variant="subheading14">Subheading 14</Text>
              <Text variant="body12" color="secondary" className="mt-1">
                Plus Jakarta Sans · 14px · Bold · 120% · 0.5%
              </Text>
            </div>
          </div>
        </div>

        <div className="p-6 border border-(--border-default) rounded-lg">
          <Text variant="overline10" weight="medium" color="tertiary" className="mb-4">
            BODY TEXT
          </Text>
          <div className="space-y-4">
            <div>
              <Text variant="body18" weight="regular">
                Body 18 Regular - Inter · 18px · 140% · 0%
              </Text>
              <div className="flex gap-2 mt-2">
                <Text variant="body18" weight="regular">
                  Regular
                </Text>
                <Text variant="body18" weight="medium">
                  Medium
                </Text>
                <Text variant="body18" weight="semibold">
                  Semibold
                </Text>
                <Text variant="body18" weight="bold">
                  Bold
                </Text>
              </div>
            </div>
            <div>
              <Text variant="body16" weight="regular">
                Body 16 Regular - Inter · 16px · 150% · 0%
              </Text>
              <div className="flex gap-2 mt-2">
                <Text variant="body16" weight="regular">
                  Regular
                </Text>
                <Text variant="body16" weight="medium">
                  Medium
                </Text>
                <Text variant="body16" weight="semibold">
                  Semibold
                </Text>
                <Text variant="body16" weight="bold">
                  Bold
                </Text>
              </div>
            </div>
            <div>
              <Text variant="body14" weight="regular">
                Body 14 Regular - Inter · 14px · 150% · 0%
              </Text>
              <div className="flex gap-2 mt-2">
                <Text variant="body14" weight="regular">
                  Regular
                </Text>
                <Text variant="body14" weight="medium">
                  Medium
                </Text>
                <Text variant="body14" weight="semibold">
                  Semibold
                </Text>
                <Text variant="body14" weight="bold">
                  Bold
                </Text>
              </div>
            </div>
            <div>
              <Text variant="body12" weight="regular">
                Body 12 Regular - Inter · 12px · 150% · 0%
              </Text>
              <div className="flex gap-2 mt-2">
                <Text variant="body12" weight="regular">
                  Regular
                </Text>
                <Text variant="body12" weight="medium">
                  Medium
                </Text>
                <Text variant="body12" weight="semibold">
                  Semibold
                </Text>
                <Text variant="body12" weight="bold">
                  Bold
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border border-(--border-default) rounded-lg">
          <Text variant="overline10" weight="medium" color="tertiary" className="mb-4">
            SPECIAL SIZES
          </Text>
          <div className="space-y-3">
            <div>
              <Text variant="overline10" weight="medium">
                OVERLINE 10 MEDIUM
              </Text>
              <Text variant="body12" color="secondary" className="mt-1">
                Inter · 10px · Medium · 150% · 1% · Uppercase
              </Text>
            </div>
            <div>
              <Text variant="xsmall8" weight="medium">
                XSmall 8 Medium
              </Text>
              <Text variant="body12" color="secondary" className="mt-1">
                Inter · 8px · Medium · 100% · 0%
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const FontFamilies: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-(--bg-primary) rounded-xl">
      <div>
        <Heading level="h3" className="mb-2">
          Font Families
        </Heading>
        <Text variant="body16" color="secondary">
          Duas famílias de fonte principais: Plus Jakarta Sans para headings e Inter para
          body text.
        </Text>
      </div>

      <div className="space-y-6">
        <div className="p-6 border border-(--border-default) rounded-lg">
          <Text variant="overline10" weight="medium" color="tertiary" className="mb-3">
            PLUS JAKARTA SANS (HEADINGS)
          </Text>
          <div className="space-y-2">
            <p
              className="text-4xl"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
            >
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </p>
            <p
              className="text-4xl"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
            >
              abcdefghijklmnopqrstuvwxyz
            </p>
            <p
              className="text-4xl"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
            >
              0123456789
            </p>
          </div>
          <Text variant="body14" color="secondary" className="mt-4">
            Usado em: H1, H2, H3, H4, H5, H6, Subheadings
          </Text>
        </div>

        <div className="p-6 border border-(--border-default) rounded-lg">
          <Text variant="overline10" weight="medium" color="tertiary" className="mb-3">
            INTER (BODY TEXT)
          </Text>
          <div className="space-y-2">
            <p
              className="text-4xl"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
            >
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </p>
            <p
              className="text-4xl"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
            >
              abcdefghijklmnopqrstuvwxyz
            </p>
            <p
              className="text-4xl"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
            >
              0123456789
            </p>
          </div>
          <Text variant="body14" color="secondary" className="mt-4">
            Usado em: Body 18, 16, 14, 12, Overline, XSmall
          </Text>
        </div>
      </div>
    </div>
  ),
};

export const WeightScale: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-(--bg-primary) rounded-xl max-w-3xl">
      <div>
        <Heading level="h3" className="mb-2">
          Font Weights
        </Heading>
        <Text variant="body16" color="secondary">
          Escala de pesos de fonte disponíveis no Design System.
        </Text>
      </div>

      <div className="space-y-1">
        <div className="flex items-center gap-6 py-4 border-b border-(--border-default)">
          <div className="w-32">
            <Text variant="body12" weight="medium" color="secondary">
              Regular
            </Text>
            <Text variant="body12" color="tertiary">
              400
            </Text>
          </div>
          <Text variant="body18" weight="regular">
            The quick brown fox jumps over the lazy dog
          </Text>
        </div>
        <div className="flex items-center gap-6 py-4 border-b border-(--border-default)">
          <div className="w-32">
            <Text variant="body12" weight="medium" color="secondary">
              Medium
            </Text>
            <Text variant="body12" color="tertiary">
              500
            </Text>
          </div>
          <Text variant="body18" weight="medium">
            The quick brown fox jumps over the lazy dog
          </Text>
        </div>
        <div className="flex items-center gap-6 py-4 border-b border-(--border-default)">
          <div className="w-32">
            <Text variant="body12" weight="medium" color="secondary">
              Semibold
            </Text>
            <Text variant="body12" color="tertiary">
              600
            </Text>
          </div>
          <Text variant="body18" weight="semibold">
            The quick brown fox jumps over the lazy dog
          </Text>
        </div>
        <div className="flex items-center gap-6 py-4">
          <div className="w-32">
            <Text variant="body12" weight="medium" color="secondary">
              Bold
            </Text>
            <Text variant="body12" color="tertiary">
              700
            </Text>
          </div>
          <Text variant="body18" weight="bold">
            The quick brown fox jumps over the lazy dog
          </Text>
        </div>
      </div>
    </div>
  ),
};

export const UsageExamples: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-(--bg-primary) rounded-xl max-w-4xl">
      <div>
        <Heading level="h3" className="mb-2">
          Usage Examples
        </Heading>
        <Text variant="body16" color="secondary">
          Exemplos práticos de uso dos componentes de tipografia.
        </Text>
      </div>

      <div className="space-y-6">
        <div className="p-6 bg-(--bg-secondary) rounded-lg">
          <Text variant="overline10" weight="medium" color="tertiary" className="mb-3">
            HERO SECTION
          </Text>
          <Heading level="h1" className="mb-4">
            Build Your Design System
          </Heading>
          <Text variant="body18" weight="regular" color="secondary" className="mb-6">
            Create beautiful, consistent user interfaces with our comprehensive component
            library and design tokens.
          </Text>
          <Text variant="body14" weight="medium" color="tertiary">
            Get started in minutes
          </Text>
        </div>

        <div className="p-6 bg-(--bg-secondary) rounded-lg">
          <Text variant="overline10" weight="medium" color="tertiary" className="mb-3">
            CARD CONTENT
          </Text>
          <Text variant="subheading18" className="mb-2">
            Feature Title
          </Text>
          <Text variant="body16" weight="regular" color="secondary" className="mb-4">
            This is a description using Body 16 Regular with secondary color for optimal
            readability and visual hierarchy.
          </Text>
          <Text variant="body12" weight="medium" color="accent">
            Learn more →
          </Text>
        </div>

        <div className="p-6 bg-(--bg-secondary) rounded-lg">
          <Text variant="overline10" weight="medium" color="tertiary" className="mb-3">
            FORM SECTION
          </Text>
          <Text variant="body16" weight="semibold" className="mb-2">
            Email Address
          </Text>
          <Text variant="body14" weight="regular" color="secondary" className="mb-2">
            We'll never share your email with anyone else.
          </Text>
          <Text variant="body12" weight="regular" color="tertiary">
            Must be a valid email address
          </Text>
        </div>

        <div className="p-6 bg-(--bg-secondary) rounded-lg">
          <Text variant="overline10" weight="medium" color="tertiary" className="mb-3">
            ARTICLE SECTION
          </Text>
          <Heading level="h2" className="mb-3">
            Article Heading
          </Heading>
          <Heading level="h4" className="mb-4">
            Section Subheading
          </Heading>
          <Text variant="body16" weight="regular" className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris.
          </Text>
          <Text variant="body14" weight="regular" color="secondary">
            Published on January 28, 2026 · 5 min read
          </Text>
        </div>
      </div>
    </div>
  ),
};

export const Components: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-(--bg-primary) rounded-xl max-w-4xl">
      <div>
        <Heading level="h3" className="mb-2">
          Typography Components
        </Heading>
        <Text variant="body16" color="secondary">
          Use os componentes <code className="text-sm bg-(--bg-secondary) px-2 py-1 rounded">Heading</code> e{' '}
          <code className="text-sm bg-(--bg-secondary) px-2 py-1 rounded">Text</code> para implementar
          a tipografia do Design System.
        </Text>
      </div>

      <div className="space-y-6">
        <div className="p-6 border border-(--border-default) rounded-lg">
          <Text variant="subheading16" className="mb-4">
            Heading Component
          </Text>
          <div className="bg-(--bg-secondary) p-4 rounded mb-4">
            <pre className="text-xs font-mono overflow-x-auto">
              {`<Heading level="h1">Page Title</Heading>
<Heading level="h2" align="center">Section</Heading>
<Heading level="h3">Subsection</Heading>`}
            </pre>
          </div>
          <Text variant="body14" color="secondary">
            Props: <code className="text-xs">level</code>, <code className="text-xs">align</code>, <code className="text-xs">className</code>
          </Text>
        </div>

        <div className="p-6 border border-(--border-default) rounded-lg">
          <Text variant="subheading16" className="mb-4">
            Text Component
          </Text>
          <div className="bg-(--bg-secondary) p-4 rounded mb-4">
            <pre className="text-xs font-mono overflow-x-auto">
              {`<Text variant="body16" weight="regular">Body text</Text>
<Text variant="subheading18">Subtitle</Text>
<Text variant="body14" weight="semibold" color="secondary">
  Caption text
</Text>`}
            </pre>
          </div>
          <Text variant="body14" color="secondary">
            Props: <code className="text-xs">variant</code>, <code className="text-xs">weight</code>, <code className="text-xs">color</code>, <code className="text-xs">align</code>, <code className="text-xs">as</code>
          </Text>
        </div>
      </div>
    </div>
  ),
};
