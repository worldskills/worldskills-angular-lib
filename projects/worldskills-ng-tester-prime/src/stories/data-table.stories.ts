import { Meta, StoryObj, moduleMetadata, applicationConfig } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { WsDataTableComponent, WsConfirmComponent, WsColumn, WsEditMode, WsLazyLoadEvent } from '@worldskills/ng-ui';

// ── Generate demo data ──────────────────────────────────────────────────────

function generatePeople(count: number) {
  const firstNames = ['Alice', 'Bob', 'Carlos', 'Diana', 'Erik', 'Fatima', 'George', 'Hana', 'Ivan', 'Julia'];
  const lastNames = ['Smith', 'Johnson', 'Lee', 'Garcia', 'Muller', 'Kim', 'Patel', 'Chen', 'Silva', 'Ahmed'];
  const countries = ['USA', 'UK', 'Brazil', 'Germany', 'Japan', 'South Korea', 'India', 'China', 'South Africa', 'France'];
  const skills = ['Web Technologies', 'Mechatronics', 'Cooking', 'Graphic Design', 'Welding', 'Hairdressing', 'CNC Turning', 'Plumbing', 'Electrical Installations', 'Carpentry'];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    firstName: firstNames[i % firstNames.length],
    lastName: lastNames[i % lastNames.length],
    country: countries[i % countries.length],
    skill: skills[i % skills.length],
    score: Math.floor(Math.random() * 300) + 400,
  }));
}

const COLUMNS: WsColumn[] = [
  { field: 'id', header: 'ID', width: '80px', sortable: true },
  { field: 'firstName', header: 'First Name', editable: true, sortable: true, filterable: true },
  { field: 'lastName', header: 'Last Name', editable: true, sortable: true, filterable: true },
  { field: 'country', header: 'Country', editable: true, sortable: true, filterable: true },
  { field: 'skill', header: 'Skill', editable: true, filterable: true },
  { field: 'score', header: 'Score', width: '100px', editable: true, editType: 'number', sortable: true, filterable: true, filterType: 'numeric' },
];

const PEOPLE = generatePeople(200);

// ── Wrapper components ──────────────────────────────────────────────────────

@Component({
  selector: 'story-table-readonly',
  standalone: true,
  imports: [WsDataTableComponent],
  template: `
    <ws-ng-ui-data-table
      [columns]="columns"
      [rows]="rows"
      [scrollHeight]="scrollHeight"
      [sortable]="true"
      [filterable]="true"
    />
  `,
})
class ReadonlyTableComponent {
  @Input() scrollHeight = '400px';
  columns = COLUMNS;
  rows = PEOPLE;
}

@Component({
  selector: 'story-table-inline',
  standalone: true,
  imports: [WsDataTableComponent, WsConfirmComponent],
  template: `
    <ws-ng-ui-confirm />
    <ws-ng-ui-data-table
      [columns]="columns"
      [rows]="rows"
      [scrollHeight]="scrollHeight"
      editMode="inline"
      [showDelete]="true"
      [deleteMessage]="deleteMsg"
      [showAdd]="true"
      [sortable]="true"
      [filterable]="true"
      (rowSave)="onSave($event)"
      (rowDelete)="onDelete($event)"
      (addClick)="onAdd()"
    />
    @if (lastAction) {
      <p class="mt-3 text-sm text-gray-500">Last action: <strong>{{ lastAction }}</strong></p>
    }
  `,
})
class InlineEditTableComponent {
  @Input() scrollHeight = '400px';
  columns = COLUMNS;
  rows = [...PEOPLE];
  lastAction: string | null = null;
  deleteMsg = (row: any) => `Are you sure you want to delete "${row.firstName} ${row.lastName}" (ID: ${row.id})?`;

  onSave(row: any) {
    this.lastAction = `Saved: ${row.firstName} ${row.lastName} (Score: ${row.score})`;
  }
  onDelete(row: any) {
    this.rows = this.rows.filter(r => r.id !== row.id);
    this.lastAction = `Deleted: ${row.firstName} ${row.lastName}`;
  }
  onAdd() {
    const id = this.rows.length + 1;
    this.rows = [{ id, firstName: 'New', lastName: 'Person', country: '', skill: '', score: 0 }, ...this.rows];
    this.lastAction = `Added new row (id: ${id})`;
  }
}

@Component({
  selector: 'story-table-modal',
  standalone: true,
  imports: [WsDataTableComponent, WsConfirmComponent],
  template: `
    <ws-ng-ui-confirm />
    <ws-ng-ui-data-table
      [columns]="columns"
      [rows]="rows"
      [scrollHeight]="scrollHeight"
      editMode="modal"
      modalTitle="Edit Competitor"
      [showDelete]="true"
      [deleteMessage]="deleteMsg"
      [showAdd]="true"
      [sortable]="true"
      (rowSave)="onSave($event)"
      (rowDelete)="onDelete($event)"
      (addClick)="onAdd()"
    />
    @if (lastAction) {
      <p class="mt-3 text-sm text-gray-500">Last action: <strong>{{ lastAction }}</strong></p>
    }
  `,
})
class ModalEditTableComponent {
  @Input() scrollHeight = '400px';
  columns = COLUMNS;
  rows = [...PEOPLE.slice(0, 50)];
  lastAction: string | null = null;
  deleteMsg = (row: any) => `Are you sure you want to delete "${row.firstName} ${row.lastName}" (ID: ${row.id})?`;

