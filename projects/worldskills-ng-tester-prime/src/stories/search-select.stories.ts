import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { delay, of } from 'rxjs';
import { WsSearchFn, WsSearchSelectComponent } from '@worldskills/ng-ui';

interface Country { id: number; code: string; name: { text: string } }

const COUNTRIES: Country[] = [
  'Australia', 'Austria', 'Brazil', 'Canada', 'China', 'Finland', 'France', 'Germany',
  'Japan', 'Korea', 'Netherlands', 'Portugal', 'Switzerland', 'United Arab Emirates', 'United Kingdom',
].map((text, i) => ({ id: i + 1, code: text.slice(0, 2).toUpperCase(), name: { text } }));

/** Simulates a server search with latency. */
const searchCountries: WsSearchFn<Country> = term =>
  of(COUNTRIES.filter(c => c.name.text.toLowerCase().includes(term.toLowerCase()))).pipe(delay(400));

@Component({
  selector: 'story-search-select',
  standalone: true,
  imports: [WsSearchSelectComponent, FormsModule, JsonPipe],
  template: `
    <div class="flex flex-col gap-3 max-w-lg">
      <ws-ng-ui-search-select
        [search]="search"
        optionLabel="name.text"
        [multiple]="multiple()"
        [dropdown]="dropdown()"
        [minLength]="minLength()"
        [disabled]="disabled()"
        [(ngModel)]="value" />
      <p class="text-xs text-gray-500">Value: {{ value | json }}</p>
    </div>
  `,
})
class SearchSelectWrapperComponent {
  multiple = input(false);
  dropdown = input(false);
  minLength = input(1);
  disabled = input(false);
  search = searchCountries;
  value: Country | Country[] | null = null;
}

const meta: Meta<SearchSelectWrapperComponent> = {
  title: 'WorldSkills UI / Search Select',
  component: SearchSelectWrapperComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [SearchSelectWrapperComponent] })],
  argTypes: {
    multiple: { control: 'boolean' },
    dropdown: { control: 'boolean' },
    minLength: { control: 'number' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: `
Select whose options are loaded from the server as the user types. Replaces \`[wsSelect]\` + ng-select
from worldskills-angular-lib. Works with \`ngModel\` and reactive forms; the value is the selected item
(or an array with \`multiple\`). Typed text that is not picked from the list is discarded.

\`\`\`ts
searchCountries: WsSearchFn<Country> = term => this.countryService.search(term);
\`\`\`

\`\`\`html
<ws-ng-ui-search-select formControlName="country" [search]="searchCountries" optionLabel="name.text" />
\`\`\`

Earlier requests are cancelled when the user keeps typing, and a failed request shows no results.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<SearchSelectWrapperComponent>;

export const Single: Story = {
  args: { multiple: false, dropdown: false, minLength: 1, disabled: false },
};

export const Multiple: Story = {
  args: { multiple: true, dropdown: false, minLength: 1, disabled: false },
};

export const WithDropdown: Story = {
  name: 'With dropdown button',
  args: { multiple: false, dropdown: true, minLength: 0, disabled: false },
};

export const Disabled: Story = {
  args: { multiple: false, dropdown: false, minLength: 1, disabled: true },
};
