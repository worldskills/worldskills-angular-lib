import type { Meta, StoryObj } from '@storybook/angular';
import { FooterComponent } from 'worldskills-ng-ui';

const meta: Meta<FooterComponent> = {
  title: 'WorldSkills UI / Footer',
  component: FooterComponent,
  tags: ['autodocs'],
  argTypes: {
    isLoggedIn: { control: 'boolean' },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<FooterComponent>;

export const Default: Story = {
  args: {
    isLoggedIn: false,
  },
};

export const LoggedIn: Story = {
  args: {
    isLoggedIn: true,
    currentUser: { first_name: 'Jane', last_name: 'Doe', roles: [] } as any,
  },
};
