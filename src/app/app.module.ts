import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { ServicesModule } from './services/services.module';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { UtilsModule } from './utils/utils.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesModule,
    UtilsModule
  ],
  declarations: [
    AppComponent,
    IndexComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
