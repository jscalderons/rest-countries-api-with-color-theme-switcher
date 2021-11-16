import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'countries of world';

  constructor(
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeService.initTheme();
  }
}
