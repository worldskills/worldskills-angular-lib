import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent, MenuItem } from 'worldskills-ng-ui';
import { provideRouter } from '@angular/router';
import { applicationConfig } from '@storybook/angular';

const meta: Meta<HeaderComponent> = {
  title: 'WorldSkills UI / Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({ providers: [provideRouter([])] }),
  ],
  argTypes: {
    appName: { control: 'text' },
    isLoggedIn: { control: 'boolean' },
    showLoginAndLogoutButtons: { control: 'boolean' },
    currentUser: { control: 'object' },
    menuItems: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<HeaderComponent>;

const item = (label: string, url: string, extra: Partial<MenuItem> = {}): MenuItem => ({
  label,
  url,
  hidden: false,
  requireLogin: false,
  requiredRoles: [],
  ...extra,
});

export const LoggedOut: Story = {
  args: {
    appName: 'My Application',
    isLoggedIn: false,
    showLoginAndLogoutButtons: true,
    menuItems: [],
  },
};

export const LoggedIn: Story = {
  args: {
    appName: 'My Application',
    isLoggedIn: true,
    showLoginAndLogoutButtons: true,
    currentUser: { first_name: 'Jane', last_name: 'Doe', roles: [] } as any,
    menuItems: [
      item('Dashboard', '/'),
      item('Reports', '/reports'),
      item('Settings', '/settings'),
    ],
  },
};

export const WithSubMenu: Story = {
  args: {
    appName: 'My Application',
    isLoggedIn: true,
    showLoginAndLogoutButtons: true,
    currentUser: { first_name: 'Jane', last_name: 'Doe', roles: [] } as any,
    menuItems: [
      item('Admin', '/admin', {
        subMenuItems: [
          item('Users', '/admin/users'),
          item('Roles', '/admin/roles'),
        ],
      }),
      item('Dashboard', '/'),
    ],
  },
};
