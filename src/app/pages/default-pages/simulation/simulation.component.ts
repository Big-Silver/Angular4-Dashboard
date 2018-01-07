import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../../../layouts/shared-service';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'page-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class PageSimulationComponent implements OnInit {
  pageTitle: string = 'simulation';
  breadcrumb = [{title: 'simulation'}];
  currencySigns = {USD: '$', GBP: '£', EUR: '€', ZEC: 'Z'};
  groupTypes = [];
  currencies = [];
  psTypes = [];
  public form: FormGroup;

  constructor( private _sharedService: SharedService, private fb: FormBuilder, private apiService: ApiService, private auth: AuthService ) {
    this._sharedService.emitChange(this.pageTitle);

    this.form = fb.group({
      amount: [null, Validators.required],
      frequency: [null, Validators.required],
      currency: [null, Validators.required],
      grouptype: [null, Validators.required],
      rate: [null, Validators.required],
      duedate: [null, Validators.required],
      totalnum: [null, Validators.required],
      position: [null]
    });
  }

  ngOnInit() {
    this.auth.langCode.subscribe(code => {
      this.getData();
    });
  }

  getData() {
    this.apiService.getListData('Currency').then((res: any) => {
      this.currencies = res.data;
    });

    this.apiService.getListData('GroupType').then((res: any) => {
      this.groupTypes = res.data;
    });
  }

  simulate() {
    this.apiService.simulate(this.form.value).then(res => {
      console.log(res);
    });
  }
}
