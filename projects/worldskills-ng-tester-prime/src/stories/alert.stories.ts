import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { WsAlertComponent, WsToastComponent, WsAlertService } from '@worldskills/ng-ui';

// ── Wrapper for toast stories ─────────────────────────────────────────────────

@Component({
  selector: 'story-toast-wrapper',
  standalone: true,
  imports: [WsToastComponent, ButtonModule],
  template: `
    <ws-ng-ui-toast position="bottom-center" />
    <p class="text-sm text-gray-500 mb-4">Toasts appear at the bottom of the screen. Click a button to trigger one.</p>
    <div class="flex flex-wrap gap-3">
      <p-button label="Success" severity="success" (onClick)="showSuccess()" />
      <p-button label="Info"    severity="info"    (onClick)="showInfo()" />
      <p-button label="Warning" severity="warn"    (onClick)="showWarn()" />
      <p-button label="Error"   severity="danger"  (onClick)="showError()" />
      <p-button label="Sticky"  severity="secondary" (onClick)="showSticky()" />
    </div>
  `,
})
class ToastWrapperComponent {
  constructor(private alerts: WsAlertService) {}

  ngOnInit() {
    // Pre-show one of each so the story renders something immediately
    this.alerts.success('The record was saved successfully.');
    this.alerts.info('Your session will expire in 5 minutes.');
    this.alerts.warn('This action will affect 14 related records.', 'Warning');
    this.alerts.error('Failed to connect to the server. Please try again.');
  }

  showSuccess() { this.alerts.success('The record was saved successfully.'); }
  showInfo()    { this.alerts.info('Your session will expire in 5 minutes.'); }
  showWarn()    { this.alerts.warn('This action will affect 14 related records.', 'Warning'); }
  showError()   { this.alerts.error('Failed to connect to the server. Please try again.'); }
  showSticky()  { this.alerts.info('This message stays until dismissed.', 'Sticky', { sticky: true }); }
}

// ── Meta ──────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'WorldSkills UI / Alerts',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Inline alerts — \`ws-ng-ui-alert\`

Static contextual messages placed directly in the page. Use these for form validation
summaries, page-level notices, or persistent warnings.

\`\`\`html
<ws-ng-ui-alert severity="warn" message="This environment is read-only." />
<ws-ng-ui-alert severity="error" message="Submission failed." [closable]="true" />
\`\`\`

## Toast notifications — \`WsAlertService\` + \`<ws-ng-ui-toast>\`

Push transient notifications from anywhere in the application.

**App shell setup** (once):
\`\`\`html
<!-- app.component.html -->
<ws-ng-ui-toast />
<router-outlet />
\`\`\`

\`\`\`ts
// app.config.ts
providers: [MessageService]
\`\`\`

**Usage:**
\`\`\`ts
constructor(private alerts: WsAlertService) {}

this.alerts.success('Saved successfully.');
this.alerts.warn('Check your input.', 'Warning');
this.alerts.error('Something went wrong.');
this.alerts.info('Session expires soon.', 'Notice', { sticky: true });
\`\`\`

| Method | Default life | Sticky by default |
|--------|-------------|-------------------|
| \`success()\` | 4 s | No |
| \`info()\` | 4 s | No |
| \`warn()\` | 4 s | No |
| \`error()\` | sticky | Yes |
        `,
      },
    },
  },
};

export default meta;

// ── Inline alert stories ──────────────────────────────────────────────────────

export const InlineSuccess: StoryObj<WsAlertComponent> = {
  name: 'Inline — Success',
  decorators: [moduleMetadata({ imports: [WsAlertComponent] })],
  render: (args) => ({ props: args, template: '<ws-ng-ui-alert [severity]="severity" [message]="message" [closable]="closable" />' }),
  argTypes: {
    severity: { control: 'select', options: ['success', 'info', 'warn', 'error'] },
    message: { control: 'text' },
    closable: { control: 'boolean' },
  },
  args: {
    severity: 'success',
    message: 'The competition was published successfully.',
    closable: false,
  },
};

export const InlineInfo: StoryObj<WsAlertComponent> = {
  name: 'Inline — Info',
  decorators: [moduleMetadata({ imports: [WsAlertComponent] })],
  render: (args) => ({ props: args, template: '<ws-ng-ui-alert [severity]="severity" [message]="message" [closable]="closable" />' }),
  args: {
    severity: 'info',
    message: 'Results will be published after the closing ceremony.',
    closable: false,
  },
};

export const InlineWarning: StoryObj<WsAlertComponent> = {
  name: 'Inline — Warning',
  decorators: [moduleMetadata({ imports: [WsAlertComponent] })],
  render: (args) => ({ props: args, template: '<ws-ng-ui-alert [severity]="severity" [message]="message" [closable]="closable" />' }),
  args: {
    severity: 'warn',
    message: 'This environment is connected to staging data. Changes may be overwritten.',
    closable: true,
  },
};

export const InlineError: StoryObj<WsAlertComponent> = {
  name: 'Inline — Error',
  decorators: [moduleMetadata({ imports: [WsAlertComponent] })],
  render: (args) => ({ props: args, template: '<ws-ng-ui-alert [severity]="severity" [message]="message" [closable]="closable" />' }),
  args: {
    severity: 'error',
    message: 'Failed to load competition data. Please refresh the page.',
    closable: true,
  },
};

// ── Toast story ───────────────────────────────────────────────────────────────

export const ToastNotifications: StoryObj = {
  name: 'Toast Notifications',
  decorators: [moduleMetadata({ imports: [ToastWrapperComponent] })],
  render: () => ({ template: '<story-toast-wrapper />' }),
};
