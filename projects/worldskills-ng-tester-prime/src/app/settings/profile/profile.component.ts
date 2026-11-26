import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <div style="padding: 2rem;">
      <h1>Profile</h1>
      <p>View and edit your profile information.</p>
    </div>
  `,
})
export class ProfileComponent {}
