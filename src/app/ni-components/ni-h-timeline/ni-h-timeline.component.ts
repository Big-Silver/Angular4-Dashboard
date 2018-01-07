import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'ni-h-timeline',
  templateUrl: './ni-h-timeline.component.html',
  styleUrls: ['./ni-h-timeline.component.scss'],
  host: {
    '[class.ni-h-timeline]': 'true',
    '[class.show-years]': 'showYears',
    '[class.show-date]': 'showDate'
  }
})
export class NiHTimelineComponent implements OnInit {
  @Input() showYears: boolean = false;
  @Input() showDate: boolean = true;
  @Input() align: string = 'left';
  @Input() style: any = '';
  @Input() data: any[] = [];

  @HostBinding('class.align-left') alignLeft: boolean = false;
  @HostBinding('class.align-center') alignCenter: boolean = false;
  @HostBinding('class.align-right') alignRight: boolean = false;
  @HostBinding('class.align-between') alignBetween: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.alignLeft = (this.align === 'left');
    this.alignCenter = (this.align === 'center');
    this.alignRight = (this.align === 'right');
    this.alignBetween = (this.align === 'between');
  }
}
