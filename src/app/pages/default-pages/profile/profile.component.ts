import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'page-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class PageProfileComponent implements OnInit {
  pageTitle: string = 'profile';
  breadcrumb = [{title: 'profile'}];
  gender = '';

  constructor( private _sharedService: SharedService, private api: ApiService ) {
    this._sharedService.emitChange(this.pageTitle);
    api.getUserInfo().then((res: any) => {
      console.log(res);
    });
    this.api.initHeaderGroup.next('');
  }

  ngOnInit() {}
}
