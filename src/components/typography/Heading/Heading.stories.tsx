import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta = {
  title: 'C. Components/Text Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'The heading level',
      table: {
        type: { summary: 'h1 | h2 | h3 | h4 | h5 | h6' },
        defaultValue: { summary: 'h2' },
      },
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
      table: {
        type: { summary: 'left | center | right' },
        defaultValue: { summary: 'left' },
      },
    },
    children: {
      control: 'text',
      description: 'The content of the heading',
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    level: 'h1',
    children: 'Heading 1',
  },
};

export const H2: Story = {
  args: {
    level: 'h2',
    children: 'Heading 2',
  },
};

export const H3: Story = {
  args: {
    level: 'h3',
    children: 'Heading 3',
  },
};

export const H4: Story = {
  args: {
    level: 'h4',
    children: 'Heading 4',
  },
};

export const H5: Story = {
  args: {
    level: 'h5',
    children: 'Heading 5',
  },
};

export const H6: Story = {
  args: {
    level: 'h6',
    children: 'Heading 6',
  },
};

export const AllHeadings: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level="h1">H1 - Plus Jakarta Sans · 56px · Bold</Heading>
      <Heading level="h2">H2 - Plus Jakarta Sans · 48px · Bold</Heading>
      <Heading level="h3">H3 - Plus Jakarta Sans · 40px · Bold</Heading>
      <Heading level="h4">H4 - Plus Jakarta Sans · 32px · Bold</Heading>
      <Heading level="h5">H5 - Plus Jakarta Sans · 24px · Bold</Heading>
      <Heading level="h6">H6 - Plus Jakarta Sans · 20px · Bold</Heading>
    </div>
  ),
};

export const AlignmentVariants: Story = {
  render: () => (
    <div className="space-y-6 w-[600px]">
      <div>
        <Heading level="h3" align="left">
          Left Aligned Heading
        </Heading>
        <p className="text-sm text-[var(--text-secondary)] mt-2">
          Default alignment
        </p>
      </div>
      <div>
        <Heading level="h3" align="center">
          Center Aligned Heading
        </Heading>
        <p className="text-sm text-[var(--text-secondary)] mt-2 text-center">
          Centered text
        </p>
      </div>
      <div>
        <Heading level="h3" align="right">
          Right Aligned Heading
        </Heading>
        <p className="text-sm text-[var(--text-secondary)] mt-2 text-right">
          Right aligned text
        </p>
      </div>
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    level: 'h2',
    children:
      'This is a very long heading that demonstrates how the heading component wraps text when it exceeds the container width',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const TypographySpecifications: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      <div className="space-y-2">
        <Heading level="h1">H1 Heading</Heading>
        <div className="text-xs text-[var(--text-secondary)] space-y-1">
          <p>Font: Plus Jakarta Sans</p>
          <p>Size: 56px (3.5rem)</p>
          <p>Weight: Bold (700)</p>
          <p>Line-height: 120% (1.2)</p>
          <p>Letter-spacing: 0.5% (0.005em)</p>
        </div>
      </div>

      <div className="space-y-2">
        <Heading level="h2">H2 Heading</Heading>
        <div className="text-xs text-[var(--text-secondary)] space-y-1">
          <p>Font: Plus Jakarta Sans</p>
          <p>Size: 48px (3rem)</p>
          <p>Weight: Bold (700)</p>
          <p>Line-height: 120% (1.2)</p>
          <p>Letter-spacing: 0.5% (0.005em)</p>
        </div>
      </div>

      <div className="space-y-2">
        <Heading level="h3">H3 Heading</Heading>
        <div className="text-xs text-[var(--text-secondary)] space-y-1">
          <p>Font: Plus Jakarta Sans</p>
          <p>Size: 40px (2.5rem)</p>
          <p>Weight: Bold (700)</p>
          <p>Line-height: 120% (1.2)</p>
          <p>Letter-spacing: 0.5% (0.005em)</p>
        </div>
      </div>

      <div className="space-y-2">
        <Heading level="h4">H4 Heading</Heading>
        <div className="text-xs text-[var(--text-secondary)] space-y-1">
          <p>Font: Plus Jakarta Sans</p>
          <p>Size: 32px (2rem)</p>
          <p>Weight: Bold (700)</p>
          <p>Line-height: 120% (1.2)</p>
          <p>Letter-spacing: 0.5% (0.005em)</p>
        </div>
      </div>

      <div className="space-y-2">
        <Heading level="h5">H5 Heading</Heading>
        <div className="text-xs text-[var(--text-secondary)] space-y-1">
          <p>Font: Plus Jakarta Sans</p>
          <p>Size: 24px (1.5rem)</p>
          <p>Weight: Bold (700)</p>
          <p>Line-height: 120% (1.2)</p>
          <p>Letter-spacing: 0.5% (0.005em)</p>
        </div>
      </div>

      <div className="space-y-2">
        <Heading level="h6">H6 Heading</Heading>
        <div className="text-xs text-[var(--text-secondary)] space-y-1">
          <p>Font: Plus Jakarta Sans</p>
          <p>Size: 20px (1.25rem)</p>
          <p>Weight: Bold (700)</p>
          <p>Line-height: 120% (1.2)</p>
          <p>Letter-spacing: 0.5% (0.005em)</p>
        </div>
      </div>
    </div>
  ),
};
