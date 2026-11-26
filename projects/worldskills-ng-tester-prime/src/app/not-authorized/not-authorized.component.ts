import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-authorized',
  standalone: true,
  template: `
    <div class="not-authorized">
      <h1>Not Authorized</h1>
      <p>You do not have permission to access this page.</p>
      <a routerLink="/home">Go to Home</a>
    </div>
  `,
  styles: [`
    .not-authorized {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4rem 1rem;
    }
  `],
  imports: [RouterLink]
})
export class NotAuthorizedComponent {}
