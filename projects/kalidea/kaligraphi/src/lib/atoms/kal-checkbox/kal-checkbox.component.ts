import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kal-checkbox',
  templateUrl: './kal-checkbox.component.html',
  styleUrls: ['./kal-checkbox.component.sass'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KalCheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
