import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { I18nText, WsI18nTextComponent } from '@worldskills/ng-ui';

const SAMPLE: I18nText = {
  lang_code: 'en',
  text: 'Hello World',
  translations: { fr: 'Bonjour le monde', de: 'Hallo Welt', ar_AE: 'مرحبا بالعالم' },
};

const CITIES = ['Lyon', 'Shanghai', 'Kazan', 'Helsinki', 'Abu Dhabi', 'São Paulo', 'Leipzig'];

@Component({
  selector: 'story-i18n-text',
  standalone: true,
  imports: [WsI18nTextComponent, FormsModule, JsonPipe],
  template: `
    <div class="flex flex-col gap-3 max-w-lg">
      <ws-ng-ui-i18n-text
        [placeholder]="placeholder()"
        [multiline]="multiline()"
        [autoComplete]="autoComplete()"
        [suggestions]="suggestions()"
        (completeMethod)="search($event.query)"
        [requiredLanguages]="requiredLanguages()"
        [fluid]="true"
        [(ngModel)]="value" />
      <pre class="text-xs text-gray-500">{{ value | json }}</pre>
    </div>
  `,
})
class I18nTextWrapperComponent {
  placeholder = input('Enter text…');
  multiline = input(false);
  autoComplete = input(false);
  empty = input(false);
  requiredLanguages = input<string[]>([]);
  suggestions = signal<string[]>([]);
  value: I18nText | null = null;

  ngOnInit(): void {
    this.value = this.empty() ? null : structuredClone(SAMPLE);
  }

  search(query: string): void {
    this.suggestions.set(CITIES.filter(c => c.toLowerCase().includes(query.toLowerCase())));
  }
}

type Story = StoryObj<I18nTextWrapperComponent>;

export const SingleLine: Story = {
  name: 'Single line',
  args: { placeholder: 'Enter text…', multiline: false, autoComplete: false, empty: false },
};

export const Multiline: Story = {
  args: { placeholder: 'Enter description…', multiline: true, autoComplete: false, empty: false },
};

export const Empty: Story = {
  args: { placeholder: 'Enter text…', multiline: false, autoComplete: false, empty: true },
};

export const Autocomplete: Story = {
  name: 'Autocomplete (try "l")',
  args: { placeholder: 'City…', multiline: false, autoComplete: true, empty: true },
};

export const RequiredTranslations: Story = {
  name: 'Required translations',
  args: { placeholder: 'Enter text…', multiline: false, autoComplete: false, empty: false, requiredLanguages: ['en', 'fr', 'zh_CN'] },
};

const meta: Meta<I18nTextWrapperComponent> = {
  title: 'WorldSkills UI / I18n Text',
  component: I18nTextWrapperComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [I18nTextWrapperComponent] })],
  parameters: {
    docs: {
      description: {
        component: `
Text input (or textarea with \`multiline\`) bound to a **single** \`I18nText\` whose \`translations\` map
holds every language. The language button opens a menu to switch the edited language, and a dialog
to add, edit or remove translations. Implements \`ControlValueAccessor\`.

\`\`\`html
<ws-ng-ui-i18n-text [(ngModel)]="name" placeholder="Name" />
<ws-ng-ui-i18n-text formControlName="description" [multiline]="true" [rows]="4" />
<ws-ng-ui-i18n-text [autoComplete]="true" [suggestions]="hits" (completeMethod)="search($event)" />
\`\`\`

Emitted value: \`{ lang_code, text, translations }\` where \`lang_code\`/\`text\` is the language being edited.
The edited language follows the ngx-translate current language unless \`[language]\` is set.

The language button shows \`+N\` for other filled-in translations. \`[requiredLanguages]="['en', 'fr']"\` keeps those
languages in the menu and dialog (highlighted, not removable), and shows a warning on the language button when one is missing.

Need the old \`I18nText[]\` array shape? Use \`ws-ng-ui-i18n-input\` / \`ws-ng-ui-i18n-textarea\`.
        `,
      },
    },
  },
  render: (args) => ({
    props: args,
    template: `<story-i18n-text [placeholder]="placeholder" [multiline]="multiline" [autoComplete]="autoComplete" [empty]="empty" [requiredLanguages]="requiredLanguages ?? []" />`,
  }),
  argTypes: {
    placeholder: { control: 'text' },
    requiredLanguages: { control: 'object' },
    multiline: { control: 'boolean' },
    autoComplete: { control: 'boolean' },
    empty: { control: 'boolean' },
  },
};

export default meta;
