import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { TranslateService } from 'ng2-translate';

import { AuthService } from '../../../services/auth.service';

const password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]));
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'page-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class PageSignupComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private dialog: MdDialog, private translate: TranslateService) {
    this.auth.langCode.subscribe(code => {
      translate.use(code);
    });
  }

  ngOnInit() {
    this.auth.isConfirm = false;
    this.auth.isLogged = false;
    this.form = this.fb.group({
      fname: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      gender: [null, Validators.required],
      agree: [null, Validators.requiredTrue],
      password: password,
      confirmPassword: confirmPassword,
      langCode: ['en']
    });
  }

  onSubmit() {
    this.auth.signup(this.form.value).then(data => {
      this.auth.redirectPage = 'confirm';
      this.router.navigate(['/extra-layout/confirm']);
    });
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogResultComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result === 'yes') {
        this.form.patchValue({agree: true});
      } else {
        this.form.patchValue({agree: false});
      }
    });
  }
}

@Component({
  selector: 'dialog-result',
  templateUrl: 'dialog-result.html',
})
export class DialogResultComponent {
  constructor(public dialogRef: MdDialogRef<DialogResultComponent>) {}
}