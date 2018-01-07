import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'extra-layout',
  templateUrl: 'extra.component.html',
  styleUrls: ['extra.component.scss']
})
export class ExtraLayoutComponent {
  rtl: boolean;

  constructor( ) {
    this.rtl = false;
  }
}