import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { ButtonComponent } from './components/button/button.component';
import { SearchComponent } from './components/search/search.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ToolbarComponent } from './layouts/toolbar/toolbar.component';
import { ContentComponent } from './layouts/content/content.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { DetailComponent } from './views/detail/detail.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent,
    DropdownComponent,
    SearchComponent,
    
    HeaderComponent,
    ToolbarComponent,
    ContentComponent,

    AppComponent,
    HomeComponent,
    DetailComponent,
    NotFoundComponent,

    FilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
