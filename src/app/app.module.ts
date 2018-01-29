import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorComponent } from './misc/error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { FooterComponent } from './page-navigation/footer/footer.component';
import { MaterialModule } from './shared/modules/material.module';
import { FirebaseModule } from './shared/modules/firebase.module';
import { AccountResolverService } from './shared/services/account-resolver.service';
import { DashboardToolbarComponent } from './dashboard/dashboard-toolbar/dashboard-toolbar.component';
import { DashboardSettingsComponent } from './dashboard/dashboard-settings/dashboard-settings.component';
import { FooterXsComponent } from './page-navigation/footer-xs/footer-xs.component';
import { LoadingComponent } from './loading/loading.component';
import { DashboardDriveCardComponent } from './dashboard/dashboard-drive-card/dashboard-drive-card.component';
import { DashboardRideCardComponent } from './dashboard/dashboard-ride-card/dashboard-ride-card.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FirebaseModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ErrorComponent,
    DashboardComponent,
    FooterComponent,
    DashboardToolbarComponent,
    DashboardSettingsComponent,
    FooterXsComponent,
    LoadingComponent,
    DashboardDriveCardComponent,
    DashboardRideCardComponent
  ],
  providers: [
    AuthGuardService,
    AccountResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
