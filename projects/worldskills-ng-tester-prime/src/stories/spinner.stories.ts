import type { Meta, StoryObj } from '@storybook/angular';
import { SpinnerComponent } from '@worldskills/ng-ui';

const meta: Meta<SpinnerComponent> = {
  title: 'WorldSkills UI / Spinner',
  component: SpinnerComponent,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text', description: 'Static message shown below the spinner' },
    messages: { control: 'object', description: 'Array of messages to cycle through' },
    interval: { control: { type: 'number', min: 500, max: 10000, step: 500 }, description: 'Milliseconds between message changes' },
  },
};

export default meta;
type Story = StoryObj<SpinnerComponent>;

export const Default: Story = {};

export const StaticMessage: Story = {
  args: { message: 'Loading your data...' },
};

export const CyclingMessages: Story = {
  args: {
    messages: [
      'Crunching the numbers...',
      'Almost there...',
      'Just a moment...',
      'Hang tight!',
    ],
    interval: 2000,
  },
};

export const FastCycle: Story = {
  args: {
    messages: ['Loading...', 'Please wait...', 'Fetching data...'],
    interval: 1000,
  },
};
