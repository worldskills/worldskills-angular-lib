import { Component, computed, inject } from '@angular/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {
  initializeLocalTableSort,
  WsColumnsVisibilityService,
  WsTableColumn,
  WsTableColumnComponent,
  WsTableColumnFilterComponent,
  WsTableColumnsSettingsComponent,
  WsTableHeaderColumnComponent,
  WsTableResponsiveSizeDirective,
} from '@worldskills/ng-ui';
import { SortEvent } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { Tag } from 'primeng/tag';

interface Member {
  id: number;
  name: string;
  country: string;
  skill: string;
  status: 'active' | 'inactive';
}

const MEMBERS: Member[] = [
  { id: 1, name: 'Anna Schmidt', country: 'Germany', skill: 'Web Technologies', status: 'active' },
  { id: 2, name: 'Li Wei', country: 'China', skill: 'Mechatronics', status: 'active' },
  { id: 3, name: 'João Silva', country: 'Brazil', skill: 'Cooking', status: 'inactive' },
  { id: 4, name: 'Aino Virtanen', country: 'Finland', skill: 'Graphic Design', status: 'active' },
  { id: 5, name: 'Pierre Martin', country: 'France', skill: 'Joinery', status: 'inactive' },
];

const COLUMNS: WsTableColumn<Member>[] = [
  { key: 'id', headerText: () => 'ID', pinned: true, sortable: (a, b) => a.id - b.id, width: '5rem' },
  { key: 'name', headerText: () => 'Name', sortable: (a, b) => a.name.localeCompare(b.name), filterable: 'name' },
  { key: 'country', headerText: () => 'Country', headerTooltip: () => 'Member country' },
  { key: 'skill', headerText: () => 'Skill', hidden: true },
  { key: 'status', headerText: () => 'Status', hasCellRendering: true },
];

@Component({
  selector: 'story-tables',
  standalone: true,
  imports: [
    TableModule,
    Tag,
    WsTableColumnComponent,
    WsTableHeaderColumnComponent,
    WsTableColumnFilterComponent,
    WsTableColumnsSettingsComponent,
    WsTableResponsiveSizeDirective,
  ],
  template: `
    <div class="mb-3 flex justify-end">
      <ws-ng-ui-table-columns-settings [columns]="$any(columns)" [tableKey]="tableKey" />
    </div>
    <p-table wsResponsiveSize [value]="members" [customSort]="true" (sortFunction)="sort($event)">
      <ng-template #header>
        <tr>
          @for (col of visibleColumns(); track col.key) {
            <th wsTableHeaderColumn [column]="$any(col)">
              @if (col.filterable) {
                <ws-ng-ui-table-column-filter [field]="col.key" [label]="col.headerText()" />
              }
            </th>
          }
        </tr>
      </ng-template>
      <ng-template #body let-member>
        <tr>
          @for (col of visibleColumns(); track col.key) {
            <td wsTableColumn [column]="col" [row]="member">
              <ng-template #renderer let-row>
                <p-tag [value]="row.status" [severity]="row.status === 'active' ? 'success' : 'secondary'" />
              </ng-template>
            </td>
          }
        </tr>
      </ng-template>
    </p-table>
  `,
})
class TablesStoryComponent {
  readonly tableKey = 'story-members-table';
  readonly members = [...MEMBERS];
  readonly columns = COLUMNS;
  private readonly hidden = inject(WsColumnsVisibilityService).load(this.tableKey, this.columns as WsTableColumn<never>[]);
  readonly visibleColumns = computed(() => this.columns.filter(c => !this.hidden().includes(c.key)));

  sort(event: SortEvent) {
    initializeLocalTableSort(event, this.columns);
  }
}

const meta: Meta = {
  title: 'WorldSkills UI / Tables / Table Helpers',
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [TablesStoryComponent] })],
  parameters: {
    docs: {
      description: {
        component: `
Building blocks for writing your own PrimeNG \`p-table\` from a \`WsTableColumn[]\` array.
For a ready-made table use \`ws-ng-ui-data-table\` instead.

\`\`\`html
<ws-ng-ui-table-columns-settings [columns]="columns" tableKey="members-table" />

<p-table wsResponsiveSize [value]="rows" [customSort]="true" (sortFunction)="sort($event)">
  <ng-template #header>
    <tr>
      @for (col of visibleColumns(); track col.key) {
        <th wsTableHeaderColumn [column]="col">
          <ws-ng-ui-table-column-filter [field]="col.key" type="text" />
        </th>
      }
    </tr>
  </ng-template>
  <ng-template #body let-row>
    <tr>
      @for (col of visibleColumns(); track col.key) {
        <td wsTableColumn [column]="col" [row]="row"></td>
      }
    </tr>
  </ng-template>
</p-table>
\`\`\`

\`\`\`ts
hidden = inject(WsColumnsVisibilityService).load('members-table', columns);
visibleColumns = computed(() => columns.filter(c => !this.hidden().includes(c.key)));
sort(event: SortEvent) { initializeLocalTableSort(event, columns); }
\`\`\`

| Piece | Purpose |
|---|---|
| \`WsTableColumn\` | Column definition: \`key\`, \`headerText\`, \`sortable\` (compare fn), \`hidden\`, \`pinned\`, \`textRenderer\`, \`hasCellRendering\` |
| \`td[wsTableColumn]\` | Cell; \`#renderer\` template when \`hasCellRendering\`, \`[clampLines]\` for virtual scroll |
| \`th[wsTableHeaderColumn]\` | Header with sort icon, tooltip, projected filter |
| \`ws-ng-ui-table-columns-settings\` | Show/hide columns, saved in localStorage under \`tableKey\` |
| \`ws-ng-ui-table-column-filter\` | Menu filter (text/select/tree/checkbox), applied on change |
| \`p-table[wsResponsiveSize]\` | Small table below 1024px |
| \`p-menu[wsCloseOnResize]\` | Hide a popup menu on window resize |
        `,
      },
    },
  },
};

export default meta;

export const Default: StoryObj = {
  name: 'Columns settings, filter, local sort',
  render: () => ({ template: '<story-tables />' }),
};
