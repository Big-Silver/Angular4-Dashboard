import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAccessGuardService } from './services/user-access-guard.service';

import { DefaultLayoutComponent } from './layouts/default/default.component';
import { ExtraLayoutComponent } from './layouts/extra/extra.component';

import { PageDashboardComponent } from './pages/default-pages/dashboard/dashboard.component';
import { PageGroupsComponent } from './pages/default-pages/groups/groups.component';
import { PageTransactionsComponent } from './pages/default-pages/transactions/transactions.component';
import { PageRequestsComponent } from './pages/default-pages/requests/requests.component';
import { PageNotFoundComponent } from './pages/default-pages/not-found/not-found.component';
import { PageAboutusComponent } from './pages/default-pages/aboutus/aboutus.component';
import { PageProfileComponent } from './pages/default-pages/profile/profile.component';
import { PageSimulationComponent } from './pages/default-pages/simulation/simulation.component';
import { ChatroomComponent } from './pages/default-pages/chatroom/chatroom.component';
import { PageObligationComponent } from './pages/default-pages/obligation/obligation.component';

import { PageSigninComponent } from './pages/extra-pages/signin/signin.component';
import { PageSignupComponent } from './pages/extra-pages/signup/signup.component';
import { PageForgotComponent } from './pages/extra-pages/forgot/forgot.component';
import { PageConfirmComponent } from './pages/extra-pages/confirm/confirm.component';
import { Page404Component } from './pages/extra-pages/page-404/page-404.component';
import { Page500Component } from './pages/extra-pages/page-500/page-500.component';

const groupsRoutes: Routes = [
  { path: '**', component: PageGroupsComponent },
];

const defaultRoutes: Routes = [
  { path: 'dashboard', component: PageDashboardComponent },
  { path: 'groups', component: PageGroupsComponent },
  { path: 'transactions', component: PageTransactionsComponent },
  { path: 'requests', component: PageRequestsComponent },
  { path: 'profile', component: PageProfileComponent },
  { path: 'simulation', component: PageSimulationComponent },
  { path: 'aboutus', component: PageAboutusComponent },
  { path: 'chatroom', component: ChatroomComponent },
  { path: 'obligation', component: PageObligationComponent },
  { path: '**', component: PageNotFoundComponent },
];

const extraRoutes: Routes = [
  { path: 'sign-in', component: PageSigninComponent },
  {
    path: 'sign-up',
    component: PageSignupComponent,
    canActivate: [ UserAccessGuardService ],
    data: {
      authGuardRedirect: 'signup'
    }
  },
  {
    path: 'forgot',
    component: PageForgotComponent,
    canActivate: [ UserAccessGuardService ],
    data: {
      authGuardRedirect: 'forgot'
    }
  },
  {
    path: 'confirm',
    component: PageConfirmComponent,
    canActivate: [ UserAccessGuardService ],
    data: {
      authGuardRedirect: 'confirm'
    }
  },
  {
    path: 'page-404',
    component: Page404Component,
    canActivate: [ UserAccessGuardService ],
    data: {
      authGuardRedirect: 'page404'
    }
  },
  {
    path: 'page-500',
    component: Page500Component,
    canActivate: [ UserAccessGuardService ],
    data: {
      authGuardRedirect: 'page500'
    }
  },
];

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/extra-layout/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'default-layout',
    component: DefaultLayoutComponent,
    children: defaultRoutes,
    canActivate: [ UserAccessGuardService ]
  },
  {
    path: 'extra-layout',
    component: ExtraLayoutComponent,
    children: extraRoutes
  },
  {
    path: '**',
    component: DefaultLayoutComponent,
    children: defaultRoutes,
    canActivate: [ UserAccessGuardService ]
  }
];

@NgModule({
  imports: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}