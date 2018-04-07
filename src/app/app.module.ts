import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesModule } from './services/services.module';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { UtilsModule } from './utils/utils.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatInputModule, MatProgressSpinnerModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { BackendModule } from './backend/backend.module';
import { FrameModule } from './features/frame/frame.module';
import { AgmCoreModule } from '@agm/core';
import { MarkdownModule } from 'angular2-markdown';

@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule,
    MatInputModule,
    MatDividerModule,
    MatProgressSpinnerModule,
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
    UtilsModule,
    MatButtonModule,
    BackendModule,
    FrameModule,
    MarkdownModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDif4IdA1F5l4jDiuEDv-xlAG3d-NnsJl8",
      libraries: ["places"]
    })
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
