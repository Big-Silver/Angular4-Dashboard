import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'page-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class PageGroupsComponent implements OnInit {
  pageTitle: string = 'groups';
  breadcrumb: any = [{title: 'groups'}];
  groups = [];
  groupHeaders = [];
  groupList = [];

  members = [];
  memberHeaders = [];
  obligations = [];
  obligationHeaders = [];
  requests = [];
  requestHeaders = [];
  events = [];
  eventHeaders = [];
  groupInfo: any;
  showGroupList = true;
  timelineData: any[] = [];
  showGroupAlert = false;

  isClickedDetails = false;

  subscribeList: any = [];

  maxGroup = 5;
  maxMember = 5;
  maxObligation = 5;
  maxRequest = 5;
  maxEvent = 5;
  pageGroup = 1;
  pageMember = 1;
  pageObligation = 1;
  pageRequest = 1;
  pageEvent = 1;
  totalGroup = 0;
  totalMember = 0;
  totalObligation = 0;
  totalRequest = 0;
  totalEvent = 0;
  
  constructor( private _sharedService: SharedService, private dialog: MdDialog, private apiService: ApiService, private auth: AuthService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.showGroupList = true;
    this.groupList = this.apiService.groupList;
    this.apiService.showSpinner.next(true);
    this.subscribeList[2] = this.apiService.isClickedDetails.subscribe(data => {
      if (data === true) {
        this.isClickedDetails = true;
      } else if (!this.apiService.isMenuClicked && data === false) {
        this.isClickedDetails = false;
        this.breadcrumb = [{title: 'groups'}];
      }
    });

    this.subscribeList[3] = this.apiService.groupCreated.subscribe(res => {
      if (res) {
        this.showGroupAlert = true;
        setTimeout(data => {
          this.showGroupAlert = false;
          this.apiService.groupCreated.next(false);
        }, 5000);
      }
    });

    this.subscribeList[1] = this.apiService.groupCounts.subscribe(res => {
      this.showGroupList = true;
      this.getGroups(this.maxGroup, this.pageGroup);
    });

    this.auth.langCode.subscribe(res => {
      // this.getGroups();
      // this.getGroupEvents();
      // this.getGroupInfo();
      // this.getGroupMembers();
      // this.getGroupObligations();
      // this.getGroupRequests();
      // this.getTimeLineData();
    });

    this.subscribeList[0] = this.apiService.groupId.subscribe(data => {
      if (!this.isClickedDetails) {
        this.breadcrumb = [{title: 'groups'}];
        this.apiService.showSpinner.next(false);
      } else {
        this.groupList.map(d => {
          console.log(d.id, data, this.isClickedDetails);
          if (d.id === data && this.isClickedDetails) {
            this.breadcrumb = [];
            this.breadcrumb.push({title: this.pageTitle, link: '/default-layout/groups/'});
            this.breadcrumb.push({title: d.name});
          }
        });
        this.getGroupEvents(this.maxEvent, this.pageEvent);
        this.getGroupInfo();
        this.getTimeLineData();
        this.getGroupMembers(this.maxMember, this.pageMember);
        this.getGroupObligations(this.maxObligation, this.pageObligation);
        this.getGroupRequests(this.maxRequest, this.pageRequest);
      }
    });
  }

  ngOnDestroy() {
    this.subscribeList.map(d => {
      d.unsubscribe();
    });
  }

  getGroups(max, page) {
    console.log("group");
    this.groups = [];
    this.groupHeaders = ['Group name', 'Creator', 'number of member', 'Amount', 'Currency', 'Creation Date', 'Description', 'Frequency Every x month(s)', 'Type', 'Rate', {type: 'Action'}];
    this.apiService.getGroups(max, page).then((res: any) => {
      this.groups = [];
      this.groupList = [];
      this.totalGroup = res.count;
      res.data.map(d => {
        this.groupList.push(d);
        this.groups.push([d.name, d.creator, d.actual_nb_members, d.amount, d.currency, d.date_creation, d.description, d.frequency, d.g_type_text, d.rate, {type: ['details'], id: d.id}]);
      });
      this.apiService.groupList = this.groupList;
    });
  }

  getGroupMembers(max, page) {
    this.members = [];
    this.memberHeaders = ['Name', 'Email', 'Type', 'Picture', 'Position', 'Date', {type: 'Action'}];
    this.apiService.getGroupMembers(max, page).then((res: any) => {
      this.members = [];
      this.totalMember = res.count;
      res.data.map(d => {
        this.members.push([d.first_name, d.email, d.member_type_text, d.photo_path, d.position, d.user_position_date, {type: ['remove'], id: d.id}]);
      });
    });
  }

  getGroupObligations(max, page) {
    this.obligations = [];
    this.obligationHeaders = ['From', 'To', 'Group', 'Currency', 'Amount', 'Date', 'Status', 'Position selection', {type: 'Action'}];
    this.apiService.getGroupObligations(max, page).then((res: any) => {
      this.obligations = [];
      this.totalObligation = res.count;
      res.data.map(d => {
        this.obligations.push([d.from, d.to, d.group, d.currency, d.projected_amount_due, d.projected_payment_due_date, d.status_text, d.p_type_text, {type: ['paynow'], id: d.id}]);
      });
    });
  }

  getGroupRequests(max, page) {
    this.requests = [];
    this.requestHeaders = ['Sender', 'Receiver', 'Group', 'Type', 'Status', 'Date', {type: 'Action'}];
    this.apiService.getGroupRequests(max, page).then((res: any) => {
      this.requests = [];
      this.totalRequest = res.count;
      res.data.map(d => {
        this.requests.push([d.sender, d.receiver, d.group, d.request_type_text, d.request_status_text, d.date_creation, {type: ['Accept', 'Reject'], id: d.id, rotationType: d.group_rotation_type, requestType: d.request_type}]);
      });
    });
  }

  getGroupEvents(max, page) {
    this.events = [];
    this.eventHeaders = ['Type', 'Initiator', 'Group', 'Date'];
    this.apiService.getGroupEvents(max, page).then((res: any) => {
      this.events = [];
      this.totalEvent = res.count;
      res.data.map(d => {
        this.events.push([d.event_type_text, d.initiator, d.group, d.date_event]);
      });
    });
  }

  getTimeLineData() {
    this.timelineData = [{
      label: '2017',
      timeline: []
    }];
    this.apiService.getTimelineData().then((res: any) => {
      res.data.map(d => {
        this.timelineData[0].timeline.push({date: this.getDuration(d.duration_seconds), content: d.event_type === 'GROUP_CREATED' ? 'A new group has been created' : 'A new request to join group has been created', pointColor: '#FFC6F1'});
      });
    });
  }

  getGroupInfo() {
    this.apiService.getGroupInfo().then((res: any) => {
      this.groupInfo = res.data[0];
      if (this.isClickedDetails) {
        this.showGroupList = false;
        this.apiService.showSpinner.next(false);          
      } else {
        this.showGroupList = true;
      }
    });
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogAddMemberComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
      } else {
      }
    });
  }

  openStartDialog() {
    let dialogRef = this.dialog.open(DialogStartComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
      } else {
      }
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

  removeAll() {
    this.apiService.removeAll().then(res => {
      console.log(res);
    });
  }

  cancelAll() {
    this.apiService.cancelAll().then(res => {
      console.log(res);
    });
  }

  doRefresh(res) {
    if (res === 1) {
      this.getGroups(this.maxGroup, this.pageGroup);
    } else if (res === 2) {
      this.getGroupMembers(this.maxMember, this.pageMember);
    } else if (res === 3) {
      this.getGroupObligations(this.maxObligation, this.pageObligation);
    } else if (res === 4) {
      this.getGroupRequests(this.maxRequest, this.pageRequest);
    } else if (res === 5) {
      this.getGroupEvents(this.maxEvent, this.pageEvent);
    } else if (res === 6) {
    }
  }

  changeGroupPage(res) {
    this.maxGroup = res[0];
    this.pageGroup = res[1];
    this.getGroups(this.maxGroup, this.pageGroup);
  }

  changeMemberPage(res) {
    this.maxMember = res[0];
    this.pageMember = res[1];
    this.getGroupMembers(this.maxMember, this.pageMember);
  }

  changeRequestPage(res) {
    this.maxRequest = res[0];
    this.pageRequest = res[1];
    this.getGroupRequests(this.maxRequest, this.pageRequest);
  }

  changeEventPage(res) {
    this.maxEvent = res[0];
    this.pageEvent = res[1];
    this.getGroupEvents(this.maxEvent, this.pageEvent);
  }

  changeObligationPage(res) {
    this.maxObligation = res[0];
    this.pageObligation = res[1];
    this.getGroupObligations(this.maxObligation, this.pageObligation);
  }

  changeTransactionPage(res) {
    
  }
}



@Component({
  selector: 'dialog-add-member',
  templateUrl: 'dialog-add-member.html',
})
export class DialogAddMemberComponent {
  member = '';
  constructor(public dialogRef: MdDialogRef<DialogAddMemberComponent>, private apiService: ApiService) {

  }
  addMember() {
    this.dialogRef.close();
    this.apiService.addMember(this.member).then(res => {
    });
  }
}

@Component({
  selector: 'dialog-start',
  templateUrl: 'dialog-start.html',
})
export class DialogStartComponent {
  date = '';
  pendingRequest = '';
  isPendingRequest = false;
  constructor(public dialogRef: MdDialogRef<DialogStartComponent>, private apiService: ApiService) {

  }
  start() {
    this.apiService.startGroup(this.date).then((res: any) => {
      if (typeof res.nb_pending_request !== 'undefined') {
        this.isPendingRequest = true;
        this.pendingRequest = res.nb_pending_request;
      } else {
        this.dialogRef.close();
      }
    });
  }

  forceStart() {
    this.dialogRef.close();
    this.apiService.forceStartGroup(this.date).then((res: any) => {
      console.log(res);
    });
  }
}