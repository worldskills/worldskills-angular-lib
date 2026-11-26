import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Observable, of, throwError, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { WsLoadableComponent, WsLoadErrorComponent, WsSkeletonListComponent, loadable } from '@worldskills/ng-ui';

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

// ── Wrapper: a list that shows its shape while it loads ──────────────────────

@Component({
  selector: 'story-skeleton-wrapper',
  standalone: true,
  imports: [WsLoadableComponent, WsSkeletonListComponent, ButtonModule],
  template: `
    <div class="flex flex-col gap-4">
      <p-button label="Reload (2 seconds)" severity="secondary" [outlined]="true" (onClick)="members.reload()" class="self-start" />

      <ws-ng-ui-loadable [state]="members.state()" errorMessage="The members could not be loaded." (retry)="members.reload()">
        <ng-template #wsLoading>
          <ws-ng-ui-skeleton-list [rows]="4" avatar="circle" [lines]="2" [meta]="true" />
        </ng-template>
        <ng-template let-list>
          <ul class="divide-y divide-surface">
            @for (member of list; track member.code) {
              <li class="flex items-center gap-3 py-3">
                <span class="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface-100 text-sm font-semibold">
                  {{ member.code }}
                </span>
                <span class="flex min-w-0 flex-1 flex-col">
                  <span class="font-medium">{{ member.name }}</span>
                  <span class="text-sm text-muted-color">Joined {{ member.joined }}</span>
                </span>
                <span class="rounded-full bg-surface-100 px-3 py-1 text-xs">Full</span>
              </li>
            }
          </ul>
        </ng-template>
      </ws-ng-ui-loadable>
    </div>
  `,
})
class SkeletonWrapperComponent {
  members = loadable(() =>
    timer(2000).pipe(
      switchMap(() => of([
        { code: 'AT', name: 'Austria', joined: 1953 },
        { code: 'FI', name: 'Finland', joined: 1990 },
        { code: 'CH', name: 'Switzerland', joined: 1953 },
        { code: 'BR', name: 'Brazil', joined: 1983 },
      ])),
    ),
  );
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

## Skeletons: \`ws-ng-ui-skeleton-list\`

On slower connections, showing the shape of a list feels faster than a spinner. Pass a skeleton
to \`ws-ng-ui-loadable\` as a \`#wsLoading\` template; without one it shows the spinner.

\`\`\`html
<ws-ng-ui-loadable [state]="members.state()">
  <ng-template #wsLoading><ws-ng-ui-skeleton-list avatar="circle" [lines]="2" /></ng-template>
  <ng-template let-members>…</ng-template>
</ws-ng-ui-loadable>
\`\`\`

| Input | Default | Purpose |
|-------|---------|---------|
| \`rows\` | 8 | Number of placeholder rows |
| \`avatar\` | \`none\` | \`circle\` (flag, person) or \`square\` (logo) before the text |
| \`lines\` | 1 | 2 adds a shorter second line |
| \`meta\` | \`false\` | A tag-shaped placeholder at the end of each row |

It can also be used on its own, e.g. for a list that keeps old results while a new search loads.
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

export const LoadableWithSkeleton: StoryObj = {
  name: 'Loadable with a skeleton',
  decorators: [moduleMetadata({ imports: [SkeletonWrapperComponent] })],
  render: () => ({ template: '<story-skeleton-wrapper />' }),
};

export const SkeletonList: StoryObj<WsSkeletonListComponent> = {
  name: 'Skeleton list',
  decorators: [moduleMetadata({ imports: [WsSkeletonListComponent] })],
  argTypes: {
    rows: { control: { type: 'number', min: 1, max: 20 } },
    avatar: { control: 'select', options: ['none', 'circle', 'square'] },
    lines: { control: 'select', options: [1, 2] },
    meta: { control: 'boolean' },
  },
  args: { rows: 5, avatar: 'square', lines: 2, meta: false },
  render: (args) => ({
    props: args,
    template: '<ws-ng-ui-skeleton-list [rows]="rows" [avatar]="avatar" [lines]="lines" [meta]="meta" />',
  }),
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
