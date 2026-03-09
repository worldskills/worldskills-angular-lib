import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    // provideRouter(routeConfig) // This provides ActivatedRoute and other router services
  ]
})
export class AppComponent {
}
