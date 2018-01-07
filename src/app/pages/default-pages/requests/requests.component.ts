import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { ApiService } from '../../../services/api.service';

@Component({
  moduleId: module.id,
  selector: 'page-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class PageRequestsComponent {
  pageTitle: string = 'requests';
  requests = [];
  requestHeaders = [];
  breadcrumb = [{title: 'requests'}];
  subscribeList: any = [];

  max = 5;
  page = 1;
  total = 0;

  constructor( private _sharedService: SharedService, private apiService: ApiService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.apiService.showSpinner.next(true);
    this.getUserRequests(this.max, this.page);
  }

  ngOnDestroy() {
    this.subscribeList.map(d => {
      d.unsubscribe();
    });
  }

  getUserRequests(max, page) {
    this.requests = [];
    this.requestHeaders = ['Sender', 'Receiver', 'Group', 'Type', 'Status', 'Date'];
    this.apiService.getUserRequest(max, page).then((data: any) => {
      this.requests = [];
      this.total = data.count;
      this.apiService.showSpinner.next(false);
      data.data.map(d => {
        this.requests.push([d.sender, d.receiver, d.group, d.request_type_text, d.request_status_text, d.date_creation]);
      });
    });
  }

  doRefresh(res) {
    this.getUserRequests(this.max, this.page);
  }

  changePage(res) {
    this.max = res[0];
    this.page = res[1];
    this.getUserRequests(this.max, this.page);
  }
}