import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ws-ng-ui-worldskills-ng-ui',
  imports: [ButtonModule, InputTextModule, ToggleButtonModule, FormsModule],
  templateUrl: './worldskills-ng-ui.html',
  styles: ``,
})
export class WorldskillsNgUi {
 darkMode = true;

  constructor() {
  // Optional: sync with system preference on load (if you want hybrid behavior)
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    this.darkMode = true;
    document.documentElement.classList.add('dark');
  }
}

  toggleDarkMode() {
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    console.log('Dark mode is now', this.darkMode ? 'ON' : 'OFF');
  }

  isDarkMode(): boolean {
    return document.documentElement.classList.contains('dark');
  }
}
