import { Component } from '@angular/core';

@Component({
  selector: 'app-logs',
  standalone: true,
  template: `
    <div style="padding: 2rem;">
      <h1>Admin Logs</h1>
      <p>This page requires the Admin role.</p>
    </div>
  `,
})
export class LogsComponent {}
