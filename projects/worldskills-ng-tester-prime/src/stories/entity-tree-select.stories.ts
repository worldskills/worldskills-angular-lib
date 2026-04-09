import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  EntityTreeSelectComponent,
  TreeSelectNode,
  UI_LIBRARY_CONFIG,
  provideWsNgUiTranslations,
} from '@worldskills/ng-ui';

// ── Mock data ─────────────────────────────────────────────────────────────────
const MOCK_NODES: TreeSelectNode[] = [
  {
    id: 1,
    label: 'WorldSkills International',
    selectable: false,
    children: [
      {
        id: 2,
        label: 'Africa & Middle East',
        children: [
          { id: 10, label: 'South Africa' },
          { id: 11, label: 'United Arab Emirates' },
          { id: 12, label: 'Egypt' },
        ],
      },
      {
        id: 3,
        label: 'Asia Pacific',
        children: [
          { id: 20, label: 'Australia' },
          { id: 21, label: 'China' },
          { id: 22, label: 'Japan' },
          { id: 23, label: 'South Korea' },
        ],
      },
      {
        id: 4,
        label: 'Europe',
        children: [
          { id: 30, label: 'Germany' },
          { id: 31, label: 'France' },
          { id: 32, label: 'United Kingdom' },
          { id: 33, label: 'Finland' },
        ],
      },
      {
        id: 5,
        label: 'Americas',
        children: [
          { id: 40, label: 'Brazil' },
          { id: 41, label: 'Canada' },
          { id: 42, label: 'United States' },
        ],
      },
    ],
  },
];

// ── Meta ──────────────────────────────────────────────────────────────────────
const meta: Meta<EntityTreeSelectComponent> = {
  title: 'Entity Tree Select',
  component: EntityTreeSelectComponent,
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        { provide: UI_LIBRARY_CONFIG, useValue: {} },
        provideWsNgUiTranslations(),
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<EntityTreeSelectComponent>;

// ── Stories ───────────────────────────────────────────────────────────────────

/** Nodes passed directly — no HTTP call. */
export const Passthrough: Story = {
  args: {
    nodes: MOCK_NODES,
    placeholder: 'Select a member organisation...',
  },
};

/** Multi-select with passthrough nodes. */
export const MultiSelect: Story = {
  args: {
    nodes: MOCK_NODES,
    selectionMode: 'multiple',
    placeholder: 'Select organisations...',
  },
};

/** Pre-selected node (Germany = id 30). */
export const PreSelected: Story = {
  args: {
    nodes: MOCK_NODES,
    selectedId: 30,
    placeholder: 'Select a member organisation...',
  },
};

/** Loading skeleton while waiting for the API. */
export const LoadingState: Story = {
  render: () => ({
    props: {},
    template: `
      <div class="p-4">
        <ws-ng-ui-entity-tree-select
          [nodes]="[]"
          [loading]="true"
          placeholder="Loading entities..."
        />
      </div>
    `,
  }),
};
