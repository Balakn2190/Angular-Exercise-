import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppComponent3 } from './app.comp2';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent3
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent3]
})
export class AppModule1 { }