  onSave(row: any) {
    const idx = this.rows.findIndex(r => r.id === row.id);
    if (idx >= 0) {
      this.rows = [...this.rows];
      this.rows[idx] = { ...row };
    }
    this.lastAction = `Saved: ${row.firstName} ${row.lastName}`;
  }
  onDelete(row: any) {
    this.rows = this.rows.filter(r => r.id !== row.id);
    this.lastAction = `Deleted: ${row.firstName} ${row.lastName}`;
  }
  onAdd() {
    const id = this.rows.length + 1;
    this.rows = [{ id, firstName: 'New', lastName: 'Competitor', country: '', skill: '', score: 0 }, ...this.rows];
    this.lastAction = `Added new row (id: ${id})`;
  }
}

// ── Meta ────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'WorldSkills UI / Data Table',
  tags: ['autodocs'],
  decorators: [
    applicationConfig({ providers: [provideAnimations()] }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
## Data Table — \`ws-ng-ui-data-table\`

A reusable data table built on PrimeNG's \`p-table\` with virtual scroll, inline editing, and modal editing support.

### Features
- **Virtual scroll** — renders large datasets efficiently
- **Inline editing** — click the pencil icon to edit cells in place
- **Modal editing** — click the pencil icon to open a dialog form
- **Sortable columns** — click column headers to sort
- **Filtering** — global search bar + per-column filters (text, numeric, date)
- **Lazy mode** — emit \`(lazyLoad)\` for server-side filtering, sorting, and pagination
- **Add / Delete** — optional toolbar and row-level actions with delete confirmation
- **Custom actions** — pass a template via \`actionsTemplate\` for custom row buttons

### Usage

\`\`\`html
<ws-ng-ui-data-table
  [columns]="columns"
  [rows]="data"
  editMode="inline"
  [showDelete]="true"
      [deleteMessage]="deleteMsg"
  [showAdd]="true"
  [sortable]="true"
  (rowSave)="onSave($event)"
  (rowDelete)="onDelete($event)"
  (addClick)="onAdd()"
/>
\`\`\`

### Column definition

\`\`\`ts
const columns: WsColumn[] = [
  { field: 'name', header: 'Name', editable: true, sortable: true },
  { field: 'score', header: 'Score', editable: true, editType: 'number', width: '100px' },
];
\`\`\`
        `,
      },
    },
  },
};

export default meta;

// ── Stories ──────────────────────────────────────────────────────────────────

export const ReadOnly: StoryObj<ReadonlyTableComponent> = {
  name: 'Read-only (Virtual Scroll)',
  decorators: [moduleMetadata({ imports: [ReadonlyTableComponent] })],
  render: (args) => ({ props: args, template: '<story-table-readonly [scrollHeight]="scrollHeight" />' }),
  argTypes: { scrollHeight: { control: 'text' } },
  args: { scrollHeight: '400px' },
};

export const InlineEditing: StoryObj<InlineEditTableComponent> = {
  name: 'Inline Editing',
  decorators: [moduleMetadata({ imports: [InlineEditTableComponent] })],
  render: (args) => ({ props: args, template: '<story-table-inline [scrollHeight]="scrollHeight" />' }),
  argTypes: { scrollHeight: { control: 'text' } },
  args: { scrollHeight: '400px' },
};

export const ModalEditing: StoryObj<ModalEditTableComponent> = {
  name: 'Modal Editing',
  decorators: [moduleMetadata({ imports: [ModalEditTableComponent] })],
  render: (args) => ({ props: args, template: '<story-table-modal [scrollHeight]="scrollHeight" />' }),
  argTypes: { scrollHeight: { control: 'text' } },
  args: { scrollHeight: '400px' },
};

// ── Lazy loading story ──────────────────────────────────────────────────────

const ALL_PEOPLE = generatePeople(1000);

@Component({
  selector: 'story-table-lazy',
  standalone: true,
  imports: [WsDataTableComponent],
  template: `
    <p class="text-sm text-gray-500 mb-3">
      Simulated server-side filtering and sorting with a 300ms delay.
      Total records: <strong>{{ total }}</strong>
    </p>
    <ws-ng-ui-data-table
      [columns]="columns"
      [rows]="visibleRows"
      [scrollHeight]="scrollHeight"
      [sortable]="true"
      [filterable]="true"
      [lazy]="true"
      [totalRecords]="total"
      (lazyLoad)="onLazyLoad($event)"
    />
  `,
})
class LazyTableComponent {
  @Input() scrollHeight = '400px';
  columns = COLUMNS;
  visibleRows: any[] = [];
  total = ALL_PEOPLE.length;

  constructor() {
    this.visibleRows = ALL_PEOPLE.slice(0, 50);
  }

  onLazyLoad(event: WsLazyLoadEvent) {
    // Simulate server delay
    setTimeout(() => {
      let filtered = [...ALL_PEOPLE];

      // Apply filters
      for (const [field, filter] of Object.entries(event.filters)) {
        if (filter.value == null || filter.value === '') continue;
        filtered = filtered.filter(row => {
          const val = row[field];
          if (filter.matchMode === 'contains') {
            return String(val).toLowerCase().includes(String(filter.value).toLowerCase());
          }
          if (filter.matchMode === 'equals') {
            return Number(val) === Number(filter.value);
          }
          return true;
        });
      }

      // Apply sort
      if (event.sortField) {
        filtered.sort((a, b) => {
          const aVal = a[event.sortField!];
          const bVal = b[event.sortField!];
          const result = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
          return result * event.sortOrder;
        });
      }

      this.total = filtered.length;
      this.visibleRows = filtered.slice(event.first, event.first + event.rows);
    }, 300);
  }
}

export const LazyLoading: StoryObj<LazyTableComponent> = {
  name: 'Lazy Loading (Server-side)',
  decorators: [moduleMetadata({ imports: [LazyTableComponent] })],
  render: (args) => ({ props: args, template: '<story-table-lazy [scrollHeight]="scrollHeight" />' }),
  argTypes: { scrollHeight: { control: 'text' } },
  args: { scrollHeight: '400px' },
};
