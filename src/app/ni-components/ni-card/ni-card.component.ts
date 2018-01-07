import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'ni-card',
  templateUrl: './ni-card.component.html',
  styleUrls: ['./ni-card.component.scss'],
  host: {
    '[class.ni-card]': 'true'
  }
})
export class NiCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() bgColor: string = '';
  @Input() customBgColor: string = '';
  @Input() color: string = '';
  @Input() customColor: string = '';
  @Input() bgImage: string = '';
  @Input() outline: boolean = false;
  @Input() indents: any = '';
  @Input() align: string = 'left';
  @Input() info: string = '';
  @Input() refreshIndex: number = 0;
  @Input() showRefresh: boolean = false;
  @Output() refresh = new EventEmitter();

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  doRefresh(index) {
    this.refresh.emit(index);
  }
}
