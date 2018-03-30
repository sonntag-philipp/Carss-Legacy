import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarService } from './toolbar.service';
import { AuthGuardService } from './auth-guard.service';
import { SessionService } from './session.service';
import { MapsService } from './maps.service';

/**
 * This module provides the services used in the entire application.
 * It only needs to be imported inside the app.module.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuardService,
    ToolbarService,
    SessionService,
    MapsService
  ]
})
export class ServicesModule { }
