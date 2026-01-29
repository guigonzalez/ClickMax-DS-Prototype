import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'C. Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
      description: 'Visual variant of the textarea',
    },
    textareaSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Minimum height of the textarea',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    label: {
      control: 'text',
      description: 'Label text for the textarea',
    },
    description: {
      control: 'text',
      description: 'Description text shown below the label',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message here...',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Bio',
    description: 'Tell us a little bit about yourself',
    placeholder: 'I am a...',
  },
};

export const WithError: Story = {
  args: {
    label: 'Comment',
    error: 'Comment must be at least 10 characters',
    placeholder: 'Add your comment...',
    defaultValue: 'Too short',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[400px]">
      <Textarea
        label="Small (80px min-height)"
        textareaSize="sm"
        placeholder="Small textarea..."
      />
      <Textarea
        label="Medium (100px min-height)"
        textareaSize="md"
        placeholder="Medium textarea..."
      />
      <Textarea
        label="Large (120px min-height)"
        textareaSize="lg"
        placeholder="Large textarea..."
      />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[400px]">
      <Textarea label="Default" placeholder="Default state..." />
      <Textarea
        label="With value"
        defaultValue="This textarea has some content already filled in."
      />
      <Textarea
        label="Disabled"
        disabled
        placeholder="Disabled textarea..."
      />
      <Textarea
        label="Disabled with value"
        disabled
        defaultValue="This is disabled content."
      />
      <Textarea
        label="Error"
        error="This field is required"
        placeholder="Error state..."
      />
    </div>
  ),
};

export const NoLabel: Story = {
  args: {
    placeholder: 'Textarea without label...',
  },
};

export const ContactForm: Story = {
  render: () => (
    <div className="w-[500px] space-y-4">
      <h3 className="text-lg font-semibold text-text-primary">Contact Us</h3>
      <Textarea
        label="Subject"
        textareaSize="sm"
        placeholder="What is this about?"
      />
      <Textarea
        label="Message"
        description="Please provide as much detail as possible"
        placeholder="Describe your issue or question..."
        textareaSize="lg"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const FeedbackForm: Story = {
  render: () => (
    <div className="w-[500px] space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Share Your Feedback
        </h3>
        <p className="text-sm text-text-secondary">
          We'd love to hear your thoughts on our product
        </p>
      </div>
      <Textarea
        label="What do you like most?"
        description="Tell us what features you find most valuable"
        placeholder="I really appreciate..."
        textareaSize="md"
      />
      <Textarea
        label="What could be improved?"
        description="Help us make the product better for you"
        placeholder="I think you could..."
        textareaSize="md"
      />
      <Textarea
        label="Additional comments"
        description="Anything else you'd like to share?"
        placeholder="Optional feedback..."
        textareaSize="sm"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const CharacterCounter: Story = {
  render: () => {
    const maxLength = 200;
    return (
      <div className="w-[400px]">
        <Textarea
          label="Tweet"
          description={`${maxLength} characters maximum`}
          placeholder="What's happening?"
          maxLength={maxLength}
        />
      </div>
    );
  },
};

export const Playground: Story = {
  args: {
    label: 'Textarea label',
    description: 'Optional description text',
    placeholder: 'Type here...',
    textareaSize: 'md',
    variant: 'default',
    disabled: false,
  },
};
