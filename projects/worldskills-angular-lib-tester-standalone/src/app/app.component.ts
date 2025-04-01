import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorldskillsAngularLibModule } from 'projects/worldskills-angular-lib/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'worldskills-angular-lib-tester-standalone';
}
