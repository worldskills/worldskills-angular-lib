import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { WsDialogComponent, WsConfirmComponent, WsConfirmService } from 'worldskills-ng-ui';

// ── Wrapper for content dialog stories ───────────────────────────────────────

@Component({
  selector: 'story-dialog-wrapper',
  standalone: true,
  imports: [WsDialogComponent, ButtonModule],
  template: `
    <p-button label="Open Dialog" (onClick)="visible = true" />

    <ws-ng-ui-dialog [(visible)]="visible" [title]="title" [width]="width" [dismissible]="dismissible" [closable]="closable">
      <p class="text-sm leading-relaxed">{{ body }}</p>

      @if (showFooter) {
        <ng-template #wsDialogFooter>
          <p-button label="Cancel" severity="secondary" (onClick)="visible = false" />
          <p-button label="Save" (onClick)="visible = false" />
        </ng-template>
      }
    </ws-ng-ui-dialog>
  `,
})
class DialogWrapperComponent {
  @Input() title = 'Dialog Title';
  @Input() body = 'Dialog body content goes here.';
  @Input() width = '32rem';
  @Input() dismissible = true;
  @Input() closable = true;
  @Input() showFooter = true;
  visible = false;
}

// ── Wrapper for confirm dialog stories ───────────────────────────────────────

@Component({
  selector: 'story-confirm-wrapper',
  standalone: true,
  imports: [WsConfirmComponent, ButtonModule],
  template: `
    <ws-ng-ui-confirm />
    <div class="flex flex-wrap gap-3">
      <p-button label="Alert" severity="info" (onClick)="showAlert()" />
      <p-button label="Confirm (OK/Cancel)" (onClick)="showConfirm()" />
      <p-button label="Yes / No" severity="warn" (onClick)="showYesNo()" />
      <p-button label="Danger (Delete)" severity="danger" (onClick)="showDanger()" />
    </div>
    @if (result !== null) {
      <p class="mt-4 text-sm text-gray-600">Last result: <strong>{{ result }}</strong></p>
    }
  `,
})
class ConfirmWrapperComponent {
  result: string | null = null;

  constructor(private confirmService: WsConfirmService) {}

  async showAlert() {
    await this.confirmService.alert('The record was saved successfully.', 'Success');
    this.result = 'dismissed';
  }

  async showConfirm() {
    const ok = await this.confirmService.confirm({
      title: 'Save Changes',
      message: 'Do you want to save your changes before leaving?',
    });
    this.result = ok ? 'OK' : 'Cancel';
  }

  async showYesNo() {
    const yes = await this.confirmService.yesNo({
      title: 'Publish',
      message: 'Are you sure you want to publish this record? It will be visible to all users.',
    });
    this.result = yes ? 'Yes' : 'No';
  }

  async showDanger() {
    const confirmed = await this.confirmService.danger({
      title: 'Delete Competition',
      message: 'This action cannot be undone. The competition and all its data will be permanently deleted.',
      acceptLabel: 'Delete',
    });
    this.result = confirmed ? 'Deleted' : 'Cancelled';
  }
}

// ── Meta ──────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'WorldSkills UI / Dialog',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Content dialogs — \`ws-ng-ui-dialog\`

A styled wrapper around PrimeNG's \`p-dialog\`. Use it declaratively with \`[(visible)]\` and \`ng-content\` for the body. Provide a \`#wsDialogFooter\` template for custom footer buttons.

\`\`\`html
<ws-ng-ui-dialog [(visible)]="visible" title="Edit Record" width="40rem">
  <my-form />

  <ng-template #wsDialogFooter>
    <p-button label="Cancel" severity="secondary" (onClick)="visible = false" />
    <p-button label="Save" (onClick)="save()" />
  </ng-template>
</ws-ng-ui-dialog>
\`\`\`

## Confirmation dialogs — \`WsConfirmService\`

Programmatic confirmation dialogs. Place \`<ws-ng-ui-confirm />\` once in your app shell, then inject \`WsConfirmService\` anywhere.

\`\`\`ts
constructor(private confirm: WsConfirmService) {}

async delete() {
  const ok = await this.confirm.danger({
    title: 'Delete Record',
    message: 'This cannot be undone.',
  });
  if (ok) { /* proceed */ }
}
\`\`\`

| Method | Buttons | Returns |
|--------|---------|---------|
| \`alert(message, title?)\` | OK | \`Promise<void>\` |
| \`confirm(options)\` | OK / Cancel | \`Promise<boolean>\` |
| \`yesNo(options)\` | Yes / No | \`Promise<boolean>\` |
| \`danger(options)\` | Delete / Cancel (danger styled) | \`Promise<boolean>\` |
        `,
      },
    },
  },
};

export default meta;

// ── Stories ───────────────────────────────────────────────────────────────────

export const ContentDialog: StoryObj<DialogWrapperComponent> = {
  name: 'Content Dialog',
  decorators: [moduleMetadata({ imports: [DialogWrapperComponent] })],
  render: (args) => ({ props: args, template: '<story-dialog-wrapper [title]="title" [body]="body" [width]="width" [dismissible]="dismissible" [closable]="closable" [showFooter]="showFooter" />' }),
  argTypes: {
    title: { control: 'text' },
    body: { control: 'text' },
    width: { control: 'text' },
    dismissible: { control: 'boolean' },
    closable: { control: 'boolean' },
    showFooter: { control: 'boolean' },
  },
  args: {
    title: 'Edit Competition',
    body: 'This is where your form or content goes. The dialog is responsive — on small screens it expands to 95vw.',
    width: '32rem',
    dismissible: true,
    closable: true,
    showFooter: true,
  },
};

export const ConfirmDialogs: StoryObj = {
  name: 'Confirm Dialogs',
  decorators: [moduleMetadata({ imports: [ConfirmWrapperComponent] })],
  render: () => ({ template: '<story-confirm-wrapper />' }),
};
