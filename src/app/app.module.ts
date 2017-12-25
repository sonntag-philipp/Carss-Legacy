import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {AppRoutingModule} from './app-routing.module';
import { IndexComponent } from './index/index.component';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
