import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
  title: 'C. Components/Text Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'subheading18',
        'subheading16',
        'subheading14',
        'body18',
        'body16',
        'body14',
        'body12',
        'overline10',
        'xsmall8',
      ],
      description: 'The text variant',
      table: {
        type: {
          summary:
            'subheading18 | subheading16 | subheading14 | body18 | body16 | body14 | body12 | overline10 | xsmall8',
        },
        defaultValue: { summary: 'body16' },
      },
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
      table: {
        type: { summary: 'regular | medium | semibold | bold' },
        defaultValue: { summary: 'regular' },
      },
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
      table: {
        type: { summary: 'left | center | right | justify' },
        defaultValue: { summary: 'left' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'inverse', 'accent', 'disabled'],
      description: 'Text color',
      table: {
        type: { summary: 'primary | secondary | tertiary | inverse | accent | disabled' },
        defaultValue: { summary: 'primary' },
      },
    },
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'label', 'strong', 'em'],
      description: 'HTML element',
      table: {
        type: { summary: 'p | span | div | label | strong | em' },
        defaultValue: { summary: 'p' },
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body16Regular: Story = {
  args: {
    variant: 'body16',
    weight: 'regular',
    children: 'This is regular body text using Inter font at 16px.',
  },
};

export const Subheadings: Story = {
  render: () => (
    <div className="space-y-4">
      <Text variant="subheading18">Subheading 18 - Plus Jakarta Sans · Bold</Text>
      <Text variant="subheading16">Subheading 16 - Plus Jakarta Sans · Bold</Text>
      <Text variant="subheading14">Subheading 14 - Plus Jakarta Sans · Bold</Text>
    </div>
  ),
};

export const BodyVariants: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <div>
        <Text variant="body18" weight="regular">
          Body 18 Regular - This is a paragraph with Inter font at 18px with regular weight
          and 140% line-height.
        </Text>
      </div>
      <div>
        <Text variant="body16" weight="regular">
          Body 16 Regular - This is a paragraph with Inter font at 16px with regular weight
          and 150% line-height. This is the default body text size.
        </Text>
      </div>
      <div>
        <Text variant="body14" weight="regular">
          Body 14 Regular - This is a paragraph with Inter font at 14px with regular weight
          and 150% line-height. Great for smaller text.
        </Text>
      </div>
      <div>
        <Text variant="body12" weight="regular">
          Body 12 Regular - This is a paragraph with Inter font at 12px with regular weight
          and 150% line-height. Perfect for captions and small details.
        </Text>
      </div>
    </div>
  ),
};

export const WeightVariations: Story = {
  render: () => (
    <div className="space-y-3 max-w-2xl">
      <Text variant="body16" weight="regular">
        Body 16 Regular - This demonstrates the regular font weight (400).
      </Text>
      <Text variant="body16" weight="medium">
        Body 16 Medium - This demonstrates the medium font weight (500).
      </Text>
      <Text variant="body16" weight="semibold">
        Body 16 Semibold - This demonstrates the semibold font weight (600).
      </Text>
      <Text variant="body16" weight="bold">
        Body 16 Bold - This demonstrates the bold font weight (700).
      </Text>
    </div>
  ),
};

export const ColorVariations: Story = {
  render: () => (
    <div className="space-y-3">
      <Text variant="body16" color="primary">
        Primary color text - Main content color
      </Text>
      <Text variant="body16" color="secondary">
        Secondary color text - Less emphasis
      </Text>
      <Text variant="body16" color="tertiary">
        Tertiary color text - Even less emphasis
      </Text>
      <Text variant="body16" color="accent">
        Accent color text - Brand color
      </Text>
      <Text variant="body16" color="disabled">
        Disabled color text - Inactive state
      </Text>
      <div className="bg-[var(--bg-inverse)] p-4 rounded">
        <Text variant="body16" color="inverse">
          Inverse color text - For dark backgrounds
        </Text>
      </div>
    </div>
  ),
};

export const AlignmentVariants: Story = {
  render: () => (
    <div className="space-y-6 w-[600px]">
      <Text variant="body16" align="left">
        Left aligned text - This is the default alignment for most text content.
      </Text>
      <Text variant="body16" align="center">
        Center aligned text - Used for centered content like modals or cards.
      </Text>
      <Text variant="body16" align="right">
        Right aligned text - Less common but useful for specific layouts.
      </Text>
      <Text variant="body16" align="justify">
        Justified text - This text will be justified, meaning it will stretch to fill the
        width of the container, creating even edges on both sides. This is useful for formal
        documents.
      </Text>
    </div>
  ),
};

