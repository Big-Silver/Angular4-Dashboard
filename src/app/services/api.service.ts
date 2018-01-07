import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/Rx';
import { AuthService } from './auth.service';

@Injectable()
export class ApiService {
  groupId = new BehaviorSubject('');
  groupCounts = new BehaviorSubject(0);
  isClickedDetails = new BehaviorSubject(false);
  showSpinner = new BehaviorSubject(false);
  groupCreated = new BehaviorSubject(false);
  initHeaderGroup = new BehaviorSubject('');

  langCode = "ENG";
  isMenuClicked = false;
  groupList: any = [];

  constructor(private http: Http, private auth: AuthService) {
    this.auth.langCode.subscribe(res => {
      switch (res) {
        case 'en':
          this.langCode = 'ENG';
          break;
        case 'fr':
          this.langCode = 'FRE';
          break;
        case 'pt':
          this.langCode = 'POR';
          break;
        case 'es':
          this.langCode = 'SPA';
          break;
      }
    });
  }

  getUserInfo() {
    const url = environment.serverUrl + 'user';
    let params: URLSearchParams = new URLSearchParams();
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  getUserRequest(max, page, status?) {
    const url = environment.serverUrl + 'user/requests';
    let params: URLSearchParams = new URLSearchParams();
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    params.set('max', max);
    params.set('page', page);
    if (status) {
      params.set('status_code', status);
    }
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  getNextPayment(max, page, status?) {
    const url = environment.serverUrl + 'user/obligations';
    let params: URLSearchParams = new URLSearchParams();
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    params.set('max', max);
    params.set('page', page);
    if (status) {
      params.set('status_code', status);
    }
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  getTimelineData() {
    const url = environment.serverUrl + 'group/events';
    let params: URLSearchParams = new URLSearchParams();
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    params.set('max', '5');
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  getGroups(max, page) {
    const url = environment.serverUrl + 'groups';
    let params: URLSearchParams = new URLSearchParams();
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    params.set('max', max);
    params.set('page', page);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  getGroupInfo() {
    const url = environment.serverUrl + 'group';
    let params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('token', localStorage.getItem('token'));
      params.set('lang', this.langCode);
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  addGroup(group) {
    const url = environment.serverUrl + 'groups/add';
    let params: URLSearchParams = new URLSearchParams();
    if (group.grouptype == 'PRIVATE') {
      params.set('type_code', 'PRIVATE');
    } else if (group.grouptype == 'PUBLIC') {
      params.set('type_code', 'PUBLIC');
      params.set('min_index', group.minIndex);
      params.set('max_index', group.maxIndex);
    }

    if (group.rate > 0) {
      params.set('smooth_payment', group.smoothpayment);
    }

    params.set('name', group.name);
    params.set('rate', group.rate);
    params.set('description', group.description);
    params.set('amount', group.amount);
    params.set('due_day', group.duedate);
    params.set('currency_code', group.currency);
    params.set('number_of_days_before_penalty', group.nbdpenal);
    params.set('delay_payment_penalty', group.penalty);
    params.set('frequency', group.frequency);
    params.set('position_selection_type_code', group.pstype);
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        console.log(res);
        resolve(res.json());
      });
    });
  }

  getListData(type) {
    const url = environment.serverUrl + 'lists';
    let params: URLSearchParams = new URLSearchParams();
    params.set('data', type);
    params.set('lang', this.langCode);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  addMember(member) {
    const url = environment.serverUrl + 'group/users/add';
    let params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('email_list', member);
      params.set('lang', this.langCode);
      params.set('token', localStorage.getItem('token'));
      this.http.get(url, {search: params}).subscribe(res => {
        console.log(res);
        // resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  getGroupMembers(max, page) {
    const url = environment.serverUrl + 'group/members';
    let params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    params.set('max', max);
    params.set('page', page);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  getGroupObligations(max, page) {
    const url = environment.serverUrl + 'group/obligations';
    let params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    params.set('max', max);
    params.set('page', page);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  getGroupRequests(max, page) {
    const url = environment.serverUrl + 'group/requests';
    let params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    params.set('max', max);
    params.set('page', page);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  getGroupEvents(max, page) {
    const url = environment.serverUrl + 'group/events';
    let params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    params.set('max', max);
    params.set('page', page);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  getGroupTakenPositions(groupId) {
    const url = environment.serverUrl + 'group/positions/available';
    let params: URLSearchParams = new URLSearchParams();
    return new Promise((resolve, reject) => {
      params.set('group_id', groupId);
      params.set('lang', this.langCode);
      params.set('token', localStorage.getItem('token'));
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  answerRequest(id, type) {
    const url = environment.serverUrl + 'group/requests/answer';
    let params: URLSearchParams = new URLSearchParams();
    return new Promise((resolve, reject) => {
      params.set('code', type);
      params.set('request_id', id);
      params.set('lang', this.langCode);
      params.set('token', localStorage.getItem('token'));
      this.http.get(url, {search: params}).subscribe((res: any) => {
        console.log(res._body);
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  startGroup(date) {
    const url = environment.serverUrl + 'group/start';
    let params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('token', localStorage.getItem('token'));
      params.set('first_payment_date', date);
      params.set('lang', this.langCode);
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  forceStartGroup(date) {
    const url = environment.serverUrl + 'force_start_group';
    let params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('token', localStorage.getItem('token'));
      params.set('first_payment_date', date);
      params.set('lang', this.langCode);
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  removeUser(groupId, memberId) {
    const url = environment.serverUrl + 'group/users/remove';
    let params: URLSearchParams = new URLSearchParams();
    params.set('group_id', groupId);
    params.set('member_id', memberId);
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  removeAll() {
    const url = environment.serverUrl + 'group/users/remove/all';
    let params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('token', localStorage.getItem('token'));
      params.set('lang', this.langCode);
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  cancelAll() {
    const url = environment.serverUrl + 'group/requests/cancel/all';
    let params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('token', localStorage.getItem('token'));
      params.set('lang', this.langCode);
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  simulate(group) {
    const url = environment.serverUrl + 'group/sumlilate';
    let params: URLSearchParams = new URLSearchParams();
    params.set('type_code', group.grouptype);
    params.set('rate', group.rate);
    params.set('amount', group.amount);
    params.set('due_day', group.duedate);
    params.set('currency_code', group.currency);
    params.set('number_of_members', group.totalnum);
    params.set('frequency', group.frequency);
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    if (group.position !== '') {
      params.set('position', group.position);
    }
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        console.log(res);
        resolve(res.json());
      });
    });
  }

}
