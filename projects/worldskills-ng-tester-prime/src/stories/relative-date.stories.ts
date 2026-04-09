import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { RelativeDatePipe } from 'worldskills-ng-ui';

@Component({
  selector: 'story-relative-date',
  standalone: true,
  imports: [RelativeDatePipe],
  template: `<span>{{ date | wsRelativeDate:format:'en':thresholdInDays }}</span>`,
})
class RelativeDateWrapperComponent {
  @Input() date: Date | string | null = null;
  @Input() format = 'mediumDate';
  @Input() thresholdInDays = 30;
}

const meta: Meta<RelativeDateWrapperComponent> = {
  title: 'WorldSkills UI / Date / Relative Date',
  component: RelativeDateWrapperComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [RelativeDateWrapperComponent] })],
  parameters: {
    docs: {
      description: {
        component: `
A pipe that converts a date into a human-readable relative string ("2 hours ago", "in 3 days").
Falls back to a formatted date when beyond the threshold. All strings are i18n-ready via ngx-translate.

\`\`\`html
{{ competition.startDate | wsRelativeDate }}
{{ updatedAt | wsRelativeDate:'dd MMM yyyy':'en':7 }}
\`\`\`
        `,
      },
    },
  },
  render: (args) => ({
    props: args,
    template: `<story-relative-date [date]="date" [format]="format" [thresholdInDays]="thresholdInDays"></story-relative-date>`,
  }),
  argTypes: {
    thresholdInDays: { control: 'number' },
    format: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<RelativeDateWrapperComponent>;

const minutesAgo = (n: number) => new Date(Date.now() - n * 60_000);
const hoursAgo   = (n: number) => new Date(Date.now() - n * 3_600_000);
const daysAgo    = (n: number) => new Date(Date.now() - n * 86_400_000);
const inMinutes  = (n: number) => new Date(Date.now() + n * 60_000);
const inDays     = (n: number) => new Date(Date.now() + n * 86_400_000);

export const JustNow: Story       = { name: 'Just now',    args: { date: minutesAgo(0.5) } };
export const MinutesAgo: Story    = { name: 'Minutes ago', args: { date: minutesAgo(15) } };
export const HoursAgo: Story      = { name: 'Hours ago',   args: { date: hoursAgo(3) } };
export const Yesterday: Story     = { name: 'Yesterday',   args: { date: daysAgo(1) } };
export const DaysAgo: Story       = { name: 'Days ago',    args: { date: daysAgo(5) } };
export const InAMinute: Story     = { name: 'In a minute', args: { date: inMinutes(1.5) } };
export const InDays: Story        = { name: 'In days',     args: { date: inDays(4) } };
export const BeyondThreshold: Story = {
  name: 'Beyond threshold (formatted fallback)',
  args: { date: daysAgo(45), format: 'dd MMM yyyy' },
};
