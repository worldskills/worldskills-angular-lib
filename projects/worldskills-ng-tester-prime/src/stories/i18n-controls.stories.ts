import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { I18nText, WsI18nInputComponent, WsI18nTextareaComponent } from 'worldskills-ng-ui';

const SAMPLE_TEXTS: I18nText[] = [
  { lang_code: 'en', text: 'Hello World' },
  { lang_code: 'fr', text: 'Bonjour le monde' },
  { lang_code: 'de', text: 'Hallo Welt' },
  { lang_code: 'ar_AE', text: 'مرحبا بالعالم' },
];

const EMPTY_TEXTS: I18nText[] = [
  { lang_code: 'en', text: '' },
  { lang_code: 'fr', text: '' },
  { lang_code: 'de', text: '' },
];

// ── Input stories ────────────────────────────────────────────────────────────

@Component({
  selector: 'story-i18n-input',
  standalone: true,
  imports: [WsI18nInputComponent, FormsModule, JsonPipe],
  template: `
    <div class="flex flex-col gap-3 max-w-lg">
      <ws-ng-ui-i18n-input
        [placeholder]="placeholder"
        [disabled]="disabled"
        [disableLangChange]="disableLangChange"
        [(ngModel)]="value" />
      <p class="text-xs text-gray-500">Value: {{ value | json }}</p>
    </div>
  `,
})
class I18nInputWrapperComponent {
  placeholder = 'Enter text…';
  disabled = false;
  disableLangChange = false;
  value: I18nText[] = [...SAMPLE_TEXTS];
}

export const Input: StoryObj<I18nInputWrapperComponent> = {
  name: 'Input (single-line)',
  args: { placeholder: 'Enter text…', disabled: false, disableLangChange: false },
};

export const InputEmpty: StoryObj<I18nInputWrapperComponent> = {
  name: 'Input (empty)',
  args: { placeholder: 'Enter text…', disabled: false, disableLangChange: false },
  decorators: [
    moduleMetadata({ imports: [I18nInputWrapperComponent] }),
  ],
  render: (args) => ({
    props: { ...args, value: EMPTY_TEXTS },
    template: `<story-i18n-input [placeholder]="placeholder" [disabled]="disabled" [disableLangChange]="disableLangChange"></story-i18n-input>`,
  }),
};

export const InputDisabled: StoryObj<I18nInputWrapperComponent> = {
  name: 'Input (disabled)',
  args: { placeholder: 'Enter text…', disabled: true, disableLangChange: false },
};

export const InputLangLocked: StoryObj<I18nInputWrapperComponent> = {
  name: 'Input (language locked)',
  args: { placeholder: 'Enter text…', disabled: false, disableLangChange: true },
};

// ── Textarea stories ──────────────────────────────────────────────────────────

@Component({
  selector: 'story-i18n-textarea',
  standalone: true,
  imports: [WsI18nTextareaComponent, FormsModule, JsonPipe],
  template: `
    <div class="flex flex-col gap-3 max-w-lg">
      <ws-ng-ui-i18n-textarea
        [placeholder]="placeholder"
        [rows]="rows"
        [disabled]="disabled"
        [disableLangChange]="disableLangChange"
        [(ngModel)]="value" />
      <p class="text-xs text-gray-500">Value: {{ value | json }}</p>
    </div>
  `,
})
class I18nTextareaWrapperComponent {
  placeholder = 'Enter text…';
  rows = 4;
  disabled = false;
  disableLangChange = false;
  value: I18nText[] = [...SAMPLE_TEXTS];
}

export const Textarea: StoryObj<I18nTextareaWrapperComponent> = {
  name: 'Textarea (multi-line)',
  args: { placeholder: 'Enter text…', rows: 4, disabled: false, disableLangChange: false },
};

export const TextareaDisabled: StoryObj<I18nTextareaWrapperComponent> = {
  name: 'Textarea (disabled)',
  args: { placeholder: 'Enter text…', rows: 4, disabled: true, disableLangChange: false },
};

// ── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<I18nInputWrapperComponent> = {
  title: 'WorldSkills UI / i18n Controls',
  component: I18nInputWrapperComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [I18nInputWrapperComponent, I18nTextareaWrapperComponent] })],
  parameters: {
    docs: {
      description: {
        component: `
Multi-language text controls that allow capturing or displaying text across multiple languages.
Both components implement \`ControlValueAccessor\` and accept an \`I18nText[]\` array.

**Input** — single-line text with language selector appended:
\`\`\`html
<ws-ng-ui-i18n-input [(ngModel)]="texts" placeholder="Enter name…" />
\`\`\`

**Textarea** — multi-line text with language selector above:
\`\`\`html
<ws-ng-ui-i18n-textarea [(ngModel)]="texts" [rows]="6" placeholder="Enter description…" />
\`\`\`

Both accept:
- \`[(ngModel)]\` or reactive \`[formControl]\`
- \`placeholder\`, \`disabled\`, \`disableLangChange\`

The active language persists in \`sessionStorage\` under the key \`lang\`.
        `,
      },
    },
  },
  render: (args) => ({
    props: args,
    template: `<story-i18n-input [placeholder]="placeholder" [disabled]="disabled" [disableLangChange]="disableLangChange"></story-i18n-input>`,
  }),
  argTypes: {
    disabled: { control: 'boolean' },
    disableLangChange: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
};

export default meta;
