import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService } from 'ng2-translate';

import { UserAccessGuardService } from './services/user-access-guard.service';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';

import { routes, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIModule } from './ui/ui.module';
import { NiComponentsModule } from './ni-components/ni-components.module';
import { PagesModule } from './pages/pages.module';

import { DefaultLayoutComponent } from './layouts/default/default.component';
import { ExtraLayoutComponent } from './layouts/extra/extra.component';

export function translateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
  declarations : [
    AppComponent,
    DefaultLayoutComponent,
    ExtraLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: false }),
    TranslateModule.forRoot(),
    AppRoutingModule,
    UIModule,
    NiComponentsModule,
    PagesModule
  ],
  providers: [
    UserAccessGuardService,
    AuthService,
    ApiService,
    TranslateService,
    {
      provide: TranslateLoader,
      useFactory: translateLoader,
      deps: [Http]
    }
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
