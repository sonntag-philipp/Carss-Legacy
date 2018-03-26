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
import { MatButtonModule, MatCardModule, MatDividerModule, MatInputModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { BackendModule } from './backend/backend.module';
import { FrameModule } from './features/frame/frame.module';

@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule,
    MatInputModule,
    MatDividerModule,
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
    FrameModule
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
