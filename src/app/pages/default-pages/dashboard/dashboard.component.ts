import { Component, OnInit, OnChanges } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { ApiService } from '../../../services/api.service';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'page-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class PageDashboardComponent {
  pageTitle: string = 'dashboard';
  requests: any = [];
  userRequests: any = [];
  userRequestHeader: any = [];
  nextPayment: any = [];
  nextPaymentHeader: any = [];
  timelineData: any[] = [];
  breadcrumb = [{title: 'dashboard'}];
  subscribeList: any = [];

  maxRequest = 5;
  maxPayment = 5;
  pageRequest = 1;
  pagePayment = 1;
  totalRequest = 0;
  totalPayment = 0;

  constructor( private _sharedService: SharedService, private apiService: ApiService, private dialog: MdDialog ) {
    this._sharedService.emitChange(this.pageTitle);

    this.getRequests(this.maxRequest, this.pageRequest);
    this.getNextPayments(this.maxPayment, this.pagePayment);
    this.getTimeLineData();
  }

  ngOnDestroy() {
    this.subscribeList.map(d => {
      d.unsubscribe();
    });
  }

  getDuration(seconds) {
    let d = this.format(((seconds / 3600) / 24).toFixed());
    let h = this.format(((seconds / 3600) % 24).toFixed());
    let m = this.format(((seconds % 3600) / 60).toFixed());
    let s = this.format((((seconds % 3600) % 60)).toFixed());
    let day = '';
    if (d == 1) {
      day = 1 + ' day ';
    } else if (d > 1) {
      day = d + ' days ';
    }
    return day + h + ' hours ' + m + ' min ' + s + ' sec ago';
  }

  format(d) {
    return d.toString();
  }

  showDialog(res) {
    let dialogRef = this.dialog.open(DialogAcceptAndRejectComponent);
    let user: any = {};
    this.requests.map(d => {
      if (res === d.id) {
        user = d;
      }
    });
    dialogRef.componentInstance.request = user;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
      } else {
      }
    });
  }

  getRequests(max, page) {
    this.userRequests = [];
    this.userRequestHeader = ['Type', 'From', 'Group', {type: 'Action'}];
    this.apiService.getUserRequest(max, page, 'PENDING').then((data: any) => {
      this.userRequests = [];
      this.requests = [];
      this.totalRequest = data.count;
      data.data.map(d => {
        this.requests = data.data;
        this.userRequests.push([d.request_type_text, d.sender, d.group, {type: ['Open'], id: d.id}]);
      });
    });
  }

  getNextPayments(max, page) {
    this.nextPayment = [];
    this.nextPaymentHeader = ['Type', 'Amount', 'To', 'Date', {type: 'Action'}];
    this.apiService.getNextPayment(max, page, 'PENDING').then((data: any) => {
      this.nextPayment = [];
      this.totalPayment = data.count;
      data.data.map(d => {
        this.nextPayment.push([d.p_type_text, d.projected_amount_due, d.to, d.projected_payment_due_date, {type: ['paynow'], id: d.id}]);
      });
    });
  }

  getTimeLineData() {
    this.timelineData = [{
      label: '2017',
      timeline: []
    }];
    this.apiService.getTimelineData().then((data: any) => {
      data.data.map(d => {
        this.timelineData[0].timeline.push({date: this.getDuration(d.duration_seconds), content: d.event_type === 'GROUP_CREATED' ? 'A new group has been created' : 'A new request to join group has been created', pointColor: '#FFC6F1'});
      });
    });
  }

  doRefresh(event) {
    if (event === 1) {
      this.getRequests(this.maxRequest, this.pageRequest);
    } else if (event === 2) {
      this.getNextPayments(this.maxPayment, this.pagePayment);
    } else if (event === 3) {
      this.getTimeLineData();
    }
  }

  changeRequestPage(res) {
    this.maxRequest = res[0];
    this.pageRequest = res[1];
    this.getRequests(res[0], res[1]);
  }

  changePaymentPage(res) {
    this.maxPayment = res[0];
    this.pagePayment = res[1];
    this.getNextPayments(res[0], res[1]);
  }
}

@Component({
  selector: 'accept-reject-modal',
  templateUrl: 'accept-reject-modal.html',
})
export class DialogAcceptAndRejectComponent {
  id = '';
  request: any;
  groupId = '';
  positions = [];
  comment = '';
  groupRotationType = '';
  requestType = '';
  constructor(public dialogRef: MdDialogRef<DialogAcceptAndRejectComponent>, private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getGroupTakenPositions(this.request.group_id).then((res: any) => {
      this.positions = res.available_rotation_positions;
    });
  }

  answer(type) {
    this.apiService.answerRequest(this.id, type).then((res: any) => {
      if (res.status === 'ok') {
        this.dialogRef.close();
      }
    });
  }
}