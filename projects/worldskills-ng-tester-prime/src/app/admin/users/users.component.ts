import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  template: `
    <div style="padding: 2rem;">
      <h1>Users</h1>
      <p>Manage application users.</p>
    </div>
  `,
})
export class UsersComponent {}
