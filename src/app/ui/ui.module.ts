import { NgModule }                  from '@angular/core';
import { CommonModule }              from '@angular/common';
import { HttpModule }                from '@angular/http';
import { RouterModule }              from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TranslateModule } from 'ng2-translate';

import { HorizontalNavbarComponent } from './components/horizontal-navbar/horizontal-navbar.component';
import { DialogGroupCreateComponent } from './components/horizontal-navbar/horizontal-navbar.component';
import { VerticalNavbarComponent }   from './components/vertical-navbar/vertical-navbar.component';
import { LogoComponent }             from './components/logo/logo.component';
import { MenuComponent }             from './components/menu/menu.component';
import { FooterComponent }           from './components/footer/footer.component';

@NgModule({
  declarations: [
    HorizontalNavbarComponent,
    VerticalNavbarComponent,
    LogoComponent,
    MenuComponent,
    FooterComponent,
    DialogGroupCreateComponent
  ],
  exports: [
    HorizontalNavbarComponent,
    VerticalNavbarComponent,
    LogoComponent,
    MenuComponent,
    FooterComponent,
    DialogGroupCreateComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    RouterModule,
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
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  entryComponents: [
    DialogGroupCreateComponent
  ]
})
export class UIModule { }
