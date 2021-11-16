import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public darkModeActive = false;

  constructor() { }

  initTheme() {
    const theme = localStorage.getItem('theme');

    if (theme) {
      this.darkModeActive = true;
      document.body.classList.toggle('dark-theme');
    }
  }

  toggleTheme() {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
      this.darkModeActive = true;
      localStorage.setItem('theme', 'dark');
    } else {
      this.darkModeActive = false;
      localStorage.removeItem('theme');
    }
  }
}
