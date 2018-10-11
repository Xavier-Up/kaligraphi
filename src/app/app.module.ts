import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KaligraphiModule } from '@kalidea/kaligraphi';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KaligraphiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
