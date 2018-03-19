import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarService } from './toolbar.service';
import { Globals } from './globals';
import { AuthGuardService } from './auth-guard.service';

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
    Globals
  ]
})
export class ServicesModule { }
