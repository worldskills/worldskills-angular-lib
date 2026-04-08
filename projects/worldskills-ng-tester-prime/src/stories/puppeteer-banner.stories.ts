import type { Meta, StoryObj } from '@storybook/angular';
import { PuppeteerBannerComponent } from 'worldskills-ng-ui';

const meta: Meta<PuppeteerBannerComponent> = {
  title: 'WorldSkills UI / Banners / Puppeteer Banner',
  component: PuppeteerBannerComponent,
  tags: ['autodocs'],
  argTypes: {
    currentUser: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<PuppeteerBannerComponent>;

export const Hidden: Story = {
  args: {
    currentUser: { first_name: 'Jane', last_name: 'Doe', roles: [] } as any,
  },
};

export const Active: Story = {
  args: {
    currentUser: {
      first_name: 'Jane',
      last_name: 'Doe',
      roles: [],
      puppeteer: { first_name: 'Admin', last_name: 'User' },
    } as any,
  },
};
