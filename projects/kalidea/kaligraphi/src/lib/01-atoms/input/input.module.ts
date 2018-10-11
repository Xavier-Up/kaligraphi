import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { KgInputComponent } from './input.component';

const exports = [KgInputComponent];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: exports,
  declarations: exports
})
export class InputModule { }
