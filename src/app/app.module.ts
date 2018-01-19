import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import {AppRoutingModule} from './app-routing.module';
import { IndexComponent } from './index/index.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuardService} from './shared/services/auth-guard.service';
import { ImpressumComponent } from './info/impressum/impressum.component';
import { AgbComponent } from './info/agb/agb.component';
import { DatenschutzComponent } from './info/datenschutz/datenschutz.component';
import {UtilitiesModule} from './utilities/utilities.module';
import { FooterComponent } from './footer/footer.component';
import {MaterialModule} from './material.module';
import {FirebaseModule} from './firebase.module';

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
    IndexComponent,
    DashboardComponent,
    ImpressumComponent,
    AgbComponent,
    DatenschutzComponent,
    FooterComponent
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
