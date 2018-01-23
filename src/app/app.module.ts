import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorComponent } from './misc/error/error.component';
import {AppRoutingModule} from './shared/modules/app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuardService} from './shared/services/auth-guard.service';
import {UtilitiesModule} from './utilities/utilities.module';
import { FooterComponent } from './page-navigation/footer/footer.component';
import {MaterialModule} from './shared/modules/material.module';
import {FirebaseModule} from './shared/modules/firebase.module';
import { ContactComponent } from './info/contact/contact.component';
import { ConditionsComponent } from './info/conditions/conditions.component';
import { DataSecurityComponent } from './info/data-security/data-security.component';
import {AccountResolverService} from './shared/services/account-resolver.service';
import { IndexComponent } from './index/index.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardToolbarComponent } from './dashboard/dashboard-toolbar/dashboard-toolbar.component';
import { DashboardSettingsComponent } from './dashboard/dashboard-settings/dashboard-settings.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FirebaseModule,
    UtilitiesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ErrorComponent,
    DashboardComponent,
    FooterComponent,
    ContactComponent,
    ConditionsComponent,
    DataSecurityComponent,
    IndexComponent,
    LandingComponent,
    DashboardToolbarComponent,
    DashboardSettingsComponent
  ],
  providers: [
    AuthGuardService,
    AccountResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
