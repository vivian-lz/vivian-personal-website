import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutMeComponent } from 'src/features/aboutMe/aboutMe';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
