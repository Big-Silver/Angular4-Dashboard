import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'ni-loading',
  templateUrl: './ni-loading.component.html',
  styleUrls: ['./ni-loading.component.scss']
})
export class NiLoadingComponent implements OnInit {
  showSpinner = false;

  constructor(private apiService: ApiService) {
    this.apiService.showSpinner.subscribe(res => {
      this.showSpinner = res;
    });
  }

  ngOnInit() {
  }

}
