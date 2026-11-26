import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { ChangeDetectionStrategy, Component, inject, input, provideAppInitializer } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { WsPageHeaderComponent } from '@worldskills/ng-ui';
import {
  WsHelpDirective,
  WsHelpOverlayComponent,
  WsHelpService,
  provideWsHelp,
} from '@worldskills/ng-ui/help';

/** A sample page: four sections marked with wsHelp, plus the overlay (normally in the app shell). */
@Component({
  selector: 'story-help-demo',
  imports: [ButtonModule, CardModule, WsHelpDirective, WsHelpOverlayComponent, WsPageHeaderComponent],
  template: `
    <ws-ng-ui-page-header wsHelp="header" title="Reports" subtitle="Monthly figures">
      <p-button wsPageHeaderActions wsHelp="export" label="Export" icon="pi pi-download" [outlined]="true" />
    </ws-ng-ui-page-header>
    <div class="flex flex-col gap-4">
      <p-card wsHelp="filters">
        <p class="font-semibold">Filters</p>
        <p class="text-muted-color">Search, status, year…</p>
      </p-card>
      @if (isAdmin()) {
        <p-card wsHelp="admin">
          <p class="font-semibold">Admin tools</p>
          <p class="text-muted-color">Only admins see this card, and its help.</p>
        </p-card>
      }
      <p-card wsHelp="results">
        <p class="font-semibold">Results</p>
        <p class="text-muted-color">The matching rows.</p>
      </p-card>
    </div>
    <p class="mt-4 text-sm text-muted-color">Press the purple ? at the bottom right.</p>
    <ws-ng-ui-help-overlay />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class HelpDemoComponent {
  readonly isAdmin = input(true);

  constructor() {
    // Storybook has no routes; an app sets `data: { help: 'reports' }` on the route instead
    inject(WsHelpService).setPage('reports');
  }
}

const meta: Meta<HelpDemoComponent> = {
  title: 'WorldSkills UI / Page Help',
  component: HelpDemoComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([]),
        provideWsHelp({ pages: { reports: ['header', 'filters', 'admin', 'results', 'export'] } }),
        provideAppInitializer(() => {
          inject(TranslateService).setTranslation(
            'en',
            {
              help: {
                reports: {
                  header: { title: 'This report', description: 'What the report covers and when it was updated.' },
                  filters: { title: 'Filters', description: 'Narrow the results; filters are kept in the link.' },
                  admin: { title: 'Admin tools', description: 'Only shown to admins, so only admins get this help.' },
                  results: { title: 'Results', description: 'The matching rows. Open one for its details.' },
                  export: { title: 'Export', description: 'Download what you see as a spreadsheet.' },
                },
              },
            },
            true,
          );
        }),
      ],
    }),
  ],
  argTypes: {
    isAdmin: { control: 'boolean', description: 'Show the admin-only section (and its help point).' },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Page help from \`@worldskills/ng-ui/help\`: a floating **?** that outlines every help point of the
page at once, with numbered badges and a legend at the side (the page slides over, nothing is covered).

Help follows the page: a point only shows when its element is rendered, so permission checks
(\`@if (isAdmin())\`) apply to the help as well. Numbers are positions in the page's list, so a hidden
point leaves a gap (toggle **isAdmin** to see 1, 2, 4, 5).

\`\`\`ts
// app.config.ts
provideWsHelp({ pages: { reports: ['header', 'filters', 'results', 'export'] } })
// app.routes.ts
{ path: 'reports', data: { help: 'reports' }, loadComponent: … }
\`\`\`
\`\`\`html
<!-- app shell -->
<ws-ng-ui-help-overlay />
<!-- page -->
<p-card wsHelp="filters">…</p-card>
\`\`\`
Texts: \`help.reports.filters.title\` / \`.description\` in the app's translations.
Run \`npx ws-help-check\` in CI so help can't drift from the code. Full guide: \`help/README.md\`.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<HelpDemoComponent>;

export const AsAdmin: Story = {
  name: 'Page with help (admin)',
  args: { isAdmin: true },
};

export const WithoutAdminSection: Story = {
  name: 'Hidden point leaves a gap',
  args: { isAdmin: false },
};
