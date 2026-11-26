import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { WsDialogComponent, WsFieldComponent, editDialog } from '@worldskills/ng-ui';

// ── Wrapper: a form with the common cases ────────────────────────────────────

@Component({
  selector: 'story-field-form',
  standalone: true,
  imports: [WsFieldComponent, ReactiveFormsModule, InputTextModule, ButtonModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="form.markAllAsTouched()" class="flex max-w-md flex-col gap-4">
      <ws-ng-ui-field label="Name" inputId="story-name" [control]="form.controls.name">
        <input pInputText id="story-name" formControlName="name" />
      </ws-ng-ui-field>

      <ws-ng-ui-field
        label="Code"
        inputId="story-code"
        [control]="form.controls.code"
        info="Two or three letters, used in URLs and exports. It must be unique."
        [messages]="{ taken: 'This code is already used.' }">
        <input pInputText id="story-code" formControlName="code" />
      </ws-ng-ui-field>

      <ws-ng-ui-field label="Email" inputId="story-email" [control]="form.controls.email" hint="Shown on the public website.">
        <input pInputText id="story-email" formControlName="email" type="email" />
      </ws-ng-ui-field>

      <div class="flex gap-2">
        <p-button type="submit" label="Check" />
        <p-button label="Mark code as taken" severity="secondary" [outlined]="true" (onClick)="markTaken()" />
      </div>
    </form>
  `,
})
class FieldFormComponent {
  form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: Validators.required }),
    code: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    email: new FormControl('', { nonNullable: true, validators: Validators.email }),
  });

  markTaken() {
    this.form.controls.code.setErrors({ taken: true });
    this.form.controls.code.markAsTouched();
  }
}

// ── Wrapper: add / edit dialog on a list ─────────────────────────────────────

@Component({
  selector: 'story-edit-dialog',
  standalone: true,
  imports: [WsDialogComponent, WsFieldComponent, ReactiveFormsModule, InputTextModule, ButtonModule],
  template: `
    <ul class="mb-3 flex flex-col gap-2">
      @for (site of sites; track $index) {
        <li class="flex items-center gap-2">
          <span>{{ site }}</span>
          <p-button icon="pi pi-pencil" size="small" [text]="true" severity="secondary" ariaLabel="Edit" (onClick)="edit(site)" />
        </li>
      }
    </ul>
    <p-button label="Add website" icon="pi pi-plus" (onClick)="add()" />

    <ws-ng-ui-dialog
      [visible]="dialog.visible()"
      (visibleChange)="!$event && dialog.close()"
      [title]="dialog.isEdit() ? 'Edit website' : 'Add website'"
      formId="story-site-form">
      <form id="story-site-form" [formGroup]="form" (ngSubmit)="save()">
        <ws-ng-ui-field label="URL" inputId="story-url" [control]="form.controls.url">
          <input pInputText id="story-url" formControlName="url" class="w-full" />
        </ws-ng-ui-field>
      </form>
    </ws-ng-ui-dialog>
  `,
})
class EditDialogComponent {
  sites = ['worldskills.org', 'worldskills.fi'];
  dialog = editDialog<string>();
  form = new FormGroup({ url: new FormControl('', { nonNullable: true, validators: Validators.required }) });

  add() {
    this.form.reset();
    this.dialog.openAdd();
  }

  edit(site: string) {
    this.form.reset({ url: site });
    this.dialog.openEdit(site);
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const url = this.form.getRawValue().url;
    const editing = this.dialog.editing();
    this.sites = editing ? this.sites.map(s => (s === editing ? url : s)) : [...this.sites, url];
    this.dialog.close();
  }
}

const meta: Meta = {
  title: 'WorldSkills UI / Field',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## \`ws-ng-ui-field\`

A labelled form field: the label (with \`*\` when the control is required), the projected control,
an optional \`hint\`, and the control's first error once it has been touched.

Longer explanations can go in \`info\`: a small "i" after the label that shows them on hover or
keyboard focus. Use it where space is tight; roomy forms can keep a visible \`hint\`.

\`\`\`html
<ws-ng-ui-field label="Code" inputId="code" [control]="form.controls.code" [messages]="{ taken: 'members.code_taken' }">
  <input pInputText id="code" formControlName="code" />
</ws-ng-ui-field>
\`\`\`

Built-in messages: \`required\`, \`email\`, \`minlength\`, \`maxlength\`, \`min\`, \`max\`, \`pattern\`, and a
general one for anything else. \`messages\` maps further error names to translation keys; the error's
value is passed as params (e.g. \`{{requiredLength}}\`). Set \`required\` when a custom validator makes
the field required.

## \`editDialog()\`

State for one dialog that both adds and edits items in a list:
\`visible()\`, \`editing()\`, \`isEdit()\`, \`openAdd()\`, \`openEdit(item)\` and \`close()\`.

\`\`\`ts
dialog = editDialog<Website>();
\`\`\`
\`\`\`html
<ws-ng-ui-dialog [visible]="dialog.visible()" (visibleChange)="!$event && dialog.close()"
  [title]="dialog.isEdit() ? 'Edit website' : 'Add website'" formId="website-form">…</ws-ng-ui-dialog>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

export const Fields: StoryObj = {
  name: 'Fields (submit to see the errors)',
  decorators: [moduleMetadata({ imports: [FieldFormComponent] })],
  render: () => ({ template: '<story-field-form />' }),
};

export const AddEditDialog: StoryObj = {
  name: 'Add / edit dialog',
  decorators: [moduleMetadata({ imports: [EditDialogComponent] })],
  render: () => ({ template: '<story-edit-dialog />' }),
};
