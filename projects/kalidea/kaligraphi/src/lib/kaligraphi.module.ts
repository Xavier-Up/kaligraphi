import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KalInputModule } from './atoms/index';
import { KalCheckboxComponent } from './atoms/kal-checkbox/kal-checkbox.component';

const exports = [
  KalInputModule
];

@NgModule({
  imports: [
    CommonModule,
    ...exports
  ],
  exports: exports,
  declarations: [KalCheckboxComponent]
})
export class KaligraphiModule { }
