import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private themeService: ThemeService
  ) { }

  toggleThemeMode() {
    this.themeService.toggleTheme();
  }

  get switcherLabel(): string {
    return this.themeService.darkModeActive ? 'Light Mode' : 'Dark Mode'
  }

  get switcherIcon(): string {
    return this.themeService.darkModeActive ? 'sun' : 'moon'
  }
}
