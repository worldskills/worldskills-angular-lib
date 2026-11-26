import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Observable, of, throwError, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { WsLoadableComponent, WsLoadErrorComponent, loadable } from '@worldskills/ng-ui';

// ── Wrapper: a request that fails first, then succeeds ───────────────────────

@Component({
  selector: 'story-loadable-wrapper',
  standalone: true,
  imports: [WsLoadableComponent, ButtonModule],
  template: `
    <div class="flex flex-col gap-4">
      <div class="flex flex-wrap gap-2">
        <p-button label="Reload (fails)" severity="secondary" [outlined]="true" (onClick)="next = 'fail'; members.reload()" />
        <p-button label="Reload (works)" severity="secondary" [outlined]="true" (onClick)="next = 'ok'; members.reload()" />
        <p-button label="Refresh in the background" severity="secondary" [outlined]="true" (onClick)="next = 'ok'; members.refresh()" />
      </div>

      <ws-ng-ui-loadable [state]="members.state()" errorMessage="The members could not be loaded." (retry)="next = 'ok'; members.reload()">
        <ng-template let-list>
          <ul class="list-disc pl-6">
            @for (name of list; track name) {
              <li>{{ name }}</li>
            }
          </ul>
        </ng-template>
      </ws-ng-ui-loadable>
    </div>
  `,
})
class LoadableWrapperComponent {
  next: 'ok' | 'fail' = 'fail';
  members = loadable(() => this.fetch());

  private fetch(): Observable<string[]> {
    return timer(800).pipe(
      switchMap(() => this.next === 'ok'
        ? of(['Austria', 'Finland', 'Switzerland'])
        : throwError(() => new Error('Server error'))),
    );
  }
}

const meta: Meta = {
  title: 'WorldSkills UI / Loading',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## \`loadable()\` + \`ws-ng-ui-loadable\`

Load data into a signal with an explicit loading / loaded / error state, so a failed request shows
an error with **Try again** instead of an endless spinner. Call \`loadable()\` in an injection context.

\`\`\`ts
// fetches once
types = loadable(() => this.typesService.fetch());
// re-fetches when memberId changes; null / undefined = wait
awards = loadable(this.memberId, id => this.awardService.getMemberAwards(id));
\`\`\`

\`\`\`html
<ws-ng-ui-loadable [state]="awards.state()" errorMessage="The awards could not be loaded." (retry)="awards.reload()">
  <ng-template let-awards>…</ng-template>
</ws-ng-ui-loadable>
\`\`\`

| Member | Purpose |
|--------|---------|
| \`state()\` | \`{ status: 'loading' }\`, \`{ status: 'loaded', value }\` or \`{ status: 'error' }\` |
| \`value()\` | The value, or \`undefined\` |
| \`reload()\` | Fetch again, showing the spinner (Try again) |
| \`refresh()\` | Fetch again in the background, keeping the current value (after a save) |

## \`ws-ng-ui-load-error\`

The error on its own, for when part of a page failed and the rest still works.

\`\`\`html
<ws-ng-ui-load-error message="The countries could not be loaded." (retry)="countries.reload()" />
\`\`\`
        `,
      },
    },
  },
};

export default meta;

export const Loadable: StoryObj = {
  name: 'Loadable (fails, then Try again works)',
  decorators: [moduleMetadata({ imports: [LoadableWrapperComponent] })],
  render: () => ({ template: '<story-loadable-wrapper />' }),
};

export const LoadError: StoryObj<WsLoadErrorComponent> = {
  name: 'Load error',
  decorators: [moduleMetadata({ imports: [WsLoadErrorComponent] })],
  argTypes: {
    message: { control: 'text' },
    severity: { control: 'select', options: ['warn', 'error'] },
  },
  args: { message: 'The countries could not be loaded.', severity: 'warn' },
  render: (args) => ({
    props: args,
    template: '<ws-ng-ui-load-error [message]="message" [severity]="severity" />',
  }),
};
