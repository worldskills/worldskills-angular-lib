import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { EditorModule } from 'primeng/editor';
import { I18nText } from '@worldskills/ng-ui';
import { WsI18nEditorDirective } from '@worldskills/ng-ui/editor';

const SAMPLE: I18nText = {
  lang_code: 'en',
  text: '<p><strong>Welcome</strong> to the competition.</p>',
  translations: {
    fr: '<p><strong>Bienvenue</strong> à la compétition.</p>',
    ar_AE: '<p><strong>مرحبا</strong> بكم في المسابقة.</p>',
  },
};

@Component({
  selector: 'story-i18n-editor',
  standalone: true,
  imports: [EditorModule, WsI18nEditorDirective, ReactiveFormsModule, JsonPipe],
  template: `
    <div class="flex flex-col gap-3 max-w-3xl">
      @if (customToolbar()) {
        <p-editor wsI18n [formControl]="control" [style]="{ height: '12rem' }">
          <ng-template #header>
            <span class="ql-formats">
              <button class="ql-bold" type="button" aria-label="Bold"></button>
              <button class="ql-italic" type="button" aria-label="Italic"></button>
              <button class="ql-link" type="button" aria-label="Link"></button>
            </span>
          </ng-template>
        </p-editor>
      } @else {
        <p-editor wsI18n [formControl]="control" [style]="{ height: '12rem' }" />
      }
      <pre class="text-xs text-gray-500 whitespace-pre-wrap">{{ control.value | json }}</pre>
    </div>
  `,
})
class I18nEditorWrapperComponent {
  customToolbar = input(false);
  control = new FormControl<I18nText>(structuredClone(SAMPLE));
}

type Story = StoryObj<I18nEditorWrapperComponent>;

export const Default: Story = {
  name: 'Default toolbar',
  args: { customToolbar: false },
};

export const CustomToolbar: Story = {
  name: 'Custom toolbar',
  args: { customToolbar: true },
};

const meta: Meta<I18nEditorWrapperComponent> = {
  title: 'WorldSkills UI / I18n Editor',
  component: I18nEditorWrapperComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [I18nEditorWrapperComponent] })],
  parameters: {
    docs: {
      description: {
        component: `
\`wsI18n\` is a plugin directive for PrimeNG's \`p-editor\`: add it to an existing editor to make it
multi-language. It appends a language button to the editor's toolbar (default or your own \`#header\`)
and turns the form value into a single \`I18nText\` whose \`text\` and \`translations\` hold HTML.
RTL languages switch the editor direction automatically.

\`\`\`ts
import { WsI18nEditorDirective } from '@worldskills/ng-ui/editor'; // separate entry point, requires quill
\`\`\`

\`\`\`html
<p-editor wsI18n formControlName="body" />
\`\`\`

- Needs \`ngModel\`, \`formControl\` or \`formControlName\` on the same \`p-editor\`.
- \`lang_code\` stays the value's original language; edits to other languages go into \`translations\`.
- Inputs: \`availableLanguages\`, \`language\` (otherwise follows the ngx-translate language).
        `,
      },
    },
  },
  render: (args) => ({
    props: args,
    template: `<story-i18n-editor [customToolbar]="customToolbar" />`,
  }),
  argTypes: {
    customToolbar: { control: 'boolean' },
  },
};

export default meta;
