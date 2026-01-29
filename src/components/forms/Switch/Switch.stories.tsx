import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'C. Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the switch',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state of the switch',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
    label: {
      control: 'text',
      description: 'Label text for the switch',
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
    label: 'Enable notifications',
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
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch" />
      <Switch size="lg" label="Large switch" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-text-primary">Unchecked</p>
        <Switch label="Unchecked switch" checked={false} />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium text-text-primary">Checked</p>
        <Switch label="Checked switch" defaultChecked />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium text-text-primary">Disabled</p>
        <Switch label="Disabled switch" disabled />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium text-text-primary">
          Disabled Checked
        </p>
        <Switch label="Disabled checked" defaultChecked disabled />
      </div>
    </div>
  ),
};

export const NoLabel: Story = {
  args: {},
};

export const NotificationSettings: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <div>
        <h3 className="text-base font-semibold text-text-primary mb-4">
          Notification Preferences
        </h3>
        <div className="space-y-4">
          <Switch
            label="Push notifications"
            description="Receive push notifications on your device"
            defaultChecked
            id="push"
          />
          <Switch
            label="Email notifications"
            description="Receive email updates about your account"
            defaultChecked
            id="email"
          />
          <Switch
            label="SMS notifications"
            description="Receive text messages for important updates"
            id="sms"
          />
          <Switch
            label="Weekly digest"
            description="Get a weekly summary of your activity"
            id="digest"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const PrivacySettings: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-6">
      <div>
        <h3 className="text-base font-semibold text-text-primary mb-1">
          Privacy & Security
        </h3>
        <p className="text-sm text-text-secondary mb-4">
          Manage your privacy and security settings
        </p>
        <div className="space-y-4">
          <Switch
            label="Profile visibility"
            description="Make your profile visible to other users"
            defaultChecked
            id="profile"
          />
          <Switch
            label="Activity status"
            description="Show when you're active on the platform"
            defaultChecked
            id="activity"
          />
          <Switch
            label="Two-factor authentication"
            description="Add an extra layer of security to your account"
            id="2fa"
          />
          <Switch
            label="Data collection"
            description="Allow us to collect anonymous usage data"
            disabled
            id="data"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const FeatureToggles: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-6">
      <div>
        <h3 className="text-base font-semibold text-text-primary mb-4">
          Feature Flags
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-bg-tertiary rounded-lg">
            <div className="flex-1 mr-4">
              <p className="text-sm font-medium text-text-primary">
                Dark mode
              </p>
              <p className="text-xs text-text-secondary">
                Enable dark theme
              </p>
            </div>
            <Switch size="sm" id="dark" />
          </div>
          <div className="flex items-center justify-between p-3 bg-bg-tertiary rounded-lg">
            <div className="flex-1 mr-4">
              <p className="text-sm font-medium text-text-primary">
                Compact view
              </p>
              <p className="text-xs text-text-secondary">
                Show more content
              </p>
            </div>
            <Switch size="sm" defaultChecked id="compact" />
          </div>
          <div className="flex items-center justify-between p-3 bg-bg-tertiary rounded-lg">
            <div className="flex-1 mr-4">
              <p className="text-sm font-medium text-text-primary">
                Beta features
              </p>
              <p className="text-xs text-text-secondary">Try new features</p>
            </div>
            <Switch size="sm" id="beta" />
          </div>
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
    label: 'Switch label',
    description: 'Optional description text',
    size: 'md',
    checked: false,
    disabled: false,
  },
};
