import type { Meta, StoryObj } from '@storybook/angular';
import { StagingBannerComponent } from '@worldskills/ng-ui';

const meta: Meta<StagingBannerComponent> = {
  title: 'WorldSkills UI / Banners / Staging Banner',
  component: StagingBannerComponent,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<StagingBannerComponent>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    message: 'Warning: you are connected to the UAT environment. Data may be reset at any time.',
  },
};
