import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './01-atoms/input/input.module';

const exports = [
  InputModule
];

@NgModule({
  imports: [
    CommonModule,
    ...exports
  ],
  exports: exports
})
export class KaligraphiModule { }
