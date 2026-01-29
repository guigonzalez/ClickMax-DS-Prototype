import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'C. Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the checkbox',
    },
    checked: {
      control: 'radio',
      options: [true, false, 'indeterminate'],
      description: 'Checked state of the checkbox',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    label: {
      control: 'text',
      description: 'Label text for the checkbox',
    },
    description: {
      control: 'text',
      description: 'Description text shown below the label',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Marketing emails',
    description: 'Receive emails about new products and features',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-6">
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox" />
      <Checkbox size="lg" label="Large checkbox" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-text-primary">Unchecked</p>
        <Checkbox label="Unchecked checkbox" checked={false} />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium text-text-primary">Checked</p>
        <Checkbox label="Checked checkbox" checked={true} />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium text-text-primary">Indeterminate</p>
        <Checkbox label="Indeterminate checkbox" checked="indeterminate" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium text-text-primary">Disabled</p>
        <Checkbox label="Disabled checkbox" disabled />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium text-text-primary">
          Disabled Checked
        </p>
        <Checkbox label="Disabled checked" checked={true} disabled />
      </div>
    </div>
  ),
};

export const NoLabel: Story = {
  args: {},
};

export const WithLongDescription: Story = {
  args: {
    label: 'Terms and conditions',
    description:
      'By checking this box, you agree to our Terms of Service and Privacy Policy. You can change your preferences at any time in your account settings.',
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
};

export const CheckboxGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-base font-semibold text-text-primary mb-3">
          Select your interests
        </p>
        <div className="space-y-3">
          <Checkbox
            label="Design"
            description="UI/UX design and prototyping"
          />
          <Checkbox
            label="Development"
            description="Frontend and backend development"
          />
          <Checkbox
            label="Marketing"
            description="Digital marketing and SEO"
          />
          <Checkbox
            label="Product"
            description="Product management and strategy"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const Playground: Story = {
  args: {
    label: 'Checkbox label',
    description: 'Optional description text',
    size: 'md',
    checked: false,
    disabled: false,
  },
};
