import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import {AppRoutingModule} from './shared/modules/app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuardService} from './shared/services/auth-guard.service';
import {UtilitiesModule} from './utilities/utilities.module';
import { FooterComponent } from './footer/footer.component';
import {MaterialModule} from './shared/modules/material.module';
import {FirebaseModule} from './shared/modules/firebase.module';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { ContactComponent } from './info/contact/contact.component';
import { ConditionsComponent } from './info/conditions/conditions.component';
import { DataSecurityComponent } from './info/data-security/data-security.component';
import {AccountResolverService} from './shared/services/account-resolver.service';
import { IndexComponent } from './index/index.component';
import { IndexPublicComponent } from './index/index-public/index-public.component';

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
    SettingsComponent,
    ContactComponent,
    ConditionsComponent,
    DataSecurityComponent,
    IndexComponent,
    IndexPublicComponent
  ],
  providers: [
    AuthGuardService,
    AccountResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
