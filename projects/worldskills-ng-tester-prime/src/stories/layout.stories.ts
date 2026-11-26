import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ButtonModule } from 'primeng/button';
import {
  WsEmptyStateComponent,
  WsIconActionComponent,
  WsSectionComponent,
  WsTileComponent,
} from '@worldskills/ng-ui';

const meta: Meta = {
  title: 'WorldSkills UI / Layout',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [WsSectionComponent, WsEmptyStateComponent, WsIconActionComponent, WsTileComponent, ButtonModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
Building blocks for detail pages and dashboards.

## \`ws-ng-ui-section\`

A card with one heading (h2) and an actions area (\`[wsSectionActions]\`). It fills its grid cell,
so cards in the same row line up.

\`\`\`html
<ws-ng-ui-section heading="Contacts">
  <p-button wsSectionActions label="Add" icon="pi pi-plus" size="small" />
  …
</ws-ng-ui-section>
\`\`\`

## \`ws-ng-ui-empty-state\`

A quiet "nothing here yet" message, optionally followed by an action.

\`\`\`html
<ws-ng-ui-empty-state text="No contacts yet." />
\`\`\`

## \`ws-ng-ui-icon-action\`

A small icon-only row action: \`edit\`, \`delete\`, \`end\`, \`repair\` or \`restore\`. Its text is the
accessible name **and** a tooltip. Name the item for screen readers with \`label\`.

\`\`\`html
<ws-ng-ui-icon-action action="delete" [label]="'Delete ' + contact.name" (clicked)="remove(contact)" />
\`\`\`

## \`ws-ng-ui-tile\`

A dashboard tile with an icon, a title in a brand colour (\`accent\`: purple, cyan, orange, teal, blue,
pink) and free content. \`comingSoon\` draws it dashed and grey.

\`\`\`html
<ws-ng-ui-tile title="Members" icon="pi pi-users" accent="purple">…</ws-ng-ui-tile>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

export const Sections: StoryObj = {
  name: 'Sections with rows, actions and an empty state',
  render: () => ({
    template: `
      <div class="grid gap-4 md:grid-cols-2">
        <ws-ng-ui-section heading="Contacts">
          <p-button wsSectionActions label="Add" icon="pi pi-plus" size="small" />
          <ul class="flex flex-col gap-2">
            <li class="flex items-center justify-between gap-2">
              <span>Jane Doe · jane@example.org</span>
              <span class="flex">
                <ws-ng-ui-icon-action action="edit" label="Edit Jane Doe" />
                <ws-ng-ui-icon-action action="delete" label="Delete Jane Doe" />
              </span>
            </li>
            <li class="flex items-center justify-between gap-2">
              <span>John Smith · john@example.org</span>
              <span class="flex">
                <ws-ng-ui-icon-action action="edit" label="Edit John Smith" />
                <ws-ng-ui-icon-action action="delete" label="Delete John Smith" />
              </span>
            </li>
          </ul>
        </ws-ng-ui-section>
        <ws-ng-ui-section heading="Websites">
          <p-button wsSectionActions label="Add" icon="pi pi-plus" size="small" />
          <ws-ng-ui-empty-state text="No websites yet." />
        </ws-ng-ui-section>
      </div>
    `,
  }),
};

export const IconActions: StoryObj = {
  name: 'Icon actions',
  render: () => ({
    template: `
      <div class="flex gap-1">
        <ws-ng-ui-icon-action action="edit" />
        <ws-ng-ui-icon-action action="delete" />
        <ws-ng-ui-icon-action action="end" />
        <ws-ng-ui-icon-action action="repair" />
        <ws-ng-ui-icon-action action="restore" />
        <ws-ng-ui-icon-action action="edit" [disabled]="true" />
      </div>
    `,
  }),
};

export const EmptyStateWithAction: StoryObj = {
  name: 'Empty state with an action',
  render: () => ({
    template: `
      <ws-ng-ui-empty-state text="No members match these filters.">
        <p-button label="Clear filters" size="small" [text]="true" />
      </ws-ng-ui-empty-state>
    `,
  }),
};

export const Tiles: StoryObj = {
  name: 'Dashboard tiles',
  render: () => ({
    template: `
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ws-ng-ui-tile title="Members" icon="pi pi-users" accent="purple">
          <p class="text-3xl font-semibold">90</p>
        </ws-ng-ui-tile>
        <ws-ng-ui-tile title="Organizations" icon="pi pi-building" accent="teal">
          <p class="text-3xl font-semibold">832</p>
        </ws-ng-ui-tile>
        <ws-ng-ui-tile title="Financial 2026" icon="pi pi-wallet" accent="orange">
          <p class="text-3xl font-semibold">71 <span class="text-base font-normal text-muted-color">of 90</span></p>
        </ws-ng-ui-tile>
        <ws-ng-ui-tile title="Relationships" icon="pi pi-sitemap" accent="cyan">
          <p>Parent ×7 · Partner ×21</p>
        </ws-ng-ui-tile>
        <ws-ng-ui-tile title="Events" icon="pi pi-calendar" accent="blue">
          <p>3 upcoming</p>
        </ws-ng-ui-tile>
        <ws-ng-ui-tile title="Recent changes" icon="pi pi-history" [comingSoon]="true">
          <p class="text-muted-color">Coming soon</p>
        </ws-ng-ui-tile>
      </div>
    `,
  }),
};
