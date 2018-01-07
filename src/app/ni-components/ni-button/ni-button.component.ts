import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[ni-button]',
  templateUrl: './ni-button.component.html',
  styleUrls: ['./ni-button.component.scss'],
  host: {
    '[class.ni-btn]': 'true',
    '[class.ni-btn-block]': 'block',
    '[class.ni-btn-left]': 'align === "left"',
    '[class.ni-btn-right]': 'align === "right"',
    '[class.ni-btn-large]': 'size === "large"',
    '[class.ni-btn-small]': 'size === "small"',
    '[class.ni-btn-default]': 'type === "default"',
    '[class.ni-btn-accent]': 'type === "accent"',
    '[class.ni-btn-info]': 'type === "info"',
    '[class.ni-btn-success]': 'type === "success"',
    '[class.ni-btn-warning]': 'type === "warning"',
    '[class.ni-btn-error]': 'type === "error"',
    '[class.ni-btn-outline]': 'outline',
    '[class.ni-btn-gradient]': 'gradient',
    '[class.ni-btn-disabled]': 'disabled',
    '[class.ni-btn-icon-animation]': 'iconAnimation',
    '[style.border-radius]': 'shape'
  }
})
export class NiButtonComponent implements OnInit {
  @Input() block: boolean = false;
  @Input() gradient: boolean = false;
  @Input() disabled: boolean = false;
  @Input() outline: boolean = false;
  @Input() lineStyle: string;
  @Input() align: string = 'center';
  @Input() size: string = 'default';
  @Input() type: string = 'default';
  @Input() shape: number | string;
  @Input() beforeIcon: string;
  @Input() afterIcon: string;
  @Input() iconAnimation: boolean = false;

  constructor() {}

  ngOnInit() {
    //console.log(this.disabled);
  }
}