export const OverlineAndXSmall: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <Text variant="overline10" weight="medium">
          OVERLINE TEXT
        </Text>
        <Text variant="body14" color="secondary" className="mt-1">
          Overline text is uppercase, 10px, with 1% letter-spacing. Great for labels.
        </Text>
      </div>
      <div>
        <Text variant="xsmall8" weight="medium">
          XSmall text at 8px
        </Text>
        <Text variant="body14" color="secondary" className="mt-1">
          Extra small text at 8px with 100% line-height. Use sparingly.
        </Text>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 max-w-4xl">
      <div className="space-y-1">
        <Text variant="subheading18" weight="bold">
          Subheading 18
        </Text>
        <Text variant="body12" color="secondary">
          Plus Jakarta Sans · 18px · Bold · 120% · 0.5%
        </Text>
      </div>

      <div className="space-y-1">
        <Text variant="subheading16" weight="bold">
          Subheading 16
        </Text>
        <Text variant="body12" color="secondary">
          Plus Jakarta Sans · 16px · Bold · 120% · 0.5%
        </Text>
      </div>

      <div className="space-y-1">
        <Text variant="subheading14" weight="bold">
          Subheading 14
        </Text>
        <Text variant="body12" color="secondary">
          Plus Jakarta Sans · 14px · Bold · 120% · 0.5%
        </Text>
      </div>

      <div className="border-t border-[var(--border-subtle)] pt-6 space-y-4">
        <div className="space-y-1">
          <Text variant="body18" weight="regular">
            Body 18 Regular
          </Text>
          <Text variant="body12" color="secondary">
            Inter · 18px · Regular · 140% · 0%
          </Text>
        </div>

        <div className="space-y-1">
          <Text variant="body16" weight="regular">
            Body 16 Regular
          </Text>
          <Text variant="body12" color="secondary">
            Inter · 16px · Regular · 150% · 0%
          </Text>
        </div>

        <div className="space-y-1">
          <Text variant="body14" weight="regular">
            Body 14 Regular
          </Text>
          <Text variant="body12" color="secondary">
            Inter · 14px · Regular · 150% · 0%
          </Text>
        </div>

        <div className="space-y-1">
          <Text variant="body12" weight="regular">
            Body 12 Regular
          </Text>
          <Text variant="body12" color="secondary">
            Inter · 12px · Regular · 150% · 0%
          </Text>
        </div>
      </div>

      <div className="border-t border-[var(--border-subtle)] pt-6 space-y-4">
        <div className="space-y-1">
          <Text variant="overline10" weight="medium">
            OVERLINE 10 MEDIUM
          </Text>
          <Text variant="body12" color="secondary">
            Inter · 10px · Medium · 150% · 1%
          </Text>
        </div>

        <div className="space-y-1">
          <Text variant="xsmall8" weight="medium">
            XSmall 8 Medium
          </Text>
          <Text variant="body12" color="secondary">
            Inter · 8px · Medium · 100% · 0%
          </Text>
        </div>
      </div>
    </div>
  ),
};

export const WeightComparison: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div>
        <Text variant="body16" weight="regular" className="mb-2">
          Body 16 - All Weight Variations
        </Text>
        <div className="space-y-2 bg-[var(--bg-secondary)] p-4 rounded">
          <Text variant="body16" weight="regular">
            Regular (400) - The quick brown fox jumps over the lazy dog
          </Text>
          <Text variant="body16" weight="medium">
            Medium (500) - The quick brown fox jumps over the lazy dog
          </Text>
          <Text variant="body16" weight="semibold">
            Semibold (600) - The quick brown fox jumps over the lazy dog
          </Text>
          <Text variant="body16" weight="bold">
            Bold (700) - The quick brown fox jumps over the lazy dog
          </Text>
        </div>
      </div>

      <div>
        <Text variant="body14" weight="regular" className="mb-2">
          Body 14 - All Weight Variations
        </Text>
        <div className="space-y-2 bg-[var(--bg-secondary)] p-4 rounded">
          <Text variant="body14" weight="regular">
            Regular (400) - The quick brown fox jumps over the lazy dog
          </Text>
          <Text variant="body14" weight="medium">
            Medium (500) - The quick brown fox jumps over the lazy dog
          </Text>
          <Text variant="body14" weight="semibold">
            Semibold (600) - The quick brown fox jumps over the lazy dog
          </Text>
          <Text variant="body14" weight="bold">
            Bold (700) - The quick brown fox jumps over the lazy dog
          </Text>
        </div>
      </div>
    </div>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="bg-[var(--bg-primary)] border border-[var(--border-default)] p-6 rounded-lg">
        <Text variant="subheading16" className="mb-2">
          Card Title
        </Text>
        <Text variant="body14" weight="regular" color="secondary" className="mb-4">
          This is a description using Body 14 Regular with secondary color for less emphasis.
        </Text>
        <Text variant="overline10" weight="medium" color="tertiary">
          METADATA · INFO
        </Text>
      </div>

      <div className="space-y-2">
        <Text variant="body16" weight="semibold">
          Form Label
        </Text>
        <Text variant="body14" weight="regular" color="secondary">
          Helper text goes here to provide additional context
        </Text>
        <Text variant="body12" weight="regular" color="tertiary">
          Optional: Body 12 for even smaller helper text or character counts
        </Text>
      </div>
    </div>
  ),
};
