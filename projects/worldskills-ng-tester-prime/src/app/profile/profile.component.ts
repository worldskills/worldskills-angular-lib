import { Component, inject } from '@angular/core';
import { NgAuthService, User } from '@worldskills/ng-auth';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  template: `
    <div style="padding: 2rem;">
      <h1>My Profile</h1>
      @if (user) {
        <p><strong>Name:</strong> {{ user.first_name }} {{ user.last_name }}</p>
        <p><strong>Username:</strong> {{ user.username }}</p>
        <p><strong>Preferred Language:</strong> {{ user.preferred_lang }}</p>
      }
    </div>
  `,
})
export class UserProfileComponent {
  private ngAuthService = inject(NgAuthService);
  user: User = this.ngAuthService.currentUser;
}
