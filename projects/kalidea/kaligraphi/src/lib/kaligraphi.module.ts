import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KalInputModule } from './atoms/index';

const exports = [
  KalInputModule
];

@NgModule({
  imports: [
    CommonModule,
    ...exports
  ],
  exports: exports,
  declarations: []
})
export class KaligraphiModule { }
