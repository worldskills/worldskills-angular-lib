import type { Meta, StoryObj } from '@storybook/angular';
import { TreeSelectComponent, TreeSelectNode } from '@worldskills/ng-ui';

const meta: Meta<TreeSelectComponent> = {
  title: 'WorldSkills UI / Tree Select',
  component: TreeSelectComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Why a custom Tree Select?

PrimeNG ships its own \`p-treeSelect\` component, so it's worth explaining why we built our own rather than using it directly.

### The key difference: full-path fuzzy search

PrimeNG's built-in filter only matches against a **node's own label**. For shallow trees this is fine, but WorldSkills data is often deeply nested — regions contain countries contain cities — and users frequently search with partial terms that span multiple levels.

Our \`ws-ng-ui-tree-select\` filters against the **full ancestor path** of each node. Searching for *"south america brazil"* will match **Brazil** even though the word "south" doesn't appear in Brazil's own label — it appears in its parent "South America". This makes navigation through large, deeply nested structures significantly faster.

### What we still get from PrimeNG

Rather than reimplementing everything from scratch, the component is a **hybrid**:

- **Our layer** — trigger (styled to match \`p-select\`), fuzzy search input, and the \`filterTree()\` algorithm
- **PrimeNG's \`p-tree\`** — node rendering, expand/collapse, keyboard navigation, ARIA accessibility, virtual scrolling, and all three selection modes (\`single\`, \`multiple\`, \`checkbox\`)

### Selection modes

| Mode | Use case |
|------|----------|
| \`single\` | Pick one country / entity (default) |
| \`multiple\` | Ctrl-click to pick several |
| \`checkbox\` | Checkbox UI with parent-propagation |

### Virtual scrolling

Enable \`[virtualScroll]="true"\` for lists with hundreds or thousands of nodes. Set \`[virtualScrollItemSize]\` to match your row height (default 32 px).
        `,
      },
    },
  },
  argTypes: {
    placeholder: { control: 'text' },
    loading: { control: 'boolean' },
    selectionMode: { control: 'select', options: ['single', 'multiple', 'checkbox'] },
    virtualScroll: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<TreeSelectComponent>;

// ── Sample data ─────────────────────────────────────────────────────────────

const regions: TreeSelectNode[] = [
  {
    id: 1, label: 'Africa', selectable: false,
    children: [
      { id: 11, label: 'South Africa' },
      { id: 12, label: 'Nigeria' },
      { id: 13, label: 'Kenya' },
    ],
  },
  {
    id: 2, label: 'Americas', selectable: false,
    children: [
      {
        id: 21, label: 'North America', selectable: false,
        children: [
          { id: 211, label: 'United States' },
          { id: 212, label: 'Canada' },
          { id: 213, label: 'Mexico' },
        ],
      },
      {
        id: 22, label: 'South America', selectable: false,
        children: [
          { id: 221, label: 'Brazil' },
          { id: 222, label: 'Argentina' },
        ],
      },
    ],
  },
  {
    id: 3, label: 'Asia', selectable: false,
    children: [
      { id: 31, label: 'China' },
      { id: 32, label: 'Japan' },
      { id: 33, label: 'India' },
      { id: 34, label: 'South Korea' },
    ],
  },
  {
    id: 4, label: 'Europe', selectable: false,
    children: [
      { id: 41, label: 'Germany' },
      { id: 42, label: 'France' },
      { id: 43, label: 'United Kingdom' },
    ],
  },
  {
    id: 5, label: 'Oceania', selectable: false,
    children: [
      { id: 51, label: 'Australia' },
      { id: 52, label: 'New Zealand' },
    ],
  },
];

// Generate a large flat list for virtual scroll demo
const largeList: TreeSelectNode[] = Array.from({ length: 500 }, (_, i) => ({
  id: i + 1,
  label: `Item ${String(i + 1).padStart(3, '0')}`,
}));

// ── Stories ──────────────────────────────────────────────────────────────────

export const SingleSelect: Story = {
  args: {
    items: regions,
    placeholder: 'Select a country...',
    selectionMode: 'single',
  },
};

export const WithPreselection: Story = {
  args: {
    items: regions,
    placeholder: 'Select a country...',
    selectionMode: 'single',
    selectedId: 32, // Japan — deep in the tree
  },
};

export const MultipleSelect: Story = {
  args: {
    items: regions,
    placeholder: 'Select countries...',
    selectionMode: 'multiple',
    selectedIds: [211, 221], // United States + Brazil
  },
};

export const CheckboxSelect: Story = {
  args: {
    items: regions,
    placeholder: 'Select countries...',
    selectionMode: 'checkbox',
  },
};

export const VirtualScroll: Story = {
  args: {
    items: largeList,
    placeholder: 'Select an item...',
    selectionMode: 'single',
    virtualScroll: true,
    virtualScrollItemSize: 32,
  },
};

export const Loading: Story = {
  args: {
    items: [],
    loading: true,
    placeholder: 'Loading...',
  },
};

export const Empty: Story = {
  args: {
    items: [],
    loading: false,
    placeholder: 'Select a country...',
  },
};
