import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { FooterComponent } from './page-navigation/footer/footer.component';
import { MaterialModule } from './shared/modules/material.module';
import { FirebaseModule } from './shared/modules/firebase.module';
import { InfoDialogComponent } from './misc/components/info-dialog/info-dialog.component';
import { MiscModule } from './misc/misc.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './page-navigation/toolbar/toolbar.component';
import { ToolbarService } from './shared/services/toolbar.service';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FirebaseModule,
    AppRoutingModule,
    MiscModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    InfoDialogComponent,
    ToolbarComponent,
    IndexComponent
  ],
  providers: [
    AuthGuardService,
    ToolbarService
  ],
  entryComponents: [
    InfoDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
