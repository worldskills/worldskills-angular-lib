import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { WsAnnouncementComponent } from '@worldskills/ng-ui';

// ── Demo content ────────────────────────────────────────────────────────────

const SHORT_MESSAGE = 'WorldSkills Shanghai 2026 registration is now open. Please ensure your member organization has submitted all delegate details by 15 June 2026.';

const LONG_MESSAGE = `
<p>Dear Experts,</p>
<p>As tablet marking will be used at EuroSkills 2025, we recognise that some new experts may benefit from practicing with the CIS system in advance. To support this, <strong>you are now welcome to familiarise yourself with the CIS Tablet User Interface at any time</strong>, using your mobile phone or tablet.</p>
<p>🎬 We recommend watching this short video introduction to tablet marking before you begin:<br>
<a href="https://www.youtube.com/watch?v=SbfFnhvodc" target="_blank">https://www.youtube.com/watch?v=SbfFnhvodc</a></p>
<p><strong>📋 Instructions for Using CIS in Tablet Mode</strong></p>
<p>⚠️ <strong>Important:</strong> The system is designed for use on tablets or mobile phones only. It is <strong>not compatible</strong> with laptops or desktop computers.</p>
<ol>
  <li>Open this link in your mobile/tablet browser: <a href="https://cis-test.worldskills.org/es2025_test/login" target="_blank">https://cis-test.worldskills.org/es2025_test/login</a></li>
  <li>Log in using the credentials below:
    <ul>
      <li>Username: <strong>ItexN</strong></li>
      <li>Password: <strong>ItexN</strong></li>
    </ul>
  </li>
  <li>You'll find <strong>7 competitors</strong> in the system. You may assess one or all of them.</li>
  <li>There are <strong>10 aspects</strong> to assess — 9 measurement aspects and 1 judgment aspect.</li>
  <li>All aspects are located under <strong>Day 1</strong>, within the same sub-criteria.</li>
  <li>Please remember to add <strong>comments</strong> to each aspect.</li>
  <li>You may upload up to <strong>4 photos</strong> per competitor.</li>
  <li>When finished, remember to <strong>log out</strong>.</li>
</ol>
`;

const WARN_MESSAGE = `
<p><strong>Maintenance window scheduled:</strong> The Auth API and Resources API will be undergoing maintenance on <strong>Saturday, 12 April 2026 from 02:00–06:00 UTC</strong>.</p>
<p>During this window, users may experience intermittent login failures and file upload errors. All other services will remain operational.</p>
<p>Please plan accordingly and save any in-progress work before the maintenance window begins. If you experience issues after the window, please contact <a href="mailto:support@worldskills.org">support@worldskills.org</a>.</p>
`;

// ── Meta ────────────────────────────────────────────────────────────────────

const meta: Meta<WsAnnouncementComponent> = {
  title: 'WorldSkills UI / Announcement',
  component: WsAnnouncementComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Announcement — \`ws-ng-ui-announcement\`

A long-form alert for important announcements. Truncates content with a fade-out gradient and "Read more" toggle. Includes a close button.

Use this for messages that contain detailed instructions, HTML content, or multi-paragraph announcements. For short one-line alerts, use \`ws-ng-ui-alert\` instead.

### Usage

\`\`\`html
<ws-ng-ui-announcement
  severity="info"
  title="CIS Tablet Marking"
  [message]="longHtmlContent"
/>
\`\`\`

### Severities

| Severity | Use case |
|----------|----------|
| \`info\` | General announcements, instructions |
| \`success\` | Completed actions, positive updates |
| \`warn\` | Maintenance windows, deprecation notices |
| \`error\` | Outages, critical issues |

### Features
- Truncates long content with a gradient fade and "Read more" / "Show less" toggle
- Supports full HTML content (paragraphs, lists, links, bold)
- Close button dismisses the announcement
- Left border color matches severity
        `,
      },
    },
  },
  argTypes: {
    severity: { control: 'select', options: ['info', 'success', 'warn', 'error'] },
    title: { control: 'text' },
    message: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<WsAnnouncementComponent>;

// ── Stories ──────────────────────────────────────────────────────────────────

export const LongAnnouncement: Story = {
  name: 'Long Content (Info)',
  args: {
    severity: 'info',
    title: 'CIS Tablet Marking — EuroSkills 2025',
    message: LONG_MESSAGE,
  },
};

export const ShortAnnouncement: Story = {
  name: 'Short Content (Info)',
  args: {
    severity: 'info',
    title: 'Registration Open',
    message: SHORT_MESSAGE,
  },
};

export const WarningAnnouncement: Story = {
  name: 'Maintenance Warning',
  args: {
    severity: 'warn',
    title: 'Scheduled Maintenance',
    message: WARN_MESSAGE,
  },
};

export const SuccessAnnouncement: Story = {
  name: 'Success',
  args: {
    severity: 'success',
    title: 'Migration Complete',
    message: '<p>All components have been successfully migrated to Angular signals. No breaking changes for template consumers.</p><p>Please review the <a href="#">changelog</a> for full details and update your dependencies.</p>',
  },
};

export const ErrorAnnouncement: Story = {
  name: 'Error / Outage',
  args: {
    severity: 'error',
    title: 'Service Outage — Votes API',
    message: '<p>The Votes API is currently experiencing a complete outage. All polling and voting functionality is unavailable.</p><p>The infrastructure team has been notified and is actively investigating. Estimated time to resolution: <strong>2 hours</strong>.</p><p>Affected endpoints: <code>/votes</code>, <code>/polls</code>, <code>/tracks</code></p>',
  },
};
