import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {AppRoutingModule} from './app-routing.module';
import { IndexComponent } from './index/index.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { SearchToolbarComponent } from './index/search-toolbar/search-toolbar.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuardService} from './auth-guard.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { ImpressumComponent } from './info/impressum/impressum.component';
import { AgbComponent } from './info/agb/agb.component';
import { DatenschutzComponent } from './info/datenschutz/datenschutz.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent,
    ErrorComponent,
    IndexComponent,
    SearchToolbarComponent,
    DashboardComponent,
    ImpressumComponent,
    AgbComponent,
    DatenschutzComponent
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
