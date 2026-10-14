import { Meta, StoryObj, applicationConfig, moduleMetadata } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { WsPageHeaderComponent } from '@worldskills/ng-ui';

const meta: Meta<WsPageHeaderComponent> = {
  title: 'WorldSkills UI / Page Header',
  component: WsPageHeaderComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({ providers: [provideRouter([])] }),
    moduleMetadata({ imports: [ButtonModule] }),
  ],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    backLink: { control: 'text' },
    backLabel: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `
Page title bar used at the top of every page: optional back link, media (logo/flag), title (h1),
subtitle, details and actions.

Content slots:
- \`[wsPageHeaderMedia]\` — left of the title
- \`[wsPageHeaderActions]\` — right side (below the title on small screens)
- default content — details under the subtitle

\`\`\`html
<ws-ng-ui-page-header title="Finland" subtitle="Member" backLink="/members">
  <img wsPageHeaderMedia src="flag.png" alt="" />
  <span>Joined 1990</span>
  <p-button wsPageHeaderActions label="Edit" icon="pi pi-pencil" />
</ws-ng-ui-page-header>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<WsPageHeaderComponent>;

export const TitleOnly: Story = {
  name: 'Title only',
  args: { title: 'Members' },
};

export const ListPage: Story = {
  name: 'List page with actions',
  args: { title: 'Members', subtitle: 'All WorldSkills Members' },
  render: (args) => ({
    props: args,
    template: `
      <ws-ng-ui-page-header [title]="title" [subtitle]="subtitle">
        <p-button wsPageHeaderActions label="Export" icon="pi pi-download" severity="secondary" [outlined]="true" />
        <p-button wsPageHeaderActions label="New member" icon="pi pi-plus" />
      </ws-ng-ui-page-header>
    `,
  }),
};

export const DetailPage: Story = {
  name: 'Detail page with media and details',
  args: { title: 'WorldSkills Finland', subtitle: 'Member · FI', backLink: '/members', backLabel: 'All members' },
  render: (args) => ({
    props: args,
    template: `
      <ws-ng-ui-page-header [title]="title" [subtitle]="subtitle" [backLink]="backLink" [backLabel]="backLabel">
        <div wsPageHeaderMedia class="w-16 h-12 rounded bg-surface-200 flex items-center justify-center text-xs">Flag</div>
        <span><i class="pi pi-calendar mr-1"></i>Joined 1990</span>
        <span><i class="pi pi-check-circle mr-1"></i>Active member</span>
        <p-button wsPageHeaderActions label="Delete" icon="pi pi-trash" severity="danger" [outlined]="true" />
      </ws-ng-ui-page-header>
    `,
  }),
};
