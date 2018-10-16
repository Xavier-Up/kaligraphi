import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KaligraphiModule } from '@kalidea/kaligraphi';

import { AppComponent } from 'src/app/app.component';
import { InputComponent } from 'src/app/atoms/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    KaligraphiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
