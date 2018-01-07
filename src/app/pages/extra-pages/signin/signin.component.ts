import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TranslateService } from 'ng2-translate';
import { CustomValidators } from 'ng2-validation';

import { AuthService } from '../../../services/auth.service';
import { LANGUAGES } from '../../../../settings/menu';

@Component({
  selector: 'page-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class PageSigninComponent implements OnInit {
  public form: FormGroup;
  languages = LANGUAGES;
  isEmailCorrect = true;

  constructor(private router: Router, private auth: AuthService, private fb: FormBuilder, private translate: TranslateService) {
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required, , CustomValidators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      langCode: ['en']
    });

    this.auth.langCode.subscribe(code => {
      translate.use(code);
    });
  }

  ngOnInit() {
    this.auth.isConfirm = false;
    this.auth.isLogged = false;
  }

  onSubmit() {
    this.auth.login(this.form.value).then((res: any) => {
      if (res.email_validated === 'yes') {
        console.log(res);
        this.isEmailCorrect = true;
        localStorage.setItem('login', 'true');
        localStorage.setItem('username', res.data[0].first_name + ' ' + res.data[0].middle_name + ' ' + res.data[0].sur_name);
        localStorage.setItem('userphoto', res.data[0].picture);
        this.router.navigate(['/default-layout/dashboard']);
      } else {
        this.isEmailCorrect = false;
      }
    });
  }

  changeLanguage() {
    this.form.controls.langCode.valueChanges.subscribe(d => {
      this.translate.use(d);
      this.auth.changeLanguage(d);
    });
  }

  goSignupPage() {
    this.auth.redirectPage = 'signup';
    this.router.navigate(['/extra-layout/sign-up']);
  }

  goForgotPage() {
    this.auth.redirectPage = 'forgot';
    this.router.navigate(['/extra-layout/forgot']);
  }
}
