import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'ni-breadcrumb',
  templateUrl: './ni-breadcrumb.component.html',
  styleUrls: ['./ni-breadcrumb.component.scss']
})
export class NiBreadcrumbComponent implements OnInit {
  @Input() menu: Item[] = [];
  @Input() separator: string = '/';
  @Input() style: string = 'default';//custom1 | custom2
  groupCounts = 0;

  constructor(private apiService: ApiService) {
    this.apiService.groupCounts.subscribe(res => {
      this.groupCounts = res;
    });
  }

  ngOnInit() {}

  getClasses() {
    return {
      'custom-1': this.style === 'custom1',
      'custom-2': this.style === 'custom2'
    };
  }

  goRoute(item) {
    if (item.title === 'groups') {
      this.apiService.isMenuClicked = false;
      this.apiService.isClickedDetails.next(false);
      this.apiService.groupCounts.next(this.groupCounts);
      this.apiService.initHeaderGroup.next('');
    }
  }
}