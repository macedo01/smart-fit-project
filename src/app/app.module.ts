import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ReopenPageComponent } from './pages/reopen-page/reopen-page.component';
import { TimeFilterComponent } from './components/time-filter/time-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReopenPageComponent,
    TimeFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
