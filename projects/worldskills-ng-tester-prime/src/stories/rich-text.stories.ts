import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { WsRichTextEditorComponent, WsRichTextViewComponent } from '@worldskills/ng-ui/editor';

@Component({
  selector: 'story-rich-text',
  standalone: true,
  imports: [WsRichTextEditorComponent, WsRichTextViewComponent, ReactiveFormsModule],
  template: `
    <div class="grid gap-6 md:grid-cols-2">
      <div class="flex flex-col gap-2">
        <label id="story-notes-label" class="font-medium">Notes</label>
        <ws-ng-ui-rich-text-editor [formControl]="notes" labelId="story-notes-label" />
      </div>
      <div class="flex flex-col gap-2">
        <span class="font-medium">As shown</span>
        <ws-ng-ui-rich-text-view [html]="notes.value ?? ''" />
      </div>
    </div>
  `,
})
class RichTextComponent {
  notes = new FormControl<string | null>(
    '<p>Paid the <strong>2026</strong> fee in May.</p><ul><li>Invoice sent to the finance contact</li>'
    + '<li>Receipt filed</li></ul><p>See <a href="https://worldskills.org">worldskills.org</a> for the rules. '
    + 'Longer notes start collapsed so lists of members stay short, and "Show more" opens them.</p>',
  );
}

const meta: Meta = {
  title: 'WorldSkills UI / Rich Text',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
From the optional entry point \`@worldskills/ng-ui/editor\` (needs \`quill\` installed in the app).

## \`ws-ng-ui-rich-text-editor\`

PrimeNG Editor with a small, fixed toolbar: bold, italic, underline, lists, link and clear formatting,
each with a translated accessible name. Form-compatible; the value is HTML (or null when empty).

\`\`\`html
<label id="notes-label">Notes</label>
<ws-ng-ui-rich-text-editor formControlName="notes" labelId="notes-label" />
\`\`\`

Sanitise the HTML on the server to the same formats (\`WS_RICH_TEXT_FORMATS\`): p, br, strong / b,
em / i, u, ul / ol / li and a (http, https and mailto links).

## \`ws-ng-ui-rich-text-view\`

Shows the HTML (sanitised by Angular), with list markers, and collapses long text behind "Show more".

\`\`\`html
<ws-ng-ui-rich-text-view [html]="membership.notes" />
\`\`\`
        `,
      },
    },
  },
};

export default meta;

export const EditorAndView: StoryObj = {
  name: 'Editor and view',
  decorators: [moduleMetadata({ imports: [RichTextComponent] })],
  render: () => ({ template: '<story-rich-text />' }),
};
