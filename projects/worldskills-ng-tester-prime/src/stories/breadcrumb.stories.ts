import type { Meta, StoryObj } from '@storybook/angular';
import { BreadcrumbComponent, Breadcrumb } from '@worldskills/ng-ui';

const meta: Meta<BreadcrumbComponent> = {
  title: 'WorldSkills UI / Breadcrumb',
  component: BreadcrumbComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Usage

Place \`<ws-ng-ui-breadcrumb>\` anywhere in your layout. It reads breadcrumbs
automatically from the Angular router — no inputs required for normal use.

### Route configuration

Add a \`breadcrumb\` property to your route's \`data\`:

\`\`\`ts
const routes: Routes = [
  {
    path: 'competitions',
    data: { breadcrumb: { key: 'competitions', label: 'Competitions' } },
    children: [
      {
        path: ':id',
        data: { breadcrumb: { key: 'competition', label: 'Loading...' } },
      },
    ],
  },
];
\`\`\`

### Dynamic label replacement

Call \`BreadcrumbService.replaceLabel()\` after an async lookup resolves.
The breadcrumb updates immediately — no need to rebuild the route.

\`\`\`ts
this.competitionService.get(id).subscribe(c => {
  this.breadcrumbService.replaceLabel('competition', c.name);
});
\`\`\`

### Rendering

Breadcrumbs are rendered using PrimeNG's \`p-breadcrumb\` component, so they
automatically inherit the active PrimeNG theme.
        `,
      },
    },
  },
  argTypes: {
    homeLabel: { control: 'text' },
    homeRoute: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<BreadcrumbComponent>;

const shallow: Breadcrumb[] = [
  { key: 'competitions', label: 'Competitions', url: '/competitions' },
];

const deep: Breadcrumb[] = [
  { key: 'competitions', label: 'Competitions', url: '/competitions' },
  { key: 'competition',  label: 'WorldSkills Lyon 2024', url: '/competitions/42' },
  { key: 'results',      label: 'Results', url: '/competitions/42/results' },
];

const withDynamicLabel: Breadcrumb[] = [
  { key: 'competitions', label: 'Competitions', url: '/competitions' },
  { key: 'competition',  label: 'Loading...', url: '/competitions/42' },
];

const withReplacedLabel: Breadcrumb[] = [
  { key: 'competitions', label: 'Competitions', url: '/competitions' },
  { key: 'competition',  label: 'WorldSkills Lyon 2024', url: '/competitions/42' },
];

export const SingleLevel: Story = {
  args: {
    homeLabel: 'Home',
    homeRoute: '/',
    crumbs: shallow,
  },
};

export const MultiLevel: Story = {
  args: {
    homeLabel: 'Home',
    homeRoute: '/',
    crumbs: deep,
  },
};

export const DynamicLabelPending: Story = {
  name: 'Dynamic label — loading',
  args: {
    homeLabel: 'Home',
    homeRoute: '/',
    crumbs: withDynamicLabel,
  },
};

export const DynamicLabelResolved: Story = {
  name: 'Dynamic label — resolved',
  args: {
    homeLabel: 'Home',
    homeRoute: '/',
    crumbs: withReplacedLabel,
  },
};

export const CustomHome: Story = {
  args: {
    homeLabel: 'Dashboard',
    homeRoute: '/dashboard',
    crumbs: deep,
  },
};
