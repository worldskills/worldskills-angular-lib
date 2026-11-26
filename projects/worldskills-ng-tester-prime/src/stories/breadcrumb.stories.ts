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

### Click-following trails

When a page can be reached along different paths (e.g. a member opened through its parent members),
show the path the user took with \`BreadcrumbService.setTrail()\`. The trail replaces the route crumbs
up to and including \`replaces\`; later crumbs (such as a tab) stay. Crumb URLs may include a query string.

\`\`\`ts
const breadcrumbs = inject(BreadcrumbService);
breadcrumbs.setTrail(this, {
  replaces: 'member',
  crumbs: [
    { key: 'via-2', label: 'WorldSkills Europe', url: '/member/2' },
    { key: 'member', label: 'Austria', url: '/members/12?via=2' },
  ],
});
// Only the page that set the trail clears it, so a late clean-up can't clear the next page's trail.
inject(DestroyRef).onDestroy(() => breadcrumbs.clearTrail(this));
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

export const Trail: Story = {
  name: 'Click-following trail',
  args: {
    homeLabel: 'Home',
    homeRoute: '/',
    crumbs: [
      { key: 'via-1', label: 'WorldSkills International', url: '/member/1' },
      { key: 'via-2', label: 'WorldSkills Europe', url: '/member/2?via=1' },
      { key: 'member', label: 'Austria', url: '/members/12?via=1,2' },
      { key: 'contacts', label: 'Contacts', url: '/members/12/contacts' },
    ],
  },
};

export const CustomHome: Story = {
  args: {
    homeLabel: 'Dashboard',
    homeRoute: '/dashboard',
    crumbs: deep,
  },
};
