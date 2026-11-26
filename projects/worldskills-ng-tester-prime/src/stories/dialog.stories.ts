import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { WsDialogComponent, WsConfirmComponent, WsConfirmService } from '@worldskills/ng-ui';

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

// ── Wrapper for the form dialog story ────────────────────────────────────────

@Component({
  selector: 'story-form-dialog-wrapper',
  standalone: true,
  imports: [WsDialogComponent, ButtonModule, ReactiveFormsModule, InputTextModule],
  template: `
    <p-button label="Add contact" icon="pi pi-plus" (onClick)="visible = true" />

    <ws-ng-ui-dialog [(visible)]="visible" title="Add contact" formId="story-contact-form" [saving]="saving">
      <form id="story-contact-form" [formGroup]="form" (ngSubmit)="save()" class="flex flex-col gap-2">
        <label for="story-email" class="text-sm font-medium">Email</label>
        <input pInputText id="story-email" formControlName="email" type="email" />
        @if (form.controls.email.touched && form.controls.email.invalid) {
          <small class="text-red-600">Enter a valid email address.</small>
        }
      </form>
    </ws-ng-ui-dialog>

    @if (lastSaved) {
      <p class="mt-3 text-sm text-gray-500">Saved: <strong>{{ lastSaved }}</strong></p>
    }
  `,
})
class FormDialogWrapperComponent {
  visible = false;
  saving = false;
  lastSaved: string | null = null;
  form = new FormGroup({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
  });

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving = true;
    setTimeout(() => {
      this.saving = false;
      this.lastSaved = this.form.value.email ?? null;
      this.visible = false;
      this.form.reset();
    }, 800);
  }
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

### Form dialogs

For a dialog around a form, set \`formId\` instead of writing a footer. The dialog shows translated Cancel / Save buttons, and Save submits the form, so validation and \`(ngSubmit)\` run just as when pressing Enter. (A \`form\` attribute on \`p-button\` isn't passed on to its inner button, so don't rely on it.)

\`\`\`html
<ws-ng-ui-dialog [(visible)]="open" title="Add contact" formId="contact-form" [saving]="saving()">
  <form id="contact-form" [formGroup]="form" (ngSubmit)="save()">…</form>
</ws-ng-ui-dialog>
\`\`\`

| Input | Default | Purpose |
|-------|---------|---------|
| \`formId\` | — | Id of the projected form; turns the Cancel / Save footer on |
| \`saving\` | \`false\` | Spinner on Save; Save is blocked |
| \`saveDisabled\` | \`false\` | Disables Save |
| \`saveLabel\` / \`cancelLabel\` | translated Save / Cancel | Button texts |
| \`saveIcon\` | \`pi pi-check\` | Save icon |

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

Button texts are translated (\`ws_ui.actions.*\`), with English as the fallback.
To pass your own texts as translation keys, set \`translate: true\` (and \`params\` if needed):

\`\`\`ts
await this.confirm.danger({ message: 'contacts.delete_confirm', params: { name }, translate: true });
\`\`\`
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

export const FormDialog: StoryObj = {
  name: 'Form Dialog',
  decorators: [moduleMetadata({ imports: [FormDialogWrapperComponent] })],
  render: () => ({ template: '<story-form-dialog-wrapper />' }),
};

export const ConfirmDialogs: StoryObj = {
  name: 'Confirm Dialogs',
  decorators: [moduleMetadata({ imports: [ConfirmWrapperComponent] })],
  render: () => ({ template: '<story-confirm-wrapper />' }),
};
