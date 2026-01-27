import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './Radio';

const meta: Meta<typeof RadioGroup> = {
  title: 'Forms/Radio',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the radio group is disabled',
    },
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'Orientation of the radio group',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="option-one">
      <RadioGroupItem value="option-one" label="Option One" id="option-one" />
      <RadioGroupItem value="option-two" label="Option Two" id="option-two" />
      <RadioGroupItem
        value="option-three"
        label="Option Three"
        id="option-three"
      />
    </RadioGroup>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <RadioGroupItem
        value="default"
        label="Default"
        description="Default spacing for most use cases"
        id="default"
      />
      <RadioGroupItem
        value="comfortable"
        label="Comfortable"
        description="More spacing for a relaxed feel"
        id="comfortable"
      />
      <RadioGroupItem
        value="compact"
        label="Compact"
        description="Less spacing for dense layouts"
        id="compact"
      />
    </RadioGroup>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm font-medium text-text-primary mb-3">
          Small Size
        </p>
        <RadioGroup defaultValue="sm-1">
          <RadioGroupItem value="sm-1" label="Option One" id="sm-1" size="sm" />
          <RadioGroupItem value="sm-2" label="Option Two" id="sm-2" size="sm" />
          <RadioGroupItem value="sm-3" label="Option Three" id="sm-3" size="sm" />
        </RadioGroup>
      </div>
      <div>
        <p className="text-sm font-medium text-text-primary mb-3">
          Medium Size (Default)
        </p>
        <RadioGroup defaultValue="md-1">
          <RadioGroupItem value="md-1" label="Option One" id="md-1" size="md" />
          <RadioGroupItem value="md-2" label="Option Two" id="md-2" size="md" />
          <RadioGroupItem value="md-3" label="Option Three" id="md-3" size="md" />
        </RadioGroup>
      </div>
      <div>
        <p className="text-sm font-medium text-text-primary mb-3">
          Large Size
        </p>
        <RadioGroup defaultValue="lg-1">
          <RadioGroupItem value="lg-1" label="Option One" id="lg-1" size="lg" />
          <RadioGroupItem value="lg-2" label="Option Two" id="lg-2" size="lg" />
          <RadioGroupItem value="lg-3" label="Option Three" id="lg-3" size="lg" />
        </RadioGroup>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one" disabled>
      <RadioGroupItem value="option-one" label="Option One" id="d-option-one" />
      <RadioGroupItem value="option-two" label="Option Two" id="d-option-two" />
      <RadioGroupItem
        value="option-three"
        label="Option Three"
        id="d-option-three"
      />
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup
      defaultValue="option-one"
      orientation="horizontal"
      className="flex gap-6"
    >
      <RadioGroupItem value="option-one" label="Option One" id="h-option-one" />
      <RadioGroupItem value="option-two" label="Option Two" id="h-option-two" />
      <RadioGroupItem
        value="option-three"
        label="Option Three"
        id="h-option-three"
      />
    </RadioGroup>
  ),
};

export const PaymentMethod: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <h3 className="text-base font-semibold text-text-primary mb-4">
        Choose payment method
      </h3>
      <RadioGroup defaultValue="card">
        <RadioGroupItem
          value="card"
          label="Credit Card"
          description="Pay with Visa, Mastercard, or American Express"
          id="card"
        />
        <RadioGroupItem
          value="paypal"
          label="PayPal"
          description="Fast and secure payment with your PayPal account"
          id="paypal"
        />
        <RadioGroupItem
          value="bank"
          label="Bank Transfer"
          description="Direct transfer from your bank account"
          id="bank"
        />
        <RadioGroupItem
          value="crypto"
          label="Cryptocurrency"
          description="Pay with Bitcoin, Ethereum, or other cryptocurrencies"
          id="crypto"
        />
      </RadioGroup>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const NotificationSettings: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-6">
      <div>
        <h3 className="text-base font-semibold text-text-primary mb-1">
          Notification Frequency
        </h3>
        <p className="text-sm text-text-secondary mb-4">
          How often do you want to receive notifications?
        </p>
        <RadioGroup defaultValue="daily">
          <RadioGroupItem
            value="realtime"
            label="Real-time"
            description="Get notified immediately"
            id="realtime"
          />
          <RadioGroupItem
            value="daily"
            label="Daily digest"
            description="Once per day summary"
            id="daily"
          />
          <RadioGroupItem
            value="weekly"
            label="Weekly digest"
            description="Once per week summary"
            id="weekly"
          />
          <RadioGroupItem
            value="never"
            label="Never"
            description="Disable all notifications"
            id="never"
          />
        </RadioGroup>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const NoLabel: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <RadioGroupItem value="option-one" id="nl-option-one" />
      <RadioGroupItem value="option-two" id="nl-option-two" />
      <RadioGroupItem value="option-three" id="nl-option-three" />
    </RadioGroup>
  ),
};

export const Playground: Story = {
  args: {
    disabled: false,
    orientation: 'vertical',
  },
  render: (args) => (
    <RadioGroup {...args} defaultValue="option-one">
      <RadioGroupItem
        value="option-one"
        label="Option One"
        description="Description for option one"
        id="p-option-one"
        size="md"
      />
      <RadioGroupItem
        value="option-two"
        label="Option Two"
        description="Description for option two"
        id="p-option-two"
        size="md"
      />
      <RadioGroupItem
        value="option-three"
        label="Option Three"
        description="Description for option three"
        id="p-option-three"
        size="md"
      />
    </RadioGroup>
  ),
};
