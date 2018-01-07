import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class UserAccessGuardService implements CanActivate {

  constructor(private authService: AuthService) {
  }

  canActivate(snapshot: ActivatedRouteSnapshot) {
    let redirectData = snapshot.data['authGuardRedirect'];
    if (typeof redirectData !== 'undefined' && this.authService.redirectPage !== '') {
      if (redirectData === 'signup') {
        return this.authService.redirectPage === 'signup' ? true : false;
      } else if (redirectData === 'confirm') {
        return this.authService.redirectPage === 'confirm' && this.authService.isConfirmRequired() === true ? true : false;
      } else if (redirectData === 'forgot') {
        return this.authService.redirectPage === 'forgot' ? true : false;
      } else if (redirectData === 'page404') {
        return this.authService.redirectPage === 'page404' ? true : false;
      } else if (redirectData === 'page500') {
        return this.authService.redirectPage === 'page500' ? true : false;
      } else {
        return false;
      }
    } else {
      if (this.authService.isConfirmRequired() && redirectData === 'confirm') {
        return true;
      } else {
        return this.authService.isLoggedIn();
      }
    }
  }

}
