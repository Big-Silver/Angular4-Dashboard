import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NiComponentsModule } from '../ni-components/ni-components.module';
import { RouterModule } from '@angular/router';

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CalendarModule } from 'angular-calendar';
import { AgmCoreModule } from '@agm/core';
import { SqueezeBoxModule } from 'squeezebox';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { TranslateModule } from 'ng2-translate';

import { PageSigninComponent } from './extra-pages/signin/signin.component';
import { PageSignupComponent } from './extra-pages/signup/signup.component';
import { DialogResultComponent } from './extra-pages/signup/signup.component';
import { PageForgotComponent } from './extra-pages/forgot/forgot.component';
import { PageConfirmComponent } from './extra-pages/confirm/confirm.component';
import { Page404Component } from './extra-pages/page-404/page-404.component';
import { Page500Component } from './extra-pages/page-500/page-500.component';

import { PageDashboardComponent, DialogAcceptAndRejectComponent } from './default-pages/dashboard/dashboard.component';
import { PageGroupsComponent, DialogAddMemberComponent, DialogStartComponent } from './default-pages/groups/groups.component';
import { PageTransactionsComponent } from './default-pages/transactions/transactions.component';
import { PageRequestsComponent } from './default-pages/requests/requests.component';
import { PageNotFoundComponent } from './default-pages/not-found/not-found.component';
import { PageAboutusComponent } from './default-pages/aboutus/aboutus.component';
import { PageProfileComponent } from './default-pages/profile/profile.component';
import { PageSimulationComponent } from './default-pages/simulation/simulation.component';
import { ChatroomComponent } from './default-pages/chatroom/chatroom.component';
import { PageObligationComponent } from './default-pages/obligation/obligation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NiComponentsModule,
    TranslateModule,

    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    CdkTableModule,
    ChartsModule,
    NgxChartsModule,
    CalendarModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAU9f7luK3J31nurL-Io3taRKF7w9BItQE'
    }),
    SqueezeBoxModule,
    AmChartsModule,
    RouterModule
  ],
  declarations: [
    PageDashboardComponent,
    PageGroupsComponent,
    PageRequestsComponent,
    PageProfileComponent,
    PageAboutusComponent,
    PageSimulationComponent,
    PageNotFoundComponent,
    PageTransactionsComponent,
    DialogResultComponent,
    PageSigninComponent,
    PageSignupComponent,
    PageForgotComponent,
    PageConfirmComponent,
    Page404Component,
    Page500Component,
    PageNotFoundComponent,
    DialogAddMemberComponent,
    ChatroomComponent,
    PageObligationComponent,
    DialogAcceptAndRejectComponent,
    DialogStartComponent
  ],
  exports: [
    PageDashboardComponent,
    PageGroupsComponent,
    PageRequestsComponent,
    PageProfileComponent,
    PageAboutusComponent,
    PageSimulationComponent,
    PageNotFoundComponent,
    PageTransactionsComponent,
    DialogResultComponent,
    PageSigninComponent,
    PageSignupComponent,
    PageForgotComponent,
    PageConfirmComponent,
    Page404Component,
    Page500Component,
    PageNotFoundComponent
  ],
  entryComponents: [
    DialogResultComponent,
    DialogAddMemberComponent,
    DialogAcceptAndRejectComponent,
    DialogStartComponent
  ]
})
export class PagesModule {}
